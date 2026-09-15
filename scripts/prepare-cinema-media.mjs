// Usage: node scripts/prepare-cinema-media.mjs /path/to/ffmpeg /path/to/local/videos
// Preserve the existing optimized 720p films; create lightweight still thumbnails.
import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
const [ffmpeg,sourceDirectory]=process.argv.slice(2);
if(!ffmpeg||!sourceDirectory)throw new Error('Provide ffmpeg and the original video directory');
const root=path.resolve(import.meta.dirname,'..');
const {videos}=JSON.parse(fs.readFileSync(path.join(root,'data/portfolio.json')));
fs.mkdirSync(path.join(root,'assets/portfolio/video'),{recursive:true});
for(const video of videos){
    const remote=/^https:/.test(video.src);
    const input=remote?video.src:path.join(root,video.src);
    if(!remote)fs.copyFileSync(path.join(sourceDirectory,path.basename(video.src)),input);
    const output=path.join(root,video.poster);
    if(fs.existsSync(output))continue;
    const args=['-hide_banner','-loglevel','error','-y',...(remote?['-rw_timeout','15000000']:[]),'-ss','3','-i',input,'-frames:v','1','-vf','scale=480:-2','-q:v','3',output];
    const result=spawnSync(ffmpeg,args,{timeout:60000,encoding:'utf8'});
    if(result.status!==0)throw new Error(`${video.title}: ${result.stderr||result.error}`);
    console.log(`${video.title}: poster ready`);
}

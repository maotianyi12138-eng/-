# Movement studies — image and playback provenance

The six exercise plates are newly posed, lit, shaded and rendered for this site; the animations, masks, apparatus, camera positions and code here were not copied from commercial collections, book illustrations or from the Form application.

The shared base human is the **53,514-vertex Form v2.1.0 derivative of MakeHuman**, directly reused as a CC0 graphical mesh. The source manifest declares `CC0-1.0`. Upstream credits the original rig and weight data to Data Collection AB, Joel Palmius and Jonas Hauquier. The six images show one movement variation each, from one fixed camera; the red markings are approximate educational emphasis, **not** measured activation or a visualization of individual muscle fibres.

- [Pinned upstream figure and manifest](https://github.com/blwsk/exercise-animations/tree/be16cb22c4ceb4ad134894250062fd0782410233/src/character/generated)
- [Form: source assets vs. separately authored code/equipment](https://github.com/blwsk/exercise-animations/blob/be16cb22c4ceb4ad134894250062fd0782410233/THIRD_PARTY_ASSETS.md)
- [MakeHuman's graphical-assets license](https://static.makehumancommunity.org/about/license.html) · [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)

To regenerate, download `figure.bin` and `figure.json` from the pinned link into a temporary build directory. Run `python source/render.py /path/to/mesh /path/to/output` with NumPy, Pillow with WebP support and a C++17 compiler. The generator verifies the binary SHA-256 and renders 36 joint poses per movement into one 6×6 sprite sheet and a tiny starting-pose image. Only the current movement's sheet is needed in the browser. No third-party scripts, tracking, streams or remote model requests are involved.

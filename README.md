<p align="center">
  <img src="public/brand.png" width="128" alt="OFS-Modding">
</p>

# OFS Mod Portal

Web portal for discovering verified Ore Factory Squad mods. Catalog metadata,
signing, thumbnails, and community submissions live separately in
[`ofs-mod-catalog`](https://github.com/OFS-Modding/ofs-mod-catalog).

The portal consumes the public readable index at runtime and never handles the
catalog private key. GitHub Pages publishes the static portal.

```powershell
npm test
```

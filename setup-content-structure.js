// setup-content-structure.js
import { mkdirSync, existsSync } from "fs";
import { join } from "path";

const countries = [
  "ae","ar","at","au","be","br","ca","ch","cn","cz","de","dk","eg","es","fi","fr",
  "hk","ie","il","in","it","jp","kr","mx","ng","nl","no","nz","ph","pl","qa","ru",
  "sa","se","sg","th","tr","tw","uk","us","vn"
];

const spokes = [
  "adsense","affiliate","ai","app","brand","business","creator","culture","device",
  "economy","education","energy","environment","esports","finance","health","mobility",
  "platform","policy","science","security","social","sports","tech"
];

const basePath = join(process.cwd(), "content");

for (const country of countries) {
  const countryPath = join(basePath, country);
  if (!existsSync(countryPath)) mkdirSync(countryPath, { recursive: true });

  for (const spoke of spokes) {
    const spokePath = join(countryPath, spoke);
    if (!existsSync(spokePath)) mkdirSync(spokePath, { recursive: true });
  }
}

console.log("✅ 39개국 × 24개 스포크 폴더 구조 생성 완료");

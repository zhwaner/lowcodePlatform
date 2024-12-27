#!/usr/bin/env zx
import {createRequire as __$$createRequireN} from 'module';var require=__$$createRequireN(import.meta.url);
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js
import { createRequire as __$$createRequire } from "module";
var require2;
var init_client = __esm({
  "node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js"() {
    require2 = __$$createRequire("file://C:\\Users\\zhwaner\\Desktop\\\u5370\u5BA2\u524D\u7AEF\\myProject\\lowcodePlatform\\node_modules\\.pnpm\\tsno@2.0.0\\node_modules\\tsno\\dist\\client.js");
  }
});

// scripts/utils.ts
function printObject(object, method = "log") {
  for (const [key, value] of Object.entries(object)) {
    console[method](`${key}:
${value}
`);
  }
}
var init_utils = __esm({
  "scripts/utils.ts"() {
    init_client();
  }
});

// scripts/check.ts
var check_exports = {};
import { $ } from "zx";
var init_check = __esm({
  async "scripts/check.ts"() {
    init_client();
    init_utils();
    await $`pnpm spellcheck`.catch((out) => {
      console.log(out);
      throw new Error(out.stdout);
    });
    await Promise.all([$`pnpm type-check`, $`pnpm lint:stage`]).catch((out) => {
      printObject(out);
      throw new Error(out.stdout);
    });
  }
});

// scripts/pre-commit.ts
init_client();
import { $ as $2 } from "zx";
console.log("\u5F00\u59CB\u6267\u884C\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30...\n");
await init_check().then(() => check_exports).catch(() => {
  throw new Error("\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30\u5931\u8D25, \u8BF7\u68C0\u67E5\u4EE3\u7801");
});
console.log('printf "\u68C0\u6D4B\u901A\u8FC7, \u521B\u5EFA commit \u4E2D...\n');
await $2`git add .`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3Rzbm9AMi4wLjAvbm9kZV9tb2R1bGVzL3Rzbm8vZGlzdC9jbGllbnQuanMiLCAic2NyaXB0cy91dGlscy50cyIsICJzY3JpcHRzL2NoZWNrLnRzIiwgInNjcmlwdHMvcHJlLWNvbW1pdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjcmVhdGVSZXF1aXJlIGFzIF9fJCRjcmVhdGVSZXF1aXJlfSBmcm9tICdtb2R1bGUnO3ZhciByZXF1aXJlPV9fJCRjcmVhdGVSZXF1aXJlKFwiZmlsZTovL0M6XFxcXFVzZXJzXFxcXHpod2FuZXJcXFxcRGVza3RvcFxcXFxcdTUzNzBcdTVCQTJcdTUyNERcdTdBRUZcXFxcbXlQcm9qZWN0XFxcXGxvd2NvZGVQbGF0Zm9ybVxcXFxub2RlX21vZHVsZXNcXFxcLnBucG1cXFxcdHNub0AyLjAuMFxcXFxub2RlX21vZHVsZXNcXFxcdHNub1xcXFxkaXN0XFxcXGNsaWVudC5qc1wiKTtcbmltcG9ydCB7XG4gIGNvbG9yc1xufSBmcm9tIFwiLi9jaHVuay1GSERYWE9LWS5qc1wiO1xuXG5cbi8vIHNyYy9jbGllbnQudHNcbnZhciBmZXRjaCA9ICh1cmwsIGluaXQpID0+IGltcG9ydChcIi4vc3JjLTRRN1E2N0MzLmpzXCIpLnRoZW4oKHJlcykgPT4gcmVzLmRlZmF1bHQodXJsLCBpbml0KSk7XG52YXIgYXhpb3MgPSAoY29uZmlnKSA9PiBpbXBvcnQoXCIuL2F4aW9zLVBJWjRDNVVaLmpzXCIpLnRoZW4oKHJlcykgPT4gcmVzLmRlZmF1bHQoY29uZmlnKSk7XG5leHBvcnQge1xuICBheGlvcyxcbiAgY29sb3JzLFxuICBmZXRjaFxufTtcbiIsICJpbXBvcnQgeyBQcm9jZXNzT3V0cHV0IH0gZnJvbSAnengvY29yZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmludE9iamVjdChcclxuICBvYmplY3Q6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgUHJvY2Vzc091dHB1dCxcclxuICBtZXRob2Q6ICdsb2cnIHwgJ3dhcm4nIHwgJ2Vycm9yJyA9ICdsb2cnXHJcbikge1xyXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iamVjdCkpIHtcclxuICAgICBcclxuICAgIGNvbnNvbGVbbWV0aG9kXShgJHtrZXl9OlxcbiR7dmFsdWV9XFxuYClcclxuICB9XHJcbn0iLCAiIyEvdXNyL2Jpbi9lbnYgenhcclxuXHJcbmltcG9ydCB0eXBlIHsgUHJvY2Vzc091dHB1dCB9IGZyb20gJ3p4J1xyXG5pbXBvcnQgeyAkIH0gZnJvbSAnengnXHJcbmltcG9ydCB7IHByaW50T2JqZWN0IH0gZnJvbSAnLi91dGlscy50cydcclxuXHJcbmF3YWl0ICRgcG5wbSBzcGVsbGNoZWNrYC5jYXRjaCgob3V0OiBQcm9jZXNzT3V0cHV0KSA9PiB7XHJcbiAgY29uc29sZS5sb2cob3V0KVxyXG5cclxuICB0aHJvdyBuZXcgRXJyb3Iob3V0LnN0ZG91dClcclxufSlcclxuXHJcbi8vIGF3YWl0IFByb21pc2UuYWxsKFskYHBucG0gdHlwZS1jaGVja2AsICRgcG5wbSBsaW50YF0pLmNhdGNoKChvdXQ6IFByb2Nlc3NPdXRwdXQpID0+IHtcclxuLy8gICBwcmludE9iamVjdChvdXQpXHJcbi8vICAgdGhyb3cgbmV3IEVycm9yKG91dC5zdGRvdXQpXHJcbi8vIH0pXHJcblxyXG4vLyBjaGVjayB0eXBlIGFuZCBzdGFnZVxyXG5hd2FpdCBQcm9taXNlLmFsbChbJGBwbnBtIHR5cGUtY2hlY2tgLCAkYHBucG0gbGludDpzdGFnZWBdKS5jYXRjaCgob3V0OiBQcm9jZXNzT3V0cHV0KSA9PiB7XHJcbiAgcHJpbnRPYmplY3Qob3V0KVxyXG4gIHRocm93IG5ldyBFcnJvcihvdXQuc3Rkb3V0KVxyXG59KSIsICIjIS91c3IvYmluL2VudiB6eFxyXG5cclxuaW1wb3J0IHsgJCB9IGZyb20gJ3p4J1xyXG5cclxuY29uc29sZS5sb2coJ1x1NUYwMFx1NTlDQlx1NjI2N1x1ODg0Q1x1NEVFM1x1NzgwMVx1OEQyOFx1OTFDRlx1OEJDNFx1NEYzMC4uLlxcbicpXHJcblxyXG5hd2FpdCBpbXBvcnQoJy4vY2hlY2snKS5jYXRjaCgoKSA9PiB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdcdTRFRTNcdTc4MDFcdThEMjhcdTkxQ0ZcdThCQzRcdTRGMzBcdTU5MzFcdThEMjUsIFx1OEJGN1x1NjhDMFx1NjdFNVx1NEVFM1x1NzgwMScpXHJcbn0pXHJcblxyXG5jb25zb2xlLmxvZygncHJpbnRmIFwiXHU2OEMwXHU2RDRCXHU5MDFBXHU4RkM3LCBcdTUyMUJcdTVFRkEgY29tbWl0IFx1NEUyRC4uLlxcbicpXHJcblxyXG5hd2FpdCAkYGdpdCBhZGQgLmAiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7OztBQUFBLFNBQVEsaUJBQWlCLHlCQUF3QjtBQUFqRCxJQUE4REE7QUFBOUQ7QUFBQTtBQUEwRCxJQUFJQSxXQUFRLGtCQUFrQixnS0FBNEk7QUFBQTtBQUFBOzs7QUNFN04sU0FBUyxZQUNkLFFBQ0EsU0FBbUMsT0FDbkM7QUFDQSxhQUFXLENBQUMsS0FBSyxLQUFLLEtBQUssT0FBTyxRQUFRLE1BQU0sR0FBRztBQUVqRCxZQUFRLFFBQVEsR0FBRztBQUFBLEVBQVM7QUFBQSxDQUFTO0FBQUEsRUFDdkM7QUFDRjtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBR0EsU0FBUyxTQUFTO0FBSGxCO0FBQUE7QUFBQTtBQUlBO0FBRUEsVUFBTSxtQkFBbUIsTUFBTSxDQUFDLFFBQXVCO0FBQ3JELGNBQVEsSUFBSSxHQUFHO0FBRWYsWUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNO0FBQUEsSUFDNUIsQ0FBQztBQVFELFVBQU0sUUFBUSxJQUFJLENBQUMsb0JBQW9CLGtCQUFrQixDQUFDLEVBQUUsTUFBTSxDQUFDLFFBQXVCO0FBQ3hGLGtCQUFZLEdBQUc7QUFDZixZQUFNLElBQUksTUFBTSxJQUFJLE1BQU07QUFBQSxJQUM1QixDQUFDO0FBQUE7QUFBQTs7O0FDckJEO0FBRUEsU0FBUyxLQUFBQyxVQUFTO0FBRWxCLFFBQVEsSUFBSSxtRUFBaUI7QUFFN0IsTUFBTSx1Q0FBa0IsTUFBTSxNQUFNO0FBQ2xDLFFBQU0sSUFBSSxNQUFNLGtGQUFpQjtBQUNuQyxDQUFDO0FBRUQsUUFBUSxJQUFJLG1FQUFnQztBQUU1QyxNQUFNQTsiLAogICJuYW1lcyI6IFsicmVxdWlyZSIsICIkIl0KfQo=

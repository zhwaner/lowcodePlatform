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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3Rzbm9AMi4wLjAvbm9kZV9tb2R1bGVzL3Rzbm8vZGlzdC9jbGllbnQuanMiLCAic2NyaXB0cy91dGlscy50cyIsICJzY3JpcHRzL2NoZWNrLnRzIiwgInNjcmlwdHMvcHJlLWNvbW1pdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjcmVhdGVSZXF1aXJlIGFzIF9fJCRjcmVhdGVSZXF1aXJlfSBmcm9tICdtb2R1bGUnO3ZhciByZXF1aXJlPV9fJCRjcmVhdGVSZXF1aXJlKFwiZmlsZTovL0M6XFxcXFVzZXJzXFxcXHpod2FuZXJcXFxcRGVza3RvcFxcXFxcdTUzNzBcdTVCQTJcdTUyNERcdTdBRUZcXFxcbXlQcm9qZWN0XFxcXGxvd2NvZGVQbGF0Zm9ybVxcXFxub2RlX21vZHVsZXNcXFxcLnBucG1cXFxcdHNub0AyLjAuMFxcXFxub2RlX21vZHVsZXNcXFxcdHNub1xcXFxkaXN0XFxcXGNsaWVudC5qc1wiKTtcbmltcG9ydCB7XG4gIGNvbG9yc1xufSBmcm9tIFwiLi9jaHVuay1GSERYWE9LWS5qc1wiO1xuXG5cbi8vIHNyYy9jbGllbnQudHNcbnZhciBmZXRjaCA9ICh1cmwsIGluaXQpID0+IGltcG9ydChcIi4vc3JjLTRRN1E2N0MzLmpzXCIpLnRoZW4oKHJlcykgPT4gcmVzLmRlZmF1bHQodXJsLCBpbml0KSk7XG52YXIgYXhpb3MgPSAoY29uZmlnKSA9PiBpbXBvcnQoXCIuL2F4aW9zLVBJWjRDNVVaLmpzXCIpLnRoZW4oKHJlcykgPT4gcmVzLmRlZmF1bHQoY29uZmlnKSk7XG5leHBvcnQge1xuICBheGlvcyxcbiAgY29sb3JzLFxuICBmZXRjaFxufTtcbiIsICJpbXBvcnQgeyBQcm9jZXNzT3V0cHV0IH0gZnJvbSAnengvY29yZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmludE9iamVjdChcclxuICBvYmplY3Q6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgUHJvY2Vzc091dHB1dCxcclxuICBtZXRob2Q6ICdsb2cnIHwgJ3dhcm4nIHwgJ2Vycm9yJyA9ICdsb2cnLFxyXG4pIHtcclxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmplY3QpKSB7XHJcbiAgICBjb25zb2xlW21ldGhvZF0oYCR7a2V5fTpcXG4ke3ZhbHVlfVxcbmApXHJcbiAgfVxyXG59XHJcbiIsICIjIS91c3IvYmluL2VudiB6eFxyXG5cclxuaW1wb3J0IHR5cGUgeyBQcm9jZXNzT3V0cHV0IH0gZnJvbSAnengnXHJcbmltcG9ydCB7ICQgfSBmcm9tICd6eCdcclxuaW1wb3J0IHsgcHJpbnRPYmplY3QgfSBmcm9tICcuL3V0aWxzLnRzJ1xyXG5cclxuYXdhaXQgJGBwbnBtIHNwZWxsY2hlY2tgLmNhdGNoKChvdXQ6IFByb2Nlc3NPdXRwdXQpID0+IHtcclxuICBjb25zb2xlLmxvZyhvdXQpXHJcblxyXG4gIHRocm93IG5ldyBFcnJvcihvdXQuc3Rkb3V0KVxyXG59KVxyXG5cclxuLy8gYXdhaXQgUHJvbWlzZS5hbGwoWyRgcG5wbSB0eXBlLWNoZWNrYCwgJGBwbnBtIGxpbnRgXSkuY2F0Y2goKG91dDogUHJvY2Vzc091dHB1dCkgPT4ge1xyXG4vLyAgIHByaW50T2JqZWN0KG91dClcclxuLy8gICB0aHJvdyBuZXcgRXJyb3Iob3V0LnN0ZG91dClcclxuLy8gfSlcclxuXHJcbi8vIGNoZWNrIHR5cGUgYW5kIHN0YWdlXHJcbmF3YWl0IFByb21pc2UuYWxsKFskYHBucG0gdHlwZS1jaGVja2AsICRgcG5wbSBsaW50OnN0YWdlYF0pLmNhdGNoKChvdXQ6IFByb2Nlc3NPdXRwdXQpID0+IHtcclxuICBwcmludE9iamVjdChvdXQpXHJcbiAgdGhyb3cgbmV3IEVycm9yKG91dC5zdGRvdXQpXHJcbn0pXHJcbiIsICIjIS91c3IvYmluL2VudiB6eFxyXG5cclxuaW1wb3J0IHsgJCB9IGZyb20gJ3p4J1xyXG5cclxuY29uc29sZS5sb2coJ1x1NUYwMFx1NTlDQlx1NjI2N1x1ODg0Q1x1NEVFM1x1NzgwMVx1OEQyOFx1OTFDRlx1OEJDNFx1NEYzMC4uLlxcbicpXHJcblxyXG5hd2FpdCBpbXBvcnQoJy4vY2hlY2snKS5jYXRjaCgoKSA9PiB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdcdTRFRTNcdTc4MDFcdThEMjhcdTkxQ0ZcdThCQzRcdTRGMzBcdTU5MzFcdThEMjUsIFx1OEJGN1x1NjhDMFx1NjdFNVx1NEVFM1x1NzgwMScpXHJcbn0pXHJcblxyXG5jb25zb2xlLmxvZygncHJpbnRmIFwiXHU2OEMwXHU2RDRCXHU5MDFBXHU4RkM3LCBcdTUyMUJcdTVFRkEgY29tbWl0IFx1NEUyRC4uLlxcbicpXHJcblxyXG5hd2FpdCAkYGdpdCBhZGQgLmBcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7QUFBQSxTQUFRLGlCQUFpQix5QkFBd0I7QUFBakQsSUFBOERBO0FBQTlEO0FBQUE7QUFBMEQsSUFBSUEsV0FBUSxrQkFBa0IsZ0tBQTRJO0FBQUE7QUFBQTs7O0FDRTdOLFNBQVMsWUFDZCxRQUNBLFNBQW1DLE9BQ25DO0FBQ0EsYUFBVyxDQUFDLEtBQUssS0FBSyxLQUFLLE9BQU8sUUFBUSxNQUFNLEdBQUc7QUFDakQsWUFBUSxRQUFRLEdBQUc7QUFBQSxFQUFTO0FBQUEsQ0FBUztBQUFBLEVBQ3ZDO0FBQ0Y7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUdBLFNBQVMsU0FBUztBQUhsQjtBQUFBO0FBQUE7QUFJQTtBQUVBLFVBQU0sbUJBQW1CLE1BQU0sQ0FBQyxRQUF1QjtBQUNyRCxjQUFRLElBQUksR0FBRztBQUVmLFlBQU0sSUFBSSxNQUFNLElBQUksTUFBTTtBQUFBLElBQzVCLENBQUM7QUFRRCxVQUFNLFFBQVEsSUFBSSxDQUFDLG9CQUFvQixrQkFBa0IsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxRQUF1QjtBQUN4RixrQkFBWSxHQUFHO0FBQ2YsWUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNO0FBQUEsSUFDNUIsQ0FBQztBQUFBO0FBQUE7OztBQ3JCRDtBQUVBLFNBQVMsS0FBQUMsVUFBUztBQUVsQixRQUFRLElBQUksbUVBQWlCO0FBRTdCLE1BQU0sdUNBQWtCLE1BQU0sTUFBTTtBQUNsQyxRQUFNLElBQUksTUFBTSxrRkFBaUI7QUFDbkMsQ0FBQztBQUVELFFBQVEsSUFBSSxtRUFBZ0M7QUFFNUMsTUFBTUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmUiLCAiJCJdCn0K

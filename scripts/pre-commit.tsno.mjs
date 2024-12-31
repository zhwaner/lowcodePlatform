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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3Rzbm9AMi4wLjAvbm9kZV9tb2R1bGVzL3Rzbm8vZGlzdC9jbGllbnQuanMiLCAic2NyaXB0cy91dGlscy50cyIsICJzY3JpcHRzL2NoZWNrLnRzIiwgInNjcmlwdHMvcHJlLWNvbW1pdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjcmVhdGVSZXF1aXJlIGFzIF9fJCRjcmVhdGVSZXF1aXJlfSBmcm9tICdtb2R1bGUnO3ZhciByZXF1aXJlPV9fJCRjcmVhdGVSZXF1aXJlKFwiZmlsZTovL0M6XFxcXFVzZXJzXFxcXHpod2FuZXJcXFxcRGVza3RvcFxcXFxcdTUzNzBcdTVCQTJcdTUyNERcdTdBRUZcXFxcbXlQcm9qZWN0XFxcXGxvd2NvZGVQbGF0Zm9ybVxcXFxub2RlX21vZHVsZXNcXFxcLnBucG1cXFxcdHNub0AyLjAuMFxcXFxub2RlX21vZHVsZXNcXFxcdHNub1xcXFxkaXN0XFxcXGNsaWVudC5qc1wiKTtcbmltcG9ydCB7XG4gIGNvbG9yc1xufSBmcm9tIFwiLi9jaHVuay1GSERYWE9LWS5qc1wiO1xuXG5cbi8vIHNyYy9jbGllbnQudHNcbnZhciBmZXRjaCA9ICh1cmwsIGluaXQpID0+IGltcG9ydChcIi4vc3JjLTRRN1E2N0MzLmpzXCIpLnRoZW4oKHJlcykgPT4gcmVzLmRlZmF1bHQodXJsLCBpbml0KSk7XG52YXIgYXhpb3MgPSAoY29uZmlnKSA9PiBpbXBvcnQoXCIuL2F4aW9zLVBJWjRDNVVaLmpzXCIpLnRoZW4oKHJlcykgPT4gcmVzLmRlZmF1bHQoY29uZmlnKSk7XG5leHBvcnQge1xuICBheGlvcyxcbiAgY29sb3JzLFxuICBmZXRjaFxufTtcbiIsICJpbXBvcnQgeyBQcm9jZXNzT3V0cHV0IH0gZnJvbSAnengvY29yZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmludE9iamVjdChcclxuICBvYmplY3Q6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgUHJvY2Vzc091dHB1dCxcclxuICBtZXRob2Q6ICdsb2cnIHwgJ3dhcm4nIHwgJ2Vycm9yJyA9ICdsb2cnLFxyXG4pIHtcclxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmplY3QpKSB7XHJcbiAgICBjb25zb2xlW21ldGhvZF0oYCR7a2V5fTpcXG4ke3ZhbHVlfVxcbmApXHJcbiAgfVxyXG59XHJcbiIsICIjIS91c3IvYmluL2VudiB6eFxyXG5cclxuaW1wb3J0IHR5cGUgeyBQcm9jZXNzT3V0cHV0IH0gZnJvbSAnengnXHJcbmltcG9ydCB7ICQgfSBmcm9tICd6eCdcclxuXHJcbmltcG9ydCB7IHByaW50T2JqZWN0IH0gZnJvbSAnLi91dGlscy50cydcclxuXHJcbmF3YWl0ICRgcG5wbSBzcGVsbGNoZWNrYC5jYXRjaCgob3V0OiBQcm9jZXNzT3V0cHV0KSA9PiB7XHJcbiAgY29uc29sZS5sb2cob3V0KVxyXG5cclxuICB0aHJvdyBuZXcgRXJyb3Iob3V0LnN0ZG91dClcclxufSlcclxuXHJcbi8vIGF3YWl0IFByb21pc2UuYWxsKFskYHBucG0gdHlwZS1jaGVja2AsICRgcG5wbSBsaW50YF0pLmNhdGNoKChvdXQ6IFByb2Nlc3NPdXRwdXQpID0+IHtcclxuLy8gICBwcmludE9iamVjdChvdXQpXHJcbi8vICAgdGhyb3cgbmV3IEVycm9yKG91dC5zdGRvdXQpXHJcbi8vIH0pXHJcblxyXG4vLyBjaGVjayB0eXBlIGFuZCBzdGFnZVxyXG5hd2FpdCBQcm9taXNlLmFsbChbJGBwbnBtIHR5cGUtY2hlY2tgLCAkYHBucG0gbGludDpzdGFnZWBdKS5jYXRjaCgob3V0OiBQcm9jZXNzT3V0cHV0KSA9PiB7XHJcbiAgcHJpbnRPYmplY3Qob3V0KVxyXG4gIHRocm93IG5ldyBFcnJvcihvdXQuc3Rkb3V0KVxyXG59KVxyXG4iLCAiIyEvdXNyL2Jpbi9lbnYgenhcclxuXHJcbmltcG9ydCB7ICQgfSBmcm9tICd6eCdcclxuXHJcbmNvbnNvbGUubG9nKCdcdTVGMDBcdTU5Q0JcdTYyNjdcdTg4NENcdTRFRTNcdTc4MDFcdThEMjhcdTkxQ0ZcdThCQzRcdTRGMzAuLi5cXG4nKVxyXG5cclxuYXdhaXQgaW1wb3J0KCcuL2NoZWNrJykuY2F0Y2goKCkgPT4ge1xyXG4gIHRocm93IG5ldyBFcnJvcignXHU0RUUzXHU3ODAxXHU4RDI4XHU5MUNGXHU4QkM0XHU0RjMwXHU1OTMxXHU4RDI1LCBcdThCRjdcdTY4QzBcdTY3RTVcdTRFRTNcdTc4MDEnKVxyXG59KVxyXG5cclxuY29uc29sZS5sb2coJ3ByaW50ZiBcIlx1NjhDMFx1NkQ0Qlx1OTAxQVx1OEZDNywgXHU1MjFCXHU1RUZBIGNvbW1pdCBcdTRFMkQuLi5cXG4nKVxyXG5cclxuYXdhaXQgJGBnaXQgYWRkIC5gXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7O0FBQUEsU0FBUSxpQkFBaUIseUJBQXdCO0FBQWpELElBQThEQTtBQUE5RDtBQUFBO0FBQTBELElBQUlBLFdBQVEsa0JBQWtCLGdLQUE0STtBQUFBO0FBQUE7OztBQ0U3TixTQUFTLFlBQ2QsUUFDQSxTQUFtQyxPQUNuQztBQUNBLGFBQVcsQ0FBQyxLQUFLLEtBQUssS0FBSyxPQUFPLFFBQVEsTUFBTSxHQUFHO0FBQ2pELFlBQVEsUUFBUSxHQUFHO0FBQUEsRUFBUztBQUFBLENBQVM7QUFBQSxFQUN2QztBQUNGO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFHQSxTQUFTLFNBQVM7QUFIbEI7QUFBQTtBQUFBO0FBS0E7QUFFQSxVQUFNLG1CQUFtQixNQUFNLENBQUMsUUFBdUI7QUFDckQsY0FBUSxJQUFJLEdBQUc7QUFFZixZQUFNLElBQUksTUFBTSxJQUFJLE1BQU07QUFBQSxJQUM1QixDQUFDO0FBUUQsVUFBTSxRQUFRLElBQUksQ0FBQyxvQkFBb0Isa0JBQWtCLENBQUMsRUFBRSxNQUFNLENBQUMsUUFBdUI7QUFDeEYsa0JBQVksR0FBRztBQUNmLFlBQU0sSUFBSSxNQUFNLElBQUksTUFBTTtBQUFBLElBQzVCLENBQUM7QUFBQTtBQUFBOzs7QUN0QkQ7QUFFQSxTQUFTLEtBQUFDLFVBQVM7QUFFbEIsUUFBUSxJQUFJLG1FQUFpQjtBQUU3QixNQUFNLHVDQUFrQixNQUFNLE1BQU07QUFDbEMsUUFBTSxJQUFJLE1BQU0sa0ZBQWlCO0FBQ25DLENBQUM7QUFFRCxRQUFRLElBQUksbUVBQWdDO0FBRTVDLE1BQU1BOyIsCiAgIm5hbWVzIjogWyJyZXF1aXJlIiwgIiQiXQp9Cg==

globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'file:///Users/marquis.abah/LoanIQ/node_modules/node-fetch-native/dist/polyfill.mjs';
import { defineEventHandler, handleCacheHeaders, isEvent, createEvent, getRequestHeader, splitCookiesString, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, getRequestHeaders, removeResponseHeader, createError, getResponseHeader, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file:///Users/marquis.abah/LoanIQ/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/marquis.abah/LoanIQ/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///Users/marquis.abah/LoanIQ/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///Users/marquis.abah/LoanIQ/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/marquis.abah/LoanIQ/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file:///Users/marquis.abah/LoanIQ/node_modules/scule/dist/index.mjs';
import { klona } from 'file:///Users/marquis.abah/LoanIQ/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/marquis.abah/LoanIQ/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///Users/marquis.abah/LoanIQ/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file:///Users/marquis.abah/LoanIQ/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/marquis.abah/LoanIQ/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/marquis.abah/LoanIQ/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47memory from 'file:///Users/marquis.abah/LoanIQ/node_modules/unstorage/drivers/memory.mjs';
import unstorage_47drivers_47lru_45cache from 'file:///Users/marquis.abah/LoanIQ/node_modules/unstorage/drivers/lru-cache.mjs';
import unstorage_47drivers_47fs_45lite from 'file:///Users/marquis.abah/LoanIQ/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/marquis.abah/LoanIQ/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///Users/marquis.abah/LoanIQ/node_modules/pathe/dist/index.mjs';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Users/marquis.abah/LoanIQ/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', unstorage_47drivers_47memory({"driver":"memory"}));
storage.mount('internal:nuxt:prerender:island', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('internal:nuxt:prerender:payload', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/Users/marquis.abah/LoanIQ/.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/marquis.abah/LoanIQ","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/marquis.abah/LoanIQ/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/marquis.abah/LoanIQ/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/marquis.abah/LoanIQ/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && entry.value) {
      _resolvePromise.catch((error) => {
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const isErrorPage = event.path.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const assets = {
  "/_redirects": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"12-GYFUR20kqoZbjqZ/p+Wm4vWBkkQ\"",
    "mtime": "2024-10-02T11:19:12.940Z",
    "size": 18,
    "path": "../../.output/public/_redirects"
  },
  "/_nuxt/AccountCreationSuccess.vue.bce604b8.js": {
    "type": "application/javascript",
    "etag": "\"45a-z/2DhN7t1Rsc8LHJ/MuA/PQWwHU\"",
    "mtime": "2024-10-02T11:19:12.906Z",
    "size": 1114,
    "path": "../../.output/public/_nuxt/AccountCreationSuccess.vue.bce604b8.js"
  },
  "/_nuxt/Toast.37d41b51.js": {
    "type": "application/javascript",
    "etag": "\"68c-luDrfx+LSB883Ew3hQzdsyIoRDA\"",
    "mtime": "2024-10-02T11:19:12.907Z",
    "size": 1676,
    "path": "../../.output/public/_nuxt/Toast.37d41b51.js"
  },
  "/_nuxt/Toast.452752a4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ac-KraCdT4ULvsVONOtAdMQ6+kZvg8\"",
    "mtime": "2024-10-02T11:19:12.907Z",
    "size": 172,
    "path": "../../.output/public/_nuxt/Toast.452752a4.css"
  },
  "/_nuxt/account-creation-success.0568ac96.js": {
    "type": "application/javascript",
    "etag": "\"eb-N8TeC6j2is/3ag5I2iy4NNLmt0k\"",
    "mtime": "2024-10-02T11:19:12.907Z",
    "size": 235,
    "path": "../../.output/public/_nuxt/account-creation-success.0568ac96.js"
  },
  "/_nuxt/account-success.3dc9491f.js": {
    "type": "application/javascript",
    "etag": "\"456-rBXtA8CWKYcPj6GAGt3YgrLPeFI\"",
    "mtime": "2024-10-02T11:19:12.907Z",
    "size": 1110,
    "path": "../../.output/public/_nuxt/account-success.3dc9491f.js"
  },
  "/_nuxt/accounts.02c1b3d7.svg": {
    "type": "image/svg+xml",
    "etag": "\"1c0-4sF12oy+6W/EOf6gfe2Q/kH0aqw\"",
    "mtime": "2024-10-02T11:19:12.907Z",
    "size": 448,
    "path": "../../.output/public/_nuxt/accounts.02c1b3d7.svg"
  },
  "/_nuxt/apple-store.3f9ae534.svg": {
    "type": "image/svg+xml",
    "etag": "\"58d3-AzUkL8M/2stRy+6gu09vmcZw2bs\"",
    "mtime": "2024-10-02T11:19:12.908Z",
    "size": 22739,
    "path": "../../.output/public/_nuxt/apple-store.3f9ae534.svg"
  },
  "/_nuxt/auth.541acd8e.js": {
    "type": "application/javascript",
    "etag": "\"53-OdkzJrbAGNrQlCc4J1XItFZaN0w\"",
    "mtime": "2024-10-02T11:19:12.907Z",
    "size": 83,
    "path": "../../.output/public/_nuxt/auth.541acd8e.js"
  },
  "/_nuxt/auth.dbcacb90.js": {
    "type": "application/javascript",
    "etag": "\"7f7-uhZzuw3gQ1Tf932DpGkgwWBfwMk\"",
    "mtime": "2024-10-02T11:19:12.907Z",
    "size": 2039,
    "path": "../../.output/public/_nuxt/auth.dbcacb90.js"
  },
  "/_nuxt/avatar.a35287db.png": {
    "type": "image/png",
    "etag": "\"32949-nkd2goC65MfK5RWKi3+nWnDI/OY\"",
    "mtime": "2024-10-02T11:19:12.909Z",
    "size": 207177,
    "path": "../../.output/public/_nuxt/avatar.a35287db.png"
  },
  "/_nuxt/avatar.cb7c6b23.js": {
    "type": "application/javascript",
    "etag": "\"6b-S813dcODHeo3rGRJCoAq26LtPds\"",
    "mtime": "2024-10-02T11:19:12.908Z",
    "size": 107,
    "path": "../../.output/public/_nuxt/avatar.cb7c6b23.js"
  },
  "/_nuxt/complete-profile.7c571bf7.png": {
    "type": "image/png",
    "etag": "\"8106-I4Dakkh/SetZtrbOCMA1rsQdroE\"",
    "mtime": "2024-10-02T11:19:12.908Z",
    "size": 33030,
    "path": "../../.output/public/_nuxt/complete-profile.7c571bf7.png"
  },
  "/_nuxt/create-password.5e9f7e69.js": {
    "type": "application/javascript",
    "etag": "\"17c1-dyTK81AVAFWyctwxJy9o4tVbbNw\"",
    "mtime": "2024-10-02T11:19:12.909Z",
    "size": 6081,
    "path": "../../.output/public/_nuxt/create-password.5e9f7e69.js"
  },
  "/_nuxt/create-pin-success.a766cfda.js": {
    "type": "application/javascript",
    "etag": "\"c4-D6xi7Bu9LbTONCP85Rvm41j72T0\"",
    "mtime": "2024-10-02T11:19:12.909Z",
    "size": 196,
    "path": "../../.output/public/_nuxt/create-pin-success.a766cfda.js"
  },
  "/_nuxt/create-pin.3a23ca49.js": {
    "type": "application/javascript",
    "etag": "\"bc-1Mt8sAIDYQeI4/jK2tnjteFxAEo\"",
    "mtime": "2024-10-02T11:19:12.909Z",
    "size": 188,
    "path": "../../.output/public/_nuxt/create-pin.3a23ca49.js"
  },
  "/_nuxt/dashboard.46707515.js": {
    "type": "application/javascript",
    "etag": "\"15401-O+o3tjD28EsXuCzgpQ9vm09C5FA\"",
    "mtime": "2024-10-02T11:19:12.910Z",
    "size": 87041,
    "path": "../../.output/public/_nuxt/dashboard.46707515.js"
  },
  "/_nuxt/dashboard.cd8d2c9a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"53-oaJ//rWWdsSplZT+isBxkNnsP2o\"",
    "mtime": "2024-10-02T11:19:12.909Z",
    "size": 83,
    "path": "../../.output/public/_nuxt/dashboard.cd8d2c9a.css"
  },
  "/_nuxt/default.3b5ac4c4.js": {
    "type": "application/javascript",
    "etag": "\"bb-eoaMtuH4OjelU+vSpTI/rLI0Cfk\"",
    "mtime": "2024-10-02T11:19:12.909Z",
    "size": 187,
    "path": "../../.output/public/_nuxt/default.3b5ac4c4.js"
  },
  "/_nuxt/entry.acad653c.js": {
    "type": "application/javascript",
    "etag": "\"ad176-4PLv++IVfXDHr6j2hRCLClXnyRc\"",
    "mtime": "2024-10-02T11:19:12.915Z",
    "size": 708982,
    "path": "../../.output/public/_nuxt/entry.acad653c.js"
  },
  "/_nuxt/entry.d5b8a977.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"bb8c-ltBgIvO+tI4IhGq84PgggRAhFXQ\"",
    "mtime": "2024-10-02T11:19:12.910Z",
    "size": 48012,
    "path": "../../.output/public/_nuxt/entry.d5b8a977.css"
  },
  "/_nuxt/error-404.95c28eb4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-L8dF9pJCW0qi7de8Az4GyBoTHvI\"",
    "mtime": "2024-10-02T11:19:12.910Z",
    "size": 3696,
    "path": "../../.output/public/_nuxt/error-404.95c28eb4.css"
  },
  "/_nuxt/error-404.ab9d0429.js": {
    "type": "application/javascript",
    "etag": "\"8f5-il7JjEgKv1Q/jzghai6BmbItSK8\"",
    "mtime": "2024-10-02T11:19:12.911Z",
    "size": 2293,
    "path": "../../.output/public/_nuxt/error-404.ab9d0429.js"
  },
  "/_nuxt/error-500.1415b849.js": {
    "type": "application/javascript",
    "etag": "\"77e-a9sq2l88lltNxw9yOuT9kDF9qOU\"",
    "mtime": "2024-10-02T11:19:12.911Z",
    "size": 1918,
    "path": "../../.output/public/_nuxt/error-500.1415b849.js"
  },
  "/_nuxt/error-500.e798523c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-QP983DB9m1oiDr87r1V1AYEhrfo\"",
    "mtime": "2024-10-02T11:19:12.911Z",
    "size": 2016,
    "path": "../../.output/public/_nuxt/error-500.e798523c.css"
  },
  "/_nuxt/existing-login.a8d8c94b.js": {
    "type": "application/javascript",
    "etag": "\"127b-G55UcJ/VpO7M93kwlF761X7iS4E\"",
    "mtime": "2024-10-02T11:19:12.911Z",
    "size": 4731,
    "path": "../../.output/public/_nuxt/existing-login.a8d8c94b.js"
  },
  "/_nuxt/eye-close.5b70a48a.svg": {
    "type": "image/svg+xml",
    "etag": "\"334-ZzF2dxZ6RH5Q0Xe2c1Egn1Q+rwE\"",
    "mtime": "2024-10-02T11:19:12.911Z",
    "size": 820,
    "path": "../../.output/public/_nuxt/eye-close.5b70a48a.svg"
  },
  "/_nuxt/eye-open.0980a840.svg": {
    "type": "image/svg+xml",
    "etag": "\"11d-ISD5VNQbzxOHfUnSwn3I6Sic8i4\"",
    "mtime": "2024-10-02T11:19:12.912Z",
    "size": 285,
    "path": "../../.output/public/_nuxt/eye-open.0980a840.svg"
  },
  "/_nuxt/forgot-password-verify-account.1104a6ad.js": {
    "type": "application/javascript",
    "etag": "\"80b-9T1o1fkpxpqkqi8XkRUt1WRdWBU\"",
    "mtime": "2024-10-02T11:19:12.912Z",
    "size": 2059,
    "path": "../../.output/public/_nuxt/forgot-password-verify-account.1104a6ad.js"
  },
  "/_nuxt/forgot-password.46149b90.js": {
    "type": "application/javascript",
    "etag": "\"e8e-PGH7V2dMblaAY6my17kG74zs2qo\"",
    "mtime": "2024-10-02T11:19:12.912Z",
    "size": 3726,
    "path": "../../.output/public/_nuxt/forgot-password.46149b90.js"
  },
  "/_nuxt/google-store.94cc0529.svg": {
    "type": "image/svg+xml",
    "etag": "\"59dc-qpxIb300kcRbgCzbJIMcIcFx9Ms\"",
    "mtime": "2024-10-02T11:19:12.912Z",
    "size": 23004,
    "path": "../../.output/public/_nuxt/google-store.94cc0529.svg"
  },
  "/_nuxt/group.72ce57e3.png": {
    "type": "image/png",
    "etag": "\"1dbbdb-9uzAnIfpjctTmVhld4FiOZcjZdE\"",
    "mtime": "2024-10-02T11:19:12.930Z",
    "size": 1948635,
    "path": "../../.output/public/_nuxt/group.72ce57e3.png"
  },
  "/_nuxt/home.b20617d9.svg": {
    "type": "image/svg+xml",
    "etag": "\"29d-PW0cE7J7pwL1b1mVVbcA8ER0Lz4\"",
    "mtime": "2024-10-02T11:19:12.912Z",
    "size": 669,
    "path": "../../.output/public/_nuxt/home.b20617d9.svg"
  },
  "/_nuxt/index.1350a070.js": {
    "type": "application/javascript",
    "etag": "\"157-dKr1dFi12GyIhIIdOT1FYBZVG4o\"",
    "mtime": "2024-10-02T11:19:12.913Z",
    "size": 343,
    "path": "../../.output/public/_nuxt/index.1350a070.js"
  },
  "/_nuxt/index.2e239ab9.js": {
    "type": "application/javascript",
    "etag": "\"157-dKr1dFi12GyIhIIdOT1FYBZVG4o\"",
    "mtime": "2024-10-02T11:19:12.913Z",
    "size": 343,
    "path": "../../.output/public/_nuxt/index.2e239ab9.js"
  },
  "/_nuxt/index.5d866219.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1cb-2Z6NKkEl+L6tXADaONipB4qDOpU\"",
    "mtime": "2024-10-02T11:19:12.913Z",
    "size": 459,
    "path": "../../.output/public/_nuxt/index.5d866219.css"
  },
  "/_nuxt/index.5e92ea01.js": {
    "type": "application/javascript",
    "etag": "\"59d5-t5a/AqTBZ0N37Rt7ZLWEAs7ISMs\"",
    "mtime": "2024-10-02T11:19:12.915Z",
    "size": 22997,
    "path": "../../.output/public/_nuxt/index.5e92ea01.js"
  },
  "/_nuxt/index.6e0aa031.js": {
    "type": "application/javascript",
    "etag": "\"157-mPjmy7CWkRq8AHNWwubMBrnKjas\"",
    "mtime": "2024-10-02T11:19:12.914Z",
    "size": 343,
    "path": "../../.output/public/_nuxt/index.6e0aa031.js"
  },
  "/_nuxt/index.76694af7.js": {
    "type": "application/javascript",
    "etag": "\"157-dKr1dFi12GyIhIIdOT1FYBZVG4o\"",
    "mtime": "2024-10-02T11:19:12.914Z",
    "size": 343,
    "path": "../../.output/public/_nuxt/index.76694af7.js"
  },
  "/_nuxt/index.b2331373.js": {
    "type": "application/javascript",
    "etag": "\"b7-dYBSLhvdOl7duMTQjHVegnEu8bs\"",
    "mtime": "2024-10-02T11:19:12.914Z",
    "size": 183,
    "path": "../../.output/public/_nuxt/index.b2331373.js"
  },
  "/_nuxt/invest.3ef231ac.svg": {
    "type": "image/svg+xml",
    "etag": "\"5b8-pIP/5zqDaTSozfc1FpWwkvXO68I\"",
    "mtime": "2024-10-02T11:19:12.914Z",
    "size": 1464,
    "path": "../../.output/public/_nuxt/invest.3ef231ac.svg"
  },
  "/_nuxt/loans.7918700a.svg": {
    "type": "image/svg+xml",
    "etag": "\"676-Qz/Hc5DnIAziwLvnNX7HA1pjP8g\"",
    "mtime": "2024-10-02T11:19:12.915Z",
    "size": 1654,
    "path": "../../.output/public/_nuxt/loans.7918700a.svg"
  },
  "/_nuxt/login.ceb1577c.js": {
    "type": "application/javascript",
    "etag": "\"126d-/VHwPLRvtWamsJuz15aiqk6sNnQ\"",
    "mtime": "2024-10-02T11:19:12.915Z",
    "size": 4717,
    "path": "../../.output/public/_nuxt/login.ceb1577c.js"
  },
  "/_nuxt/logo.0789a60f.png": {
    "type": "image/png",
    "etag": "\"7ea4-HE9xec0O3P4a/6+jlWaiuIDMf0o\"",
    "mtime": "2024-10-02T11:19:12.916Z",
    "size": 32420,
    "path": "../../.output/public/_nuxt/logo.0789a60f.png"
  },
  "/_nuxt/logo.42de3b68.js": {
    "type": "application/javascript",
    "etag": "\"69-+vypIB0FuRenuharcaqwXDnB6fc\"",
    "mtime": "2024-10-02T11:19:12.916Z",
    "size": 105,
    "path": "../../.output/public/_nuxt/logo.42de3b68.js"
  },
  "/_nuxt/logout.f3ca68c5.svg": {
    "type": "image/svg+xml",
    "etag": "\"335-hI4szw/E3UCmCK0zUwoMzf7v7EY\"",
    "mtime": "2024-10-02T11:19:12.917Z",
    "size": 821,
    "path": "../../.output/public/_nuxt/logout.f3ca68c5.svg"
  },
  "/_nuxt/master-card.0498ee2f.svg": {
    "type": "image/svg+xml",
    "etag": "\"447ae-NQn8wnoGeQZOgMaeJazgCs2uSbU\"",
    "mtime": "2024-10-02T11:19:12.919Z",
    "size": 280494,
    "path": "../../.output/public/_nuxt/master-card.0498ee2f.svg"
  },
  "/_nuxt/mastercard.76b1509b.png": {
    "type": "image/png",
    "etag": "\"38b3-TrqBbSGRY8rzl9Fm3wJk/QFI9zQ\"",
    "mtime": "2024-10-02T11:19:12.920Z",
    "size": 14515,
    "path": "../../.output/public/_nuxt/mastercard.76b1509b.png"
  },
  "/_nuxt/monster.d481fd0a.png": {
    "type": "image/png",
    "etag": "\"48f7-1PDG0WoF34sT2Qtm4YpqdaoNzaI\"",
    "mtime": "2024-10-02T11:19:12.917Z",
    "size": 18679,
    "path": "../../.output/public/_nuxt/monster.d481fd0a.png"
  },
  "/_nuxt/nuxt-link.ba81fce0.js": {
    "type": "application/javascript",
    "etag": "\"10fc-p/JT3sCtPs8WEY9Hcn0JqFenoL8\"",
    "mtime": "2024-10-02T11:19:12.917Z",
    "size": 4348,
    "path": "../../.output/public/_nuxt/nuxt-link.ba81fce0.js"
  },
  "/_nuxt/password-recovery.da1b676d.svg": {
    "type": "image/svg+xml",
    "etag": "\"622-4PwVafq/mY/T4Ms0pNkBoQ68fnI\"",
    "mtime": "2024-10-02T11:19:12.918Z",
    "size": 1570,
    "path": "../../.output/public/_nuxt/password-recovery.da1b676d.svg"
  },
  "/_nuxt/payments.91e65539.svg": {
    "type": "image/svg+xml",
    "etag": "\"515-3kYLeYbJYDqn6TNNrz6xAXsXOEU\"",
    "mtime": "2024-10-02T11:19:12.918Z",
    "size": 1301,
    "path": "../../.output/public/_nuxt/payments.91e65539.svg"
  },
  "/_nuxt/phone.604947f2.png": {
    "type": "image/png",
    "etag": "\"b4e7-DrjCKBNp/t6u4CWBNQQVpG+V/VI\"",
    "mtime": "2024-10-02T11:19:12.919Z",
    "size": 46311,
    "path": "../../.output/public/_nuxt/phone.604947f2.png"
  },
  "/_nuxt/re-enter-pin.fd5e2d6f.js": {
    "type": "application/javascript",
    "etag": "\"9da-W1Dyy3yj3NDely3ALDHig27HvP8\"",
    "mtime": "2024-10-02T11:19:12.919Z",
    "size": 2522,
    "path": "../../.output/public/_nuxt/re-enter-pin.fd5e2d6f.js"
  },
  "/_nuxt/recover-password.8614eb0b.js": {
    "type": "application/javascript",
    "etag": "\"78c-FiJHrlJhzX/oJ8CZesUyLD3rcfU\"",
    "mtime": "2024-10-02T11:19:12.919Z",
    "size": 1932,
    "path": "../../.output/public/_nuxt/recover-password.8614eb0b.js"
  },
  "/_nuxt/redirect.c8cebf63.js": {
    "type": "application/javascript",
    "etag": "\"297-Z1Tfw99J5htA3+5L+A/PojgIVnI\"",
    "mtime": "2024-10-02T11:19:12.919Z",
    "size": 663,
    "path": "../../.output/public/_nuxt/redirect.c8cebf63.js"
  },
  "/_nuxt/secure-account.65ded4bd.js": {
    "type": "application/javascript",
    "etag": "\"e1-sQJzTeDONnDkNCVecHktJ2ZXHLg\"",
    "mtime": "2024-10-02T11:19:12.920Z",
    "size": 225,
    "path": "../../.output/public/_nuxt/secure-account.65ded4bd.js"
  },
  "/_nuxt/secure-transactions.797a2e6e.js": {
    "type": "application/javascript",
    "etag": "\"a5c-kQh/bE5vQ/5M/Q86yUP1Lgiv+Y4\"",
    "mtime": "2024-10-02T11:19:12.920Z",
    "size": 2652,
    "path": "../../.output/public/_nuxt/secure-transactions.797a2e6e.js"
  },
  "/_nuxt/signup.24196ca2.js": {
    "type": "application/javascript",
    "etag": "\"bda-y5YRkjewhmRs/uDiYptbryn8VrQ\"",
    "mtime": "2024-10-02T11:19:12.920Z",
    "size": 3034,
    "path": "../../.output/public/_nuxt/signup.24196ca2.js"
  },
  "/_nuxt/success-check.fb678256.svg": {
    "type": "image/svg+xml",
    "etag": "\"4fc-ouafiiPS3msFnpeSYM9z/wQHKqE\"",
    "mtime": "2024-10-02T11:19:12.920Z",
    "size": 1276,
    "path": "../../.output/public/_nuxt/success-check.fb678256.svg"
  },
  "/_nuxt/support.01b4956d.svg": {
    "type": "image/svg+xml",
    "etag": "\"2ac-EAaF6kzVg04QGRvtUR+JvZBeEZo\"",
    "mtime": "2024-10-02T11:19:12.922Z",
    "size": 684,
    "path": "../../.output/public/_nuxt/support.01b4956d.svg"
  },
  "/_nuxt/support.b3e8dad0.js": {
    "type": "application/javascript",
    "etag": "\"165-ROVpx4kgchLDNrf7YBd9h181dYw\"",
    "mtime": "2024-10-02T11:19:12.921Z",
    "size": 357,
    "path": "../../.output/public/_nuxt/support.b3e8dad0.js"
  },
  "/_nuxt/todo.aaf19edc.png": {
    "type": "image/png",
    "etag": "\"3aa1-SBXv57rNpzV8Hv8naChuZcdZux8\"",
    "mtime": "2024-10-02T11:19:12.922Z",
    "size": 15009,
    "path": "../../.output/public/_nuxt/todo.aaf19edc.png"
  },
  "/_nuxt/verify-account.1a917bad.js": {
    "type": "application/javascript",
    "etag": "\"73-/OYbYtPebB+eUZqJ5wRPIfrN01E\"",
    "mtime": "2024-10-02T11:19:12.921Z",
    "size": 115,
    "path": "../../.output/public/_nuxt/verify-account.1a917bad.js"
  },
  "/_nuxt/verify-account.ab2f1cb2.svg": {
    "type": "image/svg+xml",
    "etag": "\"8ad-1Zg/i13gYUKLuz6kLpG8QAw+cdM\"",
    "mtime": "2024-10-02T11:19:12.921Z",
    "size": 2221,
    "path": "../../.output/public/_nuxt/verify-account.ab2f1cb2.svg"
  },
  "/_nuxt/verify-account.ab5d2651.js": {
    "type": "application/javascript",
    "etag": "\"7fc-JuRb3pXgCIcM9ahSI0s91+tyR/M\"",
    "mtime": "2024-10-02T11:19:12.921Z",
    "size": 2044,
    "path": "../../.output/public/_nuxt/verify-account.ab5d2651.js"
  },
  "/_nuxt/vue.f36acd1f.7f80b7f8.js": {
    "type": "application/javascript",
    "etag": "\"181-qsT+F6iVWeV9nx6ZWcntAteqxyM\"",
    "mtime": "2024-10-02T11:19:12.922Z",
    "size": 385,
    "path": "../../.output/public/_nuxt/vue.f36acd1f.7f80b7f8.js"
  },
  "/_nuxt/withdrawal.1ad7822d.png": {
    "type": "image/png",
    "etag": "\"7233-NqoufdHWd+p7XvWi8JVOFjrdQDo\"",
    "mtime": "2024-10-02T11:19:12.922Z",
    "size": 29235,
    "path": "../../.output/public/_nuxt/withdrawal.1ad7822d.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_DsYBAg = () => import('../renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/**', handler: _lazy_DsYBAg, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (...args) => {
    return _localFetch(...args).then(
      (response) => normalizeFetchResponse(response)
    );
  };
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { useRuntimeConfig as a, useStorage as b, getRouteRules as g, localFetch as l, useNitroApp as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map

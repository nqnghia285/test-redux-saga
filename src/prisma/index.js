
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal
} = require('@prisma/client/runtime/index')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.14.0
 * Query Engine version: 2b0c12756921c891fec4f68d9444e18c7d5d4a6a
 */
Prisma.prismaVersion = {
  client: "3.14.0",
  engine: "2b0c12756921c891fec4f68d9444e18c7d5d4a6a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'


const path = require('path')

const { findSync } = require('@prisma/client/runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "node_modules\\.prisma\\client",
    ".prisma\\client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname
/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.PersonScalarFieldEnum = makeEnum({
  id: 'id',
  fullname: 'fullname',
  gender: 'gender',
  phone: 'phone',
  email: 'email',
  address: 'address',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.CustomerScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  password: 'password',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LaptopScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  brand: 'brand',
  model: 'model',
  material: 'material',
  display: 'display',
  cpu: 'cpu',
  ram: 'ram',
  graphicCard: 'graphicCard',
  ports: 'ports',
  wifi: 'wifi',
  storage: 'storage',
  webcam: 'webcam',
  fans: 'fans',
  speakers: 'speakers',
  keyboard: 'keyboard',
  security: 'security',
  adapter: 'adapter',
  battery: 'battery',
  specialFeatures: 'specialFeatures',
  dimensionsAndWeight: 'dimensionsAndWeight',
  origin: 'origin',
  releaseDate: 'releaseDate',
  sold: 'sold',
  stopSelling: 'stopSelling',
  os: 'os',
  priceMapId: 'priceMapId',
  defaultImageId: 'defaultImageId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.CommentScalarFieldEnum = makeEnum({
  id: 'id',
  rank: 'rank',
  content: 'content',
  authorId: 'authorId',
  isStaff: 'isStaff',
  laptopId: 'laptopId',
  commentId: 'commentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PriceMapScalarFieldEnum = makeEnum({
  id: 'id',
  price: 'price',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.DiscountScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PurchaseScalarFieldEnum = makeEnum({
  id: 'id',
  customerId: 'customerId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PassageScalarFieldEnum = makeEnum({
  id: 'id',
  header: 'header',
  content: 'content',
  postId: 'postId'
});

exports.Prisma.PostScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  authorId: 'authorId',
  defaultImageId: 'defaultImageId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ImageScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  mimeType: 'mimeType',
  data: 'data',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.VideoScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  url: 'url',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.PersonOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  fullname: 'fullname',
  phone: 'phone',
  email: 'email',
  address: 'address'
});

exports.Prisma.CustomerOrderByRelevanceFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.UserOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  password: 'password'
});

exports.Prisma.LaptopOrderByRelevanceFieldEnum = makeEnum({
  title: 'title',
  brand: 'brand',
  model: 'model',
  material: 'material',
  display: 'display',
  cpu: 'cpu',
  ram: 'ram',
  graphicCard: 'graphicCard',
  ports: 'ports',
  wifi: 'wifi',
  storage: 'storage',
  webcam: 'webcam',
  fans: 'fans',
  speakers: 'speakers',
  keyboard: 'keyboard',
  security: 'security',
  adapter: 'adapter',
  battery: 'battery',
  specialFeatures: 'specialFeatures',
  dimensionsAndWeight: 'dimensionsAndWeight',
  origin: 'origin'
});

exports.Prisma.CommentOrderByRelevanceFieldEnum = makeEnum({
  content: 'content',
  authorId: 'authorId'
});

exports.Prisma.PurchaseOrderByRelevanceFieldEnum = makeEnum({
  customerId: 'customerId'
});

exports.Prisma.PassageOrderByRelevanceFieldEnum = makeEnum({
  header: 'header',
  content: 'content'
});

exports.Prisma.PostOrderByRelevanceFieldEnum = makeEnum({
  title: 'title',
  authorId: 'authorId'
});

exports.Prisma.ImageOrderByRelevanceFieldEnum = makeEnum({
  title: 'title'
});

exports.Prisma.VideoOrderByRelevanceFieldEnum = makeEnum({
  title: 'title',
  url: 'url'
});
exports.Gender = makeEnum({
  MALE: 'MALE',
  FEMALE: 'FEMALE'
});

exports.Role = makeEnum({
  ADMIN: 'ADMIN',
  STAFF: 'STAFF'
});

exports.OS = makeEnum({
  FREEDOS: 'FREEDOS',
  WINDOWS: 'WINDOWS',
  MACOS: 'MACOS',
  LINUX: 'LINUX',
  ANDROID: 'ANDROID'
});

exports.Rank = makeEnum({
  ONE: 'ONE',
  TWO: 'TWO',
  THREE: 'THREE',
  FOUR: 'FOUR',
  FIVE: 'FIVE'
});

exports.MimeType = makeEnum({
  gif: 'gif',
  jpeg: 'jpeg',
  pipeg: 'pipeg',
  png: 'png',
  svg: 'svg'
});

exports.Prisma.ModelName = makeEnum({
  Person: 'Person',
  Customer: 'Customer',
  User: 'User',
  Laptop: 'Laptop',
  Comment: 'Comment',
  PriceMap: 'PriceMap',
  Discount: 'Discount',
  Purchase: 'Purchase',
  Passage: 'Passage',
  Post: 'Post',
  Image: 'Image',
  Video: 'Video'
});

const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Ngo Quang Nghia\\Desktop\\workspace\\atom-laptop-nestjs-graphql-be\\node_modules\\@prisma\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "fullTextSearch",
      "extendedIndexes"
    ]
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\..\\.env",
    "schemaEnvPath": "..\\..\\..\\.env"
  },
  "relativePath": "..\\..\\..\\prisma",
  "clientVersion": "3.14.0",
  "engineVersion": "2b0c12756921c891fec4f68d9444e18c7d5d4a6a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql"
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('@prisma/client/runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})
const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "node_modules\\.prisma\\client\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "node_modules\\.prisma\\client\\schema.prisma")

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.4.1
 * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
 */
Prisma.prismaVersion = {
  client: "6.4.1",
  engine: "a9055b89e58b4b5bfb59600785423b1db3d0e75d"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.StaticContentScalarFieldEnum = {
  id: 'id',
  key: 'key',
  contentEn: 'contentEn',
  contentVn: 'contentVn',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ServiceScalarFieldEnum = {
  id: 'id',
  key: 'key',
  icon: 'icon',
  titleEn: 'titleEn',
  titleVn: 'titleVn',
  descriptionEn: 'descriptionEn',
  descriptionVn: 'descriptionVn',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  showOnHome: 'showOnHome',
  sortOrder: 'sortOrder'
};

exports.Prisma.TechnologyCategoryScalarFieldEnum = {
  id: 'id',
  nameEn: 'nameEn',
  nameVn: 'nameVn',
  name: 'name',
  key: 'key',
  sortOrder: 'sortOrder',
  createdAt: 'createdAt'
};

exports.Prisma.TechnologyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  category: 'category',
  categoryId: 'categoryId',
  createdAt: 'createdAt'
};

exports.Prisma.PortfolioItemScalarFieldEnum = {
  id: 'id',
  key: 'key',
  titleEn: 'titleEn',
  titleVn: 'titleVn',
  descriptionEn: 'descriptionEn',
  descriptionVn: 'descriptionVn',
  image: 'image',
  categoryKey: 'categoryKey',
  categoryId: 'categoryId',
  technologies: 'technologies',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  showOnHome: 'showOnHome',
  sortOrder: 'sortOrder',
  contentEn: 'contentEn',
  contentVn: 'contentVn',
  duration: 'duration'
};

exports.Prisma.PortfolioCategoryScalarFieldEnum = {
  id: 'id',
  nameEn: 'nameEn',
  nameVn: 'nameVn',
  name: 'name',
  key: 'key',
  sortOrder: 'sortOrder',
  createdAt: 'createdAt'
};

exports.Prisma.TeamMemberScalarFieldEnum = {
  id: 'id',
  name: 'name',
  roleEn: 'roleEn',
  roleVn: 'roleVn',
  bioEn: 'bioEn',
  bioVn: 'bioVn',
  avatar: 'avatar',
  level: 'level',
  top: 'top',
  right: 'right',
  size: 'size',
  delay: 'delay',
  createdAt: 'createdAt'
};

exports.Prisma.CompanyInfoScalarFieldEnum = {
  id: 'id',
  name: 'name',
  tagline: 'tagline',
  email: 'email',
  phone: 'phone',
  addressEn: 'addressEn',
  addressVn: 'addressVn',
  officeImage: 'officeImage',
  teamImage: 'teamImage',
  updatedAt: 'updatedAt'
};

exports.Prisma.StatScalarFieldEnum = {
  id: 'id',
  key: 'key',
  labelEn: 'labelEn',
  labelVn: 'labelVn',
  value: 'value',
  detailEn: 'detailEn',
  detailVn: 'detailVn'
};

exports.Prisma.ManagerScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  fullName: 'fullName',
  email: 'email',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ContactScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  subject: 'subject',
  message: 'message',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  descriptionEn: 'descriptionEn',
  descriptionVn: 'descriptionVn',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ModuleScalarFieldEnum = {
  id: 'id',
  nameEn: 'nameEn',
  nameVn: 'nameVn',
  code: 'code',
  descriptionEn: 'descriptionEn',
  descriptionVn: 'descriptionVn',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PermissionScalarFieldEnum = {
  id: 'id',
  nameEn: 'nameEn',
  nameVn: 'nameVn',
  code: 'code',
  descriptionEn: 'descriptionEn',
  descriptionVn: 'descriptionVn',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ModulePermissionScalarFieldEnum = {
  id: 'id',
  roleId: 'roleId',
  moduleId: 'moduleId',
  permissionId: 'permissionId',
  createdAt: 'createdAt'
};

exports.Prisma.ManagerOnRoleScalarFieldEnum = {
  managerId: 'managerId',
  roleId: 'roleId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.ManagerRole = exports.$Enums.ManagerRole = {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  STAFF: 'STAFF'
};

exports.Prisma.ModelName = {
  StaticContent: 'StaticContent',
  Service: 'Service',
  TechnologyCategory: 'TechnologyCategory',
  Technology: 'Technology',
  PortfolioItem: 'PortfolioItem',
  PortfolioCategory: 'PortfolioCategory',
  TeamMember: 'TeamMember',
  CompanyInfo: 'CompanyInfo',
  Stat: 'Stat',
  Manager: 'Manager',
  Contact: 'Contact',
  Role: 'Role',
  Module: 'Module',
  Permission: 'Permission',
  ModulePermission: 'ModulePermission',
  ManagerOnRole: 'ManagerOnRole'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

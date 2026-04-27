
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model StaticContent
 * 
 */
export type StaticContent = $Result.DefaultSelection<Prisma.$StaticContentPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model TechnologyCategory
 * 
 */
export type TechnologyCategory = $Result.DefaultSelection<Prisma.$TechnologyCategoryPayload>
/**
 * Model Technology
 * 
 */
export type Technology = $Result.DefaultSelection<Prisma.$TechnologyPayload>
/**
 * Model PortfolioItem
 * 
 */
export type PortfolioItem = $Result.DefaultSelection<Prisma.$PortfolioItemPayload>
/**
 * Model PortfolioCategory
 * 
 */
export type PortfolioCategory = $Result.DefaultSelection<Prisma.$PortfolioCategoryPayload>
/**
 * Model TeamMember
 * 
 */
export type TeamMember = $Result.DefaultSelection<Prisma.$TeamMemberPayload>
/**
 * Model CompanyInfo
 * 
 */
export type CompanyInfo = $Result.DefaultSelection<Prisma.$CompanyInfoPayload>
/**
 * Model Stat
 * 
 */
export type Stat = $Result.DefaultSelection<Prisma.$StatPayload>
/**
 * Model Manager
 * 
 */
export type Manager = $Result.DefaultSelection<Prisma.$ManagerPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Module
 * 
 */
export type Module = $Result.DefaultSelection<Prisma.$ModulePayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model ModulePermission
 * 
 */
export type ModulePermission = $Result.DefaultSelection<Prisma.$ModulePermissionPayload>
/**
 * Model ManagerOnRole
 * 
 */
export type ManagerOnRole = $Result.DefaultSelection<Prisma.$ManagerOnRolePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ManagerRole: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  STAFF: 'STAFF'
};

export type ManagerRole = (typeof ManagerRole)[keyof typeof ManagerRole]

}

export type ManagerRole = $Enums.ManagerRole

export const ManagerRole: typeof $Enums.ManagerRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more StaticContents
 * const staticContents = await prisma.staticContent.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more StaticContents
   * const staticContents = await prisma.staticContent.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.staticContent`: Exposes CRUD operations for the **StaticContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaticContents
    * const staticContents = await prisma.staticContent.findMany()
    * ```
    */
  get staticContent(): Prisma.StaticContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.technologyCategory`: Exposes CRUD operations for the **TechnologyCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TechnologyCategories
    * const technologyCategories = await prisma.technologyCategory.findMany()
    * ```
    */
  get technologyCategory(): Prisma.TechnologyCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.technology`: Exposes CRUD operations for the **Technology** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Technologies
    * const technologies = await prisma.technology.findMany()
    * ```
    */
  get technology(): Prisma.TechnologyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portfolioItem`: Exposes CRUD operations for the **PortfolioItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortfolioItems
    * const portfolioItems = await prisma.portfolioItem.findMany()
    * ```
    */
  get portfolioItem(): Prisma.PortfolioItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portfolioCategory`: Exposes CRUD operations for the **PortfolioCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortfolioCategories
    * const portfolioCategories = await prisma.portfolioCategory.findMany()
    * ```
    */
  get portfolioCategory(): Prisma.PortfolioCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamMember`: Exposes CRUD operations for the **TeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMember.findMany()
    * ```
    */
  get teamMember(): Prisma.TeamMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyInfo`: Exposes CRUD operations for the **CompanyInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyInfos
    * const companyInfos = await prisma.companyInfo.findMany()
    * ```
    */
  get companyInfo(): Prisma.CompanyInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stat`: Exposes CRUD operations for the **Stat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stats
    * const stats = await prisma.stat.findMany()
    * ```
    */
  get stat(): Prisma.StatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.manager`: Exposes CRUD operations for the **Manager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Managers
    * const managers = await prisma.manager.findMany()
    * ```
    */
  get manager(): Prisma.ManagerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.ModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modulePermission`: Exposes CRUD operations for the **ModulePermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModulePermissions
    * const modulePermissions = await prisma.modulePermission.findMany()
    * ```
    */
  get modulePermission(): Prisma.ModulePermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.managerOnRole`: Exposes CRUD operations for the **ManagerOnRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ManagerOnRoles
    * const managerOnRoles = await prisma.managerOnRole.findMany()
    * ```
    */
  get managerOnRole(): Prisma.ManagerOnRoleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "staticContent" | "service" | "technologyCategory" | "technology" | "portfolioItem" | "portfolioCategory" | "teamMember" | "companyInfo" | "stat" | "manager" | "contact" | "role" | "module" | "permission" | "modulePermission" | "managerOnRole"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      StaticContent: {
        payload: Prisma.$StaticContentPayload<ExtArgs>
        fields: Prisma.StaticContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaticContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaticContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload>
          }
          findFirst: {
            args: Prisma.StaticContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaticContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload>
          }
          findMany: {
            args: Prisma.StaticContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload>[]
          }
          create: {
            args: Prisma.StaticContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload>
          }
          createMany: {
            args: Prisma.StaticContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaticContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload>[]
          }
          delete: {
            args: Prisma.StaticContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload>
          }
          update: {
            args: Prisma.StaticContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload>
          }
          deleteMany: {
            args: Prisma.StaticContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaticContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaticContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload>[]
          }
          upsert: {
            args: Prisma.StaticContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload>
          }
          aggregate: {
            args: Prisma.StaticContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaticContent>
          }
          groupBy: {
            args: Prisma.StaticContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaticContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaticContentCountArgs<ExtArgs>
            result: $Utils.Optional<StaticContentCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      TechnologyCategory: {
        payload: Prisma.$TechnologyCategoryPayload<ExtArgs>
        fields: Prisma.TechnologyCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TechnologyCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TechnologyCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyCategoryPayload>
          }
          findFirst: {
            args: Prisma.TechnologyCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TechnologyCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyCategoryPayload>
          }
          findMany: {
            args: Prisma.TechnologyCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyCategoryPayload>[]
          }
          create: {
            args: Prisma.TechnologyCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyCategoryPayload>
          }
          createMany: {
            args: Prisma.TechnologyCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TechnologyCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyCategoryPayload>[]
          }
          delete: {
            args: Prisma.TechnologyCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyCategoryPayload>
          }
          update: {
            args: Prisma.TechnologyCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyCategoryPayload>
          }
          deleteMany: {
            args: Prisma.TechnologyCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TechnologyCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TechnologyCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyCategoryPayload>[]
          }
          upsert: {
            args: Prisma.TechnologyCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyCategoryPayload>
          }
          aggregate: {
            args: Prisma.TechnologyCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTechnologyCategory>
          }
          groupBy: {
            args: Prisma.TechnologyCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechnologyCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TechnologyCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<TechnologyCategoryCountAggregateOutputType> | number
          }
        }
      }
      Technology: {
        payload: Prisma.$TechnologyPayload<ExtArgs>
        fields: Prisma.TechnologyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TechnologyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TechnologyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>
          }
          findFirst: {
            args: Prisma.TechnologyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TechnologyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>
          }
          findMany: {
            args: Prisma.TechnologyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>[]
          }
          create: {
            args: Prisma.TechnologyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>
          }
          createMany: {
            args: Prisma.TechnologyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TechnologyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>[]
          }
          delete: {
            args: Prisma.TechnologyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>
          }
          update: {
            args: Prisma.TechnologyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>
          }
          deleteMany: {
            args: Prisma.TechnologyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TechnologyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TechnologyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>[]
          }
          upsert: {
            args: Prisma.TechnologyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>
          }
          aggregate: {
            args: Prisma.TechnologyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTechnology>
          }
          groupBy: {
            args: Prisma.TechnologyGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechnologyGroupByOutputType>[]
          }
          count: {
            args: Prisma.TechnologyCountArgs<ExtArgs>
            result: $Utils.Optional<TechnologyCountAggregateOutputType> | number
          }
        }
      }
      PortfolioItem: {
        payload: Prisma.$PortfolioItemPayload<ExtArgs>
        fields: Prisma.PortfolioItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          findFirst: {
            args: Prisma.PortfolioItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          findMany: {
            args: Prisma.PortfolioItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>[]
          }
          create: {
            args: Prisma.PortfolioItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          createMany: {
            args: Prisma.PortfolioItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>[]
          }
          delete: {
            args: Prisma.PortfolioItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          update: {
            args: Prisma.PortfolioItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortfolioItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>[]
          }
          upsert: {
            args: Prisma.PortfolioItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          aggregate: {
            args: Prisma.PortfolioItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolioItem>
          }
          groupBy: {
            args: Prisma.PortfolioItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioItemCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioItemCountAggregateOutputType> | number
          }
        }
      }
      PortfolioCategory: {
        payload: Prisma.$PortfolioCategoryPayload<ExtArgs>
        fields: Prisma.PortfolioCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload>
          }
          findFirst: {
            args: Prisma.PortfolioCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload>
          }
          findMany: {
            args: Prisma.PortfolioCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload>[]
          }
          create: {
            args: Prisma.PortfolioCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload>
          }
          createMany: {
            args: Prisma.PortfolioCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload>[]
          }
          delete: {
            args: Prisma.PortfolioCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload>
          }
          update: {
            args: Prisma.PortfolioCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortfolioCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload>[]
          }
          upsert: {
            args: Prisma.PortfolioCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload>
          }
          aggregate: {
            args: Prisma.PortfolioCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolioCategory>
          }
          groupBy: {
            args: Prisma.PortfolioCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioCategoryCountAggregateOutputType> | number
          }
        }
      }
      TeamMember: {
        payload: Prisma.$TeamMemberPayload<ExtArgs>
        fields: Prisma.TeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findFirst: {
            args: Prisma.TeamMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findMany: {
            args: Prisma.TeamMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          create: {
            args: Prisma.TeamMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          createMany: {
            args: Prisma.TeamMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          delete: {
            args: Prisma.TeamMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          update: {
            args: Prisma.TeamMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.TeamMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          upsert: {
            args: Prisma.TeamMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          aggregate: {
            args: Prisma.TeamMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamMember>
          }
          groupBy: {
            args: Prisma.TeamMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamMemberCountArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberCountAggregateOutputType> | number
          }
        }
      }
      CompanyInfo: {
        payload: Prisma.$CompanyInfoPayload<ExtArgs>
        fields: Prisma.CompanyInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>
          }
          findFirst: {
            args: Prisma.CompanyInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>
          }
          findMany: {
            args: Prisma.CompanyInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>[]
          }
          create: {
            args: Prisma.CompanyInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>
          }
          createMany: {
            args: Prisma.CompanyInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>[]
          }
          delete: {
            args: Prisma.CompanyInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>
          }
          update: {
            args: Prisma.CompanyInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>
          }
          deleteMany: {
            args: Prisma.CompanyInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>[]
          }
          upsert: {
            args: Prisma.CompanyInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>
          }
          aggregate: {
            args: Prisma.CompanyInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyInfo>
          }
          groupBy: {
            args: Prisma.CompanyInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyInfoCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyInfoCountAggregateOutputType> | number
          }
        }
      }
      Stat: {
        payload: Prisma.$StatPayload<ExtArgs>
        fields: Prisma.StatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>
          }
          findFirst: {
            args: Prisma.StatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>
          }
          findMany: {
            args: Prisma.StatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>[]
          }
          create: {
            args: Prisma.StatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>
          }
          createMany: {
            args: Prisma.StatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>[]
          }
          delete: {
            args: Prisma.StatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>
          }
          update: {
            args: Prisma.StatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>
          }
          deleteMany: {
            args: Prisma.StatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>[]
          }
          upsert: {
            args: Prisma.StatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>
          }
          aggregate: {
            args: Prisma.StatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStat>
          }
          groupBy: {
            args: Prisma.StatGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatCountArgs<ExtArgs>
            result: $Utils.Optional<StatCountAggregateOutputType> | number
          }
        }
      }
      Manager: {
        payload: Prisma.$ManagerPayload<ExtArgs>
        fields: Prisma.ManagerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManagerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManagerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          findFirst: {
            args: Prisma.ManagerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManagerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          findMany: {
            args: Prisma.ManagerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>[]
          }
          create: {
            args: Prisma.ManagerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          createMany: {
            args: Prisma.ManagerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManagerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>[]
          }
          delete: {
            args: Prisma.ManagerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          update: {
            args: Prisma.ManagerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          deleteMany: {
            args: Prisma.ManagerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManagerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ManagerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>[]
          }
          upsert: {
            args: Prisma.ManagerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          aggregate: {
            args: Prisma.ManagerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManager>
          }
          groupBy: {
            args: Prisma.ManagerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManagerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManagerCountArgs<ExtArgs>
            result: $Utils.Optional<ManagerCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Module: {
        payload: Prisma.$ModulePayload<ExtArgs>
        fields: Prisma.ModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findFirst: {
            args: Prisma.ModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findMany: {
            args: Prisma.ModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          create: {
            args: Prisma.ModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          createMany: {
            args: Prisma.ModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          delete: {
            args: Prisma.ModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          update: {
            args: Prisma.ModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          deleteMany: {
            args: Prisma.ModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          upsert: {
            args: Prisma.ModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.ModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      ModulePermission: {
        payload: Prisma.$ModulePermissionPayload<ExtArgs>
        fields: Prisma.ModulePermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModulePermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModulePermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePermissionPayload>
          }
          findFirst: {
            args: Prisma.ModulePermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModulePermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePermissionPayload>
          }
          findMany: {
            args: Prisma.ModulePermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePermissionPayload>[]
          }
          create: {
            args: Prisma.ModulePermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePermissionPayload>
          }
          createMany: {
            args: Prisma.ModulePermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModulePermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePermissionPayload>[]
          }
          delete: {
            args: Prisma.ModulePermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePermissionPayload>
          }
          update: {
            args: Prisma.ModulePermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePermissionPayload>
          }
          deleteMany: {
            args: Prisma.ModulePermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModulePermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModulePermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePermissionPayload>[]
          }
          upsert: {
            args: Prisma.ModulePermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePermissionPayload>
          }
          aggregate: {
            args: Prisma.ModulePermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModulePermission>
          }
          groupBy: {
            args: Prisma.ModulePermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModulePermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModulePermissionCountArgs<ExtArgs>
            result: $Utils.Optional<ModulePermissionCountAggregateOutputType> | number
          }
        }
      }
      ManagerOnRole: {
        payload: Prisma.$ManagerOnRolePayload<ExtArgs>
        fields: Prisma.ManagerOnRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManagerOnRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerOnRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManagerOnRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerOnRolePayload>
          }
          findFirst: {
            args: Prisma.ManagerOnRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerOnRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManagerOnRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerOnRolePayload>
          }
          findMany: {
            args: Prisma.ManagerOnRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerOnRolePayload>[]
          }
          create: {
            args: Prisma.ManagerOnRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerOnRolePayload>
          }
          createMany: {
            args: Prisma.ManagerOnRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManagerOnRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerOnRolePayload>[]
          }
          delete: {
            args: Prisma.ManagerOnRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerOnRolePayload>
          }
          update: {
            args: Prisma.ManagerOnRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerOnRolePayload>
          }
          deleteMany: {
            args: Prisma.ManagerOnRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManagerOnRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ManagerOnRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerOnRolePayload>[]
          }
          upsert: {
            args: Prisma.ManagerOnRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerOnRolePayload>
          }
          aggregate: {
            args: Prisma.ManagerOnRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManagerOnRole>
          }
          groupBy: {
            args: Prisma.ManagerOnRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManagerOnRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManagerOnRoleCountArgs<ExtArgs>
            result: $Utils.Optional<ManagerOnRoleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    staticContent?: StaticContentOmit
    service?: ServiceOmit
    technologyCategory?: TechnologyCategoryOmit
    technology?: TechnologyOmit
    portfolioItem?: PortfolioItemOmit
    portfolioCategory?: PortfolioCategoryOmit
    teamMember?: TeamMemberOmit
    companyInfo?: CompanyInfoOmit
    stat?: StatOmit
    manager?: ManagerOmit
    contact?: ContactOmit
    role?: RoleOmit
    module?: ModuleOmit
    permission?: PermissionOmit
    modulePermission?: ModulePermissionOmit
    managerOnRole?: ManagerOnRoleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TechnologyCategoryCountOutputType
   */

  export type TechnologyCategoryCountOutputType = {
    items: number
  }

  export type TechnologyCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | TechnologyCategoryCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * TechnologyCategoryCountOutputType without action
   */
  export type TechnologyCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnologyCategoryCountOutputType
     */
    select?: TechnologyCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TechnologyCategoryCountOutputType without action
   */
  export type TechnologyCategoryCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnologyWhereInput
  }


  /**
   * Count Type PortfolioCategoryCountOutputType
   */

  export type PortfolioCategoryCountOutputType = {
    items: number
  }

  export type PortfolioCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PortfolioCategoryCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * PortfolioCategoryCountOutputType without action
   */
  export type PortfolioCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCategoryCountOutputType
     */
    select?: PortfolioCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PortfolioCategoryCountOutputType without action
   */
  export type PortfolioCategoryCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioItemWhereInput
  }


  /**
   * Count Type ManagerCountOutputType
   */

  export type ManagerCountOutputType = {
    roles: number
  }

  export type ManagerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | ManagerCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * ManagerCountOutputType without action
   */
  export type ManagerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerCountOutputType
     */
    select?: ManagerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ManagerCountOutputType without action
   */
  export type ManagerCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagerOnRoleWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    managers: number
    modulePermissions: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managers?: boolean | RoleCountOutputTypeCountManagersArgs
    modulePermissions?: boolean | RoleCountOutputTypeCountModulePermissionsArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountManagersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagerOnRoleWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountModulePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModulePermissionWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    modulePermissions: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulePermissions?: boolean | ModuleCountOutputTypeCountModulePermissionsArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountModulePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModulePermissionWhereInput
  }


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    modulePermissions: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulePermissions?: boolean | PermissionCountOutputTypeCountModulePermissionsArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountModulePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModulePermissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model StaticContent
   */

  export type AggregateStaticContent = {
    _count: StaticContentCountAggregateOutputType | null
    _min: StaticContentMinAggregateOutputType | null
    _max: StaticContentMaxAggregateOutputType | null
  }

  export type StaticContentMinAggregateOutputType = {
    id: string | null
    key: string | null
    contentEn: string | null
    contentVn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaticContentMaxAggregateOutputType = {
    id: string | null
    key: string | null
    contentEn: string | null
    contentVn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaticContentCountAggregateOutputType = {
    id: number
    key: number
    contentEn: number
    contentVn: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StaticContentMinAggregateInputType = {
    id?: true
    key?: true
    contentEn?: true
    contentVn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaticContentMaxAggregateInputType = {
    id?: true
    key?: true
    contentEn?: true
    contentVn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaticContentCountAggregateInputType = {
    id?: true
    key?: true
    contentEn?: true
    contentVn?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StaticContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaticContent to aggregate.
     */
    where?: StaticContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticContents to fetch.
     */
    orderBy?: StaticContentOrderByWithRelationInput | StaticContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaticContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaticContents
    **/
    _count?: true | StaticContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaticContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaticContentMaxAggregateInputType
  }

  export type GetStaticContentAggregateType<T extends StaticContentAggregateArgs> = {
        [P in keyof T & keyof AggregateStaticContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaticContent[P]>
      : GetScalarType<T[P], AggregateStaticContent[P]>
  }




  export type StaticContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaticContentWhereInput
    orderBy?: StaticContentOrderByWithAggregationInput | StaticContentOrderByWithAggregationInput[]
    by: StaticContentScalarFieldEnum[] | StaticContentScalarFieldEnum
    having?: StaticContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaticContentCountAggregateInputType | true
    _min?: StaticContentMinAggregateInputType
    _max?: StaticContentMaxAggregateInputType
  }

  export type StaticContentGroupByOutputType = {
    id: string
    key: string
    contentEn: string
    contentVn: string
    createdAt: Date
    updatedAt: Date
    _count: StaticContentCountAggregateOutputType | null
    _min: StaticContentMinAggregateOutputType | null
    _max: StaticContentMaxAggregateOutputType | null
  }

  type GetStaticContentGroupByPayload<T extends StaticContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaticContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaticContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaticContentGroupByOutputType[P]>
            : GetScalarType<T[P], StaticContentGroupByOutputType[P]>
        }
      >
    >


  export type StaticContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    contentEn?: boolean
    contentVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["staticContent"]>

  export type StaticContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    contentEn?: boolean
    contentVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["staticContent"]>

  export type StaticContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    contentEn?: boolean
    contentVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["staticContent"]>

  export type StaticContentSelectScalar = {
    id?: boolean
    key?: boolean
    contentEn?: boolean
    contentVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StaticContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "contentEn" | "contentVn" | "createdAt" | "updatedAt", ExtArgs["result"]["staticContent"]>

  export type $StaticContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaticContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      contentEn: string
      contentVn: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["staticContent"]>
    composites: {}
  }

  type StaticContentGetPayload<S extends boolean | null | undefined | StaticContentDefaultArgs> = $Result.GetResult<Prisma.$StaticContentPayload, S>

  type StaticContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaticContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaticContentCountAggregateInputType | true
    }

  export interface StaticContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaticContent'], meta: { name: 'StaticContent' } }
    /**
     * Find zero or one StaticContent that matches the filter.
     * @param {StaticContentFindUniqueArgs} args - Arguments to find a StaticContent
     * @example
     * // Get one StaticContent
     * const staticContent = await prisma.staticContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaticContentFindUniqueArgs>(args: SelectSubset<T, StaticContentFindUniqueArgs<ExtArgs>>): Prisma__StaticContentClient<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one StaticContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaticContentFindUniqueOrThrowArgs} args - Arguments to find a StaticContent
     * @example
     * // Get one StaticContent
     * const staticContent = await prisma.staticContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaticContentFindUniqueOrThrowArgs>(args: SelectSubset<T, StaticContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaticContentClient<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first StaticContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticContentFindFirstArgs} args - Arguments to find a StaticContent
     * @example
     * // Get one StaticContent
     * const staticContent = await prisma.staticContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaticContentFindFirstArgs>(args?: SelectSubset<T, StaticContentFindFirstArgs<ExtArgs>>): Prisma__StaticContentClient<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first StaticContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticContentFindFirstOrThrowArgs} args - Arguments to find a StaticContent
     * @example
     * // Get one StaticContent
     * const staticContent = await prisma.staticContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaticContentFindFirstOrThrowArgs>(args?: SelectSubset<T, StaticContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaticContentClient<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more StaticContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaticContents
     * const staticContents = await prisma.staticContent.findMany()
     * 
     * // Get first 10 StaticContents
     * const staticContents = await prisma.staticContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staticContentWithIdOnly = await prisma.staticContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaticContentFindManyArgs>(args?: SelectSubset<T, StaticContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a StaticContent.
     * @param {StaticContentCreateArgs} args - Arguments to create a StaticContent.
     * @example
     * // Create one StaticContent
     * const StaticContent = await prisma.staticContent.create({
     *   data: {
     *     // ... data to create a StaticContent
     *   }
     * })
     * 
     */
    create<T extends StaticContentCreateArgs>(args: SelectSubset<T, StaticContentCreateArgs<ExtArgs>>): Prisma__StaticContentClient<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many StaticContents.
     * @param {StaticContentCreateManyArgs} args - Arguments to create many StaticContents.
     * @example
     * // Create many StaticContents
     * const staticContent = await prisma.staticContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaticContentCreateManyArgs>(args?: SelectSubset<T, StaticContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaticContents and returns the data saved in the database.
     * @param {StaticContentCreateManyAndReturnArgs} args - Arguments to create many StaticContents.
     * @example
     * // Create many StaticContents
     * const staticContent = await prisma.staticContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaticContents and only return the `id`
     * const staticContentWithIdOnly = await prisma.staticContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaticContentCreateManyAndReturnArgs>(args?: SelectSubset<T, StaticContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a StaticContent.
     * @param {StaticContentDeleteArgs} args - Arguments to delete one StaticContent.
     * @example
     * // Delete one StaticContent
     * const StaticContent = await prisma.staticContent.delete({
     *   where: {
     *     // ... filter to delete one StaticContent
     *   }
     * })
     * 
     */
    delete<T extends StaticContentDeleteArgs>(args: SelectSubset<T, StaticContentDeleteArgs<ExtArgs>>): Prisma__StaticContentClient<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one StaticContent.
     * @param {StaticContentUpdateArgs} args - Arguments to update one StaticContent.
     * @example
     * // Update one StaticContent
     * const staticContent = await prisma.staticContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaticContentUpdateArgs>(args: SelectSubset<T, StaticContentUpdateArgs<ExtArgs>>): Prisma__StaticContentClient<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more StaticContents.
     * @param {StaticContentDeleteManyArgs} args - Arguments to filter StaticContents to delete.
     * @example
     * // Delete a few StaticContents
     * const { count } = await prisma.staticContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaticContentDeleteManyArgs>(args?: SelectSubset<T, StaticContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaticContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaticContents
     * const staticContent = await prisma.staticContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaticContentUpdateManyArgs>(args: SelectSubset<T, StaticContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaticContents and returns the data updated in the database.
     * @param {StaticContentUpdateManyAndReturnArgs} args - Arguments to update many StaticContents.
     * @example
     * // Update many StaticContents
     * const staticContent = await prisma.staticContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaticContents and only return the `id`
     * const staticContentWithIdOnly = await prisma.staticContent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaticContentUpdateManyAndReturnArgs>(args: SelectSubset<T, StaticContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one StaticContent.
     * @param {StaticContentUpsertArgs} args - Arguments to update or create a StaticContent.
     * @example
     * // Update or create a StaticContent
     * const staticContent = await prisma.staticContent.upsert({
     *   create: {
     *     // ... data to create a StaticContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaticContent we want to update
     *   }
     * })
     */
    upsert<T extends StaticContentUpsertArgs>(args: SelectSubset<T, StaticContentUpsertArgs<ExtArgs>>): Prisma__StaticContentClient<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of StaticContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticContentCountArgs} args - Arguments to filter StaticContents to count.
     * @example
     * // Count the number of StaticContents
     * const count = await prisma.staticContent.count({
     *   where: {
     *     // ... the filter for the StaticContents we want to count
     *   }
     * })
    **/
    count<T extends StaticContentCountArgs>(
      args?: Subset<T, StaticContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaticContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaticContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaticContentAggregateArgs>(args: Subset<T, StaticContentAggregateArgs>): Prisma.PrismaPromise<GetStaticContentAggregateType<T>>

    /**
     * Group by StaticContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaticContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaticContentGroupByArgs['orderBy'] }
        : { orderBy?: StaticContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaticContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaticContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaticContent model
   */
  readonly fields: StaticContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaticContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaticContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StaticContent model
   */ 
  interface StaticContentFieldRefs {
    readonly id: FieldRef<"StaticContent", 'String'>
    readonly key: FieldRef<"StaticContent", 'String'>
    readonly contentEn: FieldRef<"StaticContent", 'String'>
    readonly contentVn: FieldRef<"StaticContent", 'String'>
    readonly createdAt: FieldRef<"StaticContent", 'DateTime'>
    readonly updatedAt: FieldRef<"StaticContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StaticContent findUnique
   */
  export type StaticContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * Filter, which StaticContent to fetch.
     */
    where: StaticContentWhereUniqueInput
  }

  /**
   * StaticContent findUniqueOrThrow
   */
  export type StaticContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * Filter, which StaticContent to fetch.
     */
    where: StaticContentWhereUniqueInput
  }

  /**
   * StaticContent findFirst
   */
  export type StaticContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * Filter, which StaticContent to fetch.
     */
    where?: StaticContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticContents to fetch.
     */
    orderBy?: StaticContentOrderByWithRelationInput | StaticContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaticContents.
     */
    cursor?: StaticContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaticContents.
     */
    distinct?: StaticContentScalarFieldEnum | StaticContentScalarFieldEnum[]
  }

  /**
   * StaticContent findFirstOrThrow
   */
  export type StaticContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * Filter, which StaticContent to fetch.
     */
    where?: StaticContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticContents to fetch.
     */
    orderBy?: StaticContentOrderByWithRelationInput | StaticContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaticContents.
     */
    cursor?: StaticContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaticContents.
     */
    distinct?: StaticContentScalarFieldEnum | StaticContentScalarFieldEnum[]
  }

  /**
   * StaticContent findMany
   */
  export type StaticContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * Filter, which StaticContents to fetch.
     */
    where?: StaticContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticContents to fetch.
     */
    orderBy?: StaticContentOrderByWithRelationInput | StaticContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaticContents.
     */
    cursor?: StaticContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticContents.
     */
    skip?: number
    distinct?: StaticContentScalarFieldEnum | StaticContentScalarFieldEnum[]
  }

  /**
   * StaticContent create
   */
  export type StaticContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * The data needed to create a StaticContent.
     */
    data: XOR<StaticContentCreateInput, StaticContentUncheckedCreateInput>
  }

  /**
   * StaticContent createMany
   */
  export type StaticContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaticContents.
     */
    data: StaticContentCreateManyInput | StaticContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaticContent createManyAndReturn
   */
  export type StaticContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * The data used to create many StaticContents.
     */
    data: StaticContentCreateManyInput | StaticContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaticContent update
   */
  export type StaticContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * The data needed to update a StaticContent.
     */
    data: XOR<StaticContentUpdateInput, StaticContentUncheckedUpdateInput>
    /**
     * Choose, which StaticContent to update.
     */
    where: StaticContentWhereUniqueInput
  }

  /**
   * StaticContent updateMany
   */
  export type StaticContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaticContents.
     */
    data: XOR<StaticContentUpdateManyMutationInput, StaticContentUncheckedUpdateManyInput>
    /**
     * Filter which StaticContents to update
     */
    where?: StaticContentWhereInput
    /**
     * Limit how many StaticContents to update.
     */
    limit?: number
  }

  /**
   * StaticContent updateManyAndReturn
   */
  export type StaticContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * The data used to update StaticContents.
     */
    data: XOR<StaticContentUpdateManyMutationInput, StaticContentUncheckedUpdateManyInput>
    /**
     * Filter which StaticContents to update
     */
    where?: StaticContentWhereInput
    /**
     * Limit how many StaticContents to update.
     */
    limit?: number
  }

  /**
   * StaticContent upsert
   */
  export type StaticContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * The filter to search for the StaticContent to update in case it exists.
     */
    where: StaticContentWhereUniqueInput
    /**
     * In case the StaticContent found by the `where` argument doesn't exist, create a new StaticContent with this data.
     */
    create: XOR<StaticContentCreateInput, StaticContentUncheckedCreateInput>
    /**
     * In case the StaticContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaticContentUpdateInput, StaticContentUncheckedUpdateInput>
  }

  /**
   * StaticContent delete
   */
  export type StaticContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * Filter which StaticContent to delete.
     */
    where: StaticContentWhereUniqueInput
  }

  /**
   * StaticContent deleteMany
   */
  export type StaticContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaticContents to delete
     */
    where?: StaticContentWhereInput
    /**
     * Limit how many StaticContents to delete.
     */
    limit?: number
  }

  /**
   * StaticContent without action
   */
  export type StaticContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    key: string | null
    icon: string | null
    titleEn: string | null
    titleVn: string | null
    descriptionEn: string | null
    descriptionVn: string | null
    createdAt: Date | null
    updatedAt: Date | null
    showOnHome: boolean | null
    sortOrder: number | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    key: string | null
    icon: string | null
    titleEn: string | null
    titleVn: string | null
    descriptionEn: string | null
    descriptionVn: string | null
    createdAt: Date | null
    updatedAt: Date | null
    showOnHome: boolean | null
    sortOrder: number | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    key: number
    icon: number
    titleEn: number
    titleVn: number
    descriptionEn: number
    descriptionVn: number
    createdAt: number
    updatedAt: number
    showOnHome: number
    sortOrder: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    key?: true
    icon?: true
    titleEn?: true
    titleVn?: true
    descriptionEn?: true
    descriptionVn?: true
    createdAt?: true
    updatedAt?: true
    showOnHome?: true
    sortOrder?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    key?: true
    icon?: true
    titleEn?: true
    titleVn?: true
    descriptionEn?: true
    descriptionVn?: true
    createdAt?: true
    updatedAt?: true
    showOnHome?: true
    sortOrder?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    key?: true
    icon?: true
    titleEn?: true
    titleVn?: true
    descriptionEn?: true
    descriptionVn?: true
    createdAt?: true
    updatedAt?: true
    showOnHome?: true
    sortOrder?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    key: string
    icon: string
    titleEn: string
    titleVn: string
    descriptionEn: string
    descriptionVn: string
    createdAt: Date
    updatedAt: Date
    showOnHome: boolean
    sortOrder: number
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    icon?: boolean
    titleEn?: boolean
    titleVn?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    showOnHome?: boolean
    sortOrder?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    icon?: boolean
    titleEn?: boolean
    titleVn?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    showOnHome?: boolean
    sortOrder?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    icon?: boolean
    titleEn?: boolean
    titleVn?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    showOnHome?: boolean
    sortOrder?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    key?: boolean
    icon?: boolean
    titleEn?: boolean
    titleVn?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    showOnHome?: boolean
    sortOrder?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "icon" | "titleEn" | "titleVn" | "descriptionEn" | "descriptionVn" | "createdAt" | "updatedAt" | "showOnHome" | "sortOrder", ExtArgs["result"]["service"]>

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      icon: string
      titleEn: string
      titleVn: string
      descriptionEn: string
      descriptionVn: string
      createdAt: Date
      updatedAt: Date
      showOnHome: boolean
      sortOrder: number
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */ 
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly key: FieldRef<"Service", 'String'>
    readonly icon: FieldRef<"Service", 'String'>
    readonly titleEn: FieldRef<"Service", 'String'>
    readonly titleVn: FieldRef<"Service", 'String'>
    readonly descriptionEn: FieldRef<"Service", 'String'>
    readonly descriptionVn: FieldRef<"Service", 'String'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
    readonly showOnHome: FieldRef<"Service", 'Boolean'>
    readonly sortOrder: FieldRef<"Service", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
  }


  /**
   * Model TechnologyCategory
   */

  export type AggregateTechnologyCategory = {
    _count: TechnologyCategoryCountAggregateOutputType | null
    _avg: TechnologyCategoryAvgAggregateOutputType | null
    _sum: TechnologyCategorySumAggregateOutputType | null
    _min: TechnologyCategoryMinAggregateOutputType | null
    _max: TechnologyCategoryMaxAggregateOutputType | null
  }

  export type TechnologyCategoryAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type TechnologyCategorySumAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type TechnologyCategoryMinAggregateOutputType = {
    id: number | null
    nameEn: string | null
    nameVn: string | null
    name: string | null
    key: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type TechnologyCategoryMaxAggregateOutputType = {
    id: number | null
    nameEn: string | null
    nameVn: string | null
    name: string | null
    key: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type TechnologyCategoryCountAggregateOutputType = {
    id: number
    nameEn: number
    nameVn: number
    name: number
    key: number
    sortOrder: number
    createdAt: number
    _all: number
  }


  export type TechnologyCategoryAvgAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type TechnologyCategorySumAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type TechnologyCategoryMinAggregateInputType = {
    id?: true
    nameEn?: true
    nameVn?: true
    name?: true
    key?: true
    sortOrder?: true
    createdAt?: true
  }

  export type TechnologyCategoryMaxAggregateInputType = {
    id?: true
    nameEn?: true
    nameVn?: true
    name?: true
    key?: true
    sortOrder?: true
    createdAt?: true
  }

  export type TechnologyCategoryCountAggregateInputType = {
    id?: true
    nameEn?: true
    nameVn?: true
    name?: true
    key?: true
    sortOrder?: true
    createdAt?: true
    _all?: true
  }

  export type TechnologyCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TechnologyCategory to aggregate.
     */
    where?: TechnologyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnologyCategories to fetch.
     */
    orderBy?: TechnologyCategoryOrderByWithRelationInput | TechnologyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TechnologyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnologyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnologyCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TechnologyCategories
    **/
    _count?: true | TechnologyCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TechnologyCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TechnologyCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechnologyCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechnologyCategoryMaxAggregateInputType
  }

  export type GetTechnologyCategoryAggregateType<T extends TechnologyCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTechnologyCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechnologyCategory[P]>
      : GetScalarType<T[P], AggregateTechnologyCategory[P]>
  }




  export type TechnologyCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnologyCategoryWhereInput
    orderBy?: TechnologyCategoryOrderByWithAggregationInput | TechnologyCategoryOrderByWithAggregationInput[]
    by: TechnologyCategoryScalarFieldEnum[] | TechnologyCategoryScalarFieldEnum
    having?: TechnologyCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechnologyCategoryCountAggregateInputType | true
    _avg?: TechnologyCategoryAvgAggregateInputType
    _sum?: TechnologyCategorySumAggregateInputType
    _min?: TechnologyCategoryMinAggregateInputType
    _max?: TechnologyCategoryMaxAggregateInputType
  }

  export type TechnologyCategoryGroupByOutputType = {
    id: number
    nameEn: string
    nameVn: string
    name: string | null
    key: string | null
    sortOrder: number
    createdAt: Date
    _count: TechnologyCategoryCountAggregateOutputType | null
    _avg: TechnologyCategoryAvgAggregateOutputType | null
    _sum: TechnologyCategorySumAggregateOutputType | null
    _min: TechnologyCategoryMinAggregateOutputType | null
    _max: TechnologyCategoryMaxAggregateOutputType | null
  }

  type GetTechnologyCategoryGroupByPayload<T extends TechnologyCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechnologyCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechnologyCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechnologyCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], TechnologyCategoryGroupByOutputType[P]>
        }
      >
    >


  export type TechnologyCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameEn?: boolean
    nameVn?: boolean
    name?: boolean
    key?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    items?: boolean | TechnologyCategory$itemsArgs<ExtArgs>
    _count?: boolean | TechnologyCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technologyCategory"]>

  export type TechnologyCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameEn?: boolean
    nameVn?: boolean
    name?: boolean
    key?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["technologyCategory"]>

  export type TechnologyCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameEn?: boolean
    nameVn?: boolean
    name?: boolean
    key?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["technologyCategory"]>

  export type TechnologyCategorySelectScalar = {
    id?: boolean
    nameEn?: boolean
    nameVn?: boolean
    name?: boolean
    key?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }

  export type TechnologyCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameEn" | "nameVn" | "name" | "key" | "sortOrder" | "createdAt", ExtArgs["result"]["technologyCategory"]>
  export type TechnologyCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | TechnologyCategory$itemsArgs<ExtArgs>
    _count?: boolean | TechnologyCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TechnologyCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TechnologyCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TechnologyCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TechnologyCategory"
    objects: {
      items: Prisma.$TechnologyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nameEn: string
      nameVn: string
      name: string | null
      key: string | null
      sortOrder: number
      createdAt: Date
    }, ExtArgs["result"]["technologyCategory"]>
    composites: {}
  }

  type TechnologyCategoryGetPayload<S extends boolean | null | undefined | TechnologyCategoryDefaultArgs> = $Result.GetResult<Prisma.$TechnologyCategoryPayload, S>

  type TechnologyCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TechnologyCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TechnologyCategoryCountAggregateInputType | true
    }

  export interface TechnologyCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TechnologyCategory'], meta: { name: 'TechnologyCategory' } }
    /**
     * Find zero or one TechnologyCategory that matches the filter.
     * @param {TechnologyCategoryFindUniqueArgs} args - Arguments to find a TechnologyCategory
     * @example
     * // Get one TechnologyCategory
     * const technologyCategory = await prisma.technologyCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TechnologyCategoryFindUniqueArgs>(args: SelectSubset<T, TechnologyCategoryFindUniqueArgs<ExtArgs>>): Prisma__TechnologyCategoryClient<$Result.GetResult<Prisma.$TechnologyCategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TechnologyCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TechnologyCategoryFindUniqueOrThrowArgs} args - Arguments to find a TechnologyCategory
     * @example
     * // Get one TechnologyCategory
     * const technologyCategory = await prisma.technologyCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TechnologyCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TechnologyCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TechnologyCategoryClient<$Result.GetResult<Prisma.$TechnologyCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TechnologyCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyCategoryFindFirstArgs} args - Arguments to find a TechnologyCategory
     * @example
     * // Get one TechnologyCategory
     * const technologyCategory = await prisma.technologyCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TechnologyCategoryFindFirstArgs>(args?: SelectSubset<T, TechnologyCategoryFindFirstArgs<ExtArgs>>): Prisma__TechnologyCategoryClient<$Result.GetResult<Prisma.$TechnologyCategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TechnologyCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyCategoryFindFirstOrThrowArgs} args - Arguments to find a TechnologyCategory
     * @example
     * // Get one TechnologyCategory
     * const technologyCategory = await prisma.technologyCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TechnologyCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TechnologyCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TechnologyCategoryClient<$Result.GetResult<Prisma.$TechnologyCategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TechnologyCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TechnologyCategories
     * const technologyCategories = await prisma.technologyCategory.findMany()
     * 
     * // Get first 10 TechnologyCategories
     * const technologyCategories = await prisma.technologyCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const technologyCategoryWithIdOnly = await prisma.technologyCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TechnologyCategoryFindManyArgs>(args?: SelectSubset<T, TechnologyCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnologyCategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TechnologyCategory.
     * @param {TechnologyCategoryCreateArgs} args - Arguments to create a TechnologyCategory.
     * @example
     * // Create one TechnologyCategory
     * const TechnologyCategory = await prisma.technologyCategory.create({
     *   data: {
     *     // ... data to create a TechnologyCategory
     *   }
     * })
     * 
     */
    create<T extends TechnologyCategoryCreateArgs>(args: SelectSubset<T, TechnologyCategoryCreateArgs<ExtArgs>>): Prisma__TechnologyCategoryClient<$Result.GetResult<Prisma.$TechnologyCategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TechnologyCategories.
     * @param {TechnologyCategoryCreateManyArgs} args - Arguments to create many TechnologyCategories.
     * @example
     * // Create many TechnologyCategories
     * const technologyCategory = await prisma.technologyCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TechnologyCategoryCreateManyArgs>(args?: SelectSubset<T, TechnologyCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TechnologyCategories and returns the data saved in the database.
     * @param {TechnologyCategoryCreateManyAndReturnArgs} args - Arguments to create many TechnologyCategories.
     * @example
     * // Create many TechnologyCategories
     * const technologyCategory = await prisma.technologyCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TechnologyCategories and only return the `id`
     * const technologyCategoryWithIdOnly = await prisma.technologyCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TechnologyCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TechnologyCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnologyCategoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TechnologyCategory.
     * @param {TechnologyCategoryDeleteArgs} args - Arguments to delete one TechnologyCategory.
     * @example
     * // Delete one TechnologyCategory
     * const TechnologyCategory = await prisma.technologyCategory.delete({
     *   where: {
     *     // ... filter to delete one TechnologyCategory
     *   }
     * })
     * 
     */
    delete<T extends TechnologyCategoryDeleteArgs>(args: SelectSubset<T, TechnologyCategoryDeleteArgs<ExtArgs>>): Prisma__TechnologyCategoryClient<$Result.GetResult<Prisma.$TechnologyCategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TechnologyCategory.
     * @param {TechnologyCategoryUpdateArgs} args - Arguments to update one TechnologyCategory.
     * @example
     * // Update one TechnologyCategory
     * const technologyCategory = await prisma.technologyCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TechnologyCategoryUpdateArgs>(args: SelectSubset<T, TechnologyCategoryUpdateArgs<ExtArgs>>): Prisma__TechnologyCategoryClient<$Result.GetResult<Prisma.$TechnologyCategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TechnologyCategories.
     * @param {TechnologyCategoryDeleteManyArgs} args - Arguments to filter TechnologyCategories to delete.
     * @example
     * // Delete a few TechnologyCategories
     * const { count } = await prisma.technologyCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TechnologyCategoryDeleteManyArgs>(args?: SelectSubset<T, TechnologyCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechnologyCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TechnologyCategories
     * const technologyCategory = await prisma.technologyCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TechnologyCategoryUpdateManyArgs>(args: SelectSubset<T, TechnologyCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechnologyCategories and returns the data updated in the database.
     * @param {TechnologyCategoryUpdateManyAndReturnArgs} args - Arguments to update many TechnologyCategories.
     * @example
     * // Update many TechnologyCategories
     * const technologyCategory = await prisma.technologyCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TechnologyCategories and only return the `id`
     * const technologyCategoryWithIdOnly = await prisma.technologyCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TechnologyCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TechnologyCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnologyCategoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TechnologyCategory.
     * @param {TechnologyCategoryUpsertArgs} args - Arguments to update or create a TechnologyCategory.
     * @example
     * // Update or create a TechnologyCategory
     * const technologyCategory = await prisma.technologyCategory.upsert({
     *   create: {
     *     // ... data to create a TechnologyCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TechnologyCategory we want to update
     *   }
     * })
     */
    upsert<T extends TechnologyCategoryUpsertArgs>(args: SelectSubset<T, TechnologyCategoryUpsertArgs<ExtArgs>>): Prisma__TechnologyCategoryClient<$Result.GetResult<Prisma.$TechnologyCategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TechnologyCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyCategoryCountArgs} args - Arguments to filter TechnologyCategories to count.
     * @example
     * // Count the number of TechnologyCategories
     * const count = await prisma.technologyCategory.count({
     *   where: {
     *     // ... the filter for the TechnologyCategories we want to count
     *   }
     * })
    **/
    count<T extends TechnologyCategoryCountArgs>(
      args?: Subset<T, TechnologyCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechnologyCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TechnologyCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TechnologyCategoryAggregateArgs>(args: Subset<T, TechnologyCategoryAggregateArgs>): Prisma.PrismaPromise<GetTechnologyCategoryAggregateType<T>>

    /**
     * Group by TechnologyCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TechnologyCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechnologyCategoryGroupByArgs['orderBy'] }
        : { orderBy?: TechnologyCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TechnologyCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnologyCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TechnologyCategory model
   */
  readonly fields: TechnologyCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TechnologyCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TechnologyCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends TechnologyCategory$itemsArgs<ExtArgs> = {}>(args?: Subset<T, TechnologyCategory$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TechnologyCategory model
   */ 
  interface TechnologyCategoryFieldRefs {
    readonly id: FieldRef<"TechnologyCategory", 'Int'>
    readonly nameEn: FieldRef<"TechnologyCategory", 'String'>
    readonly nameVn: FieldRef<"TechnologyCategory", 'String'>
    readonly name: FieldRef<"TechnologyCategory", 'String'>
    readonly key: FieldRef<"TechnologyCategory", 'String'>
    readonly sortOrder: FieldRef<"TechnologyCategory", 'Int'>
    readonly createdAt: FieldRef<"TechnologyCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TechnologyCategory findUnique
   */
  export type TechnologyCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnologyCategory
     */
    select?: TechnologyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnologyCategory
     */
    omit?: TechnologyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TechnologyCategory to fetch.
     */
    where: TechnologyCategoryWhereUniqueInput
  }

  /**
   * TechnologyCategory findUniqueOrThrow
   */
  export type TechnologyCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnologyCategory
     */
    select?: TechnologyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnologyCategory
     */
    omit?: TechnologyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TechnologyCategory to fetch.
     */
    where: TechnologyCategoryWhereUniqueInput
  }

  /**
   * TechnologyCategory findFirst
   */
  export type TechnologyCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnologyCategory
     */
    select?: TechnologyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnologyCategory
     */
    omit?: TechnologyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TechnologyCategory to fetch.
     */
    where?: TechnologyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnologyCategories to fetch.
     */
    orderBy?: TechnologyCategoryOrderByWithRelationInput | TechnologyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TechnologyCategories.
     */
    cursor?: TechnologyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnologyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnologyCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechnologyCategories.
     */
    distinct?: TechnologyCategoryScalarFieldEnum | TechnologyCategoryScalarFieldEnum[]
  }

  /**
   * TechnologyCategory findFirstOrThrow
   */
  export type TechnologyCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnologyCategory
     */
    select?: TechnologyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnologyCategory
     */
    omit?: TechnologyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TechnologyCategory to fetch.
     */
    where?: TechnologyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnologyCategories to fetch.
     */
    orderBy?: TechnologyCategoryOrderByWithRelationInput | TechnologyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TechnologyCategories.
     */
    cursor?: TechnologyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnologyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnologyCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechnologyCategories.
     */
    distinct?: TechnologyCategoryScalarFieldEnum | TechnologyCategoryScalarFieldEnum[]
  }

  /**
   * TechnologyCategory findMany
   */
  export type TechnologyCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnologyCategory
     */
    select?: TechnologyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnologyCategory
     */
    omit?: TechnologyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TechnologyCategories to fetch.
     */
    where?: TechnologyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnologyCategories to fetch.
     */
    orderBy?: TechnologyCategoryOrderByWithRelationInput | TechnologyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TechnologyCategories.
     */
    cursor?: TechnologyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnologyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnologyCategories.
     */
    skip?: number
    distinct?: TechnologyCategoryScalarFieldEnum | TechnologyCategoryScalarFieldEnum[]
  }

  /**
   * TechnologyCategory create
   */
  export type TechnologyCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnologyCategory
     */
    select?: TechnologyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnologyCategory
     */
    omit?: TechnologyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TechnologyCategory.
     */
    data: XOR<TechnologyCategoryCreateInput, TechnologyCategoryUncheckedCreateInput>
  }

  /**
   * TechnologyCategory createMany
   */
  export type TechnologyCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TechnologyCategories.
     */
    data: TechnologyCategoryCreateManyInput | TechnologyCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TechnologyCategory createManyAndReturn
   */
  export type TechnologyCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnologyCategory
     */
    select?: TechnologyCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TechnologyCategory
     */
    omit?: TechnologyCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many TechnologyCategories.
     */
    data: TechnologyCategoryCreateManyInput | TechnologyCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TechnologyCategory update
   */
  export type TechnologyCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnologyCategory
     */
    select?: TechnologyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnologyCategory
     */
    omit?: TechnologyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TechnologyCategory.
     */
    data: XOR<TechnologyCategoryUpdateInput, TechnologyCategoryUncheckedUpdateInput>
    /**
     * Choose, which TechnologyCategory to update.
     */
    where: TechnologyCategoryWhereUniqueInput
  }

  /**
   * TechnologyCategory updateMany
   */
  export type TechnologyCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TechnologyCategories.
     */
    data: XOR<TechnologyCategoryUpdateManyMutationInput, TechnologyCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TechnologyCategories to update
     */
    where?: TechnologyCategoryWhereInput
    /**
     * Limit how many TechnologyCategories to update.
     */
    limit?: number
  }

  /**
   * TechnologyCategory updateManyAndReturn
   */
  export type TechnologyCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnologyCategory
     */
    select?: TechnologyCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TechnologyCategory
     */
    omit?: TechnologyCategoryOmit<ExtArgs> | null
    /**
     * The data used to update TechnologyCategories.
     */
    data: XOR<TechnologyCategoryUpdateManyMutationInput, TechnologyCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TechnologyCategories to update
     */
    where?: TechnologyCategoryWhereInput
    /**
     * Limit how many TechnologyCategories to update.
     */
    limit?: number
  }

  /**
   * TechnologyCategory upsert
   */
  export type TechnologyCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnologyCategory
     */
    select?: TechnologyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnologyCategory
     */
    omit?: TechnologyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TechnologyCategory to update in case it exists.
     */
    where: TechnologyCategoryWhereUniqueInput
    /**
     * In case the TechnologyCategory found by the `where` argument doesn't exist, create a new TechnologyCategory with this data.
     */
    create: XOR<TechnologyCategoryCreateInput, TechnologyCategoryUncheckedCreateInput>
    /**
     * In case the TechnologyCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechnologyCategoryUpdateInput, TechnologyCategoryUncheckedUpdateInput>
  }

  /**
   * TechnologyCategory delete
   */
  export type TechnologyCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnologyCategory
     */
    select?: TechnologyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnologyCategory
     */
    omit?: TechnologyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyCategoryInclude<ExtArgs> | null
    /**
     * Filter which TechnologyCategory to delete.
     */
    where: TechnologyCategoryWhereUniqueInput
  }

  /**
   * TechnologyCategory deleteMany
   */
  export type TechnologyCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TechnologyCategories to delete
     */
    where?: TechnologyCategoryWhereInput
    /**
     * Limit how many TechnologyCategories to delete.
     */
    limit?: number
  }

  /**
   * TechnologyCategory.items
   */
  export type TechnologyCategory$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
    where?: TechnologyWhereInput
    orderBy?: TechnologyOrderByWithRelationInput | TechnologyOrderByWithRelationInput[]
    cursor?: TechnologyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TechnologyScalarFieldEnum | TechnologyScalarFieldEnum[]
  }

  /**
   * TechnologyCategory without action
   */
  export type TechnologyCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnologyCategory
     */
    select?: TechnologyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnologyCategory
     */
    omit?: TechnologyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Technology
   */

  export type AggregateTechnology = {
    _count: TechnologyCountAggregateOutputType | null
    _avg: TechnologyAvgAggregateOutputType | null
    _sum: TechnologySumAggregateOutputType | null
    _min: TechnologyMinAggregateOutputType | null
    _max: TechnologyMaxAggregateOutputType | null
  }

  export type TechnologyAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type TechnologySumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type TechnologyMinAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
    categoryId: number | null
    createdAt: Date | null
  }

  export type TechnologyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
    categoryId: number | null
    createdAt: Date | null
  }

  export type TechnologyCountAggregateOutputType = {
    id: number
    name: number
    category: number
    categoryId: number
    createdAt: number
    _all: number
  }


  export type TechnologyAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type TechnologySumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type TechnologyMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    categoryId?: true
    createdAt?: true
  }

  export type TechnologyMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    categoryId?: true
    createdAt?: true
  }

  export type TechnologyCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    categoryId?: true
    createdAt?: true
    _all?: true
  }

  export type TechnologyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Technology to aggregate.
     */
    where?: TechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technologies to fetch.
     */
    orderBy?: TechnologyOrderByWithRelationInput | TechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Technologies
    **/
    _count?: true | TechnologyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TechnologyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TechnologySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechnologyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechnologyMaxAggregateInputType
  }

  export type GetTechnologyAggregateType<T extends TechnologyAggregateArgs> = {
        [P in keyof T & keyof AggregateTechnology]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechnology[P]>
      : GetScalarType<T[P], AggregateTechnology[P]>
  }




  export type TechnologyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnologyWhereInput
    orderBy?: TechnologyOrderByWithAggregationInput | TechnologyOrderByWithAggregationInput[]
    by: TechnologyScalarFieldEnum[] | TechnologyScalarFieldEnum
    having?: TechnologyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechnologyCountAggregateInputType | true
    _avg?: TechnologyAvgAggregateInputType
    _sum?: TechnologySumAggregateInputType
    _min?: TechnologyMinAggregateInputType
    _max?: TechnologyMaxAggregateInputType
  }

  export type TechnologyGroupByOutputType = {
    id: number
    name: string
    category: string | null
    categoryId: number | null
    createdAt: Date
    _count: TechnologyCountAggregateOutputType | null
    _avg: TechnologyAvgAggregateOutputType | null
    _sum: TechnologySumAggregateOutputType | null
    _min: TechnologyMinAggregateOutputType | null
    _max: TechnologyMaxAggregateOutputType | null
  }

  type GetTechnologyGroupByPayload<T extends TechnologyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechnologyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechnologyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechnologyGroupByOutputType[P]>
            : GetScalarType<T[P], TechnologyGroupByOutputType[P]>
        }
      >
    >


  export type TechnologySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    categoryId?: boolean
    createdAt?: boolean
    cat?: boolean | Technology$catArgs<ExtArgs>
  }, ExtArgs["result"]["technology"]>

  export type TechnologySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    categoryId?: boolean
    createdAt?: boolean
    cat?: boolean | Technology$catArgs<ExtArgs>
  }, ExtArgs["result"]["technology"]>

  export type TechnologySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    categoryId?: boolean
    createdAt?: boolean
    cat?: boolean | Technology$catArgs<ExtArgs>
  }, ExtArgs["result"]["technology"]>

  export type TechnologySelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    categoryId?: boolean
    createdAt?: boolean
  }

  export type TechnologyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "categoryId" | "createdAt", ExtArgs["result"]["technology"]>
  export type TechnologyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cat?: boolean | Technology$catArgs<ExtArgs>
  }
  export type TechnologyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cat?: boolean | Technology$catArgs<ExtArgs>
  }
  export type TechnologyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cat?: boolean | Technology$catArgs<ExtArgs>
  }

  export type $TechnologyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Technology"
    objects: {
      cat: Prisma.$TechnologyCategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      category: string | null
      categoryId: number | null
      createdAt: Date
    }, ExtArgs["result"]["technology"]>
    composites: {}
  }

  type TechnologyGetPayload<S extends boolean | null | undefined | TechnologyDefaultArgs> = $Result.GetResult<Prisma.$TechnologyPayload, S>

  type TechnologyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TechnologyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TechnologyCountAggregateInputType | true
    }

  export interface TechnologyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Technology'], meta: { name: 'Technology' } }
    /**
     * Find zero or one Technology that matches the filter.
     * @param {TechnologyFindUniqueArgs} args - Arguments to find a Technology
     * @example
     * // Get one Technology
     * const technology = await prisma.technology.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TechnologyFindUniqueArgs>(args: SelectSubset<T, TechnologyFindUniqueArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Technology that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TechnologyFindUniqueOrThrowArgs} args - Arguments to find a Technology
     * @example
     * // Get one Technology
     * const technology = await prisma.technology.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TechnologyFindUniqueOrThrowArgs>(args: SelectSubset<T, TechnologyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Technology that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyFindFirstArgs} args - Arguments to find a Technology
     * @example
     * // Get one Technology
     * const technology = await prisma.technology.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TechnologyFindFirstArgs>(args?: SelectSubset<T, TechnologyFindFirstArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Technology that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyFindFirstOrThrowArgs} args - Arguments to find a Technology
     * @example
     * // Get one Technology
     * const technology = await prisma.technology.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TechnologyFindFirstOrThrowArgs>(args?: SelectSubset<T, TechnologyFindFirstOrThrowArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Technologies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Technologies
     * const technologies = await prisma.technology.findMany()
     * 
     * // Get first 10 Technologies
     * const technologies = await prisma.technology.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const technologyWithIdOnly = await prisma.technology.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TechnologyFindManyArgs>(args?: SelectSubset<T, TechnologyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Technology.
     * @param {TechnologyCreateArgs} args - Arguments to create a Technology.
     * @example
     * // Create one Technology
     * const Technology = await prisma.technology.create({
     *   data: {
     *     // ... data to create a Technology
     *   }
     * })
     * 
     */
    create<T extends TechnologyCreateArgs>(args: SelectSubset<T, TechnologyCreateArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Technologies.
     * @param {TechnologyCreateManyArgs} args - Arguments to create many Technologies.
     * @example
     * // Create many Technologies
     * const technology = await prisma.technology.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TechnologyCreateManyArgs>(args?: SelectSubset<T, TechnologyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Technologies and returns the data saved in the database.
     * @param {TechnologyCreateManyAndReturnArgs} args - Arguments to create many Technologies.
     * @example
     * // Create many Technologies
     * const technology = await prisma.technology.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Technologies and only return the `id`
     * const technologyWithIdOnly = await prisma.technology.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TechnologyCreateManyAndReturnArgs>(args?: SelectSubset<T, TechnologyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Technology.
     * @param {TechnologyDeleteArgs} args - Arguments to delete one Technology.
     * @example
     * // Delete one Technology
     * const Technology = await prisma.technology.delete({
     *   where: {
     *     // ... filter to delete one Technology
     *   }
     * })
     * 
     */
    delete<T extends TechnologyDeleteArgs>(args: SelectSubset<T, TechnologyDeleteArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Technology.
     * @param {TechnologyUpdateArgs} args - Arguments to update one Technology.
     * @example
     * // Update one Technology
     * const technology = await prisma.technology.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TechnologyUpdateArgs>(args: SelectSubset<T, TechnologyUpdateArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Technologies.
     * @param {TechnologyDeleteManyArgs} args - Arguments to filter Technologies to delete.
     * @example
     * // Delete a few Technologies
     * const { count } = await prisma.technology.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TechnologyDeleteManyArgs>(args?: SelectSubset<T, TechnologyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Technologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Technologies
     * const technology = await prisma.technology.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TechnologyUpdateManyArgs>(args: SelectSubset<T, TechnologyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Technologies and returns the data updated in the database.
     * @param {TechnologyUpdateManyAndReturnArgs} args - Arguments to update many Technologies.
     * @example
     * // Update many Technologies
     * const technology = await prisma.technology.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Technologies and only return the `id`
     * const technologyWithIdOnly = await prisma.technology.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TechnologyUpdateManyAndReturnArgs>(args: SelectSubset<T, TechnologyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Technology.
     * @param {TechnologyUpsertArgs} args - Arguments to update or create a Technology.
     * @example
     * // Update or create a Technology
     * const technology = await prisma.technology.upsert({
     *   create: {
     *     // ... data to create a Technology
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Technology we want to update
     *   }
     * })
     */
    upsert<T extends TechnologyUpsertArgs>(args: SelectSubset<T, TechnologyUpsertArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Technologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyCountArgs} args - Arguments to filter Technologies to count.
     * @example
     * // Count the number of Technologies
     * const count = await prisma.technology.count({
     *   where: {
     *     // ... the filter for the Technologies we want to count
     *   }
     * })
    **/
    count<T extends TechnologyCountArgs>(
      args?: Subset<T, TechnologyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechnologyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Technology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TechnologyAggregateArgs>(args: Subset<T, TechnologyAggregateArgs>): Prisma.PrismaPromise<GetTechnologyAggregateType<T>>

    /**
     * Group by Technology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TechnologyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechnologyGroupByArgs['orderBy'] }
        : { orderBy?: TechnologyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TechnologyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnologyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Technology model
   */
  readonly fields: TechnologyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Technology.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TechnologyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cat<T extends Technology$catArgs<ExtArgs> = {}>(args?: Subset<T, Technology$catArgs<ExtArgs>>): Prisma__TechnologyCategoryClient<$Result.GetResult<Prisma.$TechnologyCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Technology model
   */ 
  interface TechnologyFieldRefs {
    readonly id: FieldRef<"Technology", 'Int'>
    readonly name: FieldRef<"Technology", 'String'>
    readonly category: FieldRef<"Technology", 'String'>
    readonly categoryId: FieldRef<"Technology", 'Int'>
    readonly createdAt: FieldRef<"Technology", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Technology findUnique
   */
  export type TechnologyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * Filter, which Technology to fetch.
     */
    where: TechnologyWhereUniqueInput
  }

  /**
   * Technology findUniqueOrThrow
   */
  export type TechnologyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * Filter, which Technology to fetch.
     */
    where: TechnologyWhereUniqueInput
  }

  /**
   * Technology findFirst
   */
  export type TechnologyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * Filter, which Technology to fetch.
     */
    where?: TechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technologies to fetch.
     */
    orderBy?: TechnologyOrderByWithRelationInput | TechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Technologies.
     */
    cursor?: TechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Technologies.
     */
    distinct?: TechnologyScalarFieldEnum | TechnologyScalarFieldEnum[]
  }

  /**
   * Technology findFirstOrThrow
   */
  export type TechnologyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * Filter, which Technology to fetch.
     */
    where?: TechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technologies to fetch.
     */
    orderBy?: TechnologyOrderByWithRelationInput | TechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Technologies.
     */
    cursor?: TechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Technologies.
     */
    distinct?: TechnologyScalarFieldEnum | TechnologyScalarFieldEnum[]
  }

  /**
   * Technology findMany
   */
  export type TechnologyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * Filter, which Technologies to fetch.
     */
    where?: TechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technologies to fetch.
     */
    orderBy?: TechnologyOrderByWithRelationInput | TechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Technologies.
     */
    cursor?: TechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technologies.
     */
    skip?: number
    distinct?: TechnologyScalarFieldEnum | TechnologyScalarFieldEnum[]
  }

  /**
   * Technology create
   */
  export type TechnologyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * The data needed to create a Technology.
     */
    data: XOR<TechnologyCreateInput, TechnologyUncheckedCreateInput>
  }

  /**
   * Technology createMany
   */
  export type TechnologyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Technologies.
     */
    data: TechnologyCreateManyInput | TechnologyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Technology createManyAndReturn
   */
  export type TechnologyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * The data used to create many Technologies.
     */
    data: TechnologyCreateManyInput | TechnologyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Technology update
   */
  export type TechnologyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * The data needed to update a Technology.
     */
    data: XOR<TechnologyUpdateInput, TechnologyUncheckedUpdateInput>
    /**
     * Choose, which Technology to update.
     */
    where: TechnologyWhereUniqueInput
  }

  /**
   * Technology updateMany
   */
  export type TechnologyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Technologies.
     */
    data: XOR<TechnologyUpdateManyMutationInput, TechnologyUncheckedUpdateManyInput>
    /**
     * Filter which Technologies to update
     */
    where?: TechnologyWhereInput
    /**
     * Limit how many Technologies to update.
     */
    limit?: number
  }

  /**
   * Technology updateManyAndReturn
   */
  export type TechnologyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * The data used to update Technologies.
     */
    data: XOR<TechnologyUpdateManyMutationInput, TechnologyUncheckedUpdateManyInput>
    /**
     * Filter which Technologies to update
     */
    where?: TechnologyWhereInput
    /**
     * Limit how many Technologies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Technology upsert
   */
  export type TechnologyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * The filter to search for the Technology to update in case it exists.
     */
    where: TechnologyWhereUniqueInput
    /**
     * In case the Technology found by the `where` argument doesn't exist, create a new Technology with this data.
     */
    create: XOR<TechnologyCreateInput, TechnologyUncheckedCreateInput>
    /**
     * In case the Technology was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechnologyUpdateInput, TechnologyUncheckedUpdateInput>
  }

  /**
   * Technology delete
   */
  export type TechnologyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * Filter which Technology to delete.
     */
    where: TechnologyWhereUniqueInput
  }

  /**
   * Technology deleteMany
   */
  export type TechnologyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Technologies to delete
     */
    where?: TechnologyWhereInput
    /**
     * Limit how many Technologies to delete.
     */
    limit?: number
  }

  /**
   * Technology.cat
   */
  export type Technology$catArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnologyCategory
     */
    select?: TechnologyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnologyCategory
     */
    omit?: TechnologyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyCategoryInclude<ExtArgs> | null
    where?: TechnologyCategoryWhereInput
  }

  /**
   * Technology without action
   */
  export type TechnologyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technology
     */
    omit?: TechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnologyInclude<ExtArgs> | null
  }


  /**
   * Model PortfolioItem
   */

  export type AggregatePortfolioItem = {
    _count: PortfolioItemCountAggregateOutputType | null
    _avg: PortfolioItemAvgAggregateOutputType | null
    _sum: PortfolioItemSumAggregateOutputType | null
    _min: PortfolioItemMinAggregateOutputType | null
    _max: PortfolioItemMaxAggregateOutputType | null
  }

  export type PortfolioItemAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    sortOrder: number | null
  }

  export type PortfolioItemSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    sortOrder: number | null
  }

  export type PortfolioItemMinAggregateOutputType = {
    id: number | null
    key: string | null
    titleEn: string | null
    titleVn: string | null
    descriptionEn: string | null
    descriptionVn: string | null
    image: string | null
    categoryKey: string | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    showOnHome: boolean | null
    sortOrder: number | null
    contentEn: string | null
    contentVn: string | null
    duration: string | null
  }

  export type PortfolioItemMaxAggregateOutputType = {
    id: number | null
    key: string | null
    titleEn: string | null
    titleVn: string | null
    descriptionEn: string | null
    descriptionVn: string | null
    image: string | null
    categoryKey: string | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    showOnHome: boolean | null
    sortOrder: number | null
    contentEn: string | null
    contentVn: string | null
    duration: string | null
  }

  export type PortfolioItemCountAggregateOutputType = {
    id: number
    key: number
    titleEn: number
    titleVn: number
    descriptionEn: number
    descriptionVn: number
    image: number
    categoryKey: number
    categoryId: number
    technologies: number
    createdAt: number
    updatedAt: number
    showOnHome: number
    sortOrder: number
    contentEn: number
    contentVn: number
    duration: number
    _all: number
  }


  export type PortfolioItemAvgAggregateInputType = {
    id?: true
    categoryId?: true
    sortOrder?: true
  }

  export type PortfolioItemSumAggregateInputType = {
    id?: true
    categoryId?: true
    sortOrder?: true
  }

  export type PortfolioItemMinAggregateInputType = {
    id?: true
    key?: true
    titleEn?: true
    titleVn?: true
    descriptionEn?: true
    descriptionVn?: true
    image?: true
    categoryKey?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    showOnHome?: true
    sortOrder?: true
    contentEn?: true
    contentVn?: true
    duration?: true
  }

  export type PortfolioItemMaxAggregateInputType = {
    id?: true
    key?: true
    titleEn?: true
    titleVn?: true
    descriptionEn?: true
    descriptionVn?: true
    image?: true
    categoryKey?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    showOnHome?: true
    sortOrder?: true
    contentEn?: true
    contentVn?: true
    duration?: true
  }

  export type PortfolioItemCountAggregateInputType = {
    id?: true
    key?: true
    titleEn?: true
    titleVn?: true
    descriptionEn?: true
    descriptionVn?: true
    image?: true
    categoryKey?: true
    categoryId?: true
    technologies?: true
    createdAt?: true
    updatedAt?: true
    showOnHome?: true
    sortOrder?: true
    contentEn?: true
    contentVn?: true
    duration?: true
    _all?: true
  }

  export type PortfolioItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioItem to aggregate.
     */
    where?: PortfolioItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioItems to fetch.
     */
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortfolioItems
    **/
    _count?: true | PortfolioItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioItemMaxAggregateInputType
  }

  export type GetPortfolioItemAggregateType<T extends PortfolioItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolioItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolioItem[P]>
      : GetScalarType<T[P], AggregatePortfolioItem[P]>
  }




  export type PortfolioItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioItemWhereInput
    orderBy?: PortfolioItemOrderByWithAggregationInput | PortfolioItemOrderByWithAggregationInput[]
    by: PortfolioItemScalarFieldEnum[] | PortfolioItemScalarFieldEnum
    having?: PortfolioItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioItemCountAggregateInputType | true
    _avg?: PortfolioItemAvgAggregateInputType
    _sum?: PortfolioItemSumAggregateInputType
    _min?: PortfolioItemMinAggregateInputType
    _max?: PortfolioItemMaxAggregateInputType
  }

  export type PortfolioItemGroupByOutputType = {
    id: number
    key: string | null
    titleEn: string
    titleVn: string
    descriptionEn: string
    descriptionVn: string
    image: string
    categoryKey: string | null
    categoryId: number | null
    technologies: string[]
    createdAt: Date
    updatedAt: Date
    showOnHome: boolean
    sortOrder: number
    contentEn: string | null
    contentVn: string | null
    duration: string | null
    _count: PortfolioItemCountAggregateOutputType | null
    _avg: PortfolioItemAvgAggregateOutputType | null
    _sum: PortfolioItemSumAggregateOutputType | null
    _min: PortfolioItemMinAggregateOutputType | null
    _max: PortfolioItemMaxAggregateOutputType | null
  }

  type GetPortfolioItemGroupByPayload<T extends PortfolioItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioItemGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioItemGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    titleEn?: boolean
    titleVn?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    image?: boolean
    categoryKey?: boolean
    categoryId?: boolean
    technologies?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    showOnHome?: boolean
    sortOrder?: boolean
    contentEn?: boolean
    contentVn?: boolean
    duration?: boolean
    category?: boolean | PortfolioItem$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioItem"]>

  export type PortfolioItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    titleEn?: boolean
    titleVn?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    image?: boolean
    categoryKey?: boolean
    categoryId?: boolean
    technologies?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    showOnHome?: boolean
    sortOrder?: boolean
    contentEn?: boolean
    contentVn?: boolean
    duration?: boolean
    category?: boolean | PortfolioItem$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioItem"]>

  export type PortfolioItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    titleEn?: boolean
    titleVn?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    image?: boolean
    categoryKey?: boolean
    categoryId?: boolean
    technologies?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    showOnHome?: boolean
    sortOrder?: boolean
    contentEn?: boolean
    contentVn?: boolean
    duration?: boolean
    category?: boolean | PortfolioItem$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioItem"]>

  export type PortfolioItemSelectScalar = {
    id?: boolean
    key?: boolean
    titleEn?: boolean
    titleVn?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    image?: boolean
    categoryKey?: boolean
    categoryId?: boolean
    technologies?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    showOnHome?: boolean
    sortOrder?: boolean
    contentEn?: boolean
    contentVn?: boolean
    duration?: boolean
  }

  export type PortfolioItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "titleEn" | "titleVn" | "descriptionEn" | "descriptionVn" | "image" | "categoryKey" | "categoryId" | "technologies" | "createdAt" | "updatedAt" | "showOnHome" | "sortOrder" | "contentEn" | "contentVn" | "duration", ExtArgs["result"]["portfolioItem"]>
  export type PortfolioItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | PortfolioItem$categoryArgs<ExtArgs>
  }
  export type PortfolioItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | PortfolioItem$categoryArgs<ExtArgs>
  }
  export type PortfolioItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | PortfolioItem$categoryArgs<ExtArgs>
  }

  export type $PortfolioItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortfolioItem"
    objects: {
      category: Prisma.$PortfolioCategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string | null
      titleEn: string
      titleVn: string
      descriptionEn: string
      descriptionVn: string
      image: string
      categoryKey: string | null
      categoryId: number | null
      technologies: string[]
      createdAt: Date
      updatedAt: Date
      showOnHome: boolean
      sortOrder: number
      contentEn: string | null
      contentVn: string | null
      duration: string | null
    }, ExtArgs["result"]["portfolioItem"]>
    composites: {}
  }

  type PortfolioItemGetPayload<S extends boolean | null | undefined | PortfolioItemDefaultArgs> = $Result.GetResult<Prisma.$PortfolioItemPayload, S>

  type PortfolioItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioItemCountAggregateInputType | true
    }

  export interface PortfolioItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortfolioItem'], meta: { name: 'PortfolioItem' } }
    /**
     * Find zero or one PortfolioItem that matches the filter.
     * @param {PortfolioItemFindUniqueArgs} args - Arguments to find a PortfolioItem
     * @example
     * // Get one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioItemFindUniqueArgs>(args: SelectSubset<T, PortfolioItemFindUniqueArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PortfolioItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioItemFindUniqueOrThrowArgs} args - Arguments to find a PortfolioItem
     * @example
     * // Get one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PortfolioItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemFindFirstArgs} args - Arguments to find a PortfolioItem
     * @example
     * // Get one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioItemFindFirstArgs>(args?: SelectSubset<T, PortfolioItemFindFirstArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PortfolioItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemFindFirstOrThrowArgs} args - Arguments to find a PortfolioItem
     * @example
     * // Get one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PortfolioItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortfolioItems
     * const portfolioItems = await prisma.portfolioItem.findMany()
     * 
     * // Get first 10 PortfolioItems
     * const portfolioItems = await prisma.portfolioItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioItemWithIdOnly = await prisma.portfolioItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioItemFindManyArgs>(args?: SelectSubset<T, PortfolioItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PortfolioItem.
     * @param {PortfolioItemCreateArgs} args - Arguments to create a PortfolioItem.
     * @example
     * // Create one PortfolioItem
     * const PortfolioItem = await prisma.portfolioItem.create({
     *   data: {
     *     // ... data to create a PortfolioItem
     *   }
     * })
     * 
     */
    create<T extends PortfolioItemCreateArgs>(args: SelectSubset<T, PortfolioItemCreateArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PortfolioItems.
     * @param {PortfolioItemCreateManyArgs} args - Arguments to create many PortfolioItems.
     * @example
     * // Create many PortfolioItems
     * const portfolioItem = await prisma.portfolioItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioItemCreateManyArgs>(args?: SelectSubset<T, PortfolioItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PortfolioItems and returns the data saved in the database.
     * @param {PortfolioItemCreateManyAndReturnArgs} args - Arguments to create many PortfolioItems.
     * @example
     * // Create many PortfolioItems
     * const portfolioItem = await prisma.portfolioItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PortfolioItems and only return the `id`
     * const portfolioItemWithIdOnly = await prisma.portfolioItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PortfolioItem.
     * @param {PortfolioItemDeleteArgs} args - Arguments to delete one PortfolioItem.
     * @example
     * // Delete one PortfolioItem
     * const PortfolioItem = await prisma.portfolioItem.delete({
     *   where: {
     *     // ... filter to delete one PortfolioItem
     *   }
     * })
     * 
     */
    delete<T extends PortfolioItemDeleteArgs>(args: SelectSubset<T, PortfolioItemDeleteArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PortfolioItem.
     * @param {PortfolioItemUpdateArgs} args - Arguments to update one PortfolioItem.
     * @example
     * // Update one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioItemUpdateArgs>(args: SelectSubset<T, PortfolioItemUpdateArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PortfolioItems.
     * @param {PortfolioItemDeleteManyArgs} args - Arguments to filter PortfolioItems to delete.
     * @example
     * // Delete a few PortfolioItems
     * const { count } = await prisma.portfolioItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioItemDeleteManyArgs>(args?: SelectSubset<T, PortfolioItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortfolioItems
     * const portfolioItem = await prisma.portfolioItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioItemUpdateManyArgs>(args: SelectSubset<T, PortfolioItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioItems and returns the data updated in the database.
     * @param {PortfolioItemUpdateManyAndReturnArgs} args - Arguments to update many PortfolioItems.
     * @example
     * // Update many PortfolioItems
     * const portfolioItem = await prisma.portfolioItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PortfolioItems and only return the `id`
     * const portfolioItemWithIdOnly = await prisma.portfolioItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortfolioItemUpdateManyAndReturnArgs>(args: SelectSubset<T, PortfolioItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PortfolioItem.
     * @param {PortfolioItemUpsertArgs} args - Arguments to update or create a PortfolioItem.
     * @example
     * // Update or create a PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.upsert({
     *   create: {
     *     // ... data to create a PortfolioItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortfolioItem we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioItemUpsertArgs>(args: SelectSubset<T, PortfolioItemUpsertArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PortfolioItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemCountArgs} args - Arguments to filter PortfolioItems to count.
     * @example
     * // Count the number of PortfolioItems
     * const count = await prisma.portfolioItem.count({
     *   where: {
     *     // ... the filter for the PortfolioItems we want to count
     *   }
     * })
    **/
    count<T extends PortfolioItemCountArgs>(
      args?: Subset<T, PortfolioItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortfolioItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortfolioItemAggregateArgs>(args: Subset<T, PortfolioItemAggregateArgs>): Prisma.PrismaPromise<GetPortfolioItemAggregateType<T>>

    /**
     * Group by PortfolioItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortfolioItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioItemGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortfolioItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortfolioItem model
   */
  readonly fields: PortfolioItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortfolioItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends PortfolioItem$categoryArgs<ExtArgs> = {}>(args?: Subset<T, PortfolioItem$categoryArgs<ExtArgs>>): Prisma__PortfolioCategoryClient<$Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortfolioItem model
   */ 
  interface PortfolioItemFieldRefs {
    readonly id: FieldRef<"PortfolioItem", 'Int'>
    readonly key: FieldRef<"PortfolioItem", 'String'>
    readonly titleEn: FieldRef<"PortfolioItem", 'String'>
    readonly titleVn: FieldRef<"PortfolioItem", 'String'>
    readonly descriptionEn: FieldRef<"PortfolioItem", 'String'>
    readonly descriptionVn: FieldRef<"PortfolioItem", 'String'>
    readonly image: FieldRef<"PortfolioItem", 'String'>
    readonly categoryKey: FieldRef<"PortfolioItem", 'String'>
    readonly categoryId: FieldRef<"PortfolioItem", 'Int'>
    readonly technologies: FieldRef<"PortfolioItem", 'String[]'>
    readonly createdAt: FieldRef<"PortfolioItem", 'DateTime'>
    readonly updatedAt: FieldRef<"PortfolioItem", 'DateTime'>
    readonly showOnHome: FieldRef<"PortfolioItem", 'Boolean'>
    readonly sortOrder: FieldRef<"PortfolioItem", 'Int'>
    readonly contentEn: FieldRef<"PortfolioItem", 'String'>
    readonly contentVn: FieldRef<"PortfolioItem", 'String'>
    readonly duration: FieldRef<"PortfolioItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PortfolioItem findUnique
   */
  export type PortfolioItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioItem to fetch.
     */
    where: PortfolioItemWhereUniqueInput
  }

  /**
   * PortfolioItem findUniqueOrThrow
   */
  export type PortfolioItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioItem to fetch.
     */
    where: PortfolioItemWhereUniqueInput
  }

  /**
   * PortfolioItem findFirst
   */
  export type PortfolioItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioItem to fetch.
     */
    where?: PortfolioItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioItems to fetch.
     */
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioItems.
     */
    cursor?: PortfolioItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioItems.
     */
    distinct?: PortfolioItemScalarFieldEnum | PortfolioItemScalarFieldEnum[]
  }

  /**
   * PortfolioItem findFirstOrThrow
   */
  export type PortfolioItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioItem to fetch.
     */
    where?: PortfolioItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioItems to fetch.
     */
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioItems.
     */
    cursor?: PortfolioItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioItems.
     */
    distinct?: PortfolioItemScalarFieldEnum | PortfolioItemScalarFieldEnum[]
  }

  /**
   * PortfolioItem findMany
   */
  export type PortfolioItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioItems to fetch.
     */
    where?: PortfolioItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioItems to fetch.
     */
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortfolioItems.
     */
    cursor?: PortfolioItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioItems.
     */
    skip?: number
    distinct?: PortfolioItemScalarFieldEnum | PortfolioItemScalarFieldEnum[]
  }

  /**
   * PortfolioItem create
   */
  export type PortfolioItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PortfolioItem.
     */
    data: XOR<PortfolioItemCreateInput, PortfolioItemUncheckedCreateInput>
  }

  /**
   * PortfolioItem createMany
   */
  export type PortfolioItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortfolioItems.
     */
    data: PortfolioItemCreateManyInput | PortfolioItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioItem createManyAndReturn
   */
  export type PortfolioItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * The data used to create many PortfolioItems.
     */
    data: PortfolioItemCreateManyInput | PortfolioItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioItem update
   */
  export type PortfolioItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PortfolioItem.
     */
    data: XOR<PortfolioItemUpdateInput, PortfolioItemUncheckedUpdateInput>
    /**
     * Choose, which PortfolioItem to update.
     */
    where: PortfolioItemWhereUniqueInput
  }

  /**
   * PortfolioItem updateMany
   */
  export type PortfolioItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortfolioItems.
     */
    data: XOR<PortfolioItemUpdateManyMutationInput, PortfolioItemUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioItems to update
     */
    where?: PortfolioItemWhereInput
    /**
     * Limit how many PortfolioItems to update.
     */
    limit?: number
  }

  /**
   * PortfolioItem updateManyAndReturn
   */
  export type PortfolioItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * The data used to update PortfolioItems.
     */
    data: XOR<PortfolioItemUpdateManyMutationInput, PortfolioItemUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioItems to update
     */
    where?: PortfolioItemWhereInput
    /**
     * Limit how many PortfolioItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioItem upsert
   */
  export type PortfolioItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PortfolioItem to update in case it exists.
     */
    where: PortfolioItemWhereUniqueInput
    /**
     * In case the PortfolioItem found by the `where` argument doesn't exist, create a new PortfolioItem with this data.
     */
    create: XOR<PortfolioItemCreateInput, PortfolioItemUncheckedCreateInput>
    /**
     * In case the PortfolioItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioItemUpdateInput, PortfolioItemUncheckedUpdateInput>
  }

  /**
   * PortfolioItem delete
   */
  export type PortfolioItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * Filter which PortfolioItem to delete.
     */
    where: PortfolioItemWhereUniqueInput
  }

  /**
   * PortfolioItem deleteMany
   */
  export type PortfolioItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioItems to delete
     */
    where?: PortfolioItemWhereInput
    /**
     * Limit how many PortfolioItems to delete.
     */
    limit?: number
  }

  /**
   * PortfolioItem.category
   */
  export type PortfolioItem$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCategory
     */
    select?: PortfolioCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCategory
     */
    omit?: PortfolioCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCategoryInclude<ExtArgs> | null
    where?: PortfolioCategoryWhereInput
  }

  /**
   * PortfolioItem without action
   */
  export type PortfolioItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
  }


  /**
   * Model PortfolioCategory
   */

  export type AggregatePortfolioCategory = {
    _count: PortfolioCategoryCountAggregateOutputType | null
    _avg: PortfolioCategoryAvgAggregateOutputType | null
    _sum: PortfolioCategorySumAggregateOutputType | null
    _min: PortfolioCategoryMinAggregateOutputType | null
    _max: PortfolioCategoryMaxAggregateOutputType | null
  }

  export type PortfolioCategoryAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type PortfolioCategorySumAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type PortfolioCategoryMinAggregateOutputType = {
    id: number | null
    nameEn: string | null
    nameVn: string | null
    name: string | null
    key: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type PortfolioCategoryMaxAggregateOutputType = {
    id: number | null
    nameEn: string | null
    nameVn: string | null
    name: string | null
    key: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type PortfolioCategoryCountAggregateOutputType = {
    id: number
    nameEn: number
    nameVn: number
    name: number
    key: number
    sortOrder: number
    createdAt: number
    _all: number
  }


  export type PortfolioCategoryAvgAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type PortfolioCategorySumAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type PortfolioCategoryMinAggregateInputType = {
    id?: true
    nameEn?: true
    nameVn?: true
    name?: true
    key?: true
    sortOrder?: true
    createdAt?: true
  }

  export type PortfolioCategoryMaxAggregateInputType = {
    id?: true
    nameEn?: true
    nameVn?: true
    name?: true
    key?: true
    sortOrder?: true
    createdAt?: true
  }

  export type PortfolioCategoryCountAggregateInputType = {
    id?: true
    nameEn?: true
    nameVn?: true
    name?: true
    key?: true
    sortOrder?: true
    createdAt?: true
    _all?: true
  }

  export type PortfolioCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioCategory to aggregate.
     */
    where?: PortfolioCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioCategories to fetch.
     */
    orderBy?: PortfolioCategoryOrderByWithRelationInput | PortfolioCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortfolioCategories
    **/
    _count?: true | PortfolioCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioCategoryMaxAggregateInputType
  }

  export type GetPortfolioCategoryAggregateType<T extends PortfolioCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolioCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolioCategory[P]>
      : GetScalarType<T[P], AggregatePortfolioCategory[P]>
  }




  export type PortfolioCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioCategoryWhereInput
    orderBy?: PortfolioCategoryOrderByWithAggregationInput | PortfolioCategoryOrderByWithAggregationInput[]
    by: PortfolioCategoryScalarFieldEnum[] | PortfolioCategoryScalarFieldEnum
    having?: PortfolioCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioCategoryCountAggregateInputType | true
    _avg?: PortfolioCategoryAvgAggregateInputType
    _sum?: PortfolioCategorySumAggregateInputType
    _min?: PortfolioCategoryMinAggregateInputType
    _max?: PortfolioCategoryMaxAggregateInputType
  }

  export type PortfolioCategoryGroupByOutputType = {
    id: number
    nameEn: string
    nameVn: string
    name: string | null
    key: string | null
    sortOrder: number
    createdAt: Date
    _count: PortfolioCategoryCountAggregateOutputType | null
    _avg: PortfolioCategoryAvgAggregateOutputType | null
    _sum: PortfolioCategorySumAggregateOutputType | null
    _min: PortfolioCategoryMinAggregateOutputType | null
    _max: PortfolioCategoryMaxAggregateOutputType | null
  }

  type GetPortfolioCategoryGroupByPayload<T extends PortfolioCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioCategoryGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameEn?: boolean
    nameVn?: boolean
    name?: boolean
    key?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    items?: boolean | PortfolioCategory$itemsArgs<ExtArgs>
    _count?: boolean | PortfolioCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioCategory"]>

  export type PortfolioCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameEn?: boolean
    nameVn?: boolean
    name?: boolean
    key?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["portfolioCategory"]>

  export type PortfolioCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameEn?: boolean
    nameVn?: boolean
    name?: boolean
    key?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["portfolioCategory"]>

  export type PortfolioCategorySelectScalar = {
    id?: boolean
    nameEn?: boolean
    nameVn?: boolean
    name?: boolean
    key?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }

  export type PortfolioCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameEn" | "nameVn" | "name" | "key" | "sortOrder" | "createdAt", ExtArgs["result"]["portfolioCategory"]>
  export type PortfolioCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PortfolioCategory$itemsArgs<ExtArgs>
    _count?: boolean | PortfolioCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PortfolioCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PortfolioCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PortfolioCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortfolioCategory"
    objects: {
      items: Prisma.$PortfolioItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nameEn: string
      nameVn: string
      name: string | null
      key: string | null
      sortOrder: number
      createdAt: Date
    }, ExtArgs["result"]["portfolioCategory"]>
    composites: {}
  }

  type PortfolioCategoryGetPayload<S extends boolean | null | undefined | PortfolioCategoryDefaultArgs> = $Result.GetResult<Prisma.$PortfolioCategoryPayload, S>

  type PortfolioCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioCategoryCountAggregateInputType | true
    }

  export interface PortfolioCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortfolioCategory'], meta: { name: 'PortfolioCategory' } }
    /**
     * Find zero or one PortfolioCategory that matches the filter.
     * @param {PortfolioCategoryFindUniqueArgs} args - Arguments to find a PortfolioCategory
     * @example
     * // Get one PortfolioCategory
     * const portfolioCategory = await prisma.portfolioCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioCategoryFindUniqueArgs>(args: SelectSubset<T, PortfolioCategoryFindUniqueArgs<ExtArgs>>): Prisma__PortfolioCategoryClient<$Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PortfolioCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioCategoryFindUniqueOrThrowArgs} args - Arguments to find a PortfolioCategory
     * @example
     * // Get one PortfolioCategory
     * const portfolioCategory = await prisma.portfolioCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioCategoryClient<$Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PortfolioCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCategoryFindFirstArgs} args - Arguments to find a PortfolioCategory
     * @example
     * // Get one PortfolioCategory
     * const portfolioCategory = await prisma.portfolioCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioCategoryFindFirstArgs>(args?: SelectSubset<T, PortfolioCategoryFindFirstArgs<ExtArgs>>): Prisma__PortfolioCategoryClient<$Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PortfolioCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCategoryFindFirstOrThrowArgs} args - Arguments to find a PortfolioCategory
     * @example
     * // Get one PortfolioCategory
     * const portfolioCategory = await prisma.portfolioCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioCategoryClient<$Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PortfolioCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortfolioCategories
     * const portfolioCategories = await prisma.portfolioCategory.findMany()
     * 
     * // Get first 10 PortfolioCategories
     * const portfolioCategories = await prisma.portfolioCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioCategoryWithIdOnly = await prisma.portfolioCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioCategoryFindManyArgs>(args?: SelectSubset<T, PortfolioCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PortfolioCategory.
     * @param {PortfolioCategoryCreateArgs} args - Arguments to create a PortfolioCategory.
     * @example
     * // Create one PortfolioCategory
     * const PortfolioCategory = await prisma.portfolioCategory.create({
     *   data: {
     *     // ... data to create a PortfolioCategory
     *   }
     * })
     * 
     */
    create<T extends PortfolioCategoryCreateArgs>(args: SelectSubset<T, PortfolioCategoryCreateArgs<ExtArgs>>): Prisma__PortfolioCategoryClient<$Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PortfolioCategories.
     * @param {PortfolioCategoryCreateManyArgs} args - Arguments to create many PortfolioCategories.
     * @example
     * // Create many PortfolioCategories
     * const portfolioCategory = await prisma.portfolioCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioCategoryCreateManyArgs>(args?: SelectSubset<T, PortfolioCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PortfolioCategories and returns the data saved in the database.
     * @param {PortfolioCategoryCreateManyAndReturnArgs} args - Arguments to create many PortfolioCategories.
     * @example
     * // Create many PortfolioCategories
     * const portfolioCategory = await prisma.portfolioCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PortfolioCategories and only return the `id`
     * const portfolioCategoryWithIdOnly = await prisma.portfolioCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PortfolioCategory.
     * @param {PortfolioCategoryDeleteArgs} args - Arguments to delete one PortfolioCategory.
     * @example
     * // Delete one PortfolioCategory
     * const PortfolioCategory = await prisma.portfolioCategory.delete({
     *   where: {
     *     // ... filter to delete one PortfolioCategory
     *   }
     * })
     * 
     */
    delete<T extends PortfolioCategoryDeleteArgs>(args: SelectSubset<T, PortfolioCategoryDeleteArgs<ExtArgs>>): Prisma__PortfolioCategoryClient<$Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PortfolioCategory.
     * @param {PortfolioCategoryUpdateArgs} args - Arguments to update one PortfolioCategory.
     * @example
     * // Update one PortfolioCategory
     * const portfolioCategory = await prisma.portfolioCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioCategoryUpdateArgs>(args: SelectSubset<T, PortfolioCategoryUpdateArgs<ExtArgs>>): Prisma__PortfolioCategoryClient<$Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PortfolioCategories.
     * @param {PortfolioCategoryDeleteManyArgs} args - Arguments to filter PortfolioCategories to delete.
     * @example
     * // Delete a few PortfolioCategories
     * const { count } = await prisma.portfolioCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioCategoryDeleteManyArgs>(args?: SelectSubset<T, PortfolioCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortfolioCategories
     * const portfolioCategory = await prisma.portfolioCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioCategoryUpdateManyArgs>(args: SelectSubset<T, PortfolioCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioCategories and returns the data updated in the database.
     * @param {PortfolioCategoryUpdateManyAndReturnArgs} args - Arguments to update many PortfolioCategories.
     * @example
     * // Update many PortfolioCategories
     * const portfolioCategory = await prisma.portfolioCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PortfolioCategories and only return the `id`
     * const portfolioCategoryWithIdOnly = await prisma.portfolioCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortfolioCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PortfolioCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PortfolioCategory.
     * @param {PortfolioCategoryUpsertArgs} args - Arguments to update or create a PortfolioCategory.
     * @example
     * // Update or create a PortfolioCategory
     * const portfolioCategory = await prisma.portfolioCategory.upsert({
     *   create: {
     *     // ... data to create a PortfolioCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortfolioCategory we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioCategoryUpsertArgs>(args: SelectSubset<T, PortfolioCategoryUpsertArgs<ExtArgs>>): Prisma__PortfolioCategoryClient<$Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PortfolioCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCategoryCountArgs} args - Arguments to filter PortfolioCategories to count.
     * @example
     * // Count the number of PortfolioCategories
     * const count = await prisma.portfolioCategory.count({
     *   where: {
     *     // ... the filter for the PortfolioCategories we want to count
     *   }
     * })
    **/
    count<T extends PortfolioCategoryCountArgs>(
      args?: Subset<T, PortfolioCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortfolioCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortfolioCategoryAggregateArgs>(args: Subset<T, PortfolioCategoryAggregateArgs>): Prisma.PrismaPromise<GetPortfolioCategoryAggregateType<T>>

    /**
     * Group by PortfolioCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortfolioCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioCategoryGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortfolioCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortfolioCategory model
   */
  readonly fields: PortfolioCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortfolioCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends PortfolioCategory$itemsArgs<ExtArgs> = {}>(args?: Subset<T, PortfolioCategory$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortfolioCategory model
   */ 
  interface PortfolioCategoryFieldRefs {
    readonly id: FieldRef<"PortfolioCategory", 'Int'>
    readonly nameEn: FieldRef<"PortfolioCategory", 'String'>
    readonly nameVn: FieldRef<"PortfolioCategory", 'String'>
    readonly name: FieldRef<"PortfolioCategory", 'String'>
    readonly key: FieldRef<"PortfolioCategory", 'String'>
    readonly sortOrder: FieldRef<"PortfolioCategory", 'Int'>
    readonly createdAt: FieldRef<"PortfolioCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortfolioCategory findUnique
   */
  export type PortfolioCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCategory
     */
    select?: PortfolioCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCategory
     */
    omit?: PortfolioCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioCategory to fetch.
     */
    where: PortfolioCategoryWhereUniqueInput
  }

  /**
   * PortfolioCategory findUniqueOrThrow
   */
  export type PortfolioCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCategory
     */
    select?: PortfolioCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCategory
     */
    omit?: PortfolioCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioCategory to fetch.
     */
    where: PortfolioCategoryWhereUniqueInput
  }

  /**
   * PortfolioCategory findFirst
   */
  export type PortfolioCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCategory
     */
    select?: PortfolioCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCategory
     */
    omit?: PortfolioCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioCategory to fetch.
     */
    where?: PortfolioCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioCategories to fetch.
     */
    orderBy?: PortfolioCategoryOrderByWithRelationInput | PortfolioCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioCategories.
     */
    cursor?: PortfolioCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioCategories.
     */
    distinct?: PortfolioCategoryScalarFieldEnum | PortfolioCategoryScalarFieldEnum[]
  }

  /**
   * PortfolioCategory findFirstOrThrow
   */
  export type PortfolioCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCategory
     */
    select?: PortfolioCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCategory
     */
    omit?: PortfolioCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioCategory to fetch.
     */
    where?: PortfolioCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioCategories to fetch.
     */
    orderBy?: PortfolioCategoryOrderByWithRelationInput | PortfolioCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioCategories.
     */
    cursor?: PortfolioCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioCategories.
     */
    distinct?: PortfolioCategoryScalarFieldEnum | PortfolioCategoryScalarFieldEnum[]
  }

  /**
   * PortfolioCategory findMany
   */
  export type PortfolioCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCategory
     */
    select?: PortfolioCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCategory
     */
    omit?: PortfolioCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioCategories to fetch.
     */
    where?: PortfolioCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioCategories to fetch.
     */
    orderBy?: PortfolioCategoryOrderByWithRelationInput | PortfolioCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortfolioCategories.
     */
    cursor?: PortfolioCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioCategories.
     */
    skip?: number
    distinct?: PortfolioCategoryScalarFieldEnum | PortfolioCategoryScalarFieldEnum[]
  }

  /**
   * PortfolioCategory create
   */
  export type PortfolioCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCategory
     */
    select?: PortfolioCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCategory
     */
    omit?: PortfolioCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PortfolioCategory.
     */
    data: XOR<PortfolioCategoryCreateInput, PortfolioCategoryUncheckedCreateInput>
  }

  /**
   * PortfolioCategory createMany
   */
  export type PortfolioCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortfolioCategories.
     */
    data: PortfolioCategoryCreateManyInput | PortfolioCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioCategory createManyAndReturn
   */
  export type PortfolioCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCategory
     */
    select?: PortfolioCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCategory
     */
    omit?: PortfolioCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many PortfolioCategories.
     */
    data: PortfolioCategoryCreateManyInput | PortfolioCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioCategory update
   */
  export type PortfolioCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCategory
     */
    select?: PortfolioCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCategory
     */
    omit?: PortfolioCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PortfolioCategory.
     */
    data: XOR<PortfolioCategoryUpdateInput, PortfolioCategoryUncheckedUpdateInput>
    /**
     * Choose, which PortfolioCategory to update.
     */
    where: PortfolioCategoryWhereUniqueInput
  }

  /**
   * PortfolioCategory updateMany
   */
  export type PortfolioCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortfolioCategories.
     */
    data: XOR<PortfolioCategoryUpdateManyMutationInput, PortfolioCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioCategories to update
     */
    where?: PortfolioCategoryWhereInput
    /**
     * Limit how many PortfolioCategories to update.
     */
    limit?: number
  }

  /**
   * PortfolioCategory updateManyAndReturn
   */
  export type PortfolioCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCategory
     */
    select?: PortfolioCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCategory
     */
    omit?: PortfolioCategoryOmit<ExtArgs> | null
    /**
     * The data used to update PortfolioCategories.
     */
    data: XOR<PortfolioCategoryUpdateManyMutationInput, PortfolioCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioCategories to update
     */
    where?: PortfolioCategoryWhereInput
    /**
     * Limit how many PortfolioCategories to update.
     */
    limit?: number
  }

  /**
   * PortfolioCategory upsert
   */
  export type PortfolioCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCategory
     */
    select?: PortfolioCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCategory
     */
    omit?: PortfolioCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PortfolioCategory to update in case it exists.
     */
    where: PortfolioCategoryWhereUniqueInput
    /**
     * In case the PortfolioCategory found by the `where` argument doesn't exist, create a new PortfolioCategory with this data.
     */
    create: XOR<PortfolioCategoryCreateInput, PortfolioCategoryUncheckedCreateInput>
    /**
     * In case the PortfolioCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioCategoryUpdateInput, PortfolioCategoryUncheckedUpdateInput>
  }

  /**
   * PortfolioCategory delete
   */
  export type PortfolioCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCategory
     */
    select?: PortfolioCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCategory
     */
    omit?: PortfolioCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCategoryInclude<ExtArgs> | null
    /**
     * Filter which PortfolioCategory to delete.
     */
    where: PortfolioCategoryWhereUniqueInput
  }

  /**
   * PortfolioCategory deleteMany
   */
  export type PortfolioCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioCategories to delete
     */
    where?: PortfolioCategoryWhereInput
    /**
     * Limit how many PortfolioCategories to delete.
     */
    limit?: number
  }

  /**
   * PortfolioCategory.items
   */
  export type PortfolioCategory$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    where?: PortfolioItemWhereInput
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    cursor?: PortfolioItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioItemScalarFieldEnum | PortfolioItemScalarFieldEnum[]
  }

  /**
   * PortfolioCategory without action
   */
  export type PortfolioCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCategory
     */
    select?: PortfolioCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioCategory
     */
    omit?: PortfolioCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioCategoryInclude<ExtArgs> | null
  }


  /**
   * Model TeamMember
   */

  export type AggregateTeamMember = {
    _count: TeamMemberCountAggregateOutputType | null
    _avg: TeamMemberAvgAggregateOutputType | null
    _sum: TeamMemberSumAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  export type TeamMemberAvgAggregateOutputType = {
    id: number | null
    level: number | null
    size: number | null
    delay: number | null
  }

  export type TeamMemberSumAggregateOutputType = {
    id: number | null
    level: number | null
    size: number | null
    delay: number | null
  }

  export type TeamMemberMinAggregateOutputType = {
    id: number | null
    name: string | null
    roleEn: string | null
    roleVn: string | null
    bioEn: string | null
    bioVn: string | null
    avatar: string | null
    level: number | null
    top: string | null
    right: string | null
    size: number | null
    delay: number | null
    createdAt: Date | null
  }

  export type TeamMemberMaxAggregateOutputType = {
    id: number | null
    name: string | null
    roleEn: string | null
    roleVn: string | null
    bioEn: string | null
    bioVn: string | null
    avatar: string | null
    level: number | null
    top: string | null
    right: string | null
    size: number | null
    delay: number | null
    createdAt: Date | null
  }

  export type TeamMemberCountAggregateOutputType = {
    id: number
    name: number
    roleEn: number
    roleVn: number
    bioEn: number
    bioVn: number
    avatar: number
    level: number
    top: number
    right: number
    size: number
    delay: number
    createdAt: number
    _all: number
  }


  export type TeamMemberAvgAggregateInputType = {
    id?: true
    level?: true
    size?: true
    delay?: true
  }

  export type TeamMemberSumAggregateInputType = {
    id?: true
    level?: true
    size?: true
    delay?: true
  }

  export type TeamMemberMinAggregateInputType = {
    id?: true
    name?: true
    roleEn?: true
    roleVn?: true
    bioEn?: true
    bioVn?: true
    avatar?: true
    level?: true
    top?: true
    right?: true
    size?: true
    delay?: true
    createdAt?: true
  }

  export type TeamMemberMaxAggregateInputType = {
    id?: true
    name?: true
    roleEn?: true
    roleVn?: true
    bioEn?: true
    bioVn?: true
    avatar?: true
    level?: true
    top?: true
    right?: true
    size?: true
    delay?: true
    createdAt?: true
  }

  export type TeamMemberCountAggregateInputType = {
    id?: true
    name?: true
    roleEn?: true
    roleVn?: true
    bioEn?: true
    bioVn?: true
    avatar?: true
    level?: true
    top?: true
    right?: true
    size?: true
    delay?: true
    createdAt?: true
    _all?: true
  }

  export type TeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMember to aggregate.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMembers
    **/
    _count?: true | TeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMemberMaxAggregateInputType
  }

  export type GetTeamMemberAggregateType<T extends TeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMember[P]>
      : GetScalarType<T[P], AggregateTeamMember[P]>
  }




  export type TeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithAggregationInput | TeamMemberOrderByWithAggregationInput[]
    by: TeamMemberScalarFieldEnum[] | TeamMemberScalarFieldEnum
    having?: TeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMemberCountAggregateInputType | true
    _avg?: TeamMemberAvgAggregateInputType
    _sum?: TeamMemberSumAggregateInputType
    _min?: TeamMemberMinAggregateInputType
    _max?: TeamMemberMaxAggregateInputType
  }

  export type TeamMemberGroupByOutputType = {
    id: number
    name: string
    roleEn: string
    roleVn: string
    bioEn: string | null
    bioVn: string | null
    avatar: string | null
    level: number
    top: string | null
    right: string | null
    size: number | null
    delay: number | null
    createdAt: Date
    _count: TeamMemberCountAggregateOutputType | null
    _avg: TeamMemberAvgAggregateOutputType | null
    _sum: TeamMemberSumAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  type GetTeamMemberGroupByPayload<T extends TeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type TeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    roleEn?: boolean
    roleVn?: boolean
    bioEn?: boolean
    bioVn?: boolean
    avatar?: boolean
    level?: boolean
    top?: boolean
    right?: boolean
    size?: boolean
    delay?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    roleEn?: boolean
    roleVn?: boolean
    bioEn?: boolean
    bioVn?: boolean
    avatar?: boolean
    level?: boolean
    top?: boolean
    right?: boolean
    size?: boolean
    delay?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    roleEn?: boolean
    roleVn?: boolean
    bioEn?: boolean
    bioVn?: boolean
    avatar?: boolean
    level?: boolean
    top?: boolean
    right?: boolean
    size?: boolean
    delay?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectScalar = {
    id?: boolean
    name?: boolean
    roleEn?: boolean
    roleVn?: boolean
    bioEn?: boolean
    bioVn?: boolean
    avatar?: boolean
    level?: boolean
    top?: boolean
    right?: boolean
    size?: boolean
    delay?: boolean
    createdAt?: boolean
  }

  export type TeamMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "roleEn" | "roleVn" | "bioEn" | "bioVn" | "avatar" | "level" | "top" | "right" | "size" | "delay" | "createdAt", ExtArgs["result"]["teamMember"]>

  export type $TeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMember"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      roleEn: string
      roleVn: string
      bioEn: string | null
      bioVn: string | null
      avatar: string | null
      level: number
      top: string | null
      right: string | null
      size: number | null
      delay: number | null
      createdAt: Date
    }, ExtArgs["result"]["teamMember"]>
    composites: {}
  }

  type TeamMemberGetPayload<S extends boolean | null | undefined | TeamMemberDefaultArgs> = $Result.GetResult<Prisma.$TeamMemberPayload, S>

  type TeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamMemberCountAggregateInputType | true
    }

  export interface TeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMember'], meta: { name: 'TeamMember' } }
    /**
     * Find zero or one TeamMember that matches the filter.
     * @param {TeamMemberFindUniqueArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamMemberFindUniqueArgs>(args: SelectSubset<T, TeamMemberFindUniqueArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TeamMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamMemberFindUniqueOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamMemberFindFirstArgs>(args?: SelectSubset<T, TeamMemberFindFirstArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMember.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamMemberFindManyArgs>(args?: SelectSubset<T, TeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TeamMember.
     * @param {TeamMemberCreateArgs} args - Arguments to create a TeamMember.
     * @example
     * // Create one TeamMember
     * const TeamMember = await prisma.teamMember.create({
     *   data: {
     *     // ... data to create a TeamMember
     *   }
     * })
     * 
     */
    create<T extends TeamMemberCreateArgs>(args: SelectSubset<T, TeamMemberCreateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TeamMembers.
     * @param {TeamMemberCreateManyArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamMemberCreateManyArgs>(args?: SelectSubset<T, TeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamMembers and returns the data saved in the database.
     * @param {TeamMemberCreateManyAndReturnArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TeamMember.
     * @param {TeamMemberDeleteArgs} args - Arguments to delete one TeamMember.
     * @example
     * // Delete one TeamMember
     * const TeamMember = await prisma.teamMember.delete({
     *   where: {
     *     // ... filter to delete one TeamMember
     *   }
     * })
     * 
     */
    delete<T extends TeamMemberDeleteArgs>(args: SelectSubset<T, TeamMemberDeleteArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TeamMember.
     * @param {TeamMemberUpdateArgs} args - Arguments to update one TeamMember.
     * @example
     * // Update one TeamMember
     * const teamMember = await prisma.teamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamMemberUpdateArgs>(args: SelectSubset<T, TeamMemberUpdateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMemberDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamMemberDeleteManyArgs>(args?: SelectSubset<T, TeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamMemberUpdateManyArgs>(args: SelectSubset<T, TeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers and returns the data updated in the database.
     * @param {TeamMemberUpdateManyAndReturnArgs} args - Arguments to update many TeamMembers.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TeamMember.
     * @param {TeamMemberUpsertArgs} args - Arguments to update or create a TeamMember.
     * @example
     * // Update or create a TeamMember
     * const teamMember = await prisma.teamMember.upsert({
     *   create: {
     *     // ... data to create a TeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMember we want to update
     *   }
     * })
     */
    upsert<T extends TeamMemberUpsertArgs>(args: SelectSubset<T, TeamMemberUpsertArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMember.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends TeamMemberCountArgs>(
      args?: Subset<T, TeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamMemberAggregateArgs>(args: Subset<T, TeamMemberAggregateArgs>): Prisma.PrismaPromise<GetTeamMemberAggregateType<T>>

    /**
     * Group by TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: TeamMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMember model
   */
  readonly fields: TeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamMember model
   */ 
  interface TeamMemberFieldRefs {
    readonly id: FieldRef<"TeamMember", 'Int'>
    readonly name: FieldRef<"TeamMember", 'String'>
    readonly roleEn: FieldRef<"TeamMember", 'String'>
    readonly roleVn: FieldRef<"TeamMember", 'String'>
    readonly bioEn: FieldRef<"TeamMember", 'String'>
    readonly bioVn: FieldRef<"TeamMember", 'String'>
    readonly avatar: FieldRef<"TeamMember", 'String'>
    readonly level: FieldRef<"TeamMember", 'Int'>
    readonly top: FieldRef<"TeamMember", 'String'>
    readonly right: FieldRef<"TeamMember", 'String'>
    readonly size: FieldRef<"TeamMember", 'Int'>
    readonly delay: FieldRef<"TeamMember", 'Float'>
    readonly createdAt: FieldRef<"TeamMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamMember findUnique
   */
  export type TeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findUniqueOrThrow
   */
  export type TeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findFirst
   */
  export type TeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findFirstOrThrow
   */
  export type TeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findMany
   */
  export type TeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember create
   */
  export type TeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data needed to create a TeamMember.
     */
    data: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
  }

  /**
   * TeamMember createMany
   */
  export type TeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamMember createManyAndReturn
   */
  export type TeamMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamMember update
   */
  export type TeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data needed to update a TeamMember.
     */
    data: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
    /**
     * Choose, which TeamMember to update.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember updateMany
   */
  export type TeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
  }

  /**
   * TeamMember updateManyAndReturn
   */
  export type TeamMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
  }

  /**
   * TeamMember upsert
   */
  export type TeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The filter to search for the TeamMember to update in case it exists.
     */
    where: TeamMemberWhereUniqueInput
    /**
     * In case the TeamMember found by the `where` argument doesn't exist, create a new TeamMember with this data.
     */
    create: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
    /**
     * In case the TeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
  }

  /**
   * TeamMember delete
   */
  export type TeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Filter which TeamMember to delete.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember deleteMany
   */
  export type TeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to delete.
     */
    limit?: number
  }

  /**
   * TeamMember without action
   */
  export type TeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
  }


  /**
   * Model CompanyInfo
   */

  export type AggregateCompanyInfo = {
    _count: CompanyInfoCountAggregateOutputType | null
    _avg: CompanyInfoAvgAggregateOutputType | null
    _sum: CompanyInfoSumAggregateOutputType | null
    _min: CompanyInfoMinAggregateOutputType | null
    _max: CompanyInfoMaxAggregateOutputType | null
  }

  export type CompanyInfoAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanyInfoSumAggregateOutputType = {
    id: number | null
  }

  export type CompanyInfoMinAggregateOutputType = {
    id: number | null
    name: string | null
    tagline: string | null
    email: string | null
    phone: string | null
    addressEn: string | null
    addressVn: string | null
    officeImage: string | null
    teamImage: string | null
    updatedAt: Date | null
  }

  export type CompanyInfoMaxAggregateOutputType = {
    id: number | null
    name: string | null
    tagline: string | null
    email: string | null
    phone: string | null
    addressEn: string | null
    addressVn: string | null
    officeImage: string | null
    teamImage: string | null
    updatedAt: Date | null
  }

  export type CompanyInfoCountAggregateOutputType = {
    id: number
    name: number
    tagline: number
    email: number
    phone: number
    addressEn: number
    addressVn: number
    officeImage: number
    teamImage: number
    updatedAt: number
    _all: number
  }


  export type CompanyInfoAvgAggregateInputType = {
    id?: true
  }

  export type CompanyInfoSumAggregateInputType = {
    id?: true
  }

  export type CompanyInfoMinAggregateInputType = {
    id?: true
    name?: true
    tagline?: true
    email?: true
    phone?: true
    addressEn?: true
    addressVn?: true
    officeImage?: true
    teamImage?: true
    updatedAt?: true
  }

  export type CompanyInfoMaxAggregateInputType = {
    id?: true
    name?: true
    tagline?: true
    email?: true
    phone?: true
    addressEn?: true
    addressVn?: true
    officeImage?: true
    teamImage?: true
    updatedAt?: true
  }

  export type CompanyInfoCountAggregateInputType = {
    id?: true
    name?: true
    tagline?: true
    email?: true
    phone?: true
    addressEn?: true
    addressVn?: true
    officeImage?: true
    teamImage?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyInfo to aggregate.
     */
    where?: CompanyInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyInfos to fetch.
     */
    orderBy?: CompanyInfoOrderByWithRelationInput | CompanyInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyInfos
    **/
    _count?: true | CompanyInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanyInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyInfoMaxAggregateInputType
  }

  export type GetCompanyInfoAggregateType<T extends CompanyInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyInfo[P]>
      : GetScalarType<T[P], AggregateCompanyInfo[P]>
  }




  export type CompanyInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyInfoWhereInput
    orderBy?: CompanyInfoOrderByWithAggregationInput | CompanyInfoOrderByWithAggregationInput[]
    by: CompanyInfoScalarFieldEnum[] | CompanyInfoScalarFieldEnum
    having?: CompanyInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyInfoCountAggregateInputType | true
    _avg?: CompanyInfoAvgAggregateInputType
    _sum?: CompanyInfoSumAggregateInputType
    _min?: CompanyInfoMinAggregateInputType
    _max?: CompanyInfoMaxAggregateInputType
  }

  export type CompanyInfoGroupByOutputType = {
    id: number
    name: string
    tagline: string | null
    email: string | null
    phone: string | null
    addressEn: string | null
    addressVn: string | null
    officeImage: string | null
    teamImage: string | null
    updatedAt: Date
    _count: CompanyInfoCountAggregateOutputType | null
    _avg: CompanyInfoAvgAggregateOutputType | null
    _sum: CompanyInfoSumAggregateOutputType | null
    _min: CompanyInfoMinAggregateOutputType | null
    _max: CompanyInfoMaxAggregateOutputType | null
  }

  type GetCompanyInfoGroupByPayload<T extends CompanyInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyInfoGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyInfoGroupByOutputType[P]>
        }
      >
    >


  export type CompanyInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tagline?: boolean
    email?: boolean
    phone?: boolean
    addressEn?: boolean
    addressVn?: boolean
    officeImage?: boolean
    teamImage?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["companyInfo"]>

  export type CompanyInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tagline?: boolean
    email?: boolean
    phone?: boolean
    addressEn?: boolean
    addressVn?: boolean
    officeImage?: boolean
    teamImage?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["companyInfo"]>

  export type CompanyInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tagline?: boolean
    email?: boolean
    phone?: boolean
    addressEn?: boolean
    addressVn?: boolean
    officeImage?: boolean
    teamImage?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["companyInfo"]>

  export type CompanyInfoSelectScalar = {
    id?: boolean
    name?: boolean
    tagline?: boolean
    email?: boolean
    phone?: boolean
    addressEn?: boolean
    addressVn?: boolean
    officeImage?: boolean
    teamImage?: boolean
    updatedAt?: boolean
  }

  export type CompanyInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "tagline" | "email" | "phone" | "addressEn" | "addressVn" | "officeImage" | "teamImage" | "updatedAt", ExtArgs["result"]["companyInfo"]>

  export type $CompanyInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      tagline: string | null
      email: string | null
      phone: string | null
      addressEn: string | null
      addressVn: string | null
      officeImage: string | null
      teamImage: string | null
      updatedAt: Date
    }, ExtArgs["result"]["companyInfo"]>
    composites: {}
  }

  type CompanyInfoGetPayload<S extends boolean | null | undefined | CompanyInfoDefaultArgs> = $Result.GetResult<Prisma.$CompanyInfoPayload, S>

  type CompanyInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyInfoCountAggregateInputType | true
    }

  export interface CompanyInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyInfo'], meta: { name: 'CompanyInfo' } }
    /**
     * Find zero or one CompanyInfo that matches the filter.
     * @param {CompanyInfoFindUniqueArgs} args - Arguments to find a CompanyInfo
     * @example
     * // Get one CompanyInfo
     * const companyInfo = await prisma.companyInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyInfoFindUniqueArgs>(args: SelectSubset<T, CompanyInfoFindUniqueArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CompanyInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyInfoFindUniqueOrThrowArgs} args - Arguments to find a CompanyInfo
     * @example
     * // Get one CompanyInfo
     * const companyInfo = await prisma.companyInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CompanyInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoFindFirstArgs} args - Arguments to find a CompanyInfo
     * @example
     * // Get one CompanyInfo
     * const companyInfo = await prisma.companyInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyInfoFindFirstArgs>(args?: SelectSubset<T, CompanyInfoFindFirstArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CompanyInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoFindFirstOrThrowArgs} args - Arguments to find a CompanyInfo
     * @example
     * // Get one CompanyInfo
     * const companyInfo = await prisma.companyInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CompanyInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyInfos
     * const companyInfos = await prisma.companyInfo.findMany()
     * 
     * // Get first 10 CompanyInfos
     * const companyInfos = await prisma.companyInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyInfoWithIdOnly = await prisma.companyInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyInfoFindManyArgs>(args?: SelectSubset<T, CompanyInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CompanyInfo.
     * @param {CompanyInfoCreateArgs} args - Arguments to create a CompanyInfo.
     * @example
     * // Create one CompanyInfo
     * const CompanyInfo = await prisma.companyInfo.create({
     *   data: {
     *     // ... data to create a CompanyInfo
     *   }
     * })
     * 
     */
    create<T extends CompanyInfoCreateArgs>(args: SelectSubset<T, CompanyInfoCreateArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CompanyInfos.
     * @param {CompanyInfoCreateManyArgs} args - Arguments to create many CompanyInfos.
     * @example
     * // Create many CompanyInfos
     * const companyInfo = await prisma.companyInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyInfoCreateManyArgs>(args?: SelectSubset<T, CompanyInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyInfos and returns the data saved in the database.
     * @param {CompanyInfoCreateManyAndReturnArgs} args - Arguments to create many CompanyInfos.
     * @example
     * // Create many CompanyInfos
     * const companyInfo = await prisma.companyInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyInfos and only return the `id`
     * const companyInfoWithIdOnly = await prisma.companyInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a CompanyInfo.
     * @param {CompanyInfoDeleteArgs} args - Arguments to delete one CompanyInfo.
     * @example
     * // Delete one CompanyInfo
     * const CompanyInfo = await prisma.companyInfo.delete({
     *   where: {
     *     // ... filter to delete one CompanyInfo
     *   }
     * })
     * 
     */
    delete<T extends CompanyInfoDeleteArgs>(args: SelectSubset<T, CompanyInfoDeleteArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CompanyInfo.
     * @param {CompanyInfoUpdateArgs} args - Arguments to update one CompanyInfo.
     * @example
     * // Update one CompanyInfo
     * const companyInfo = await prisma.companyInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyInfoUpdateArgs>(args: SelectSubset<T, CompanyInfoUpdateArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CompanyInfos.
     * @param {CompanyInfoDeleteManyArgs} args - Arguments to filter CompanyInfos to delete.
     * @example
     * // Delete a few CompanyInfos
     * const { count } = await prisma.companyInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyInfoDeleteManyArgs>(args?: SelectSubset<T, CompanyInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyInfos
     * const companyInfo = await prisma.companyInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyInfoUpdateManyArgs>(args: SelectSubset<T, CompanyInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyInfos and returns the data updated in the database.
     * @param {CompanyInfoUpdateManyAndReturnArgs} args - Arguments to update many CompanyInfos.
     * @example
     * // Update many CompanyInfos
     * const companyInfo = await prisma.companyInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanyInfos and only return the `id`
     * const companyInfoWithIdOnly = await prisma.companyInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one CompanyInfo.
     * @param {CompanyInfoUpsertArgs} args - Arguments to update or create a CompanyInfo.
     * @example
     * // Update or create a CompanyInfo
     * const companyInfo = await prisma.companyInfo.upsert({
     *   create: {
     *     // ... data to create a CompanyInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyInfo we want to update
     *   }
     * })
     */
    upsert<T extends CompanyInfoUpsertArgs>(args: SelectSubset<T, CompanyInfoUpsertArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CompanyInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoCountArgs} args - Arguments to filter CompanyInfos to count.
     * @example
     * // Count the number of CompanyInfos
     * const count = await prisma.companyInfo.count({
     *   where: {
     *     // ... the filter for the CompanyInfos we want to count
     *   }
     * })
    **/
    count<T extends CompanyInfoCountArgs>(
      args?: Subset<T, CompanyInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyInfoAggregateArgs>(args: Subset<T, CompanyInfoAggregateArgs>): Prisma.PrismaPromise<GetCompanyInfoAggregateType<T>>

    /**
     * Group by CompanyInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyInfoGroupByArgs['orderBy'] }
        : { orderBy?: CompanyInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyInfo model
   */
  readonly fields: CompanyInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanyInfo model
   */ 
  interface CompanyInfoFieldRefs {
    readonly id: FieldRef<"CompanyInfo", 'Int'>
    readonly name: FieldRef<"CompanyInfo", 'String'>
    readonly tagline: FieldRef<"CompanyInfo", 'String'>
    readonly email: FieldRef<"CompanyInfo", 'String'>
    readonly phone: FieldRef<"CompanyInfo", 'String'>
    readonly addressEn: FieldRef<"CompanyInfo", 'String'>
    readonly addressVn: FieldRef<"CompanyInfo", 'String'>
    readonly officeImage: FieldRef<"CompanyInfo", 'String'>
    readonly teamImage: FieldRef<"CompanyInfo", 'String'>
    readonly updatedAt: FieldRef<"CompanyInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompanyInfo findUnique
   */
  export type CompanyInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Filter, which CompanyInfo to fetch.
     */
    where: CompanyInfoWhereUniqueInput
  }

  /**
   * CompanyInfo findUniqueOrThrow
   */
  export type CompanyInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Filter, which CompanyInfo to fetch.
     */
    where: CompanyInfoWhereUniqueInput
  }

  /**
   * CompanyInfo findFirst
   */
  export type CompanyInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Filter, which CompanyInfo to fetch.
     */
    where?: CompanyInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyInfos to fetch.
     */
    orderBy?: CompanyInfoOrderByWithRelationInput | CompanyInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyInfos.
     */
    cursor?: CompanyInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyInfos.
     */
    distinct?: CompanyInfoScalarFieldEnum | CompanyInfoScalarFieldEnum[]
  }

  /**
   * CompanyInfo findFirstOrThrow
   */
  export type CompanyInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Filter, which CompanyInfo to fetch.
     */
    where?: CompanyInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyInfos to fetch.
     */
    orderBy?: CompanyInfoOrderByWithRelationInput | CompanyInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyInfos.
     */
    cursor?: CompanyInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyInfos.
     */
    distinct?: CompanyInfoScalarFieldEnum | CompanyInfoScalarFieldEnum[]
  }

  /**
   * CompanyInfo findMany
   */
  export type CompanyInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Filter, which CompanyInfos to fetch.
     */
    where?: CompanyInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyInfos to fetch.
     */
    orderBy?: CompanyInfoOrderByWithRelationInput | CompanyInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyInfos.
     */
    cursor?: CompanyInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyInfos.
     */
    skip?: number
    distinct?: CompanyInfoScalarFieldEnum | CompanyInfoScalarFieldEnum[]
  }

  /**
   * CompanyInfo create
   */
  export type CompanyInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * The data needed to create a CompanyInfo.
     */
    data: XOR<CompanyInfoCreateInput, CompanyInfoUncheckedCreateInput>
  }

  /**
   * CompanyInfo createMany
   */
  export type CompanyInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyInfos.
     */
    data: CompanyInfoCreateManyInput | CompanyInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyInfo createManyAndReturn
   */
  export type CompanyInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * The data used to create many CompanyInfos.
     */
    data: CompanyInfoCreateManyInput | CompanyInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyInfo update
   */
  export type CompanyInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * The data needed to update a CompanyInfo.
     */
    data: XOR<CompanyInfoUpdateInput, CompanyInfoUncheckedUpdateInput>
    /**
     * Choose, which CompanyInfo to update.
     */
    where: CompanyInfoWhereUniqueInput
  }

  /**
   * CompanyInfo updateMany
   */
  export type CompanyInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyInfos.
     */
    data: XOR<CompanyInfoUpdateManyMutationInput, CompanyInfoUncheckedUpdateManyInput>
    /**
     * Filter which CompanyInfos to update
     */
    where?: CompanyInfoWhereInput
    /**
     * Limit how many CompanyInfos to update.
     */
    limit?: number
  }

  /**
   * CompanyInfo updateManyAndReturn
   */
  export type CompanyInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * The data used to update CompanyInfos.
     */
    data: XOR<CompanyInfoUpdateManyMutationInput, CompanyInfoUncheckedUpdateManyInput>
    /**
     * Filter which CompanyInfos to update
     */
    where?: CompanyInfoWhereInput
    /**
     * Limit how many CompanyInfos to update.
     */
    limit?: number
  }

  /**
   * CompanyInfo upsert
   */
  export type CompanyInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * The filter to search for the CompanyInfo to update in case it exists.
     */
    where: CompanyInfoWhereUniqueInput
    /**
     * In case the CompanyInfo found by the `where` argument doesn't exist, create a new CompanyInfo with this data.
     */
    create: XOR<CompanyInfoCreateInput, CompanyInfoUncheckedCreateInput>
    /**
     * In case the CompanyInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyInfoUpdateInput, CompanyInfoUncheckedUpdateInput>
  }

  /**
   * CompanyInfo delete
   */
  export type CompanyInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Filter which CompanyInfo to delete.
     */
    where: CompanyInfoWhereUniqueInput
  }

  /**
   * CompanyInfo deleteMany
   */
  export type CompanyInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyInfos to delete
     */
    where?: CompanyInfoWhereInput
    /**
     * Limit how many CompanyInfos to delete.
     */
    limit?: number
  }

  /**
   * CompanyInfo without action
   */
  export type CompanyInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
  }


  /**
   * Model Stat
   */

  export type AggregateStat = {
    _count: StatCountAggregateOutputType | null
    _avg: StatAvgAggregateOutputType | null
    _sum: StatSumAggregateOutputType | null
    _min: StatMinAggregateOutputType | null
    _max: StatMaxAggregateOutputType | null
  }

  export type StatAvgAggregateOutputType = {
    id: number | null
  }

  export type StatSumAggregateOutputType = {
    id: number | null
  }

  export type StatMinAggregateOutputType = {
    id: number | null
    key: string | null
    labelEn: string | null
    labelVn: string | null
    value: string | null
    detailEn: string | null
    detailVn: string | null
  }

  export type StatMaxAggregateOutputType = {
    id: number | null
    key: string | null
    labelEn: string | null
    labelVn: string | null
    value: string | null
    detailEn: string | null
    detailVn: string | null
  }

  export type StatCountAggregateOutputType = {
    id: number
    key: number
    labelEn: number
    labelVn: number
    value: number
    detailEn: number
    detailVn: number
    _all: number
  }


  export type StatAvgAggregateInputType = {
    id?: true
  }

  export type StatSumAggregateInputType = {
    id?: true
  }

  export type StatMinAggregateInputType = {
    id?: true
    key?: true
    labelEn?: true
    labelVn?: true
    value?: true
    detailEn?: true
    detailVn?: true
  }

  export type StatMaxAggregateInputType = {
    id?: true
    key?: true
    labelEn?: true
    labelVn?: true
    value?: true
    detailEn?: true
    detailVn?: true
  }

  export type StatCountAggregateInputType = {
    id?: true
    key?: true
    labelEn?: true
    labelVn?: true
    value?: true
    detailEn?: true
    detailVn?: true
    _all?: true
  }

  export type StatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stat to aggregate.
     */
    where?: StatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatOrderByWithRelationInput | StatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stats
    **/
    _count?: true | StatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatMaxAggregateInputType
  }

  export type GetStatAggregateType<T extends StatAggregateArgs> = {
        [P in keyof T & keyof AggregateStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStat[P]>
      : GetScalarType<T[P], AggregateStat[P]>
  }




  export type StatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatWhereInput
    orderBy?: StatOrderByWithAggregationInput | StatOrderByWithAggregationInput[]
    by: StatScalarFieldEnum[] | StatScalarFieldEnum
    having?: StatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatCountAggregateInputType | true
    _avg?: StatAvgAggregateInputType
    _sum?: StatSumAggregateInputType
    _min?: StatMinAggregateInputType
    _max?: StatMaxAggregateInputType
  }

  export type StatGroupByOutputType = {
    id: number
    key: string
    labelEn: string
    labelVn: string
    value: string
    detailEn: string | null
    detailVn: string | null
    _count: StatCountAggregateOutputType | null
    _avg: StatAvgAggregateOutputType | null
    _sum: StatSumAggregateOutputType | null
    _min: StatMinAggregateOutputType | null
    _max: StatMaxAggregateOutputType | null
  }

  type GetStatGroupByPayload<T extends StatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatGroupByOutputType[P]>
            : GetScalarType<T[P], StatGroupByOutputType[P]>
        }
      >
    >


  export type StatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    labelEn?: boolean
    labelVn?: boolean
    value?: boolean
    detailEn?: boolean
    detailVn?: boolean
  }, ExtArgs["result"]["stat"]>

  export type StatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    labelEn?: boolean
    labelVn?: boolean
    value?: boolean
    detailEn?: boolean
    detailVn?: boolean
  }, ExtArgs["result"]["stat"]>

  export type StatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    labelEn?: boolean
    labelVn?: boolean
    value?: boolean
    detailEn?: boolean
    detailVn?: boolean
  }, ExtArgs["result"]["stat"]>

  export type StatSelectScalar = {
    id?: boolean
    key?: boolean
    labelEn?: boolean
    labelVn?: boolean
    value?: boolean
    detailEn?: boolean
    detailVn?: boolean
  }

  export type StatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "labelEn" | "labelVn" | "value" | "detailEn" | "detailVn", ExtArgs["result"]["stat"]>

  export type $StatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      labelEn: string
      labelVn: string
      value: string
      detailEn: string | null
      detailVn: string | null
    }, ExtArgs["result"]["stat"]>
    composites: {}
  }

  type StatGetPayload<S extends boolean | null | undefined | StatDefaultArgs> = $Result.GetResult<Prisma.$StatPayload, S>

  type StatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatCountAggregateInputType | true
    }

  export interface StatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stat'], meta: { name: 'Stat' } }
    /**
     * Find zero or one Stat that matches the filter.
     * @param {StatFindUniqueArgs} args - Arguments to find a Stat
     * @example
     * // Get one Stat
     * const stat = await prisma.stat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatFindUniqueArgs>(args: SelectSubset<T, StatFindUniqueArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Stat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatFindUniqueOrThrowArgs} args - Arguments to find a Stat
     * @example
     * // Get one Stat
     * const stat = await prisma.stat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatFindUniqueOrThrowArgs>(args: SelectSubset<T, StatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Stat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatFindFirstArgs} args - Arguments to find a Stat
     * @example
     * // Get one Stat
     * const stat = await prisma.stat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatFindFirstArgs>(args?: SelectSubset<T, StatFindFirstArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Stat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatFindFirstOrThrowArgs} args - Arguments to find a Stat
     * @example
     * // Get one Stat
     * const stat = await prisma.stat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatFindFirstOrThrowArgs>(args?: SelectSubset<T, StatFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stats
     * const stats = await prisma.stat.findMany()
     * 
     * // Get first 10 Stats
     * const stats = await prisma.stat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statWithIdOnly = await prisma.stat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatFindManyArgs>(args?: SelectSubset<T, StatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Stat.
     * @param {StatCreateArgs} args - Arguments to create a Stat.
     * @example
     * // Create one Stat
     * const Stat = await prisma.stat.create({
     *   data: {
     *     // ... data to create a Stat
     *   }
     * })
     * 
     */
    create<T extends StatCreateArgs>(args: SelectSubset<T, StatCreateArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Stats.
     * @param {StatCreateManyArgs} args - Arguments to create many Stats.
     * @example
     * // Create many Stats
     * const stat = await prisma.stat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatCreateManyArgs>(args?: SelectSubset<T, StatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stats and returns the data saved in the database.
     * @param {StatCreateManyAndReturnArgs} args - Arguments to create many Stats.
     * @example
     * // Create many Stats
     * const stat = await prisma.stat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stats and only return the `id`
     * const statWithIdOnly = await prisma.stat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatCreateManyAndReturnArgs>(args?: SelectSubset<T, StatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Stat.
     * @param {StatDeleteArgs} args - Arguments to delete one Stat.
     * @example
     * // Delete one Stat
     * const Stat = await prisma.stat.delete({
     *   where: {
     *     // ... filter to delete one Stat
     *   }
     * })
     * 
     */
    delete<T extends StatDeleteArgs>(args: SelectSubset<T, StatDeleteArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Stat.
     * @param {StatUpdateArgs} args - Arguments to update one Stat.
     * @example
     * // Update one Stat
     * const stat = await prisma.stat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatUpdateArgs>(args: SelectSubset<T, StatUpdateArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Stats.
     * @param {StatDeleteManyArgs} args - Arguments to filter Stats to delete.
     * @example
     * // Delete a few Stats
     * const { count } = await prisma.stat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatDeleteManyArgs>(args?: SelectSubset<T, StatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stats
     * const stat = await prisma.stat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatUpdateManyArgs>(args: SelectSubset<T, StatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stats and returns the data updated in the database.
     * @param {StatUpdateManyAndReturnArgs} args - Arguments to update many Stats.
     * @example
     * // Update many Stats
     * const stat = await prisma.stat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stats and only return the `id`
     * const statWithIdOnly = await prisma.stat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StatUpdateManyAndReturnArgs>(args: SelectSubset<T, StatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Stat.
     * @param {StatUpsertArgs} args - Arguments to update or create a Stat.
     * @example
     * // Update or create a Stat
     * const stat = await prisma.stat.upsert({
     *   create: {
     *     // ... data to create a Stat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stat we want to update
     *   }
     * })
     */
    upsert<T extends StatUpsertArgs>(args: SelectSubset<T, StatUpsertArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatCountArgs} args - Arguments to filter Stats to count.
     * @example
     * // Count the number of Stats
     * const count = await prisma.stat.count({
     *   where: {
     *     // ... the filter for the Stats we want to count
     *   }
     * })
    **/
    count<T extends StatCountArgs>(
      args?: Subset<T, StatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatAggregateArgs>(args: Subset<T, StatAggregateArgs>): Prisma.PrismaPromise<GetStatAggregateType<T>>

    /**
     * Group by Stat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatGroupByArgs['orderBy'] }
        : { orderBy?: StatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stat model
   */
  readonly fields: StatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stat model
   */ 
  interface StatFieldRefs {
    readonly id: FieldRef<"Stat", 'Int'>
    readonly key: FieldRef<"Stat", 'String'>
    readonly labelEn: FieldRef<"Stat", 'String'>
    readonly labelVn: FieldRef<"Stat", 'String'>
    readonly value: FieldRef<"Stat", 'String'>
    readonly detailEn: FieldRef<"Stat", 'String'>
    readonly detailVn: FieldRef<"Stat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Stat findUnique
   */
  export type StatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * Filter, which Stat to fetch.
     */
    where: StatWhereUniqueInput
  }

  /**
   * Stat findUniqueOrThrow
   */
  export type StatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * Filter, which Stat to fetch.
     */
    where: StatWhereUniqueInput
  }

  /**
   * Stat findFirst
   */
  export type StatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * Filter, which Stat to fetch.
     */
    where?: StatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatOrderByWithRelationInput | StatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stats.
     */
    cursor?: StatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stats.
     */
    distinct?: StatScalarFieldEnum | StatScalarFieldEnum[]
  }

  /**
   * Stat findFirstOrThrow
   */
  export type StatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * Filter, which Stat to fetch.
     */
    where?: StatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatOrderByWithRelationInput | StatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stats.
     */
    cursor?: StatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stats.
     */
    distinct?: StatScalarFieldEnum | StatScalarFieldEnum[]
  }

  /**
   * Stat findMany
   */
  export type StatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where?: StatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatOrderByWithRelationInput | StatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stats.
     */
    cursor?: StatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    distinct?: StatScalarFieldEnum | StatScalarFieldEnum[]
  }

  /**
   * Stat create
   */
  export type StatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * The data needed to create a Stat.
     */
    data: XOR<StatCreateInput, StatUncheckedCreateInput>
  }

  /**
   * Stat createMany
   */
  export type StatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stats.
     */
    data: StatCreateManyInput | StatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stat createManyAndReturn
   */
  export type StatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * The data used to create many Stats.
     */
    data: StatCreateManyInput | StatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stat update
   */
  export type StatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * The data needed to update a Stat.
     */
    data: XOR<StatUpdateInput, StatUncheckedUpdateInput>
    /**
     * Choose, which Stat to update.
     */
    where: StatWhereUniqueInput
  }

  /**
   * Stat updateMany
   */
  export type StatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stats.
     */
    data: XOR<StatUpdateManyMutationInput, StatUncheckedUpdateManyInput>
    /**
     * Filter which Stats to update
     */
    where?: StatWhereInput
    /**
     * Limit how many Stats to update.
     */
    limit?: number
  }

  /**
   * Stat updateManyAndReturn
   */
  export type StatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * The data used to update Stats.
     */
    data: XOR<StatUpdateManyMutationInput, StatUncheckedUpdateManyInput>
    /**
     * Filter which Stats to update
     */
    where?: StatWhereInput
    /**
     * Limit how many Stats to update.
     */
    limit?: number
  }

  /**
   * Stat upsert
   */
  export type StatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * The filter to search for the Stat to update in case it exists.
     */
    where: StatWhereUniqueInput
    /**
     * In case the Stat found by the `where` argument doesn't exist, create a new Stat with this data.
     */
    create: XOR<StatCreateInput, StatUncheckedCreateInput>
    /**
     * In case the Stat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatUpdateInput, StatUncheckedUpdateInput>
  }

  /**
   * Stat delete
   */
  export type StatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * Filter which Stat to delete.
     */
    where: StatWhereUniqueInput
  }

  /**
   * Stat deleteMany
   */
  export type StatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stats to delete
     */
    where?: StatWhereInput
    /**
     * Limit how many Stats to delete.
     */
    limit?: number
  }

  /**
   * Stat without action
   */
  export type StatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
  }


  /**
   * Model Manager
   */

  export type AggregateManager = {
    _count: ManagerCountAggregateOutputType | null
    _min: ManagerMinAggregateOutputType | null
    _max: ManagerMaxAggregateOutputType | null
  }

  export type ManagerMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    fullName: string | null
    email: string | null
    role: $Enums.ManagerRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ManagerMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    fullName: string | null
    email: string | null
    role: $Enums.ManagerRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ManagerCountAggregateOutputType = {
    id: number
    username: number
    password: number
    fullName: number
    email: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ManagerMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    fullName?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ManagerMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    fullName?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ManagerCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    fullName?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ManagerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manager to aggregate.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Managers
    **/
    _count?: true | ManagerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManagerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManagerMaxAggregateInputType
  }

  export type GetManagerAggregateType<T extends ManagerAggregateArgs> = {
        [P in keyof T & keyof AggregateManager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManager[P]>
      : GetScalarType<T[P], AggregateManager[P]>
  }




  export type ManagerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagerWhereInput
    orderBy?: ManagerOrderByWithAggregationInput | ManagerOrderByWithAggregationInput[]
    by: ManagerScalarFieldEnum[] | ManagerScalarFieldEnum
    having?: ManagerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManagerCountAggregateInputType | true
    _min?: ManagerMinAggregateInputType
    _max?: ManagerMaxAggregateInputType
  }

  export type ManagerGroupByOutputType = {
    id: string
    username: string
    password: string
    fullName: string | null
    email: string | null
    role: $Enums.ManagerRole
    createdAt: Date
    updatedAt: Date
    _count: ManagerCountAggregateOutputType | null
    _min: ManagerMinAggregateOutputType | null
    _max: ManagerMaxAggregateOutputType | null
  }

  type GetManagerGroupByPayload<T extends ManagerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManagerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManagerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManagerGroupByOutputType[P]>
            : GetScalarType<T[P], ManagerGroupByOutputType[P]>
        }
      >
    >


  export type ManagerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    fullName?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roles?: boolean | Manager$rolesArgs<ExtArgs>
    _count?: boolean | ManagerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manager"]>

  export type ManagerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    fullName?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["manager"]>

  export type ManagerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    fullName?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["manager"]>

  export type ManagerSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    fullName?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ManagerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "fullName" | "email" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["manager"]>
  export type ManagerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Manager$rolesArgs<ExtArgs>
    _count?: boolean | ManagerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ManagerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ManagerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ManagerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Manager"
    objects: {
      roles: Prisma.$ManagerOnRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      fullName: string | null
      email: string | null
      role: $Enums.ManagerRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["manager"]>
    composites: {}
  }

  type ManagerGetPayload<S extends boolean | null | undefined | ManagerDefaultArgs> = $Result.GetResult<Prisma.$ManagerPayload, S>

  type ManagerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManagerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManagerCountAggregateInputType | true
    }

  export interface ManagerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Manager'], meta: { name: 'Manager' } }
    /**
     * Find zero or one Manager that matches the filter.
     * @param {ManagerFindUniqueArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManagerFindUniqueArgs>(args: SelectSubset<T, ManagerFindUniqueArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Manager that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManagerFindUniqueOrThrowArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManagerFindUniqueOrThrowArgs>(args: SelectSubset<T, ManagerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Manager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindFirstArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManagerFindFirstArgs>(args?: SelectSubset<T, ManagerFindFirstArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Manager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindFirstOrThrowArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManagerFindFirstOrThrowArgs>(args?: SelectSubset<T, ManagerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Managers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Managers
     * const managers = await prisma.manager.findMany()
     * 
     * // Get first 10 Managers
     * const managers = await prisma.manager.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const managerWithIdOnly = await prisma.manager.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManagerFindManyArgs>(args?: SelectSubset<T, ManagerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Manager.
     * @param {ManagerCreateArgs} args - Arguments to create a Manager.
     * @example
     * // Create one Manager
     * const Manager = await prisma.manager.create({
     *   data: {
     *     // ... data to create a Manager
     *   }
     * })
     * 
     */
    create<T extends ManagerCreateArgs>(args: SelectSubset<T, ManagerCreateArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Managers.
     * @param {ManagerCreateManyArgs} args - Arguments to create many Managers.
     * @example
     * // Create many Managers
     * const manager = await prisma.manager.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManagerCreateManyArgs>(args?: SelectSubset<T, ManagerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Managers and returns the data saved in the database.
     * @param {ManagerCreateManyAndReturnArgs} args - Arguments to create many Managers.
     * @example
     * // Create many Managers
     * const manager = await prisma.manager.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Managers and only return the `id`
     * const managerWithIdOnly = await prisma.manager.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ManagerCreateManyAndReturnArgs>(args?: SelectSubset<T, ManagerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Manager.
     * @param {ManagerDeleteArgs} args - Arguments to delete one Manager.
     * @example
     * // Delete one Manager
     * const Manager = await prisma.manager.delete({
     *   where: {
     *     // ... filter to delete one Manager
     *   }
     * })
     * 
     */
    delete<T extends ManagerDeleteArgs>(args: SelectSubset<T, ManagerDeleteArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Manager.
     * @param {ManagerUpdateArgs} args - Arguments to update one Manager.
     * @example
     * // Update one Manager
     * const manager = await prisma.manager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManagerUpdateArgs>(args: SelectSubset<T, ManagerUpdateArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Managers.
     * @param {ManagerDeleteManyArgs} args - Arguments to filter Managers to delete.
     * @example
     * // Delete a few Managers
     * const { count } = await prisma.manager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManagerDeleteManyArgs>(args?: SelectSubset<T, ManagerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Managers
     * const manager = await prisma.manager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManagerUpdateManyArgs>(args: SelectSubset<T, ManagerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Managers and returns the data updated in the database.
     * @param {ManagerUpdateManyAndReturnArgs} args - Arguments to update many Managers.
     * @example
     * // Update many Managers
     * const manager = await prisma.manager.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Managers and only return the `id`
     * const managerWithIdOnly = await prisma.manager.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ManagerUpdateManyAndReturnArgs>(args: SelectSubset<T, ManagerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Manager.
     * @param {ManagerUpsertArgs} args - Arguments to update or create a Manager.
     * @example
     * // Update or create a Manager
     * const manager = await prisma.manager.upsert({
     *   create: {
     *     // ... data to create a Manager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manager we want to update
     *   }
     * })
     */
    upsert<T extends ManagerUpsertArgs>(args: SelectSubset<T, ManagerUpsertArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerCountArgs} args - Arguments to filter Managers to count.
     * @example
     * // Count the number of Managers
     * const count = await prisma.manager.count({
     *   where: {
     *     // ... the filter for the Managers we want to count
     *   }
     * })
    **/
    count<T extends ManagerCountArgs>(
      args?: Subset<T, ManagerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManagerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManagerAggregateArgs>(args: Subset<T, ManagerAggregateArgs>): Prisma.PrismaPromise<GetManagerAggregateType<T>>

    /**
     * Group by Manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ManagerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManagerGroupByArgs['orderBy'] }
        : { orderBy?: ManagerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManagerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Manager model
   */
  readonly fields: ManagerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Manager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManagerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Manager$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Manager$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerOnRolePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Manager model
   */ 
  interface ManagerFieldRefs {
    readonly id: FieldRef<"Manager", 'String'>
    readonly username: FieldRef<"Manager", 'String'>
    readonly password: FieldRef<"Manager", 'String'>
    readonly fullName: FieldRef<"Manager", 'String'>
    readonly email: FieldRef<"Manager", 'String'>
    readonly role: FieldRef<"Manager", 'ManagerRole'>
    readonly createdAt: FieldRef<"Manager", 'DateTime'>
    readonly updatedAt: FieldRef<"Manager", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Manager findUnique
   */
  export type ManagerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager findUniqueOrThrow
   */
  export type ManagerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager findFirst
   */
  export type ManagerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Managers.
     */
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }

  /**
   * Manager findFirstOrThrow
   */
  export type ManagerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Managers.
     */
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }

  /**
   * Manager findMany
   */
  export type ManagerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Managers to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }

  /**
   * Manager create
   */
  export type ManagerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The data needed to create a Manager.
     */
    data: XOR<ManagerCreateInput, ManagerUncheckedCreateInput>
  }

  /**
   * Manager createMany
   */
  export type ManagerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Managers.
     */
    data: ManagerCreateManyInput | ManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manager createManyAndReturn
   */
  export type ManagerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * The data used to create many Managers.
     */
    data: ManagerCreateManyInput | ManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manager update
   */
  export type ManagerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The data needed to update a Manager.
     */
    data: XOR<ManagerUpdateInput, ManagerUncheckedUpdateInput>
    /**
     * Choose, which Manager to update.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager updateMany
   */
  export type ManagerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Managers.
     */
    data: XOR<ManagerUpdateManyMutationInput, ManagerUncheckedUpdateManyInput>
    /**
     * Filter which Managers to update
     */
    where?: ManagerWhereInput
    /**
     * Limit how many Managers to update.
     */
    limit?: number
  }

  /**
   * Manager updateManyAndReturn
   */
  export type ManagerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * The data used to update Managers.
     */
    data: XOR<ManagerUpdateManyMutationInput, ManagerUncheckedUpdateManyInput>
    /**
     * Filter which Managers to update
     */
    where?: ManagerWhereInput
    /**
     * Limit how many Managers to update.
     */
    limit?: number
  }

  /**
   * Manager upsert
   */
  export type ManagerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The filter to search for the Manager to update in case it exists.
     */
    where: ManagerWhereUniqueInput
    /**
     * In case the Manager found by the `where` argument doesn't exist, create a new Manager with this data.
     */
    create: XOR<ManagerCreateInput, ManagerUncheckedCreateInput>
    /**
     * In case the Manager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManagerUpdateInput, ManagerUncheckedUpdateInput>
  }

  /**
   * Manager delete
   */
  export type ManagerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter which Manager to delete.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager deleteMany
   */
  export type ManagerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Managers to delete
     */
    where?: ManagerWhereInput
    /**
     * Limit how many Managers to delete.
     */
    limit?: number
  }

  /**
   * Manager.roles
   */
  export type Manager$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerOnRole
     */
    select?: ManagerOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerOnRole
     */
    omit?: ManagerOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerOnRoleInclude<ExtArgs> | null
    where?: ManagerOnRoleWhereInput
    orderBy?: ManagerOnRoleOrderByWithRelationInput | ManagerOnRoleOrderByWithRelationInput[]
    cursor?: ManagerOnRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManagerOnRoleScalarFieldEnum | ManagerOnRoleScalarFieldEnum[]
  }

  /**
   * Manager without action
   */
  export type ManagerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    subject: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    subject: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    subject: number
    message: number
    status: number
    createdAt: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string | null
    subject: string | null
    message: string
    status: string
    createdAt: Date
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "subject" | "message" | "status" | "createdAt", ExtArgs["result"]["contact"]>

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string | null
      subject: string | null
      message: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contact model
   */ 
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'Int'>
    readonly name: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly phone: FieldRef<"Contact", 'String'>
    readonly subject: FieldRef<"Contact", 'String'>
    readonly message: FieldRef<"Contact", 'String'>
    readonly status: FieldRef<"Contact", 'String'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    descriptionEn: string | null
    descriptionVn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    descriptionEn: string | null
    descriptionVn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    descriptionEn: number
    descriptionVn: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    descriptionEn?: true
    descriptionVn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    descriptionEn?: true
    descriptionVn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    descriptionEn?: true
    descriptionVn?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    descriptionEn: string | null
    descriptionVn: string | null
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    managers?: boolean | Role$managersArgs<ExtArgs>
    modulePermissions?: boolean | Role$modulePermissionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "descriptionEn" | "descriptionVn" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managers?: boolean | Role$managersArgs<ExtArgs>
    modulePermissions?: boolean | Role$modulePermissionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      managers: Prisma.$ManagerOnRolePayload<ExtArgs>[]
      modulePermissions: Prisma.$ModulePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      descriptionEn: string | null
      descriptionVn: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    managers<T extends Role$managersArgs<ExtArgs> = {}>(args?: Subset<T, Role$managersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerOnRolePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    modulePermissions<T extends Role$modulePermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$modulePermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePermissionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly descriptionEn: FieldRef<"Role", 'String'>
    readonly descriptionVn: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.managers
   */
  export type Role$managersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerOnRole
     */
    select?: ManagerOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerOnRole
     */
    omit?: ManagerOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerOnRoleInclude<ExtArgs> | null
    where?: ManagerOnRoleWhereInput
    orderBy?: ManagerOnRoleOrderByWithRelationInput | ManagerOnRoleOrderByWithRelationInput[]
    cursor?: ManagerOnRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManagerOnRoleScalarFieldEnum | ManagerOnRoleScalarFieldEnum[]
  }

  /**
   * Role.modulePermissions
   */
  export type Role$modulePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulePermission
     */
    select?: ModulePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModulePermission
     */
    omit?: ModulePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulePermissionInclude<ExtArgs> | null
    where?: ModulePermissionWhereInput
    orderBy?: ModulePermissionOrderByWithRelationInput | ModulePermissionOrderByWithRelationInput[]
    cursor?: ModulePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModulePermissionScalarFieldEnum | ModulePermissionScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleMinAggregateOutputType = {
    id: string | null
    nameEn: string | null
    nameVn: string | null
    code: string | null
    descriptionEn: string | null
    descriptionVn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: string | null
    nameEn: string | null
    nameVn: string | null
    code: string | null
    descriptionEn: string | null
    descriptionVn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    nameEn: number
    nameVn: number
    code: number
    descriptionEn: number
    descriptionVn: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModuleMinAggregateInputType = {
    id?: true
    nameEn?: true
    nameVn?: true
    code?: true
    descriptionEn?: true
    descriptionVn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    nameEn?: true
    nameVn?: true
    code?: true
    descriptionEn?: true
    descriptionVn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    nameEn?: true
    nameVn?: true
    code?: true
    descriptionEn?: true
    descriptionVn?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Module to aggregate.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type ModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithAggregationInput | ModuleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: ModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id: string
    nameEn: string
    nameVn: string
    code: string
    descriptionEn: string | null
    descriptionVn: string | null
    createdAt: Date
    updatedAt: Date
    _count: ModuleCountAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type ModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameEn?: boolean
    nameVn?: boolean
    code?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modulePermissions?: boolean | Module$modulePermissionsArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameEn?: boolean
    nameVn?: boolean
    code?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameEn?: boolean
    nameVn?: boolean
    code?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectScalar = {
    id?: boolean
    nameEn?: boolean
    nameVn?: boolean
    code?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameEn" | "nameVn" | "code" | "descriptionEn" | "descriptionVn" | "createdAt" | "updatedAt", ExtArgs["result"]["module"]>
  export type ModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulePermissions?: boolean | Module$modulePermissionsArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Module"
    objects: {
      modulePermissions: Prisma.$ModulePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameEn: string
      nameVn: string
      code: string
      descriptionEn: string | null
      descriptionVn: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = $Result.GetResult<Prisma.$ModulePayload, S>

  type ModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface ModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Module'], meta: { name: 'Module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {ModuleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleFindUniqueArgs>(args: SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleFindFirstArgs>(args?: SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleFindManyArgs>(args?: SelectSubset<T, ModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Module.
     * @param {ModuleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends ModuleCreateArgs>(args: SelectSubset<T, ModuleCreateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Modules.
     * @param {ModuleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleCreateManyArgs>(args?: SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modules and returns the data saved in the database.
     * @param {ModuleCreateManyAndReturnArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Module.
     * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends ModuleDeleteArgs>(args: SelectSubset<T, ModuleDeleteArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Module.
     * @param {ModuleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleUpdateArgs>(args: SelectSubset<T, ModuleUpdateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Modules.
     * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleDeleteManyArgs>(args?: SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleUpdateManyArgs>(args: SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules and returns the data updated in the database.
     * @param {ModuleUpdateManyAndReturnArgs} args - Arguments to update many Modules.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Module.
     * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends ModuleUpsertArgs>(args: SelectSubset<T, ModuleUpsertArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends ModuleCountArgs>(
      args?: Subset<T, ModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleGroupByArgs['orderBy'] }
        : { orderBy?: ModuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Module model
   */
  readonly fields: ModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modulePermissions<T extends Module$modulePermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Module$modulePermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePermissionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Module model
   */ 
  interface ModuleFieldRefs {
    readonly id: FieldRef<"Module", 'String'>
    readonly nameEn: FieldRef<"Module", 'String'>
    readonly nameVn: FieldRef<"Module", 'String'>
    readonly code: FieldRef<"Module", 'String'>
    readonly descriptionEn: FieldRef<"Module", 'String'>
    readonly descriptionVn: FieldRef<"Module", 'String'>
    readonly createdAt: FieldRef<"Module", 'DateTime'>
    readonly updatedAt: FieldRef<"Module", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Module findUnique
   */
  export type ModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findUniqueOrThrow
   */
  export type ModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findFirst
   */
  export type ModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findFirstOrThrow
   */
  export type ModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findMany
   */
  export type ModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Modules to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module create
   */
  export type ModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Module.
     */
    data: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
  }

  /**
   * Module createMany
   */
  export type ModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Module createManyAndReturn
   */
  export type ModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Module update
   */
  export type ModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Module.
     */
    data: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
    /**
     * Choose, which Module to update.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module updateMany
   */
  export type ModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module updateManyAndReturn
   */
  export type ModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module upsert
   */
  export type ModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Module to update in case it exists.
     */
    where: ModuleWhereUniqueInput
    /**
     * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
     */
    create: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
    /**
     * In case the Module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
  }

  /**
   * Module delete
   */
  export type ModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter which Module to delete.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module deleteMany
   */
  export type ModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modules to delete
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to delete.
     */
    limit?: number
  }

  /**
   * Module.modulePermissions
   */
  export type Module$modulePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulePermission
     */
    select?: ModulePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModulePermission
     */
    omit?: ModulePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulePermissionInclude<ExtArgs> | null
    where?: ModulePermissionWhereInput
    orderBy?: ModulePermissionOrderByWithRelationInput | ModulePermissionOrderByWithRelationInput[]
    cursor?: ModulePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModulePermissionScalarFieldEnum | ModulePermissionScalarFieldEnum[]
  }

  /**
   * Module without action
   */
  export type ModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionMinAggregateOutputType = {
    id: string | null
    nameEn: string | null
    nameVn: string | null
    code: string | null
    descriptionEn: string | null
    descriptionVn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: string | null
    nameEn: string | null
    nameVn: string | null
    code: string | null
    descriptionEn: string | null
    descriptionVn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    nameEn: number
    nameVn: number
    code: number
    descriptionEn: number
    descriptionVn: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PermissionMinAggregateInputType = {
    id?: true
    nameEn?: true
    nameVn?: true
    code?: true
    descriptionEn?: true
    descriptionVn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    nameEn?: true
    nameVn?: true
    code?: true
    descriptionEn?: true
    descriptionVn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    nameEn?: true
    nameVn?: true
    code?: true
    descriptionEn?: true
    descriptionVn?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: string
    nameEn: string
    nameVn: string
    code: string
    descriptionEn: string | null
    descriptionVn: string | null
    createdAt: Date
    updatedAt: Date
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameEn?: boolean
    nameVn?: boolean
    code?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modulePermissions?: boolean | Permission$modulePermissionsArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameEn?: boolean
    nameVn?: boolean
    code?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameEn?: boolean
    nameVn?: boolean
    code?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    nameEn?: boolean
    nameVn?: boolean
    code?: boolean
    descriptionEn?: boolean
    descriptionVn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameEn" | "nameVn" | "code" | "descriptionEn" | "descriptionVn" | "createdAt" | "updatedAt", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulePermissions?: boolean | Permission$modulePermissionsArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      modulePermissions: Prisma.$ModulePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameEn: string
      nameVn: string
      code: string
      descriptionEn: string | null
      descriptionVn: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {PermissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modulePermissions<T extends Permission$modulePermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Permission$modulePermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePermissionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permission model
   */ 
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'String'>
    readonly nameEn: FieldRef<"Permission", 'String'>
    readonly nameVn: FieldRef<"Permission", 'String'>
    readonly code: FieldRef<"Permission", 'String'>
    readonly descriptionEn: FieldRef<"Permission", 'String'>
    readonly descriptionVn: FieldRef<"Permission", 'String'>
    readonly createdAt: FieldRef<"Permission", 'DateTime'>
    readonly updatedAt: FieldRef<"Permission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission updateManyAndReturn
   */
  export type PermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission.modulePermissions
   */
  export type Permission$modulePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulePermission
     */
    select?: ModulePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModulePermission
     */
    omit?: ModulePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulePermissionInclude<ExtArgs> | null
    where?: ModulePermissionWhereInput
    orderBy?: ModulePermissionOrderByWithRelationInput | ModulePermissionOrderByWithRelationInput[]
    cursor?: ModulePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModulePermissionScalarFieldEnum | ModulePermissionScalarFieldEnum[]
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model ModulePermission
   */

  export type AggregateModulePermission = {
    _count: ModulePermissionCountAggregateOutputType | null
    _min: ModulePermissionMinAggregateOutputType | null
    _max: ModulePermissionMaxAggregateOutputType | null
  }

  export type ModulePermissionMinAggregateOutputType = {
    id: string | null
    roleId: string | null
    moduleId: string | null
    permissionId: string | null
    createdAt: Date | null
  }

  export type ModulePermissionMaxAggregateOutputType = {
    id: string | null
    roleId: string | null
    moduleId: string | null
    permissionId: string | null
    createdAt: Date | null
  }

  export type ModulePermissionCountAggregateOutputType = {
    id: number
    roleId: number
    moduleId: number
    permissionId: number
    createdAt: number
    _all: number
  }


  export type ModulePermissionMinAggregateInputType = {
    id?: true
    roleId?: true
    moduleId?: true
    permissionId?: true
    createdAt?: true
  }

  export type ModulePermissionMaxAggregateInputType = {
    id?: true
    roleId?: true
    moduleId?: true
    permissionId?: true
    createdAt?: true
  }

  export type ModulePermissionCountAggregateInputType = {
    id?: true
    roleId?: true
    moduleId?: true
    permissionId?: true
    createdAt?: true
    _all?: true
  }

  export type ModulePermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModulePermission to aggregate.
     */
    where?: ModulePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModulePermissions to fetch.
     */
    orderBy?: ModulePermissionOrderByWithRelationInput | ModulePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModulePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModulePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModulePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModulePermissions
    **/
    _count?: true | ModulePermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModulePermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModulePermissionMaxAggregateInputType
  }

  export type GetModulePermissionAggregateType<T extends ModulePermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateModulePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModulePermission[P]>
      : GetScalarType<T[P], AggregateModulePermission[P]>
  }




  export type ModulePermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModulePermissionWhereInput
    orderBy?: ModulePermissionOrderByWithAggregationInput | ModulePermissionOrderByWithAggregationInput[]
    by: ModulePermissionScalarFieldEnum[] | ModulePermissionScalarFieldEnum
    having?: ModulePermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModulePermissionCountAggregateInputType | true
    _min?: ModulePermissionMinAggregateInputType
    _max?: ModulePermissionMaxAggregateInputType
  }

  export type ModulePermissionGroupByOutputType = {
    id: string
    roleId: string
    moduleId: string
    permissionId: string
    createdAt: Date
    _count: ModulePermissionCountAggregateOutputType | null
    _min: ModulePermissionMinAggregateOutputType | null
    _max: ModulePermissionMaxAggregateOutputType | null
  }

  type GetModulePermissionGroupByPayload<T extends ModulePermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModulePermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModulePermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModulePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], ModulePermissionGroupByOutputType[P]>
        }
      >
    >


  export type ModulePermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    moduleId?: boolean
    permissionId?: boolean
    createdAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modulePermission"]>

  export type ModulePermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    moduleId?: boolean
    permissionId?: boolean
    createdAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modulePermission"]>

  export type ModulePermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    moduleId?: boolean
    permissionId?: boolean
    createdAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modulePermission"]>

  export type ModulePermissionSelectScalar = {
    id?: boolean
    roleId?: boolean
    moduleId?: boolean
    permissionId?: boolean
    createdAt?: boolean
  }

  export type ModulePermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "moduleId" | "permissionId" | "createdAt", ExtArgs["result"]["modulePermission"]>
  export type ModulePermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }
  export type ModulePermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }
  export type ModulePermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }

  export type $ModulePermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModulePermission"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      module: Prisma.$ModulePayload<ExtArgs>
      permission: Prisma.$PermissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roleId: string
      moduleId: string
      permissionId: string
      createdAt: Date
    }, ExtArgs["result"]["modulePermission"]>
    composites: {}
  }

  type ModulePermissionGetPayload<S extends boolean | null | undefined | ModulePermissionDefaultArgs> = $Result.GetResult<Prisma.$ModulePermissionPayload, S>

  type ModulePermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModulePermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModulePermissionCountAggregateInputType | true
    }

  export interface ModulePermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModulePermission'], meta: { name: 'ModulePermission' } }
    /**
     * Find zero or one ModulePermission that matches the filter.
     * @param {ModulePermissionFindUniqueArgs} args - Arguments to find a ModulePermission
     * @example
     * // Get one ModulePermission
     * const modulePermission = await prisma.modulePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModulePermissionFindUniqueArgs>(args: SelectSubset<T, ModulePermissionFindUniqueArgs<ExtArgs>>): Prisma__ModulePermissionClient<$Result.GetResult<Prisma.$ModulePermissionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ModulePermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModulePermissionFindUniqueOrThrowArgs} args - Arguments to find a ModulePermission
     * @example
     * // Get one ModulePermission
     * const modulePermission = await prisma.modulePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModulePermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ModulePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModulePermissionClient<$Result.GetResult<Prisma.$ModulePermissionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ModulePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModulePermissionFindFirstArgs} args - Arguments to find a ModulePermission
     * @example
     * // Get one ModulePermission
     * const modulePermission = await prisma.modulePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModulePermissionFindFirstArgs>(args?: SelectSubset<T, ModulePermissionFindFirstArgs<ExtArgs>>): Prisma__ModulePermissionClient<$Result.GetResult<Prisma.$ModulePermissionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ModulePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModulePermissionFindFirstOrThrowArgs} args - Arguments to find a ModulePermission
     * @example
     * // Get one ModulePermission
     * const modulePermission = await prisma.modulePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModulePermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ModulePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModulePermissionClient<$Result.GetResult<Prisma.$ModulePermissionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ModulePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModulePermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModulePermissions
     * const modulePermissions = await prisma.modulePermission.findMany()
     * 
     * // Get first 10 ModulePermissions
     * const modulePermissions = await prisma.modulePermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modulePermissionWithIdOnly = await prisma.modulePermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModulePermissionFindManyArgs>(args?: SelectSubset<T, ModulePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePermissionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ModulePermission.
     * @param {ModulePermissionCreateArgs} args - Arguments to create a ModulePermission.
     * @example
     * // Create one ModulePermission
     * const ModulePermission = await prisma.modulePermission.create({
     *   data: {
     *     // ... data to create a ModulePermission
     *   }
     * })
     * 
     */
    create<T extends ModulePermissionCreateArgs>(args: SelectSubset<T, ModulePermissionCreateArgs<ExtArgs>>): Prisma__ModulePermissionClient<$Result.GetResult<Prisma.$ModulePermissionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ModulePermissions.
     * @param {ModulePermissionCreateManyArgs} args - Arguments to create many ModulePermissions.
     * @example
     * // Create many ModulePermissions
     * const modulePermission = await prisma.modulePermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModulePermissionCreateManyArgs>(args?: SelectSubset<T, ModulePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModulePermissions and returns the data saved in the database.
     * @param {ModulePermissionCreateManyAndReturnArgs} args - Arguments to create many ModulePermissions.
     * @example
     * // Create many ModulePermissions
     * const modulePermission = await prisma.modulePermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModulePermissions and only return the `id`
     * const modulePermissionWithIdOnly = await prisma.modulePermission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModulePermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ModulePermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePermissionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ModulePermission.
     * @param {ModulePermissionDeleteArgs} args - Arguments to delete one ModulePermission.
     * @example
     * // Delete one ModulePermission
     * const ModulePermission = await prisma.modulePermission.delete({
     *   where: {
     *     // ... filter to delete one ModulePermission
     *   }
     * })
     * 
     */
    delete<T extends ModulePermissionDeleteArgs>(args: SelectSubset<T, ModulePermissionDeleteArgs<ExtArgs>>): Prisma__ModulePermissionClient<$Result.GetResult<Prisma.$ModulePermissionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ModulePermission.
     * @param {ModulePermissionUpdateArgs} args - Arguments to update one ModulePermission.
     * @example
     * // Update one ModulePermission
     * const modulePermission = await prisma.modulePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModulePermissionUpdateArgs>(args: SelectSubset<T, ModulePermissionUpdateArgs<ExtArgs>>): Prisma__ModulePermissionClient<$Result.GetResult<Prisma.$ModulePermissionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ModulePermissions.
     * @param {ModulePermissionDeleteManyArgs} args - Arguments to filter ModulePermissions to delete.
     * @example
     * // Delete a few ModulePermissions
     * const { count } = await prisma.modulePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModulePermissionDeleteManyArgs>(args?: SelectSubset<T, ModulePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModulePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModulePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModulePermissions
     * const modulePermission = await prisma.modulePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModulePermissionUpdateManyArgs>(args: SelectSubset<T, ModulePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModulePermissions and returns the data updated in the database.
     * @param {ModulePermissionUpdateManyAndReturnArgs} args - Arguments to update many ModulePermissions.
     * @example
     * // Update many ModulePermissions
     * const modulePermission = await prisma.modulePermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModulePermissions and only return the `id`
     * const modulePermissionWithIdOnly = await prisma.modulePermission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModulePermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ModulePermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePermissionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ModulePermission.
     * @param {ModulePermissionUpsertArgs} args - Arguments to update or create a ModulePermission.
     * @example
     * // Update or create a ModulePermission
     * const modulePermission = await prisma.modulePermission.upsert({
     *   create: {
     *     // ... data to create a ModulePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModulePermission we want to update
     *   }
     * })
     */
    upsert<T extends ModulePermissionUpsertArgs>(args: SelectSubset<T, ModulePermissionUpsertArgs<ExtArgs>>): Prisma__ModulePermissionClient<$Result.GetResult<Prisma.$ModulePermissionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ModulePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModulePermissionCountArgs} args - Arguments to filter ModulePermissions to count.
     * @example
     * // Count the number of ModulePermissions
     * const count = await prisma.modulePermission.count({
     *   where: {
     *     // ... the filter for the ModulePermissions we want to count
     *   }
     * })
    **/
    count<T extends ModulePermissionCountArgs>(
      args?: Subset<T, ModulePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModulePermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModulePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModulePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModulePermissionAggregateArgs>(args: Subset<T, ModulePermissionAggregateArgs>): Prisma.PrismaPromise<GetModulePermissionAggregateType<T>>

    /**
     * Group by ModulePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModulePermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModulePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModulePermissionGroupByArgs['orderBy'] }
        : { orderBy?: ModulePermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModulePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModulePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModulePermission model
   */
  readonly fields: ModulePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModulePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModulePermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    permission<T extends PermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionDefaultArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModulePermission model
   */ 
  interface ModulePermissionFieldRefs {
    readonly id: FieldRef<"ModulePermission", 'String'>
    readonly roleId: FieldRef<"ModulePermission", 'String'>
    readonly moduleId: FieldRef<"ModulePermission", 'String'>
    readonly permissionId: FieldRef<"ModulePermission", 'String'>
    readonly createdAt: FieldRef<"ModulePermission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModulePermission findUnique
   */
  export type ModulePermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulePermission
     */
    select?: ModulePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModulePermission
     */
    omit?: ModulePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulePermissionInclude<ExtArgs> | null
    /**
     * Filter, which ModulePermission to fetch.
     */
    where: ModulePermissionWhereUniqueInput
  }

  /**
   * ModulePermission findUniqueOrThrow
   */
  export type ModulePermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulePermission
     */
    select?: ModulePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModulePermission
     */
    omit?: ModulePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulePermissionInclude<ExtArgs> | null
    /**
     * Filter, which ModulePermission to fetch.
     */
    where: ModulePermissionWhereUniqueInput
  }

  /**
   * ModulePermission findFirst
   */
  export type ModulePermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulePermission
     */
    select?: ModulePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModulePermission
     */
    omit?: ModulePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulePermissionInclude<ExtArgs> | null
    /**
     * Filter, which ModulePermission to fetch.
     */
    where?: ModulePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModulePermissions to fetch.
     */
    orderBy?: ModulePermissionOrderByWithRelationInput | ModulePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModulePermissions.
     */
    cursor?: ModulePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModulePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModulePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModulePermissions.
     */
    distinct?: ModulePermissionScalarFieldEnum | ModulePermissionScalarFieldEnum[]
  }

  /**
   * ModulePermission findFirstOrThrow
   */
  export type ModulePermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulePermission
     */
    select?: ModulePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModulePermission
     */
    omit?: ModulePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulePermissionInclude<ExtArgs> | null
    /**
     * Filter, which ModulePermission to fetch.
     */
    where?: ModulePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModulePermissions to fetch.
     */
    orderBy?: ModulePermissionOrderByWithRelationInput | ModulePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModulePermissions.
     */
    cursor?: ModulePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModulePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModulePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModulePermissions.
     */
    distinct?: ModulePermissionScalarFieldEnum | ModulePermissionScalarFieldEnum[]
  }

  /**
   * ModulePermission findMany
   */
  export type ModulePermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulePermission
     */
    select?: ModulePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModulePermission
     */
    omit?: ModulePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulePermissionInclude<ExtArgs> | null
    /**
     * Filter, which ModulePermissions to fetch.
     */
    where?: ModulePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModulePermissions to fetch.
     */
    orderBy?: ModulePermissionOrderByWithRelationInput | ModulePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModulePermissions.
     */
    cursor?: ModulePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModulePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModulePermissions.
     */
    skip?: number
    distinct?: ModulePermissionScalarFieldEnum | ModulePermissionScalarFieldEnum[]
  }

  /**
   * ModulePermission create
   */
  export type ModulePermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulePermission
     */
    select?: ModulePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModulePermission
     */
    omit?: ModulePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulePermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a ModulePermission.
     */
    data: XOR<ModulePermissionCreateInput, ModulePermissionUncheckedCreateInput>
  }

  /**
   * ModulePermission createMany
   */
  export type ModulePermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModulePermissions.
     */
    data: ModulePermissionCreateManyInput | ModulePermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModulePermission createManyAndReturn
   */
  export type ModulePermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulePermission
     */
    select?: ModulePermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModulePermission
     */
    omit?: ModulePermissionOmit<ExtArgs> | null
    /**
     * The data used to create many ModulePermissions.
     */
    data: ModulePermissionCreateManyInput | ModulePermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulePermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModulePermission update
   */
  export type ModulePermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulePermission
     */
    select?: ModulePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModulePermission
     */
    omit?: ModulePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulePermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a ModulePermission.
     */
    data: XOR<ModulePermissionUpdateInput, ModulePermissionUncheckedUpdateInput>
    /**
     * Choose, which ModulePermission to update.
     */
    where: ModulePermissionWhereUniqueInput
  }

  /**
   * ModulePermission updateMany
   */
  export type ModulePermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModulePermissions.
     */
    data: XOR<ModulePermissionUpdateManyMutationInput, ModulePermissionUncheckedUpdateManyInput>
    /**
     * Filter which ModulePermissions to update
     */
    where?: ModulePermissionWhereInput
    /**
     * Limit how many ModulePermissions to update.
     */
    limit?: number
  }

  /**
   * ModulePermission updateManyAndReturn
   */
  export type ModulePermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulePermission
     */
    select?: ModulePermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModulePermission
     */
    omit?: ModulePermissionOmit<ExtArgs> | null
    /**
     * The data used to update ModulePermissions.
     */
    data: XOR<ModulePermissionUpdateManyMutationInput, ModulePermissionUncheckedUpdateManyInput>
    /**
     * Filter which ModulePermissions to update
     */
    where?: ModulePermissionWhereInput
    /**
     * Limit how many ModulePermissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulePermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModulePermission upsert
   */
  export type ModulePermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulePermission
     */
    select?: ModulePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModulePermission
     */
    omit?: ModulePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulePermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the ModulePermission to update in case it exists.
     */
    where: ModulePermissionWhereUniqueInput
    /**
     * In case the ModulePermission found by the `where` argument doesn't exist, create a new ModulePermission with this data.
     */
    create: XOR<ModulePermissionCreateInput, ModulePermissionUncheckedCreateInput>
    /**
     * In case the ModulePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModulePermissionUpdateInput, ModulePermissionUncheckedUpdateInput>
  }

  /**
   * ModulePermission delete
   */
  export type ModulePermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulePermission
     */
    select?: ModulePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModulePermission
     */
    omit?: ModulePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulePermissionInclude<ExtArgs> | null
    /**
     * Filter which ModulePermission to delete.
     */
    where: ModulePermissionWhereUniqueInput
  }

  /**
   * ModulePermission deleteMany
   */
  export type ModulePermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModulePermissions to delete
     */
    where?: ModulePermissionWhereInput
    /**
     * Limit how many ModulePermissions to delete.
     */
    limit?: number
  }

  /**
   * ModulePermission without action
   */
  export type ModulePermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulePermission
     */
    select?: ModulePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModulePermission
     */
    omit?: ModulePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModulePermissionInclude<ExtArgs> | null
  }


  /**
   * Model ManagerOnRole
   */

  export type AggregateManagerOnRole = {
    _count: ManagerOnRoleCountAggregateOutputType | null
    _min: ManagerOnRoleMinAggregateOutputType | null
    _max: ManagerOnRoleMaxAggregateOutputType | null
  }

  export type ManagerOnRoleMinAggregateOutputType = {
    managerId: string | null
    roleId: string | null
  }

  export type ManagerOnRoleMaxAggregateOutputType = {
    managerId: string | null
    roleId: string | null
  }

  export type ManagerOnRoleCountAggregateOutputType = {
    managerId: number
    roleId: number
    _all: number
  }


  export type ManagerOnRoleMinAggregateInputType = {
    managerId?: true
    roleId?: true
  }

  export type ManagerOnRoleMaxAggregateInputType = {
    managerId?: true
    roleId?: true
  }

  export type ManagerOnRoleCountAggregateInputType = {
    managerId?: true
    roleId?: true
    _all?: true
  }

  export type ManagerOnRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManagerOnRole to aggregate.
     */
    where?: ManagerOnRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagerOnRoles to fetch.
     */
    orderBy?: ManagerOnRoleOrderByWithRelationInput | ManagerOnRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManagerOnRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagerOnRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagerOnRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ManagerOnRoles
    **/
    _count?: true | ManagerOnRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManagerOnRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManagerOnRoleMaxAggregateInputType
  }

  export type GetManagerOnRoleAggregateType<T extends ManagerOnRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateManagerOnRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManagerOnRole[P]>
      : GetScalarType<T[P], AggregateManagerOnRole[P]>
  }




  export type ManagerOnRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagerOnRoleWhereInput
    orderBy?: ManagerOnRoleOrderByWithAggregationInput | ManagerOnRoleOrderByWithAggregationInput[]
    by: ManagerOnRoleScalarFieldEnum[] | ManagerOnRoleScalarFieldEnum
    having?: ManagerOnRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManagerOnRoleCountAggregateInputType | true
    _min?: ManagerOnRoleMinAggregateInputType
    _max?: ManagerOnRoleMaxAggregateInputType
  }

  export type ManagerOnRoleGroupByOutputType = {
    managerId: string
    roleId: string
    _count: ManagerOnRoleCountAggregateOutputType | null
    _min: ManagerOnRoleMinAggregateOutputType | null
    _max: ManagerOnRoleMaxAggregateOutputType | null
  }

  type GetManagerOnRoleGroupByPayload<T extends ManagerOnRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManagerOnRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManagerOnRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManagerOnRoleGroupByOutputType[P]>
            : GetScalarType<T[P], ManagerOnRoleGroupByOutputType[P]>
        }
      >
    >


  export type ManagerOnRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    managerId?: boolean
    roleId?: boolean
    manager?: boolean | ManagerDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["managerOnRole"]>

  export type ManagerOnRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    managerId?: boolean
    roleId?: boolean
    manager?: boolean | ManagerDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["managerOnRole"]>

  export type ManagerOnRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    managerId?: boolean
    roleId?: boolean
    manager?: boolean | ManagerDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["managerOnRole"]>

  export type ManagerOnRoleSelectScalar = {
    managerId?: boolean
    roleId?: boolean
  }

  export type ManagerOnRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"managerId" | "roleId", ExtArgs["result"]["managerOnRole"]>
  export type ManagerOnRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | ManagerDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type ManagerOnRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | ManagerDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type ManagerOnRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | ManagerDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $ManagerOnRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ManagerOnRole"
    objects: {
      manager: Prisma.$ManagerPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      managerId: string
      roleId: string
    }, ExtArgs["result"]["managerOnRole"]>
    composites: {}
  }

  type ManagerOnRoleGetPayload<S extends boolean | null | undefined | ManagerOnRoleDefaultArgs> = $Result.GetResult<Prisma.$ManagerOnRolePayload, S>

  type ManagerOnRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManagerOnRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManagerOnRoleCountAggregateInputType | true
    }

  export interface ManagerOnRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ManagerOnRole'], meta: { name: 'ManagerOnRole' } }
    /**
     * Find zero or one ManagerOnRole that matches the filter.
     * @param {ManagerOnRoleFindUniqueArgs} args - Arguments to find a ManagerOnRole
     * @example
     * // Get one ManagerOnRole
     * const managerOnRole = await prisma.managerOnRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManagerOnRoleFindUniqueArgs>(args: SelectSubset<T, ManagerOnRoleFindUniqueArgs<ExtArgs>>): Prisma__ManagerOnRoleClient<$Result.GetResult<Prisma.$ManagerOnRolePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ManagerOnRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManagerOnRoleFindUniqueOrThrowArgs} args - Arguments to find a ManagerOnRole
     * @example
     * // Get one ManagerOnRole
     * const managerOnRole = await prisma.managerOnRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManagerOnRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, ManagerOnRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManagerOnRoleClient<$Result.GetResult<Prisma.$ManagerOnRolePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ManagerOnRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerOnRoleFindFirstArgs} args - Arguments to find a ManagerOnRole
     * @example
     * // Get one ManagerOnRole
     * const managerOnRole = await prisma.managerOnRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManagerOnRoleFindFirstArgs>(args?: SelectSubset<T, ManagerOnRoleFindFirstArgs<ExtArgs>>): Prisma__ManagerOnRoleClient<$Result.GetResult<Prisma.$ManagerOnRolePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ManagerOnRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerOnRoleFindFirstOrThrowArgs} args - Arguments to find a ManagerOnRole
     * @example
     * // Get one ManagerOnRole
     * const managerOnRole = await prisma.managerOnRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManagerOnRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, ManagerOnRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManagerOnRoleClient<$Result.GetResult<Prisma.$ManagerOnRolePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ManagerOnRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerOnRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ManagerOnRoles
     * const managerOnRoles = await prisma.managerOnRole.findMany()
     * 
     * // Get first 10 ManagerOnRoles
     * const managerOnRoles = await prisma.managerOnRole.findMany({ take: 10 })
     * 
     * // Only select the `managerId`
     * const managerOnRoleWithManagerIdOnly = await prisma.managerOnRole.findMany({ select: { managerId: true } })
     * 
     */
    findMany<T extends ManagerOnRoleFindManyArgs>(args?: SelectSubset<T, ManagerOnRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerOnRolePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ManagerOnRole.
     * @param {ManagerOnRoleCreateArgs} args - Arguments to create a ManagerOnRole.
     * @example
     * // Create one ManagerOnRole
     * const ManagerOnRole = await prisma.managerOnRole.create({
     *   data: {
     *     // ... data to create a ManagerOnRole
     *   }
     * })
     * 
     */
    create<T extends ManagerOnRoleCreateArgs>(args: SelectSubset<T, ManagerOnRoleCreateArgs<ExtArgs>>): Prisma__ManagerOnRoleClient<$Result.GetResult<Prisma.$ManagerOnRolePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ManagerOnRoles.
     * @param {ManagerOnRoleCreateManyArgs} args - Arguments to create many ManagerOnRoles.
     * @example
     * // Create many ManagerOnRoles
     * const managerOnRole = await prisma.managerOnRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManagerOnRoleCreateManyArgs>(args?: SelectSubset<T, ManagerOnRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ManagerOnRoles and returns the data saved in the database.
     * @param {ManagerOnRoleCreateManyAndReturnArgs} args - Arguments to create many ManagerOnRoles.
     * @example
     * // Create many ManagerOnRoles
     * const managerOnRole = await prisma.managerOnRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ManagerOnRoles and only return the `managerId`
     * const managerOnRoleWithManagerIdOnly = await prisma.managerOnRole.createManyAndReturn({
     *   select: { managerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ManagerOnRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, ManagerOnRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerOnRolePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ManagerOnRole.
     * @param {ManagerOnRoleDeleteArgs} args - Arguments to delete one ManagerOnRole.
     * @example
     * // Delete one ManagerOnRole
     * const ManagerOnRole = await prisma.managerOnRole.delete({
     *   where: {
     *     // ... filter to delete one ManagerOnRole
     *   }
     * })
     * 
     */
    delete<T extends ManagerOnRoleDeleteArgs>(args: SelectSubset<T, ManagerOnRoleDeleteArgs<ExtArgs>>): Prisma__ManagerOnRoleClient<$Result.GetResult<Prisma.$ManagerOnRolePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ManagerOnRole.
     * @param {ManagerOnRoleUpdateArgs} args - Arguments to update one ManagerOnRole.
     * @example
     * // Update one ManagerOnRole
     * const managerOnRole = await prisma.managerOnRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManagerOnRoleUpdateArgs>(args: SelectSubset<T, ManagerOnRoleUpdateArgs<ExtArgs>>): Prisma__ManagerOnRoleClient<$Result.GetResult<Prisma.$ManagerOnRolePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ManagerOnRoles.
     * @param {ManagerOnRoleDeleteManyArgs} args - Arguments to filter ManagerOnRoles to delete.
     * @example
     * // Delete a few ManagerOnRoles
     * const { count } = await prisma.managerOnRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManagerOnRoleDeleteManyArgs>(args?: SelectSubset<T, ManagerOnRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManagerOnRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerOnRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ManagerOnRoles
     * const managerOnRole = await prisma.managerOnRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManagerOnRoleUpdateManyArgs>(args: SelectSubset<T, ManagerOnRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManagerOnRoles and returns the data updated in the database.
     * @param {ManagerOnRoleUpdateManyAndReturnArgs} args - Arguments to update many ManagerOnRoles.
     * @example
     * // Update many ManagerOnRoles
     * const managerOnRole = await prisma.managerOnRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ManagerOnRoles and only return the `managerId`
     * const managerOnRoleWithManagerIdOnly = await prisma.managerOnRole.updateManyAndReturn({
     *   select: { managerId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ManagerOnRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, ManagerOnRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerOnRolePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ManagerOnRole.
     * @param {ManagerOnRoleUpsertArgs} args - Arguments to update or create a ManagerOnRole.
     * @example
     * // Update or create a ManagerOnRole
     * const managerOnRole = await prisma.managerOnRole.upsert({
     *   create: {
     *     // ... data to create a ManagerOnRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ManagerOnRole we want to update
     *   }
     * })
     */
    upsert<T extends ManagerOnRoleUpsertArgs>(args: SelectSubset<T, ManagerOnRoleUpsertArgs<ExtArgs>>): Prisma__ManagerOnRoleClient<$Result.GetResult<Prisma.$ManagerOnRolePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ManagerOnRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerOnRoleCountArgs} args - Arguments to filter ManagerOnRoles to count.
     * @example
     * // Count the number of ManagerOnRoles
     * const count = await prisma.managerOnRole.count({
     *   where: {
     *     // ... the filter for the ManagerOnRoles we want to count
     *   }
     * })
    **/
    count<T extends ManagerOnRoleCountArgs>(
      args?: Subset<T, ManagerOnRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManagerOnRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ManagerOnRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerOnRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManagerOnRoleAggregateArgs>(args: Subset<T, ManagerOnRoleAggregateArgs>): Prisma.PrismaPromise<GetManagerOnRoleAggregateType<T>>

    /**
     * Group by ManagerOnRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerOnRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ManagerOnRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManagerOnRoleGroupByArgs['orderBy'] }
        : { orderBy?: ManagerOnRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManagerOnRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManagerOnRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ManagerOnRole model
   */
  readonly fields: ManagerOnRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ManagerOnRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManagerOnRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manager<T extends ManagerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ManagerDefaultArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ManagerOnRole model
   */ 
  interface ManagerOnRoleFieldRefs {
    readonly managerId: FieldRef<"ManagerOnRole", 'String'>
    readonly roleId: FieldRef<"ManagerOnRole", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ManagerOnRole findUnique
   */
  export type ManagerOnRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerOnRole
     */
    select?: ManagerOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerOnRole
     */
    omit?: ManagerOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerOnRoleInclude<ExtArgs> | null
    /**
     * Filter, which ManagerOnRole to fetch.
     */
    where: ManagerOnRoleWhereUniqueInput
  }

  /**
   * ManagerOnRole findUniqueOrThrow
   */
  export type ManagerOnRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerOnRole
     */
    select?: ManagerOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerOnRole
     */
    omit?: ManagerOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerOnRoleInclude<ExtArgs> | null
    /**
     * Filter, which ManagerOnRole to fetch.
     */
    where: ManagerOnRoleWhereUniqueInput
  }

  /**
   * ManagerOnRole findFirst
   */
  export type ManagerOnRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerOnRole
     */
    select?: ManagerOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerOnRole
     */
    omit?: ManagerOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerOnRoleInclude<ExtArgs> | null
    /**
     * Filter, which ManagerOnRole to fetch.
     */
    where?: ManagerOnRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagerOnRoles to fetch.
     */
    orderBy?: ManagerOnRoleOrderByWithRelationInput | ManagerOnRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManagerOnRoles.
     */
    cursor?: ManagerOnRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagerOnRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagerOnRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManagerOnRoles.
     */
    distinct?: ManagerOnRoleScalarFieldEnum | ManagerOnRoleScalarFieldEnum[]
  }

  /**
   * ManagerOnRole findFirstOrThrow
   */
  export type ManagerOnRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerOnRole
     */
    select?: ManagerOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerOnRole
     */
    omit?: ManagerOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerOnRoleInclude<ExtArgs> | null
    /**
     * Filter, which ManagerOnRole to fetch.
     */
    where?: ManagerOnRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagerOnRoles to fetch.
     */
    orderBy?: ManagerOnRoleOrderByWithRelationInput | ManagerOnRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManagerOnRoles.
     */
    cursor?: ManagerOnRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagerOnRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagerOnRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManagerOnRoles.
     */
    distinct?: ManagerOnRoleScalarFieldEnum | ManagerOnRoleScalarFieldEnum[]
  }

  /**
   * ManagerOnRole findMany
   */
  export type ManagerOnRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerOnRole
     */
    select?: ManagerOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerOnRole
     */
    omit?: ManagerOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerOnRoleInclude<ExtArgs> | null
    /**
     * Filter, which ManagerOnRoles to fetch.
     */
    where?: ManagerOnRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagerOnRoles to fetch.
     */
    orderBy?: ManagerOnRoleOrderByWithRelationInput | ManagerOnRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ManagerOnRoles.
     */
    cursor?: ManagerOnRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagerOnRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagerOnRoles.
     */
    skip?: number
    distinct?: ManagerOnRoleScalarFieldEnum | ManagerOnRoleScalarFieldEnum[]
  }

  /**
   * ManagerOnRole create
   */
  export type ManagerOnRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerOnRole
     */
    select?: ManagerOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerOnRole
     */
    omit?: ManagerOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerOnRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a ManagerOnRole.
     */
    data: XOR<ManagerOnRoleCreateInput, ManagerOnRoleUncheckedCreateInput>
  }

  /**
   * ManagerOnRole createMany
   */
  export type ManagerOnRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ManagerOnRoles.
     */
    data: ManagerOnRoleCreateManyInput | ManagerOnRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ManagerOnRole createManyAndReturn
   */
  export type ManagerOnRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerOnRole
     */
    select?: ManagerOnRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerOnRole
     */
    omit?: ManagerOnRoleOmit<ExtArgs> | null
    /**
     * The data used to create many ManagerOnRoles.
     */
    data: ManagerOnRoleCreateManyInput | ManagerOnRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerOnRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ManagerOnRole update
   */
  export type ManagerOnRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerOnRole
     */
    select?: ManagerOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerOnRole
     */
    omit?: ManagerOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerOnRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a ManagerOnRole.
     */
    data: XOR<ManagerOnRoleUpdateInput, ManagerOnRoleUncheckedUpdateInput>
    /**
     * Choose, which ManagerOnRole to update.
     */
    where: ManagerOnRoleWhereUniqueInput
  }

  /**
   * ManagerOnRole updateMany
   */
  export type ManagerOnRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ManagerOnRoles.
     */
    data: XOR<ManagerOnRoleUpdateManyMutationInput, ManagerOnRoleUncheckedUpdateManyInput>
    /**
     * Filter which ManagerOnRoles to update
     */
    where?: ManagerOnRoleWhereInput
    /**
     * Limit how many ManagerOnRoles to update.
     */
    limit?: number
  }

  /**
   * ManagerOnRole updateManyAndReturn
   */
  export type ManagerOnRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerOnRole
     */
    select?: ManagerOnRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerOnRole
     */
    omit?: ManagerOnRoleOmit<ExtArgs> | null
    /**
     * The data used to update ManagerOnRoles.
     */
    data: XOR<ManagerOnRoleUpdateManyMutationInput, ManagerOnRoleUncheckedUpdateManyInput>
    /**
     * Filter which ManagerOnRoles to update
     */
    where?: ManagerOnRoleWhereInput
    /**
     * Limit how many ManagerOnRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerOnRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ManagerOnRole upsert
   */
  export type ManagerOnRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerOnRole
     */
    select?: ManagerOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerOnRole
     */
    omit?: ManagerOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerOnRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the ManagerOnRole to update in case it exists.
     */
    where: ManagerOnRoleWhereUniqueInput
    /**
     * In case the ManagerOnRole found by the `where` argument doesn't exist, create a new ManagerOnRole with this data.
     */
    create: XOR<ManagerOnRoleCreateInput, ManagerOnRoleUncheckedCreateInput>
    /**
     * In case the ManagerOnRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManagerOnRoleUpdateInput, ManagerOnRoleUncheckedUpdateInput>
  }

  /**
   * ManagerOnRole delete
   */
  export type ManagerOnRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerOnRole
     */
    select?: ManagerOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerOnRole
     */
    omit?: ManagerOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerOnRoleInclude<ExtArgs> | null
    /**
     * Filter which ManagerOnRole to delete.
     */
    where: ManagerOnRoleWhereUniqueInput
  }

  /**
   * ManagerOnRole deleteMany
   */
  export type ManagerOnRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManagerOnRoles to delete
     */
    where?: ManagerOnRoleWhereInput
    /**
     * Limit how many ManagerOnRoles to delete.
     */
    limit?: number
  }

  /**
   * ManagerOnRole without action
   */
  export type ManagerOnRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerOnRole
     */
    select?: ManagerOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerOnRole
     */
    omit?: ManagerOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerOnRoleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StaticContentScalarFieldEnum: {
    id: 'id',
    key: 'key',
    contentEn: 'contentEn',
    contentVn: 'contentVn',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StaticContentScalarFieldEnum = (typeof StaticContentScalarFieldEnum)[keyof typeof StaticContentScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
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

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const TechnologyCategoryScalarFieldEnum: {
    id: 'id',
    nameEn: 'nameEn',
    nameVn: 'nameVn',
    name: 'name',
    key: 'key',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt'
  };

  export type TechnologyCategoryScalarFieldEnum = (typeof TechnologyCategoryScalarFieldEnum)[keyof typeof TechnologyCategoryScalarFieldEnum]


  export const TechnologyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    categoryId: 'categoryId',
    createdAt: 'createdAt'
  };

  export type TechnologyScalarFieldEnum = (typeof TechnologyScalarFieldEnum)[keyof typeof TechnologyScalarFieldEnum]


  export const PortfolioItemScalarFieldEnum: {
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

  export type PortfolioItemScalarFieldEnum = (typeof PortfolioItemScalarFieldEnum)[keyof typeof PortfolioItemScalarFieldEnum]


  export const PortfolioCategoryScalarFieldEnum: {
    id: 'id',
    nameEn: 'nameEn',
    nameVn: 'nameVn',
    name: 'name',
    key: 'key',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt'
  };

  export type PortfolioCategoryScalarFieldEnum = (typeof PortfolioCategoryScalarFieldEnum)[keyof typeof PortfolioCategoryScalarFieldEnum]


  export const TeamMemberScalarFieldEnum: {
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

  export type TeamMemberScalarFieldEnum = (typeof TeamMemberScalarFieldEnum)[keyof typeof TeamMemberScalarFieldEnum]


  export const CompanyInfoScalarFieldEnum: {
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

  export type CompanyInfoScalarFieldEnum = (typeof CompanyInfoScalarFieldEnum)[keyof typeof CompanyInfoScalarFieldEnum]


  export const StatScalarFieldEnum: {
    id: 'id',
    key: 'key',
    labelEn: 'labelEn',
    labelVn: 'labelVn',
    value: 'value',
    detailEn: 'detailEn',
    detailVn: 'detailVn'
  };

  export type StatScalarFieldEnum = (typeof StatScalarFieldEnum)[keyof typeof StatScalarFieldEnum]


  export const ManagerScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    fullName: 'fullName',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ManagerScalarFieldEnum = (typeof ManagerScalarFieldEnum)[keyof typeof ManagerScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    subject: 'subject',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    descriptionEn: 'descriptionEn',
    descriptionVn: 'descriptionVn',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    nameEn: 'nameEn',
    nameVn: 'nameVn',
    code: 'code',
    descriptionEn: 'descriptionEn',
    descriptionVn: 'descriptionVn',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    nameEn: 'nameEn',
    nameVn: 'nameVn',
    code: 'code',
    descriptionEn: 'descriptionEn',
    descriptionVn: 'descriptionVn',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const ModulePermissionScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    moduleId: 'moduleId',
    permissionId: 'permissionId',
    createdAt: 'createdAt'
  };

  export type ModulePermissionScalarFieldEnum = (typeof ModulePermissionScalarFieldEnum)[keyof typeof ModulePermissionScalarFieldEnum]


  export const ManagerOnRoleScalarFieldEnum: {
    managerId: 'managerId',
    roleId: 'roleId'
  };

  export type ManagerOnRoleScalarFieldEnum = (typeof ManagerOnRoleScalarFieldEnum)[keyof typeof ManagerOnRoleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ManagerRole'
   */
  export type EnumManagerRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ManagerRole'>
    


  /**
   * Reference to a field of type 'ManagerRole[]'
   */
  export type ListEnumManagerRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ManagerRole[]'>
    
  /**
   * Deep Input Types
   */


  export type StaticContentWhereInput = {
    AND?: StaticContentWhereInput | StaticContentWhereInput[]
    OR?: StaticContentWhereInput[]
    NOT?: StaticContentWhereInput | StaticContentWhereInput[]
    id?: StringFilter<"StaticContent"> | string
    key?: StringFilter<"StaticContent"> | string
    contentEn?: StringFilter<"StaticContent"> | string
    contentVn?: StringFilter<"StaticContent"> | string
    createdAt?: DateTimeFilter<"StaticContent"> | Date | string
    updatedAt?: DateTimeFilter<"StaticContent"> | Date | string
  }

  export type StaticContentOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    contentEn?: SortOrder
    contentVn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaticContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: StaticContentWhereInput | StaticContentWhereInput[]
    OR?: StaticContentWhereInput[]
    NOT?: StaticContentWhereInput | StaticContentWhereInput[]
    contentEn?: StringFilter<"StaticContent"> | string
    contentVn?: StringFilter<"StaticContent"> | string
    createdAt?: DateTimeFilter<"StaticContent"> | Date | string
    updatedAt?: DateTimeFilter<"StaticContent"> | Date | string
  }, "id" | "key">

  export type StaticContentOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    contentEn?: SortOrder
    contentVn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StaticContentCountOrderByAggregateInput
    _max?: StaticContentMaxOrderByAggregateInput
    _min?: StaticContentMinOrderByAggregateInput
  }

  export type StaticContentScalarWhereWithAggregatesInput = {
    AND?: StaticContentScalarWhereWithAggregatesInput | StaticContentScalarWhereWithAggregatesInput[]
    OR?: StaticContentScalarWhereWithAggregatesInput[]
    NOT?: StaticContentScalarWhereWithAggregatesInput | StaticContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StaticContent"> | string
    key?: StringWithAggregatesFilter<"StaticContent"> | string
    contentEn?: StringWithAggregatesFilter<"StaticContent"> | string
    contentVn?: StringWithAggregatesFilter<"StaticContent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StaticContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StaticContent"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    key?: StringFilter<"Service"> | string
    icon?: StringFilter<"Service"> | string
    titleEn?: StringFilter<"Service"> | string
    titleVn?: StringFilter<"Service"> | string
    descriptionEn?: StringFilter<"Service"> | string
    descriptionVn?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    showOnHome?: BoolFilter<"Service"> | boolean
    sortOrder?: IntFilter<"Service"> | number
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    icon?: SortOrder
    titleEn?: SortOrder
    titleVn?: SortOrder
    descriptionEn?: SortOrder
    descriptionVn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    showOnHome?: SortOrder
    sortOrder?: SortOrder
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    icon?: StringFilter<"Service"> | string
    titleEn?: StringFilter<"Service"> | string
    titleVn?: StringFilter<"Service"> | string
    descriptionEn?: StringFilter<"Service"> | string
    descriptionVn?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    showOnHome?: BoolFilter<"Service"> | boolean
    sortOrder?: IntFilter<"Service"> | number
  }, "id" | "key">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    icon?: SortOrder
    titleEn?: SortOrder
    titleVn?: SortOrder
    descriptionEn?: SortOrder
    descriptionVn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    showOnHome?: SortOrder
    sortOrder?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    key?: StringWithAggregatesFilter<"Service"> | string
    icon?: StringWithAggregatesFilter<"Service"> | string
    titleEn?: StringWithAggregatesFilter<"Service"> | string
    titleVn?: StringWithAggregatesFilter<"Service"> | string
    descriptionEn?: StringWithAggregatesFilter<"Service"> | string
    descriptionVn?: StringWithAggregatesFilter<"Service"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    showOnHome?: BoolWithAggregatesFilter<"Service"> | boolean
    sortOrder?: IntWithAggregatesFilter<"Service"> | number
  }

  export type TechnologyCategoryWhereInput = {
    AND?: TechnologyCategoryWhereInput | TechnologyCategoryWhereInput[]
    OR?: TechnologyCategoryWhereInput[]
    NOT?: TechnologyCategoryWhereInput | TechnologyCategoryWhereInput[]
    id?: IntFilter<"TechnologyCategory"> | number
    nameEn?: StringFilter<"TechnologyCategory"> | string
    nameVn?: StringFilter<"TechnologyCategory"> | string
    name?: StringNullableFilter<"TechnologyCategory"> | string | null
    key?: StringNullableFilter<"TechnologyCategory"> | string | null
    sortOrder?: IntFilter<"TechnologyCategory"> | number
    createdAt?: DateTimeFilter<"TechnologyCategory"> | Date | string
    items?: TechnologyListRelationFilter
  }

  export type TechnologyCategoryOrderByWithRelationInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    name?: SortOrderInput | SortOrder
    key?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    items?: TechnologyOrderByRelationAggregateInput
  }

  export type TechnologyCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nameEn?: string
    nameVn?: string
    key?: string
    AND?: TechnologyCategoryWhereInput | TechnologyCategoryWhereInput[]
    OR?: TechnologyCategoryWhereInput[]
    NOT?: TechnologyCategoryWhereInput | TechnologyCategoryWhereInput[]
    name?: StringNullableFilter<"TechnologyCategory"> | string | null
    sortOrder?: IntFilter<"TechnologyCategory"> | number
    createdAt?: DateTimeFilter<"TechnologyCategory"> | Date | string
    items?: TechnologyListRelationFilter
  }, "id" | "nameEn" | "nameVn" | "key">

  export type TechnologyCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    name?: SortOrderInput | SortOrder
    key?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    _count?: TechnologyCategoryCountOrderByAggregateInput
    _avg?: TechnologyCategoryAvgOrderByAggregateInput
    _max?: TechnologyCategoryMaxOrderByAggregateInput
    _min?: TechnologyCategoryMinOrderByAggregateInput
    _sum?: TechnologyCategorySumOrderByAggregateInput
  }

  export type TechnologyCategoryScalarWhereWithAggregatesInput = {
    AND?: TechnologyCategoryScalarWhereWithAggregatesInput | TechnologyCategoryScalarWhereWithAggregatesInput[]
    OR?: TechnologyCategoryScalarWhereWithAggregatesInput[]
    NOT?: TechnologyCategoryScalarWhereWithAggregatesInput | TechnologyCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TechnologyCategory"> | number
    nameEn?: StringWithAggregatesFilter<"TechnologyCategory"> | string
    nameVn?: StringWithAggregatesFilter<"TechnologyCategory"> | string
    name?: StringNullableWithAggregatesFilter<"TechnologyCategory"> | string | null
    key?: StringNullableWithAggregatesFilter<"TechnologyCategory"> | string | null
    sortOrder?: IntWithAggregatesFilter<"TechnologyCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TechnologyCategory"> | Date | string
  }

  export type TechnologyWhereInput = {
    AND?: TechnologyWhereInput | TechnologyWhereInput[]
    OR?: TechnologyWhereInput[]
    NOT?: TechnologyWhereInput | TechnologyWhereInput[]
    id?: IntFilter<"Technology"> | number
    name?: StringFilter<"Technology"> | string
    category?: StringNullableFilter<"Technology"> | string | null
    categoryId?: IntNullableFilter<"Technology"> | number | null
    createdAt?: DateTimeFilter<"Technology"> | Date | string
    cat?: XOR<TechnologyCategoryNullableScalarRelationFilter, TechnologyCategoryWhereInput> | null
  }

  export type TechnologyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    cat?: TechnologyCategoryOrderByWithRelationInput
  }

  export type TechnologyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TechnologyWhereInput | TechnologyWhereInput[]
    OR?: TechnologyWhereInput[]
    NOT?: TechnologyWhereInput | TechnologyWhereInput[]
    name?: StringFilter<"Technology"> | string
    category?: StringNullableFilter<"Technology"> | string | null
    categoryId?: IntNullableFilter<"Technology"> | number | null
    createdAt?: DateTimeFilter<"Technology"> | Date | string
    cat?: XOR<TechnologyCategoryNullableScalarRelationFilter, TechnologyCategoryWhereInput> | null
  }, "id">

  export type TechnologyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TechnologyCountOrderByAggregateInput
    _avg?: TechnologyAvgOrderByAggregateInput
    _max?: TechnologyMaxOrderByAggregateInput
    _min?: TechnologyMinOrderByAggregateInput
    _sum?: TechnologySumOrderByAggregateInput
  }

  export type TechnologyScalarWhereWithAggregatesInput = {
    AND?: TechnologyScalarWhereWithAggregatesInput | TechnologyScalarWhereWithAggregatesInput[]
    OR?: TechnologyScalarWhereWithAggregatesInput[]
    NOT?: TechnologyScalarWhereWithAggregatesInput | TechnologyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Technology"> | number
    name?: StringWithAggregatesFilter<"Technology"> | string
    category?: StringNullableWithAggregatesFilter<"Technology"> | string | null
    categoryId?: IntNullableWithAggregatesFilter<"Technology"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Technology"> | Date | string
  }

  export type PortfolioItemWhereInput = {
    AND?: PortfolioItemWhereInput | PortfolioItemWhereInput[]
    OR?: PortfolioItemWhereInput[]
    NOT?: PortfolioItemWhereInput | PortfolioItemWhereInput[]
    id?: IntFilter<"PortfolioItem"> | number
    key?: StringNullableFilter<"PortfolioItem"> | string | null
    titleEn?: StringFilter<"PortfolioItem"> | string
    titleVn?: StringFilter<"PortfolioItem"> | string
    descriptionEn?: StringFilter<"PortfolioItem"> | string
    descriptionVn?: StringFilter<"PortfolioItem"> | string
    image?: StringFilter<"PortfolioItem"> | string
    categoryKey?: StringNullableFilter<"PortfolioItem"> | string | null
    categoryId?: IntNullableFilter<"PortfolioItem"> | number | null
    technologies?: StringNullableListFilter<"PortfolioItem">
    createdAt?: DateTimeFilter<"PortfolioItem"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioItem"> | Date | string
    showOnHome?: BoolFilter<"PortfolioItem"> | boolean
    sortOrder?: IntFilter<"PortfolioItem"> | number
    contentEn?: StringNullableFilter<"PortfolioItem"> | string | null
    contentVn?: StringNullableFilter<"PortfolioItem"> | string | null
    duration?: StringNullableFilter<"PortfolioItem"> | string | null
    category?: XOR<PortfolioCategoryNullableScalarRelationFilter, PortfolioCategoryWhereInput> | null
  }

  export type PortfolioItemOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrderInput | SortOrder
    titleEn?: SortOrder
    titleVn?: SortOrder
    descriptionEn?: SortOrder
    descriptionVn?: SortOrder
    image?: SortOrder
    categoryKey?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    technologies?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    showOnHome?: SortOrder
    sortOrder?: SortOrder
    contentEn?: SortOrderInput | SortOrder
    contentVn?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    category?: PortfolioCategoryOrderByWithRelationInput
  }

  export type PortfolioItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: PortfolioItemWhereInput | PortfolioItemWhereInput[]
    OR?: PortfolioItemWhereInput[]
    NOT?: PortfolioItemWhereInput | PortfolioItemWhereInput[]
    titleEn?: StringFilter<"PortfolioItem"> | string
    titleVn?: StringFilter<"PortfolioItem"> | string
    descriptionEn?: StringFilter<"PortfolioItem"> | string
    descriptionVn?: StringFilter<"PortfolioItem"> | string
    image?: StringFilter<"PortfolioItem"> | string
    categoryKey?: StringNullableFilter<"PortfolioItem"> | string | null
    categoryId?: IntNullableFilter<"PortfolioItem"> | number | null
    technologies?: StringNullableListFilter<"PortfolioItem">
    createdAt?: DateTimeFilter<"PortfolioItem"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioItem"> | Date | string
    showOnHome?: BoolFilter<"PortfolioItem"> | boolean
    sortOrder?: IntFilter<"PortfolioItem"> | number
    contentEn?: StringNullableFilter<"PortfolioItem"> | string | null
    contentVn?: StringNullableFilter<"PortfolioItem"> | string | null
    duration?: StringNullableFilter<"PortfolioItem"> | string | null
    category?: XOR<PortfolioCategoryNullableScalarRelationFilter, PortfolioCategoryWhereInput> | null
  }, "id" | "key">

  export type PortfolioItemOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrderInput | SortOrder
    titleEn?: SortOrder
    titleVn?: SortOrder
    descriptionEn?: SortOrder
    descriptionVn?: SortOrder
    image?: SortOrder
    categoryKey?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    technologies?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    showOnHome?: SortOrder
    sortOrder?: SortOrder
    contentEn?: SortOrderInput | SortOrder
    contentVn?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    _count?: PortfolioItemCountOrderByAggregateInput
    _avg?: PortfolioItemAvgOrderByAggregateInput
    _max?: PortfolioItemMaxOrderByAggregateInput
    _min?: PortfolioItemMinOrderByAggregateInput
    _sum?: PortfolioItemSumOrderByAggregateInput
  }

  export type PortfolioItemScalarWhereWithAggregatesInput = {
    AND?: PortfolioItemScalarWhereWithAggregatesInput | PortfolioItemScalarWhereWithAggregatesInput[]
    OR?: PortfolioItemScalarWhereWithAggregatesInput[]
    NOT?: PortfolioItemScalarWhereWithAggregatesInput | PortfolioItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PortfolioItem"> | number
    key?: StringNullableWithAggregatesFilter<"PortfolioItem"> | string | null
    titleEn?: StringWithAggregatesFilter<"PortfolioItem"> | string
    titleVn?: StringWithAggregatesFilter<"PortfolioItem"> | string
    descriptionEn?: StringWithAggregatesFilter<"PortfolioItem"> | string
    descriptionVn?: StringWithAggregatesFilter<"PortfolioItem"> | string
    image?: StringWithAggregatesFilter<"PortfolioItem"> | string
    categoryKey?: StringNullableWithAggregatesFilter<"PortfolioItem"> | string | null
    categoryId?: IntNullableWithAggregatesFilter<"PortfolioItem"> | number | null
    technologies?: StringNullableListFilter<"PortfolioItem">
    createdAt?: DateTimeWithAggregatesFilter<"PortfolioItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PortfolioItem"> | Date | string
    showOnHome?: BoolWithAggregatesFilter<"PortfolioItem"> | boolean
    sortOrder?: IntWithAggregatesFilter<"PortfolioItem"> | number
    contentEn?: StringNullableWithAggregatesFilter<"PortfolioItem"> | string | null
    contentVn?: StringNullableWithAggregatesFilter<"PortfolioItem"> | string | null
    duration?: StringNullableWithAggregatesFilter<"PortfolioItem"> | string | null
  }

  export type PortfolioCategoryWhereInput = {
    AND?: PortfolioCategoryWhereInput | PortfolioCategoryWhereInput[]
    OR?: PortfolioCategoryWhereInput[]
    NOT?: PortfolioCategoryWhereInput | PortfolioCategoryWhereInput[]
    id?: IntFilter<"PortfolioCategory"> | number
    nameEn?: StringFilter<"PortfolioCategory"> | string
    nameVn?: StringFilter<"PortfolioCategory"> | string
    name?: StringNullableFilter<"PortfolioCategory"> | string | null
    key?: StringNullableFilter<"PortfolioCategory"> | string | null
    sortOrder?: IntFilter<"PortfolioCategory"> | number
    createdAt?: DateTimeFilter<"PortfolioCategory"> | Date | string
    items?: PortfolioItemListRelationFilter
  }

  export type PortfolioCategoryOrderByWithRelationInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    name?: SortOrderInput | SortOrder
    key?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    items?: PortfolioItemOrderByRelationAggregateInput
  }

  export type PortfolioCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nameEn?: string
    nameVn?: string
    key?: string
    AND?: PortfolioCategoryWhereInput | PortfolioCategoryWhereInput[]
    OR?: PortfolioCategoryWhereInput[]
    NOT?: PortfolioCategoryWhereInput | PortfolioCategoryWhereInput[]
    name?: StringNullableFilter<"PortfolioCategory"> | string | null
    sortOrder?: IntFilter<"PortfolioCategory"> | number
    createdAt?: DateTimeFilter<"PortfolioCategory"> | Date | string
    items?: PortfolioItemListRelationFilter
  }, "id" | "nameEn" | "nameVn" | "key">

  export type PortfolioCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    name?: SortOrderInput | SortOrder
    key?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    _count?: PortfolioCategoryCountOrderByAggregateInput
    _avg?: PortfolioCategoryAvgOrderByAggregateInput
    _max?: PortfolioCategoryMaxOrderByAggregateInput
    _min?: PortfolioCategoryMinOrderByAggregateInput
    _sum?: PortfolioCategorySumOrderByAggregateInput
  }

  export type PortfolioCategoryScalarWhereWithAggregatesInput = {
    AND?: PortfolioCategoryScalarWhereWithAggregatesInput | PortfolioCategoryScalarWhereWithAggregatesInput[]
    OR?: PortfolioCategoryScalarWhereWithAggregatesInput[]
    NOT?: PortfolioCategoryScalarWhereWithAggregatesInput | PortfolioCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PortfolioCategory"> | number
    nameEn?: StringWithAggregatesFilter<"PortfolioCategory"> | string
    nameVn?: StringWithAggregatesFilter<"PortfolioCategory"> | string
    name?: StringNullableWithAggregatesFilter<"PortfolioCategory"> | string | null
    key?: StringNullableWithAggregatesFilter<"PortfolioCategory"> | string | null
    sortOrder?: IntWithAggregatesFilter<"PortfolioCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PortfolioCategory"> | Date | string
  }

  export type TeamMemberWhereInput = {
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    id?: IntFilter<"TeamMember"> | number
    name?: StringFilter<"TeamMember"> | string
    roleEn?: StringFilter<"TeamMember"> | string
    roleVn?: StringFilter<"TeamMember"> | string
    bioEn?: StringNullableFilter<"TeamMember"> | string | null
    bioVn?: StringNullableFilter<"TeamMember"> | string | null
    avatar?: StringNullableFilter<"TeamMember"> | string | null
    level?: IntFilter<"TeamMember"> | number
    top?: StringNullableFilter<"TeamMember"> | string | null
    right?: StringNullableFilter<"TeamMember"> | string | null
    size?: IntNullableFilter<"TeamMember"> | number | null
    delay?: FloatNullableFilter<"TeamMember"> | number | null
    createdAt?: DateTimeFilter<"TeamMember"> | Date | string
  }

  export type TeamMemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    roleEn?: SortOrder
    roleVn?: SortOrder
    bioEn?: SortOrderInput | SortOrder
    bioVn?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    level?: SortOrder
    top?: SortOrderInput | SortOrder
    right?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    delay?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type TeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    name?: StringFilter<"TeamMember"> | string
    roleEn?: StringFilter<"TeamMember"> | string
    roleVn?: StringFilter<"TeamMember"> | string
    bioEn?: StringNullableFilter<"TeamMember"> | string | null
    bioVn?: StringNullableFilter<"TeamMember"> | string | null
    avatar?: StringNullableFilter<"TeamMember"> | string | null
    level?: IntFilter<"TeamMember"> | number
    top?: StringNullableFilter<"TeamMember"> | string | null
    right?: StringNullableFilter<"TeamMember"> | string | null
    size?: IntNullableFilter<"TeamMember"> | number | null
    delay?: FloatNullableFilter<"TeamMember"> | number | null
    createdAt?: DateTimeFilter<"TeamMember"> | Date | string
  }, "id">

  export type TeamMemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    roleEn?: SortOrder
    roleVn?: SortOrder
    bioEn?: SortOrderInput | SortOrder
    bioVn?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    level?: SortOrder
    top?: SortOrderInput | SortOrder
    right?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    delay?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TeamMemberCountOrderByAggregateInput
    _avg?: TeamMemberAvgOrderByAggregateInput
    _max?: TeamMemberMaxOrderByAggregateInput
    _min?: TeamMemberMinOrderByAggregateInput
    _sum?: TeamMemberSumOrderByAggregateInput
  }

  export type TeamMemberScalarWhereWithAggregatesInput = {
    AND?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    OR?: TeamMemberScalarWhereWithAggregatesInput[]
    NOT?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeamMember"> | number
    name?: StringWithAggregatesFilter<"TeamMember"> | string
    roleEn?: StringWithAggregatesFilter<"TeamMember"> | string
    roleVn?: StringWithAggregatesFilter<"TeamMember"> | string
    bioEn?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    bioVn?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    level?: IntWithAggregatesFilter<"TeamMember"> | number
    top?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    right?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    size?: IntNullableWithAggregatesFilter<"TeamMember"> | number | null
    delay?: FloatNullableWithAggregatesFilter<"TeamMember"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string
  }

  export type CompanyInfoWhereInput = {
    AND?: CompanyInfoWhereInput | CompanyInfoWhereInput[]
    OR?: CompanyInfoWhereInput[]
    NOT?: CompanyInfoWhereInput | CompanyInfoWhereInput[]
    id?: IntFilter<"CompanyInfo"> | number
    name?: StringFilter<"CompanyInfo"> | string
    tagline?: StringNullableFilter<"CompanyInfo"> | string | null
    email?: StringNullableFilter<"CompanyInfo"> | string | null
    phone?: StringNullableFilter<"CompanyInfo"> | string | null
    addressEn?: StringNullableFilter<"CompanyInfo"> | string | null
    addressVn?: StringNullableFilter<"CompanyInfo"> | string | null
    officeImage?: StringNullableFilter<"CompanyInfo"> | string | null
    teamImage?: StringNullableFilter<"CompanyInfo"> | string | null
    updatedAt?: DateTimeFilter<"CompanyInfo"> | Date | string
  }

  export type CompanyInfoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tagline?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    addressEn?: SortOrderInput | SortOrder
    addressVn?: SortOrderInput | SortOrder
    officeImage?: SortOrderInput | SortOrder
    teamImage?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyInfoWhereInput | CompanyInfoWhereInput[]
    OR?: CompanyInfoWhereInput[]
    NOT?: CompanyInfoWhereInput | CompanyInfoWhereInput[]
    name?: StringFilter<"CompanyInfo"> | string
    tagline?: StringNullableFilter<"CompanyInfo"> | string | null
    email?: StringNullableFilter<"CompanyInfo"> | string | null
    phone?: StringNullableFilter<"CompanyInfo"> | string | null
    addressEn?: StringNullableFilter<"CompanyInfo"> | string | null
    addressVn?: StringNullableFilter<"CompanyInfo"> | string | null
    officeImage?: StringNullableFilter<"CompanyInfo"> | string | null
    teamImage?: StringNullableFilter<"CompanyInfo"> | string | null
    updatedAt?: DateTimeFilter<"CompanyInfo"> | Date | string
  }, "id">

  export type CompanyInfoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tagline?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    addressEn?: SortOrderInput | SortOrder
    addressVn?: SortOrderInput | SortOrder
    officeImage?: SortOrderInput | SortOrder
    teamImage?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: CompanyInfoCountOrderByAggregateInput
    _avg?: CompanyInfoAvgOrderByAggregateInput
    _max?: CompanyInfoMaxOrderByAggregateInput
    _min?: CompanyInfoMinOrderByAggregateInput
    _sum?: CompanyInfoSumOrderByAggregateInput
  }

  export type CompanyInfoScalarWhereWithAggregatesInput = {
    AND?: CompanyInfoScalarWhereWithAggregatesInput | CompanyInfoScalarWhereWithAggregatesInput[]
    OR?: CompanyInfoScalarWhereWithAggregatesInput[]
    NOT?: CompanyInfoScalarWhereWithAggregatesInput | CompanyInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompanyInfo"> | number
    name?: StringWithAggregatesFilter<"CompanyInfo"> | string
    tagline?: StringNullableWithAggregatesFilter<"CompanyInfo"> | string | null
    email?: StringNullableWithAggregatesFilter<"CompanyInfo"> | string | null
    phone?: StringNullableWithAggregatesFilter<"CompanyInfo"> | string | null
    addressEn?: StringNullableWithAggregatesFilter<"CompanyInfo"> | string | null
    addressVn?: StringNullableWithAggregatesFilter<"CompanyInfo"> | string | null
    officeImage?: StringNullableWithAggregatesFilter<"CompanyInfo"> | string | null
    teamImage?: StringNullableWithAggregatesFilter<"CompanyInfo"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"CompanyInfo"> | Date | string
  }

  export type StatWhereInput = {
    AND?: StatWhereInput | StatWhereInput[]
    OR?: StatWhereInput[]
    NOT?: StatWhereInput | StatWhereInput[]
    id?: IntFilter<"Stat"> | number
    key?: StringFilter<"Stat"> | string
    labelEn?: StringFilter<"Stat"> | string
    labelVn?: StringFilter<"Stat"> | string
    value?: StringFilter<"Stat"> | string
    detailEn?: StringNullableFilter<"Stat"> | string | null
    detailVn?: StringNullableFilter<"Stat"> | string | null
  }

  export type StatOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    labelEn?: SortOrder
    labelVn?: SortOrder
    value?: SortOrder
    detailEn?: SortOrderInput | SortOrder
    detailVn?: SortOrderInput | SortOrder
  }

  export type StatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: StatWhereInput | StatWhereInput[]
    OR?: StatWhereInput[]
    NOT?: StatWhereInput | StatWhereInput[]
    labelEn?: StringFilter<"Stat"> | string
    labelVn?: StringFilter<"Stat"> | string
    value?: StringFilter<"Stat"> | string
    detailEn?: StringNullableFilter<"Stat"> | string | null
    detailVn?: StringNullableFilter<"Stat"> | string | null
  }, "id" | "key">

  export type StatOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    labelEn?: SortOrder
    labelVn?: SortOrder
    value?: SortOrder
    detailEn?: SortOrderInput | SortOrder
    detailVn?: SortOrderInput | SortOrder
    _count?: StatCountOrderByAggregateInput
    _avg?: StatAvgOrderByAggregateInput
    _max?: StatMaxOrderByAggregateInput
    _min?: StatMinOrderByAggregateInput
    _sum?: StatSumOrderByAggregateInput
  }

  export type StatScalarWhereWithAggregatesInput = {
    AND?: StatScalarWhereWithAggregatesInput | StatScalarWhereWithAggregatesInput[]
    OR?: StatScalarWhereWithAggregatesInput[]
    NOT?: StatScalarWhereWithAggregatesInput | StatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Stat"> | number
    key?: StringWithAggregatesFilter<"Stat"> | string
    labelEn?: StringWithAggregatesFilter<"Stat"> | string
    labelVn?: StringWithAggregatesFilter<"Stat"> | string
    value?: StringWithAggregatesFilter<"Stat"> | string
    detailEn?: StringNullableWithAggregatesFilter<"Stat"> | string | null
    detailVn?: StringNullableWithAggregatesFilter<"Stat"> | string | null
  }

  export type ManagerWhereInput = {
    AND?: ManagerWhereInput | ManagerWhereInput[]
    OR?: ManagerWhereInput[]
    NOT?: ManagerWhereInput | ManagerWhereInput[]
    id?: StringFilter<"Manager"> | string
    username?: StringFilter<"Manager"> | string
    password?: StringFilter<"Manager"> | string
    fullName?: StringNullableFilter<"Manager"> | string | null
    email?: StringNullableFilter<"Manager"> | string | null
    role?: EnumManagerRoleFilter<"Manager"> | $Enums.ManagerRole
    createdAt?: DateTimeFilter<"Manager"> | Date | string
    updatedAt?: DateTimeFilter<"Manager"> | Date | string
    roles?: ManagerOnRoleListRelationFilter
  }

  export type ManagerOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: ManagerOnRoleOrderByRelationAggregateInput
  }

  export type ManagerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: ManagerWhereInput | ManagerWhereInput[]
    OR?: ManagerWhereInput[]
    NOT?: ManagerWhereInput | ManagerWhereInput[]
    password?: StringFilter<"Manager"> | string
    fullName?: StringNullableFilter<"Manager"> | string | null
    role?: EnumManagerRoleFilter<"Manager"> | $Enums.ManagerRole
    createdAt?: DateTimeFilter<"Manager"> | Date | string
    updatedAt?: DateTimeFilter<"Manager"> | Date | string
    roles?: ManagerOnRoleListRelationFilter
  }, "id" | "username" | "email">

  export type ManagerOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ManagerCountOrderByAggregateInput
    _max?: ManagerMaxOrderByAggregateInput
    _min?: ManagerMinOrderByAggregateInput
  }

  export type ManagerScalarWhereWithAggregatesInput = {
    AND?: ManagerScalarWhereWithAggregatesInput | ManagerScalarWhereWithAggregatesInput[]
    OR?: ManagerScalarWhereWithAggregatesInput[]
    NOT?: ManagerScalarWhereWithAggregatesInput | ManagerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Manager"> | string
    username?: StringWithAggregatesFilter<"Manager"> | string
    password?: StringWithAggregatesFilter<"Manager"> | string
    fullName?: StringNullableWithAggregatesFilter<"Manager"> | string | null
    email?: StringNullableWithAggregatesFilter<"Manager"> | string | null
    role?: EnumManagerRoleWithAggregatesFilter<"Manager"> | $Enums.ManagerRole
    createdAt?: DateTimeWithAggregatesFilter<"Manager"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Manager"> | Date | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: IntFilter<"Contact"> | number
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    phone?: StringNullableFilter<"Contact"> | string | null
    subject?: StringNullableFilter<"Contact"> | string | null
    message?: StringFilter<"Contact"> | string
    status?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    phone?: StringNullableFilter<"Contact"> | string | null
    subject?: StringNullableFilter<"Contact"> | string | null
    message?: StringFilter<"Contact"> | string
    status?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contact"> | number
    name?: StringWithAggregatesFilter<"Contact"> | string
    email?: StringWithAggregatesFilter<"Contact"> | string
    phone?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    subject?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    message?: StringWithAggregatesFilter<"Contact"> | string
    status?: StringWithAggregatesFilter<"Contact"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    descriptionEn?: StringNullableFilter<"Role"> | string | null
    descriptionVn?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    managers?: ManagerOnRoleListRelationFilter
    modulePermissions?: ModulePermissionListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    descriptionEn?: SortOrderInput | SortOrder
    descriptionVn?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    managers?: ManagerOnRoleOrderByRelationAggregateInput
    modulePermissions?: ModulePermissionOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    descriptionEn?: StringNullableFilter<"Role"> | string | null
    descriptionVn?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    managers?: ManagerOnRoleListRelationFilter
    modulePermissions?: ModulePermissionListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    descriptionEn?: SortOrderInput | SortOrder
    descriptionVn?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    descriptionEn?: StringNullableWithAggregatesFilter<"Role"> | string | null
    descriptionVn?: StringNullableWithAggregatesFilter<"Role"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type ModuleWhereInput = {
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    id?: StringFilter<"Module"> | string
    nameEn?: StringFilter<"Module"> | string
    nameVn?: StringFilter<"Module"> | string
    code?: StringFilter<"Module"> | string
    descriptionEn?: StringNullableFilter<"Module"> | string | null
    descriptionVn?: StringNullableFilter<"Module"> | string | null
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
    modulePermissions?: ModulePermissionListRelationFilter
  }

  export type ModuleOrderByWithRelationInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    code?: SortOrder
    descriptionEn?: SortOrderInput | SortOrder
    descriptionVn?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modulePermissions?: ModulePermissionOrderByRelationAggregateInput
  }

  export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    nameEn?: StringFilter<"Module"> | string
    nameVn?: StringFilter<"Module"> | string
    descriptionEn?: StringNullableFilter<"Module"> | string | null
    descriptionVn?: StringNullableFilter<"Module"> | string | null
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
    modulePermissions?: ModulePermissionListRelationFilter
  }, "id" | "code">

  export type ModuleOrderByWithAggregationInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    code?: SortOrder
    descriptionEn?: SortOrderInput | SortOrder
    descriptionVn?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModuleCountOrderByAggregateInput
    _max?: ModuleMaxOrderByAggregateInput
    _min?: ModuleMinOrderByAggregateInput
  }

  export type ModuleScalarWhereWithAggregatesInput = {
    AND?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    OR?: ModuleScalarWhereWithAggregatesInput[]
    NOT?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Module"> | string
    nameEn?: StringWithAggregatesFilter<"Module"> | string
    nameVn?: StringWithAggregatesFilter<"Module"> | string
    code?: StringWithAggregatesFilter<"Module"> | string
    descriptionEn?: StringNullableWithAggregatesFilter<"Module"> | string | null
    descriptionVn?: StringNullableWithAggregatesFilter<"Module"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Module"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Module"> | Date | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: StringFilter<"Permission"> | string
    nameEn?: StringFilter<"Permission"> | string
    nameVn?: StringFilter<"Permission"> | string
    code?: StringFilter<"Permission"> | string
    descriptionEn?: StringNullableFilter<"Permission"> | string | null
    descriptionVn?: StringNullableFilter<"Permission"> | string | null
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    modulePermissions?: ModulePermissionListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    code?: SortOrder
    descriptionEn?: SortOrderInput | SortOrder
    descriptionVn?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modulePermissions?: ModulePermissionOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    nameEn?: StringFilter<"Permission"> | string
    nameVn?: StringFilter<"Permission"> | string
    descriptionEn?: StringNullableFilter<"Permission"> | string | null
    descriptionVn?: StringNullableFilter<"Permission"> | string | null
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    modulePermissions?: ModulePermissionListRelationFilter
  }, "id" | "code">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    code?: SortOrder
    descriptionEn?: SortOrderInput | SortOrder
    descriptionVn?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Permission"> | string
    nameEn?: StringWithAggregatesFilter<"Permission"> | string
    nameVn?: StringWithAggregatesFilter<"Permission"> | string
    code?: StringWithAggregatesFilter<"Permission"> | string
    descriptionEn?: StringNullableWithAggregatesFilter<"Permission"> | string | null
    descriptionVn?: StringNullableWithAggregatesFilter<"Permission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
  }

  export type ModulePermissionWhereInput = {
    AND?: ModulePermissionWhereInput | ModulePermissionWhereInput[]
    OR?: ModulePermissionWhereInput[]
    NOT?: ModulePermissionWhereInput | ModulePermissionWhereInput[]
    id?: StringFilter<"ModulePermission"> | string
    roleId?: StringFilter<"ModulePermission"> | string
    moduleId?: StringFilter<"ModulePermission"> | string
    permissionId?: StringFilter<"ModulePermission"> | string
    createdAt?: DateTimeFilter<"ModulePermission"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }

  export type ModulePermissionOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    moduleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    module?: ModuleOrderByWithRelationInput
    permission?: PermissionOrderByWithRelationInput
  }

  export type ModulePermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roleId_moduleId_permissionId?: ModulePermissionRoleIdModuleIdPermissionIdCompoundUniqueInput
    AND?: ModulePermissionWhereInput | ModulePermissionWhereInput[]
    OR?: ModulePermissionWhereInput[]
    NOT?: ModulePermissionWhereInput | ModulePermissionWhereInput[]
    roleId?: StringFilter<"ModulePermission"> | string
    moduleId?: StringFilter<"ModulePermission"> | string
    permissionId?: StringFilter<"ModulePermission"> | string
    createdAt?: DateTimeFilter<"ModulePermission"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }, "id" | "roleId_moduleId_permissionId">

  export type ModulePermissionOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    moduleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
    _count?: ModulePermissionCountOrderByAggregateInput
    _max?: ModulePermissionMaxOrderByAggregateInput
    _min?: ModulePermissionMinOrderByAggregateInput
  }

  export type ModulePermissionScalarWhereWithAggregatesInput = {
    AND?: ModulePermissionScalarWhereWithAggregatesInput | ModulePermissionScalarWhereWithAggregatesInput[]
    OR?: ModulePermissionScalarWhereWithAggregatesInput[]
    NOT?: ModulePermissionScalarWhereWithAggregatesInput | ModulePermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ModulePermission"> | string
    roleId?: StringWithAggregatesFilter<"ModulePermission"> | string
    moduleId?: StringWithAggregatesFilter<"ModulePermission"> | string
    permissionId?: StringWithAggregatesFilter<"ModulePermission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ModulePermission"> | Date | string
  }

  export type ManagerOnRoleWhereInput = {
    AND?: ManagerOnRoleWhereInput | ManagerOnRoleWhereInput[]
    OR?: ManagerOnRoleWhereInput[]
    NOT?: ManagerOnRoleWhereInput | ManagerOnRoleWhereInput[]
    managerId?: StringFilter<"ManagerOnRole"> | string
    roleId?: StringFilter<"ManagerOnRole"> | string
    manager?: XOR<ManagerScalarRelationFilter, ManagerWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type ManagerOnRoleOrderByWithRelationInput = {
    managerId?: SortOrder
    roleId?: SortOrder
    manager?: ManagerOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type ManagerOnRoleWhereUniqueInput = Prisma.AtLeast<{
    managerId_roleId?: ManagerOnRoleManagerIdRoleIdCompoundUniqueInput
    AND?: ManagerOnRoleWhereInput | ManagerOnRoleWhereInput[]
    OR?: ManagerOnRoleWhereInput[]
    NOT?: ManagerOnRoleWhereInput | ManagerOnRoleWhereInput[]
    managerId?: StringFilter<"ManagerOnRole"> | string
    roleId?: StringFilter<"ManagerOnRole"> | string
    manager?: XOR<ManagerScalarRelationFilter, ManagerWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "managerId_roleId">

  export type ManagerOnRoleOrderByWithAggregationInput = {
    managerId?: SortOrder
    roleId?: SortOrder
    _count?: ManagerOnRoleCountOrderByAggregateInput
    _max?: ManagerOnRoleMaxOrderByAggregateInput
    _min?: ManagerOnRoleMinOrderByAggregateInput
  }

  export type ManagerOnRoleScalarWhereWithAggregatesInput = {
    AND?: ManagerOnRoleScalarWhereWithAggregatesInput | ManagerOnRoleScalarWhereWithAggregatesInput[]
    OR?: ManagerOnRoleScalarWhereWithAggregatesInput[]
    NOT?: ManagerOnRoleScalarWhereWithAggregatesInput | ManagerOnRoleScalarWhereWithAggregatesInput[]
    managerId?: StringWithAggregatesFilter<"ManagerOnRole"> | string
    roleId?: StringWithAggregatesFilter<"ManagerOnRole"> | string
  }

  export type StaticContentCreateInput = {
    id?: string
    key: string
    contentEn: string
    contentVn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaticContentUncheckedCreateInput = {
    id?: string
    key: string
    contentEn: string
    contentVn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaticContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    contentVn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaticContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    contentVn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaticContentCreateManyInput = {
    id?: string
    key: string
    contentEn: string
    contentVn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaticContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    contentVn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaticContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    contentEn?: StringFieldUpdateOperationsInput | string
    contentVn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    key: string
    icon: string
    titleEn: string
    titleVn: string
    descriptionEn: string
    descriptionVn: string
    createdAt?: Date | string
    updatedAt?: Date | string
    showOnHome?: boolean
    sortOrder?: number
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    key: string
    icon: string
    titleEn: string
    titleVn: string
    descriptionEn: string
    descriptionVn: string
    createdAt?: Date | string
    updatedAt?: Date | string
    showOnHome?: boolean
    sortOrder?: number
  }

  export type ServiceUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    titleVn?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionVn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showOnHome?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    titleVn?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionVn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showOnHome?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ServiceCreateManyInput = {
    id?: number
    key: string
    icon: string
    titleEn: string
    titleVn: string
    descriptionEn: string
    descriptionVn: string
    createdAt?: Date | string
    updatedAt?: Date | string
    showOnHome?: boolean
    sortOrder?: number
  }

  export type ServiceUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    titleVn?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionVn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showOnHome?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    titleVn?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionVn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showOnHome?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type TechnologyCategoryCreateInput = {
    nameEn: string
    nameVn: string
    name?: string | null
    key?: string | null
    sortOrder?: number
    createdAt?: Date | string
    items?: TechnologyCreateNestedManyWithoutCatInput
  }

  export type TechnologyCategoryUncheckedCreateInput = {
    id?: number
    nameEn: string
    nameVn: string
    name?: string | null
    key?: string | null
    sortOrder?: number
    createdAt?: Date | string
    items?: TechnologyUncheckedCreateNestedManyWithoutCatInput
  }

  export type TechnologyCategoryUpdateInput = {
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: TechnologyUpdateManyWithoutCatNestedInput
  }

  export type TechnologyCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: TechnologyUncheckedUpdateManyWithoutCatNestedInput
  }

  export type TechnologyCategoryCreateManyInput = {
    id?: number
    nameEn: string
    nameVn: string
    name?: string | null
    key?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type TechnologyCategoryUpdateManyMutationInput = {
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnologyCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnologyCreateInput = {
    name: string
    category?: string | null
    createdAt?: Date | string
    cat?: TechnologyCategoryCreateNestedOneWithoutItemsInput
  }

  export type TechnologyUncheckedCreateInput = {
    id?: number
    name: string
    category?: string | null
    categoryId?: number | null
    createdAt?: Date | string
  }

  export type TechnologyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cat?: TechnologyCategoryUpdateOneWithoutItemsNestedInput
  }

  export type TechnologyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnologyCreateManyInput = {
    id?: number
    name: string
    category?: string | null
    categoryId?: number | null
    createdAt?: Date | string
  }

  export type TechnologyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnologyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioItemCreateInput = {
    key?: string | null
    titleEn: string
    titleVn: string
    descriptionEn: string
    descriptionVn: string
    image: string
    categoryKey?: string | null
    technologies?: PortfolioItemCreatetechnologiesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    showOnHome?: boolean
    sortOrder?: number
    contentEn?: string | null
    contentVn?: string | null
    duration?: string | null
    category?: PortfolioCategoryCreateNestedOneWithoutItemsInput
  }

  export type PortfolioItemUncheckedCreateInput = {
    id?: number
    key?: string | null
    titleEn: string
    titleVn: string
    descriptionEn: string
    descriptionVn: string
    image: string
    categoryKey?: string | null
    categoryId?: number | null
    technologies?: PortfolioItemCreatetechnologiesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    showOnHome?: boolean
    sortOrder?: number
    contentEn?: string | null
    contentVn?: string | null
    duration?: string | null
  }

  export type PortfolioItemUpdateInput = {
    key?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: StringFieldUpdateOperationsInput | string
    titleVn?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionVn?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    categoryKey?: NullableStringFieldUpdateOperationsInput | string | null
    technologies?: PortfolioItemUpdatetechnologiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showOnHome?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    contentEn?: NullableStringFieldUpdateOperationsInput | string | null
    contentVn?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    category?: PortfolioCategoryUpdateOneWithoutItemsNestedInput
  }

  export type PortfolioItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: StringFieldUpdateOperationsInput | string
    titleVn?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionVn?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    categoryKey?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    technologies?: PortfolioItemUpdatetechnologiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showOnHome?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    contentEn?: NullableStringFieldUpdateOperationsInput | string | null
    contentVn?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PortfolioItemCreateManyInput = {
    id?: number
    key?: string | null
    titleEn: string
    titleVn: string
    descriptionEn: string
    descriptionVn: string
    image: string
    categoryKey?: string | null
    categoryId?: number | null
    technologies?: PortfolioItemCreatetechnologiesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    showOnHome?: boolean
    sortOrder?: number
    contentEn?: string | null
    contentVn?: string | null
    duration?: string | null
  }

  export type PortfolioItemUpdateManyMutationInput = {
    key?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: StringFieldUpdateOperationsInput | string
    titleVn?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionVn?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    categoryKey?: NullableStringFieldUpdateOperationsInput | string | null
    technologies?: PortfolioItemUpdatetechnologiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showOnHome?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    contentEn?: NullableStringFieldUpdateOperationsInput | string | null
    contentVn?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PortfolioItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: StringFieldUpdateOperationsInput | string
    titleVn?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionVn?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    categoryKey?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    technologies?: PortfolioItemUpdatetechnologiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showOnHome?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    contentEn?: NullableStringFieldUpdateOperationsInput | string | null
    contentVn?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PortfolioCategoryCreateInput = {
    nameEn: string
    nameVn: string
    name?: string | null
    key?: string | null
    sortOrder?: number
    createdAt?: Date | string
    items?: PortfolioItemCreateNestedManyWithoutCategoryInput
  }

  export type PortfolioCategoryUncheckedCreateInput = {
    id?: number
    nameEn: string
    nameVn: string
    name?: string | null
    key?: string | null
    sortOrder?: number
    createdAt?: Date | string
    items?: PortfolioItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type PortfolioCategoryUpdateInput = {
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PortfolioItemUpdateManyWithoutCategoryNestedInput
  }

  export type PortfolioCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PortfolioItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type PortfolioCategoryCreateManyInput = {
    id?: number
    nameEn: string
    nameVn: string
    name?: string | null
    key?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type PortfolioCategoryUpdateManyMutationInput = {
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateInput = {
    name: string
    roleEn: string
    roleVn: string
    bioEn?: string | null
    bioVn?: string | null
    avatar?: string | null
    level?: number
    top?: string | null
    right?: string | null
    size?: number | null
    delay?: number | null
    createdAt?: Date | string
  }

  export type TeamMemberUncheckedCreateInput = {
    id?: number
    name: string
    roleEn: string
    roleVn: string
    bioEn?: string | null
    bioVn?: string | null
    avatar?: string | null
    level?: number
    top?: string | null
    right?: string | null
    size?: number | null
    delay?: number | null
    createdAt?: Date | string
  }

  export type TeamMemberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    roleEn?: StringFieldUpdateOperationsInput | string
    roleVn?: StringFieldUpdateOperationsInput | string
    bioEn?: NullableStringFieldUpdateOperationsInput | string | null
    bioVn?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    top?: NullableStringFieldUpdateOperationsInput | string | null
    right?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    delay?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    roleEn?: StringFieldUpdateOperationsInput | string
    roleVn?: StringFieldUpdateOperationsInput | string
    bioEn?: NullableStringFieldUpdateOperationsInput | string | null
    bioVn?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    top?: NullableStringFieldUpdateOperationsInput | string | null
    right?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    delay?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateManyInput = {
    id?: number
    name: string
    roleEn: string
    roleVn: string
    bioEn?: string | null
    bioVn?: string | null
    avatar?: string | null
    level?: number
    top?: string | null
    right?: string | null
    size?: number | null
    delay?: number | null
    createdAt?: Date | string
  }

  export type TeamMemberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    roleEn?: StringFieldUpdateOperationsInput | string
    roleVn?: StringFieldUpdateOperationsInput | string
    bioEn?: NullableStringFieldUpdateOperationsInput | string | null
    bioVn?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    top?: NullableStringFieldUpdateOperationsInput | string | null
    right?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    delay?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    roleEn?: StringFieldUpdateOperationsInput | string
    roleVn?: StringFieldUpdateOperationsInput | string
    bioEn?: NullableStringFieldUpdateOperationsInput | string | null
    bioVn?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    top?: NullableStringFieldUpdateOperationsInput | string | null
    right?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    delay?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyInfoCreateInput = {
    id?: number
    name: string
    tagline?: string | null
    email?: string | null
    phone?: string | null
    addressEn?: string | null
    addressVn?: string | null
    officeImage?: string | null
    teamImage?: string | null
    updatedAt?: Date | string
  }

  export type CompanyInfoUncheckedCreateInput = {
    id?: number
    name: string
    tagline?: string | null
    email?: string | null
    phone?: string | null
    addressEn?: string | null
    addressVn?: string | null
    officeImage?: string | null
    teamImage?: string | null
    updatedAt?: Date | string
  }

  export type CompanyInfoUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    addressEn?: NullableStringFieldUpdateOperationsInput | string | null
    addressVn?: NullableStringFieldUpdateOperationsInput | string | null
    officeImage?: NullableStringFieldUpdateOperationsInput | string | null
    teamImage?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    addressEn?: NullableStringFieldUpdateOperationsInput | string | null
    addressVn?: NullableStringFieldUpdateOperationsInput | string | null
    officeImage?: NullableStringFieldUpdateOperationsInput | string | null
    teamImage?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyInfoCreateManyInput = {
    id?: number
    name: string
    tagline?: string | null
    email?: string | null
    phone?: string | null
    addressEn?: string | null
    addressVn?: string | null
    officeImage?: string | null
    teamImage?: string | null
    updatedAt?: Date | string
  }

  export type CompanyInfoUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    addressEn?: NullableStringFieldUpdateOperationsInput | string | null
    addressVn?: NullableStringFieldUpdateOperationsInput | string | null
    officeImage?: NullableStringFieldUpdateOperationsInput | string | null
    teamImage?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    addressEn?: NullableStringFieldUpdateOperationsInput | string | null
    addressVn?: NullableStringFieldUpdateOperationsInput | string | null
    officeImage?: NullableStringFieldUpdateOperationsInput | string | null
    teamImage?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatCreateInput = {
    key: string
    labelEn: string
    labelVn: string
    value: string
    detailEn?: string | null
    detailVn?: string | null
  }

  export type StatUncheckedCreateInput = {
    id?: number
    key: string
    labelEn: string
    labelVn: string
    value: string
    detailEn?: string | null
    detailVn?: string | null
  }

  export type StatUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    labelEn?: StringFieldUpdateOperationsInput | string
    labelVn?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    detailEn?: NullableStringFieldUpdateOperationsInput | string | null
    detailVn?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    labelEn?: StringFieldUpdateOperationsInput | string
    labelVn?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    detailEn?: NullableStringFieldUpdateOperationsInput | string | null
    detailVn?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StatCreateManyInput = {
    id?: number
    key: string
    labelEn: string
    labelVn: string
    value: string
    detailEn?: string | null
    detailVn?: string | null
  }

  export type StatUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    labelEn?: StringFieldUpdateOperationsInput | string
    labelVn?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    detailEn?: NullableStringFieldUpdateOperationsInput | string | null
    detailVn?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    labelEn?: StringFieldUpdateOperationsInput | string
    labelVn?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    detailEn?: NullableStringFieldUpdateOperationsInput | string | null
    detailVn?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ManagerCreateInput = {
    id?: string
    username: string
    password: string
    fullName?: string | null
    email?: string | null
    role?: $Enums.ManagerRole
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: ManagerOnRoleCreateNestedManyWithoutManagerInput
  }

  export type ManagerUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    fullName?: string | null
    email?: string | null
    role?: $Enums.ManagerRole
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: ManagerOnRoleUncheckedCreateNestedManyWithoutManagerInput
  }

  export type ManagerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumManagerRoleFieldUpdateOperationsInput | $Enums.ManagerRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: ManagerOnRoleUpdateManyWithoutManagerNestedInput
  }

  export type ManagerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumManagerRoleFieldUpdateOperationsInput | $Enums.ManagerRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: ManagerOnRoleUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type ManagerCreateManyInput = {
    id?: string
    username: string
    password: string
    fullName?: string | null
    email?: string | null
    role?: $Enums.ManagerRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumManagerRoleFieldUpdateOperationsInput | $Enums.ManagerRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumManagerRoleFieldUpdateOperationsInput | $Enums.ManagerRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateInput = {
    name: string
    email: string
    phone?: string | null
    subject?: string | null
    message: string
    status?: string
    createdAt?: Date | string
  }

  export type ContactUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    subject?: string | null
    message: string
    status?: string
    createdAt?: Date | string
  }

  export type ContactUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    subject?: string | null
    message: string
    status?: string
    createdAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    descriptionEn?: string | null
    descriptionVn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managers?: ManagerOnRoleCreateNestedManyWithoutRoleInput
    modulePermissions?: ModulePermissionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    descriptionEn?: string | null
    descriptionVn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managers?: ManagerOnRoleUncheckedCreateNestedManyWithoutRoleInput
    modulePermissions?: ModulePermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: ManagerOnRoleUpdateManyWithoutRoleNestedInput
    modulePermissions?: ModulePermissionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: ManagerOnRoleUncheckedUpdateManyWithoutRoleNestedInput
    modulePermissions?: ModulePermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    descriptionEn?: string | null
    descriptionVn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleCreateInput = {
    id?: string
    nameEn: string
    nameVn: string
    code: string
    descriptionEn?: string | null
    descriptionVn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    modulePermissions?: ModulePermissionCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateInput = {
    id?: string
    nameEn: string
    nameVn: string
    code: string
    descriptionEn?: string | null
    descriptionVn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    modulePermissions?: ModulePermissionUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modulePermissions?: ModulePermissionUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modulePermissions?: ModulePermissionUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateManyInput = {
    id?: string
    nameEn: string
    nameVn: string
    code: string
    descriptionEn?: string | null
    descriptionVn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateInput = {
    id?: string
    nameEn: string
    nameVn: string
    code: string
    descriptionEn?: string | null
    descriptionVn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    modulePermissions?: ModulePermissionCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: string
    nameEn: string
    nameVn: string
    code: string
    descriptionEn?: string | null
    descriptionVn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    modulePermissions?: ModulePermissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modulePermissions?: ModulePermissionUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modulePermissions?: ModulePermissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionCreateManyInput = {
    id?: string
    nameEn: string
    nameVn: string
    code: string
    descriptionEn?: string | null
    descriptionVn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModulePermissionCreateInput = {
    id?: string
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutModulePermissionsInput
    module: ModuleCreateNestedOneWithoutModulePermissionsInput
    permission: PermissionCreateNestedOneWithoutModulePermissionsInput
  }

  export type ModulePermissionUncheckedCreateInput = {
    id?: string
    roleId: string
    moduleId: string
    permissionId: string
    createdAt?: Date | string
  }

  export type ModulePermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutModulePermissionsNestedInput
    module?: ModuleUpdateOneRequiredWithoutModulePermissionsNestedInput
    permission?: PermissionUpdateOneRequiredWithoutModulePermissionsNestedInput
  }

  export type ModulePermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModulePermissionCreateManyInput = {
    id?: string
    roleId: string
    moduleId: string
    permissionId: string
    createdAt?: Date | string
  }

  export type ModulePermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModulePermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerOnRoleCreateInput = {
    manager: ManagerCreateNestedOneWithoutRolesInput
    role: RoleCreateNestedOneWithoutManagersInput
  }

  export type ManagerOnRoleUncheckedCreateInput = {
    managerId: string
    roleId: string
  }

  export type ManagerOnRoleUpdateInput = {
    manager?: ManagerUpdateOneRequiredWithoutRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutManagersNestedInput
  }

  export type ManagerOnRoleUncheckedUpdateInput = {
    managerId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type ManagerOnRoleCreateManyInput = {
    managerId: string
    roleId: string
  }

  export type ManagerOnRoleUpdateManyMutationInput = {

  }

  export type ManagerOnRoleUncheckedUpdateManyInput = {
    managerId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StaticContentCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    contentEn?: SortOrder
    contentVn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaticContentMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    contentEn?: SortOrder
    contentVn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaticContentMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    contentEn?: SortOrder
    contentVn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    icon?: SortOrder
    titleEn?: SortOrder
    titleVn?: SortOrder
    descriptionEn?: SortOrder
    descriptionVn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    showOnHome?: SortOrder
    sortOrder?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    icon?: SortOrder
    titleEn?: SortOrder
    titleVn?: SortOrder
    descriptionEn?: SortOrder
    descriptionVn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    showOnHome?: SortOrder
    sortOrder?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    icon?: SortOrder
    titleEn?: SortOrder
    titleVn?: SortOrder
    descriptionEn?: SortOrder
    descriptionVn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    showOnHome?: SortOrder
    sortOrder?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TechnologyListRelationFilter = {
    every?: TechnologyWhereInput
    some?: TechnologyWhereInput
    none?: TechnologyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TechnologyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TechnologyCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    name?: SortOrder
    key?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type TechnologyCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type TechnologyCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    name?: SortOrder
    key?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type TechnologyCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    name?: SortOrder
    key?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type TechnologyCategorySumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TechnologyCategoryNullableScalarRelationFilter = {
    is?: TechnologyCategoryWhereInput | null
    isNot?: TechnologyCategoryWhereInput | null
  }

  export type TechnologyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type TechnologyAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type TechnologyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type TechnologyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type TechnologySumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PortfolioCategoryNullableScalarRelationFilter = {
    is?: PortfolioCategoryWhereInput | null
    isNot?: PortfolioCategoryWhereInput | null
  }

  export type PortfolioItemCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    titleEn?: SortOrder
    titleVn?: SortOrder
    descriptionEn?: SortOrder
    descriptionVn?: SortOrder
    image?: SortOrder
    categoryKey?: SortOrder
    categoryId?: SortOrder
    technologies?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    showOnHome?: SortOrder
    sortOrder?: SortOrder
    contentEn?: SortOrder
    contentVn?: SortOrder
    duration?: SortOrder
  }

  export type PortfolioItemAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    sortOrder?: SortOrder
  }

  export type PortfolioItemMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    titleEn?: SortOrder
    titleVn?: SortOrder
    descriptionEn?: SortOrder
    descriptionVn?: SortOrder
    image?: SortOrder
    categoryKey?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    showOnHome?: SortOrder
    sortOrder?: SortOrder
    contentEn?: SortOrder
    contentVn?: SortOrder
    duration?: SortOrder
  }

  export type PortfolioItemMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    titleEn?: SortOrder
    titleVn?: SortOrder
    descriptionEn?: SortOrder
    descriptionVn?: SortOrder
    image?: SortOrder
    categoryKey?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    showOnHome?: SortOrder
    sortOrder?: SortOrder
    contentEn?: SortOrder
    contentVn?: SortOrder
    duration?: SortOrder
  }

  export type PortfolioItemSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    sortOrder?: SortOrder
  }

  export type PortfolioItemListRelationFilter = {
    every?: PortfolioItemWhereInput
    some?: PortfolioItemWhereInput
    none?: PortfolioItemWhereInput
  }

  export type PortfolioItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PortfolioCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    name?: SortOrder
    key?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type PortfolioCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type PortfolioCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    name?: SortOrder
    key?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type PortfolioCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    name?: SortOrder
    key?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type PortfolioCategorySumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TeamMemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    roleEn?: SortOrder
    roleVn?: SortOrder
    bioEn?: SortOrder
    bioVn?: SortOrder
    avatar?: SortOrder
    level?: SortOrder
    top?: SortOrder
    right?: SortOrder
    size?: SortOrder
    delay?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    size?: SortOrder
    delay?: SortOrder
  }

  export type TeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    roleEn?: SortOrder
    roleVn?: SortOrder
    bioEn?: SortOrder
    bioVn?: SortOrder
    avatar?: SortOrder
    level?: SortOrder
    top?: SortOrder
    right?: SortOrder
    size?: SortOrder
    delay?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamMemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    roleEn?: SortOrder
    roleVn?: SortOrder
    bioEn?: SortOrder
    bioVn?: SortOrder
    avatar?: SortOrder
    level?: SortOrder
    top?: SortOrder
    right?: SortOrder
    size?: SortOrder
    delay?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamMemberSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    size?: SortOrder
    delay?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CompanyInfoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    addressEn?: SortOrder
    addressVn?: SortOrder
    officeImage?: SortOrder
    teamImage?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyInfoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    addressEn?: SortOrder
    addressVn?: SortOrder
    officeImage?: SortOrder
    teamImage?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyInfoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    addressEn?: SortOrder
    addressVn?: SortOrder
    officeImage?: SortOrder
    teamImage?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyInfoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    labelEn?: SortOrder
    labelVn?: SortOrder
    value?: SortOrder
    detailEn?: SortOrder
    detailVn?: SortOrder
  }

  export type StatAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    labelEn?: SortOrder
    labelVn?: SortOrder
    value?: SortOrder
    detailEn?: SortOrder
    detailVn?: SortOrder
  }

  export type StatMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    labelEn?: SortOrder
    labelVn?: SortOrder
    value?: SortOrder
    detailEn?: SortOrder
    detailVn?: SortOrder
  }

  export type StatSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumManagerRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ManagerRole | EnumManagerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ManagerRole[] | ListEnumManagerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ManagerRole[] | ListEnumManagerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumManagerRoleFilter<$PrismaModel> | $Enums.ManagerRole
  }

  export type ManagerOnRoleListRelationFilter = {
    every?: ManagerOnRoleWhereInput
    some?: ManagerOnRoleWhereInput
    none?: ManagerOnRoleWhereInput
  }

  export type ManagerOnRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManagerCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManagerMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManagerMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumManagerRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ManagerRole | EnumManagerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ManagerRole[] | ListEnumManagerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ManagerRole[] | ListEnumManagerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumManagerRoleWithAggregatesFilter<$PrismaModel> | $Enums.ManagerRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumManagerRoleFilter<$PrismaModel>
    _max?: NestedEnumManagerRoleFilter<$PrismaModel>
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ModulePermissionListRelationFilter = {
    every?: ModulePermissionWhereInput
    some?: ModulePermissionWhereInput
    none?: ModulePermissionWhereInput
  }

  export type ModulePermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    descriptionEn?: SortOrder
    descriptionVn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    descriptionEn?: SortOrder
    descriptionVn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    descriptionEn?: SortOrder
    descriptionVn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleCountOrderByAggregateInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    code?: SortOrder
    descriptionEn?: SortOrder
    descriptionVn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    code?: SortOrder
    descriptionEn?: SortOrder
    descriptionVn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    code?: SortOrder
    descriptionEn?: SortOrder
    descriptionVn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    code?: SortOrder
    descriptionEn?: SortOrder
    descriptionVn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    code?: SortOrder
    descriptionEn?: SortOrder
    descriptionVn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameVn?: SortOrder
    code?: SortOrder
    descriptionEn?: SortOrder
    descriptionVn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type ModuleScalarRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type PermissionScalarRelationFilter = {
    is?: PermissionWhereInput
    isNot?: PermissionWhereInput
  }

  export type ModulePermissionRoleIdModuleIdPermissionIdCompoundUniqueInput = {
    roleId: string
    moduleId: string
    permissionId: string
  }

  export type ModulePermissionCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    moduleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
  }

  export type ModulePermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    moduleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
  }

  export type ModulePermissionMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    moduleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
  }

  export type ManagerScalarRelationFilter = {
    is?: ManagerWhereInput
    isNot?: ManagerWhereInput
  }

  export type ManagerOnRoleManagerIdRoleIdCompoundUniqueInput = {
    managerId: string
    roleId: string
  }

  export type ManagerOnRoleCountOrderByAggregateInput = {
    managerId?: SortOrder
    roleId?: SortOrder
  }

  export type ManagerOnRoleMaxOrderByAggregateInput = {
    managerId?: SortOrder
    roleId?: SortOrder
  }

  export type ManagerOnRoleMinOrderByAggregateInput = {
    managerId?: SortOrder
    roleId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TechnologyCreateNestedManyWithoutCatInput = {
    create?: XOR<TechnologyCreateWithoutCatInput, TechnologyUncheckedCreateWithoutCatInput> | TechnologyCreateWithoutCatInput[] | TechnologyUncheckedCreateWithoutCatInput[]
    connectOrCreate?: TechnologyCreateOrConnectWithoutCatInput | TechnologyCreateOrConnectWithoutCatInput[]
    createMany?: TechnologyCreateManyCatInputEnvelope
    connect?: TechnologyWhereUniqueInput | TechnologyWhereUniqueInput[]
  }

  export type TechnologyUncheckedCreateNestedManyWithoutCatInput = {
    create?: XOR<TechnologyCreateWithoutCatInput, TechnologyUncheckedCreateWithoutCatInput> | TechnologyCreateWithoutCatInput[] | TechnologyUncheckedCreateWithoutCatInput[]
    connectOrCreate?: TechnologyCreateOrConnectWithoutCatInput | TechnologyCreateOrConnectWithoutCatInput[]
    createMany?: TechnologyCreateManyCatInputEnvelope
    connect?: TechnologyWhereUniqueInput | TechnologyWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TechnologyUpdateManyWithoutCatNestedInput = {
    create?: XOR<TechnologyCreateWithoutCatInput, TechnologyUncheckedCreateWithoutCatInput> | TechnologyCreateWithoutCatInput[] | TechnologyUncheckedCreateWithoutCatInput[]
    connectOrCreate?: TechnologyCreateOrConnectWithoutCatInput | TechnologyCreateOrConnectWithoutCatInput[]
    upsert?: TechnologyUpsertWithWhereUniqueWithoutCatInput | TechnologyUpsertWithWhereUniqueWithoutCatInput[]
    createMany?: TechnologyCreateManyCatInputEnvelope
    set?: TechnologyWhereUniqueInput | TechnologyWhereUniqueInput[]
    disconnect?: TechnologyWhereUniqueInput | TechnologyWhereUniqueInput[]
    delete?: TechnologyWhereUniqueInput | TechnologyWhereUniqueInput[]
    connect?: TechnologyWhereUniqueInput | TechnologyWhereUniqueInput[]
    update?: TechnologyUpdateWithWhereUniqueWithoutCatInput | TechnologyUpdateWithWhereUniqueWithoutCatInput[]
    updateMany?: TechnologyUpdateManyWithWhereWithoutCatInput | TechnologyUpdateManyWithWhereWithoutCatInput[]
    deleteMany?: TechnologyScalarWhereInput | TechnologyScalarWhereInput[]
  }

  export type TechnologyUncheckedUpdateManyWithoutCatNestedInput = {
    create?: XOR<TechnologyCreateWithoutCatInput, TechnologyUncheckedCreateWithoutCatInput> | TechnologyCreateWithoutCatInput[] | TechnologyUncheckedCreateWithoutCatInput[]
    connectOrCreate?: TechnologyCreateOrConnectWithoutCatInput | TechnologyCreateOrConnectWithoutCatInput[]
    upsert?: TechnologyUpsertWithWhereUniqueWithoutCatInput | TechnologyUpsertWithWhereUniqueWithoutCatInput[]
    createMany?: TechnologyCreateManyCatInputEnvelope
    set?: TechnologyWhereUniqueInput | TechnologyWhereUniqueInput[]
    disconnect?: TechnologyWhereUniqueInput | TechnologyWhereUniqueInput[]
    delete?: TechnologyWhereUniqueInput | TechnologyWhereUniqueInput[]
    connect?: TechnologyWhereUniqueInput | TechnologyWhereUniqueInput[]
    update?: TechnologyUpdateWithWhereUniqueWithoutCatInput | TechnologyUpdateWithWhereUniqueWithoutCatInput[]
    updateMany?: TechnologyUpdateManyWithWhereWithoutCatInput | TechnologyUpdateManyWithWhereWithoutCatInput[]
    deleteMany?: TechnologyScalarWhereInput | TechnologyScalarWhereInput[]
  }

  export type TechnologyCategoryCreateNestedOneWithoutItemsInput = {
    create?: XOR<TechnologyCategoryCreateWithoutItemsInput, TechnologyCategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TechnologyCategoryCreateOrConnectWithoutItemsInput
    connect?: TechnologyCategoryWhereUniqueInput
  }

  export type TechnologyCategoryUpdateOneWithoutItemsNestedInput = {
    create?: XOR<TechnologyCategoryCreateWithoutItemsInput, TechnologyCategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TechnologyCategoryCreateOrConnectWithoutItemsInput
    upsert?: TechnologyCategoryUpsertWithoutItemsInput
    disconnect?: TechnologyCategoryWhereInput | boolean
    delete?: TechnologyCategoryWhereInput | boolean
    connect?: TechnologyCategoryWhereUniqueInput
    update?: XOR<XOR<TechnologyCategoryUpdateToOneWithWhereWithoutItemsInput, TechnologyCategoryUpdateWithoutItemsInput>, TechnologyCategoryUncheckedUpdateWithoutItemsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PortfolioItemCreatetechnologiesInput = {
    set: string[]
  }

  export type PortfolioCategoryCreateNestedOneWithoutItemsInput = {
    create?: XOR<PortfolioCategoryCreateWithoutItemsInput, PortfolioCategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PortfolioCategoryCreateOrConnectWithoutItemsInput
    connect?: PortfolioCategoryWhereUniqueInput
  }

  export type PortfolioItemUpdatetechnologiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PortfolioCategoryUpdateOneWithoutItemsNestedInput = {
    create?: XOR<PortfolioCategoryCreateWithoutItemsInput, PortfolioCategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PortfolioCategoryCreateOrConnectWithoutItemsInput
    upsert?: PortfolioCategoryUpsertWithoutItemsInput
    disconnect?: PortfolioCategoryWhereInput | boolean
    delete?: PortfolioCategoryWhereInput | boolean
    connect?: PortfolioCategoryWhereUniqueInput
    update?: XOR<XOR<PortfolioCategoryUpdateToOneWithWhereWithoutItemsInput, PortfolioCategoryUpdateWithoutItemsInput>, PortfolioCategoryUncheckedUpdateWithoutItemsInput>
  }

  export type PortfolioItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PortfolioItemCreateWithoutCategoryInput, PortfolioItemUncheckedCreateWithoutCategoryInput> | PortfolioItemCreateWithoutCategoryInput[] | PortfolioItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PortfolioItemCreateOrConnectWithoutCategoryInput | PortfolioItemCreateOrConnectWithoutCategoryInput[]
    createMany?: PortfolioItemCreateManyCategoryInputEnvelope
    connect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
  }

  export type PortfolioItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PortfolioItemCreateWithoutCategoryInput, PortfolioItemUncheckedCreateWithoutCategoryInput> | PortfolioItemCreateWithoutCategoryInput[] | PortfolioItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PortfolioItemCreateOrConnectWithoutCategoryInput | PortfolioItemCreateOrConnectWithoutCategoryInput[]
    createMany?: PortfolioItemCreateManyCategoryInputEnvelope
    connect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
  }

  export type PortfolioItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PortfolioItemCreateWithoutCategoryInput, PortfolioItemUncheckedCreateWithoutCategoryInput> | PortfolioItemCreateWithoutCategoryInput[] | PortfolioItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PortfolioItemCreateOrConnectWithoutCategoryInput | PortfolioItemCreateOrConnectWithoutCategoryInput[]
    upsert?: PortfolioItemUpsertWithWhereUniqueWithoutCategoryInput | PortfolioItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PortfolioItemCreateManyCategoryInputEnvelope
    set?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    disconnect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    delete?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    connect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    update?: PortfolioItemUpdateWithWhereUniqueWithoutCategoryInput | PortfolioItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PortfolioItemUpdateManyWithWhereWithoutCategoryInput | PortfolioItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PortfolioItemScalarWhereInput | PortfolioItemScalarWhereInput[]
  }

  export type PortfolioItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PortfolioItemCreateWithoutCategoryInput, PortfolioItemUncheckedCreateWithoutCategoryInput> | PortfolioItemCreateWithoutCategoryInput[] | PortfolioItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PortfolioItemCreateOrConnectWithoutCategoryInput | PortfolioItemCreateOrConnectWithoutCategoryInput[]
    upsert?: PortfolioItemUpsertWithWhereUniqueWithoutCategoryInput | PortfolioItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PortfolioItemCreateManyCategoryInputEnvelope
    set?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    disconnect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    delete?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    connect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    update?: PortfolioItemUpdateWithWhereUniqueWithoutCategoryInput | PortfolioItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PortfolioItemUpdateManyWithWhereWithoutCategoryInput | PortfolioItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PortfolioItemScalarWhereInput | PortfolioItemScalarWhereInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ManagerOnRoleCreateNestedManyWithoutManagerInput = {
    create?: XOR<ManagerOnRoleCreateWithoutManagerInput, ManagerOnRoleUncheckedCreateWithoutManagerInput> | ManagerOnRoleCreateWithoutManagerInput[] | ManagerOnRoleUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ManagerOnRoleCreateOrConnectWithoutManagerInput | ManagerOnRoleCreateOrConnectWithoutManagerInput[]
    createMany?: ManagerOnRoleCreateManyManagerInputEnvelope
    connect?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
  }

  export type ManagerOnRoleUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<ManagerOnRoleCreateWithoutManagerInput, ManagerOnRoleUncheckedCreateWithoutManagerInput> | ManagerOnRoleCreateWithoutManagerInput[] | ManagerOnRoleUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ManagerOnRoleCreateOrConnectWithoutManagerInput | ManagerOnRoleCreateOrConnectWithoutManagerInput[]
    createMany?: ManagerOnRoleCreateManyManagerInputEnvelope
    connect?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
  }

  export type EnumManagerRoleFieldUpdateOperationsInput = {
    set?: $Enums.ManagerRole
  }

  export type ManagerOnRoleUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ManagerOnRoleCreateWithoutManagerInput, ManagerOnRoleUncheckedCreateWithoutManagerInput> | ManagerOnRoleCreateWithoutManagerInput[] | ManagerOnRoleUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ManagerOnRoleCreateOrConnectWithoutManagerInput | ManagerOnRoleCreateOrConnectWithoutManagerInput[]
    upsert?: ManagerOnRoleUpsertWithWhereUniqueWithoutManagerInput | ManagerOnRoleUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ManagerOnRoleCreateManyManagerInputEnvelope
    set?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
    disconnect?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
    delete?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
    connect?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
    update?: ManagerOnRoleUpdateWithWhereUniqueWithoutManagerInput | ManagerOnRoleUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ManagerOnRoleUpdateManyWithWhereWithoutManagerInput | ManagerOnRoleUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ManagerOnRoleScalarWhereInput | ManagerOnRoleScalarWhereInput[]
  }

  export type ManagerOnRoleUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ManagerOnRoleCreateWithoutManagerInput, ManagerOnRoleUncheckedCreateWithoutManagerInput> | ManagerOnRoleCreateWithoutManagerInput[] | ManagerOnRoleUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ManagerOnRoleCreateOrConnectWithoutManagerInput | ManagerOnRoleCreateOrConnectWithoutManagerInput[]
    upsert?: ManagerOnRoleUpsertWithWhereUniqueWithoutManagerInput | ManagerOnRoleUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ManagerOnRoleCreateManyManagerInputEnvelope
    set?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
    disconnect?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
    delete?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
    connect?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
    update?: ManagerOnRoleUpdateWithWhereUniqueWithoutManagerInput | ManagerOnRoleUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ManagerOnRoleUpdateManyWithWhereWithoutManagerInput | ManagerOnRoleUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ManagerOnRoleScalarWhereInput | ManagerOnRoleScalarWhereInput[]
  }

  export type ManagerOnRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<ManagerOnRoleCreateWithoutRoleInput, ManagerOnRoleUncheckedCreateWithoutRoleInput> | ManagerOnRoleCreateWithoutRoleInput[] | ManagerOnRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ManagerOnRoleCreateOrConnectWithoutRoleInput | ManagerOnRoleCreateOrConnectWithoutRoleInput[]
    createMany?: ManagerOnRoleCreateManyRoleInputEnvelope
    connect?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
  }

  export type ModulePermissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<ModulePermissionCreateWithoutRoleInput, ModulePermissionUncheckedCreateWithoutRoleInput> | ModulePermissionCreateWithoutRoleInput[] | ModulePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ModulePermissionCreateOrConnectWithoutRoleInput | ModulePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: ModulePermissionCreateManyRoleInputEnvelope
    connect?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
  }

  export type ManagerOnRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<ManagerOnRoleCreateWithoutRoleInput, ManagerOnRoleUncheckedCreateWithoutRoleInput> | ManagerOnRoleCreateWithoutRoleInput[] | ManagerOnRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ManagerOnRoleCreateOrConnectWithoutRoleInput | ManagerOnRoleCreateOrConnectWithoutRoleInput[]
    createMany?: ManagerOnRoleCreateManyRoleInputEnvelope
    connect?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
  }

  export type ModulePermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<ModulePermissionCreateWithoutRoleInput, ModulePermissionUncheckedCreateWithoutRoleInput> | ModulePermissionCreateWithoutRoleInput[] | ModulePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ModulePermissionCreateOrConnectWithoutRoleInput | ModulePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: ModulePermissionCreateManyRoleInputEnvelope
    connect?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
  }

  export type ManagerOnRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ManagerOnRoleCreateWithoutRoleInput, ManagerOnRoleUncheckedCreateWithoutRoleInput> | ManagerOnRoleCreateWithoutRoleInput[] | ManagerOnRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ManagerOnRoleCreateOrConnectWithoutRoleInput | ManagerOnRoleCreateOrConnectWithoutRoleInput[]
    upsert?: ManagerOnRoleUpsertWithWhereUniqueWithoutRoleInput | ManagerOnRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ManagerOnRoleCreateManyRoleInputEnvelope
    set?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
    disconnect?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
    delete?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
    connect?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
    update?: ManagerOnRoleUpdateWithWhereUniqueWithoutRoleInput | ManagerOnRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ManagerOnRoleUpdateManyWithWhereWithoutRoleInput | ManagerOnRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ManagerOnRoleScalarWhereInput | ManagerOnRoleScalarWhereInput[]
  }

  export type ModulePermissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ModulePermissionCreateWithoutRoleInput, ModulePermissionUncheckedCreateWithoutRoleInput> | ModulePermissionCreateWithoutRoleInput[] | ModulePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ModulePermissionCreateOrConnectWithoutRoleInput | ModulePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: ModulePermissionUpsertWithWhereUniqueWithoutRoleInput | ModulePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ModulePermissionCreateManyRoleInputEnvelope
    set?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    disconnect?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    delete?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    connect?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    update?: ModulePermissionUpdateWithWhereUniqueWithoutRoleInput | ModulePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ModulePermissionUpdateManyWithWhereWithoutRoleInput | ModulePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ModulePermissionScalarWhereInput | ModulePermissionScalarWhereInput[]
  }

  export type ManagerOnRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ManagerOnRoleCreateWithoutRoleInput, ManagerOnRoleUncheckedCreateWithoutRoleInput> | ManagerOnRoleCreateWithoutRoleInput[] | ManagerOnRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ManagerOnRoleCreateOrConnectWithoutRoleInput | ManagerOnRoleCreateOrConnectWithoutRoleInput[]
    upsert?: ManagerOnRoleUpsertWithWhereUniqueWithoutRoleInput | ManagerOnRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ManagerOnRoleCreateManyRoleInputEnvelope
    set?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
    disconnect?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
    delete?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
    connect?: ManagerOnRoleWhereUniqueInput | ManagerOnRoleWhereUniqueInput[]
    update?: ManagerOnRoleUpdateWithWhereUniqueWithoutRoleInput | ManagerOnRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ManagerOnRoleUpdateManyWithWhereWithoutRoleInput | ManagerOnRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ManagerOnRoleScalarWhereInput | ManagerOnRoleScalarWhereInput[]
  }

  export type ModulePermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ModulePermissionCreateWithoutRoleInput, ModulePermissionUncheckedCreateWithoutRoleInput> | ModulePermissionCreateWithoutRoleInput[] | ModulePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ModulePermissionCreateOrConnectWithoutRoleInput | ModulePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: ModulePermissionUpsertWithWhereUniqueWithoutRoleInput | ModulePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ModulePermissionCreateManyRoleInputEnvelope
    set?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    disconnect?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    delete?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    connect?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    update?: ModulePermissionUpdateWithWhereUniqueWithoutRoleInput | ModulePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ModulePermissionUpdateManyWithWhereWithoutRoleInput | ModulePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ModulePermissionScalarWhereInput | ModulePermissionScalarWhereInput[]
  }

  export type ModulePermissionCreateNestedManyWithoutModuleInput = {
    create?: XOR<ModulePermissionCreateWithoutModuleInput, ModulePermissionUncheckedCreateWithoutModuleInput> | ModulePermissionCreateWithoutModuleInput[] | ModulePermissionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModulePermissionCreateOrConnectWithoutModuleInput | ModulePermissionCreateOrConnectWithoutModuleInput[]
    createMany?: ModulePermissionCreateManyModuleInputEnvelope
    connect?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
  }

  export type ModulePermissionUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<ModulePermissionCreateWithoutModuleInput, ModulePermissionUncheckedCreateWithoutModuleInput> | ModulePermissionCreateWithoutModuleInput[] | ModulePermissionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModulePermissionCreateOrConnectWithoutModuleInput | ModulePermissionCreateOrConnectWithoutModuleInput[]
    createMany?: ModulePermissionCreateManyModuleInputEnvelope
    connect?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
  }

  export type ModulePermissionUpdateManyWithoutModuleNestedInput = {
    create?: XOR<ModulePermissionCreateWithoutModuleInput, ModulePermissionUncheckedCreateWithoutModuleInput> | ModulePermissionCreateWithoutModuleInput[] | ModulePermissionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModulePermissionCreateOrConnectWithoutModuleInput | ModulePermissionCreateOrConnectWithoutModuleInput[]
    upsert?: ModulePermissionUpsertWithWhereUniqueWithoutModuleInput | ModulePermissionUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: ModulePermissionCreateManyModuleInputEnvelope
    set?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    disconnect?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    delete?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    connect?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    update?: ModulePermissionUpdateWithWhereUniqueWithoutModuleInput | ModulePermissionUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: ModulePermissionUpdateManyWithWhereWithoutModuleInput | ModulePermissionUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: ModulePermissionScalarWhereInput | ModulePermissionScalarWhereInput[]
  }

  export type ModulePermissionUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<ModulePermissionCreateWithoutModuleInput, ModulePermissionUncheckedCreateWithoutModuleInput> | ModulePermissionCreateWithoutModuleInput[] | ModulePermissionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModulePermissionCreateOrConnectWithoutModuleInput | ModulePermissionCreateOrConnectWithoutModuleInput[]
    upsert?: ModulePermissionUpsertWithWhereUniqueWithoutModuleInput | ModulePermissionUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: ModulePermissionCreateManyModuleInputEnvelope
    set?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    disconnect?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    delete?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    connect?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    update?: ModulePermissionUpdateWithWhereUniqueWithoutModuleInput | ModulePermissionUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: ModulePermissionUpdateManyWithWhereWithoutModuleInput | ModulePermissionUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: ModulePermissionScalarWhereInput | ModulePermissionScalarWhereInput[]
  }

  export type ModulePermissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<ModulePermissionCreateWithoutPermissionInput, ModulePermissionUncheckedCreateWithoutPermissionInput> | ModulePermissionCreateWithoutPermissionInput[] | ModulePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: ModulePermissionCreateOrConnectWithoutPermissionInput | ModulePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: ModulePermissionCreateManyPermissionInputEnvelope
    connect?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
  }

  export type ModulePermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<ModulePermissionCreateWithoutPermissionInput, ModulePermissionUncheckedCreateWithoutPermissionInput> | ModulePermissionCreateWithoutPermissionInput[] | ModulePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: ModulePermissionCreateOrConnectWithoutPermissionInput | ModulePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: ModulePermissionCreateManyPermissionInputEnvelope
    connect?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
  }

  export type ModulePermissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<ModulePermissionCreateWithoutPermissionInput, ModulePermissionUncheckedCreateWithoutPermissionInput> | ModulePermissionCreateWithoutPermissionInput[] | ModulePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: ModulePermissionCreateOrConnectWithoutPermissionInput | ModulePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: ModulePermissionUpsertWithWhereUniqueWithoutPermissionInput | ModulePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: ModulePermissionCreateManyPermissionInputEnvelope
    set?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    disconnect?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    delete?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    connect?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    update?: ModulePermissionUpdateWithWhereUniqueWithoutPermissionInput | ModulePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: ModulePermissionUpdateManyWithWhereWithoutPermissionInput | ModulePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: ModulePermissionScalarWhereInput | ModulePermissionScalarWhereInput[]
  }

  export type ModulePermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<ModulePermissionCreateWithoutPermissionInput, ModulePermissionUncheckedCreateWithoutPermissionInput> | ModulePermissionCreateWithoutPermissionInput[] | ModulePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: ModulePermissionCreateOrConnectWithoutPermissionInput | ModulePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: ModulePermissionUpsertWithWhereUniqueWithoutPermissionInput | ModulePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: ModulePermissionCreateManyPermissionInputEnvelope
    set?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    disconnect?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    delete?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    connect?: ModulePermissionWhereUniqueInput | ModulePermissionWhereUniqueInput[]
    update?: ModulePermissionUpdateWithWhereUniqueWithoutPermissionInput | ModulePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: ModulePermissionUpdateManyWithWhereWithoutPermissionInput | ModulePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: ModulePermissionScalarWhereInput | ModulePermissionScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutModulePermissionsInput = {
    create?: XOR<RoleCreateWithoutModulePermissionsInput, RoleUncheckedCreateWithoutModulePermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutModulePermissionsInput
    connect?: RoleWhereUniqueInput
  }

  export type ModuleCreateNestedOneWithoutModulePermissionsInput = {
    create?: XOR<ModuleCreateWithoutModulePermissionsInput, ModuleUncheckedCreateWithoutModulePermissionsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutModulePermissionsInput
    connect?: ModuleWhereUniqueInput
  }

  export type PermissionCreateNestedOneWithoutModulePermissionsInput = {
    create?: XOR<PermissionCreateWithoutModulePermissionsInput, PermissionUncheckedCreateWithoutModulePermissionsInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutModulePermissionsInput
    connect?: PermissionWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutModulePermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutModulePermissionsInput, RoleUncheckedCreateWithoutModulePermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutModulePermissionsInput
    upsert?: RoleUpsertWithoutModulePermissionsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutModulePermissionsInput, RoleUpdateWithoutModulePermissionsInput>, RoleUncheckedUpdateWithoutModulePermissionsInput>
  }

  export type ModuleUpdateOneRequiredWithoutModulePermissionsNestedInput = {
    create?: XOR<ModuleCreateWithoutModulePermissionsInput, ModuleUncheckedCreateWithoutModulePermissionsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutModulePermissionsInput
    upsert?: ModuleUpsertWithoutModulePermissionsInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutModulePermissionsInput, ModuleUpdateWithoutModulePermissionsInput>, ModuleUncheckedUpdateWithoutModulePermissionsInput>
  }

  export type PermissionUpdateOneRequiredWithoutModulePermissionsNestedInput = {
    create?: XOR<PermissionCreateWithoutModulePermissionsInput, PermissionUncheckedCreateWithoutModulePermissionsInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutModulePermissionsInput
    upsert?: PermissionUpsertWithoutModulePermissionsInput
    connect?: PermissionWhereUniqueInput
    update?: XOR<XOR<PermissionUpdateToOneWithWhereWithoutModulePermissionsInput, PermissionUpdateWithoutModulePermissionsInput>, PermissionUncheckedUpdateWithoutModulePermissionsInput>
  }

  export type ManagerCreateNestedOneWithoutRolesInput = {
    create?: XOR<ManagerCreateWithoutRolesInput, ManagerUncheckedCreateWithoutRolesInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutRolesInput
    connect?: ManagerWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutManagersInput = {
    create?: XOR<RoleCreateWithoutManagersInput, RoleUncheckedCreateWithoutManagersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutManagersInput
    connect?: RoleWhereUniqueInput
  }

  export type ManagerUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<ManagerCreateWithoutRolesInput, ManagerUncheckedCreateWithoutRolesInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutRolesInput
    upsert?: ManagerUpsertWithoutRolesInput
    connect?: ManagerWhereUniqueInput
    update?: XOR<XOR<ManagerUpdateToOneWithWhereWithoutRolesInput, ManagerUpdateWithoutRolesInput>, ManagerUncheckedUpdateWithoutRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutManagersNestedInput = {
    create?: XOR<RoleCreateWithoutManagersInput, RoleUncheckedCreateWithoutManagersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutManagersInput
    upsert?: RoleUpsertWithoutManagersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutManagersInput, RoleUpdateWithoutManagersInput>, RoleUncheckedUpdateWithoutManagersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumManagerRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ManagerRole | EnumManagerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ManagerRole[] | ListEnumManagerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ManagerRole[] | ListEnumManagerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumManagerRoleFilter<$PrismaModel> | $Enums.ManagerRole
  }

  export type NestedEnumManagerRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ManagerRole | EnumManagerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ManagerRole[] | ListEnumManagerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ManagerRole[] | ListEnumManagerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumManagerRoleWithAggregatesFilter<$PrismaModel> | $Enums.ManagerRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumManagerRoleFilter<$PrismaModel>
    _max?: NestedEnumManagerRoleFilter<$PrismaModel>
  }

  export type TechnologyCreateWithoutCatInput = {
    name: string
    category?: string | null
    createdAt?: Date | string
  }

  export type TechnologyUncheckedCreateWithoutCatInput = {
    id?: number
    name: string
    category?: string | null
    createdAt?: Date | string
  }

  export type TechnologyCreateOrConnectWithoutCatInput = {
    where: TechnologyWhereUniqueInput
    create: XOR<TechnologyCreateWithoutCatInput, TechnologyUncheckedCreateWithoutCatInput>
  }

  export type TechnologyCreateManyCatInputEnvelope = {
    data: TechnologyCreateManyCatInput | TechnologyCreateManyCatInput[]
    skipDuplicates?: boolean
  }

  export type TechnologyUpsertWithWhereUniqueWithoutCatInput = {
    where: TechnologyWhereUniqueInput
    update: XOR<TechnologyUpdateWithoutCatInput, TechnologyUncheckedUpdateWithoutCatInput>
    create: XOR<TechnologyCreateWithoutCatInput, TechnologyUncheckedCreateWithoutCatInput>
  }

  export type TechnologyUpdateWithWhereUniqueWithoutCatInput = {
    where: TechnologyWhereUniqueInput
    data: XOR<TechnologyUpdateWithoutCatInput, TechnologyUncheckedUpdateWithoutCatInput>
  }

  export type TechnologyUpdateManyWithWhereWithoutCatInput = {
    where: TechnologyScalarWhereInput
    data: XOR<TechnologyUpdateManyMutationInput, TechnologyUncheckedUpdateManyWithoutCatInput>
  }

  export type TechnologyScalarWhereInput = {
    AND?: TechnologyScalarWhereInput | TechnologyScalarWhereInput[]
    OR?: TechnologyScalarWhereInput[]
    NOT?: TechnologyScalarWhereInput | TechnologyScalarWhereInput[]
    id?: IntFilter<"Technology"> | number
    name?: StringFilter<"Technology"> | string
    category?: StringNullableFilter<"Technology"> | string | null
    categoryId?: IntNullableFilter<"Technology"> | number | null
    createdAt?: DateTimeFilter<"Technology"> | Date | string
  }

  export type TechnologyCategoryCreateWithoutItemsInput = {
    nameEn: string
    nameVn: string
    name?: string | null
    key?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type TechnologyCategoryUncheckedCreateWithoutItemsInput = {
    id?: number
    nameEn: string
    nameVn: string
    name?: string | null
    key?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type TechnologyCategoryCreateOrConnectWithoutItemsInput = {
    where: TechnologyCategoryWhereUniqueInput
    create: XOR<TechnologyCategoryCreateWithoutItemsInput, TechnologyCategoryUncheckedCreateWithoutItemsInput>
  }

  export type TechnologyCategoryUpsertWithoutItemsInput = {
    update: XOR<TechnologyCategoryUpdateWithoutItemsInput, TechnologyCategoryUncheckedUpdateWithoutItemsInput>
    create: XOR<TechnologyCategoryCreateWithoutItemsInput, TechnologyCategoryUncheckedCreateWithoutItemsInput>
    where?: TechnologyCategoryWhereInput
  }

  export type TechnologyCategoryUpdateToOneWithWhereWithoutItemsInput = {
    where?: TechnologyCategoryWhereInput
    data: XOR<TechnologyCategoryUpdateWithoutItemsInput, TechnologyCategoryUncheckedUpdateWithoutItemsInput>
  }

  export type TechnologyCategoryUpdateWithoutItemsInput = {
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnologyCategoryUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCategoryCreateWithoutItemsInput = {
    nameEn: string
    nameVn: string
    name?: string | null
    key?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type PortfolioCategoryUncheckedCreateWithoutItemsInput = {
    id?: number
    nameEn: string
    nameVn: string
    name?: string | null
    key?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type PortfolioCategoryCreateOrConnectWithoutItemsInput = {
    where: PortfolioCategoryWhereUniqueInput
    create: XOR<PortfolioCategoryCreateWithoutItemsInput, PortfolioCategoryUncheckedCreateWithoutItemsInput>
  }

  export type PortfolioCategoryUpsertWithoutItemsInput = {
    update: XOR<PortfolioCategoryUpdateWithoutItemsInput, PortfolioCategoryUncheckedUpdateWithoutItemsInput>
    create: XOR<PortfolioCategoryCreateWithoutItemsInput, PortfolioCategoryUncheckedCreateWithoutItemsInput>
    where?: PortfolioCategoryWhereInput
  }

  export type PortfolioCategoryUpdateToOneWithWhereWithoutItemsInput = {
    where?: PortfolioCategoryWhereInput
    data: XOR<PortfolioCategoryUpdateWithoutItemsInput, PortfolioCategoryUncheckedUpdateWithoutItemsInput>
  }

  export type PortfolioCategoryUpdateWithoutItemsInput = {
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCategoryUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioItemCreateWithoutCategoryInput = {
    key?: string | null
    titleEn: string
    titleVn: string
    descriptionEn: string
    descriptionVn: string
    image: string
    categoryKey?: string | null
    technologies?: PortfolioItemCreatetechnologiesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    showOnHome?: boolean
    sortOrder?: number
    contentEn?: string | null
    contentVn?: string | null
    duration?: string | null
  }

  export type PortfolioItemUncheckedCreateWithoutCategoryInput = {
    id?: number
    key?: string | null
    titleEn: string
    titleVn: string
    descriptionEn: string
    descriptionVn: string
    image: string
    categoryKey?: string | null
    technologies?: PortfolioItemCreatetechnologiesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    showOnHome?: boolean
    sortOrder?: number
    contentEn?: string | null
    contentVn?: string | null
    duration?: string | null
  }

  export type PortfolioItemCreateOrConnectWithoutCategoryInput = {
    where: PortfolioItemWhereUniqueInput
    create: XOR<PortfolioItemCreateWithoutCategoryInput, PortfolioItemUncheckedCreateWithoutCategoryInput>
  }

  export type PortfolioItemCreateManyCategoryInputEnvelope = {
    data: PortfolioItemCreateManyCategoryInput | PortfolioItemCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PortfolioItemWhereUniqueInput
    update: XOR<PortfolioItemUpdateWithoutCategoryInput, PortfolioItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<PortfolioItemCreateWithoutCategoryInput, PortfolioItemUncheckedCreateWithoutCategoryInput>
  }

  export type PortfolioItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PortfolioItemWhereUniqueInput
    data: XOR<PortfolioItemUpdateWithoutCategoryInput, PortfolioItemUncheckedUpdateWithoutCategoryInput>
  }

  export type PortfolioItemUpdateManyWithWhereWithoutCategoryInput = {
    where: PortfolioItemScalarWhereInput
    data: XOR<PortfolioItemUpdateManyMutationInput, PortfolioItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PortfolioItemScalarWhereInput = {
    AND?: PortfolioItemScalarWhereInput | PortfolioItemScalarWhereInput[]
    OR?: PortfolioItemScalarWhereInput[]
    NOT?: PortfolioItemScalarWhereInput | PortfolioItemScalarWhereInput[]
    id?: IntFilter<"PortfolioItem"> | number
    key?: StringNullableFilter<"PortfolioItem"> | string | null
    titleEn?: StringFilter<"PortfolioItem"> | string
    titleVn?: StringFilter<"PortfolioItem"> | string
    descriptionEn?: StringFilter<"PortfolioItem"> | string
    descriptionVn?: StringFilter<"PortfolioItem"> | string
    image?: StringFilter<"PortfolioItem"> | string
    categoryKey?: StringNullableFilter<"PortfolioItem"> | string | null
    categoryId?: IntNullableFilter<"PortfolioItem"> | number | null
    technologies?: StringNullableListFilter<"PortfolioItem">
    createdAt?: DateTimeFilter<"PortfolioItem"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioItem"> | Date | string
    showOnHome?: BoolFilter<"PortfolioItem"> | boolean
    sortOrder?: IntFilter<"PortfolioItem"> | number
    contentEn?: StringNullableFilter<"PortfolioItem"> | string | null
    contentVn?: StringNullableFilter<"PortfolioItem"> | string | null
    duration?: StringNullableFilter<"PortfolioItem"> | string | null
  }

  export type ManagerOnRoleCreateWithoutManagerInput = {
    role: RoleCreateNestedOneWithoutManagersInput
  }

  export type ManagerOnRoleUncheckedCreateWithoutManagerInput = {
    roleId: string
  }

  export type ManagerOnRoleCreateOrConnectWithoutManagerInput = {
    where: ManagerOnRoleWhereUniqueInput
    create: XOR<ManagerOnRoleCreateWithoutManagerInput, ManagerOnRoleUncheckedCreateWithoutManagerInput>
  }

  export type ManagerOnRoleCreateManyManagerInputEnvelope = {
    data: ManagerOnRoleCreateManyManagerInput | ManagerOnRoleCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type ManagerOnRoleUpsertWithWhereUniqueWithoutManagerInput = {
    where: ManagerOnRoleWhereUniqueInput
    update: XOR<ManagerOnRoleUpdateWithoutManagerInput, ManagerOnRoleUncheckedUpdateWithoutManagerInput>
    create: XOR<ManagerOnRoleCreateWithoutManagerInput, ManagerOnRoleUncheckedCreateWithoutManagerInput>
  }

  export type ManagerOnRoleUpdateWithWhereUniqueWithoutManagerInput = {
    where: ManagerOnRoleWhereUniqueInput
    data: XOR<ManagerOnRoleUpdateWithoutManagerInput, ManagerOnRoleUncheckedUpdateWithoutManagerInput>
  }

  export type ManagerOnRoleUpdateManyWithWhereWithoutManagerInput = {
    where: ManagerOnRoleScalarWhereInput
    data: XOR<ManagerOnRoleUpdateManyMutationInput, ManagerOnRoleUncheckedUpdateManyWithoutManagerInput>
  }

  export type ManagerOnRoleScalarWhereInput = {
    AND?: ManagerOnRoleScalarWhereInput | ManagerOnRoleScalarWhereInput[]
    OR?: ManagerOnRoleScalarWhereInput[]
    NOT?: ManagerOnRoleScalarWhereInput | ManagerOnRoleScalarWhereInput[]
    managerId?: StringFilter<"ManagerOnRole"> | string
    roleId?: StringFilter<"ManagerOnRole"> | string
  }

  export type ManagerOnRoleCreateWithoutRoleInput = {
    manager: ManagerCreateNestedOneWithoutRolesInput
  }

  export type ManagerOnRoleUncheckedCreateWithoutRoleInput = {
    managerId: string
  }

  export type ManagerOnRoleCreateOrConnectWithoutRoleInput = {
    where: ManagerOnRoleWhereUniqueInput
    create: XOR<ManagerOnRoleCreateWithoutRoleInput, ManagerOnRoleUncheckedCreateWithoutRoleInput>
  }

  export type ManagerOnRoleCreateManyRoleInputEnvelope = {
    data: ManagerOnRoleCreateManyRoleInput | ManagerOnRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type ModulePermissionCreateWithoutRoleInput = {
    id?: string
    createdAt?: Date | string
    module: ModuleCreateNestedOneWithoutModulePermissionsInput
    permission: PermissionCreateNestedOneWithoutModulePermissionsInput
  }

  export type ModulePermissionUncheckedCreateWithoutRoleInput = {
    id?: string
    moduleId: string
    permissionId: string
    createdAt?: Date | string
  }

  export type ModulePermissionCreateOrConnectWithoutRoleInput = {
    where: ModulePermissionWhereUniqueInput
    create: XOR<ModulePermissionCreateWithoutRoleInput, ModulePermissionUncheckedCreateWithoutRoleInput>
  }

  export type ModulePermissionCreateManyRoleInputEnvelope = {
    data: ModulePermissionCreateManyRoleInput | ModulePermissionCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type ManagerOnRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: ManagerOnRoleWhereUniqueInput
    update: XOR<ManagerOnRoleUpdateWithoutRoleInput, ManagerOnRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<ManagerOnRoleCreateWithoutRoleInput, ManagerOnRoleUncheckedCreateWithoutRoleInput>
  }

  export type ManagerOnRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: ManagerOnRoleWhereUniqueInput
    data: XOR<ManagerOnRoleUpdateWithoutRoleInput, ManagerOnRoleUncheckedUpdateWithoutRoleInput>
  }

  export type ManagerOnRoleUpdateManyWithWhereWithoutRoleInput = {
    where: ManagerOnRoleScalarWhereInput
    data: XOR<ManagerOnRoleUpdateManyMutationInput, ManagerOnRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type ModulePermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: ModulePermissionWhereUniqueInput
    update: XOR<ModulePermissionUpdateWithoutRoleInput, ModulePermissionUncheckedUpdateWithoutRoleInput>
    create: XOR<ModulePermissionCreateWithoutRoleInput, ModulePermissionUncheckedCreateWithoutRoleInput>
  }

  export type ModulePermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: ModulePermissionWhereUniqueInput
    data: XOR<ModulePermissionUpdateWithoutRoleInput, ModulePermissionUncheckedUpdateWithoutRoleInput>
  }

  export type ModulePermissionUpdateManyWithWhereWithoutRoleInput = {
    where: ModulePermissionScalarWhereInput
    data: XOR<ModulePermissionUpdateManyMutationInput, ModulePermissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type ModulePermissionScalarWhereInput = {
    AND?: ModulePermissionScalarWhereInput | ModulePermissionScalarWhereInput[]
    OR?: ModulePermissionScalarWhereInput[]
    NOT?: ModulePermissionScalarWhereInput | ModulePermissionScalarWhereInput[]
    id?: StringFilter<"ModulePermission"> | string
    roleId?: StringFilter<"ModulePermission"> | string
    moduleId?: StringFilter<"ModulePermission"> | string
    permissionId?: StringFilter<"ModulePermission"> | string
    createdAt?: DateTimeFilter<"ModulePermission"> | Date | string
  }

  export type ModulePermissionCreateWithoutModuleInput = {
    id?: string
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutModulePermissionsInput
    permission: PermissionCreateNestedOneWithoutModulePermissionsInput
  }

  export type ModulePermissionUncheckedCreateWithoutModuleInput = {
    id?: string
    roleId: string
    permissionId: string
    createdAt?: Date | string
  }

  export type ModulePermissionCreateOrConnectWithoutModuleInput = {
    where: ModulePermissionWhereUniqueInput
    create: XOR<ModulePermissionCreateWithoutModuleInput, ModulePermissionUncheckedCreateWithoutModuleInput>
  }

  export type ModulePermissionCreateManyModuleInputEnvelope = {
    data: ModulePermissionCreateManyModuleInput | ModulePermissionCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type ModulePermissionUpsertWithWhereUniqueWithoutModuleInput = {
    where: ModulePermissionWhereUniqueInput
    update: XOR<ModulePermissionUpdateWithoutModuleInput, ModulePermissionUncheckedUpdateWithoutModuleInput>
    create: XOR<ModulePermissionCreateWithoutModuleInput, ModulePermissionUncheckedCreateWithoutModuleInput>
  }

  export type ModulePermissionUpdateWithWhereUniqueWithoutModuleInput = {
    where: ModulePermissionWhereUniqueInput
    data: XOR<ModulePermissionUpdateWithoutModuleInput, ModulePermissionUncheckedUpdateWithoutModuleInput>
  }

  export type ModulePermissionUpdateManyWithWhereWithoutModuleInput = {
    where: ModulePermissionScalarWhereInput
    data: XOR<ModulePermissionUpdateManyMutationInput, ModulePermissionUncheckedUpdateManyWithoutModuleInput>
  }

  export type ModulePermissionCreateWithoutPermissionInput = {
    id?: string
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutModulePermissionsInput
    module: ModuleCreateNestedOneWithoutModulePermissionsInput
  }

  export type ModulePermissionUncheckedCreateWithoutPermissionInput = {
    id?: string
    roleId: string
    moduleId: string
    createdAt?: Date | string
  }

  export type ModulePermissionCreateOrConnectWithoutPermissionInput = {
    where: ModulePermissionWhereUniqueInput
    create: XOR<ModulePermissionCreateWithoutPermissionInput, ModulePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type ModulePermissionCreateManyPermissionInputEnvelope = {
    data: ModulePermissionCreateManyPermissionInput | ModulePermissionCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type ModulePermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: ModulePermissionWhereUniqueInput
    update: XOR<ModulePermissionUpdateWithoutPermissionInput, ModulePermissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<ModulePermissionCreateWithoutPermissionInput, ModulePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type ModulePermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: ModulePermissionWhereUniqueInput
    data: XOR<ModulePermissionUpdateWithoutPermissionInput, ModulePermissionUncheckedUpdateWithoutPermissionInput>
  }

  export type ModulePermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: ModulePermissionScalarWhereInput
    data: XOR<ModulePermissionUpdateManyMutationInput, ModulePermissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type RoleCreateWithoutModulePermissionsInput = {
    id?: string
    name: string
    descriptionEn?: string | null
    descriptionVn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managers?: ManagerOnRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutModulePermissionsInput = {
    id?: string
    name: string
    descriptionEn?: string | null
    descriptionVn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managers?: ManagerOnRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutModulePermissionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutModulePermissionsInput, RoleUncheckedCreateWithoutModulePermissionsInput>
  }

  export type ModuleCreateWithoutModulePermissionsInput = {
    id?: string
    nameEn: string
    nameVn: string
    code: string
    descriptionEn?: string | null
    descriptionVn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleUncheckedCreateWithoutModulePermissionsInput = {
    id?: string
    nameEn: string
    nameVn: string
    code: string
    descriptionEn?: string | null
    descriptionVn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleCreateOrConnectWithoutModulePermissionsInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutModulePermissionsInput, ModuleUncheckedCreateWithoutModulePermissionsInput>
  }

  export type PermissionCreateWithoutModulePermissionsInput = {
    id?: string
    nameEn: string
    nameVn: string
    code: string
    descriptionEn?: string | null
    descriptionVn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUncheckedCreateWithoutModulePermissionsInput = {
    id?: string
    nameEn: string
    nameVn: string
    code: string
    descriptionEn?: string | null
    descriptionVn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionCreateOrConnectWithoutModulePermissionsInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutModulePermissionsInput, PermissionUncheckedCreateWithoutModulePermissionsInput>
  }

  export type RoleUpsertWithoutModulePermissionsInput = {
    update: XOR<RoleUpdateWithoutModulePermissionsInput, RoleUncheckedUpdateWithoutModulePermissionsInput>
    create: XOR<RoleCreateWithoutModulePermissionsInput, RoleUncheckedCreateWithoutModulePermissionsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutModulePermissionsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutModulePermissionsInput, RoleUncheckedUpdateWithoutModulePermissionsInput>
  }

  export type RoleUpdateWithoutModulePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: ManagerOnRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutModulePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: ManagerOnRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type ModuleUpsertWithoutModulePermissionsInput = {
    update: XOR<ModuleUpdateWithoutModulePermissionsInput, ModuleUncheckedUpdateWithoutModulePermissionsInput>
    create: XOR<ModuleCreateWithoutModulePermissionsInput, ModuleUncheckedCreateWithoutModulePermissionsInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutModulePermissionsInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutModulePermissionsInput, ModuleUncheckedUpdateWithoutModulePermissionsInput>
  }

  export type ModuleUpdateWithoutModulePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleUncheckedUpdateWithoutModulePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUpsertWithoutModulePermissionsInput = {
    update: XOR<PermissionUpdateWithoutModulePermissionsInput, PermissionUncheckedUpdateWithoutModulePermissionsInput>
    create: XOR<PermissionCreateWithoutModulePermissionsInput, PermissionUncheckedCreateWithoutModulePermissionsInput>
    where?: PermissionWhereInput
  }

  export type PermissionUpdateToOneWithWhereWithoutModulePermissionsInput = {
    where?: PermissionWhereInput
    data: XOR<PermissionUpdateWithoutModulePermissionsInput, PermissionUncheckedUpdateWithoutModulePermissionsInput>
  }

  export type PermissionUpdateWithoutModulePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateWithoutModulePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameVn?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerCreateWithoutRolesInput = {
    id?: string
    username: string
    password: string
    fullName?: string | null
    email?: string | null
    role?: $Enums.ManagerRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagerUncheckedCreateWithoutRolesInput = {
    id?: string
    username: string
    password: string
    fullName?: string | null
    email?: string | null
    role?: $Enums.ManagerRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagerCreateOrConnectWithoutRolesInput = {
    where: ManagerWhereUniqueInput
    create: XOR<ManagerCreateWithoutRolesInput, ManagerUncheckedCreateWithoutRolesInput>
  }

  export type RoleCreateWithoutManagersInput = {
    id?: string
    name: string
    descriptionEn?: string | null
    descriptionVn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    modulePermissions?: ModulePermissionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutManagersInput = {
    id?: string
    name: string
    descriptionEn?: string | null
    descriptionVn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    modulePermissions?: ModulePermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutManagersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutManagersInput, RoleUncheckedCreateWithoutManagersInput>
  }

  export type ManagerUpsertWithoutRolesInput = {
    update: XOR<ManagerUpdateWithoutRolesInput, ManagerUncheckedUpdateWithoutRolesInput>
    create: XOR<ManagerCreateWithoutRolesInput, ManagerUncheckedCreateWithoutRolesInput>
    where?: ManagerWhereInput
  }

  export type ManagerUpdateToOneWithWhereWithoutRolesInput = {
    where?: ManagerWhereInput
    data: XOR<ManagerUpdateWithoutRolesInput, ManagerUncheckedUpdateWithoutRolesInput>
  }

  export type ManagerUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumManagerRoleFieldUpdateOperationsInput | $Enums.ManagerRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumManagerRoleFieldUpdateOperationsInput | $Enums.ManagerRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpsertWithoutManagersInput = {
    update: XOR<RoleUpdateWithoutManagersInput, RoleUncheckedUpdateWithoutManagersInput>
    create: XOR<RoleCreateWithoutManagersInput, RoleUncheckedCreateWithoutManagersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutManagersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutManagersInput, RoleUncheckedUpdateWithoutManagersInput>
  }

  export type RoleUpdateWithoutManagersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modulePermissions?: ModulePermissionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutManagersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    descriptionEn?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionVn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modulePermissions?: ModulePermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type TechnologyCreateManyCatInput = {
    id?: number
    name: string
    category?: string | null
    createdAt?: Date | string
  }

  export type TechnologyUpdateWithoutCatInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnologyUncheckedUpdateWithoutCatInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnologyUncheckedUpdateManyWithoutCatInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioItemCreateManyCategoryInput = {
    id?: number
    key?: string | null
    titleEn: string
    titleVn: string
    descriptionEn: string
    descriptionVn: string
    image: string
    categoryKey?: string | null
    technologies?: PortfolioItemCreatetechnologiesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    showOnHome?: boolean
    sortOrder?: number
    contentEn?: string | null
    contentVn?: string | null
    duration?: string | null
  }

  export type PortfolioItemUpdateWithoutCategoryInput = {
    key?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: StringFieldUpdateOperationsInput | string
    titleVn?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionVn?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    categoryKey?: NullableStringFieldUpdateOperationsInput | string | null
    technologies?: PortfolioItemUpdatetechnologiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showOnHome?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    contentEn?: NullableStringFieldUpdateOperationsInput | string | null
    contentVn?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PortfolioItemUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: StringFieldUpdateOperationsInput | string
    titleVn?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionVn?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    categoryKey?: NullableStringFieldUpdateOperationsInput | string | null
    technologies?: PortfolioItemUpdatetechnologiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showOnHome?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    contentEn?: NullableStringFieldUpdateOperationsInput | string | null
    contentVn?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PortfolioItemUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: StringFieldUpdateOperationsInput | string
    titleVn?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionVn?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    categoryKey?: NullableStringFieldUpdateOperationsInput | string | null
    technologies?: PortfolioItemUpdatetechnologiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showOnHome?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    contentEn?: NullableStringFieldUpdateOperationsInput | string | null
    contentVn?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ManagerOnRoleCreateManyManagerInput = {
    roleId: string
  }

  export type ManagerOnRoleUpdateWithoutManagerInput = {
    role?: RoleUpdateOneRequiredWithoutManagersNestedInput
  }

  export type ManagerOnRoleUncheckedUpdateWithoutManagerInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type ManagerOnRoleUncheckedUpdateManyWithoutManagerInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type ManagerOnRoleCreateManyRoleInput = {
    managerId: string
  }

  export type ModulePermissionCreateManyRoleInput = {
    id?: string
    moduleId: string
    permissionId: string
    createdAt?: Date | string
  }

  export type ManagerOnRoleUpdateWithoutRoleInput = {
    manager?: ManagerUpdateOneRequiredWithoutRolesNestedInput
  }

  export type ManagerOnRoleUncheckedUpdateWithoutRoleInput = {
    managerId?: StringFieldUpdateOperationsInput | string
  }

  export type ManagerOnRoleUncheckedUpdateManyWithoutRoleInput = {
    managerId?: StringFieldUpdateOperationsInput | string
  }

  export type ModulePermissionUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutModulePermissionsNestedInput
    permission?: PermissionUpdateOneRequiredWithoutModulePermissionsNestedInput
  }

  export type ModulePermissionUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModulePermissionUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModulePermissionCreateManyModuleInput = {
    id?: string
    roleId: string
    permissionId: string
    createdAt?: Date | string
  }

  export type ModulePermissionUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutModulePermissionsNestedInput
    permission?: PermissionUpdateOneRequiredWithoutModulePermissionsNestedInput
  }

  export type ModulePermissionUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModulePermissionUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModulePermissionCreateManyPermissionInput = {
    id?: string
    roleId: string
    moduleId: string
    createdAt?: Date | string
  }

  export type ModulePermissionUpdateWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutModulePermissionsNestedInput
    module?: ModuleUpdateOneRequiredWithoutModulePermissionsNestedInput
  }

  export type ModulePermissionUncheckedUpdateWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModulePermissionUncheckedUpdateManyWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
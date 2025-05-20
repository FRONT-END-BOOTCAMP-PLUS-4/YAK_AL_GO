
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
 * Model answers
 * 
 */
export type answers = $Result.DefaultSelection<Prisma.$answersPayload>
/**
 * Model comments
 * 
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model healths
 * 
 */
export type healths = $Result.DefaultSelection<Prisma.$healthsPayload>
/**
 * Model inventories
 * 
 */
export type inventories = $Result.DefaultSelection<Prisma.$inventoriesPayload>
/**
 * Model medi_times
 * 
 */
export type medi_times = $Result.DefaultSelection<Prisma.$medi_timesPayload>
/**
 * Model medicines
 * 
 */
export type medicines = $Result.DefaultSelection<Prisma.$medicinesPayload>
/**
 * Model pharmacies
 * 
 */
export type pharmacies = $Result.DefaultSelection<Prisma.$pharmaciesPayload>
/**
 * Model post_tags
 * 
 */
export type post_tags = $Result.DefaultSelection<Prisma.$post_tagsPayload>
/**
 * Model posts
 * 
 */
export type posts = $Result.DefaultSelection<Prisma.$postsPayload>
/**
 * Model qna_tags
 * 
 */
export type qna_tags = $Result.DefaultSelection<Prisma.$qna_tagsPayload>
/**
 * Model qnas
 * 
 */
export type qnas = $Result.DefaultSelection<Prisma.$qnasPayload>
/**
 * Model tags
 * 
 */
export type tags = $Result.DefaultSelection<Prisma.$tagsPayload>
/**
 * Model user_healths
 * 
 */
export type user_healths = $Result.DefaultSelection<Prisma.$user_healthsPayload>
/**
 * Model user_medis
 * 
 */
export type user_medis = $Result.DefaultSelection<Prisma.$user_medisPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Answers
 * const answers = await prisma.answers.findMany()
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
   * // Fetch zero or more Answers
   * const answers = await prisma.answers.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.answers`: Exposes CRUD operations for the **answers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answers.findMany()
    * ```
    */
  get answers(): Prisma.answersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.healths`: Exposes CRUD operations for the **healths** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Healths
    * const healths = await prisma.healths.findMany()
    * ```
    */
  get healths(): Prisma.healthsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventories`: Exposes CRUD operations for the **inventories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventories.findMany()
    * ```
    */
  get inventories(): Prisma.inventoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medi_times`: Exposes CRUD operations for the **medi_times** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medi_times
    * const medi_times = await prisma.medi_times.findMany()
    * ```
    */
  get medi_times(): Prisma.medi_timesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicines`: Exposes CRUD operations for the **medicines** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicines
    * const medicines = await prisma.medicines.findMany()
    * ```
    */
  get medicines(): Prisma.medicinesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pharmacies`: Exposes CRUD operations for the **pharmacies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pharmacies
    * const pharmacies = await prisma.pharmacies.findMany()
    * ```
    */
  get pharmacies(): Prisma.pharmaciesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post_tags`: Exposes CRUD operations for the **post_tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Post_tags
    * const post_tags = await prisma.post_tags.findMany()
    * ```
    */
  get post_tags(): Prisma.post_tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.postsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qna_tags`: Exposes CRUD operations for the **qna_tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Qna_tags
    * const qna_tags = await prisma.qna_tags.findMany()
    * ```
    */
  get qna_tags(): Prisma.qna_tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qnas`: Exposes CRUD operations for the **qnas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Qnas
    * const qnas = await prisma.qnas.findMany()
    * ```
    */
  get qnas(): Prisma.qnasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_healths`: Exposes CRUD operations for the **user_healths** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_healths
    * const user_healths = await prisma.user_healths.findMany()
    * ```
    */
  get user_healths(): Prisma.user_healthsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_medis`: Exposes CRUD operations for the **user_medis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_medis
    * const user_medis = await prisma.user_medis.findMany()
    * ```
    */
  get user_medis(): Prisma.user_medisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    answers: 'answers',
    comments: 'comments',
    healths: 'healths',
    inventories: 'inventories',
    medi_times: 'medi_times',
    medicines: 'medicines',
    pharmacies: 'pharmacies',
    post_tags: 'post_tags',
    posts: 'posts',
    qna_tags: 'qna_tags',
    qnas: 'qnas',
    tags: 'tags',
    user_healths: 'user_healths',
    user_medis: 'user_medis',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "answers" | "comments" | "healths" | "inventories" | "medi_times" | "medicines" | "pharmacies" | "post_tags" | "posts" | "qna_tags" | "qnas" | "tags" | "user_healths" | "user_medis" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      answers: {
        payload: Prisma.$answersPayload<ExtArgs>
        fields: Prisma.answersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.answersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.answersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          findFirst: {
            args: Prisma.answersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.answersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          findMany: {
            args: Prisma.answersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>[]
          }
          create: {
            args: Prisma.answersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          createMany: {
            args: Prisma.answersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.answersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>[]
          }
          delete: {
            args: Prisma.answersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          update: {
            args: Prisma.answersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          deleteMany: {
            args: Prisma.answersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.answersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.answersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>[]
          }
          upsert: {
            args: Prisma.answersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          aggregate: {
            args: Prisma.AnswersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswers>
          }
          groupBy: {
            args: Prisma.answersGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswersGroupByOutputType>[]
          }
          count: {
            args: Prisma.answersCountArgs<ExtArgs>
            result: $Utils.Optional<AnswersCountAggregateOutputType> | number
          }
        }
      }
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.commentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.commentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      healths: {
        payload: Prisma.$healthsPayload<ExtArgs>
        fields: Prisma.healthsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.healthsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$healthsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.healthsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$healthsPayload>
          }
          findFirst: {
            args: Prisma.healthsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$healthsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.healthsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$healthsPayload>
          }
          findMany: {
            args: Prisma.healthsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$healthsPayload>[]
          }
          create: {
            args: Prisma.healthsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$healthsPayload>
          }
          createMany: {
            args: Prisma.healthsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.healthsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$healthsPayload>[]
          }
          delete: {
            args: Prisma.healthsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$healthsPayload>
          }
          update: {
            args: Prisma.healthsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$healthsPayload>
          }
          deleteMany: {
            args: Prisma.healthsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.healthsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.healthsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$healthsPayload>[]
          }
          upsert: {
            args: Prisma.healthsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$healthsPayload>
          }
          aggregate: {
            args: Prisma.HealthsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHealths>
          }
          groupBy: {
            args: Prisma.healthsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HealthsGroupByOutputType>[]
          }
          count: {
            args: Prisma.healthsCountArgs<ExtArgs>
            result: $Utils.Optional<HealthsCountAggregateOutputType> | number
          }
        }
      }
      inventories: {
        payload: Prisma.$inventoriesPayload<ExtArgs>
        fields: Prisma.inventoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoriesPayload>
          }
          findFirst: {
            args: Prisma.inventoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoriesPayload>
          }
          findMany: {
            args: Prisma.inventoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoriesPayload>[]
          }
          create: {
            args: Prisma.inventoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoriesPayload>
          }
          createMany: {
            args: Prisma.inventoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.inventoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoriesPayload>[]
          }
          delete: {
            args: Prisma.inventoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoriesPayload>
          }
          update: {
            args: Prisma.inventoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoriesPayload>
          }
          deleteMany: {
            args: Prisma.inventoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inventoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.inventoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoriesPayload>[]
          }
          upsert: {
            args: Prisma.inventoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoriesPayload>
          }
          aggregate: {
            args: Prisma.InventoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventories>
          }
          groupBy: {
            args: Prisma.inventoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventoriesCountArgs<ExtArgs>
            result: $Utils.Optional<InventoriesCountAggregateOutputType> | number
          }
        }
      }
      medi_times: {
        payload: Prisma.$medi_timesPayload<ExtArgs>
        fields: Prisma.medi_timesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.medi_timesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medi_timesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.medi_timesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medi_timesPayload>
          }
          findFirst: {
            args: Prisma.medi_timesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medi_timesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.medi_timesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medi_timesPayload>
          }
          findMany: {
            args: Prisma.medi_timesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medi_timesPayload>[]
          }
          create: {
            args: Prisma.medi_timesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medi_timesPayload>
          }
          createMany: {
            args: Prisma.medi_timesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.medi_timesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medi_timesPayload>[]
          }
          delete: {
            args: Prisma.medi_timesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medi_timesPayload>
          }
          update: {
            args: Prisma.medi_timesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medi_timesPayload>
          }
          deleteMany: {
            args: Prisma.medi_timesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.medi_timesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.medi_timesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medi_timesPayload>[]
          }
          upsert: {
            args: Prisma.medi_timesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medi_timesPayload>
          }
          aggregate: {
            args: Prisma.Medi_timesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedi_times>
          }
          groupBy: {
            args: Prisma.medi_timesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Medi_timesGroupByOutputType>[]
          }
          count: {
            args: Prisma.medi_timesCountArgs<ExtArgs>
            result: $Utils.Optional<Medi_timesCountAggregateOutputType> | number
          }
        }
      }
      medicines: {
        payload: Prisma.$medicinesPayload<ExtArgs>
        fields: Prisma.medicinesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.medicinesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.medicinesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinesPayload>
          }
          findFirst: {
            args: Prisma.medicinesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.medicinesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinesPayload>
          }
          findMany: {
            args: Prisma.medicinesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinesPayload>[]
          }
          create: {
            args: Prisma.medicinesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinesPayload>
          }
          createMany: {
            args: Prisma.medicinesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.medicinesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinesPayload>[]
          }
          delete: {
            args: Prisma.medicinesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinesPayload>
          }
          update: {
            args: Prisma.medicinesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinesPayload>
          }
          deleteMany: {
            args: Prisma.medicinesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.medicinesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.medicinesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinesPayload>[]
          }
          upsert: {
            args: Prisma.medicinesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinesPayload>
          }
          aggregate: {
            args: Prisma.MedicinesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicines>
          }
          groupBy: {
            args: Prisma.medicinesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicinesGroupByOutputType>[]
          }
          count: {
            args: Prisma.medicinesCountArgs<ExtArgs>
            result: $Utils.Optional<MedicinesCountAggregateOutputType> | number
          }
        }
      }
      pharmacies: {
        payload: Prisma.$pharmaciesPayload<ExtArgs>
        fields: Prisma.pharmaciesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pharmaciesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pharmaciesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pharmaciesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pharmaciesPayload>
          }
          findFirst: {
            args: Prisma.pharmaciesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pharmaciesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pharmaciesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pharmaciesPayload>
          }
          findMany: {
            args: Prisma.pharmaciesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pharmaciesPayload>[]
          }
          create: {
            args: Prisma.pharmaciesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pharmaciesPayload>
          }
          createMany: {
            args: Prisma.pharmaciesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pharmaciesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pharmaciesPayload>[]
          }
          delete: {
            args: Prisma.pharmaciesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pharmaciesPayload>
          }
          update: {
            args: Prisma.pharmaciesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pharmaciesPayload>
          }
          deleteMany: {
            args: Prisma.pharmaciesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pharmaciesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pharmaciesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pharmaciesPayload>[]
          }
          upsert: {
            args: Prisma.pharmaciesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pharmaciesPayload>
          }
          aggregate: {
            args: Prisma.PharmaciesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePharmacies>
          }
          groupBy: {
            args: Prisma.pharmaciesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PharmaciesGroupByOutputType>[]
          }
          count: {
            args: Prisma.pharmaciesCountArgs<ExtArgs>
            result: $Utils.Optional<PharmaciesCountAggregateOutputType> | number
          }
        }
      }
      post_tags: {
        payload: Prisma.$post_tagsPayload<ExtArgs>
        fields: Prisma.post_tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.post_tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.post_tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload>
          }
          findFirst: {
            args: Prisma.post_tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.post_tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload>
          }
          findMany: {
            args: Prisma.post_tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload>[]
          }
          create: {
            args: Prisma.post_tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload>
          }
          createMany: {
            args: Prisma.post_tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.post_tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload>[]
          }
          delete: {
            args: Prisma.post_tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload>
          }
          update: {
            args: Prisma.post_tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload>
          }
          deleteMany: {
            args: Prisma.post_tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.post_tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.post_tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload>[]
          }
          upsert: {
            args: Prisma.post_tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload>
          }
          aggregate: {
            args: Prisma.Post_tagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost_tags>
          }
          groupBy: {
            args: Prisma.post_tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Post_tagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.post_tagsCountArgs<ExtArgs>
            result: $Utils.Optional<Post_tagsCountAggregateOutputType> | number
          }
        }
      }
      posts: {
        payload: Prisma.$postsPayload<ExtArgs>
        fields: Prisma.postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findFirst: {
            args: Prisma.postsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findMany: {
            args: Prisma.postsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          create: {
            args: Prisma.postsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          createMany: {
            args: Prisma.postsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.postsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          delete: {
            args: Prisma.postsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          update: {
            args: Prisma.postsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          deleteMany: {
            args: Prisma.postsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.postsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.postsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          upsert: {
            args: Prisma.postsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.postsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.postsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      qna_tags: {
        payload: Prisma.$qna_tagsPayload<ExtArgs>
        fields: Prisma.qna_tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.qna_tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qna_tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.qna_tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qna_tagsPayload>
          }
          findFirst: {
            args: Prisma.qna_tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qna_tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.qna_tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qna_tagsPayload>
          }
          findMany: {
            args: Prisma.qna_tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qna_tagsPayload>[]
          }
          create: {
            args: Prisma.qna_tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qna_tagsPayload>
          }
          createMany: {
            args: Prisma.qna_tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.qna_tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qna_tagsPayload>[]
          }
          delete: {
            args: Prisma.qna_tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qna_tagsPayload>
          }
          update: {
            args: Prisma.qna_tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qna_tagsPayload>
          }
          deleteMany: {
            args: Prisma.qna_tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.qna_tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.qna_tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qna_tagsPayload>[]
          }
          upsert: {
            args: Prisma.qna_tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qna_tagsPayload>
          }
          aggregate: {
            args: Prisma.Qna_tagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQna_tags>
          }
          groupBy: {
            args: Prisma.qna_tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Qna_tagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.qna_tagsCountArgs<ExtArgs>
            result: $Utils.Optional<Qna_tagsCountAggregateOutputType> | number
          }
        }
      }
      qnas: {
        payload: Prisma.$qnasPayload<ExtArgs>
        fields: Prisma.qnasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.qnasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qnasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.qnasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qnasPayload>
          }
          findFirst: {
            args: Prisma.qnasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qnasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.qnasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qnasPayload>
          }
          findMany: {
            args: Prisma.qnasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qnasPayload>[]
          }
          create: {
            args: Prisma.qnasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qnasPayload>
          }
          createMany: {
            args: Prisma.qnasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.qnasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qnasPayload>[]
          }
          delete: {
            args: Prisma.qnasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qnasPayload>
          }
          update: {
            args: Prisma.qnasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qnasPayload>
          }
          deleteMany: {
            args: Prisma.qnasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.qnasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.qnasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qnasPayload>[]
          }
          upsert: {
            args: Prisma.qnasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qnasPayload>
          }
          aggregate: {
            args: Prisma.QnasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQnas>
          }
          groupBy: {
            args: Prisma.qnasGroupByArgs<ExtArgs>
            result: $Utils.Optional<QnasGroupByOutputType>[]
          }
          count: {
            args: Prisma.qnasCountArgs<ExtArgs>
            result: $Utils.Optional<QnasCountAggregateOutputType> | number
          }
        }
      }
      tags: {
        payload: Prisma.$tagsPayload<ExtArgs>
        fields: Prisma.tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findFirst: {
            args: Prisma.tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findMany: {
            args: Prisma.tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          create: {
            args: Prisma.tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          createMany: {
            args: Prisma.tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          delete: {
            args: Prisma.tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          update: {
            args: Prisma.tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          deleteMany: {
            args: Prisma.tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          upsert: {
            args: Prisma.tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      user_healths: {
        payload: Prisma.$user_healthsPayload<ExtArgs>
        fields: Prisma.user_healthsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_healthsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_healthsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_healthsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_healthsPayload>
          }
          findFirst: {
            args: Prisma.user_healthsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_healthsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_healthsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_healthsPayload>
          }
          findMany: {
            args: Prisma.user_healthsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_healthsPayload>[]
          }
          create: {
            args: Prisma.user_healthsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_healthsPayload>
          }
          createMany: {
            args: Prisma.user_healthsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_healthsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_healthsPayload>[]
          }
          delete: {
            args: Prisma.user_healthsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_healthsPayload>
          }
          update: {
            args: Prisma.user_healthsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_healthsPayload>
          }
          deleteMany: {
            args: Prisma.user_healthsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_healthsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_healthsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_healthsPayload>[]
          }
          upsert: {
            args: Prisma.user_healthsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_healthsPayload>
          }
          aggregate: {
            args: Prisma.User_healthsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_healths>
          }
          groupBy: {
            args: Prisma.user_healthsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_healthsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_healthsCountArgs<ExtArgs>
            result: $Utils.Optional<User_healthsCountAggregateOutputType> | number
          }
        }
      }
      user_medis: {
        payload: Prisma.$user_medisPayload<ExtArgs>
        fields: Prisma.user_medisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_medisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_medisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_medisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_medisPayload>
          }
          findFirst: {
            args: Prisma.user_medisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_medisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_medisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_medisPayload>
          }
          findMany: {
            args: Prisma.user_medisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_medisPayload>[]
          }
          create: {
            args: Prisma.user_medisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_medisPayload>
          }
          createMany: {
            args: Prisma.user_medisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_medisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_medisPayload>[]
          }
          delete: {
            args: Prisma.user_medisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_medisPayload>
          }
          update: {
            args: Prisma.user_medisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_medisPayload>
          }
          deleteMany: {
            args: Prisma.user_medisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_medisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_medisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_medisPayload>[]
          }
          upsert: {
            args: Prisma.user_medisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_medisPayload>
          }
          aggregate: {
            args: Prisma.User_medisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_medis>
          }
          groupBy: {
            args: Prisma.user_medisGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_medisGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_medisCountArgs<ExtArgs>
            result: $Utils.Optional<User_medisCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
    answers?: answersOmit
    comments?: commentsOmit
    healths?: healthsOmit
    inventories?: inventoriesOmit
    medi_times?: medi_timesOmit
    medicines?: medicinesOmit
    pharmacies?: pharmaciesOmit
    post_tags?: post_tagsOmit
    posts?: postsOmit
    qna_tags?: qna_tagsOmit
    qnas?: qnasOmit
    tags?: tagsOmit
    user_healths?: user_healthsOmit
    user_medis?: user_medisOmit
    users?: usersOmit
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
   * Count Type HealthsCountOutputType
   */

  export type HealthsCountOutputType = {
    user_healths: number
  }

  export type HealthsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_healths?: boolean | HealthsCountOutputTypeCountUser_healthsArgs
  }

  // Custom InputTypes
  /**
   * HealthsCountOutputType without action
   */
  export type HealthsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthsCountOutputType
     */
    select?: HealthsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HealthsCountOutputType without action
   */
  export type HealthsCountOutputTypeCountUser_healthsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_healthsWhereInput
  }


  /**
   * Count Type MedicinesCountOutputType
   */

  export type MedicinesCountOutputType = {
    inventories: number
    user_medis: number
  }

  export type MedicinesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | MedicinesCountOutputTypeCountInventoriesArgs
    user_medis?: boolean | MedicinesCountOutputTypeCountUser_medisArgs
  }

  // Custom InputTypes
  /**
   * MedicinesCountOutputType without action
   */
  export type MedicinesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinesCountOutputType
     */
    select?: MedicinesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicinesCountOutputType without action
   */
  export type MedicinesCountOutputTypeCountInventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoriesWhereInput
  }

  /**
   * MedicinesCountOutputType without action
   */
  export type MedicinesCountOutputTypeCountUser_medisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_medisWhereInput
  }


  /**
   * Count Type PharmaciesCountOutputType
   */

  export type PharmaciesCountOutputType = {
    inventories: number
    users: number
  }

  export type PharmaciesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | PharmaciesCountOutputTypeCountInventoriesArgs
    users?: boolean | PharmaciesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * PharmaciesCountOutputType without action
   */
  export type PharmaciesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaciesCountOutputType
     */
    select?: PharmaciesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PharmaciesCountOutputType without action
   */
  export type PharmaciesCountOutputTypeCountInventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoriesWhereInput
  }

  /**
   * PharmaciesCountOutputType without action
   */
  export type PharmaciesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    comments: number
    post_tags: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | PostsCountOutputTypeCountCommentsArgs
    post_tags?: boolean | PostsCountOutputTypeCountPost_tagsArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountPost_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_tagsWhereInput
  }


  /**
   * Count Type QnasCountOutputType
   */

  export type QnasCountOutputType = {
    answers: number
    qna_tags: number
  }

  export type QnasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QnasCountOutputTypeCountAnswersArgs
    qna_tags?: boolean | QnasCountOutputTypeCountQna_tagsArgs
  }

  // Custom InputTypes
  /**
   * QnasCountOutputType without action
   */
  export type QnasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QnasCountOutputType
     */
    select?: QnasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QnasCountOutputType without action
   */
  export type QnasCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answersWhereInput
  }

  /**
   * QnasCountOutputType without action
   */
  export type QnasCountOutputTypeCountQna_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: qna_tagsWhereInput
  }


  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    post_tags: number
    qna_tags: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post_tags?: boolean | TagsCountOutputTypeCountPost_tagsArgs
    qna_tags?: boolean | TagsCountOutputTypeCountQna_tagsArgs
  }

  // Custom InputTypes
  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountPost_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_tagsWhereInput
  }

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountQna_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: qna_tagsWhereInput
  }


  /**
   * Count Type User_medisCountOutputType
   */

  export type User_medisCountOutputType = {
    medi_times: number
  }

  export type User_medisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medi_times?: boolean | User_medisCountOutputTypeCountMedi_timesArgs
  }

  // Custom InputTypes
  /**
   * User_medisCountOutputType without action
   */
  export type User_medisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_medisCountOutputType
     */
    select?: User_medisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_medisCountOutputType without action
   */
  export type User_medisCountOutputTypeCountMedi_timesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medi_timesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    answers: number
    comments: number
    posts: number
    qnas: number
    user_healths: number
    user_medis: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | UsersCountOutputTypeCountAnswersArgs
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    posts?: boolean | UsersCountOutputTypeCountPostsArgs
    qnas?: boolean | UsersCountOutputTypeCountQnasArgs
    user_healths?: boolean | UsersCountOutputTypeCountUser_healthsArgs
    user_medis?: boolean | UsersCountOutputTypeCountUser_medisArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountQnasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: qnasWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_healthsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_healthsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_medisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_medisWhereInput
  }


  /**
   * Models
   */

  /**
   * Model answers
   */

  export type AggregateAnswers = {
    _count: AnswersCountAggregateOutputType | null
    _avg: AnswersAvgAggregateOutputType | null
    _sum: AnswersSumAggregateOutputType | null
    _min: AnswersMinAggregateOutputType | null
    _max: AnswersMaxAggregateOutputType | null
  }

  export type AnswersAvgAggregateOutputType = {
    id: number | null
    qnaId: number | null
  }

  export type AnswersSumAggregateOutputType = {
    id: number | null
    qnaId: number | null
  }

  export type AnswersMinAggregateOutputType = {
    id: number | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_accepted: boolean | null
    userId: string | null
    qnaId: number | null
  }

  export type AnswersMaxAggregateOutputType = {
    id: number | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_accepted: boolean | null
    userId: string | null
    qnaId: number | null
  }

  export type AnswersCountAggregateOutputType = {
    id: number
    content: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_accepted: number
    userId: number
    qnaId: number
    _all: number
  }


  export type AnswersAvgAggregateInputType = {
    id?: true
    qnaId?: true
  }

  export type AnswersSumAggregateInputType = {
    id?: true
    qnaId?: true
  }

  export type AnswersMinAggregateInputType = {
    id?: true
    content?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_accepted?: true
    userId?: true
    qnaId?: true
  }

  export type AnswersMaxAggregateInputType = {
    id?: true
    content?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_accepted?: true
    userId?: true
    qnaId?: true
  }

  export type AnswersCountAggregateInputType = {
    id?: true
    content?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_accepted?: true
    userId?: true
    qnaId?: true
    _all?: true
  }

  export type AnswersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which answers to aggregate.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned answers
    **/
    _count?: true | AnswersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswersMaxAggregateInputType
  }

  export type GetAnswersAggregateType<T extends AnswersAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswers[P]>
      : GetScalarType<T[P], AggregateAnswers[P]>
  }




  export type answersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answersWhereInput
    orderBy?: answersOrderByWithAggregationInput | answersOrderByWithAggregationInput[]
    by: AnswersScalarFieldEnum[] | AnswersScalarFieldEnum
    having?: answersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswersCountAggregateInputType | true
    _avg?: AnswersAvgAggregateInputType
    _sum?: AnswersSumAggregateInputType
    _min?: AnswersMinAggregateInputType
    _max?: AnswersMaxAggregateInputType
  }

  export type AnswersGroupByOutputType = {
    id: number
    content: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    is_accepted: boolean
    userId: string
    qnaId: number
    _count: AnswersCountAggregateOutputType | null
    _avg: AnswersAvgAggregateOutputType | null
    _sum: AnswersSumAggregateOutputType | null
    _min: AnswersMinAggregateOutputType | null
    _max: AnswersMaxAggregateOutputType | null
  }

  type GetAnswersGroupByPayload<T extends answersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswersGroupByOutputType[P]>
            : GetScalarType<T[P], AnswersGroupByOutputType[P]>
        }
      >
    >


  export type answersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_accepted?: boolean
    userId?: boolean
    qnaId?: boolean
    qnas?: boolean | qnasDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answers"]>

  export type answersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_accepted?: boolean
    userId?: boolean
    qnaId?: boolean
    qnas?: boolean | qnasDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answers"]>

  export type answersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_accepted?: boolean
    userId?: boolean
    qnaId?: boolean
    qnas?: boolean | qnasDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answers"]>

  export type answersSelectScalar = {
    id?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_accepted?: boolean
    userId?: boolean
    qnaId?: boolean
  }

  export type answersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "created_at" | "updated_at" | "deleted_at" | "is_accepted" | "userId" | "qnaId", ExtArgs["result"]["answers"]>
  export type answersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qnas?: boolean | qnasDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type answersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qnas?: boolean | qnasDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type answersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qnas?: boolean | qnasDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $answersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "answers"
    objects: {
      qnas: Prisma.$qnasPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      is_accepted: boolean
      userId: string
      qnaId: number
    }, ExtArgs["result"]["answers"]>
    composites: {}
  }

  type answersGetPayload<S extends boolean | null | undefined | answersDefaultArgs> = $Result.GetResult<Prisma.$answersPayload, S>

  type answersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<answersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswersCountAggregateInputType | true
    }

  export interface answersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['answers'], meta: { name: 'answers' } }
    /**
     * Find zero or one Answers that matches the filter.
     * @param {answersFindUniqueArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends answersFindUniqueArgs>(args: SelectSubset<T, answersFindUniqueArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {answersFindUniqueOrThrowArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends answersFindUniqueOrThrowArgs>(args: SelectSubset<T, answersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersFindFirstArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends answersFindFirstArgs>(args?: SelectSubset<T, answersFindFirstArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersFindFirstOrThrowArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends answersFindFirstOrThrowArgs>(args?: SelectSubset<T, answersFindFirstOrThrowArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answers.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answersWithIdOnly = await prisma.answers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends answersFindManyArgs>(args?: SelectSubset<T, answersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answers.
     * @param {answersCreateArgs} args - Arguments to create a Answers.
     * @example
     * // Create one Answers
     * const Answers = await prisma.answers.create({
     *   data: {
     *     // ... data to create a Answers
     *   }
     * })
     * 
     */
    create<T extends answersCreateArgs>(args: SelectSubset<T, answersCreateArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {answersCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answers = await prisma.answers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends answersCreateManyArgs>(args?: SelectSubset<T, answersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {answersCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answers = await prisma.answers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answersWithIdOnly = await prisma.answers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends answersCreateManyAndReturnArgs>(args?: SelectSubset<T, answersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answers.
     * @param {answersDeleteArgs} args - Arguments to delete one Answers.
     * @example
     * // Delete one Answers
     * const Answers = await prisma.answers.delete({
     *   where: {
     *     // ... filter to delete one Answers
     *   }
     * })
     * 
     */
    delete<T extends answersDeleteArgs>(args: SelectSubset<T, answersDeleteArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answers.
     * @param {answersUpdateArgs} args - Arguments to update one Answers.
     * @example
     * // Update one Answers
     * const answers = await prisma.answers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends answersUpdateArgs>(args: SelectSubset<T, answersUpdateArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {answersDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends answersDeleteManyArgs>(args?: SelectSubset<T, answersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answers = await prisma.answers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends answersUpdateManyArgs>(args: SelectSubset<T, answersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {answersUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answers = await prisma.answers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answersWithIdOnly = await prisma.answers.updateManyAndReturn({
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
    updateManyAndReturn<T extends answersUpdateManyAndReturnArgs>(args: SelectSubset<T, answersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answers.
     * @param {answersUpsertArgs} args - Arguments to update or create a Answers.
     * @example
     * // Update or create a Answers
     * const answers = await prisma.answers.upsert({
     *   create: {
     *     // ... data to create a Answers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answers we want to update
     *   }
     * })
     */
    upsert<T extends answersUpsertArgs>(args: SelectSubset<T, answersUpsertArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answers.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends answersCountArgs>(
      args?: Subset<T, answersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswersAggregateArgs>(args: Subset<T, AnswersAggregateArgs>): Prisma.PrismaPromise<GetAnswersAggregateType<T>>

    /**
     * Group by Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersGroupByArgs} args - Group by arguments.
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
      T extends answersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: answersGroupByArgs['orderBy'] }
        : { orderBy?: answersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, answersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the answers model
   */
  readonly fields: answersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for answers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__answersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    qnas<T extends qnasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, qnasDefaultArgs<ExtArgs>>): Prisma__qnasClient<$Result.GetResult<Prisma.$qnasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the answers model
   */
  interface answersFieldRefs {
    readonly id: FieldRef<"answers", 'Int'>
    readonly content: FieldRef<"answers", 'String'>
    readonly created_at: FieldRef<"answers", 'DateTime'>
    readonly updated_at: FieldRef<"answers", 'DateTime'>
    readonly deleted_at: FieldRef<"answers", 'DateTime'>
    readonly is_accepted: FieldRef<"answers", 'Boolean'>
    readonly userId: FieldRef<"answers", 'String'>
    readonly qnaId: FieldRef<"answers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * answers findUnique
   */
  export type answersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers findUniqueOrThrow
   */
  export type answersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers findFirst
   */
  export type answersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for answers.
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of answers.
     */
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * answers findFirstOrThrow
   */
  export type answersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for answers.
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of answers.
     */
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * answers findMany
   */
  export type answersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing answers.
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * answers create
   */
  export type answersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * The data needed to create a answers.
     */
    data: XOR<answersCreateInput, answersUncheckedCreateInput>
  }

  /**
   * answers createMany
   */
  export type answersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many answers.
     */
    data: answersCreateManyInput | answersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * answers createManyAndReturn
   */
  export type answersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * The data used to create many answers.
     */
    data: answersCreateManyInput | answersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * answers update
   */
  export type answersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * The data needed to update a answers.
     */
    data: XOR<answersUpdateInput, answersUncheckedUpdateInput>
    /**
     * Choose, which answers to update.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers updateMany
   */
  export type answersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update answers.
     */
    data: XOR<answersUpdateManyMutationInput, answersUncheckedUpdateManyInput>
    /**
     * Filter which answers to update
     */
    where?: answersWhereInput
    /**
     * Limit how many answers to update.
     */
    limit?: number
  }

  /**
   * answers updateManyAndReturn
   */
  export type answersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * The data used to update answers.
     */
    data: XOR<answersUpdateManyMutationInput, answersUncheckedUpdateManyInput>
    /**
     * Filter which answers to update
     */
    where?: answersWhereInput
    /**
     * Limit how many answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * answers upsert
   */
  export type answersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * The filter to search for the answers to update in case it exists.
     */
    where: answersWhereUniqueInput
    /**
     * In case the answers found by the `where` argument doesn't exist, create a new answers with this data.
     */
    create: XOR<answersCreateInput, answersUncheckedCreateInput>
    /**
     * In case the answers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<answersUpdateInput, answersUncheckedUpdateInput>
  }

  /**
   * answers delete
   */
  export type answersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter which answers to delete.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers deleteMany
   */
  export type answersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which answers to delete
     */
    where?: answersWhereInput
    /**
     * Limit how many answers to delete.
     */
    limit?: number
  }

  /**
   * answers without action
   */
  export type answersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
  }


  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    userId: string | null
    postId: number | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    userId: string | null
    postId: number | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    content: number
    created_at: number
    updated_at: number
    deleted_at: number
    userId: number
    postId: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    postId?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    postId?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    content?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    userId?: true
    postId?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    content?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    userId?: true
    postId?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    content?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    content: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    userId: string
    postId: number
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    userId?: boolean
    postId?: boolean
    posts?: boolean | postsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    userId?: boolean
    postId?: boolean
    posts?: boolean | postsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    userId?: boolean
    postId?: boolean
    posts?: boolean | postsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectScalar = {
    id?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "created_at" | "updated_at" | "deleted_at" | "userId" | "postId", ExtArgs["result"]["comments"]>
  export type commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | postsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type commentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | postsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type commentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | postsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {
      posts: Prisma.$postsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      userId: string
      postId: number
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentsFindUniqueArgs>(args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentsFindFirstArgs>(args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commentsFindManyArgs>(args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends commentsCreateArgs>(args: SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentsCreateManyArgs>(args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {commentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends commentsCreateManyAndReturnArgs>(args?: SelectSubset<T, commentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends commentsDeleteArgs>(args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentsUpdateArgs>(args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentsDeleteManyArgs>(args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentsUpdateManyArgs>(args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {commentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
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
    updateManyAndReturn<T extends commentsUpdateManyAndReturnArgs>(args: SelectSubset<T, commentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends commentsUpsertArgs>(args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
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
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postsDefaultArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the comments model
   */
  interface commentsFieldRefs {
    readonly id: FieldRef<"comments", 'Int'>
    readonly content: FieldRef<"comments", 'String'>
    readonly created_at: FieldRef<"comments", 'DateTime'>
    readonly updated_at: FieldRef<"comments", 'DateTime'>
    readonly deleted_at: FieldRef<"comments", 'DateTime'>
    readonly userId: FieldRef<"comments", 'String'>
    readonly postId: FieldRef<"comments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }

  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comments createManyAndReturn
   */
  export type commentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comments updateManyAndReturn
   */
  export type commentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }

  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
  }


  /**
   * Model healths
   */

  export type AggregateHealths = {
    _count: HealthsCountAggregateOutputType | null
    _avg: HealthsAvgAggregateOutputType | null
    _sum: HealthsSumAggregateOutputType | null
    _min: HealthsMinAggregateOutputType | null
    _max: HealthsMaxAggregateOutputType | null
  }

  export type HealthsAvgAggregateOutputType = {
    id: number | null
  }

  export type HealthsSumAggregateOutputType = {
    id: number | null
  }

  export type HealthsMinAggregateOutputType = {
    id: number | null
    health_name: string | null
  }

  export type HealthsMaxAggregateOutputType = {
    id: number | null
    health_name: string | null
  }

  export type HealthsCountAggregateOutputType = {
    id: number
    health_name: number
    _all: number
  }


  export type HealthsAvgAggregateInputType = {
    id?: true
  }

  export type HealthsSumAggregateInputType = {
    id?: true
  }

  export type HealthsMinAggregateInputType = {
    id?: true
    health_name?: true
  }

  export type HealthsMaxAggregateInputType = {
    id?: true
    health_name?: true
  }

  export type HealthsCountAggregateInputType = {
    id?: true
    health_name?: true
    _all?: true
  }

  export type HealthsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which healths to aggregate.
     */
    where?: healthsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of healths to fetch.
     */
    orderBy?: healthsOrderByWithRelationInput | healthsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: healthsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` healths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` healths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned healths
    **/
    _count?: true | HealthsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HealthsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HealthsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HealthsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HealthsMaxAggregateInputType
  }

  export type GetHealthsAggregateType<T extends HealthsAggregateArgs> = {
        [P in keyof T & keyof AggregateHealths]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealths[P]>
      : GetScalarType<T[P], AggregateHealths[P]>
  }




  export type healthsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: healthsWhereInput
    orderBy?: healthsOrderByWithAggregationInput | healthsOrderByWithAggregationInput[]
    by: HealthsScalarFieldEnum[] | HealthsScalarFieldEnum
    having?: healthsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HealthsCountAggregateInputType | true
    _avg?: HealthsAvgAggregateInputType
    _sum?: HealthsSumAggregateInputType
    _min?: HealthsMinAggregateInputType
    _max?: HealthsMaxAggregateInputType
  }

  export type HealthsGroupByOutputType = {
    id: number
    health_name: string
    _count: HealthsCountAggregateOutputType | null
    _avg: HealthsAvgAggregateOutputType | null
    _sum: HealthsSumAggregateOutputType | null
    _min: HealthsMinAggregateOutputType | null
    _max: HealthsMaxAggregateOutputType | null
  }

  type GetHealthsGroupByPayload<T extends healthsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HealthsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HealthsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HealthsGroupByOutputType[P]>
            : GetScalarType<T[P], HealthsGroupByOutputType[P]>
        }
      >
    >


  export type healthsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    health_name?: boolean
    user_healths?: boolean | healths$user_healthsArgs<ExtArgs>
    _count?: boolean | HealthsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healths"]>

  export type healthsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    health_name?: boolean
  }, ExtArgs["result"]["healths"]>

  export type healthsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    health_name?: boolean
  }, ExtArgs["result"]["healths"]>

  export type healthsSelectScalar = {
    id?: boolean
    health_name?: boolean
  }

  export type healthsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "health_name", ExtArgs["result"]["healths"]>
  export type healthsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_healths?: boolean | healths$user_healthsArgs<ExtArgs>
    _count?: boolean | HealthsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type healthsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type healthsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $healthsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "healths"
    objects: {
      user_healths: Prisma.$user_healthsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      health_name: string
    }, ExtArgs["result"]["healths"]>
    composites: {}
  }

  type healthsGetPayload<S extends boolean | null | undefined | healthsDefaultArgs> = $Result.GetResult<Prisma.$healthsPayload, S>

  type healthsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<healthsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HealthsCountAggregateInputType | true
    }

  export interface healthsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['healths'], meta: { name: 'healths' } }
    /**
     * Find zero or one Healths that matches the filter.
     * @param {healthsFindUniqueArgs} args - Arguments to find a Healths
     * @example
     * // Get one Healths
     * const healths = await prisma.healths.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends healthsFindUniqueArgs>(args: SelectSubset<T, healthsFindUniqueArgs<ExtArgs>>): Prisma__healthsClient<$Result.GetResult<Prisma.$healthsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Healths that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {healthsFindUniqueOrThrowArgs} args - Arguments to find a Healths
     * @example
     * // Get one Healths
     * const healths = await prisma.healths.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends healthsFindUniqueOrThrowArgs>(args: SelectSubset<T, healthsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__healthsClient<$Result.GetResult<Prisma.$healthsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Healths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {healthsFindFirstArgs} args - Arguments to find a Healths
     * @example
     * // Get one Healths
     * const healths = await prisma.healths.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends healthsFindFirstArgs>(args?: SelectSubset<T, healthsFindFirstArgs<ExtArgs>>): Prisma__healthsClient<$Result.GetResult<Prisma.$healthsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Healths that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {healthsFindFirstOrThrowArgs} args - Arguments to find a Healths
     * @example
     * // Get one Healths
     * const healths = await prisma.healths.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends healthsFindFirstOrThrowArgs>(args?: SelectSubset<T, healthsFindFirstOrThrowArgs<ExtArgs>>): Prisma__healthsClient<$Result.GetResult<Prisma.$healthsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Healths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {healthsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Healths
     * const healths = await prisma.healths.findMany()
     * 
     * // Get first 10 Healths
     * const healths = await prisma.healths.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const healthsWithIdOnly = await prisma.healths.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends healthsFindManyArgs>(args?: SelectSubset<T, healthsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$healthsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Healths.
     * @param {healthsCreateArgs} args - Arguments to create a Healths.
     * @example
     * // Create one Healths
     * const Healths = await prisma.healths.create({
     *   data: {
     *     // ... data to create a Healths
     *   }
     * })
     * 
     */
    create<T extends healthsCreateArgs>(args: SelectSubset<T, healthsCreateArgs<ExtArgs>>): Prisma__healthsClient<$Result.GetResult<Prisma.$healthsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Healths.
     * @param {healthsCreateManyArgs} args - Arguments to create many Healths.
     * @example
     * // Create many Healths
     * const healths = await prisma.healths.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends healthsCreateManyArgs>(args?: SelectSubset<T, healthsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Healths and returns the data saved in the database.
     * @param {healthsCreateManyAndReturnArgs} args - Arguments to create many Healths.
     * @example
     * // Create many Healths
     * const healths = await prisma.healths.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Healths and only return the `id`
     * const healthsWithIdOnly = await prisma.healths.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends healthsCreateManyAndReturnArgs>(args?: SelectSubset<T, healthsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$healthsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Healths.
     * @param {healthsDeleteArgs} args - Arguments to delete one Healths.
     * @example
     * // Delete one Healths
     * const Healths = await prisma.healths.delete({
     *   where: {
     *     // ... filter to delete one Healths
     *   }
     * })
     * 
     */
    delete<T extends healthsDeleteArgs>(args: SelectSubset<T, healthsDeleteArgs<ExtArgs>>): Prisma__healthsClient<$Result.GetResult<Prisma.$healthsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Healths.
     * @param {healthsUpdateArgs} args - Arguments to update one Healths.
     * @example
     * // Update one Healths
     * const healths = await prisma.healths.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends healthsUpdateArgs>(args: SelectSubset<T, healthsUpdateArgs<ExtArgs>>): Prisma__healthsClient<$Result.GetResult<Prisma.$healthsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Healths.
     * @param {healthsDeleteManyArgs} args - Arguments to filter Healths to delete.
     * @example
     * // Delete a few Healths
     * const { count } = await prisma.healths.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends healthsDeleteManyArgs>(args?: SelectSubset<T, healthsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Healths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {healthsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Healths
     * const healths = await prisma.healths.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends healthsUpdateManyArgs>(args: SelectSubset<T, healthsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Healths and returns the data updated in the database.
     * @param {healthsUpdateManyAndReturnArgs} args - Arguments to update many Healths.
     * @example
     * // Update many Healths
     * const healths = await prisma.healths.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Healths and only return the `id`
     * const healthsWithIdOnly = await prisma.healths.updateManyAndReturn({
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
    updateManyAndReturn<T extends healthsUpdateManyAndReturnArgs>(args: SelectSubset<T, healthsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$healthsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Healths.
     * @param {healthsUpsertArgs} args - Arguments to update or create a Healths.
     * @example
     * // Update or create a Healths
     * const healths = await prisma.healths.upsert({
     *   create: {
     *     // ... data to create a Healths
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Healths we want to update
     *   }
     * })
     */
    upsert<T extends healthsUpsertArgs>(args: SelectSubset<T, healthsUpsertArgs<ExtArgs>>): Prisma__healthsClient<$Result.GetResult<Prisma.$healthsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Healths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {healthsCountArgs} args - Arguments to filter Healths to count.
     * @example
     * // Count the number of Healths
     * const count = await prisma.healths.count({
     *   where: {
     *     // ... the filter for the Healths we want to count
     *   }
     * })
    **/
    count<T extends healthsCountArgs>(
      args?: Subset<T, healthsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HealthsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Healths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HealthsAggregateArgs>(args: Subset<T, HealthsAggregateArgs>): Prisma.PrismaPromise<GetHealthsAggregateType<T>>

    /**
     * Group by Healths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {healthsGroupByArgs} args - Group by arguments.
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
      T extends healthsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: healthsGroupByArgs['orderBy'] }
        : { orderBy?: healthsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, healthsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHealthsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the healths model
   */
  readonly fields: healthsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for healths.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__healthsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_healths<T extends healths$user_healthsArgs<ExtArgs> = {}>(args?: Subset<T, healths$user_healthsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_healthsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the healths model
   */
  interface healthsFieldRefs {
    readonly id: FieldRef<"healths", 'Int'>
    readonly health_name: FieldRef<"healths", 'String'>
  }
    

  // Custom InputTypes
  /**
   * healths findUnique
   */
  export type healthsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healths
     */
    select?: healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the healths
     */
    omit?: healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: healthsInclude<ExtArgs> | null
    /**
     * Filter, which healths to fetch.
     */
    where: healthsWhereUniqueInput
  }

  /**
   * healths findUniqueOrThrow
   */
  export type healthsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healths
     */
    select?: healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the healths
     */
    omit?: healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: healthsInclude<ExtArgs> | null
    /**
     * Filter, which healths to fetch.
     */
    where: healthsWhereUniqueInput
  }

  /**
   * healths findFirst
   */
  export type healthsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healths
     */
    select?: healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the healths
     */
    omit?: healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: healthsInclude<ExtArgs> | null
    /**
     * Filter, which healths to fetch.
     */
    where?: healthsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of healths to fetch.
     */
    orderBy?: healthsOrderByWithRelationInput | healthsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for healths.
     */
    cursor?: healthsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` healths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` healths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of healths.
     */
    distinct?: HealthsScalarFieldEnum | HealthsScalarFieldEnum[]
  }

  /**
   * healths findFirstOrThrow
   */
  export type healthsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healths
     */
    select?: healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the healths
     */
    omit?: healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: healthsInclude<ExtArgs> | null
    /**
     * Filter, which healths to fetch.
     */
    where?: healthsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of healths to fetch.
     */
    orderBy?: healthsOrderByWithRelationInput | healthsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for healths.
     */
    cursor?: healthsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` healths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` healths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of healths.
     */
    distinct?: HealthsScalarFieldEnum | HealthsScalarFieldEnum[]
  }

  /**
   * healths findMany
   */
  export type healthsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healths
     */
    select?: healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the healths
     */
    omit?: healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: healthsInclude<ExtArgs> | null
    /**
     * Filter, which healths to fetch.
     */
    where?: healthsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of healths to fetch.
     */
    orderBy?: healthsOrderByWithRelationInput | healthsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing healths.
     */
    cursor?: healthsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` healths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` healths.
     */
    skip?: number
    distinct?: HealthsScalarFieldEnum | HealthsScalarFieldEnum[]
  }

  /**
   * healths create
   */
  export type healthsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healths
     */
    select?: healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the healths
     */
    omit?: healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: healthsInclude<ExtArgs> | null
    /**
     * The data needed to create a healths.
     */
    data: XOR<healthsCreateInput, healthsUncheckedCreateInput>
  }

  /**
   * healths createMany
   */
  export type healthsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many healths.
     */
    data: healthsCreateManyInput | healthsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * healths createManyAndReturn
   */
  export type healthsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healths
     */
    select?: healthsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the healths
     */
    omit?: healthsOmit<ExtArgs> | null
    /**
     * The data used to create many healths.
     */
    data: healthsCreateManyInput | healthsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * healths update
   */
  export type healthsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healths
     */
    select?: healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the healths
     */
    omit?: healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: healthsInclude<ExtArgs> | null
    /**
     * The data needed to update a healths.
     */
    data: XOR<healthsUpdateInput, healthsUncheckedUpdateInput>
    /**
     * Choose, which healths to update.
     */
    where: healthsWhereUniqueInput
  }

  /**
   * healths updateMany
   */
  export type healthsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update healths.
     */
    data: XOR<healthsUpdateManyMutationInput, healthsUncheckedUpdateManyInput>
    /**
     * Filter which healths to update
     */
    where?: healthsWhereInput
    /**
     * Limit how many healths to update.
     */
    limit?: number
  }

  /**
   * healths updateManyAndReturn
   */
  export type healthsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healths
     */
    select?: healthsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the healths
     */
    omit?: healthsOmit<ExtArgs> | null
    /**
     * The data used to update healths.
     */
    data: XOR<healthsUpdateManyMutationInput, healthsUncheckedUpdateManyInput>
    /**
     * Filter which healths to update
     */
    where?: healthsWhereInput
    /**
     * Limit how many healths to update.
     */
    limit?: number
  }

  /**
   * healths upsert
   */
  export type healthsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healths
     */
    select?: healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the healths
     */
    omit?: healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: healthsInclude<ExtArgs> | null
    /**
     * The filter to search for the healths to update in case it exists.
     */
    where: healthsWhereUniqueInput
    /**
     * In case the healths found by the `where` argument doesn't exist, create a new healths with this data.
     */
    create: XOR<healthsCreateInput, healthsUncheckedCreateInput>
    /**
     * In case the healths was found with the provided `where` argument, update it with this data.
     */
    update: XOR<healthsUpdateInput, healthsUncheckedUpdateInput>
  }

  /**
   * healths delete
   */
  export type healthsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healths
     */
    select?: healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the healths
     */
    omit?: healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: healthsInclude<ExtArgs> | null
    /**
     * Filter which healths to delete.
     */
    where: healthsWhereUniqueInput
  }

  /**
   * healths deleteMany
   */
  export type healthsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which healths to delete
     */
    where?: healthsWhereInput
    /**
     * Limit how many healths to delete.
     */
    limit?: number
  }

  /**
   * healths.user_healths
   */
  export type healths$user_healthsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_healths
     */
    select?: user_healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_healths
     */
    omit?: user_healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_healthsInclude<ExtArgs> | null
    where?: user_healthsWhereInput
    orderBy?: user_healthsOrderByWithRelationInput | user_healthsOrderByWithRelationInput[]
    cursor?: user_healthsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_healthsScalarFieldEnum | User_healthsScalarFieldEnum[]
  }

  /**
   * healths without action
   */
  export type healthsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healths
     */
    select?: healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the healths
     */
    omit?: healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: healthsInclude<ExtArgs> | null
  }


  /**
   * Model inventories
   */

  export type AggregateInventories = {
    _count: InventoriesCountAggregateOutputType | null
    _avg: InventoriesAvgAggregateOutputType | null
    _sum: InventoriesSumAggregateOutputType | null
    _min: InventoriesMinAggregateOutputType | null
    _max: InventoriesMaxAggregateOutputType | null
  }

  export type InventoriesAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type InventoriesSumAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type InventoriesMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    itemSeq: string | null
    hpid: string | null
  }

  export type InventoriesMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    itemSeq: string | null
    hpid: string | null
  }

  export type InventoriesCountAggregateOutputType = {
    id: number
    quantity: number
    itemSeq: number
    hpid: number
    _all: number
  }


  export type InventoriesAvgAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type InventoriesSumAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type InventoriesMinAggregateInputType = {
    id?: true
    quantity?: true
    itemSeq?: true
    hpid?: true
  }

  export type InventoriesMaxAggregateInputType = {
    id?: true
    quantity?: true
    itemSeq?: true
    hpid?: true
  }

  export type InventoriesCountAggregateInputType = {
    id?: true
    quantity?: true
    itemSeq?: true
    hpid?: true
    _all?: true
  }

  export type InventoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventories to aggregate.
     */
    where?: inventoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoriesOrderByWithRelationInput | inventoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventories
    **/
    _count?: true | InventoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoriesMaxAggregateInputType
  }

  export type GetInventoriesAggregateType<T extends InventoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateInventories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventories[P]>
      : GetScalarType<T[P], AggregateInventories[P]>
  }




  export type inventoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoriesWhereInput
    orderBy?: inventoriesOrderByWithAggregationInput | inventoriesOrderByWithAggregationInput[]
    by: InventoriesScalarFieldEnum[] | InventoriesScalarFieldEnum
    having?: inventoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoriesCountAggregateInputType | true
    _avg?: InventoriesAvgAggregateInputType
    _sum?: InventoriesSumAggregateInputType
    _min?: InventoriesMinAggregateInputType
    _max?: InventoriesMaxAggregateInputType
  }

  export type InventoriesGroupByOutputType = {
    id: number
    quantity: number
    itemSeq: string
    hpid: string
    _count: InventoriesCountAggregateOutputType | null
    _avg: InventoriesAvgAggregateOutputType | null
    _sum: InventoriesSumAggregateOutputType | null
    _min: InventoriesMinAggregateOutputType | null
    _max: InventoriesMaxAggregateOutputType | null
  }

  type GetInventoriesGroupByPayload<T extends inventoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoriesGroupByOutputType[P]>
            : GetScalarType<T[P], InventoriesGroupByOutputType[P]>
        }
      >
    >


  export type inventoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    itemSeq?: boolean
    hpid?: boolean
    pharmacies?: boolean | pharmaciesDefaultArgs<ExtArgs>
    medicines?: boolean | medicinesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventories"]>

  export type inventoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    itemSeq?: boolean
    hpid?: boolean
    pharmacies?: boolean | pharmaciesDefaultArgs<ExtArgs>
    medicines?: boolean | medicinesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventories"]>

  export type inventoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    itemSeq?: boolean
    hpid?: boolean
    pharmacies?: boolean | pharmaciesDefaultArgs<ExtArgs>
    medicines?: boolean | medicinesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventories"]>

  export type inventoriesSelectScalar = {
    id?: boolean
    quantity?: boolean
    itemSeq?: boolean
    hpid?: boolean
  }

  export type inventoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "itemSeq" | "hpid", ExtArgs["result"]["inventories"]>
  export type inventoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacies?: boolean | pharmaciesDefaultArgs<ExtArgs>
    medicines?: boolean | medicinesDefaultArgs<ExtArgs>
  }
  export type inventoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacies?: boolean | pharmaciesDefaultArgs<ExtArgs>
    medicines?: boolean | medicinesDefaultArgs<ExtArgs>
  }
  export type inventoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacies?: boolean | pharmaciesDefaultArgs<ExtArgs>
    medicines?: boolean | medicinesDefaultArgs<ExtArgs>
  }

  export type $inventoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventories"
    objects: {
      pharmacies: Prisma.$pharmaciesPayload<ExtArgs>
      medicines: Prisma.$medicinesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      itemSeq: string
      hpid: string
    }, ExtArgs["result"]["inventories"]>
    composites: {}
  }

  type inventoriesGetPayload<S extends boolean | null | undefined | inventoriesDefaultArgs> = $Result.GetResult<Prisma.$inventoriesPayload, S>

  type inventoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inventoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoriesCountAggregateInputType | true
    }

  export interface inventoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventories'], meta: { name: 'inventories' } }
    /**
     * Find zero or one Inventories that matches the filter.
     * @param {inventoriesFindUniqueArgs} args - Arguments to find a Inventories
     * @example
     * // Get one Inventories
     * const inventories = await prisma.inventories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventoriesFindUniqueArgs>(args: SelectSubset<T, inventoriesFindUniqueArgs<ExtArgs>>): Prisma__inventoriesClient<$Result.GetResult<Prisma.$inventoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventoriesFindUniqueOrThrowArgs} args - Arguments to find a Inventories
     * @example
     * // Get one Inventories
     * const inventories = await prisma.inventories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, inventoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inventoriesClient<$Result.GetResult<Prisma.$inventoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoriesFindFirstArgs} args - Arguments to find a Inventories
     * @example
     * // Get one Inventories
     * const inventories = await prisma.inventories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventoriesFindFirstArgs>(args?: SelectSubset<T, inventoriesFindFirstArgs<ExtArgs>>): Prisma__inventoriesClient<$Result.GetResult<Prisma.$inventoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoriesFindFirstOrThrowArgs} args - Arguments to find a Inventories
     * @example
     * // Get one Inventories
     * const inventories = await prisma.inventories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, inventoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__inventoriesClient<$Result.GetResult<Prisma.$inventoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventories.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoriesWithIdOnly = await prisma.inventories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inventoriesFindManyArgs>(args?: SelectSubset<T, inventoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventories.
     * @param {inventoriesCreateArgs} args - Arguments to create a Inventories.
     * @example
     * // Create one Inventories
     * const Inventories = await prisma.inventories.create({
     *   data: {
     *     // ... data to create a Inventories
     *   }
     * })
     * 
     */
    create<T extends inventoriesCreateArgs>(args: SelectSubset<T, inventoriesCreateArgs<ExtArgs>>): Prisma__inventoriesClient<$Result.GetResult<Prisma.$inventoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {inventoriesCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventories = await prisma.inventories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inventoriesCreateManyArgs>(args?: SelectSubset<T, inventoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {inventoriesCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventories = await prisma.inventories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `id`
     * const inventoriesWithIdOnly = await prisma.inventories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends inventoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, inventoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventories.
     * @param {inventoriesDeleteArgs} args - Arguments to delete one Inventories.
     * @example
     * // Delete one Inventories
     * const Inventories = await prisma.inventories.delete({
     *   where: {
     *     // ... filter to delete one Inventories
     *   }
     * })
     * 
     */
    delete<T extends inventoriesDeleteArgs>(args: SelectSubset<T, inventoriesDeleteArgs<ExtArgs>>): Prisma__inventoriesClient<$Result.GetResult<Prisma.$inventoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventories.
     * @param {inventoriesUpdateArgs} args - Arguments to update one Inventories.
     * @example
     * // Update one Inventories
     * const inventories = await prisma.inventories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inventoriesUpdateArgs>(args: SelectSubset<T, inventoriesUpdateArgs<ExtArgs>>): Prisma__inventoriesClient<$Result.GetResult<Prisma.$inventoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {inventoriesDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inventoriesDeleteManyArgs>(args?: SelectSubset<T, inventoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventories = await prisma.inventories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inventoriesUpdateManyArgs>(args: SelectSubset<T, inventoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {inventoriesUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventories = await prisma.inventories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventories and only return the `id`
     * const inventoriesWithIdOnly = await prisma.inventories.updateManyAndReturn({
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
    updateManyAndReturn<T extends inventoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, inventoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventories.
     * @param {inventoriesUpsertArgs} args - Arguments to update or create a Inventories.
     * @example
     * // Update or create a Inventories
     * const inventories = await prisma.inventories.upsert({
     *   create: {
     *     // ... data to create a Inventories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventories we want to update
     *   }
     * })
     */
    upsert<T extends inventoriesUpsertArgs>(args: SelectSubset<T, inventoriesUpsertArgs<ExtArgs>>): Prisma__inventoriesClient<$Result.GetResult<Prisma.$inventoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoriesCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventories.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends inventoriesCountArgs>(
      args?: Subset<T, inventoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoriesAggregateArgs>(args: Subset<T, InventoriesAggregateArgs>): Prisma.PrismaPromise<GetInventoriesAggregateType<T>>

    /**
     * Group by Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoriesGroupByArgs} args - Group by arguments.
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
      T extends inventoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventoriesGroupByArgs['orderBy'] }
        : { orderBy?: inventoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, inventoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventories model
   */
  readonly fields: inventoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pharmacies<T extends pharmaciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pharmaciesDefaultArgs<ExtArgs>>): Prisma__pharmaciesClient<$Result.GetResult<Prisma.$pharmaciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicines<T extends medicinesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, medicinesDefaultArgs<ExtArgs>>): Prisma__medicinesClient<$Result.GetResult<Prisma.$medicinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the inventories model
   */
  interface inventoriesFieldRefs {
    readonly id: FieldRef<"inventories", 'Int'>
    readonly quantity: FieldRef<"inventories", 'Int'>
    readonly itemSeq: FieldRef<"inventories", 'String'>
    readonly hpid: FieldRef<"inventories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * inventories findUnique
   */
  export type inventoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventories
     */
    select?: inventoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventories
     */
    omit?: inventoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoriesInclude<ExtArgs> | null
    /**
     * Filter, which inventories to fetch.
     */
    where: inventoriesWhereUniqueInput
  }

  /**
   * inventories findUniqueOrThrow
   */
  export type inventoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventories
     */
    select?: inventoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventories
     */
    omit?: inventoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoriesInclude<ExtArgs> | null
    /**
     * Filter, which inventories to fetch.
     */
    where: inventoriesWhereUniqueInput
  }

  /**
   * inventories findFirst
   */
  export type inventoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventories
     */
    select?: inventoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventories
     */
    omit?: inventoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoriesInclude<ExtArgs> | null
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoriesOrderByWithRelationInput | inventoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoriesScalarFieldEnum | InventoriesScalarFieldEnum[]
  }

  /**
   * inventories findFirstOrThrow
   */
  export type inventoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventories
     */
    select?: inventoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventories
     */
    omit?: inventoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoriesInclude<ExtArgs> | null
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoriesOrderByWithRelationInput | inventoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoriesScalarFieldEnum | InventoriesScalarFieldEnum[]
  }

  /**
   * inventories findMany
   */
  export type inventoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventories
     */
    select?: inventoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventories
     */
    omit?: inventoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoriesInclude<ExtArgs> | null
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoriesOrderByWithRelationInput | inventoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventories.
     */
    cursor?: inventoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    distinct?: InventoriesScalarFieldEnum | InventoriesScalarFieldEnum[]
  }

  /**
   * inventories create
   */
  export type inventoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventories
     */
    select?: inventoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventories
     */
    omit?: inventoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a inventories.
     */
    data: XOR<inventoriesCreateInput, inventoriesUncheckedCreateInput>
  }

  /**
   * inventories createMany
   */
  export type inventoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventories.
     */
    data: inventoriesCreateManyInput | inventoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventories createManyAndReturn
   */
  export type inventoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventories
     */
    select?: inventoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventories
     */
    omit?: inventoriesOmit<ExtArgs> | null
    /**
     * The data used to create many inventories.
     */
    data: inventoriesCreateManyInput | inventoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * inventories update
   */
  export type inventoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventories
     */
    select?: inventoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventories
     */
    omit?: inventoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a inventories.
     */
    data: XOR<inventoriesUpdateInput, inventoriesUncheckedUpdateInput>
    /**
     * Choose, which inventories to update.
     */
    where: inventoriesWhereUniqueInput
  }

  /**
   * inventories updateMany
   */
  export type inventoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoriesUpdateManyMutationInput, inventoriesUncheckedUpdateManyInput>
    /**
     * Filter which inventories to update
     */
    where?: inventoriesWhereInput
    /**
     * Limit how many inventories to update.
     */
    limit?: number
  }

  /**
   * inventories updateManyAndReturn
   */
  export type inventoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventories
     */
    select?: inventoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventories
     */
    omit?: inventoriesOmit<ExtArgs> | null
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoriesUpdateManyMutationInput, inventoriesUncheckedUpdateManyInput>
    /**
     * Filter which inventories to update
     */
    where?: inventoriesWhereInput
    /**
     * Limit how many inventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * inventories upsert
   */
  export type inventoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventories
     */
    select?: inventoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventories
     */
    omit?: inventoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the inventories to update in case it exists.
     */
    where: inventoriesWhereUniqueInput
    /**
     * In case the inventories found by the `where` argument doesn't exist, create a new inventories with this data.
     */
    create: XOR<inventoriesCreateInput, inventoriesUncheckedCreateInput>
    /**
     * In case the inventories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventoriesUpdateInput, inventoriesUncheckedUpdateInput>
  }

  /**
   * inventories delete
   */
  export type inventoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventories
     */
    select?: inventoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventories
     */
    omit?: inventoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoriesInclude<ExtArgs> | null
    /**
     * Filter which inventories to delete.
     */
    where: inventoriesWhereUniqueInput
  }

  /**
   * inventories deleteMany
   */
  export type inventoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventories to delete
     */
    where?: inventoriesWhereInput
    /**
     * Limit how many inventories to delete.
     */
    limit?: number
  }

  /**
   * inventories without action
   */
  export type inventoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventories
     */
    select?: inventoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventories
     */
    omit?: inventoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoriesInclude<ExtArgs> | null
  }


  /**
   * Model medi_times
   */

  export type AggregateMedi_times = {
    _count: Medi_timesCountAggregateOutputType | null
    _avg: Medi_timesAvgAggregateOutputType | null
    _sum: Medi_timesSumAggregateOutputType | null
    _min: Medi_timesMinAggregateOutputType | null
    _max: Medi_timesMaxAggregateOutputType | null
  }

  export type Medi_timesAvgAggregateOutputType = {
    id: number | null
    medi_time: number | null
    userMediId: number | null
  }

  export type Medi_timesSumAggregateOutputType = {
    id: number | null
    medi_time: number | null
    userMediId: number | null
  }

  export type Medi_timesMinAggregateOutputType = {
    id: number | null
    medi_time: number | null
    userMediId: number | null
  }

  export type Medi_timesMaxAggregateOutputType = {
    id: number | null
    medi_time: number | null
    userMediId: number | null
  }

  export type Medi_timesCountAggregateOutputType = {
    id: number
    medi_time: number
    userMediId: number
    _all: number
  }


  export type Medi_timesAvgAggregateInputType = {
    id?: true
    medi_time?: true
    userMediId?: true
  }

  export type Medi_timesSumAggregateInputType = {
    id?: true
    medi_time?: true
    userMediId?: true
  }

  export type Medi_timesMinAggregateInputType = {
    id?: true
    medi_time?: true
    userMediId?: true
  }

  export type Medi_timesMaxAggregateInputType = {
    id?: true
    medi_time?: true
    userMediId?: true
  }

  export type Medi_timesCountAggregateInputType = {
    id?: true
    medi_time?: true
    userMediId?: true
    _all?: true
  }

  export type Medi_timesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medi_times to aggregate.
     */
    where?: medi_timesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medi_times to fetch.
     */
    orderBy?: medi_timesOrderByWithRelationInput | medi_timesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: medi_timesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medi_times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medi_times.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned medi_times
    **/
    _count?: true | Medi_timesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Medi_timesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Medi_timesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Medi_timesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Medi_timesMaxAggregateInputType
  }

  export type GetMedi_timesAggregateType<T extends Medi_timesAggregateArgs> = {
        [P in keyof T & keyof AggregateMedi_times]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedi_times[P]>
      : GetScalarType<T[P], AggregateMedi_times[P]>
  }




  export type medi_timesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medi_timesWhereInput
    orderBy?: medi_timesOrderByWithAggregationInput | medi_timesOrderByWithAggregationInput[]
    by: Medi_timesScalarFieldEnum[] | Medi_timesScalarFieldEnum
    having?: medi_timesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Medi_timesCountAggregateInputType | true
    _avg?: Medi_timesAvgAggregateInputType
    _sum?: Medi_timesSumAggregateInputType
    _min?: Medi_timesMinAggregateInputType
    _max?: Medi_timesMaxAggregateInputType
  }

  export type Medi_timesGroupByOutputType = {
    id: number
    medi_time: number
    userMediId: number
    _count: Medi_timesCountAggregateOutputType | null
    _avg: Medi_timesAvgAggregateOutputType | null
    _sum: Medi_timesSumAggregateOutputType | null
    _min: Medi_timesMinAggregateOutputType | null
    _max: Medi_timesMaxAggregateOutputType | null
  }

  type GetMedi_timesGroupByPayload<T extends medi_timesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Medi_timesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Medi_timesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Medi_timesGroupByOutputType[P]>
            : GetScalarType<T[P], Medi_timesGroupByOutputType[P]>
        }
      >
    >


  export type medi_timesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medi_time?: boolean
    userMediId?: boolean
    user_medis?: boolean | user_medisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medi_times"]>

  export type medi_timesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medi_time?: boolean
    userMediId?: boolean
    user_medis?: boolean | user_medisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medi_times"]>

  export type medi_timesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medi_time?: boolean
    userMediId?: boolean
    user_medis?: boolean | user_medisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medi_times"]>

  export type medi_timesSelectScalar = {
    id?: boolean
    medi_time?: boolean
    userMediId?: boolean
  }

  export type medi_timesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "medi_time" | "userMediId", ExtArgs["result"]["medi_times"]>
  export type medi_timesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_medis?: boolean | user_medisDefaultArgs<ExtArgs>
  }
  export type medi_timesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_medis?: boolean | user_medisDefaultArgs<ExtArgs>
  }
  export type medi_timesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_medis?: boolean | user_medisDefaultArgs<ExtArgs>
  }

  export type $medi_timesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "medi_times"
    objects: {
      user_medis: Prisma.$user_medisPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      medi_time: number
      userMediId: number
    }, ExtArgs["result"]["medi_times"]>
    composites: {}
  }

  type medi_timesGetPayload<S extends boolean | null | undefined | medi_timesDefaultArgs> = $Result.GetResult<Prisma.$medi_timesPayload, S>

  type medi_timesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<medi_timesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Medi_timesCountAggregateInputType | true
    }

  export interface medi_timesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['medi_times'], meta: { name: 'medi_times' } }
    /**
     * Find zero or one Medi_times that matches the filter.
     * @param {medi_timesFindUniqueArgs} args - Arguments to find a Medi_times
     * @example
     * // Get one Medi_times
     * const medi_times = await prisma.medi_times.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends medi_timesFindUniqueArgs>(args: SelectSubset<T, medi_timesFindUniqueArgs<ExtArgs>>): Prisma__medi_timesClient<$Result.GetResult<Prisma.$medi_timesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medi_times that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {medi_timesFindUniqueOrThrowArgs} args - Arguments to find a Medi_times
     * @example
     * // Get one Medi_times
     * const medi_times = await prisma.medi_times.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends medi_timesFindUniqueOrThrowArgs>(args: SelectSubset<T, medi_timesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__medi_timesClient<$Result.GetResult<Prisma.$medi_timesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medi_times that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medi_timesFindFirstArgs} args - Arguments to find a Medi_times
     * @example
     * // Get one Medi_times
     * const medi_times = await prisma.medi_times.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends medi_timesFindFirstArgs>(args?: SelectSubset<T, medi_timesFindFirstArgs<ExtArgs>>): Prisma__medi_timesClient<$Result.GetResult<Prisma.$medi_timesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medi_times that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medi_timesFindFirstOrThrowArgs} args - Arguments to find a Medi_times
     * @example
     * // Get one Medi_times
     * const medi_times = await prisma.medi_times.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends medi_timesFindFirstOrThrowArgs>(args?: SelectSubset<T, medi_timesFindFirstOrThrowArgs<ExtArgs>>): Prisma__medi_timesClient<$Result.GetResult<Prisma.$medi_timesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medi_times that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medi_timesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medi_times
     * const medi_times = await prisma.medi_times.findMany()
     * 
     * // Get first 10 Medi_times
     * const medi_times = await prisma.medi_times.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medi_timesWithIdOnly = await prisma.medi_times.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends medi_timesFindManyArgs>(args?: SelectSubset<T, medi_timesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medi_timesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medi_times.
     * @param {medi_timesCreateArgs} args - Arguments to create a Medi_times.
     * @example
     * // Create one Medi_times
     * const Medi_times = await prisma.medi_times.create({
     *   data: {
     *     // ... data to create a Medi_times
     *   }
     * })
     * 
     */
    create<T extends medi_timesCreateArgs>(args: SelectSubset<T, medi_timesCreateArgs<ExtArgs>>): Prisma__medi_timesClient<$Result.GetResult<Prisma.$medi_timesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medi_times.
     * @param {medi_timesCreateManyArgs} args - Arguments to create many Medi_times.
     * @example
     * // Create many Medi_times
     * const medi_times = await prisma.medi_times.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends medi_timesCreateManyArgs>(args?: SelectSubset<T, medi_timesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medi_times and returns the data saved in the database.
     * @param {medi_timesCreateManyAndReturnArgs} args - Arguments to create many Medi_times.
     * @example
     * // Create many Medi_times
     * const medi_times = await prisma.medi_times.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medi_times and only return the `id`
     * const medi_timesWithIdOnly = await prisma.medi_times.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends medi_timesCreateManyAndReturnArgs>(args?: SelectSubset<T, medi_timesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medi_timesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medi_times.
     * @param {medi_timesDeleteArgs} args - Arguments to delete one Medi_times.
     * @example
     * // Delete one Medi_times
     * const Medi_times = await prisma.medi_times.delete({
     *   where: {
     *     // ... filter to delete one Medi_times
     *   }
     * })
     * 
     */
    delete<T extends medi_timesDeleteArgs>(args: SelectSubset<T, medi_timesDeleteArgs<ExtArgs>>): Prisma__medi_timesClient<$Result.GetResult<Prisma.$medi_timesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medi_times.
     * @param {medi_timesUpdateArgs} args - Arguments to update one Medi_times.
     * @example
     * // Update one Medi_times
     * const medi_times = await prisma.medi_times.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends medi_timesUpdateArgs>(args: SelectSubset<T, medi_timesUpdateArgs<ExtArgs>>): Prisma__medi_timesClient<$Result.GetResult<Prisma.$medi_timesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medi_times.
     * @param {medi_timesDeleteManyArgs} args - Arguments to filter Medi_times to delete.
     * @example
     * // Delete a few Medi_times
     * const { count } = await prisma.medi_times.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends medi_timesDeleteManyArgs>(args?: SelectSubset<T, medi_timesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medi_times.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medi_timesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medi_times
     * const medi_times = await prisma.medi_times.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends medi_timesUpdateManyArgs>(args: SelectSubset<T, medi_timesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medi_times and returns the data updated in the database.
     * @param {medi_timesUpdateManyAndReturnArgs} args - Arguments to update many Medi_times.
     * @example
     * // Update many Medi_times
     * const medi_times = await prisma.medi_times.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medi_times and only return the `id`
     * const medi_timesWithIdOnly = await prisma.medi_times.updateManyAndReturn({
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
    updateManyAndReturn<T extends medi_timesUpdateManyAndReturnArgs>(args: SelectSubset<T, medi_timesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medi_timesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medi_times.
     * @param {medi_timesUpsertArgs} args - Arguments to update or create a Medi_times.
     * @example
     * // Update or create a Medi_times
     * const medi_times = await prisma.medi_times.upsert({
     *   create: {
     *     // ... data to create a Medi_times
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medi_times we want to update
     *   }
     * })
     */
    upsert<T extends medi_timesUpsertArgs>(args: SelectSubset<T, medi_timesUpsertArgs<ExtArgs>>): Prisma__medi_timesClient<$Result.GetResult<Prisma.$medi_timesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medi_times.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medi_timesCountArgs} args - Arguments to filter Medi_times to count.
     * @example
     * // Count the number of Medi_times
     * const count = await prisma.medi_times.count({
     *   where: {
     *     // ... the filter for the Medi_times we want to count
     *   }
     * })
    **/
    count<T extends medi_timesCountArgs>(
      args?: Subset<T, medi_timesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Medi_timesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medi_times.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medi_timesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Medi_timesAggregateArgs>(args: Subset<T, Medi_timesAggregateArgs>): Prisma.PrismaPromise<GetMedi_timesAggregateType<T>>

    /**
     * Group by Medi_times.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medi_timesGroupByArgs} args - Group by arguments.
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
      T extends medi_timesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: medi_timesGroupByArgs['orderBy'] }
        : { orderBy?: medi_timesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, medi_timesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedi_timesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the medi_times model
   */
  readonly fields: medi_timesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for medi_times.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__medi_timesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_medis<T extends user_medisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_medisDefaultArgs<ExtArgs>>): Prisma__user_medisClient<$Result.GetResult<Prisma.$user_medisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the medi_times model
   */
  interface medi_timesFieldRefs {
    readonly id: FieldRef<"medi_times", 'Int'>
    readonly medi_time: FieldRef<"medi_times", 'Int'>
    readonly userMediId: FieldRef<"medi_times", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * medi_times findUnique
   */
  export type medi_timesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medi_times
     */
    select?: medi_timesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medi_times
     */
    omit?: medi_timesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medi_timesInclude<ExtArgs> | null
    /**
     * Filter, which medi_times to fetch.
     */
    where: medi_timesWhereUniqueInput
  }

  /**
   * medi_times findUniqueOrThrow
   */
  export type medi_timesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medi_times
     */
    select?: medi_timesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medi_times
     */
    omit?: medi_timesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medi_timesInclude<ExtArgs> | null
    /**
     * Filter, which medi_times to fetch.
     */
    where: medi_timesWhereUniqueInput
  }

  /**
   * medi_times findFirst
   */
  export type medi_timesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medi_times
     */
    select?: medi_timesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medi_times
     */
    omit?: medi_timesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medi_timesInclude<ExtArgs> | null
    /**
     * Filter, which medi_times to fetch.
     */
    where?: medi_timesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medi_times to fetch.
     */
    orderBy?: medi_timesOrderByWithRelationInput | medi_timesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medi_times.
     */
    cursor?: medi_timesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medi_times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medi_times.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medi_times.
     */
    distinct?: Medi_timesScalarFieldEnum | Medi_timesScalarFieldEnum[]
  }

  /**
   * medi_times findFirstOrThrow
   */
  export type medi_timesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medi_times
     */
    select?: medi_timesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medi_times
     */
    omit?: medi_timesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medi_timesInclude<ExtArgs> | null
    /**
     * Filter, which medi_times to fetch.
     */
    where?: medi_timesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medi_times to fetch.
     */
    orderBy?: medi_timesOrderByWithRelationInput | medi_timesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medi_times.
     */
    cursor?: medi_timesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medi_times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medi_times.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medi_times.
     */
    distinct?: Medi_timesScalarFieldEnum | Medi_timesScalarFieldEnum[]
  }

  /**
   * medi_times findMany
   */
  export type medi_timesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medi_times
     */
    select?: medi_timesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medi_times
     */
    omit?: medi_timesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medi_timesInclude<ExtArgs> | null
    /**
     * Filter, which medi_times to fetch.
     */
    where?: medi_timesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medi_times to fetch.
     */
    orderBy?: medi_timesOrderByWithRelationInput | medi_timesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing medi_times.
     */
    cursor?: medi_timesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medi_times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medi_times.
     */
    skip?: number
    distinct?: Medi_timesScalarFieldEnum | Medi_timesScalarFieldEnum[]
  }

  /**
   * medi_times create
   */
  export type medi_timesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medi_times
     */
    select?: medi_timesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medi_times
     */
    omit?: medi_timesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medi_timesInclude<ExtArgs> | null
    /**
     * The data needed to create a medi_times.
     */
    data: XOR<medi_timesCreateInput, medi_timesUncheckedCreateInput>
  }

  /**
   * medi_times createMany
   */
  export type medi_timesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many medi_times.
     */
    data: medi_timesCreateManyInput | medi_timesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * medi_times createManyAndReturn
   */
  export type medi_timesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medi_times
     */
    select?: medi_timesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the medi_times
     */
    omit?: medi_timesOmit<ExtArgs> | null
    /**
     * The data used to create many medi_times.
     */
    data: medi_timesCreateManyInput | medi_timesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medi_timesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * medi_times update
   */
  export type medi_timesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medi_times
     */
    select?: medi_timesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medi_times
     */
    omit?: medi_timesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medi_timesInclude<ExtArgs> | null
    /**
     * The data needed to update a medi_times.
     */
    data: XOR<medi_timesUpdateInput, medi_timesUncheckedUpdateInput>
    /**
     * Choose, which medi_times to update.
     */
    where: medi_timesWhereUniqueInput
  }

  /**
   * medi_times updateMany
   */
  export type medi_timesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update medi_times.
     */
    data: XOR<medi_timesUpdateManyMutationInput, medi_timesUncheckedUpdateManyInput>
    /**
     * Filter which medi_times to update
     */
    where?: medi_timesWhereInput
    /**
     * Limit how many medi_times to update.
     */
    limit?: number
  }

  /**
   * medi_times updateManyAndReturn
   */
  export type medi_timesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medi_times
     */
    select?: medi_timesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the medi_times
     */
    omit?: medi_timesOmit<ExtArgs> | null
    /**
     * The data used to update medi_times.
     */
    data: XOR<medi_timesUpdateManyMutationInput, medi_timesUncheckedUpdateManyInput>
    /**
     * Filter which medi_times to update
     */
    where?: medi_timesWhereInput
    /**
     * Limit how many medi_times to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medi_timesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * medi_times upsert
   */
  export type medi_timesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medi_times
     */
    select?: medi_timesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medi_times
     */
    omit?: medi_timesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medi_timesInclude<ExtArgs> | null
    /**
     * The filter to search for the medi_times to update in case it exists.
     */
    where: medi_timesWhereUniqueInput
    /**
     * In case the medi_times found by the `where` argument doesn't exist, create a new medi_times with this data.
     */
    create: XOR<medi_timesCreateInput, medi_timesUncheckedCreateInput>
    /**
     * In case the medi_times was found with the provided `where` argument, update it with this data.
     */
    update: XOR<medi_timesUpdateInput, medi_timesUncheckedUpdateInput>
  }

  /**
   * medi_times delete
   */
  export type medi_timesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medi_times
     */
    select?: medi_timesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medi_times
     */
    omit?: medi_timesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medi_timesInclude<ExtArgs> | null
    /**
     * Filter which medi_times to delete.
     */
    where: medi_timesWhereUniqueInput
  }

  /**
   * medi_times deleteMany
   */
  export type medi_timesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medi_times to delete
     */
    where?: medi_timesWhereInput
    /**
     * Limit how many medi_times to delete.
     */
    limit?: number
  }

  /**
   * medi_times without action
   */
  export type medi_timesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medi_times
     */
    select?: medi_timesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medi_times
     */
    omit?: medi_timesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medi_timesInclude<ExtArgs> | null
  }


  /**
   * Model medicines
   */

  export type AggregateMedicines = {
    _count: MedicinesCountAggregateOutputType | null
    _min: MedicinesMinAggregateOutputType | null
    _max: MedicinesMaxAggregateOutputType | null
  }

  export type MedicinesMinAggregateOutputType = {
    item_seq: string | null
    item_name: string | null
    entp_name: string | null
    item_permit_date: Date | null
    etc_otc_code: string | null
    class_no: string | null
    chart: string | null
    bar_code: string | null
    material_name: string | null
    ee_doc_id: string | null
  }

  export type MedicinesMaxAggregateOutputType = {
    item_seq: string | null
    item_name: string | null
    entp_name: string | null
    item_permit_date: Date | null
    etc_otc_code: string | null
    class_no: string | null
    chart: string | null
    bar_code: string | null
    material_name: string | null
    ee_doc_id: string | null
  }

  export type MedicinesCountAggregateOutputType = {
    item_seq: number
    item_name: number
    entp_name: number
    item_permit_date: number
    etc_otc_code: number
    class_no: number
    chart: number
    bar_code: number
    material_name: number
    ee_doc_id: number
    _all: number
  }


  export type MedicinesMinAggregateInputType = {
    item_seq?: true
    item_name?: true
    entp_name?: true
    item_permit_date?: true
    etc_otc_code?: true
    class_no?: true
    chart?: true
    bar_code?: true
    material_name?: true
    ee_doc_id?: true
  }

  export type MedicinesMaxAggregateInputType = {
    item_seq?: true
    item_name?: true
    entp_name?: true
    item_permit_date?: true
    etc_otc_code?: true
    class_no?: true
    chart?: true
    bar_code?: true
    material_name?: true
    ee_doc_id?: true
  }

  export type MedicinesCountAggregateInputType = {
    item_seq?: true
    item_name?: true
    entp_name?: true
    item_permit_date?: true
    etc_otc_code?: true
    class_no?: true
    chart?: true
    bar_code?: true
    material_name?: true
    ee_doc_id?: true
    _all?: true
  }

  export type MedicinesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medicines to aggregate.
     */
    where?: medicinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicines to fetch.
     */
    orderBy?: medicinesOrderByWithRelationInput | medicinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: medicinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned medicines
    **/
    _count?: true | MedicinesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicinesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicinesMaxAggregateInputType
  }

  export type GetMedicinesAggregateType<T extends MedicinesAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicines]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicines[P]>
      : GetScalarType<T[P], AggregateMedicines[P]>
  }




  export type medicinesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medicinesWhereInput
    orderBy?: medicinesOrderByWithAggregationInput | medicinesOrderByWithAggregationInput[]
    by: MedicinesScalarFieldEnum[] | MedicinesScalarFieldEnum
    having?: medicinesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicinesCountAggregateInputType | true
    _min?: MedicinesMinAggregateInputType
    _max?: MedicinesMaxAggregateInputType
  }

  export type MedicinesGroupByOutputType = {
    item_seq: string
    item_name: string
    entp_name: string | null
    item_permit_date: Date | null
    etc_otc_code: string | null
    class_no: string | null
    chart: string | null
    bar_code: string | null
    material_name: string | null
    ee_doc_id: string | null
    _count: MedicinesCountAggregateOutputType | null
    _min: MedicinesMinAggregateOutputType | null
    _max: MedicinesMaxAggregateOutputType | null
  }

  type GetMedicinesGroupByPayload<T extends medicinesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicinesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicinesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicinesGroupByOutputType[P]>
            : GetScalarType<T[P], MedicinesGroupByOutputType[P]>
        }
      >
    >


  export type medicinesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_seq?: boolean
    item_name?: boolean
    entp_name?: boolean
    item_permit_date?: boolean
    etc_otc_code?: boolean
    class_no?: boolean
    chart?: boolean
    bar_code?: boolean
    material_name?: boolean
    ee_doc_id?: boolean
    inventories?: boolean | medicines$inventoriesArgs<ExtArgs>
    user_medis?: boolean | medicines$user_medisArgs<ExtArgs>
    _count?: boolean | MedicinesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicines"]>

  export type medicinesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_seq?: boolean
    item_name?: boolean
    entp_name?: boolean
    item_permit_date?: boolean
    etc_otc_code?: boolean
    class_no?: boolean
    chart?: boolean
    bar_code?: boolean
    material_name?: boolean
    ee_doc_id?: boolean
  }, ExtArgs["result"]["medicines"]>

  export type medicinesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_seq?: boolean
    item_name?: boolean
    entp_name?: boolean
    item_permit_date?: boolean
    etc_otc_code?: boolean
    class_no?: boolean
    chart?: boolean
    bar_code?: boolean
    material_name?: boolean
    ee_doc_id?: boolean
  }, ExtArgs["result"]["medicines"]>

  export type medicinesSelectScalar = {
    item_seq?: boolean
    item_name?: boolean
    entp_name?: boolean
    item_permit_date?: boolean
    etc_otc_code?: boolean
    class_no?: boolean
    chart?: boolean
    bar_code?: boolean
    material_name?: boolean
    ee_doc_id?: boolean
  }

  export type medicinesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"item_seq" | "item_name" | "entp_name" | "item_permit_date" | "etc_otc_code" | "class_no" | "chart" | "bar_code" | "material_name" | "ee_doc_id", ExtArgs["result"]["medicines"]>
  export type medicinesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | medicines$inventoriesArgs<ExtArgs>
    user_medis?: boolean | medicines$user_medisArgs<ExtArgs>
    _count?: boolean | MedicinesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type medicinesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type medicinesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $medicinesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "medicines"
    objects: {
      inventories: Prisma.$inventoriesPayload<ExtArgs>[]
      user_medis: Prisma.$user_medisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      item_seq: string
      item_name: string
      entp_name: string | null
      item_permit_date: Date | null
      etc_otc_code: string | null
      class_no: string | null
      chart: string | null
      bar_code: string | null
      material_name: string | null
      ee_doc_id: string | null
    }, ExtArgs["result"]["medicines"]>
    composites: {}
  }

  type medicinesGetPayload<S extends boolean | null | undefined | medicinesDefaultArgs> = $Result.GetResult<Prisma.$medicinesPayload, S>

  type medicinesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<medicinesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicinesCountAggregateInputType | true
    }

  export interface medicinesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['medicines'], meta: { name: 'medicines' } }
    /**
     * Find zero or one Medicines that matches the filter.
     * @param {medicinesFindUniqueArgs} args - Arguments to find a Medicines
     * @example
     * // Get one Medicines
     * const medicines = await prisma.medicines.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends medicinesFindUniqueArgs>(args: SelectSubset<T, medicinesFindUniqueArgs<ExtArgs>>): Prisma__medicinesClient<$Result.GetResult<Prisma.$medicinesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medicines that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {medicinesFindUniqueOrThrowArgs} args - Arguments to find a Medicines
     * @example
     * // Get one Medicines
     * const medicines = await prisma.medicines.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends medicinesFindUniqueOrThrowArgs>(args: SelectSubset<T, medicinesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__medicinesClient<$Result.GetResult<Prisma.$medicinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicinesFindFirstArgs} args - Arguments to find a Medicines
     * @example
     * // Get one Medicines
     * const medicines = await prisma.medicines.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends medicinesFindFirstArgs>(args?: SelectSubset<T, medicinesFindFirstArgs<ExtArgs>>): Prisma__medicinesClient<$Result.GetResult<Prisma.$medicinesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicines that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicinesFindFirstOrThrowArgs} args - Arguments to find a Medicines
     * @example
     * // Get one Medicines
     * const medicines = await prisma.medicines.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends medicinesFindFirstOrThrowArgs>(args?: SelectSubset<T, medicinesFindFirstOrThrowArgs<ExtArgs>>): Prisma__medicinesClient<$Result.GetResult<Prisma.$medicinesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicinesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicines
     * const medicines = await prisma.medicines.findMany()
     * 
     * // Get first 10 Medicines
     * const medicines = await prisma.medicines.findMany({ take: 10 })
     * 
     * // Only select the `item_seq`
     * const medicinesWithItem_seqOnly = await prisma.medicines.findMany({ select: { item_seq: true } })
     * 
     */
    findMany<T extends medicinesFindManyArgs>(args?: SelectSubset<T, medicinesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medicinesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medicines.
     * @param {medicinesCreateArgs} args - Arguments to create a Medicines.
     * @example
     * // Create one Medicines
     * const Medicines = await prisma.medicines.create({
     *   data: {
     *     // ... data to create a Medicines
     *   }
     * })
     * 
     */
    create<T extends medicinesCreateArgs>(args: SelectSubset<T, medicinesCreateArgs<ExtArgs>>): Prisma__medicinesClient<$Result.GetResult<Prisma.$medicinesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicines.
     * @param {medicinesCreateManyArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicines = await prisma.medicines.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends medicinesCreateManyArgs>(args?: SelectSubset<T, medicinesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicines and returns the data saved in the database.
     * @param {medicinesCreateManyAndReturnArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicines = await prisma.medicines.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicines and only return the `item_seq`
     * const medicinesWithItem_seqOnly = await prisma.medicines.createManyAndReturn({
     *   select: { item_seq: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends medicinesCreateManyAndReturnArgs>(args?: SelectSubset<T, medicinesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medicinesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medicines.
     * @param {medicinesDeleteArgs} args - Arguments to delete one Medicines.
     * @example
     * // Delete one Medicines
     * const Medicines = await prisma.medicines.delete({
     *   where: {
     *     // ... filter to delete one Medicines
     *   }
     * })
     * 
     */
    delete<T extends medicinesDeleteArgs>(args: SelectSubset<T, medicinesDeleteArgs<ExtArgs>>): Prisma__medicinesClient<$Result.GetResult<Prisma.$medicinesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medicines.
     * @param {medicinesUpdateArgs} args - Arguments to update one Medicines.
     * @example
     * // Update one Medicines
     * const medicines = await prisma.medicines.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends medicinesUpdateArgs>(args: SelectSubset<T, medicinesUpdateArgs<ExtArgs>>): Prisma__medicinesClient<$Result.GetResult<Prisma.$medicinesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicines.
     * @param {medicinesDeleteManyArgs} args - Arguments to filter Medicines to delete.
     * @example
     * // Delete a few Medicines
     * const { count } = await prisma.medicines.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends medicinesDeleteManyArgs>(args?: SelectSubset<T, medicinesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicinesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicines
     * const medicines = await prisma.medicines.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends medicinesUpdateManyArgs>(args: SelectSubset<T, medicinesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines and returns the data updated in the database.
     * @param {medicinesUpdateManyAndReturnArgs} args - Arguments to update many Medicines.
     * @example
     * // Update many Medicines
     * const medicines = await prisma.medicines.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medicines and only return the `item_seq`
     * const medicinesWithItem_seqOnly = await prisma.medicines.updateManyAndReturn({
     *   select: { item_seq: true },
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
    updateManyAndReturn<T extends medicinesUpdateManyAndReturnArgs>(args: SelectSubset<T, medicinesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medicinesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medicines.
     * @param {medicinesUpsertArgs} args - Arguments to update or create a Medicines.
     * @example
     * // Update or create a Medicines
     * const medicines = await prisma.medicines.upsert({
     *   create: {
     *     // ... data to create a Medicines
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicines we want to update
     *   }
     * })
     */
    upsert<T extends medicinesUpsertArgs>(args: SelectSubset<T, medicinesUpsertArgs<ExtArgs>>): Prisma__medicinesClient<$Result.GetResult<Prisma.$medicinesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicinesCountArgs} args - Arguments to filter Medicines to count.
     * @example
     * // Count the number of Medicines
     * const count = await prisma.medicines.count({
     *   where: {
     *     // ... the filter for the Medicines we want to count
     *   }
     * })
    **/
    count<T extends medicinesCountArgs>(
      args?: Subset<T, medicinesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicinesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicinesAggregateArgs>(args: Subset<T, MedicinesAggregateArgs>): Prisma.PrismaPromise<GetMedicinesAggregateType<T>>

    /**
     * Group by Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicinesGroupByArgs} args - Group by arguments.
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
      T extends medicinesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: medicinesGroupByArgs['orderBy'] }
        : { orderBy?: medicinesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, medicinesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicinesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the medicines model
   */
  readonly fields: medicinesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for medicines.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__medicinesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventories<T extends medicines$inventoriesArgs<ExtArgs> = {}>(args?: Subset<T, medicines$inventoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_medis<T extends medicines$user_medisArgs<ExtArgs> = {}>(args?: Subset<T, medicines$user_medisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_medisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the medicines model
   */
  interface medicinesFieldRefs {
    readonly item_seq: FieldRef<"medicines", 'String'>
    readonly item_name: FieldRef<"medicines", 'String'>
    readonly entp_name: FieldRef<"medicines", 'String'>
    readonly item_permit_date: FieldRef<"medicines", 'DateTime'>
    readonly etc_otc_code: FieldRef<"medicines", 'String'>
    readonly class_no: FieldRef<"medicines", 'String'>
    readonly chart: FieldRef<"medicines", 'String'>
    readonly bar_code: FieldRef<"medicines", 'String'>
    readonly material_name: FieldRef<"medicines", 'String'>
    readonly ee_doc_id: FieldRef<"medicines", 'String'>
  }
    

  // Custom InputTypes
  /**
   * medicines findUnique
   */
  export type medicinesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicines
     */
    select?: medicinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicines
     */
    omit?: medicinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinesInclude<ExtArgs> | null
    /**
     * Filter, which medicines to fetch.
     */
    where: medicinesWhereUniqueInput
  }

  /**
   * medicines findUniqueOrThrow
   */
  export type medicinesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicines
     */
    select?: medicinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicines
     */
    omit?: medicinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinesInclude<ExtArgs> | null
    /**
     * Filter, which medicines to fetch.
     */
    where: medicinesWhereUniqueInput
  }

  /**
   * medicines findFirst
   */
  export type medicinesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicines
     */
    select?: medicinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicines
     */
    omit?: medicinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinesInclude<ExtArgs> | null
    /**
     * Filter, which medicines to fetch.
     */
    where?: medicinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicines to fetch.
     */
    orderBy?: medicinesOrderByWithRelationInput | medicinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medicines.
     */
    cursor?: medicinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medicines.
     */
    distinct?: MedicinesScalarFieldEnum | MedicinesScalarFieldEnum[]
  }

  /**
   * medicines findFirstOrThrow
   */
  export type medicinesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicines
     */
    select?: medicinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicines
     */
    omit?: medicinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinesInclude<ExtArgs> | null
    /**
     * Filter, which medicines to fetch.
     */
    where?: medicinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicines to fetch.
     */
    orderBy?: medicinesOrderByWithRelationInput | medicinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medicines.
     */
    cursor?: medicinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medicines.
     */
    distinct?: MedicinesScalarFieldEnum | MedicinesScalarFieldEnum[]
  }

  /**
   * medicines findMany
   */
  export type medicinesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicines
     */
    select?: medicinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicines
     */
    omit?: medicinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinesInclude<ExtArgs> | null
    /**
     * Filter, which medicines to fetch.
     */
    where?: medicinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicines to fetch.
     */
    orderBy?: medicinesOrderByWithRelationInput | medicinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing medicines.
     */
    cursor?: medicinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicines.
     */
    skip?: number
    distinct?: MedicinesScalarFieldEnum | MedicinesScalarFieldEnum[]
  }

  /**
   * medicines create
   */
  export type medicinesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicines
     */
    select?: medicinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicines
     */
    omit?: medicinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinesInclude<ExtArgs> | null
    /**
     * The data needed to create a medicines.
     */
    data: XOR<medicinesCreateInput, medicinesUncheckedCreateInput>
  }

  /**
   * medicines createMany
   */
  export type medicinesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many medicines.
     */
    data: medicinesCreateManyInput | medicinesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * medicines createManyAndReturn
   */
  export type medicinesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicines
     */
    select?: medicinesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the medicines
     */
    omit?: medicinesOmit<ExtArgs> | null
    /**
     * The data used to create many medicines.
     */
    data: medicinesCreateManyInput | medicinesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * medicines update
   */
  export type medicinesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicines
     */
    select?: medicinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicines
     */
    omit?: medicinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinesInclude<ExtArgs> | null
    /**
     * The data needed to update a medicines.
     */
    data: XOR<medicinesUpdateInput, medicinesUncheckedUpdateInput>
    /**
     * Choose, which medicines to update.
     */
    where: medicinesWhereUniqueInput
  }

  /**
   * medicines updateMany
   */
  export type medicinesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update medicines.
     */
    data: XOR<medicinesUpdateManyMutationInput, medicinesUncheckedUpdateManyInput>
    /**
     * Filter which medicines to update
     */
    where?: medicinesWhereInput
    /**
     * Limit how many medicines to update.
     */
    limit?: number
  }

  /**
   * medicines updateManyAndReturn
   */
  export type medicinesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicines
     */
    select?: medicinesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the medicines
     */
    omit?: medicinesOmit<ExtArgs> | null
    /**
     * The data used to update medicines.
     */
    data: XOR<medicinesUpdateManyMutationInput, medicinesUncheckedUpdateManyInput>
    /**
     * Filter which medicines to update
     */
    where?: medicinesWhereInput
    /**
     * Limit how many medicines to update.
     */
    limit?: number
  }

  /**
   * medicines upsert
   */
  export type medicinesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicines
     */
    select?: medicinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicines
     */
    omit?: medicinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinesInclude<ExtArgs> | null
    /**
     * The filter to search for the medicines to update in case it exists.
     */
    where: medicinesWhereUniqueInput
    /**
     * In case the medicines found by the `where` argument doesn't exist, create a new medicines with this data.
     */
    create: XOR<medicinesCreateInput, medicinesUncheckedCreateInput>
    /**
     * In case the medicines was found with the provided `where` argument, update it with this data.
     */
    update: XOR<medicinesUpdateInput, medicinesUncheckedUpdateInput>
  }

  /**
   * medicines delete
   */
  export type medicinesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicines
     */
    select?: medicinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicines
     */
    omit?: medicinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinesInclude<ExtArgs> | null
    /**
     * Filter which medicines to delete.
     */
    where: medicinesWhereUniqueInput
  }

  /**
   * medicines deleteMany
   */
  export type medicinesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medicines to delete
     */
    where?: medicinesWhereInput
    /**
     * Limit how many medicines to delete.
     */
    limit?: number
  }

  /**
   * medicines.inventories
   */
  export type medicines$inventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventories
     */
    select?: inventoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventories
     */
    omit?: inventoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoriesInclude<ExtArgs> | null
    where?: inventoriesWhereInput
    orderBy?: inventoriesOrderByWithRelationInput | inventoriesOrderByWithRelationInput[]
    cursor?: inventoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoriesScalarFieldEnum | InventoriesScalarFieldEnum[]
  }

  /**
   * medicines.user_medis
   */
  export type medicines$user_medisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_medis
     */
    select?: user_medisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_medis
     */
    omit?: user_medisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_medisInclude<ExtArgs> | null
    where?: user_medisWhereInput
    orderBy?: user_medisOrderByWithRelationInput | user_medisOrderByWithRelationInput[]
    cursor?: user_medisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_medisScalarFieldEnum | User_medisScalarFieldEnum[]
  }

  /**
   * medicines without action
   */
  export type medicinesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicines
     */
    select?: medicinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicines
     */
    omit?: medicinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicinesInclude<ExtArgs> | null
  }


  /**
   * Model pharmacies
   */

  export type AggregatePharmacies = {
    _count: PharmaciesCountAggregateOutputType | null
    _avg: PharmaciesAvgAggregateOutputType | null
    _sum: PharmaciesSumAggregateOutputType | null
    _min: PharmaciesMinAggregateOutputType | null
    _max: PharmaciesMaxAggregateOutputType | null
  }

  export type PharmaciesAvgAggregateOutputType = {
    wgs84_lat: Decimal | null
    wgs84_lon: Decimal | null
  }

  export type PharmaciesSumAggregateOutputType = {
    wgs84_lat: Decimal | null
    wgs84_lon: Decimal | null
  }

  export type PharmaciesMinAggregateOutputType = {
    hpid: string | null
    duty_addr: string | null
    duty_mapimg: string | null
    duty_name: string | null
    duty_tel1: string | null
    duty_time1c: string | null
    duty_time1s: string | null
    duty_time2c: string | null
    duty_time2s: string | null
    duty_time3c: string | null
    duty_time3s: string | null
    duty_time4c: string | null
    duty_time4s: string | null
    duty_time5c: string | null
    duty_time5s: string | null
    duty_time6c: string | null
    duty_time6s: string | null
    duty_time7c: string | null
    duty_time7s: string | null
    post_cdn1: string | null
    post_cdn2: string | null
    wgs84_lat: Decimal | null
    wgs84_lon: Decimal | null
  }

  export type PharmaciesMaxAggregateOutputType = {
    hpid: string | null
    duty_addr: string | null
    duty_mapimg: string | null
    duty_name: string | null
    duty_tel1: string | null
    duty_time1c: string | null
    duty_time1s: string | null
    duty_time2c: string | null
    duty_time2s: string | null
    duty_time3c: string | null
    duty_time3s: string | null
    duty_time4c: string | null
    duty_time4s: string | null
    duty_time5c: string | null
    duty_time5s: string | null
    duty_time6c: string | null
    duty_time6s: string | null
    duty_time7c: string | null
    duty_time7s: string | null
    post_cdn1: string | null
    post_cdn2: string | null
    wgs84_lat: Decimal | null
    wgs84_lon: Decimal | null
  }

  export type PharmaciesCountAggregateOutputType = {
    hpid: number
    duty_addr: number
    duty_mapimg: number
    duty_name: number
    duty_tel1: number
    duty_time1c: number
    duty_time1s: number
    duty_time2c: number
    duty_time2s: number
    duty_time3c: number
    duty_time3s: number
    duty_time4c: number
    duty_time4s: number
    duty_time5c: number
    duty_time5s: number
    duty_time6c: number
    duty_time6s: number
    duty_time7c: number
    duty_time7s: number
    post_cdn1: number
    post_cdn2: number
    wgs84_lat: number
    wgs84_lon: number
    _all: number
  }


  export type PharmaciesAvgAggregateInputType = {
    wgs84_lat?: true
    wgs84_lon?: true
  }

  export type PharmaciesSumAggregateInputType = {
    wgs84_lat?: true
    wgs84_lon?: true
  }

  export type PharmaciesMinAggregateInputType = {
    hpid?: true
    duty_addr?: true
    duty_mapimg?: true
    duty_name?: true
    duty_tel1?: true
    duty_time1c?: true
    duty_time1s?: true
    duty_time2c?: true
    duty_time2s?: true
    duty_time3c?: true
    duty_time3s?: true
    duty_time4c?: true
    duty_time4s?: true
    duty_time5c?: true
    duty_time5s?: true
    duty_time6c?: true
    duty_time6s?: true
    duty_time7c?: true
    duty_time7s?: true
    post_cdn1?: true
    post_cdn2?: true
    wgs84_lat?: true
    wgs84_lon?: true
  }

  export type PharmaciesMaxAggregateInputType = {
    hpid?: true
    duty_addr?: true
    duty_mapimg?: true
    duty_name?: true
    duty_tel1?: true
    duty_time1c?: true
    duty_time1s?: true
    duty_time2c?: true
    duty_time2s?: true
    duty_time3c?: true
    duty_time3s?: true
    duty_time4c?: true
    duty_time4s?: true
    duty_time5c?: true
    duty_time5s?: true
    duty_time6c?: true
    duty_time6s?: true
    duty_time7c?: true
    duty_time7s?: true
    post_cdn1?: true
    post_cdn2?: true
    wgs84_lat?: true
    wgs84_lon?: true
  }

  export type PharmaciesCountAggregateInputType = {
    hpid?: true
    duty_addr?: true
    duty_mapimg?: true
    duty_name?: true
    duty_tel1?: true
    duty_time1c?: true
    duty_time1s?: true
    duty_time2c?: true
    duty_time2s?: true
    duty_time3c?: true
    duty_time3s?: true
    duty_time4c?: true
    duty_time4s?: true
    duty_time5c?: true
    duty_time5s?: true
    duty_time6c?: true
    duty_time6s?: true
    duty_time7c?: true
    duty_time7s?: true
    post_cdn1?: true
    post_cdn2?: true
    wgs84_lat?: true
    wgs84_lon?: true
    _all?: true
  }

  export type PharmaciesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pharmacies to aggregate.
     */
    where?: pharmaciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pharmacies to fetch.
     */
    orderBy?: pharmaciesOrderByWithRelationInput | pharmaciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pharmaciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pharmacies
    **/
    _count?: true | PharmaciesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PharmaciesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PharmaciesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PharmaciesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PharmaciesMaxAggregateInputType
  }

  export type GetPharmaciesAggregateType<T extends PharmaciesAggregateArgs> = {
        [P in keyof T & keyof AggregatePharmacies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePharmacies[P]>
      : GetScalarType<T[P], AggregatePharmacies[P]>
  }




  export type pharmaciesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pharmaciesWhereInput
    orderBy?: pharmaciesOrderByWithAggregationInput | pharmaciesOrderByWithAggregationInput[]
    by: PharmaciesScalarFieldEnum[] | PharmaciesScalarFieldEnum
    having?: pharmaciesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PharmaciesCountAggregateInputType | true
    _avg?: PharmaciesAvgAggregateInputType
    _sum?: PharmaciesSumAggregateInputType
    _min?: PharmaciesMinAggregateInputType
    _max?: PharmaciesMaxAggregateInputType
  }

  export type PharmaciesGroupByOutputType = {
    hpid: string
    duty_addr: string | null
    duty_mapimg: string | null
    duty_name: string
    duty_tel1: string | null
    duty_time1c: string | null
    duty_time1s: string | null
    duty_time2c: string | null
    duty_time2s: string | null
    duty_time3c: string | null
    duty_time3s: string | null
    duty_time4c: string | null
    duty_time4s: string | null
    duty_time5c: string | null
    duty_time5s: string | null
    duty_time6c: string | null
    duty_time6s: string | null
    duty_time7c: string | null
    duty_time7s: string | null
    post_cdn1: string | null
    post_cdn2: string | null
    wgs84_lat: Decimal | null
    wgs84_lon: Decimal | null
    _count: PharmaciesCountAggregateOutputType | null
    _avg: PharmaciesAvgAggregateOutputType | null
    _sum: PharmaciesSumAggregateOutputType | null
    _min: PharmaciesMinAggregateOutputType | null
    _max: PharmaciesMaxAggregateOutputType | null
  }

  type GetPharmaciesGroupByPayload<T extends pharmaciesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PharmaciesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PharmaciesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PharmaciesGroupByOutputType[P]>
            : GetScalarType<T[P], PharmaciesGroupByOutputType[P]>
        }
      >
    >


  export type pharmaciesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hpid?: boolean
    duty_addr?: boolean
    duty_mapimg?: boolean
    duty_name?: boolean
    duty_tel1?: boolean
    duty_time1c?: boolean
    duty_time1s?: boolean
    duty_time2c?: boolean
    duty_time2s?: boolean
    duty_time3c?: boolean
    duty_time3s?: boolean
    duty_time4c?: boolean
    duty_time4s?: boolean
    duty_time5c?: boolean
    duty_time5s?: boolean
    duty_time6c?: boolean
    duty_time6s?: boolean
    duty_time7c?: boolean
    duty_time7s?: boolean
    post_cdn1?: boolean
    post_cdn2?: boolean
    wgs84_lat?: boolean
    wgs84_lon?: boolean
    inventories?: boolean | pharmacies$inventoriesArgs<ExtArgs>
    users?: boolean | pharmacies$usersArgs<ExtArgs>
    _count?: boolean | PharmaciesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacies"]>

  export type pharmaciesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hpid?: boolean
    duty_addr?: boolean
    duty_mapimg?: boolean
    duty_name?: boolean
    duty_tel1?: boolean
    duty_time1c?: boolean
    duty_time1s?: boolean
    duty_time2c?: boolean
    duty_time2s?: boolean
    duty_time3c?: boolean
    duty_time3s?: boolean
    duty_time4c?: boolean
    duty_time4s?: boolean
    duty_time5c?: boolean
    duty_time5s?: boolean
    duty_time6c?: boolean
    duty_time6s?: boolean
    duty_time7c?: boolean
    duty_time7s?: boolean
    post_cdn1?: boolean
    post_cdn2?: boolean
    wgs84_lat?: boolean
    wgs84_lon?: boolean
  }, ExtArgs["result"]["pharmacies"]>

  export type pharmaciesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hpid?: boolean
    duty_addr?: boolean
    duty_mapimg?: boolean
    duty_name?: boolean
    duty_tel1?: boolean
    duty_time1c?: boolean
    duty_time1s?: boolean
    duty_time2c?: boolean
    duty_time2s?: boolean
    duty_time3c?: boolean
    duty_time3s?: boolean
    duty_time4c?: boolean
    duty_time4s?: boolean
    duty_time5c?: boolean
    duty_time5s?: boolean
    duty_time6c?: boolean
    duty_time6s?: boolean
    duty_time7c?: boolean
    duty_time7s?: boolean
    post_cdn1?: boolean
    post_cdn2?: boolean
    wgs84_lat?: boolean
    wgs84_lon?: boolean
  }, ExtArgs["result"]["pharmacies"]>

  export type pharmaciesSelectScalar = {
    hpid?: boolean
    duty_addr?: boolean
    duty_mapimg?: boolean
    duty_name?: boolean
    duty_tel1?: boolean
    duty_time1c?: boolean
    duty_time1s?: boolean
    duty_time2c?: boolean
    duty_time2s?: boolean
    duty_time3c?: boolean
    duty_time3s?: boolean
    duty_time4c?: boolean
    duty_time4s?: boolean
    duty_time5c?: boolean
    duty_time5s?: boolean
    duty_time6c?: boolean
    duty_time6s?: boolean
    duty_time7c?: boolean
    duty_time7s?: boolean
    post_cdn1?: boolean
    post_cdn2?: boolean
    wgs84_lat?: boolean
    wgs84_lon?: boolean
  }

  export type pharmaciesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"hpid" | "duty_addr" | "duty_mapimg" | "duty_name" | "duty_tel1" | "duty_time1c" | "duty_time1s" | "duty_time2c" | "duty_time2s" | "duty_time3c" | "duty_time3s" | "duty_time4c" | "duty_time4s" | "duty_time5c" | "duty_time5s" | "duty_time6c" | "duty_time6s" | "duty_time7c" | "duty_time7s" | "post_cdn1" | "post_cdn2" | "wgs84_lat" | "wgs84_lon", ExtArgs["result"]["pharmacies"]>
  export type pharmaciesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | pharmacies$inventoriesArgs<ExtArgs>
    users?: boolean | pharmacies$usersArgs<ExtArgs>
    _count?: boolean | PharmaciesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pharmaciesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type pharmaciesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $pharmaciesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pharmacies"
    objects: {
      inventories: Prisma.$inventoriesPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      hpid: string
      duty_addr: string | null
      duty_mapimg: string | null
      duty_name: string
      duty_tel1: string | null
      duty_time1c: string | null
      duty_time1s: string | null
      duty_time2c: string | null
      duty_time2s: string | null
      duty_time3c: string | null
      duty_time3s: string | null
      duty_time4c: string | null
      duty_time4s: string | null
      duty_time5c: string | null
      duty_time5s: string | null
      duty_time6c: string | null
      duty_time6s: string | null
      duty_time7c: string | null
      duty_time7s: string | null
      post_cdn1: string | null
      post_cdn2: string | null
      wgs84_lat: Prisma.Decimal | null
      wgs84_lon: Prisma.Decimal | null
    }, ExtArgs["result"]["pharmacies"]>
    composites: {}
  }

  type pharmaciesGetPayload<S extends boolean | null | undefined | pharmaciesDefaultArgs> = $Result.GetResult<Prisma.$pharmaciesPayload, S>

  type pharmaciesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pharmaciesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PharmaciesCountAggregateInputType | true
    }

  export interface pharmaciesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pharmacies'], meta: { name: 'pharmacies' } }
    /**
     * Find zero or one Pharmacies that matches the filter.
     * @param {pharmaciesFindUniqueArgs} args - Arguments to find a Pharmacies
     * @example
     * // Get one Pharmacies
     * const pharmacies = await prisma.pharmacies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pharmaciesFindUniqueArgs>(args: SelectSubset<T, pharmaciesFindUniqueArgs<ExtArgs>>): Prisma__pharmaciesClient<$Result.GetResult<Prisma.$pharmaciesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pharmacies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pharmaciesFindUniqueOrThrowArgs} args - Arguments to find a Pharmacies
     * @example
     * // Get one Pharmacies
     * const pharmacies = await prisma.pharmacies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pharmaciesFindUniqueOrThrowArgs>(args: SelectSubset<T, pharmaciesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pharmaciesClient<$Result.GetResult<Prisma.$pharmaciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pharmacies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pharmaciesFindFirstArgs} args - Arguments to find a Pharmacies
     * @example
     * // Get one Pharmacies
     * const pharmacies = await prisma.pharmacies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pharmaciesFindFirstArgs>(args?: SelectSubset<T, pharmaciesFindFirstArgs<ExtArgs>>): Prisma__pharmaciesClient<$Result.GetResult<Prisma.$pharmaciesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pharmacies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pharmaciesFindFirstOrThrowArgs} args - Arguments to find a Pharmacies
     * @example
     * // Get one Pharmacies
     * const pharmacies = await prisma.pharmacies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pharmaciesFindFirstOrThrowArgs>(args?: SelectSubset<T, pharmaciesFindFirstOrThrowArgs<ExtArgs>>): Prisma__pharmaciesClient<$Result.GetResult<Prisma.$pharmaciesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pharmacies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pharmaciesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pharmacies
     * const pharmacies = await prisma.pharmacies.findMany()
     * 
     * // Get first 10 Pharmacies
     * const pharmacies = await prisma.pharmacies.findMany({ take: 10 })
     * 
     * // Only select the `hpid`
     * const pharmaciesWithHpidOnly = await prisma.pharmacies.findMany({ select: { hpid: true } })
     * 
     */
    findMany<T extends pharmaciesFindManyArgs>(args?: SelectSubset<T, pharmaciesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pharmaciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pharmacies.
     * @param {pharmaciesCreateArgs} args - Arguments to create a Pharmacies.
     * @example
     * // Create one Pharmacies
     * const Pharmacies = await prisma.pharmacies.create({
     *   data: {
     *     // ... data to create a Pharmacies
     *   }
     * })
     * 
     */
    create<T extends pharmaciesCreateArgs>(args: SelectSubset<T, pharmaciesCreateArgs<ExtArgs>>): Prisma__pharmaciesClient<$Result.GetResult<Prisma.$pharmaciesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pharmacies.
     * @param {pharmaciesCreateManyArgs} args - Arguments to create many Pharmacies.
     * @example
     * // Create many Pharmacies
     * const pharmacies = await prisma.pharmacies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pharmaciesCreateManyArgs>(args?: SelectSubset<T, pharmaciesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pharmacies and returns the data saved in the database.
     * @param {pharmaciesCreateManyAndReturnArgs} args - Arguments to create many Pharmacies.
     * @example
     * // Create many Pharmacies
     * const pharmacies = await prisma.pharmacies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pharmacies and only return the `hpid`
     * const pharmaciesWithHpidOnly = await prisma.pharmacies.createManyAndReturn({
     *   select: { hpid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pharmaciesCreateManyAndReturnArgs>(args?: SelectSubset<T, pharmaciesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pharmaciesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pharmacies.
     * @param {pharmaciesDeleteArgs} args - Arguments to delete one Pharmacies.
     * @example
     * // Delete one Pharmacies
     * const Pharmacies = await prisma.pharmacies.delete({
     *   where: {
     *     // ... filter to delete one Pharmacies
     *   }
     * })
     * 
     */
    delete<T extends pharmaciesDeleteArgs>(args: SelectSubset<T, pharmaciesDeleteArgs<ExtArgs>>): Prisma__pharmaciesClient<$Result.GetResult<Prisma.$pharmaciesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pharmacies.
     * @param {pharmaciesUpdateArgs} args - Arguments to update one Pharmacies.
     * @example
     * // Update one Pharmacies
     * const pharmacies = await prisma.pharmacies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pharmaciesUpdateArgs>(args: SelectSubset<T, pharmaciesUpdateArgs<ExtArgs>>): Prisma__pharmaciesClient<$Result.GetResult<Prisma.$pharmaciesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pharmacies.
     * @param {pharmaciesDeleteManyArgs} args - Arguments to filter Pharmacies to delete.
     * @example
     * // Delete a few Pharmacies
     * const { count } = await prisma.pharmacies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pharmaciesDeleteManyArgs>(args?: SelectSubset<T, pharmaciesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pharmaciesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pharmacies
     * const pharmacies = await prisma.pharmacies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pharmaciesUpdateManyArgs>(args: SelectSubset<T, pharmaciesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacies and returns the data updated in the database.
     * @param {pharmaciesUpdateManyAndReturnArgs} args - Arguments to update many Pharmacies.
     * @example
     * // Update many Pharmacies
     * const pharmacies = await prisma.pharmacies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pharmacies and only return the `hpid`
     * const pharmaciesWithHpidOnly = await prisma.pharmacies.updateManyAndReturn({
     *   select: { hpid: true },
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
    updateManyAndReturn<T extends pharmaciesUpdateManyAndReturnArgs>(args: SelectSubset<T, pharmaciesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pharmaciesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pharmacies.
     * @param {pharmaciesUpsertArgs} args - Arguments to update or create a Pharmacies.
     * @example
     * // Update or create a Pharmacies
     * const pharmacies = await prisma.pharmacies.upsert({
     *   create: {
     *     // ... data to create a Pharmacies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pharmacies we want to update
     *   }
     * })
     */
    upsert<T extends pharmaciesUpsertArgs>(args: SelectSubset<T, pharmaciesUpsertArgs<ExtArgs>>): Prisma__pharmaciesClient<$Result.GetResult<Prisma.$pharmaciesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pharmaciesCountArgs} args - Arguments to filter Pharmacies to count.
     * @example
     * // Count the number of Pharmacies
     * const count = await prisma.pharmacies.count({
     *   where: {
     *     // ... the filter for the Pharmacies we want to count
     *   }
     * })
    **/
    count<T extends pharmaciesCountArgs>(
      args?: Subset<T, pharmaciesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PharmaciesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaciesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PharmaciesAggregateArgs>(args: Subset<T, PharmaciesAggregateArgs>): Prisma.PrismaPromise<GetPharmaciesAggregateType<T>>

    /**
     * Group by Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pharmaciesGroupByArgs} args - Group by arguments.
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
      T extends pharmaciesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pharmaciesGroupByArgs['orderBy'] }
        : { orderBy?: pharmaciesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pharmaciesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPharmaciesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pharmacies model
   */
  readonly fields: pharmaciesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pharmacies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pharmaciesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventories<T extends pharmacies$inventoriesArgs<ExtArgs> = {}>(args?: Subset<T, pharmacies$inventoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends pharmacies$usersArgs<ExtArgs> = {}>(args?: Subset<T, pharmacies$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the pharmacies model
   */
  interface pharmaciesFieldRefs {
    readonly hpid: FieldRef<"pharmacies", 'String'>
    readonly duty_addr: FieldRef<"pharmacies", 'String'>
    readonly duty_mapimg: FieldRef<"pharmacies", 'String'>
    readonly duty_name: FieldRef<"pharmacies", 'String'>
    readonly duty_tel1: FieldRef<"pharmacies", 'String'>
    readonly duty_time1c: FieldRef<"pharmacies", 'String'>
    readonly duty_time1s: FieldRef<"pharmacies", 'String'>
    readonly duty_time2c: FieldRef<"pharmacies", 'String'>
    readonly duty_time2s: FieldRef<"pharmacies", 'String'>
    readonly duty_time3c: FieldRef<"pharmacies", 'String'>
    readonly duty_time3s: FieldRef<"pharmacies", 'String'>
    readonly duty_time4c: FieldRef<"pharmacies", 'String'>
    readonly duty_time4s: FieldRef<"pharmacies", 'String'>
    readonly duty_time5c: FieldRef<"pharmacies", 'String'>
    readonly duty_time5s: FieldRef<"pharmacies", 'String'>
    readonly duty_time6c: FieldRef<"pharmacies", 'String'>
    readonly duty_time6s: FieldRef<"pharmacies", 'String'>
    readonly duty_time7c: FieldRef<"pharmacies", 'String'>
    readonly duty_time7s: FieldRef<"pharmacies", 'String'>
    readonly post_cdn1: FieldRef<"pharmacies", 'String'>
    readonly post_cdn2: FieldRef<"pharmacies", 'String'>
    readonly wgs84_lat: FieldRef<"pharmacies", 'Decimal'>
    readonly wgs84_lon: FieldRef<"pharmacies", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * pharmacies findUnique
   */
  export type pharmaciesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pharmacies
     */
    select?: pharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pharmacies
     */
    omit?: pharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pharmaciesInclude<ExtArgs> | null
    /**
     * Filter, which pharmacies to fetch.
     */
    where: pharmaciesWhereUniqueInput
  }

  /**
   * pharmacies findUniqueOrThrow
   */
  export type pharmaciesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pharmacies
     */
    select?: pharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pharmacies
     */
    omit?: pharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pharmaciesInclude<ExtArgs> | null
    /**
     * Filter, which pharmacies to fetch.
     */
    where: pharmaciesWhereUniqueInput
  }

  /**
   * pharmacies findFirst
   */
  export type pharmaciesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pharmacies
     */
    select?: pharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pharmacies
     */
    omit?: pharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pharmaciesInclude<ExtArgs> | null
    /**
     * Filter, which pharmacies to fetch.
     */
    where?: pharmaciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pharmacies to fetch.
     */
    orderBy?: pharmaciesOrderByWithRelationInput | pharmaciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pharmacies.
     */
    cursor?: pharmaciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pharmacies.
     */
    distinct?: PharmaciesScalarFieldEnum | PharmaciesScalarFieldEnum[]
  }

  /**
   * pharmacies findFirstOrThrow
   */
  export type pharmaciesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pharmacies
     */
    select?: pharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pharmacies
     */
    omit?: pharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pharmaciesInclude<ExtArgs> | null
    /**
     * Filter, which pharmacies to fetch.
     */
    where?: pharmaciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pharmacies to fetch.
     */
    orderBy?: pharmaciesOrderByWithRelationInput | pharmaciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pharmacies.
     */
    cursor?: pharmaciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pharmacies.
     */
    distinct?: PharmaciesScalarFieldEnum | PharmaciesScalarFieldEnum[]
  }

  /**
   * pharmacies findMany
   */
  export type pharmaciesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pharmacies
     */
    select?: pharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pharmacies
     */
    omit?: pharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pharmaciesInclude<ExtArgs> | null
    /**
     * Filter, which pharmacies to fetch.
     */
    where?: pharmaciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pharmacies to fetch.
     */
    orderBy?: pharmaciesOrderByWithRelationInput | pharmaciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pharmacies.
     */
    cursor?: pharmaciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pharmacies.
     */
    skip?: number
    distinct?: PharmaciesScalarFieldEnum | PharmaciesScalarFieldEnum[]
  }

  /**
   * pharmacies create
   */
  export type pharmaciesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pharmacies
     */
    select?: pharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pharmacies
     */
    omit?: pharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pharmaciesInclude<ExtArgs> | null
    /**
     * The data needed to create a pharmacies.
     */
    data: XOR<pharmaciesCreateInput, pharmaciesUncheckedCreateInput>
  }

  /**
   * pharmacies createMany
   */
  export type pharmaciesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pharmacies.
     */
    data: pharmaciesCreateManyInput | pharmaciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pharmacies createManyAndReturn
   */
  export type pharmaciesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pharmacies
     */
    select?: pharmaciesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pharmacies
     */
    omit?: pharmaciesOmit<ExtArgs> | null
    /**
     * The data used to create many pharmacies.
     */
    data: pharmaciesCreateManyInput | pharmaciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pharmacies update
   */
  export type pharmaciesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pharmacies
     */
    select?: pharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pharmacies
     */
    omit?: pharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pharmaciesInclude<ExtArgs> | null
    /**
     * The data needed to update a pharmacies.
     */
    data: XOR<pharmaciesUpdateInput, pharmaciesUncheckedUpdateInput>
    /**
     * Choose, which pharmacies to update.
     */
    where: pharmaciesWhereUniqueInput
  }

  /**
   * pharmacies updateMany
   */
  export type pharmaciesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pharmacies.
     */
    data: XOR<pharmaciesUpdateManyMutationInput, pharmaciesUncheckedUpdateManyInput>
    /**
     * Filter which pharmacies to update
     */
    where?: pharmaciesWhereInput
    /**
     * Limit how many pharmacies to update.
     */
    limit?: number
  }

  /**
   * pharmacies updateManyAndReturn
   */
  export type pharmaciesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pharmacies
     */
    select?: pharmaciesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pharmacies
     */
    omit?: pharmaciesOmit<ExtArgs> | null
    /**
     * The data used to update pharmacies.
     */
    data: XOR<pharmaciesUpdateManyMutationInput, pharmaciesUncheckedUpdateManyInput>
    /**
     * Filter which pharmacies to update
     */
    where?: pharmaciesWhereInput
    /**
     * Limit how many pharmacies to update.
     */
    limit?: number
  }

  /**
   * pharmacies upsert
   */
  export type pharmaciesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pharmacies
     */
    select?: pharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pharmacies
     */
    omit?: pharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pharmaciesInclude<ExtArgs> | null
    /**
     * The filter to search for the pharmacies to update in case it exists.
     */
    where: pharmaciesWhereUniqueInput
    /**
     * In case the pharmacies found by the `where` argument doesn't exist, create a new pharmacies with this data.
     */
    create: XOR<pharmaciesCreateInput, pharmaciesUncheckedCreateInput>
    /**
     * In case the pharmacies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pharmaciesUpdateInput, pharmaciesUncheckedUpdateInput>
  }

  /**
   * pharmacies delete
   */
  export type pharmaciesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pharmacies
     */
    select?: pharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pharmacies
     */
    omit?: pharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pharmaciesInclude<ExtArgs> | null
    /**
     * Filter which pharmacies to delete.
     */
    where: pharmaciesWhereUniqueInput
  }

  /**
   * pharmacies deleteMany
   */
  export type pharmaciesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pharmacies to delete
     */
    where?: pharmaciesWhereInput
    /**
     * Limit how many pharmacies to delete.
     */
    limit?: number
  }

  /**
   * pharmacies.inventories
   */
  export type pharmacies$inventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventories
     */
    select?: inventoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventories
     */
    omit?: inventoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoriesInclude<ExtArgs> | null
    where?: inventoriesWhereInput
    orderBy?: inventoriesOrderByWithRelationInput | inventoriesOrderByWithRelationInput[]
    cursor?: inventoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoriesScalarFieldEnum | InventoriesScalarFieldEnum[]
  }

  /**
   * pharmacies.users
   */
  export type pharmacies$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * pharmacies without action
   */
  export type pharmaciesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pharmacies
     */
    select?: pharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pharmacies
     */
    omit?: pharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pharmaciesInclude<ExtArgs> | null
  }


  /**
   * Model post_tags
   */

  export type AggregatePost_tags = {
    _count: Post_tagsCountAggregateOutputType | null
    _avg: Post_tagsAvgAggregateOutputType | null
    _sum: Post_tagsSumAggregateOutputType | null
    _min: Post_tagsMinAggregateOutputType | null
    _max: Post_tagsMaxAggregateOutputType | null
  }

  export type Post_tagsAvgAggregateOutputType = {
    id: number | null
    tagId: number | null
    postId: number | null
  }

  export type Post_tagsSumAggregateOutputType = {
    id: number | null
    tagId: number | null
    postId: number | null
  }

  export type Post_tagsMinAggregateOutputType = {
    id: number | null
    tagId: number | null
    postId: number | null
  }

  export type Post_tagsMaxAggregateOutputType = {
    id: number | null
    tagId: number | null
    postId: number | null
  }

  export type Post_tagsCountAggregateOutputType = {
    id: number
    tagId: number
    postId: number
    _all: number
  }


  export type Post_tagsAvgAggregateInputType = {
    id?: true
    tagId?: true
    postId?: true
  }

  export type Post_tagsSumAggregateInputType = {
    id?: true
    tagId?: true
    postId?: true
  }

  export type Post_tagsMinAggregateInputType = {
    id?: true
    tagId?: true
    postId?: true
  }

  export type Post_tagsMaxAggregateInputType = {
    id?: true
    tagId?: true
    postId?: true
  }

  export type Post_tagsCountAggregateInputType = {
    id?: true
    tagId?: true
    postId?: true
    _all?: true
  }

  export type Post_tagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post_tags to aggregate.
     */
    where?: post_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_tags to fetch.
     */
    orderBy?: post_tagsOrderByWithRelationInput | post_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: post_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned post_tags
    **/
    _count?: true | Post_tagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Post_tagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Post_tagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Post_tagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Post_tagsMaxAggregateInputType
  }

  export type GetPost_tagsAggregateType<T extends Post_tagsAggregateArgs> = {
        [P in keyof T & keyof AggregatePost_tags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost_tags[P]>
      : GetScalarType<T[P], AggregatePost_tags[P]>
  }




  export type post_tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_tagsWhereInput
    orderBy?: post_tagsOrderByWithAggregationInput | post_tagsOrderByWithAggregationInput[]
    by: Post_tagsScalarFieldEnum[] | Post_tagsScalarFieldEnum
    having?: post_tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Post_tagsCountAggregateInputType | true
    _avg?: Post_tagsAvgAggregateInputType
    _sum?: Post_tagsSumAggregateInputType
    _min?: Post_tagsMinAggregateInputType
    _max?: Post_tagsMaxAggregateInputType
  }

  export type Post_tagsGroupByOutputType = {
    id: number
    tagId: number
    postId: number
    _count: Post_tagsCountAggregateOutputType | null
    _avg: Post_tagsAvgAggregateOutputType | null
    _sum: Post_tagsSumAggregateOutputType | null
    _min: Post_tagsMinAggregateOutputType | null
    _max: Post_tagsMaxAggregateOutputType | null
  }

  type GetPost_tagsGroupByPayload<T extends post_tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Post_tagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Post_tagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Post_tagsGroupByOutputType[P]>
            : GetScalarType<T[P], Post_tagsGroupByOutputType[P]>
        }
      >
    >


  export type post_tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagId?: boolean
    postId?: boolean
    posts?: boolean | postsDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_tags"]>

  export type post_tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagId?: boolean
    postId?: boolean
    posts?: boolean | postsDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_tags"]>

  export type post_tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagId?: boolean
    postId?: boolean
    posts?: boolean | postsDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_tags"]>

  export type post_tagsSelectScalar = {
    id?: boolean
    tagId?: boolean
    postId?: boolean
  }

  export type post_tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tagId" | "postId", ExtArgs["result"]["post_tags"]>
  export type post_tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | postsDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type post_tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | postsDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type post_tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | postsDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }

  export type $post_tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "post_tags"
    objects: {
      posts: Prisma.$postsPayload<ExtArgs>
      tags: Prisma.$tagsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tagId: number
      postId: number
    }, ExtArgs["result"]["post_tags"]>
    composites: {}
  }

  type post_tagsGetPayload<S extends boolean | null | undefined | post_tagsDefaultArgs> = $Result.GetResult<Prisma.$post_tagsPayload, S>

  type post_tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<post_tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Post_tagsCountAggregateInputType | true
    }

  export interface post_tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['post_tags'], meta: { name: 'post_tags' } }
    /**
     * Find zero or one Post_tags that matches the filter.
     * @param {post_tagsFindUniqueArgs} args - Arguments to find a Post_tags
     * @example
     * // Get one Post_tags
     * const post_tags = await prisma.post_tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends post_tagsFindUniqueArgs>(args: SelectSubset<T, post_tagsFindUniqueArgs<ExtArgs>>): Prisma__post_tagsClient<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post_tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {post_tagsFindUniqueOrThrowArgs} args - Arguments to find a Post_tags
     * @example
     * // Get one Post_tags
     * const post_tags = await prisma.post_tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends post_tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, post_tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__post_tagsClient<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_tagsFindFirstArgs} args - Arguments to find a Post_tags
     * @example
     * // Get one Post_tags
     * const post_tags = await prisma.post_tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends post_tagsFindFirstArgs>(args?: SelectSubset<T, post_tagsFindFirstArgs<ExtArgs>>): Prisma__post_tagsClient<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post_tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_tagsFindFirstOrThrowArgs} args - Arguments to find a Post_tags
     * @example
     * // Get one Post_tags
     * const post_tags = await prisma.post_tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends post_tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, post_tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__post_tagsClient<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Post_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Post_tags
     * const post_tags = await prisma.post_tags.findMany()
     * 
     * // Get first 10 Post_tags
     * const post_tags = await prisma.post_tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const post_tagsWithIdOnly = await prisma.post_tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends post_tagsFindManyArgs>(args?: SelectSubset<T, post_tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post_tags.
     * @param {post_tagsCreateArgs} args - Arguments to create a Post_tags.
     * @example
     * // Create one Post_tags
     * const Post_tags = await prisma.post_tags.create({
     *   data: {
     *     // ... data to create a Post_tags
     *   }
     * })
     * 
     */
    create<T extends post_tagsCreateArgs>(args: SelectSubset<T, post_tagsCreateArgs<ExtArgs>>): Prisma__post_tagsClient<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Post_tags.
     * @param {post_tagsCreateManyArgs} args - Arguments to create many Post_tags.
     * @example
     * // Create many Post_tags
     * const post_tags = await prisma.post_tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends post_tagsCreateManyArgs>(args?: SelectSubset<T, post_tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Post_tags and returns the data saved in the database.
     * @param {post_tagsCreateManyAndReturnArgs} args - Arguments to create many Post_tags.
     * @example
     * // Create many Post_tags
     * const post_tags = await prisma.post_tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Post_tags and only return the `id`
     * const post_tagsWithIdOnly = await prisma.post_tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends post_tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, post_tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post_tags.
     * @param {post_tagsDeleteArgs} args - Arguments to delete one Post_tags.
     * @example
     * // Delete one Post_tags
     * const Post_tags = await prisma.post_tags.delete({
     *   where: {
     *     // ... filter to delete one Post_tags
     *   }
     * })
     * 
     */
    delete<T extends post_tagsDeleteArgs>(args: SelectSubset<T, post_tagsDeleteArgs<ExtArgs>>): Prisma__post_tagsClient<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post_tags.
     * @param {post_tagsUpdateArgs} args - Arguments to update one Post_tags.
     * @example
     * // Update one Post_tags
     * const post_tags = await prisma.post_tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends post_tagsUpdateArgs>(args: SelectSubset<T, post_tagsUpdateArgs<ExtArgs>>): Prisma__post_tagsClient<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Post_tags.
     * @param {post_tagsDeleteManyArgs} args - Arguments to filter Post_tags to delete.
     * @example
     * // Delete a few Post_tags
     * const { count } = await prisma.post_tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends post_tagsDeleteManyArgs>(args?: SelectSubset<T, post_tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Post_tags
     * const post_tags = await prisma.post_tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends post_tagsUpdateManyArgs>(args: SelectSubset<T, post_tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post_tags and returns the data updated in the database.
     * @param {post_tagsUpdateManyAndReturnArgs} args - Arguments to update many Post_tags.
     * @example
     * // Update many Post_tags
     * const post_tags = await prisma.post_tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Post_tags and only return the `id`
     * const post_tagsWithIdOnly = await prisma.post_tags.updateManyAndReturn({
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
    updateManyAndReturn<T extends post_tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, post_tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post_tags.
     * @param {post_tagsUpsertArgs} args - Arguments to update or create a Post_tags.
     * @example
     * // Update or create a Post_tags
     * const post_tags = await prisma.post_tags.upsert({
     *   create: {
     *     // ... data to create a Post_tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post_tags we want to update
     *   }
     * })
     */
    upsert<T extends post_tagsUpsertArgs>(args: SelectSubset<T, post_tagsUpsertArgs<ExtArgs>>): Prisma__post_tagsClient<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Post_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_tagsCountArgs} args - Arguments to filter Post_tags to count.
     * @example
     * // Count the number of Post_tags
     * const count = await prisma.post_tags.count({
     *   where: {
     *     // ... the filter for the Post_tags we want to count
     *   }
     * })
    **/
    count<T extends post_tagsCountArgs>(
      args?: Subset<T, post_tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Post_tagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_tagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Post_tagsAggregateArgs>(args: Subset<T, Post_tagsAggregateArgs>): Prisma.PrismaPromise<GetPost_tagsAggregateType<T>>

    /**
     * Group by Post_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_tagsGroupByArgs} args - Group by arguments.
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
      T extends post_tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: post_tagsGroupByArgs['orderBy'] }
        : { orderBy?: post_tagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, post_tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPost_tagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the post_tags model
   */
  readonly fields: post_tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for post_tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__post_tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postsDefaultArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends tagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagsDefaultArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the post_tags model
   */
  interface post_tagsFieldRefs {
    readonly id: FieldRef<"post_tags", 'Int'>
    readonly tagId: FieldRef<"post_tags", 'Int'>
    readonly postId: FieldRef<"post_tags", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * post_tags findUnique
   */
  export type post_tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    /**
     * Filter, which post_tags to fetch.
     */
    where: post_tagsWhereUniqueInput
  }

  /**
   * post_tags findUniqueOrThrow
   */
  export type post_tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    /**
     * Filter, which post_tags to fetch.
     */
    where: post_tagsWhereUniqueInput
  }

  /**
   * post_tags findFirst
   */
  export type post_tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    /**
     * Filter, which post_tags to fetch.
     */
    where?: post_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_tags to fetch.
     */
    orderBy?: post_tagsOrderByWithRelationInput | post_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for post_tags.
     */
    cursor?: post_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of post_tags.
     */
    distinct?: Post_tagsScalarFieldEnum | Post_tagsScalarFieldEnum[]
  }

  /**
   * post_tags findFirstOrThrow
   */
  export type post_tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    /**
     * Filter, which post_tags to fetch.
     */
    where?: post_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_tags to fetch.
     */
    orderBy?: post_tagsOrderByWithRelationInput | post_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for post_tags.
     */
    cursor?: post_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of post_tags.
     */
    distinct?: Post_tagsScalarFieldEnum | Post_tagsScalarFieldEnum[]
  }

  /**
   * post_tags findMany
   */
  export type post_tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    /**
     * Filter, which post_tags to fetch.
     */
    where?: post_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_tags to fetch.
     */
    orderBy?: post_tagsOrderByWithRelationInput | post_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing post_tags.
     */
    cursor?: post_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_tags.
     */
    skip?: number
    distinct?: Post_tagsScalarFieldEnum | Post_tagsScalarFieldEnum[]
  }

  /**
   * post_tags create
   */
  export type post_tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a post_tags.
     */
    data: XOR<post_tagsCreateInput, post_tagsUncheckedCreateInput>
  }

  /**
   * post_tags createMany
   */
  export type post_tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many post_tags.
     */
    data: post_tagsCreateManyInput | post_tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * post_tags createManyAndReturn
   */
  export type post_tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * The data used to create many post_tags.
     */
    data: post_tagsCreateManyInput | post_tagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * post_tags update
   */
  export type post_tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a post_tags.
     */
    data: XOR<post_tagsUpdateInput, post_tagsUncheckedUpdateInput>
    /**
     * Choose, which post_tags to update.
     */
    where: post_tagsWhereUniqueInput
  }

  /**
   * post_tags updateMany
   */
  export type post_tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update post_tags.
     */
    data: XOR<post_tagsUpdateManyMutationInput, post_tagsUncheckedUpdateManyInput>
    /**
     * Filter which post_tags to update
     */
    where?: post_tagsWhereInput
    /**
     * Limit how many post_tags to update.
     */
    limit?: number
  }

  /**
   * post_tags updateManyAndReturn
   */
  export type post_tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * The data used to update post_tags.
     */
    data: XOR<post_tagsUpdateManyMutationInput, post_tagsUncheckedUpdateManyInput>
    /**
     * Filter which post_tags to update
     */
    where?: post_tagsWhereInput
    /**
     * Limit how many post_tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * post_tags upsert
   */
  export type post_tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the post_tags to update in case it exists.
     */
    where: post_tagsWhereUniqueInput
    /**
     * In case the post_tags found by the `where` argument doesn't exist, create a new post_tags with this data.
     */
    create: XOR<post_tagsCreateInput, post_tagsUncheckedCreateInput>
    /**
     * In case the post_tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<post_tagsUpdateInput, post_tagsUncheckedUpdateInput>
  }

  /**
   * post_tags delete
   */
  export type post_tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    /**
     * Filter which post_tags to delete.
     */
    where: post_tagsWhereUniqueInput
  }

  /**
   * post_tags deleteMany
   */
  export type post_tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post_tags to delete
     */
    where?: post_tagsWhereInput
    /**
     * Limit how many post_tags to delete.
     */
    limit?: number
  }

  /**
   * post_tags without action
   */
  export type post_tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
  }


  /**
   * Model posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    id: number | null
  }

  export type PostsSumAggregateOutputType = {
    id: number | null
  }

  export type PostsMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    userId: string | null
  }

  export type PostsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    userId: string | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    title: number
    content: number
    created_at: number
    updated_at: number
    deleted_at: number
    userId: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    id?: true
  }

  export type PostsSumAggregateInputType = {
    id?: true
  }

  export type PostsMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    userId?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    userId?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    userId?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to aggregate.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
    orderBy?: postsOrderByWithAggregationInput | postsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: number
    title: string
    content: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    userId: string
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    userId?: boolean
    comments?: boolean | posts$commentsArgs<ExtArgs>
    post_tags?: boolean | posts$post_tagsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    userId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    userId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    userId?: boolean
  }

  export type postsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "created_at" | "updated_at" | "deleted_at" | "userId", ExtArgs["result"]["posts"]>
  export type postsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | posts$commentsArgs<ExtArgs>
    post_tags?: boolean | posts$post_tagsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type postsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type postsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posts"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs>[]
      post_tags: Prisma.$post_tagsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      userId: string
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type postsGetPayload<S extends boolean | null | undefined | postsDefaultArgs> = $Result.GetResult<Prisma.$postsPayload, S>

  type postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<postsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posts'], meta: { name: 'posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {postsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends postsFindUniqueArgs>(args: SelectSubset<T, postsFindUniqueArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {postsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends postsFindUniqueOrThrowArgs>(args: SelectSubset<T, postsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends postsFindFirstArgs>(args?: SelectSubset<T, postsFindFirstArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends postsFindFirstOrThrowArgs>(args?: SelectSubset<T, postsFindFirstOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends postsFindManyArgs>(args?: SelectSubset<T, postsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {postsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends postsCreateArgs>(args: SelectSubset<T, postsCreateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {postsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends postsCreateManyArgs>(args?: SelectSubset<T, postsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {postsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends postsCreateManyAndReturnArgs>(args?: SelectSubset<T, postsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts.
     * @param {postsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends postsDeleteArgs>(args: SelectSubset<T, postsDeleteArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {postsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends postsUpdateArgs>(args: SelectSubset<T, postsUpdateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {postsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends postsDeleteManyArgs>(args?: SelectSubset<T, postsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends postsUpdateManyArgs>(args: SelectSubset<T, postsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {postsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.updateManyAndReturn({
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
    updateManyAndReturn<T extends postsUpdateManyAndReturnArgs>(args: SelectSubset<T, postsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts.
     * @param {postsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends postsUpsertArgs>(args: SelectSubset<T, postsUpsertArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postsCountArgs>(
      args?: Subset<T, postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsGroupByArgs} args - Group by arguments.
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
      T extends postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postsGroupByArgs['orderBy'] }
        : { orderBy?: postsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posts model
   */
  readonly fields: postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends posts$commentsArgs<ExtArgs> = {}>(args?: Subset<T, posts$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    post_tags<T extends posts$post_tagsArgs<ExtArgs> = {}>(args?: Subset<T, posts$post_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the posts model
   */
  interface postsFieldRefs {
    readonly id: FieldRef<"posts", 'Int'>
    readonly title: FieldRef<"posts", 'String'>
    readonly content: FieldRef<"posts", 'String'>
    readonly created_at: FieldRef<"posts", 'DateTime'>
    readonly updated_at: FieldRef<"posts", 'DateTime'>
    readonly deleted_at: FieldRef<"posts", 'DateTime'>
    readonly userId: FieldRef<"posts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * posts findUnique
   */
  export type postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findUniqueOrThrow
   */
  export type postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findFirst
   */
  export type postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findFirstOrThrow
   */
  export type postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findMany
   */
  export type postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts create
   */
  export type postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to create a posts.
     */
    data: XOR<postsCreateInput, postsUncheckedCreateInput>
  }

  /**
   * posts createMany
   */
  export type postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posts createManyAndReturn
   */
  export type postsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts update
   */
  export type postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to update a posts.
     */
    data: XOR<postsUpdateInput, postsUncheckedUpdateInput>
    /**
     * Choose, which posts to update.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts updateMany
   */
  export type postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
  }

  /**
   * posts updateManyAndReturn
   */
  export type postsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts upsert
   */
  export type postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The filter to search for the posts to update in case it exists.
     */
    where: postsWhereUniqueInput
    /**
     * In case the posts found by the `where` argument doesn't exist, create a new posts with this data.
     */
    create: XOR<postsCreateInput, postsUncheckedCreateInput>
    /**
     * In case the posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postsUpdateInput, postsUncheckedUpdateInput>
  }

  /**
   * posts delete
   */
  export type postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter which posts to delete.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts deleteMany
   */
  export type postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to delete.
     */
    limit?: number
  }

  /**
   * posts.comments
   */
  export type posts$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * posts.post_tags
   */
  export type posts$post_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    where?: post_tagsWhereInput
    orderBy?: post_tagsOrderByWithRelationInput | post_tagsOrderByWithRelationInput[]
    cursor?: post_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Post_tagsScalarFieldEnum | Post_tagsScalarFieldEnum[]
  }

  /**
   * posts without action
   */
  export type postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
  }


  /**
   * Model qna_tags
   */

  export type AggregateQna_tags = {
    _count: Qna_tagsCountAggregateOutputType | null
    _avg: Qna_tagsAvgAggregateOutputType | null
    _sum: Qna_tagsSumAggregateOutputType | null
    _min: Qna_tagsMinAggregateOutputType | null
    _max: Qna_tagsMaxAggregateOutputType | null
  }

  export type Qna_tagsAvgAggregateOutputType = {
    id: number | null
    tagId: number | null
    qnaId: number | null
  }

  export type Qna_tagsSumAggregateOutputType = {
    id: number | null
    tagId: number | null
    qnaId: number | null
  }

  export type Qna_tagsMinAggregateOutputType = {
    id: number | null
    tagId: number | null
    qnaId: number | null
  }

  export type Qna_tagsMaxAggregateOutputType = {
    id: number | null
    tagId: number | null
    qnaId: number | null
  }

  export type Qna_tagsCountAggregateOutputType = {
    id: number
    tagId: number
    qnaId: number
    _all: number
  }


  export type Qna_tagsAvgAggregateInputType = {
    id?: true
    tagId?: true
    qnaId?: true
  }

  export type Qna_tagsSumAggregateInputType = {
    id?: true
    tagId?: true
    qnaId?: true
  }

  export type Qna_tagsMinAggregateInputType = {
    id?: true
    tagId?: true
    qnaId?: true
  }

  export type Qna_tagsMaxAggregateInputType = {
    id?: true
    tagId?: true
    qnaId?: true
  }

  export type Qna_tagsCountAggregateInputType = {
    id?: true
    tagId?: true
    qnaId?: true
    _all?: true
  }

  export type Qna_tagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which qna_tags to aggregate.
     */
    where?: qna_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qna_tags to fetch.
     */
    orderBy?: qna_tagsOrderByWithRelationInput | qna_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: qna_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qna_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qna_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned qna_tags
    **/
    _count?: true | Qna_tagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Qna_tagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Qna_tagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Qna_tagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Qna_tagsMaxAggregateInputType
  }

  export type GetQna_tagsAggregateType<T extends Qna_tagsAggregateArgs> = {
        [P in keyof T & keyof AggregateQna_tags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQna_tags[P]>
      : GetScalarType<T[P], AggregateQna_tags[P]>
  }




  export type qna_tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: qna_tagsWhereInput
    orderBy?: qna_tagsOrderByWithAggregationInput | qna_tagsOrderByWithAggregationInput[]
    by: Qna_tagsScalarFieldEnum[] | Qna_tagsScalarFieldEnum
    having?: qna_tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Qna_tagsCountAggregateInputType | true
    _avg?: Qna_tagsAvgAggregateInputType
    _sum?: Qna_tagsSumAggregateInputType
    _min?: Qna_tagsMinAggregateInputType
    _max?: Qna_tagsMaxAggregateInputType
  }

  export type Qna_tagsGroupByOutputType = {
    id: number
    tagId: number
    qnaId: number
    _count: Qna_tagsCountAggregateOutputType | null
    _avg: Qna_tagsAvgAggregateOutputType | null
    _sum: Qna_tagsSumAggregateOutputType | null
    _min: Qna_tagsMinAggregateOutputType | null
    _max: Qna_tagsMaxAggregateOutputType | null
  }

  type GetQna_tagsGroupByPayload<T extends qna_tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Qna_tagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Qna_tagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Qna_tagsGroupByOutputType[P]>
            : GetScalarType<T[P], Qna_tagsGroupByOutputType[P]>
        }
      >
    >


  export type qna_tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagId?: boolean
    qnaId?: boolean
    qnas?: boolean | qnasDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qna_tags"]>

  export type qna_tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagId?: boolean
    qnaId?: boolean
    qnas?: boolean | qnasDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qna_tags"]>

  export type qna_tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagId?: boolean
    qnaId?: boolean
    qnas?: boolean | qnasDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qna_tags"]>

  export type qna_tagsSelectScalar = {
    id?: boolean
    tagId?: boolean
    qnaId?: boolean
  }

  export type qna_tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tagId" | "qnaId", ExtArgs["result"]["qna_tags"]>
  export type qna_tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qnas?: boolean | qnasDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type qna_tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qnas?: boolean | qnasDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type qna_tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qnas?: boolean | qnasDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }

  export type $qna_tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "qna_tags"
    objects: {
      qnas: Prisma.$qnasPayload<ExtArgs>
      tags: Prisma.$tagsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tagId: number
      qnaId: number
    }, ExtArgs["result"]["qna_tags"]>
    composites: {}
  }

  type qna_tagsGetPayload<S extends boolean | null | undefined | qna_tagsDefaultArgs> = $Result.GetResult<Prisma.$qna_tagsPayload, S>

  type qna_tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<qna_tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Qna_tagsCountAggregateInputType | true
    }

  export interface qna_tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['qna_tags'], meta: { name: 'qna_tags' } }
    /**
     * Find zero or one Qna_tags that matches the filter.
     * @param {qna_tagsFindUniqueArgs} args - Arguments to find a Qna_tags
     * @example
     * // Get one Qna_tags
     * const qna_tags = await prisma.qna_tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends qna_tagsFindUniqueArgs>(args: SelectSubset<T, qna_tagsFindUniqueArgs<ExtArgs>>): Prisma__qna_tagsClient<$Result.GetResult<Prisma.$qna_tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Qna_tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {qna_tagsFindUniqueOrThrowArgs} args - Arguments to find a Qna_tags
     * @example
     * // Get one Qna_tags
     * const qna_tags = await prisma.qna_tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends qna_tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, qna_tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__qna_tagsClient<$Result.GetResult<Prisma.$qna_tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Qna_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qna_tagsFindFirstArgs} args - Arguments to find a Qna_tags
     * @example
     * // Get one Qna_tags
     * const qna_tags = await prisma.qna_tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends qna_tagsFindFirstArgs>(args?: SelectSubset<T, qna_tagsFindFirstArgs<ExtArgs>>): Prisma__qna_tagsClient<$Result.GetResult<Prisma.$qna_tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Qna_tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qna_tagsFindFirstOrThrowArgs} args - Arguments to find a Qna_tags
     * @example
     * // Get one Qna_tags
     * const qna_tags = await prisma.qna_tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends qna_tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, qna_tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__qna_tagsClient<$Result.GetResult<Prisma.$qna_tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Qna_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qna_tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Qna_tags
     * const qna_tags = await prisma.qna_tags.findMany()
     * 
     * // Get first 10 Qna_tags
     * const qna_tags = await prisma.qna_tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qna_tagsWithIdOnly = await prisma.qna_tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends qna_tagsFindManyArgs>(args?: SelectSubset<T, qna_tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$qna_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Qna_tags.
     * @param {qna_tagsCreateArgs} args - Arguments to create a Qna_tags.
     * @example
     * // Create one Qna_tags
     * const Qna_tags = await prisma.qna_tags.create({
     *   data: {
     *     // ... data to create a Qna_tags
     *   }
     * })
     * 
     */
    create<T extends qna_tagsCreateArgs>(args: SelectSubset<T, qna_tagsCreateArgs<ExtArgs>>): Prisma__qna_tagsClient<$Result.GetResult<Prisma.$qna_tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Qna_tags.
     * @param {qna_tagsCreateManyArgs} args - Arguments to create many Qna_tags.
     * @example
     * // Create many Qna_tags
     * const qna_tags = await prisma.qna_tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends qna_tagsCreateManyArgs>(args?: SelectSubset<T, qna_tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Qna_tags and returns the data saved in the database.
     * @param {qna_tagsCreateManyAndReturnArgs} args - Arguments to create many Qna_tags.
     * @example
     * // Create many Qna_tags
     * const qna_tags = await prisma.qna_tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Qna_tags and only return the `id`
     * const qna_tagsWithIdOnly = await prisma.qna_tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends qna_tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, qna_tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$qna_tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Qna_tags.
     * @param {qna_tagsDeleteArgs} args - Arguments to delete one Qna_tags.
     * @example
     * // Delete one Qna_tags
     * const Qna_tags = await prisma.qna_tags.delete({
     *   where: {
     *     // ... filter to delete one Qna_tags
     *   }
     * })
     * 
     */
    delete<T extends qna_tagsDeleteArgs>(args: SelectSubset<T, qna_tagsDeleteArgs<ExtArgs>>): Prisma__qna_tagsClient<$Result.GetResult<Prisma.$qna_tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Qna_tags.
     * @param {qna_tagsUpdateArgs} args - Arguments to update one Qna_tags.
     * @example
     * // Update one Qna_tags
     * const qna_tags = await prisma.qna_tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends qna_tagsUpdateArgs>(args: SelectSubset<T, qna_tagsUpdateArgs<ExtArgs>>): Prisma__qna_tagsClient<$Result.GetResult<Prisma.$qna_tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Qna_tags.
     * @param {qna_tagsDeleteManyArgs} args - Arguments to filter Qna_tags to delete.
     * @example
     * // Delete a few Qna_tags
     * const { count } = await prisma.qna_tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends qna_tagsDeleteManyArgs>(args?: SelectSubset<T, qna_tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Qna_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qna_tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Qna_tags
     * const qna_tags = await prisma.qna_tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends qna_tagsUpdateManyArgs>(args: SelectSubset<T, qna_tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Qna_tags and returns the data updated in the database.
     * @param {qna_tagsUpdateManyAndReturnArgs} args - Arguments to update many Qna_tags.
     * @example
     * // Update many Qna_tags
     * const qna_tags = await prisma.qna_tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Qna_tags and only return the `id`
     * const qna_tagsWithIdOnly = await prisma.qna_tags.updateManyAndReturn({
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
    updateManyAndReturn<T extends qna_tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, qna_tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$qna_tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Qna_tags.
     * @param {qna_tagsUpsertArgs} args - Arguments to update or create a Qna_tags.
     * @example
     * // Update or create a Qna_tags
     * const qna_tags = await prisma.qna_tags.upsert({
     *   create: {
     *     // ... data to create a Qna_tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Qna_tags we want to update
     *   }
     * })
     */
    upsert<T extends qna_tagsUpsertArgs>(args: SelectSubset<T, qna_tagsUpsertArgs<ExtArgs>>): Prisma__qna_tagsClient<$Result.GetResult<Prisma.$qna_tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Qna_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qna_tagsCountArgs} args - Arguments to filter Qna_tags to count.
     * @example
     * // Count the number of Qna_tags
     * const count = await prisma.qna_tags.count({
     *   where: {
     *     // ... the filter for the Qna_tags we want to count
     *   }
     * })
    **/
    count<T extends qna_tagsCountArgs>(
      args?: Subset<T, qna_tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Qna_tagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Qna_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Qna_tagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Qna_tagsAggregateArgs>(args: Subset<T, Qna_tagsAggregateArgs>): Prisma.PrismaPromise<GetQna_tagsAggregateType<T>>

    /**
     * Group by Qna_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qna_tagsGroupByArgs} args - Group by arguments.
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
      T extends qna_tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: qna_tagsGroupByArgs['orderBy'] }
        : { orderBy?: qna_tagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, qna_tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQna_tagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the qna_tags model
   */
  readonly fields: qna_tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for qna_tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__qna_tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    qnas<T extends qnasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, qnasDefaultArgs<ExtArgs>>): Prisma__qnasClient<$Result.GetResult<Prisma.$qnasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends tagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagsDefaultArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the qna_tags model
   */
  interface qna_tagsFieldRefs {
    readonly id: FieldRef<"qna_tags", 'Int'>
    readonly tagId: FieldRef<"qna_tags", 'Int'>
    readonly qnaId: FieldRef<"qna_tags", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * qna_tags findUnique
   */
  export type qna_tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qna_tags
     */
    select?: qna_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qna_tags
     */
    omit?: qna_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qna_tagsInclude<ExtArgs> | null
    /**
     * Filter, which qna_tags to fetch.
     */
    where: qna_tagsWhereUniqueInput
  }

  /**
   * qna_tags findUniqueOrThrow
   */
  export type qna_tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qna_tags
     */
    select?: qna_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qna_tags
     */
    omit?: qna_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qna_tagsInclude<ExtArgs> | null
    /**
     * Filter, which qna_tags to fetch.
     */
    where: qna_tagsWhereUniqueInput
  }

  /**
   * qna_tags findFirst
   */
  export type qna_tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qna_tags
     */
    select?: qna_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qna_tags
     */
    omit?: qna_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qna_tagsInclude<ExtArgs> | null
    /**
     * Filter, which qna_tags to fetch.
     */
    where?: qna_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qna_tags to fetch.
     */
    orderBy?: qna_tagsOrderByWithRelationInput | qna_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for qna_tags.
     */
    cursor?: qna_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qna_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qna_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of qna_tags.
     */
    distinct?: Qna_tagsScalarFieldEnum | Qna_tagsScalarFieldEnum[]
  }

  /**
   * qna_tags findFirstOrThrow
   */
  export type qna_tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qna_tags
     */
    select?: qna_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qna_tags
     */
    omit?: qna_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qna_tagsInclude<ExtArgs> | null
    /**
     * Filter, which qna_tags to fetch.
     */
    where?: qna_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qna_tags to fetch.
     */
    orderBy?: qna_tagsOrderByWithRelationInput | qna_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for qna_tags.
     */
    cursor?: qna_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qna_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qna_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of qna_tags.
     */
    distinct?: Qna_tagsScalarFieldEnum | Qna_tagsScalarFieldEnum[]
  }

  /**
   * qna_tags findMany
   */
  export type qna_tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qna_tags
     */
    select?: qna_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qna_tags
     */
    omit?: qna_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qna_tagsInclude<ExtArgs> | null
    /**
     * Filter, which qna_tags to fetch.
     */
    where?: qna_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qna_tags to fetch.
     */
    orderBy?: qna_tagsOrderByWithRelationInput | qna_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing qna_tags.
     */
    cursor?: qna_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qna_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qna_tags.
     */
    skip?: number
    distinct?: Qna_tagsScalarFieldEnum | Qna_tagsScalarFieldEnum[]
  }

  /**
   * qna_tags create
   */
  export type qna_tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qna_tags
     */
    select?: qna_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qna_tags
     */
    omit?: qna_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qna_tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a qna_tags.
     */
    data: XOR<qna_tagsCreateInput, qna_tagsUncheckedCreateInput>
  }

  /**
   * qna_tags createMany
   */
  export type qna_tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many qna_tags.
     */
    data: qna_tagsCreateManyInput | qna_tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * qna_tags createManyAndReturn
   */
  export type qna_tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qna_tags
     */
    select?: qna_tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the qna_tags
     */
    omit?: qna_tagsOmit<ExtArgs> | null
    /**
     * The data used to create many qna_tags.
     */
    data: qna_tagsCreateManyInput | qna_tagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qna_tagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * qna_tags update
   */
  export type qna_tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qna_tags
     */
    select?: qna_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qna_tags
     */
    omit?: qna_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qna_tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a qna_tags.
     */
    data: XOR<qna_tagsUpdateInput, qna_tagsUncheckedUpdateInput>
    /**
     * Choose, which qna_tags to update.
     */
    where: qna_tagsWhereUniqueInput
  }

  /**
   * qna_tags updateMany
   */
  export type qna_tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update qna_tags.
     */
    data: XOR<qna_tagsUpdateManyMutationInput, qna_tagsUncheckedUpdateManyInput>
    /**
     * Filter which qna_tags to update
     */
    where?: qna_tagsWhereInput
    /**
     * Limit how many qna_tags to update.
     */
    limit?: number
  }

  /**
   * qna_tags updateManyAndReturn
   */
  export type qna_tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qna_tags
     */
    select?: qna_tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the qna_tags
     */
    omit?: qna_tagsOmit<ExtArgs> | null
    /**
     * The data used to update qna_tags.
     */
    data: XOR<qna_tagsUpdateManyMutationInput, qna_tagsUncheckedUpdateManyInput>
    /**
     * Filter which qna_tags to update
     */
    where?: qna_tagsWhereInput
    /**
     * Limit how many qna_tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qna_tagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * qna_tags upsert
   */
  export type qna_tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qna_tags
     */
    select?: qna_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qna_tags
     */
    omit?: qna_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qna_tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the qna_tags to update in case it exists.
     */
    where: qna_tagsWhereUniqueInput
    /**
     * In case the qna_tags found by the `where` argument doesn't exist, create a new qna_tags with this data.
     */
    create: XOR<qna_tagsCreateInput, qna_tagsUncheckedCreateInput>
    /**
     * In case the qna_tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<qna_tagsUpdateInput, qna_tagsUncheckedUpdateInput>
  }

  /**
   * qna_tags delete
   */
  export type qna_tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qna_tags
     */
    select?: qna_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qna_tags
     */
    omit?: qna_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qna_tagsInclude<ExtArgs> | null
    /**
     * Filter which qna_tags to delete.
     */
    where: qna_tagsWhereUniqueInput
  }

  /**
   * qna_tags deleteMany
   */
  export type qna_tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which qna_tags to delete
     */
    where?: qna_tagsWhereInput
    /**
     * Limit how many qna_tags to delete.
     */
    limit?: number
  }

  /**
   * qna_tags without action
   */
  export type qna_tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qna_tags
     */
    select?: qna_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qna_tags
     */
    omit?: qna_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qna_tagsInclude<ExtArgs> | null
  }


  /**
   * Model qnas
   */

  export type AggregateQnas = {
    _count: QnasCountAggregateOutputType | null
    _avg: QnasAvgAggregateOutputType | null
    _sum: QnasSumAggregateOutputType | null
    _min: QnasMinAggregateOutputType | null
    _max: QnasMaxAggregateOutputType | null
  }

  export type QnasAvgAggregateOutputType = {
    id: number | null
  }

  export type QnasSumAggregateOutputType = {
    id: number | null
  }

  export type QnasMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    userId: string | null
  }

  export type QnasMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    userId: string | null
  }

  export type QnasCountAggregateOutputType = {
    id: number
    title: number
    content: number
    created_at: number
    updated_at: number
    deleted_at: number
    userId: number
    _all: number
  }


  export type QnasAvgAggregateInputType = {
    id?: true
  }

  export type QnasSumAggregateInputType = {
    id?: true
  }

  export type QnasMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    userId?: true
  }

  export type QnasMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    userId?: true
  }

  export type QnasCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    userId?: true
    _all?: true
  }

  export type QnasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which qnas to aggregate.
     */
    where?: qnasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qnas to fetch.
     */
    orderBy?: qnasOrderByWithRelationInput | qnasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: qnasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qnas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qnas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned qnas
    **/
    _count?: true | QnasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QnasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QnasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QnasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QnasMaxAggregateInputType
  }

  export type GetQnasAggregateType<T extends QnasAggregateArgs> = {
        [P in keyof T & keyof AggregateQnas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQnas[P]>
      : GetScalarType<T[P], AggregateQnas[P]>
  }




  export type qnasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: qnasWhereInput
    orderBy?: qnasOrderByWithAggregationInput | qnasOrderByWithAggregationInput[]
    by: QnasScalarFieldEnum[] | QnasScalarFieldEnum
    having?: qnasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QnasCountAggregateInputType | true
    _avg?: QnasAvgAggregateInputType
    _sum?: QnasSumAggregateInputType
    _min?: QnasMinAggregateInputType
    _max?: QnasMaxAggregateInputType
  }

  export type QnasGroupByOutputType = {
    id: number
    title: string
    content: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    userId: string
    _count: QnasCountAggregateOutputType | null
    _avg: QnasAvgAggregateOutputType | null
    _sum: QnasSumAggregateOutputType | null
    _min: QnasMinAggregateOutputType | null
    _max: QnasMaxAggregateOutputType | null
  }

  type GetQnasGroupByPayload<T extends qnasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QnasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QnasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QnasGroupByOutputType[P]>
            : GetScalarType<T[P], QnasGroupByOutputType[P]>
        }
      >
    >


  export type qnasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    userId?: boolean
    answers?: boolean | qnas$answersArgs<ExtArgs>
    qna_tags?: boolean | qnas$qna_tagsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | QnasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qnas"]>

  export type qnasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    userId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qnas"]>

  export type qnasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    userId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qnas"]>

  export type qnasSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    userId?: boolean
  }

  export type qnasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "created_at" | "updated_at" | "deleted_at" | "userId", ExtArgs["result"]["qnas"]>
  export type qnasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | qnas$answersArgs<ExtArgs>
    qna_tags?: boolean | qnas$qna_tagsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | QnasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type qnasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type qnasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $qnasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "qnas"
    objects: {
      answers: Prisma.$answersPayload<ExtArgs>[]
      qna_tags: Prisma.$qna_tagsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      userId: string
    }, ExtArgs["result"]["qnas"]>
    composites: {}
  }

  type qnasGetPayload<S extends boolean | null | undefined | qnasDefaultArgs> = $Result.GetResult<Prisma.$qnasPayload, S>

  type qnasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<qnasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QnasCountAggregateInputType | true
    }

  export interface qnasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['qnas'], meta: { name: 'qnas' } }
    /**
     * Find zero or one Qnas that matches the filter.
     * @param {qnasFindUniqueArgs} args - Arguments to find a Qnas
     * @example
     * // Get one Qnas
     * const qnas = await prisma.qnas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends qnasFindUniqueArgs>(args: SelectSubset<T, qnasFindUniqueArgs<ExtArgs>>): Prisma__qnasClient<$Result.GetResult<Prisma.$qnasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Qnas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {qnasFindUniqueOrThrowArgs} args - Arguments to find a Qnas
     * @example
     * // Get one Qnas
     * const qnas = await prisma.qnas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends qnasFindUniqueOrThrowArgs>(args: SelectSubset<T, qnasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__qnasClient<$Result.GetResult<Prisma.$qnasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Qnas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qnasFindFirstArgs} args - Arguments to find a Qnas
     * @example
     * // Get one Qnas
     * const qnas = await prisma.qnas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends qnasFindFirstArgs>(args?: SelectSubset<T, qnasFindFirstArgs<ExtArgs>>): Prisma__qnasClient<$Result.GetResult<Prisma.$qnasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Qnas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qnasFindFirstOrThrowArgs} args - Arguments to find a Qnas
     * @example
     * // Get one Qnas
     * const qnas = await prisma.qnas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends qnasFindFirstOrThrowArgs>(args?: SelectSubset<T, qnasFindFirstOrThrowArgs<ExtArgs>>): Prisma__qnasClient<$Result.GetResult<Prisma.$qnasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Qnas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qnasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Qnas
     * const qnas = await prisma.qnas.findMany()
     * 
     * // Get first 10 Qnas
     * const qnas = await prisma.qnas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qnasWithIdOnly = await prisma.qnas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends qnasFindManyArgs>(args?: SelectSubset<T, qnasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$qnasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Qnas.
     * @param {qnasCreateArgs} args - Arguments to create a Qnas.
     * @example
     * // Create one Qnas
     * const Qnas = await prisma.qnas.create({
     *   data: {
     *     // ... data to create a Qnas
     *   }
     * })
     * 
     */
    create<T extends qnasCreateArgs>(args: SelectSubset<T, qnasCreateArgs<ExtArgs>>): Prisma__qnasClient<$Result.GetResult<Prisma.$qnasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Qnas.
     * @param {qnasCreateManyArgs} args - Arguments to create many Qnas.
     * @example
     * // Create many Qnas
     * const qnas = await prisma.qnas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends qnasCreateManyArgs>(args?: SelectSubset<T, qnasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Qnas and returns the data saved in the database.
     * @param {qnasCreateManyAndReturnArgs} args - Arguments to create many Qnas.
     * @example
     * // Create many Qnas
     * const qnas = await prisma.qnas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Qnas and only return the `id`
     * const qnasWithIdOnly = await prisma.qnas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends qnasCreateManyAndReturnArgs>(args?: SelectSubset<T, qnasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$qnasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Qnas.
     * @param {qnasDeleteArgs} args - Arguments to delete one Qnas.
     * @example
     * // Delete one Qnas
     * const Qnas = await prisma.qnas.delete({
     *   where: {
     *     // ... filter to delete one Qnas
     *   }
     * })
     * 
     */
    delete<T extends qnasDeleteArgs>(args: SelectSubset<T, qnasDeleteArgs<ExtArgs>>): Prisma__qnasClient<$Result.GetResult<Prisma.$qnasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Qnas.
     * @param {qnasUpdateArgs} args - Arguments to update one Qnas.
     * @example
     * // Update one Qnas
     * const qnas = await prisma.qnas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends qnasUpdateArgs>(args: SelectSubset<T, qnasUpdateArgs<ExtArgs>>): Prisma__qnasClient<$Result.GetResult<Prisma.$qnasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Qnas.
     * @param {qnasDeleteManyArgs} args - Arguments to filter Qnas to delete.
     * @example
     * // Delete a few Qnas
     * const { count } = await prisma.qnas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends qnasDeleteManyArgs>(args?: SelectSubset<T, qnasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Qnas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qnasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Qnas
     * const qnas = await prisma.qnas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends qnasUpdateManyArgs>(args: SelectSubset<T, qnasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Qnas and returns the data updated in the database.
     * @param {qnasUpdateManyAndReturnArgs} args - Arguments to update many Qnas.
     * @example
     * // Update many Qnas
     * const qnas = await prisma.qnas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Qnas and only return the `id`
     * const qnasWithIdOnly = await prisma.qnas.updateManyAndReturn({
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
    updateManyAndReturn<T extends qnasUpdateManyAndReturnArgs>(args: SelectSubset<T, qnasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$qnasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Qnas.
     * @param {qnasUpsertArgs} args - Arguments to update or create a Qnas.
     * @example
     * // Update or create a Qnas
     * const qnas = await prisma.qnas.upsert({
     *   create: {
     *     // ... data to create a Qnas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Qnas we want to update
     *   }
     * })
     */
    upsert<T extends qnasUpsertArgs>(args: SelectSubset<T, qnasUpsertArgs<ExtArgs>>): Prisma__qnasClient<$Result.GetResult<Prisma.$qnasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Qnas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qnasCountArgs} args - Arguments to filter Qnas to count.
     * @example
     * // Count the number of Qnas
     * const count = await prisma.qnas.count({
     *   where: {
     *     // ... the filter for the Qnas we want to count
     *   }
     * })
    **/
    count<T extends qnasCountArgs>(
      args?: Subset<T, qnasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QnasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Qnas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QnasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QnasAggregateArgs>(args: Subset<T, QnasAggregateArgs>): Prisma.PrismaPromise<GetQnasAggregateType<T>>

    /**
     * Group by Qnas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qnasGroupByArgs} args - Group by arguments.
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
      T extends qnasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: qnasGroupByArgs['orderBy'] }
        : { orderBy?: qnasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, qnasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQnasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the qnas model
   */
  readonly fields: qnasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for qnas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__qnasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends qnas$answersArgs<ExtArgs> = {}>(args?: Subset<T, qnas$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    qna_tags<T extends qnas$qna_tagsArgs<ExtArgs> = {}>(args?: Subset<T, qnas$qna_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$qna_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the qnas model
   */
  interface qnasFieldRefs {
    readonly id: FieldRef<"qnas", 'Int'>
    readonly title: FieldRef<"qnas", 'String'>
    readonly content: FieldRef<"qnas", 'String'>
    readonly created_at: FieldRef<"qnas", 'DateTime'>
    readonly updated_at: FieldRef<"qnas", 'DateTime'>
    readonly deleted_at: FieldRef<"qnas", 'DateTime'>
    readonly userId: FieldRef<"qnas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * qnas findUnique
   */
  export type qnasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qnas
     */
    select?: qnasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qnas
     */
    omit?: qnasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qnasInclude<ExtArgs> | null
    /**
     * Filter, which qnas to fetch.
     */
    where: qnasWhereUniqueInput
  }

  /**
   * qnas findUniqueOrThrow
   */
  export type qnasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qnas
     */
    select?: qnasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qnas
     */
    omit?: qnasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qnasInclude<ExtArgs> | null
    /**
     * Filter, which qnas to fetch.
     */
    where: qnasWhereUniqueInput
  }

  /**
   * qnas findFirst
   */
  export type qnasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qnas
     */
    select?: qnasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qnas
     */
    omit?: qnasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qnasInclude<ExtArgs> | null
    /**
     * Filter, which qnas to fetch.
     */
    where?: qnasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qnas to fetch.
     */
    orderBy?: qnasOrderByWithRelationInput | qnasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for qnas.
     */
    cursor?: qnasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qnas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qnas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of qnas.
     */
    distinct?: QnasScalarFieldEnum | QnasScalarFieldEnum[]
  }

  /**
   * qnas findFirstOrThrow
   */
  export type qnasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qnas
     */
    select?: qnasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qnas
     */
    omit?: qnasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qnasInclude<ExtArgs> | null
    /**
     * Filter, which qnas to fetch.
     */
    where?: qnasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qnas to fetch.
     */
    orderBy?: qnasOrderByWithRelationInput | qnasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for qnas.
     */
    cursor?: qnasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qnas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qnas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of qnas.
     */
    distinct?: QnasScalarFieldEnum | QnasScalarFieldEnum[]
  }

  /**
   * qnas findMany
   */
  export type qnasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qnas
     */
    select?: qnasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qnas
     */
    omit?: qnasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qnasInclude<ExtArgs> | null
    /**
     * Filter, which qnas to fetch.
     */
    where?: qnasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qnas to fetch.
     */
    orderBy?: qnasOrderByWithRelationInput | qnasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing qnas.
     */
    cursor?: qnasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qnas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qnas.
     */
    skip?: number
    distinct?: QnasScalarFieldEnum | QnasScalarFieldEnum[]
  }

  /**
   * qnas create
   */
  export type qnasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qnas
     */
    select?: qnasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qnas
     */
    omit?: qnasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qnasInclude<ExtArgs> | null
    /**
     * The data needed to create a qnas.
     */
    data: XOR<qnasCreateInput, qnasUncheckedCreateInput>
  }

  /**
   * qnas createMany
   */
  export type qnasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many qnas.
     */
    data: qnasCreateManyInput | qnasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * qnas createManyAndReturn
   */
  export type qnasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qnas
     */
    select?: qnasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the qnas
     */
    omit?: qnasOmit<ExtArgs> | null
    /**
     * The data used to create many qnas.
     */
    data: qnasCreateManyInput | qnasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qnasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * qnas update
   */
  export type qnasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qnas
     */
    select?: qnasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qnas
     */
    omit?: qnasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qnasInclude<ExtArgs> | null
    /**
     * The data needed to update a qnas.
     */
    data: XOR<qnasUpdateInput, qnasUncheckedUpdateInput>
    /**
     * Choose, which qnas to update.
     */
    where: qnasWhereUniqueInput
  }

  /**
   * qnas updateMany
   */
  export type qnasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update qnas.
     */
    data: XOR<qnasUpdateManyMutationInput, qnasUncheckedUpdateManyInput>
    /**
     * Filter which qnas to update
     */
    where?: qnasWhereInput
    /**
     * Limit how many qnas to update.
     */
    limit?: number
  }

  /**
   * qnas updateManyAndReturn
   */
  export type qnasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qnas
     */
    select?: qnasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the qnas
     */
    omit?: qnasOmit<ExtArgs> | null
    /**
     * The data used to update qnas.
     */
    data: XOR<qnasUpdateManyMutationInput, qnasUncheckedUpdateManyInput>
    /**
     * Filter which qnas to update
     */
    where?: qnasWhereInput
    /**
     * Limit how many qnas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qnasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * qnas upsert
   */
  export type qnasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qnas
     */
    select?: qnasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qnas
     */
    omit?: qnasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qnasInclude<ExtArgs> | null
    /**
     * The filter to search for the qnas to update in case it exists.
     */
    where: qnasWhereUniqueInput
    /**
     * In case the qnas found by the `where` argument doesn't exist, create a new qnas with this data.
     */
    create: XOR<qnasCreateInput, qnasUncheckedCreateInput>
    /**
     * In case the qnas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<qnasUpdateInput, qnasUncheckedUpdateInput>
  }

  /**
   * qnas delete
   */
  export type qnasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qnas
     */
    select?: qnasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qnas
     */
    omit?: qnasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qnasInclude<ExtArgs> | null
    /**
     * Filter which qnas to delete.
     */
    where: qnasWhereUniqueInput
  }

  /**
   * qnas deleteMany
   */
  export type qnasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which qnas to delete
     */
    where?: qnasWhereInput
    /**
     * Limit how many qnas to delete.
     */
    limit?: number
  }

  /**
   * qnas.answers
   */
  export type qnas$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    where?: answersWhereInput
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    cursor?: answersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * qnas.qna_tags
   */
  export type qnas$qna_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qna_tags
     */
    select?: qna_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qna_tags
     */
    omit?: qna_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qna_tagsInclude<ExtArgs> | null
    where?: qna_tagsWhereInput
    orderBy?: qna_tagsOrderByWithRelationInput | qna_tagsOrderByWithRelationInput[]
    cursor?: qna_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Qna_tagsScalarFieldEnum | Qna_tagsScalarFieldEnum[]
  }

  /**
   * qnas without action
   */
  export type qnasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qnas
     */
    select?: qnasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qnas
     */
    omit?: qnasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qnasInclude<ExtArgs> | null
  }


  /**
   * Model tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsAvgAggregateOutputType = {
    id: number | null
  }

  export type TagsSumAggregateOutputType = {
    id: number | null
  }

  export type TagsMinAggregateOutputType = {
    id: number | null
    tag_name: string | null
  }

  export type TagsMaxAggregateOutputType = {
    id: number | null
    tag_name: string | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    tag_name: number
    _all: number
  }


  export type TagsAvgAggregateInputType = {
    id?: true
  }

  export type TagsSumAggregateInputType = {
    id?: true
  }

  export type TagsMinAggregateInputType = {
    id?: true
    tag_name?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    tag_name?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    tag_name?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to aggregate.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithAggregationInput | tagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _avg?: TagsAvgAggregateInputType
    _sum?: TagsSumAggregateInputType
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: number
    tag_name: string
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tag_name?: boolean
    post_tags?: boolean | tags$post_tagsArgs<ExtArgs>
    qna_tags?: boolean | tags$qna_tagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tag_name?: boolean
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tag_name?: boolean
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectScalar = {
    id?: boolean
    tag_name?: boolean
  }

  export type tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tag_name", ExtArgs["result"]["tags"]>
  export type tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post_tags?: boolean | tags$post_tagsArgs<ExtArgs>
    qna_tags?: boolean | tags$qna_tagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tags"
    objects: {
      post_tags: Prisma.$post_tagsPayload<ExtArgs>[]
      qna_tags: Prisma.$qna_tagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tag_name: string
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type tagsGetPayload<S extends boolean | null | undefined | tagsDefaultArgs> = $Result.GetResult<Prisma.$tagsPayload, S>

  type tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tags'], meta: { name: 'tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {tagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagsFindUniqueArgs>(args: SelectSubset<T, tagsFindUniqueArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagsFindFirstArgs>(args?: SelectSubset<T, tagsFindFirstArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tagsFindManyArgs>(args?: SelectSubset<T, tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {tagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends tagsCreateArgs>(args: SelectSubset<T, tagsCreateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagsCreateManyArgs>(args?: SelectSubset<T, tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {tagsCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tags.
     * @param {tagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends tagsDeleteArgs>(args: SelectSubset<T, tagsDeleteArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {tagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagsUpdateArgs>(args: SelectSubset<T, tagsUpdateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagsDeleteManyArgs>(args?: SelectSubset<T, tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagsUpdateManyArgs>(args: SelectSubset<T, tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {tagsUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.updateManyAndReturn({
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
    updateManyAndReturn<T extends tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tags.
     * @param {tagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends tagsUpsertArgs>(args: SelectSubset<T, tagsUpsertArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagsCountArgs>(
      args?: Subset<T, tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsGroupByArgs} args - Group by arguments.
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
      T extends tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagsGroupByArgs['orderBy'] }
        : { orderBy?: tagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tags model
   */
  readonly fields: tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post_tags<T extends tags$post_tagsArgs<ExtArgs> = {}>(args?: Subset<T, tags$post_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    qna_tags<T extends tags$qna_tagsArgs<ExtArgs> = {}>(args?: Subset<T, tags$qna_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$qna_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tags model
   */
  interface tagsFieldRefs {
    readonly id: FieldRef<"tags", 'Int'>
    readonly tag_name: FieldRef<"tags", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tags findUnique
   */
  export type tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findUniqueOrThrow
   */
  export type tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findFirst
   */
  export type tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findFirstOrThrow
   */
  export type tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findMany
   */
  export type tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags create
   */
  export type tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a tags.
     */
    data: XOR<tagsCreateInput, tagsUncheckedCreateInput>
  }

  /**
   * tags createMany
   */
  export type tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags createManyAndReturn
   */
  export type tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags update
   */
  export type tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a tags.
     */
    data: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
    /**
     * Choose, which tags to update.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags updateMany
   */
  export type tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags updateManyAndReturn
   */
  export type tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags upsert
   */
  export type tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the tags to update in case it exists.
     */
    where: tagsWhereUniqueInput
    /**
     * In case the tags found by the `where` argument doesn't exist, create a new tags with this data.
     */
    create: XOR<tagsCreateInput, tagsUncheckedCreateInput>
    /**
     * In case the tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
  }

  /**
   * tags delete
   */
  export type tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter which tags to delete.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags deleteMany
   */
  export type tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tags.post_tags
   */
  export type tags$post_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    where?: post_tagsWhereInput
    orderBy?: post_tagsOrderByWithRelationInput | post_tagsOrderByWithRelationInput[]
    cursor?: post_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Post_tagsScalarFieldEnum | Post_tagsScalarFieldEnum[]
  }

  /**
   * tags.qna_tags
   */
  export type tags$qna_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qna_tags
     */
    select?: qna_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qna_tags
     */
    omit?: qna_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qna_tagsInclude<ExtArgs> | null
    where?: qna_tagsWhereInput
    orderBy?: qna_tagsOrderByWithRelationInput | qna_tagsOrderByWithRelationInput[]
    cursor?: qna_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Qna_tagsScalarFieldEnum | Qna_tagsScalarFieldEnum[]
  }

  /**
   * tags without action
   */
  export type tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
  }


  /**
   * Model user_healths
   */

  export type AggregateUser_healths = {
    _count: User_healthsCountAggregateOutputType | null
    _avg: User_healthsAvgAggregateOutputType | null
    _sum: User_healthsSumAggregateOutputType | null
    _min: User_healthsMinAggregateOutputType | null
    _max: User_healthsMaxAggregateOutputType | null
  }

  export type User_healthsAvgAggregateOutputType = {
    id: number | null
    healthId: number | null
  }

  export type User_healthsSumAggregateOutputType = {
    id: number | null
    healthId: number | null
  }

  export type User_healthsMinAggregateOutputType = {
    id: number | null
    userId: string | null
    healthId: number | null
  }

  export type User_healthsMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    healthId: number | null
  }

  export type User_healthsCountAggregateOutputType = {
    id: number
    userId: number
    healthId: number
    _all: number
  }


  export type User_healthsAvgAggregateInputType = {
    id?: true
    healthId?: true
  }

  export type User_healthsSumAggregateInputType = {
    id?: true
    healthId?: true
  }

  export type User_healthsMinAggregateInputType = {
    id?: true
    userId?: true
    healthId?: true
  }

  export type User_healthsMaxAggregateInputType = {
    id?: true
    userId?: true
    healthId?: true
  }

  export type User_healthsCountAggregateInputType = {
    id?: true
    userId?: true
    healthId?: true
    _all?: true
  }

  export type User_healthsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_healths to aggregate.
     */
    where?: user_healthsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_healths to fetch.
     */
    orderBy?: user_healthsOrderByWithRelationInput | user_healthsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_healthsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_healths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_healths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_healths
    **/
    _count?: true | User_healthsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_healthsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_healthsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_healthsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_healthsMaxAggregateInputType
  }

  export type GetUser_healthsAggregateType<T extends User_healthsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_healths]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_healths[P]>
      : GetScalarType<T[P], AggregateUser_healths[P]>
  }




  export type user_healthsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_healthsWhereInput
    orderBy?: user_healthsOrderByWithAggregationInput | user_healthsOrderByWithAggregationInput[]
    by: User_healthsScalarFieldEnum[] | User_healthsScalarFieldEnum
    having?: user_healthsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_healthsCountAggregateInputType | true
    _avg?: User_healthsAvgAggregateInputType
    _sum?: User_healthsSumAggregateInputType
    _min?: User_healthsMinAggregateInputType
    _max?: User_healthsMaxAggregateInputType
  }

  export type User_healthsGroupByOutputType = {
    id: number
    userId: string
    healthId: number
    _count: User_healthsCountAggregateOutputType | null
    _avg: User_healthsAvgAggregateOutputType | null
    _sum: User_healthsSumAggregateOutputType | null
    _min: User_healthsMinAggregateOutputType | null
    _max: User_healthsMaxAggregateOutputType | null
  }

  type GetUser_healthsGroupByPayload<T extends user_healthsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_healthsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_healthsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_healthsGroupByOutputType[P]>
            : GetScalarType<T[P], User_healthsGroupByOutputType[P]>
        }
      >
    >


  export type user_healthsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    healthId?: boolean
    healths?: boolean | healthsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_healths"]>

  export type user_healthsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    healthId?: boolean
    healths?: boolean | healthsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_healths"]>

  export type user_healthsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    healthId?: boolean
    healths?: boolean | healthsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_healths"]>

  export type user_healthsSelectScalar = {
    id?: boolean
    userId?: boolean
    healthId?: boolean
  }

  export type user_healthsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "healthId", ExtArgs["result"]["user_healths"]>
  export type user_healthsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    healths?: boolean | healthsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_healthsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    healths?: boolean | healthsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_healthsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    healths?: boolean | healthsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_healthsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_healths"
    objects: {
      healths: Prisma.$healthsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      healthId: number
    }, ExtArgs["result"]["user_healths"]>
    composites: {}
  }

  type user_healthsGetPayload<S extends boolean | null | undefined | user_healthsDefaultArgs> = $Result.GetResult<Prisma.$user_healthsPayload, S>

  type user_healthsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_healthsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_healthsCountAggregateInputType | true
    }

  export interface user_healthsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_healths'], meta: { name: 'user_healths' } }
    /**
     * Find zero or one User_healths that matches the filter.
     * @param {user_healthsFindUniqueArgs} args - Arguments to find a User_healths
     * @example
     * // Get one User_healths
     * const user_healths = await prisma.user_healths.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_healthsFindUniqueArgs>(args: SelectSubset<T, user_healthsFindUniqueArgs<ExtArgs>>): Prisma__user_healthsClient<$Result.GetResult<Prisma.$user_healthsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_healths that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_healthsFindUniqueOrThrowArgs} args - Arguments to find a User_healths
     * @example
     * // Get one User_healths
     * const user_healths = await prisma.user_healths.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_healthsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_healthsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_healthsClient<$Result.GetResult<Prisma.$user_healthsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_healths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_healthsFindFirstArgs} args - Arguments to find a User_healths
     * @example
     * // Get one User_healths
     * const user_healths = await prisma.user_healths.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_healthsFindFirstArgs>(args?: SelectSubset<T, user_healthsFindFirstArgs<ExtArgs>>): Prisma__user_healthsClient<$Result.GetResult<Prisma.$user_healthsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_healths that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_healthsFindFirstOrThrowArgs} args - Arguments to find a User_healths
     * @example
     * // Get one User_healths
     * const user_healths = await prisma.user_healths.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_healthsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_healthsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_healthsClient<$Result.GetResult<Prisma.$user_healthsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_healths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_healthsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_healths
     * const user_healths = await prisma.user_healths.findMany()
     * 
     * // Get first 10 User_healths
     * const user_healths = await prisma.user_healths.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_healthsWithIdOnly = await prisma.user_healths.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_healthsFindManyArgs>(args?: SelectSubset<T, user_healthsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_healthsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_healths.
     * @param {user_healthsCreateArgs} args - Arguments to create a User_healths.
     * @example
     * // Create one User_healths
     * const User_healths = await prisma.user_healths.create({
     *   data: {
     *     // ... data to create a User_healths
     *   }
     * })
     * 
     */
    create<T extends user_healthsCreateArgs>(args: SelectSubset<T, user_healthsCreateArgs<ExtArgs>>): Prisma__user_healthsClient<$Result.GetResult<Prisma.$user_healthsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_healths.
     * @param {user_healthsCreateManyArgs} args - Arguments to create many User_healths.
     * @example
     * // Create many User_healths
     * const user_healths = await prisma.user_healths.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_healthsCreateManyArgs>(args?: SelectSubset<T, user_healthsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_healths and returns the data saved in the database.
     * @param {user_healthsCreateManyAndReturnArgs} args - Arguments to create many User_healths.
     * @example
     * // Create many User_healths
     * const user_healths = await prisma.user_healths.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_healths and only return the `id`
     * const user_healthsWithIdOnly = await prisma.user_healths.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_healthsCreateManyAndReturnArgs>(args?: SelectSubset<T, user_healthsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_healthsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_healths.
     * @param {user_healthsDeleteArgs} args - Arguments to delete one User_healths.
     * @example
     * // Delete one User_healths
     * const User_healths = await prisma.user_healths.delete({
     *   where: {
     *     // ... filter to delete one User_healths
     *   }
     * })
     * 
     */
    delete<T extends user_healthsDeleteArgs>(args: SelectSubset<T, user_healthsDeleteArgs<ExtArgs>>): Prisma__user_healthsClient<$Result.GetResult<Prisma.$user_healthsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_healths.
     * @param {user_healthsUpdateArgs} args - Arguments to update one User_healths.
     * @example
     * // Update one User_healths
     * const user_healths = await prisma.user_healths.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_healthsUpdateArgs>(args: SelectSubset<T, user_healthsUpdateArgs<ExtArgs>>): Prisma__user_healthsClient<$Result.GetResult<Prisma.$user_healthsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_healths.
     * @param {user_healthsDeleteManyArgs} args - Arguments to filter User_healths to delete.
     * @example
     * // Delete a few User_healths
     * const { count } = await prisma.user_healths.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_healthsDeleteManyArgs>(args?: SelectSubset<T, user_healthsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_healths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_healthsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_healths
     * const user_healths = await prisma.user_healths.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_healthsUpdateManyArgs>(args: SelectSubset<T, user_healthsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_healths and returns the data updated in the database.
     * @param {user_healthsUpdateManyAndReturnArgs} args - Arguments to update many User_healths.
     * @example
     * // Update many User_healths
     * const user_healths = await prisma.user_healths.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_healths and only return the `id`
     * const user_healthsWithIdOnly = await prisma.user_healths.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_healthsUpdateManyAndReturnArgs>(args: SelectSubset<T, user_healthsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_healthsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_healths.
     * @param {user_healthsUpsertArgs} args - Arguments to update or create a User_healths.
     * @example
     * // Update or create a User_healths
     * const user_healths = await prisma.user_healths.upsert({
     *   create: {
     *     // ... data to create a User_healths
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_healths we want to update
     *   }
     * })
     */
    upsert<T extends user_healthsUpsertArgs>(args: SelectSubset<T, user_healthsUpsertArgs<ExtArgs>>): Prisma__user_healthsClient<$Result.GetResult<Prisma.$user_healthsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_healths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_healthsCountArgs} args - Arguments to filter User_healths to count.
     * @example
     * // Count the number of User_healths
     * const count = await prisma.user_healths.count({
     *   where: {
     *     // ... the filter for the User_healths we want to count
     *   }
     * })
    **/
    count<T extends user_healthsCountArgs>(
      args?: Subset<T, user_healthsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_healthsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_healths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_healthsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_healthsAggregateArgs>(args: Subset<T, User_healthsAggregateArgs>): Prisma.PrismaPromise<GetUser_healthsAggregateType<T>>

    /**
     * Group by User_healths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_healthsGroupByArgs} args - Group by arguments.
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
      T extends user_healthsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_healthsGroupByArgs['orderBy'] }
        : { orderBy?: user_healthsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_healthsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_healthsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_healths model
   */
  readonly fields: user_healthsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_healths.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_healthsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    healths<T extends healthsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, healthsDefaultArgs<ExtArgs>>): Prisma__healthsClient<$Result.GetResult<Prisma.$healthsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_healths model
   */
  interface user_healthsFieldRefs {
    readonly id: FieldRef<"user_healths", 'Int'>
    readonly userId: FieldRef<"user_healths", 'String'>
    readonly healthId: FieldRef<"user_healths", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_healths findUnique
   */
  export type user_healthsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_healths
     */
    select?: user_healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_healths
     */
    omit?: user_healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_healthsInclude<ExtArgs> | null
    /**
     * Filter, which user_healths to fetch.
     */
    where: user_healthsWhereUniqueInput
  }

  /**
   * user_healths findUniqueOrThrow
   */
  export type user_healthsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_healths
     */
    select?: user_healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_healths
     */
    omit?: user_healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_healthsInclude<ExtArgs> | null
    /**
     * Filter, which user_healths to fetch.
     */
    where: user_healthsWhereUniqueInput
  }

  /**
   * user_healths findFirst
   */
  export type user_healthsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_healths
     */
    select?: user_healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_healths
     */
    omit?: user_healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_healthsInclude<ExtArgs> | null
    /**
     * Filter, which user_healths to fetch.
     */
    where?: user_healthsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_healths to fetch.
     */
    orderBy?: user_healthsOrderByWithRelationInput | user_healthsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_healths.
     */
    cursor?: user_healthsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_healths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_healths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_healths.
     */
    distinct?: User_healthsScalarFieldEnum | User_healthsScalarFieldEnum[]
  }

  /**
   * user_healths findFirstOrThrow
   */
  export type user_healthsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_healths
     */
    select?: user_healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_healths
     */
    omit?: user_healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_healthsInclude<ExtArgs> | null
    /**
     * Filter, which user_healths to fetch.
     */
    where?: user_healthsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_healths to fetch.
     */
    orderBy?: user_healthsOrderByWithRelationInput | user_healthsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_healths.
     */
    cursor?: user_healthsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_healths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_healths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_healths.
     */
    distinct?: User_healthsScalarFieldEnum | User_healthsScalarFieldEnum[]
  }

  /**
   * user_healths findMany
   */
  export type user_healthsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_healths
     */
    select?: user_healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_healths
     */
    omit?: user_healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_healthsInclude<ExtArgs> | null
    /**
     * Filter, which user_healths to fetch.
     */
    where?: user_healthsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_healths to fetch.
     */
    orderBy?: user_healthsOrderByWithRelationInput | user_healthsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_healths.
     */
    cursor?: user_healthsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_healths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_healths.
     */
    skip?: number
    distinct?: User_healthsScalarFieldEnum | User_healthsScalarFieldEnum[]
  }

  /**
   * user_healths create
   */
  export type user_healthsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_healths
     */
    select?: user_healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_healths
     */
    omit?: user_healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_healthsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_healths.
     */
    data: XOR<user_healthsCreateInput, user_healthsUncheckedCreateInput>
  }

  /**
   * user_healths createMany
   */
  export type user_healthsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_healths.
     */
    data: user_healthsCreateManyInput | user_healthsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_healths createManyAndReturn
   */
  export type user_healthsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_healths
     */
    select?: user_healthsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_healths
     */
    omit?: user_healthsOmit<ExtArgs> | null
    /**
     * The data used to create many user_healths.
     */
    data: user_healthsCreateManyInput | user_healthsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_healthsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_healths update
   */
  export type user_healthsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_healths
     */
    select?: user_healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_healths
     */
    omit?: user_healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_healthsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_healths.
     */
    data: XOR<user_healthsUpdateInput, user_healthsUncheckedUpdateInput>
    /**
     * Choose, which user_healths to update.
     */
    where: user_healthsWhereUniqueInput
  }

  /**
   * user_healths updateMany
   */
  export type user_healthsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_healths.
     */
    data: XOR<user_healthsUpdateManyMutationInput, user_healthsUncheckedUpdateManyInput>
    /**
     * Filter which user_healths to update
     */
    where?: user_healthsWhereInput
    /**
     * Limit how many user_healths to update.
     */
    limit?: number
  }

  /**
   * user_healths updateManyAndReturn
   */
  export type user_healthsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_healths
     */
    select?: user_healthsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_healths
     */
    omit?: user_healthsOmit<ExtArgs> | null
    /**
     * The data used to update user_healths.
     */
    data: XOR<user_healthsUpdateManyMutationInput, user_healthsUncheckedUpdateManyInput>
    /**
     * Filter which user_healths to update
     */
    where?: user_healthsWhereInput
    /**
     * Limit how many user_healths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_healthsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_healths upsert
   */
  export type user_healthsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_healths
     */
    select?: user_healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_healths
     */
    omit?: user_healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_healthsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_healths to update in case it exists.
     */
    where: user_healthsWhereUniqueInput
    /**
     * In case the user_healths found by the `where` argument doesn't exist, create a new user_healths with this data.
     */
    create: XOR<user_healthsCreateInput, user_healthsUncheckedCreateInput>
    /**
     * In case the user_healths was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_healthsUpdateInput, user_healthsUncheckedUpdateInput>
  }

  /**
   * user_healths delete
   */
  export type user_healthsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_healths
     */
    select?: user_healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_healths
     */
    omit?: user_healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_healthsInclude<ExtArgs> | null
    /**
     * Filter which user_healths to delete.
     */
    where: user_healthsWhereUniqueInput
  }

  /**
   * user_healths deleteMany
   */
  export type user_healthsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_healths to delete
     */
    where?: user_healthsWhereInput
    /**
     * Limit how many user_healths to delete.
     */
    limit?: number
  }

  /**
   * user_healths without action
   */
  export type user_healthsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_healths
     */
    select?: user_healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_healths
     */
    omit?: user_healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_healthsInclude<ExtArgs> | null
  }


  /**
   * Model user_medis
   */

  export type AggregateUser_medis = {
    _count: User_medisCountAggregateOutputType | null
    _avg: User_medisAvgAggregateOutputType | null
    _sum: User_medisSumAggregateOutputType | null
    _min: User_medisMinAggregateOutputType | null
    _max: User_medisMaxAggregateOutputType | null
  }

  export type User_medisAvgAggregateOutputType = {
    id: number | null
  }

  export type User_medisSumAggregateOutputType = {
    id: number | null
  }

  export type User_medisMinAggregateOutputType = {
    id: number | null
    start_date: Date | null
    end_date: Date | null
    userId: string | null
    itemSeq: string | null
  }

  export type User_medisMaxAggregateOutputType = {
    id: number | null
    start_date: Date | null
    end_date: Date | null
    userId: string | null
    itemSeq: string | null
  }

  export type User_medisCountAggregateOutputType = {
    id: number
    start_date: number
    end_date: number
    userId: number
    itemSeq: number
    _all: number
  }


  export type User_medisAvgAggregateInputType = {
    id?: true
  }

  export type User_medisSumAggregateInputType = {
    id?: true
  }

  export type User_medisMinAggregateInputType = {
    id?: true
    start_date?: true
    end_date?: true
    userId?: true
    itemSeq?: true
  }

  export type User_medisMaxAggregateInputType = {
    id?: true
    start_date?: true
    end_date?: true
    userId?: true
    itemSeq?: true
  }

  export type User_medisCountAggregateInputType = {
    id?: true
    start_date?: true
    end_date?: true
    userId?: true
    itemSeq?: true
    _all?: true
  }

  export type User_medisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_medis to aggregate.
     */
    where?: user_medisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_medis to fetch.
     */
    orderBy?: user_medisOrderByWithRelationInput | user_medisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_medisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_medis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_medis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_medis
    **/
    _count?: true | User_medisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_medisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_medisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_medisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_medisMaxAggregateInputType
  }

  export type GetUser_medisAggregateType<T extends User_medisAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_medis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_medis[P]>
      : GetScalarType<T[P], AggregateUser_medis[P]>
  }




  export type user_medisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_medisWhereInput
    orderBy?: user_medisOrderByWithAggregationInput | user_medisOrderByWithAggregationInput[]
    by: User_medisScalarFieldEnum[] | User_medisScalarFieldEnum
    having?: user_medisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_medisCountAggregateInputType | true
    _avg?: User_medisAvgAggregateInputType
    _sum?: User_medisSumAggregateInputType
    _min?: User_medisMinAggregateInputType
    _max?: User_medisMaxAggregateInputType
  }

  export type User_medisGroupByOutputType = {
    id: number
    start_date: Date | null
    end_date: Date | null
    userId: string
    itemSeq: string
    _count: User_medisCountAggregateOutputType | null
    _avg: User_medisAvgAggregateOutputType | null
    _sum: User_medisSumAggregateOutputType | null
    _min: User_medisMinAggregateOutputType | null
    _max: User_medisMaxAggregateOutputType | null
  }

  type GetUser_medisGroupByPayload<T extends user_medisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_medisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_medisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_medisGroupByOutputType[P]>
            : GetScalarType<T[P], User_medisGroupByOutputType[P]>
        }
      >
    >


  export type user_medisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_date?: boolean
    end_date?: boolean
    userId?: boolean
    itemSeq?: boolean
    medi_times?: boolean | user_medis$medi_timesArgs<ExtArgs>
    medicines?: boolean | medicinesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | User_medisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_medis"]>

  export type user_medisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_date?: boolean
    end_date?: boolean
    userId?: boolean
    itemSeq?: boolean
    medicines?: boolean | medicinesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_medis"]>

  export type user_medisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_date?: boolean
    end_date?: boolean
    userId?: boolean
    itemSeq?: boolean
    medicines?: boolean | medicinesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_medis"]>

  export type user_medisSelectScalar = {
    id?: boolean
    start_date?: boolean
    end_date?: boolean
    userId?: boolean
    itemSeq?: boolean
  }

  export type user_medisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "start_date" | "end_date" | "userId" | "itemSeq", ExtArgs["result"]["user_medis"]>
  export type user_medisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medi_times?: boolean | user_medis$medi_timesArgs<ExtArgs>
    medicines?: boolean | medicinesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | User_medisCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type user_medisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicines?: boolean | medicinesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_medisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicines?: boolean | medicinesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_medisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_medis"
    objects: {
      medi_times: Prisma.$medi_timesPayload<ExtArgs>[]
      medicines: Prisma.$medicinesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start_date: Date | null
      end_date: Date | null
      userId: string
      itemSeq: string
    }, ExtArgs["result"]["user_medis"]>
    composites: {}
  }

  type user_medisGetPayload<S extends boolean | null | undefined | user_medisDefaultArgs> = $Result.GetResult<Prisma.$user_medisPayload, S>

  type user_medisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_medisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_medisCountAggregateInputType | true
    }

  export interface user_medisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_medis'], meta: { name: 'user_medis' } }
    /**
     * Find zero or one User_medis that matches the filter.
     * @param {user_medisFindUniqueArgs} args - Arguments to find a User_medis
     * @example
     * // Get one User_medis
     * const user_medis = await prisma.user_medis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_medisFindUniqueArgs>(args: SelectSubset<T, user_medisFindUniqueArgs<ExtArgs>>): Prisma__user_medisClient<$Result.GetResult<Prisma.$user_medisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_medis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_medisFindUniqueOrThrowArgs} args - Arguments to find a User_medis
     * @example
     * // Get one User_medis
     * const user_medis = await prisma.user_medis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_medisFindUniqueOrThrowArgs>(args: SelectSubset<T, user_medisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_medisClient<$Result.GetResult<Prisma.$user_medisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_medis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_medisFindFirstArgs} args - Arguments to find a User_medis
     * @example
     * // Get one User_medis
     * const user_medis = await prisma.user_medis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_medisFindFirstArgs>(args?: SelectSubset<T, user_medisFindFirstArgs<ExtArgs>>): Prisma__user_medisClient<$Result.GetResult<Prisma.$user_medisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_medis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_medisFindFirstOrThrowArgs} args - Arguments to find a User_medis
     * @example
     * // Get one User_medis
     * const user_medis = await prisma.user_medis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_medisFindFirstOrThrowArgs>(args?: SelectSubset<T, user_medisFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_medisClient<$Result.GetResult<Prisma.$user_medisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_medis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_medisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_medis
     * const user_medis = await prisma.user_medis.findMany()
     * 
     * // Get first 10 User_medis
     * const user_medis = await prisma.user_medis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_medisWithIdOnly = await prisma.user_medis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_medisFindManyArgs>(args?: SelectSubset<T, user_medisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_medisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_medis.
     * @param {user_medisCreateArgs} args - Arguments to create a User_medis.
     * @example
     * // Create one User_medis
     * const User_medis = await prisma.user_medis.create({
     *   data: {
     *     // ... data to create a User_medis
     *   }
     * })
     * 
     */
    create<T extends user_medisCreateArgs>(args: SelectSubset<T, user_medisCreateArgs<ExtArgs>>): Prisma__user_medisClient<$Result.GetResult<Prisma.$user_medisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_medis.
     * @param {user_medisCreateManyArgs} args - Arguments to create many User_medis.
     * @example
     * // Create many User_medis
     * const user_medis = await prisma.user_medis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_medisCreateManyArgs>(args?: SelectSubset<T, user_medisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_medis and returns the data saved in the database.
     * @param {user_medisCreateManyAndReturnArgs} args - Arguments to create many User_medis.
     * @example
     * // Create many User_medis
     * const user_medis = await prisma.user_medis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_medis and only return the `id`
     * const user_medisWithIdOnly = await prisma.user_medis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_medisCreateManyAndReturnArgs>(args?: SelectSubset<T, user_medisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_medisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_medis.
     * @param {user_medisDeleteArgs} args - Arguments to delete one User_medis.
     * @example
     * // Delete one User_medis
     * const User_medis = await prisma.user_medis.delete({
     *   where: {
     *     // ... filter to delete one User_medis
     *   }
     * })
     * 
     */
    delete<T extends user_medisDeleteArgs>(args: SelectSubset<T, user_medisDeleteArgs<ExtArgs>>): Prisma__user_medisClient<$Result.GetResult<Prisma.$user_medisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_medis.
     * @param {user_medisUpdateArgs} args - Arguments to update one User_medis.
     * @example
     * // Update one User_medis
     * const user_medis = await prisma.user_medis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_medisUpdateArgs>(args: SelectSubset<T, user_medisUpdateArgs<ExtArgs>>): Prisma__user_medisClient<$Result.GetResult<Prisma.$user_medisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_medis.
     * @param {user_medisDeleteManyArgs} args - Arguments to filter User_medis to delete.
     * @example
     * // Delete a few User_medis
     * const { count } = await prisma.user_medis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_medisDeleteManyArgs>(args?: SelectSubset<T, user_medisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_medis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_medisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_medis
     * const user_medis = await prisma.user_medis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_medisUpdateManyArgs>(args: SelectSubset<T, user_medisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_medis and returns the data updated in the database.
     * @param {user_medisUpdateManyAndReturnArgs} args - Arguments to update many User_medis.
     * @example
     * // Update many User_medis
     * const user_medis = await prisma.user_medis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_medis and only return the `id`
     * const user_medisWithIdOnly = await prisma.user_medis.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_medisUpdateManyAndReturnArgs>(args: SelectSubset<T, user_medisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_medisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_medis.
     * @param {user_medisUpsertArgs} args - Arguments to update or create a User_medis.
     * @example
     * // Update or create a User_medis
     * const user_medis = await prisma.user_medis.upsert({
     *   create: {
     *     // ... data to create a User_medis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_medis we want to update
     *   }
     * })
     */
    upsert<T extends user_medisUpsertArgs>(args: SelectSubset<T, user_medisUpsertArgs<ExtArgs>>): Prisma__user_medisClient<$Result.GetResult<Prisma.$user_medisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_medis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_medisCountArgs} args - Arguments to filter User_medis to count.
     * @example
     * // Count the number of User_medis
     * const count = await prisma.user_medis.count({
     *   where: {
     *     // ... the filter for the User_medis we want to count
     *   }
     * })
    **/
    count<T extends user_medisCountArgs>(
      args?: Subset<T, user_medisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_medisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_medis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_medisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_medisAggregateArgs>(args: Subset<T, User_medisAggregateArgs>): Prisma.PrismaPromise<GetUser_medisAggregateType<T>>

    /**
     * Group by User_medis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_medisGroupByArgs} args - Group by arguments.
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
      T extends user_medisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_medisGroupByArgs['orderBy'] }
        : { orderBy?: user_medisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_medisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_medisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_medis model
   */
  readonly fields: user_medisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_medis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_medisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medi_times<T extends user_medis$medi_timesArgs<ExtArgs> = {}>(args?: Subset<T, user_medis$medi_timesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medi_timesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medicines<T extends medicinesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, medicinesDefaultArgs<ExtArgs>>): Prisma__medicinesClient<$Result.GetResult<Prisma.$medicinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_medis model
   */
  interface user_medisFieldRefs {
    readonly id: FieldRef<"user_medis", 'Int'>
    readonly start_date: FieldRef<"user_medis", 'DateTime'>
    readonly end_date: FieldRef<"user_medis", 'DateTime'>
    readonly userId: FieldRef<"user_medis", 'String'>
    readonly itemSeq: FieldRef<"user_medis", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_medis findUnique
   */
  export type user_medisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_medis
     */
    select?: user_medisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_medis
     */
    omit?: user_medisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_medisInclude<ExtArgs> | null
    /**
     * Filter, which user_medis to fetch.
     */
    where: user_medisWhereUniqueInput
  }

  /**
   * user_medis findUniqueOrThrow
   */
  export type user_medisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_medis
     */
    select?: user_medisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_medis
     */
    omit?: user_medisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_medisInclude<ExtArgs> | null
    /**
     * Filter, which user_medis to fetch.
     */
    where: user_medisWhereUniqueInput
  }

  /**
   * user_medis findFirst
   */
  export type user_medisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_medis
     */
    select?: user_medisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_medis
     */
    omit?: user_medisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_medisInclude<ExtArgs> | null
    /**
     * Filter, which user_medis to fetch.
     */
    where?: user_medisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_medis to fetch.
     */
    orderBy?: user_medisOrderByWithRelationInput | user_medisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_medis.
     */
    cursor?: user_medisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_medis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_medis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_medis.
     */
    distinct?: User_medisScalarFieldEnum | User_medisScalarFieldEnum[]
  }

  /**
   * user_medis findFirstOrThrow
   */
  export type user_medisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_medis
     */
    select?: user_medisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_medis
     */
    omit?: user_medisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_medisInclude<ExtArgs> | null
    /**
     * Filter, which user_medis to fetch.
     */
    where?: user_medisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_medis to fetch.
     */
    orderBy?: user_medisOrderByWithRelationInput | user_medisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_medis.
     */
    cursor?: user_medisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_medis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_medis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_medis.
     */
    distinct?: User_medisScalarFieldEnum | User_medisScalarFieldEnum[]
  }

  /**
   * user_medis findMany
   */
  export type user_medisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_medis
     */
    select?: user_medisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_medis
     */
    omit?: user_medisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_medisInclude<ExtArgs> | null
    /**
     * Filter, which user_medis to fetch.
     */
    where?: user_medisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_medis to fetch.
     */
    orderBy?: user_medisOrderByWithRelationInput | user_medisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_medis.
     */
    cursor?: user_medisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_medis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_medis.
     */
    skip?: number
    distinct?: User_medisScalarFieldEnum | User_medisScalarFieldEnum[]
  }

  /**
   * user_medis create
   */
  export type user_medisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_medis
     */
    select?: user_medisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_medis
     */
    omit?: user_medisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_medisInclude<ExtArgs> | null
    /**
     * The data needed to create a user_medis.
     */
    data: XOR<user_medisCreateInput, user_medisUncheckedCreateInput>
  }

  /**
   * user_medis createMany
   */
  export type user_medisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_medis.
     */
    data: user_medisCreateManyInput | user_medisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_medis createManyAndReturn
   */
  export type user_medisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_medis
     */
    select?: user_medisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_medis
     */
    omit?: user_medisOmit<ExtArgs> | null
    /**
     * The data used to create many user_medis.
     */
    data: user_medisCreateManyInput | user_medisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_medisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_medis update
   */
  export type user_medisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_medis
     */
    select?: user_medisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_medis
     */
    omit?: user_medisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_medisInclude<ExtArgs> | null
    /**
     * The data needed to update a user_medis.
     */
    data: XOR<user_medisUpdateInput, user_medisUncheckedUpdateInput>
    /**
     * Choose, which user_medis to update.
     */
    where: user_medisWhereUniqueInput
  }

  /**
   * user_medis updateMany
   */
  export type user_medisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_medis.
     */
    data: XOR<user_medisUpdateManyMutationInput, user_medisUncheckedUpdateManyInput>
    /**
     * Filter which user_medis to update
     */
    where?: user_medisWhereInput
    /**
     * Limit how many user_medis to update.
     */
    limit?: number
  }

  /**
   * user_medis updateManyAndReturn
   */
  export type user_medisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_medis
     */
    select?: user_medisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_medis
     */
    omit?: user_medisOmit<ExtArgs> | null
    /**
     * The data used to update user_medis.
     */
    data: XOR<user_medisUpdateManyMutationInput, user_medisUncheckedUpdateManyInput>
    /**
     * Filter which user_medis to update
     */
    where?: user_medisWhereInput
    /**
     * Limit how many user_medis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_medisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_medis upsert
   */
  export type user_medisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_medis
     */
    select?: user_medisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_medis
     */
    omit?: user_medisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_medisInclude<ExtArgs> | null
    /**
     * The filter to search for the user_medis to update in case it exists.
     */
    where: user_medisWhereUniqueInput
    /**
     * In case the user_medis found by the `where` argument doesn't exist, create a new user_medis with this data.
     */
    create: XOR<user_medisCreateInput, user_medisUncheckedCreateInput>
    /**
     * In case the user_medis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_medisUpdateInput, user_medisUncheckedUpdateInput>
  }

  /**
   * user_medis delete
   */
  export type user_medisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_medis
     */
    select?: user_medisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_medis
     */
    omit?: user_medisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_medisInclude<ExtArgs> | null
    /**
     * Filter which user_medis to delete.
     */
    where: user_medisWhereUniqueInput
  }

  /**
   * user_medis deleteMany
   */
  export type user_medisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_medis to delete
     */
    where?: user_medisWhereInput
    /**
     * Limit how many user_medis to delete.
     */
    limit?: number
  }

  /**
   * user_medis.medi_times
   */
  export type user_medis$medi_timesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medi_times
     */
    select?: medi_timesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medi_times
     */
    omit?: medi_timesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medi_timesInclude<ExtArgs> | null
    where?: medi_timesWhereInput
    orderBy?: medi_timesOrderByWithRelationInput | medi_timesOrderByWithRelationInput[]
    cursor?: medi_timesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Medi_timesScalarFieldEnum | Medi_timesScalarFieldEnum[]
  }

  /**
   * user_medis without action
   */
  export type user_medisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_medis
     */
    select?: user_medisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_medis
     */
    omit?: user_medisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_medisInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    birthyear: number | null
    member_type: number | null
  }

  export type UsersSumAggregateOutputType = {
    birthyear: number | null
    member_type: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    photo: string | null
    name: string | null
    birthyear: number | null
    gender: string | null
    member_type: number | null
    created_at: Date | null
    deleted_at: Date | null
    hpid: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    photo: string | null
    name: string | null
    birthyear: number | null
    gender: string | null
    member_type: number | null
    created_at: Date | null
    deleted_at: Date | null
    hpid: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    photo: number
    name: number
    birthyear: number
    gender: number
    member_type: number
    created_at: number
    deleted_at: number
    hpid: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    birthyear?: true
    member_type?: true
  }

  export type UsersSumAggregateInputType = {
    birthyear?: true
    member_type?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    photo?: true
    name?: true
    birthyear?: true
    gender?: true
    member_type?: true
    created_at?: true
    deleted_at?: true
    hpid?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    photo?: true
    name?: true
    birthyear?: true
    gender?: true
    member_type?: true
    created_at?: true
    deleted_at?: true
    hpid?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    photo?: true
    name?: true
    birthyear?: true
    gender?: true
    member_type?: true
    created_at?: true
    deleted_at?: true
    hpid?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string | null
    photo: string | null
    name: string | null
    birthyear: number | null
    gender: string | null
    member_type: number
    created_at: Date
    deleted_at: Date | null
    hpid: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    photo?: boolean
    name?: boolean
    birthyear?: boolean
    gender?: boolean
    member_type?: boolean
    created_at?: boolean
    deleted_at?: boolean
    hpid?: boolean
    answers?: boolean | users$answersArgs<ExtArgs>
    comments?: boolean | users$commentsArgs<ExtArgs>
    posts?: boolean | users$postsArgs<ExtArgs>
    qnas?: boolean | users$qnasArgs<ExtArgs>
    user_healths?: boolean | users$user_healthsArgs<ExtArgs>
    user_medis?: boolean | users$user_medisArgs<ExtArgs>
    pharmacies?: boolean | users$pharmaciesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    photo?: boolean
    name?: boolean
    birthyear?: boolean
    gender?: boolean
    member_type?: boolean
    created_at?: boolean
    deleted_at?: boolean
    hpid?: boolean
    pharmacies?: boolean | users$pharmaciesArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    photo?: boolean
    name?: boolean
    birthyear?: boolean
    gender?: boolean
    member_type?: boolean
    created_at?: boolean
    deleted_at?: boolean
    hpid?: boolean
    pharmacies?: boolean | users$pharmaciesArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    photo?: boolean
    name?: boolean
    birthyear?: boolean
    gender?: boolean
    member_type?: boolean
    created_at?: boolean
    deleted_at?: boolean
    hpid?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "photo" | "name" | "birthyear" | "gender" | "member_type" | "created_at" | "deleted_at" | "hpid", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | users$answersArgs<ExtArgs>
    comments?: boolean | users$commentsArgs<ExtArgs>
    posts?: boolean | users$postsArgs<ExtArgs>
    qnas?: boolean | users$qnasArgs<ExtArgs>
    user_healths?: boolean | users$user_healthsArgs<ExtArgs>
    user_medis?: boolean | users$user_medisArgs<ExtArgs>
    pharmacies?: boolean | users$pharmaciesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacies?: boolean | users$pharmaciesArgs<ExtArgs>
  }
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacies?: boolean | users$pharmaciesArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      answers: Prisma.$answersPayload<ExtArgs>[]
      comments: Prisma.$commentsPayload<ExtArgs>[]
      posts: Prisma.$postsPayload<ExtArgs>[]
      qnas: Prisma.$qnasPayload<ExtArgs>[]
      user_healths: Prisma.$user_healthsPayload<ExtArgs>[]
      user_medis: Prisma.$user_medisPayload<ExtArgs>[]
      pharmacies: Prisma.$pharmaciesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      photo: string | null
      name: string | null
      birthyear: number | null
      gender: string | null
      member_type: number
      created_at: Date
      deleted_at: Date | null
      hpid: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends users$answersArgs<ExtArgs> = {}>(args?: Subset<T, users$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends users$postsArgs<ExtArgs> = {}>(args?: Subset<T, users$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    qnas<T extends users$qnasArgs<ExtArgs> = {}>(args?: Subset<T, users$qnasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$qnasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_healths<T extends users$user_healthsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_healthsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_healthsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_medis<T extends users$user_medisArgs<ExtArgs> = {}>(args?: Subset<T, users$user_medisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_medisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pharmacies<T extends users$pharmaciesArgs<ExtArgs> = {}>(args?: Subset<T, users$pharmaciesArgs<ExtArgs>>): Prisma__pharmaciesClient<$Result.GetResult<Prisma.$pharmaciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly photo: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly birthyear: FieldRef<"users", 'Int'>
    readonly gender: FieldRef<"users", 'String'>
    readonly member_type: FieldRef<"users", 'Int'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly deleted_at: FieldRef<"users", 'DateTime'>
    readonly hpid: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.answers
   */
  export type users$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    where?: answersWhereInput
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    cursor?: answersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * users.comments
   */
  export type users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * users.posts
   */
  export type users$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * users.qnas
   */
  export type users$qnasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qnas
     */
    select?: qnasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qnas
     */
    omit?: qnasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qnasInclude<ExtArgs> | null
    where?: qnasWhereInput
    orderBy?: qnasOrderByWithRelationInput | qnasOrderByWithRelationInput[]
    cursor?: qnasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QnasScalarFieldEnum | QnasScalarFieldEnum[]
  }

  /**
   * users.user_healths
   */
  export type users$user_healthsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_healths
     */
    select?: user_healthsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_healths
     */
    omit?: user_healthsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_healthsInclude<ExtArgs> | null
    where?: user_healthsWhereInput
    orderBy?: user_healthsOrderByWithRelationInput | user_healthsOrderByWithRelationInput[]
    cursor?: user_healthsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_healthsScalarFieldEnum | User_healthsScalarFieldEnum[]
  }

  /**
   * users.user_medis
   */
  export type users$user_medisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_medis
     */
    select?: user_medisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_medis
     */
    omit?: user_medisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_medisInclude<ExtArgs> | null
    where?: user_medisWhereInput
    orderBy?: user_medisOrderByWithRelationInput | user_medisOrderByWithRelationInput[]
    cursor?: user_medisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_medisScalarFieldEnum | User_medisScalarFieldEnum[]
  }

  /**
   * users.pharmacies
   */
  export type users$pharmaciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pharmacies
     */
    select?: pharmaciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pharmacies
     */
    omit?: pharmaciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pharmaciesInclude<ExtArgs> | null
    where?: pharmaciesWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const AnswersScalarFieldEnum: {
    id: 'id',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_accepted: 'is_accepted',
    userId: 'userId',
    qnaId: 'qnaId'
  };

  export type AnswersScalarFieldEnum = (typeof AnswersScalarFieldEnum)[keyof typeof AnswersScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    userId: 'userId',
    postId: 'postId'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const HealthsScalarFieldEnum: {
    id: 'id',
    health_name: 'health_name'
  };

  export type HealthsScalarFieldEnum = (typeof HealthsScalarFieldEnum)[keyof typeof HealthsScalarFieldEnum]


  export const InventoriesScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    itemSeq: 'itemSeq',
    hpid: 'hpid'
  };

  export type InventoriesScalarFieldEnum = (typeof InventoriesScalarFieldEnum)[keyof typeof InventoriesScalarFieldEnum]


  export const Medi_timesScalarFieldEnum: {
    id: 'id',
    medi_time: 'medi_time',
    userMediId: 'userMediId'
  };

  export type Medi_timesScalarFieldEnum = (typeof Medi_timesScalarFieldEnum)[keyof typeof Medi_timesScalarFieldEnum]


  export const MedicinesScalarFieldEnum: {
    item_seq: 'item_seq',
    item_name: 'item_name',
    entp_name: 'entp_name',
    item_permit_date: 'item_permit_date',
    etc_otc_code: 'etc_otc_code',
    class_no: 'class_no',
    chart: 'chart',
    bar_code: 'bar_code',
    material_name: 'material_name',
    ee_doc_id: 'ee_doc_id'
  };

  export type MedicinesScalarFieldEnum = (typeof MedicinesScalarFieldEnum)[keyof typeof MedicinesScalarFieldEnum]


  export const PharmaciesScalarFieldEnum: {
    hpid: 'hpid',
    duty_addr: 'duty_addr',
    duty_mapimg: 'duty_mapimg',
    duty_name: 'duty_name',
    duty_tel1: 'duty_tel1',
    duty_time1c: 'duty_time1c',
    duty_time1s: 'duty_time1s',
    duty_time2c: 'duty_time2c',
    duty_time2s: 'duty_time2s',
    duty_time3c: 'duty_time3c',
    duty_time3s: 'duty_time3s',
    duty_time4c: 'duty_time4c',
    duty_time4s: 'duty_time4s',
    duty_time5c: 'duty_time5c',
    duty_time5s: 'duty_time5s',
    duty_time6c: 'duty_time6c',
    duty_time6s: 'duty_time6s',
    duty_time7c: 'duty_time7c',
    duty_time7s: 'duty_time7s',
    post_cdn1: 'post_cdn1',
    post_cdn2: 'post_cdn2',
    wgs84_lat: 'wgs84_lat',
    wgs84_lon: 'wgs84_lon'
  };

  export type PharmaciesScalarFieldEnum = (typeof PharmaciesScalarFieldEnum)[keyof typeof PharmaciesScalarFieldEnum]


  export const Post_tagsScalarFieldEnum: {
    id: 'id',
    tagId: 'tagId',
    postId: 'postId'
  };

  export type Post_tagsScalarFieldEnum = (typeof Post_tagsScalarFieldEnum)[keyof typeof Post_tagsScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    userId: 'userId'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const Qna_tagsScalarFieldEnum: {
    id: 'id',
    tagId: 'tagId',
    qnaId: 'qnaId'
  };

  export type Qna_tagsScalarFieldEnum = (typeof Qna_tagsScalarFieldEnum)[keyof typeof Qna_tagsScalarFieldEnum]


  export const QnasScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    userId: 'userId'
  };

  export type QnasScalarFieldEnum = (typeof QnasScalarFieldEnum)[keyof typeof QnasScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    tag_name: 'tag_name'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const User_healthsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    healthId: 'healthId'
  };

  export type User_healthsScalarFieldEnum = (typeof User_healthsScalarFieldEnum)[keyof typeof User_healthsScalarFieldEnum]


  export const User_medisScalarFieldEnum: {
    id: 'id',
    start_date: 'start_date',
    end_date: 'end_date',
    userId: 'userId',
    itemSeq: 'itemSeq'
  };

  export type User_medisScalarFieldEnum = (typeof User_medisScalarFieldEnum)[keyof typeof User_medisScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    photo: 'photo',
    name: 'name',
    birthyear: 'birthyear',
    gender: 'gender',
    member_type: 'member_type',
    created_at: 'created_at',
    deleted_at: 'deleted_at',
    hpid: 'hpid'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type answersWhereInput = {
    AND?: answersWhereInput | answersWhereInput[]
    OR?: answersWhereInput[]
    NOT?: answersWhereInput | answersWhereInput[]
    id?: IntFilter<"answers"> | number
    content?: StringFilter<"answers"> | string
    created_at?: DateTimeFilter<"answers"> | Date | string
    updated_at?: DateTimeFilter<"answers"> | Date | string
    deleted_at?: DateTimeNullableFilter<"answers"> | Date | string | null
    is_accepted?: BoolFilter<"answers"> | boolean
    userId?: StringFilter<"answers"> | string
    qnaId?: IntFilter<"answers"> | number
    qnas?: XOR<QnasScalarRelationFilter, qnasWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type answersOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_accepted?: SortOrder
    userId?: SortOrder
    qnaId?: SortOrder
    qnas?: qnasOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type answersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: answersWhereInput | answersWhereInput[]
    OR?: answersWhereInput[]
    NOT?: answersWhereInput | answersWhereInput[]
    content?: StringFilter<"answers"> | string
    created_at?: DateTimeFilter<"answers"> | Date | string
    updated_at?: DateTimeFilter<"answers"> | Date | string
    deleted_at?: DateTimeNullableFilter<"answers"> | Date | string | null
    is_accepted?: BoolFilter<"answers"> | boolean
    userId?: StringFilter<"answers"> | string
    qnaId?: IntFilter<"answers"> | number
    qnas?: XOR<QnasScalarRelationFilter, qnasWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type answersOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_accepted?: SortOrder
    userId?: SortOrder
    qnaId?: SortOrder
    _count?: answersCountOrderByAggregateInput
    _avg?: answersAvgOrderByAggregateInput
    _max?: answersMaxOrderByAggregateInput
    _min?: answersMinOrderByAggregateInput
    _sum?: answersSumOrderByAggregateInput
  }

  export type answersScalarWhereWithAggregatesInput = {
    AND?: answersScalarWhereWithAggregatesInput | answersScalarWhereWithAggregatesInput[]
    OR?: answersScalarWhereWithAggregatesInput[]
    NOT?: answersScalarWhereWithAggregatesInput | answersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"answers"> | number
    content?: StringWithAggregatesFilter<"answers"> | string
    created_at?: DateTimeWithAggregatesFilter<"answers"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"answers"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"answers"> | Date | string | null
    is_accepted?: BoolWithAggregatesFilter<"answers"> | boolean
    userId?: StringWithAggregatesFilter<"answers"> | string
    qnaId?: IntWithAggregatesFilter<"answers"> | number
  }

  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    id?: IntFilter<"comments"> | number
    content?: StringFilter<"comments"> | string
    created_at?: DateTimeFilter<"comments"> | Date | string
    updated_at?: DateTimeFilter<"comments"> | Date | string
    deleted_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    userId?: StringFilter<"comments"> | string
    postId?: IntFilter<"comments"> | number
    posts?: XOR<PostsScalarRelationFilter, postsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type commentsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    userId?: SortOrder
    postId?: SortOrder
    posts?: postsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    content?: StringFilter<"comments"> | string
    created_at?: DateTimeFilter<"comments"> | Date | string
    updated_at?: DateTimeFilter<"comments"> | Date | string
    deleted_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    userId?: StringFilter<"comments"> | string
    postId?: IntFilter<"comments"> | number
    posts?: XOR<PostsScalarRelationFilter, postsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type commentsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: commentsCountOrderByAggregateInput
    _avg?: commentsAvgOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
    _sum?: commentsSumOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comments"> | number
    content?: StringWithAggregatesFilter<"comments"> | string
    created_at?: DateTimeWithAggregatesFilter<"comments"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"comments"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"comments"> | Date | string | null
    userId?: StringWithAggregatesFilter<"comments"> | string
    postId?: IntWithAggregatesFilter<"comments"> | number
  }

  export type healthsWhereInput = {
    AND?: healthsWhereInput | healthsWhereInput[]
    OR?: healthsWhereInput[]
    NOT?: healthsWhereInput | healthsWhereInput[]
    id?: IntFilter<"healths"> | number
    health_name?: StringFilter<"healths"> | string
    user_healths?: User_healthsListRelationFilter
  }

  export type healthsOrderByWithRelationInput = {
    id?: SortOrder
    health_name?: SortOrder
    user_healths?: user_healthsOrderByRelationAggregateInput
  }

  export type healthsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: healthsWhereInput | healthsWhereInput[]
    OR?: healthsWhereInput[]
    NOT?: healthsWhereInput | healthsWhereInput[]
    health_name?: StringFilter<"healths"> | string
    user_healths?: User_healthsListRelationFilter
  }, "id">

  export type healthsOrderByWithAggregationInput = {
    id?: SortOrder
    health_name?: SortOrder
    _count?: healthsCountOrderByAggregateInput
    _avg?: healthsAvgOrderByAggregateInput
    _max?: healthsMaxOrderByAggregateInput
    _min?: healthsMinOrderByAggregateInput
    _sum?: healthsSumOrderByAggregateInput
  }

  export type healthsScalarWhereWithAggregatesInput = {
    AND?: healthsScalarWhereWithAggregatesInput | healthsScalarWhereWithAggregatesInput[]
    OR?: healthsScalarWhereWithAggregatesInput[]
    NOT?: healthsScalarWhereWithAggregatesInput | healthsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"healths"> | number
    health_name?: StringWithAggregatesFilter<"healths"> | string
  }

  export type inventoriesWhereInput = {
    AND?: inventoriesWhereInput | inventoriesWhereInput[]
    OR?: inventoriesWhereInput[]
    NOT?: inventoriesWhereInput | inventoriesWhereInput[]
    id?: IntFilter<"inventories"> | number
    quantity?: IntFilter<"inventories"> | number
    itemSeq?: StringFilter<"inventories"> | string
    hpid?: StringFilter<"inventories"> | string
    pharmacies?: XOR<PharmaciesScalarRelationFilter, pharmaciesWhereInput>
    medicines?: XOR<MedicinesScalarRelationFilter, medicinesWhereInput>
  }

  export type inventoriesOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    itemSeq?: SortOrder
    hpid?: SortOrder
    pharmacies?: pharmaciesOrderByWithRelationInput
    medicines?: medicinesOrderByWithRelationInput
  }

  export type inventoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: inventoriesWhereInput | inventoriesWhereInput[]
    OR?: inventoriesWhereInput[]
    NOT?: inventoriesWhereInput | inventoriesWhereInput[]
    quantity?: IntFilter<"inventories"> | number
    itemSeq?: StringFilter<"inventories"> | string
    hpid?: StringFilter<"inventories"> | string
    pharmacies?: XOR<PharmaciesScalarRelationFilter, pharmaciesWhereInput>
    medicines?: XOR<MedicinesScalarRelationFilter, medicinesWhereInput>
  }, "id">

  export type inventoriesOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    itemSeq?: SortOrder
    hpid?: SortOrder
    _count?: inventoriesCountOrderByAggregateInput
    _avg?: inventoriesAvgOrderByAggregateInput
    _max?: inventoriesMaxOrderByAggregateInput
    _min?: inventoriesMinOrderByAggregateInput
    _sum?: inventoriesSumOrderByAggregateInput
  }

  export type inventoriesScalarWhereWithAggregatesInput = {
    AND?: inventoriesScalarWhereWithAggregatesInput | inventoriesScalarWhereWithAggregatesInput[]
    OR?: inventoriesScalarWhereWithAggregatesInput[]
    NOT?: inventoriesScalarWhereWithAggregatesInput | inventoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"inventories"> | number
    quantity?: IntWithAggregatesFilter<"inventories"> | number
    itemSeq?: StringWithAggregatesFilter<"inventories"> | string
    hpid?: StringWithAggregatesFilter<"inventories"> | string
  }

  export type medi_timesWhereInput = {
    AND?: medi_timesWhereInput | medi_timesWhereInput[]
    OR?: medi_timesWhereInput[]
    NOT?: medi_timesWhereInput | medi_timesWhereInput[]
    id?: IntFilter<"medi_times"> | number
    medi_time?: IntFilter<"medi_times"> | number
    userMediId?: IntFilter<"medi_times"> | number
    user_medis?: XOR<User_medisScalarRelationFilter, user_medisWhereInput>
  }

  export type medi_timesOrderByWithRelationInput = {
    id?: SortOrder
    medi_time?: SortOrder
    userMediId?: SortOrder
    user_medis?: user_medisOrderByWithRelationInput
  }

  export type medi_timesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: medi_timesWhereInput | medi_timesWhereInput[]
    OR?: medi_timesWhereInput[]
    NOT?: medi_timesWhereInput | medi_timesWhereInput[]
    medi_time?: IntFilter<"medi_times"> | number
    userMediId?: IntFilter<"medi_times"> | number
    user_medis?: XOR<User_medisScalarRelationFilter, user_medisWhereInput>
  }, "id">

  export type medi_timesOrderByWithAggregationInput = {
    id?: SortOrder
    medi_time?: SortOrder
    userMediId?: SortOrder
    _count?: medi_timesCountOrderByAggregateInput
    _avg?: medi_timesAvgOrderByAggregateInput
    _max?: medi_timesMaxOrderByAggregateInput
    _min?: medi_timesMinOrderByAggregateInput
    _sum?: medi_timesSumOrderByAggregateInput
  }

  export type medi_timesScalarWhereWithAggregatesInput = {
    AND?: medi_timesScalarWhereWithAggregatesInput | medi_timesScalarWhereWithAggregatesInput[]
    OR?: medi_timesScalarWhereWithAggregatesInput[]
    NOT?: medi_timesScalarWhereWithAggregatesInput | medi_timesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"medi_times"> | number
    medi_time?: IntWithAggregatesFilter<"medi_times"> | number
    userMediId?: IntWithAggregatesFilter<"medi_times"> | number
  }

  export type medicinesWhereInput = {
    AND?: medicinesWhereInput | medicinesWhereInput[]
    OR?: medicinesWhereInput[]
    NOT?: medicinesWhereInput | medicinesWhereInput[]
    item_seq?: StringFilter<"medicines"> | string
    item_name?: StringFilter<"medicines"> | string
    entp_name?: StringNullableFilter<"medicines"> | string | null
    item_permit_date?: DateTimeNullableFilter<"medicines"> | Date | string | null
    etc_otc_code?: StringNullableFilter<"medicines"> | string | null
    class_no?: StringNullableFilter<"medicines"> | string | null
    chart?: StringNullableFilter<"medicines"> | string | null
    bar_code?: StringNullableFilter<"medicines"> | string | null
    material_name?: StringNullableFilter<"medicines"> | string | null
    ee_doc_id?: StringNullableFilter<"medicines"> | string | null
    inventories?: InventoriesListRelationFilter
    user_medis?: User_medisListRelationFilter
  }

  export type medicinesOrderByWithRelationInput = {
    item_seq?: SortOrder
    item_name?: SortOrder
    entp_name?: SortOrderInput | SortOrder
    item_permit_date?: SortOrderInput | SortOrder
    etc_otc_code?: SortOrderInput | SortOrder
    class_no?: SortOrderInput | SortOrder
    chart?: SortOrderInput | SortOrder
    bar_code?: SortOrderInput | SortOrder
    material_name?: SortOrderInput | SortOrder
    ee_doc_id?: SortOrderInput | SortOrder
    inventories?: inventoriesOrderByRelationAggregateInput
    user_medis?: user_medisOrderByRelationAggregateInput
  }

  export type medicinesWhereUniqueInput = Prisma.AtLeast<{
    item_seq?: string
    AND?: medicinesWhereInput | medicinesWhereInput[]
    OR?: medicinesWhereInput[]
    NOT?: medicinesWhereInput | medicinesWhereInput[]
    item_name?: StringFilter<"medicines"> | string
    entp_name?: StringNullableFilter<"medicines"> | string | null
    item_permit_date?: DateTimeNullableFilter<"medicines"> | Date | string | null
    etc_otc_code?: StringNullableFilter<"medicines"> | string | null
    class_no?: StringNullableFilter<"medicines"> | string | null
    chart?: StringNullableFilter<"medicines"> | string | null
    bar_code?: StringNullableFilter<"medicines"> | string | null
    material_name?: StringNullableFilter<"medicines"> | string | null
    ee_doc_id?: StringNullableFilter<"medicines"> | string | null
    inventories?: InventoriesListRelationFilter
    user_medis?: User_medisListRelationFilter
  }, "item_seq">

  export type medicinesOrderByWithAggregationInput = {
    item_seq?: SortOrder
    item_name?: SortOrder
    entp_name?: SortOrderInput | SortOrder
    item_permit_date?: SortOrderInput | SortOrder
    etc_otc_code?: SortOrderInput | SortOrder
    class_no?: SortOrderInput | SortOrder
    chart?: SortOrderInput | SortOrder
    bar_code?: SortOrderInput | SortOrder
    material_name?: SortOrderInput | SortOrder
    ee_doc_id?: SortOrderInput | SortOrder
    _count?: medicinesCountOrderByAggregateInput
    _max?: medicinesMaxOrderByAggregateInput
    _min?: medicinesMinOrderByAggregateInput
  }

  export type medicinesScalarWhereWithAggregatesInput = {
    AND?: medicinesScalarWhereWithAggregatesInput | medicinesScalarWhereWithAggregatesInput[]
    OR?: medicinesScalarWhereWithAggregatesInput[]
    NOT?: medicinesScalarWhereWithAggregatesInput | medicinesScalarWhereWithAggregatesInput[]
    item_seq?: StringWithAggregatesFilter<"medicines"> | string
    item_name?: StringWithAggregatesFilter<"medicines"> | string
    entp_name?: StringNullableWithAggregatesFilter<"medicines"> | string | null
    item_permit_date?: DateTimeNullableWithAggregatesFilter<"medicines"> | Date | string | null
    etc_otc_code?: StringNullableWithAggregatesFilter<"medicines"> | string | null
    class_no?: StringNullableWithAggregatesFilter<"medicines"> | string | null
    chart?: StringNullableWithAggregatesFilter<"medicines"> | string | null
    bar_code?: StringNullableWithAggregatesFilter<"medicines"> | string | null
    material_name?: StringNullableWithAggregatesFilter<"medicines"> | string | null
    ee_doc_id?: StringNullableWithAggregatesFilter<"medicines"> | string | null
  }

  export type pharmaciesWhereInput = {
    AND?: pharmaciesWhereInput | pharmaciesWhereInput[]
    OR?: pharmaciesWhereInput[]
    NOT?: pharmaciesWhereInput | pharmaciesWhereInput[]
    hpid?: StringFilter<"pharmacies"> | string
    duty_addr?: StringNullableFilter<"pharmacies"> | string | null
    duty_mapimg?: StringNullableFilter<"pharmacies"> | string | null
    duty_name?: StringFilter<"pharmacies"> | string
    duty_tel1?: StringNullableFilter<"pharmacies"> | string | null
    duty_time1c?: StringNullableFilter<"pharmacies"> | string | null
    duty_time1s?: StringNullableFilter<"pharmacies"> | string | null
    duty_time2c?: StringNullableFilter<"pharmacies"> | string | null
    duty_time2s?: StringNullableFilter<"pharmacies"> | string | null
    duty_time3c?: StringNullableFilter<"pharmacies"> | string | null
    duty_time3s?: StringNullableFilter<"pharmacies"> | string | null
    duty_time4c?: StringNullableFilter<"pharmacies"> | string | null
    duty_time4s?: StringNullableFilter<"pharmacies"> | string | null
    duty_time5c?: StringNullableFilter<"pharmacies"> | string | null
    duty_time5s?: StringNullableFilter<"pharmacies"> | string | null
    duty_time6c?: StringNullableFilter<"pharmacies"> | string | null
    duty_time6s?: StringNullableFilter<"pharmacies"> | string | null
    duty_time7c?: StringNullableFilter<"pharmacies"> | string | null
    duty_time7s?: StringNullableFilter<"pharmacies"> | string | null
    post_cdn1?: StringNullableFilter<"pharmacies"> | string | null
    post_cdn2?: StringNullableFilter<"pharmacies"> | string | null
    wgs84_lat?: DecimalNullableFilter<"pharmacies"> | Decimal | DecimalJsLike | number | string | null
    wgs84_lon?: DecimalNullableFilter<"pharmacies"> | Decimal | DecimalJsLike | number | string | null
    inventories?: InventoriesListRelationFilter
    users?: UsersListRelationFilter
  }

  export type pharmaciesOrderByWithRelationInput = {
    hpid?: SortOrder
    duty_addr?: SortOrderInput | SortOrder
    duty_mapimg?: SortOrderInput | SortOrder
    duty_name?: SortOrder
    duty_tel1?: SortOrderInput | SortOrder
    duty_time1c?: SortOrderInput | SortOrder
    duty_time1s?: SortOrderInput | SortOrder
    duty_time2c?: SortOrderInput | SortOrder
    duty_time2s?: SortOrderInput | SortOrder
    duty_time3c?: SortOrderInput | SortOrder
    duty_time3s?: SortOrderInput | SortOrder
    duty_time4c?: SortOrderInput | SortOrder
    duty_time4s?: SortOrderInput | SortOrder
    duty_time5c?: SortOrderInput | SortOrder
    duty_time5s?: SortOrderInput | SortOrder
    duty_time6c?: SortOrderInput | SortOrder
    duty_time6s?: SortOrderInput | SortOrder
    duty_time7c?: SortOrderInput | SortOrder
    duty_time7s?: SortOrderInput | SortOrder
    post_cdn1?: SortOrderInput | SortOrder
    post_cdn2?: SortOrderInput | SortOrder
    wgs84_lat?: SortOrderInput | SortOrder
    wgs84_lon?: SortOrderInput | SortOrder
    inventories?: inventoriesOrderByRelationAggregateInput
    users?: usersOrderByRelationAggregateInput
  }

  export type pharmaciesWhereUniqueInput = Prisma.AtLeast<{
    hpid?: string
    AND?: pharmaciesWhereInput | pharmaciesWhereInput[]
    OR?: pharmaciesWhereInput[]
    NOT?: pharmaciesWhereInput | pharmaciesWhereInput[]
    duty_addr?: StringNullableFilter<"pharmacies"> | string | null
    duty_mapimg?: StringNullableFilter<"pharmacies"> | string | null
    duty_name?: StringFilter<"pharmacies"> | string
    duty_tel1?: StringNullableFilter<"pharmacies"> | string | null
    duty_time1c?: StringNullableFilter<"pharmacies"> | string | null
    duty_time1s?: StringNullableFilter<"pharmacies"> | string | null
    duty_time2c?: StringNullableFilter<"pharmacies"> | string | null
    duty_time2s?: StringNullableFilter<"pharmacies"> | string | null
    duty_time3c?: StringNullableFilter<"pharmacies"> | string | null
    duty_time3s?: StringNullableFilter<"pharmacies"> | string | null
    duty_time4c?: StringNullableFilter<"pharmacies"> | string | null
    duty_time4s?: StringNullableFilter<"pharmacies"> | string | null
    duty_time5c?: StringNullableFilter<"pharmacies"> | string | null
    duty_time5s?: StringNullableFilter<"pharmacies"> | string | null
    duty_time6c?: StringNullableFilter<"pharmacies"> | string | null
    duty_time6s?: StringNullableFilter<"pharmacies"> | string | null
    duty_time7c?: StringNullableFilter<"pharmacies"> | string | null
    duty_time7s?: StringNullableFilter<"pharmacies"> | string | null
    post_cdn1?: StringNullableFilter<"pharmacies"> | string | null
    post_cdn2?: StringNullableFilter<"pharmacies"> | string | null
    wgs84_lat?: DecimalNullableFilter<"pharmacies"> | Decimal | DecimalJsLike | number | string | null
    wgs84_lon?: DecimalNullableFilter<"pharmacies"> | Decimal | DecimalJsLike | number | string | null
    inventories?: InventoriesListRelationFilter
    users?: UsersListRelationFilter
  }, "hpid">

  export type pharmaciesOrderByWithAggregationInput = {
    hpid?: SortOrder
    duty_addr?: SortOrderInput | SortOrder
    duty_mapimg?: SortOrderInput | SortOrder
    duty_name?: SortOrder
    duty_tel1?: SortOrderInput | SortOrder
    duty_time1c?: SortOrderInput | SortOrder
    duty_time1s?: SortOrderInput | SortOrder
    duty_time2c?: SortOrderInput | SortOrder
    duty_time2s?: SortOrderInput | SortOrder
    duty_time3c?: SortOrderInput | SortOrder
    duty_time3s?: SortOrderInput | SortOrder
    duty_time4c?: SortOrderInput | SortOrder
    duty_time4s?: SortOrderInput | SortOrder
    duty_time5c?: SortOrderInput | SortOrder
    duty_time5s?: SortOrderInput | SortOrder
    duty_time6c?: SortOrderInput | SortOrder
    duty_time6s?: SortOrderInput | SortOrder
    duty_time7c?: SortOrderInput | SortOrder
    duty_time7s?: SortOrderInput | SortOrder
    post_cdn1?: SortOrderInput | SortOrder
    post_cdn2?: SortOrderInput | SortOrder
    wgs84_lat?: SortOrderInput | SortOrder
    wgs84_lon?: SortOrderInput | SortOrder
    _count?: pharmaciesCountOrderByAggregateInput
    _avg?: pharmaciesAvgOrderByAggregateInput
    _max?: pharmaciesMaxOrderByAggregateInput
    _min?: pharmaciesMinOrderByAggregateInput
    _sum?: pharmaciesSumOrderByAggregateInput
  }

  export type pharmaciesScalarWhereWithAggregatesInput = {
    AND?: pharmaciesScalarWhereWithAggregatesInput | pharmaciesScalarWhereWithAggregatesInput[]
    OR?: pharmaciesScalarWhereWithAggregatesInput[]
    NOT?: pharmaciesScalarWhereWithAggregatesInput | pharmaciesScalarWhereWithAggregatesInput[]
    hpid?: StringWithAggregatesFilter<"pharmacies"> | string
    duty_addr?: StringNullableWithAggregatesFilter<"pharmacies"> | string | null
    duty_mapimg?: StringNullableWithAggregatesFilter<"pharmacies"> | string | null
    duty_name?: StringWithAggregatesFilter<"pharmacies"> | string
    duty_tel1?: StringNullableWithAggregatesFilter<"pharmacies"> | string | null
    duty_time1c?: StringNullableWithAggregatesFilter<"pharmacies"> | string | null
    duty_time1s?: StringNullableWithAggregatesFilter<"pharmacies"> | string | null
    duty_time2c?: StringNullableWithAggregatesFilter<"pharmacies"> | string | null
    duty_time2s?: StringNullableWithAggregatesFilter<"pharmacies"> | string | null
    duty_time3c?: StringNullableWithAggregatesFilter<"pharmacies"> | string | null
    duty_time3s?: StringNullableWithAggregatesFilter<"pharmacies"> | string | null
    duty_time4c?: StringNullableWithAggregatesFilter<"pharmacies"> | string | null
    duty_time4s?: StringNullableWithAggregatesFilter<"pharmacies"> | string | null
    duty_time5c?: StringNullableWithAggregatesFilter<"pharmacies"> | string | null
    duty_time5s?: StringNullableWithAggregatesFilter<"pharmacies"> | string | null
    duty_time6c?: StringNullableWithAggregatesFilter<"pharmacies"> | string | null
    duty_time6s?: StringNullableWithAggregatesFilter<"pharmacies"> | string | null
    duty_time7c?: StringNullableWithAggregatesFilter<"pharmacies"> | string | null
    duty_time7s?: StringNullableWithAggregatesFilter<"pharmacies"> | string | null
    post_cdn1?: StringNullableWithAggregatesFilter<"pharmacies"> | string | null
    post_cdn2?: StringNullableWithAggregatesFilter<"pharmacies"> | string | null
    wgs84_lat?: DecimalNullableWithAggregatesFilter<"pharmacies"> | Decimal | DecimalJsLike | number | string | null
    wgs84_lon?: DecimalNullableWithAggregatesFilter<"pharmacies"> | Decimal | DecimalJsLike | number | string | null
  }

  export type post_tagsWhereInput = {
    AND?: post_tagsWhereInput | post_tagsWhereInput[]
    OR?: post_tagsWhereInput[]
    NOT?: post_tagsWhereInput | post_tagsWhereInput[]
    id?: IntFilter<"post_tags"> | number
    tagId?: IntFilter<"post_tags"> | number
    postId?: IntFilter<"post_tags"> | number
    posts?: XOR<PostsScalarRelationFilter, postsWhereInput>
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }

  export type post_tagsOrderByWithRelationInput = {
    id?: SortOrder
    tagId?: SortOrder
    postId?: SortOrder
    posts?: postsOrderByWithRelationInput
    tags?: tagsOrderByWithRelationInput
  }

  export type post_tagsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: post_tagsWhereInput | post_tagsWhereInput[]
    OR?: post_tagsWhereInput[]
    NOT?: post_tagsWhereInput | post_tagsWhereInput[]
    tagId?: IntFilter<"post_tags"> | number
    postId?: IntFilter<"post_tags"> | number
    posts?: XOR<PostsScalarRelationFilter, postsWhereInput>
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }, "id">

  export type post_tagsOrderByWithAggregationInput = {
    id?: SortOrder
    tagId?: SortOrder
    postId?: SortOrder
    _count?: post_tagsCountOrderByAggregateInput
    _avg?: post_tagsAvgOrderByAggregateInput
    _max?: post_tagsMaxOrderByAggregateInput
    _min?: post_tagsMinOrderByAggregateInput
    _sum?: post_tagsSumOrderByAggregateInput
  }

  export type post_tagsScalarWhereWithAggregatesInput = {
    AND?: post_tagsScalarWhereWithAggregatesInput | post_tagsScalarWhereWithAggregatesInput[]
    OR?: post_tagsScalarWhereWithAggregatesInput[]
    NOT?: post_tagsScalarWhereWithAggregatesInput | post_tagsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"post_tags"> | number
    tagId?: IntWithAggregatesFilter<"post_tags"> | number
    postId?: IntWithAggregatesFilter<"post_tags"> | number
  }

  export type postsWhereInput = {
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    id?: IntFilter<"posts"> | number
    title?: StringFilter<"posts"> | string
    content?: StringFilter<"posts"> | string
    created_at?: DateTimeFilter<"posts"> | Date | string
    updated_at?: DateTimeFilter<"posts"> | Date | string
    deleted_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    userId?: StringFilter<"posts"> | string
    comments?: CommentsListRelationFilter
    post_tags?: Post_tagsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type postsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    userId?: SortOrder
    comments?: commentsOrderByRelationAggregateInput
    post_tags?: post_tagsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type postsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    title?: StringFilter<"posts"> | string
    content?: StringFilter<"posts"> | string
    created_at?: DateTimeFilter<"posts"> | Date | string
    updated_at?: DateTimeFilter<"posts"> | Date | string
    deleted_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    userId?: StringFilter<"posts"> | string
    comments?: CommentsListRelationFilter
    post_tags?: Post_tagsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type postsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: postsCountOrderByAggregateInput
    _avg?: postsAvgOrderByAggregateInput
    _max?: postsMaxOrderByAggregateInput
    _min?: postsMinOrderByAggregateInput
    _sum?: postsSumOrderByAggregateInput
  }

  export type postsScalarWhereWithAggregatesInput = {
    AND?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    OR?: postsScalarWhereWithAggregatesInput[]
    NOT?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"posts"> | number
    title?: StringWithAggregatesFilter<"posts"> | string
    content?: StringWithAggregatesFilter<"posts"> | string
    created_at?: DateTimeWithAggregatesFilter<"posts"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"posts"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"posts"> | Date | string | null
    userId?: StringWithAggregatesFilter<"posts"> | string
  }

  export type qna_tagsWhereInput = {
    AND?: qna_tagsWhereInput | qna_tagsWhereInput[]
    OR?: qna_tagsWhereInput[]
    NOT?: qna_tagsWhereInput | qna_tagsWhereInput[]
    id?: IntFilter<"qna_tags"> | number
    tagId?: IntFilter<"qna_tags"> | number
    qnaId?: IntFilter<"qna_tags"> | number
    qnas?: XOR<QnasScalarRelationFilter, qnasWhereInput>
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }

  export type qna_tagsOrderByWithRelationInput = {
    id?: SortOrder
    tagId?: SortOrder
    qnaId?: SortOrder
    qnas?: qnasOrderByWithRelationInput
    tags?: tagsOrderByWithRelationInput
  }

  export type qna_tagsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: qna_tagsWhereInput | qna_tagsWhereInput[]
    OR?: qna_tagsWhereInput[]
    NOT?: qna_tagsWhereInput | qna_tagsWhereInput[]
    tagId?: IntFilter<"qna_tags"> | number
    qnaId?: IntFilter<"qna_tags"> | number
    qnas?: XOR<QnasScalarRelationFilter, qnasWhereInput>
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }, "id">

  export type qna_tagsOrderByWithAggregationInput = {
    id?: SortOrder
    tagId?: SortOrder
    qnaId?: SortOrder
    _count?: qna_tagsCountOrderByAggregateInput
    _avg?: qna_tagsAvgOrderByAggregateInput
    _max?: qna_tagsMaxOrderByAggregateInput
    _min?: qna_tagsMinOrderByAggregateInput
    _sum?: qna_tagsSumOrderByAggregateInput
  }

  export type qna_tagsScalarWhereWithAggregatesInput = {
    AND?: qna_tagsScalarWhereWithAggregatesInput | qna_tagsScalarWhereWithAggregatesInput[]
    OR?: qna_tagsScalarWhereWithAggregatesInput[]
    NOT?: qna_tagsScalarWhereWithAggregatesInput | qna_tagsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"qna_tags"> | number
    tagId?: IntWithAggregatesFilter<"qna_tags"> | number
    qnaId?: IntWithAggregatesFilter<"qna_tags"> | number
  }

  export type qnasWhereInput = {
    AND?: qnasWhereInput | qnasWhereInput[]
    OR?: qnasWhereInput[]
    NOT?: qnasWhereInput | qnasWhereInput[]
    id?: IntFilter<"qnas"> | number
    title?: StringFilter<"qnas"> | string
    content?: StringFilter<"qnas"> | string
    created_at?: DateTimeFilter<"qnas"> | Date | string
    updated_at?: DateTimeFilter<"qnas"> | Date | string
    deleted_at?: DateTimeNullableFilter<"qnas"> | Date | string | null
    userId?: StringFilter<"qnas"> | string
    answers?: AnswersListRelationFilter
    qna_tags?: Qna_tagsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type qnasOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    userId?: SortOrder
    answers?: answersOrderByRelationAggregateInput
    qna_tags?: qna_tagsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type qnasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: qnasWhereInput | qnasWhereInput[]
    OR?: qnasWhereInput[]
    NOT?: qnasWhereInput | qnasWhereInput[]
    title?: StringFilter<"qnas"> | string
    content?: StringFilter<"qnas"> | string
    created_at?: DateTimeFilter<"qnas"> | Date | string
    updated_at?: DateTimeFilter<"qnas"> | Date | string
    deleted_at?: DateTimeNullableFilter<"qnas"> | Date | string | null
    userId?: StringFilter<"qnas"> | string
    answers?: AnswersListRelationFilter
    qna_tags?: Qna_tagsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type qnasOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: qnasCountOrderByAggregateInput
    _avg?: qnasAvgOrderByAggregateInput
    _max?: qnasMaxOrderByAggregateInput
    _min?: qnasMinOrderByAggregateInput
    _sum?: qnasSumOrderByAggregateInput
  }

  export type qnasScalarWhereWithAggregatesInput = {
    AND?: qnasScalarWhereWithAggregatesInput | qnasScalarWhereWithAggregatesInput[]
    OR?: qnasScalarWhereWithAggregatesInput[]
    NOT?: qnasScalarWhereWithAggregatesInput | qnasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"qnas"> | number
    title?: StringWithAggregatesFilter<"qnas"> | string
    content?: StringWithAggregatesFilter<"qnas"> | string
    created_at?: DateTimeWithAggregatesFilter<"qnas"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"qnas"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"qnas"> | Date | string | null
    userId?: StringWithAggregatesFilter<"qnas"> | string
  }

  export type tagsWhereInput = {
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    id?: IntFilter<"tags"> | number
    tag_name?: StringFilter<"tags"> | string
    post_tags?: Post_tagsListRelationFilter
    qna_tags?: Qna_tagsListRelationFilter
  }

  export type tagsOrderByWithRelationInput = {
    id?: SortOrder
    tag_name?: SortOrder
    post_tags?: post_tagsOrderByRelationAggregateInput
    qna_tags?: qna_tagsOrderByRelationAggregateInput
  }

  export type tagsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    tag_name?: StringFilter<"tags"> | string
    post_tags?: Post_tagsListRelationFilter
    qna_tags?: Qna_tagsListRelationFilter
  }, "id">

  export type tagsOrderByWithAggregationInput = {
    id?: SortOrder
    tag_name?: SortOrder
    _count?: tagsCountOrderByAggregateInput
    _avg?: tagsAvgOrderByAggregateInput
    _max?: tagsMaxOrderByAggregateInput
    _min?: tagsMinOrderByAggregateInput
    _sum?: tagsSumOrderByAggregateInput
  }

  export type tagsScalarWhereWithAggregatesInput = {
    AND?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    OR?: tagsScalarWhereWithAggregatesInput[]
    NOT?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tags"> | number
    tag_name?: StringWithAggregatesFilter<"tags"> | string
  }

  export type user_healthsWhereInput = {
    AND?: user_healthsWhereInput | user_healthsWhereInput[]
    OR?: user_healthsWhereInput[]
    NOT?: user_healthsWhereInput | user_healthsWhereInput[]
    id?: IntFilter<"user_healths"> | number
    userId?: StringFilter<"user_healths"> | string
    healthId?: IntFilter<"user_healths"> | number
    healths?: XOR<HealthsScalarRelationFilter, healthsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_healthsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    healthId?: SortOrder
    healths?: healthsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type user_healthsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_healthsWhereInput | user_healthsWhereInput[]
    OR?: user_healthsWhereInput[]
    NOT?: user_healthsWhereInput | user_healthsWhereInput[]
    userId?: StringFilter<"user_healths"> | string
    healthId?: IntFilter<"user_healths"> | number
    healths?: XOR<HealthsScalarRelationFilter, healthsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type user_healthsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    healthId?: SortOrder
    _count?: user_healthsCountOrderByAggregateInput
    _avg?: user_healthsAvgOrderByAggregateInput
    _max?: user_healthsMaxOrderByAggregateInput
    _min?: user_healthsMinOrderByAggregateInput
    _sum?: user_healthsSumOrderByAggregateInput
  }

  export type user_healthsScalarWhereWithAggregatesInput = {
    AND?: user_healthsScalarWhereWithAggregatesInput | user_healthsScalarWhereWithAggregatesInput[]
    OR?: user_healthsScalarWhereWithAggregatesInput[]
    NOT?: user_healthsScalarWhereWithAggregatesInput | user_healthsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_healths"> | number
    userId?: StringWithAggregatesFilter<"user_healths"> | string
    healthId?: IntWithAggregatesFilter<"user_healths"> | number
  }

  export type user_medisWhereInput = {
    AND?: user_medisWhereInput | user_medisWhereInput[]
    OR?: user_medisWhereInput[]
    NOT?: user_medisWhereInput | user_medisWhereInput[]
    id?: IntFilter<"user_medis"> | number
    start_date?: DateTimeNullableFilter<"user_medis"> | Date | string | null
    end_date?: DateTimeNullableFilter<"user_medis"> | Date | string | null
    userId?: StringFilter<"user_medis"> | string
    itemSeq?: StringFilter<"user_medis"> | string
    medi_times?: Medi_timesListRelationFilter
    medicines?: XOR<MedicinesScalarRelationFilter, medicinesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_medisOrderByWithRelationInput = {
    id?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    userId?: SortOrder
    itemSeq?: SortOrder
    medi_times?: medi_timesOrderByRelationAggregateInput
    medicines?: medicinesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type user_medisWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_medisWhereInput | user_medisWhereInput[]
    OR?: user_medisWhereInput[]
    NOT?: user_medisWhereInput | user_medisWhereInput[]
    start_date?: DateTimeNullableFilter<"user_medis"> | Date | string | null
    end_date?: DateTimeNullableFilter<"user_medis"> | Date | string | null
    userId?: StringFilter<"user_medis"> | string
    itemSeq?: StringFilter<"user_medis"> | string
    medi_times?: Medi_timesListRelationFilter
    medicines?: XOR<MedicinesScalarRelationFilter, medicinesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type user_medisOrderByWithAggregationInput = {
    id?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    userId?: SortOrder
    itemSeq?: SortOrder
    _count?: user_medisCountOrderByAggregateInput
    _avg?: user_medisAvgOrderByAggregateInput
    _max?: user_medisMaxOrderByAggregateInput
    _min?: user_medisMinOrderByAggregateInput
    _sum?: user_medisSumOrderByAggregateInput
  }

  export type user_medisScalarWhereWithAggregatesInput = {
    AND?: user_medisScalarWhereWithAggregatesInput | user_medisScalarWhereWithAggregatesInput[]
    OR?: user_medisScalarWhereWithAggregatesInput[]
    NOT?: user_medisScalarWhereWithAggregatesInput | user_medisScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_medis"> | number
    start_date?: DateTimeNullableWithAggregatesFilter<"user_medis"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"user_medis"> | Date | string | null
    userId?: StringWithAggregatesFilter<"user_medis"> | string
    itemSeq?: StringWithAggregatesFilter<"user_medis"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    email?: StringNullableFilter<"users"> | string | null
    photo?: StringNullableFilter<"users"> | string | null
    name?: StringNullableFilter<"users"> | string | null
    birthyear?: IntNullableFilter<"users"> | number | null
    gender?: StringNullableFilter<"users"> | string | null
    member_type?: IntFilter<"users"> | number
    created_at?: DateTimeFilter<"users"> | Date | string
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    hpid?: StringNullableFilter<"users"> | string | null
    answers?: AnswersListRelationFilter
    comments?: CommentsListRelationFilter
    posts?: PostsListRelationFilter
    qnas?: QnasListRelationFilter
    user_healths?: User_healthsListRelationFilter
    user_medis?: User_medisListRelationFilter
    pharmacies?: XOR<PharmaciesNullableScalarRelationFilter, pharmaciesWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    birthyear?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    member_type?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    hpid?: SortOrderInput | SortOrder
    answers?: answersOrderByRelationAggregateInput
    comments?: commentsOrderByRelationAggregateInput
    posts?: postsOrderByRelationAggregateInput
    qnas?: qnasOrderByRelationAggregateInput
    user_healths?: user_healthsOrderByRelationAggregateInput
    user_medis?: user_medisOrderByRelationAggregateInput
    pharmacies?: pharmaciesOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    email?: StringNullableFilter<"users"> | string | null
    photo?: StringNullableFilter<"users"> | string | null
    name?: StringNullableFilter<"users"> | string | null
    birthyear?: IntNullableFilter<"users"> | number | null
    gender?: StringNullableFilter<"users"> | string | null
    member_type?: IntFilter<"users"> | number
    created_at?: DateTimeFilter<"users"> | Date | string
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    hpid?: StringNullableFilter<"users"> | string | null
    answers?: AnswersListRelationFilter
    comments?: CommentsListRelationFilter
    posts?: PostsListRelationFilter
    qnas?: QnasListRelationFilter
    user_healths?: User_healthsListRelationFilter
    user_medis?: User_medisListRelationFilter
    pharmacies?: XOR<PharmaciesNullableScalarRelationFilter, pharmaciesWhereInput> | null
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    birthyear?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    member_type?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    hpid?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    photo?: StringNullableWithAggregatesFilter<"users"> | string | null
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    birthyear?: IntNullableWithAggregatesFilter<"users"> | number | null
    gender?: StringNullableWithAggregatesFilter<"users"> | string | null
    member_type?: IntWithAggregatesFilter<"users"> | number
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    hpid?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type answersCreateInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_accepted?: boolean
    qnas: qnasCreateNestedOneWithoutAnswersInput
    users: usersCreateNestedOneWithoutAnswersInput
  }

  export type answersUncheckedCreateInput = {
    id?: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_accepted?: boolean
    userId: string
    qnaId: number
  }

  export type answersUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    qnas?: qnasUpdateOneRequiredWithoutAnswersNestedInput
    users?: usersUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type answersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    qnaId?: IntFieldUpdateOperationsInput | number
  }

  export type answersCreateManyInput = {
    id?: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_accepted?: boolean
    userId: string
    qnaId: number
  }

  export type answersUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type answersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    qnaId?: IntFieldUpdateOperationsInput | number
  }

  export type commentsCreateInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    posts: postsCreateNestedOneWithoutCommentsInput
    users: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateInput = {
    id?: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    userId: string
    postId: number
  }

  export type commentsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUpdateOneRequiredWithoutCommentsNestedInput
    users?: usersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type commentsCreateManyInput = {
    id?: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    userId: string
    postId: number
  }

  export type commentsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type healthsCreateInput = {
    health_name: string
    user_healths?: user_healthsCreateNestedManyWithoutHealthsInput
  }

  export type healthsUncheckedCreateInput = {
    id?: number
    health_name: string
    user_healths?: user_healthsUncheckedCreateNestedManyWithoutHealthsInput
  }

  export type healthsUpdateInput = {
    health_name?: StringFieldUpdateOperationsInput | string
    user_healths?: user_healthsUpdateManyWithoutHealthsNestedInput
  }

  export type healthsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    health_name?: StringFieldUpdateOperationsInput | string
    user_healths?: user_healthsUncheckedUpdateManyWithoutHealthsNestedInput
  }

  export type healthsCreateManyInput = {
    id?: number
    health_name: string
  }

  export type healthsUpdateManyMutationInput = {
    health_name?: StringFieldUpdateOperationsInput | string
  }

  export type healthsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    health_name?: StringFieldUpdateOperationsInput | string
  }

  export type inventoriesCreateInput = {
    quantity: number
    pharmacies: pharmaciesCreateNestedOneWithoutInventoriesInput
    medicines: medicinesCreateNestedOneWithoutInventoriesInput
  }

  export type inventoriesUncheckedCreateInput = {
    id?: number
    quantity: number
    itemSeq: string
    hpid: string
  }

  export type inventoriesUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    pharmacies?: pharmaciesUpdateOneRequiredWithoutInventoriesNestedInput
    medicines?: medicinesUpdateOneRequiredWithoutInventoriesNestedInput
  }

  export type inventoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    itemSeq?: StringFieldUpdateOperationsInput | string
    hpid?: StringFieldUpdateOperationsInput | string
  }

  export type inventoriesCreateManyInput = {
    id?: number
    quantity: number
    itemSeq: string
    hpid: string
  }

  export type inventoriesUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type inventoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    itemSeq?: StringFieldUpdateOperationsInput | string
    hpid?: StringFieldUpdateOperationsInput | string
  }

  export type medi_timesCreateInput = {
    medi_time: number
    user_medis: user_medisCreateNestedOneWithoutMedi_timesInput
  }

  export type medi_timesUncheckedCreateInput = {
    id?: number
    medi_time: number
    userMediId: number
  }

  export type medi_timesUpdateInput = {
    medi_time?: IntFieldUpdateOperationsInput | number
    user_medis?: user_medisUpdateOneRequiredWithoutMedi_timesNestedInput
  }

  export type medi_timesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    medi_time?: IntFieldUpdateOperationsInput | number
    userMediId?: IntFieldUpdateOperationsInput | number
  }

  export type medi_timesCreateManyInput = {
    id?: number
    medi_time: number
    userMediId: number
  }

  export type medi_timesUpdateManyMutationInput = {
    medi_time?: IntFieldUpdateOperationsInput | number
  }

  export type medi_timesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    medi_time?: IntFieldUpdateOperationsInput | number
    userMediId?: IntFieldUpdateOperationsInput | number
  }

  export type medicinesCreateInput = {
    item_seq: string
    item_name: string
    entp_name?: string | null
    item_permit_date?: Date | string | null
    etc_otc_code?: string | null
    class_no?: string | null
    chart?: string | null
    bar_code?: string | null
    material_name?: string | null
    ee_doc_id?: string | null
    inventories?: inventoriesCreateNestedManyWithoutMedicinesInput
    user_medis?: user_medisCreateNestedManyWithoutMedicinesInput
  }

  export type medicinesUncheckedCreateInput = {
    item_seq: string
    item_name: string
    entp_name?: string | null
    item_permit_date?: Date | string | null
    etc_otc_code?: string | null
    class_no?: string | null
    chart?: string | null
    bar_code?: string | null
    material_name?: string | null
    ee_doc_id?: string | null
    inventories?: inventoriesUncheckedCreateNestedManyWithoutMedicinesInput
    user_medis?: user_medisUncheckedCreateNestedManyWithoutMedicinesInput
  }

  export type medicinesUpdateInput = {
    item_seq?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    entp_name?: NullableStringFieldUpdateOperationsInput | string | null
    item_permit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    etc_otc_code?: NullableStringFieldUpdateOperationsInput | string | null
    class_no?: NullableStringFieldUpdateOperationsInput | string | null
    chart?: NullableStringFieldUpdateOperationsInput | string | null
    bar_code?: NullableStringFieldUpdateOperationsInput | string | null
    material_name?: NullableStringFieldUpdateOperationsInput | string | null
    ee_doc_id?: NullableStringFieldUpdateOperationsInput | string | null
    inventories?: inventoriesUpdateManyWithoutMedicinesNestedInput
    user_medis?: user_medisUpdateManyWithoutMedicinesNestedInput
  }

  export type medicinesUncheckedUpdateInput = {
    item_seq?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    entp_name?: NullableStringFieldUpdateOperationsInput | string | null
    item_permit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    etc_otc_code?: NullableStringFieldUpdateOperationsInput | string | null
    class_no?: NullableStringFieldUpdateOperationsInput | string | null
    chart?: NullableStringFieldUpdateOperationsInput | string | null
    bar_code?: NullableStringFieldUpdateOperationsInput | string | null
    material_name?: NullableStringFieldUpdateOperationsInput | string | null
    ee_doc_id?: NullableStringFieldUpdateOperationsInput | string | null
    inventories?: inventoriesUncheckedUpdateManyWithoutMedicinesNestedInput
    user_medis?: user_medisUncheckedUpdateManyWithoutMedicinesNestedInput
  }

  export type medicinesCreateManyInput = {
    item_seq: string
    item_name: string
    entp_name?: string | null
    item_permit_date?: Date | string | null
    etc_otc_code?: string | null
    class_no?: string | null
    chart?: string | null
    bar_code?: string | null
    material_name?: string | null
    ee_doc_id?: string | null
  }

  export type medicinesUpdateManyMutationInput = {
    item_seq?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    entp_name?: NullableStringFieldUpdateOperationsInput | string | null
    item_permit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    etc_otc_code?: NullableStringFieldUpdateOperationsInput | string | null
    class_no?: NullableStringFieldUpdateOperationsInput | string | null
    chart?: NullableStringFieldUpdateOperationsInput | string | null
    bar_code?: NullableStringFieldUpdateOperationsInput | string | null
    material_name?: NullableStringFieldUpdateOperationsInput | string | null
    ee_doc_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type medicinesUncheckedUpdateManyInput = {
    item_seq?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    entp_name?: NullableStringFieldUpdateOperationsInput | string | null
    item_permit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    etc_otc_code?: NullableStringFieldUpdateOperationsInput | string | null
    class_no?: NullableStringFieldUpdateOperationsInput | string | null
    chart?: NullableStringFieldUpdateOperationsInput | string | null
    bar_code?: NullableStringFieldUpdateOperationsInput | string | null
    material_name?: NullableStringFieldUpdateOperationsInput | string | null
    ee_doc_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pharmaciesCreateInput = {
    hpid: string
    duty_addr?: string | null
    duty_mapimg?: string | null
    duty_name: string
    duty_tel1?: string | null
    duty_time1c?: string | null
    duty_time1s?: string | null
    duty_time2c?: string | null
    duty_time2s?: string | null
    duty_time3c?: string | null
    duty_time3s?: string | null
    duty_time4c?: string | null
    duty_time4s?: string | null
    duty_time5c?: string | null
    duty_time5s?: string | null
    duty_time6c?: string | null
    duty_time6s?: string | null
    duty_time7c?: string | null
    duty_time7s?: string | null
    post_cdn1?: string | null
    post_cdn2?: string | null
    wgs84_lat?: Decimal | DecimalJsLike | number | string | null
    wgs84_lon?: Decimal | DecimalJsLike | number | string | null
    inventories?: inventoriesCreateNestedManyWithoutPharmaciesInput
    users?: usersCreateNestedManyWithoutPharmaciesInput
  }

  export type pharmaciesUncheckedCreateInput = {
    hpid: string
    duty_addr?: string | null
    duty_mapimg?: string | null
    duty_name: string
    duty_tel1?: string | null
    duty_time1c?: string | null
    duty_time1s?: string | null
    duty_time2c?: string | null
    duty_time2s?: string | null
    duty_time3c?: string | null
    duty_time3s?: string | null
    duty_time4c?: string | null
    duty_time4s?: string | null
    duty_time5c?: string | null
    duty_time5s?: string | null
    duty_time6c?: string | null
    duty_time6s?: string | null
    duty_time7c?: string | null
    duty_time7s?: string | null
    post_cdn1?: string | null
    post_cdn2?: string | null
    wgs84_lat?: Decimal | DecimalJsLike | number | string | null
    wgs84_lon?: Decimal | DecimalJsLike | number | string | null
    inventories?: inventoriesUncheckedCreateNestedManyWithoutPharmaciesInput
    users?: usersUncheckedCreateNestedManyWithoutPharmaciesInput
  }

  export type pharmaciesUpdateInput = {
    hpid?: StringFieldUpdateOperationsInput | string
    duty_addr?: NullableStringFieldUpdateOperationsInput | string | null
    duty_mapimg?: NullableStringFieldUpdateOperationsInput | string | null
    duty_name?: StringFieldUpdateOperationsInput | string
    duty_tel1?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time1c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time1s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time2c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time2s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time3c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time3s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time4c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time4s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time5c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time5s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time6c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time6s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time7c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time7s?: NullableStringFieldUpdateOperationsInput | string | null
    post_cdn1?: NullableStringFieldUpdateOperationsInput | string | null
    post_cdn2?: NullableStringFieldUpdateOperationsInput | string | null
    wgs84_lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgs84_lon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    inventories?: inventoriesUpdateManyWithoutPharmaciesNestedInput
    users?: usersUpdateManyWithoutPharmaciesNestedInput
  }

  export type pharmaciesUncheckedUpdateInput = {
    hpid?: StringFieldUpdateOperationsInput | string
    duty_addr?: NullableStringFieldUpdateOperationsInput | string | null
    duty_mapimg?: NullableStringFieldUpdateOperationsInput | string | null
    duty_name?: StringFieldUpdateOperationsInput | string
    duty_tel1?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time1c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time1s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time2c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time2s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time3c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time3s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time4c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time4s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time5c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time5s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time6c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time6s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time7c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time7s?: NullableStringFieldUpdateOperationsInput | string | null
    post_cdn1?: NullableStringFieldUpdateOperationsInput | string | null
    post_cdn2?: NullableStringFieldUpdateOperationsInput | string | null
    wgs84_lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgs84_lon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    inventories?: inventoriesUncheckedUpdateManyWithoutPharmaciesNestedInput
    users?: usersUncheckedUpdateManyWithoutPharmaciesNestedInput
  }

  export type pharmaciesCreateManyInput = {
    hpid: string
    duty_addr?: string | null
    duty_mapimg?: string | null
    duty_name: string
    duty_tel1?: string | null
    duty_time1c?: string | null
    duty_time1s?: string | null
    duty_time2c?: string | null
    duty_time2s?: string | null
    duty_time3c?: string | null
    duty_time3s?: string | null
    duty_time4c?: string | null
    duty_time4s?: string | null
    duty_time5c?: string | null
    duty_time5s?: string | null
    duty_time6c?: string | null
    duty_time6s?: string | null
    duty_time7c?: string | null
    duty_time7s?: string | null
    post_cdn1?: string | null
    post_cdn2?: string | null
    wgs84_lat?: Decimal | DecimalJsLike | number | string | null
    wgs84_lon?: Decimal | DecimalJsLike | number | string | null
  }

  export type pharmaciesUpdateManyMutationInput = {
    hpid?: StringFieldUpdateOperationsInput | string
    duty_addr?: NullableStringFieldUpdateOperationsInput | string | null
    duty_mapimg?: NullableStringFieldUpdateOperationsInput | string | null
    duty_name?: StringFieldUpdateOperationsInput | string
    duty_tel1?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time1c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time1s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time2c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time2s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time3c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time3s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time4c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time4s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time5c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time5s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time6c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time6s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time7c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time7s?: NullableStringFieldUpdateOperationsInput | string | null
    post_cdn1?: NullableStringFieldUpdateOperationsInput | string | null
    post_cdn2?: NullableStringFieldUpdateOperationsInput | string | null
    wgs84_lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgs84_lon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type pharmaciesUncheckedUpdateManyInput = {
    hpid?: StringFieldUpdateOperationsInput | string
    duty_addr?: NullableStringFieldUpdateOperationsInput | string | null
    duty_mapimg?: NullableStringFieldUpdateOperationsInput | string | null
    duty_name?: StringFieldUpdateOperationsInput | string
    duty_tel1?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time1c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time1s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time2c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time2s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time3c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time3s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time4c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time4s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time5c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time5s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time6c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time6s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time7c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time7s?: NullableStringFieldUpdateOperationsInput | string | null
    post_cdn1?: NullableStringFieldUpdateOperationsInput | string | null
    post_cdn2?: NullableStringFieldUpdateOperationsInput | string | null
    wgs84_lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgs84_lon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type post_tagsCreateInput = {
    posts: postsCreateNestedOneWithoutPost_tagsInput
    tags: tagsCreateNestedOneWithoutPost_tagsInput
  }

  export type post_tagsUncheckedCreateInput = {
    id?: number
    tagId: number
    postId: number
  }

  export type post_tagsUpdateInput = {
    posts?: postsUpdateOneRequiredWithoutPost_tagsNestedInput
    tags?: tagsUpdateOneRequiredWithoutPost_tagsNestedInput
  }

  export type post_tagsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type post_tagsCreateManyInput = {
    id?: number
    tagId: number
    postId: number
  }

  export type post_tagsUpdateManyMutationInput = {

  }

  export type post_tagsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type postsCreateInput = {
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    comments?: commentsCreateNestedManyWithoutPostsInput
    post_tags?: post_tagsCreateNestedManyWithoutPostsInput
    users: usersCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    userId: string
    comments?: commentsUncheckedCreateNestedManyWithoutPostsInput
    post_tags?: post_tagsUncheckedCreateNestedManyWithoutPostsInput
  }

  export type postsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutPostsNestedInput
    post_tags?: post_tagsUpdateManyWithoutPostsNestedInput
    users?: usersUpdateOneRequiredWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    comments?: commentsUncheckedUpdateManyWithoutPostsNestedInput
    post_tags?: post_tagsUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type postsCreateManyInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    userId: string
  }

  export type postsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type qna_tagsCreateInput = {
    qnas: qnasCreateNestedOneWithoutQna_tagsInput
    tags: tagsCreateNestedOneWithoutQna_tagsInput
  }

  export type qna_tagsUncheckedCreateInput = {
    id?: number
    tagId: number
    qnaId: number
  }

  export type qna_tagsUpdateInput = {
    qnas?: qnasUpdateOneRequiredWithoutQna_tagsNestedInput
    tags?: tagsUpdateOneRequiredWithoutQna_tagsNestedInput
  }

  export type qna_tagsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    qnaId?: IntFieldUpdateOperationsInput | number
  }

  export type qna_tagsCreateManyInput = {
    id?: number
    tagId: number
    qnaId: number
  }

  export type qna_tagsUpdateManyMutationInput = {

  }

  export type qna_tagsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    qnaId?: IntFieldUpdateOperationsInput | number
  }

  export type qnasCreateInput = {
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutQnasInput
    qna_tags?: qna_tagsCreateNestedManyWithoutQnasInput
    users: usersCreateNestedOneWithoutQnasInput
  }

  export type qnasUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    userId: string
    answers?: answersUncheckedCreateNestedManyWithoutQnasInput
    qna_tags?: qna_tagsUncheckedCreateNestedManyWithoutQnasInput
  }

  export type qnasUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutQnasNestedInput
    qna_tags?: qna_tagsUpdateManyWithoutQnasNestedInput
    users?: usersUpdateOneRequiredWithoutQnasNestedInput
  }

  export type qnasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    answers?: answersUncheckedUpdateManyWithoutQnasNestedInput
    qna_tags?: qna_tagsUncheckedUpdateManyWithoutQnasNestedInput
  }

  export type qnasCreateManyInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    userId: string
  }

  export type qnasUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type qnasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type tagsCreateInput = {
    tag_name: string
    post_tags?: post_tagsCreateNestedManyWithoutTagsInput
    qna_tags?: qna_tagsCreateNestedManyWithoutTagsInput
  }

  export type tagsUncheckedCreateInput = {
    id?: number
    tag_name: string
    post_tags?: post_tagsUncheckedCreateNestedManyWithoutTagsInput
    qna_tags?: qna_tagsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type tagsUpdateInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    post_tags?: post_tagsUpdateManyWithoutTagsNestedInput
    qna_tags?: qna_tagsUpdateManyWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    post_tags?: post_tagsUncheckedUpdateManyWithoutTagsNestedInput
    qna_tags?: qna_tagsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type tagsCreateManyInput = {
    id?: number
    tag_name: string
  }

  export type tagsUpdateManyMutationInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
  }

  export type tagsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
  }

  export type user_healthsCreateInput = {
    healths: healthsCreateNestedOneWithoutUser_healthsInput
    users: usersCreateNestedOneWithoutUser_healthsInput
  }

  export type user_healthsUncheckedCreateInput = {
    id?: number
    userId: string
    healthId: number
  }

  export type user_healthsUpdateInput = {
    healths?: healthsUpdateOneRequiredWithoutUser_healthsNestedInput
    users?: usersUpdateOneRequiredWithoutUser_healthsNestedInput
  }

  export type user_healthsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    healthId?: IntFieldUpdateOperationsInput | number
  }

  export type user_healthsCreateManyInput = {
    id?: number
    userId: string
    healthId: number
  }

  export type user_healthsUpdateManyMutationInput = {

  }

  export type user_healthsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    healthId?: IntFieldUpdateOperationsInput | number
  }

  export type user_medisCreateInput = {
    start_date?: Date | string | null
    end_date?: Date | string | null
    medi_times?: medi_timesCreateNestedManyWithoutUser_medisInput
    medicines: medicinesCreateNestedOneWithoutUser_medisInput
    users: usersCreateNestedOneWithoutUser_medisInput
  }

  export type user_medisUncheckedCreateInput = {
    id?: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    userId: string
    itemSeq: string
    medi_times?: medi_timesUncheckedCreateNestedManyWithoutUser_medisInput
  }

  export type user_medisUpdateInput = {
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medi_times?: medi_timesUpdateManyWithoutUser_medisNestedInput
    medicines?: medicinesUpdateOneRequiredWithoutUser_medisNestedInput
    users?: usersUpdateOneRequiredWithoutUser_medisNestedInput
  }

  export type user_medisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    itemSeq?: StringFieldUpdateOperationsInput | string
    medi_times?: medi_timesUncheckedUpdateManyWithoutUser_medisNestedInput
  }

  export type user_medisCreateManyInput = {
    id?: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    userId: string
    itemSeq: string
  }

  export type user_medisUpdateManyMutationInput = {
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_medisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    itemSeq?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    id: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    member_type: number
    created_at?: Date | string
    deleted_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUsersInput
    posts?: postsCreateNestedManyWithoutUsersInput
    qnas?: qnasCreateNestedManyWithoutUsersInput
    user_healths?: user_healthsCreateNestedManyWithoutUsersInput
    user_medis?: user_medisCreateNestedManyWithoutUsersInput
    pharmacies?: pharmaciesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    member_type: number
    created_at?: Date | string
    deleted_at?: Date | string | null
    hpid?: string | null
    answers?: answersUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    qnas?: qnasUncheckedCreateNestedManyWithoutUsersInput
    user_healths?: user_healthsUncheckedCreateNestedManyWithoutUsersInput
    user_medis?: user_medisUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUsersNestedInput
    posts?: postsUpdateManyWithoutUsersNestedInput
    qnas?: qnasUpdateManyWithoutUsersNestedInput
    user_healths?: user_healthsUpdateManyWithoutUsersNestedInput
    user_medis?: user_medisUpdateManyWithoutUsersNestedInput
    pharmacies?: pharmaciesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hpid?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: answersUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
    qnas?: qnasUncheckedUpdateManyWithoutUsersNestedInput
    user_healths?: user_healthsUncheckedUpdateManyWithoutUsersNestedInput
    user_medis?: user_medisUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    member_type: number
    created_at?: Date | string
    deleted_at?: Date | string | null
    hpid?: string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hpid?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QnasScalarRelationFilter = {
    is?: qnasWhereInput
    isNot?: qnasWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type answersCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_accepted?: SortOrder
    userId?: SortOrder
    qnaId?: SortOrder
  }

  export type answersAvgOrderByAggregateInput = {
    id?: SortOrder
    qnaId?: SortOrder
  }

  export type answersMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_accepted?: SortOrder
    userId?: SortOrder
    qnaId?: SortOrder
  }

  export type answersMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_accepted?: SortOrder
    userId?: SortOrder
    qnaId?: SortOrder
  }

  export type answersSumOrderByAggregateInput = {
    id?: SortOrder
    qnaId?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PostsScalarRelationFilter = {
    is?: postsWhereInput
    isNot?: postsWhereInput
  }

  export type commentsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type commentsAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type commentsSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type User_healthsListRelationFilter = {
    every?: user_healthsWhereInput
    some?: user_healthsWhereInput
    none?: user_healthsWhereInput
  }

  export type user_healthsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type healthsCountOrderByAggregateInput = {
    id?: SortOrder
    health_name?: SortOrder
  }

  export type healthsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type healthsMaxOrderByAggregateInput = {
    id?: SortOrder
    health_name?: SortOrder
  }

  export type healthsMinOrderByAggregateInput = {
    id?: SortOrder
    health_name?: SortOrder
  }

  export type healthsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PharmaciesScalarRelationFilter = {
    is?: pharmaciesWhereInput
    isNot?: pharmaciesWhereInput
  }

  export type MedicinesScalarRelationFilter = {
    is?: medicinesWhereInput
    isNot?: medicinesWhereInput
  }

  export type inventoriesCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    itemSeq?: SortOrder
    hpid?: SortOrder
  }

  export type inventoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type inventoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    itemSeq?: SortOrder
    hpid?: SortOrder
  }

  export type inventoriesMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    itemSeq?: SortOrder
    hpid?: SortOrder
  }

  export type inventoriesSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type User_medisScalarRelationFilter = {
    is?: user_medisWhereInput
    isNot?: user_medisWhereInput
  }

  export type medi_timesCountOrderByAggregateInput = {
    id?: SortOrder
    medi_time?: SortOrder
    userMediId?: SortOrder
  }

  export type medi_timesAvgOrderByAggregateInput = {
    id?: SortOrder
    medi_time?: SortOrder
    userMediId?: SortOrder
  }

  export type medi_timesMaxOrderByAggregateInput = {
    id?: SortOrder
    medi_time?: SortOrder
    userMediId?: SortOrder
  }

  export type medi_timesMinOrderByAggregateInput = {
    id?: SortOrder
    medi_time?: SortOrder
    userMediId?: SortOrder
  }

  export type medi_timesSumOrderByAggregateInput = {
    id?: SortOrder
    medi_time?: SortOrder
    userMediId?: SortOrder
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

  export type InventoriesListRelationFilter = {
    every?: inventoriesWhereInput
    some?: inventoriesWhereInput
    none?: inventoriesWhereInput
  }

  export type User_medisListRelationFilter = {
    every?: user_medisWhereInput
    some?: user_medisWhereInput
    none?: user_medisWhereInput
  }

  export type inventoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_medisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type medicinesCountOrderByAggregateInput = {
    item_seq?: SortOrder
    item_name?: SortOrder
    entp_name?: SortOrder
    item_permit_date?: SortOrder
    etc_otc_code?: SortOrder
    class_no?: SortOrder
    chart?: SortOrder
    bar_code?: SortOrder
    material_name?: SortOrder
    ee_doc_id?: SortOrder
  }

  export type medicinesMaxOrderByAggregateInput = {
    item_seq?: SortOrder
    item_name?: SortOrder
    entp_name?: SortOrder
    item_permit_date?: SortOrder
    etc_otc_code?: SortOrder
    class_no?: SortOrder
    chart?: SortOrder
    bar_code?: SortOrder
    material_name?: SortOrder
    ee_doc_id?: SortOrder
  }

  export type medicinesMinOrderByAggregateInput = {
    item_seq?: SortOrder
    item_name?: SortOrder
    entp_name?: SortOrder
    item_permit_date?: SortOrder
    etc_otc_code?: SortOrder
    class_no?: SortOrder
    chart?: SortOrder
    bar_code?: SortOrder
    material_name?: SortOrder
    ee_doc_id?: SortOrder
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pharmaciesCountOrderByAggregateInput = {
    hpid?: SortOrder
    duty_addr?: SortOrder
    duty_mapimg?: SortOrder
    duty_name?: SortOrder
    duty_tel1?: SortOrder
    duty_time1c?: SortOrder
    duty_time1s?: SortOrder
    duty_time2c?: SortOrder
    duty_time2s?: SortOrder
    duty_time3c?: SortOrder
    duty_time3s?: SortOrder
    duty_time4c?: SortOrder
    duty_time4s?: SortOrder
    duty_time5c?: SortOrder
    duty_time5s?: SortOrder
    duty_time6c?: SortOrder
    duty_time6s?: SortOrder
    duty_time7c?: SortOrder
    duty_time7s?: SortOrder
    post_cdn1?: SortOrder
    post_cdn2?: SortOrder
    wgs84_lat?: SortOrder
    wgs84_lon?: SortOrder
  }

  export type pharmaciesAvgOrderByAggregateInput = {
    wgs84_lat?: SortOrder
    wgs84_lon?: SortOrder
  }

  export type pharmaciesMaxOrderByAggregateInput = {
    hpid?: SortOrder
    duty_addr?: SortOrder
    duty_mapimg?: SortOrder
    duty_name?: SortOrder
    duty_tel1?: SortOrder
    duty_time1c?: SortOrder
    duty_time1s?: SortOrder
    duty_time2c?: SortOrder
    duty_time2s?: SortOrder
    duty_time3c?: SortOrder
    duty_time3s?: SortOrder
    duty_time4c?: SortOrder
    duty_time4s?: SortOrder
    duty_time5c?: SortOrder
    duty_time5s?: SortOrder
    duty_time6c?: SortOrder
    duty_time6s?: SortOrder
    duty_time7c?: SortOrder
    duty_time7s?: SortOrder
    post_cdn1?: SortOrder
    post_cdn2?: SortOrder
    wgs84_lat?: SortOrder
    wgs84_lon?: SortOrder
  }

  export type pharmaciesMinOrderByAggregateInput = {
    hpid?: SortOrder
    duty_addr?: SortOrder
    duty_mapimg?: SortOrder
    duty_name?: SortOrder
    duty_tel1?: SortOrder
    duty_time1c?: SortOrder
    duty_time1s?: SortOrder
    duty_time2c?: SortOrder
    duty_time2s?: SortOrder
    duty_time3c?: SortOrder
    duty_time3s?: SortOrder
    duty_time4c?: SortOrder
    duty_time4s?: SortOrder
    duty_time5c?: SortOrder
    duty_time5s?: SortOrder
    duty_time6c?: SortOrder
    duty_time6s?: SortOrder
    duty_time7c?: SortOrder
    duty_time7s?: SortOrder
    post_cdn1?: SortOrder
    post_cdn2?: SortOrder
    wgs84_lat?: SortOrder
    wgs84_lon?: SortOrder
  }

  export type pharmaciesSumOrderByAggregateInput = {
    wgs84_lat?: SortOrder
    wgs84_lon?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type TagsScalarRelationFilter = {
    is?: tagsWhereInput
    isNot?: tagsWhereInput
  }

  export type post_tagsCountOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    postId?: SortOrder
  }

  export type post_tagsAvgOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    postId?: SortOrder
  }

  export type post_tagsMaxOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    postId?: SortOrder
  }

  export type post_tagsMinOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    postId?: SortOrder
  }

  export type post_tagsSumOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    postId?: SortOrder
  }

  export type CommentsListRelationFilter = {
    every?: commentsWhereInput
    some?: commentsWhereInput
    none?: commentsWhereInput
  }

  export type Post_tagsListRelationFilter = {
    every?: post_tagsWhereInput
    some?: post_tagsWhereInput
    none?: post_tagsWhereInput
  }

  export type commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type post_tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    userId?: SortOrder
  }

  export type postsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type postsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    userId?: SortOrder
  }

  export type postsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    userId?: SortOrder
  }

  export type postsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type qna_tagsCountOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    qnaId?: SortOrder
  }

  export type qna_tagsAvgOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    qnaId?: SortOrder
  }

  export type qna_tagsMaxOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    qnaId?: SortOrder
  }

  export type qna_tagsMinOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    qnaId?: SortOrder
  }

  export type qna_tagsSumOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    qnaId?: SortOrder
  }

  export type AnswersListRelationFilter = {
    every?: answersWhereInput
    some?: answersWhereInput
    none?: answersWhereInput
  }

  export type Qna_tagsListRelationFilter = {
    every?: qna_tagsWhereInput
    some?: qna_tagsWhereInput
    none?: qna_tagsWhereInput
  }

  export type answersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type qna_tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type qnasCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    userId?: SortOrder
  }

  export type qnasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type qnasMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    userId?: SortOrder
  }

  export type qnasMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    userId?: SortOrder
  }

  export type qnasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tagsCountOrderByAggregateInput = {
    id?: SortOrder
    tag_name?: SortOrder
  }

  export type tagsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tagsMaxOrderByAggregateInput = {
    id?: SortOrder
    tag_name?: SortOrder
  }

  export type tagsMinOrderByAggregateInput = {
    id?: SortOrder
    tag_name?: SortOrder
  }

  export type tagsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HealthsScalarRelationFilter = {
    is?: healthsWhereInput
    isNot?: healthsWhereInput
  }

  export type user_healthsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    healthId?: SortOrder
  }

  export type user_healthsAvgOrderByAggregateInput = {
    id?: SortOrder
    healthId?: SortOrder
  }

  export type user_healthsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    healthId?: SortOrder
  }

  export type user_healthsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    healthId?: SortOrder
  }

  export type user_healthsSumOrderByAggregateInput = {
    id?: SortOrder
    healthId?: SortOrder
  }

  export type Medi_timesListRelationFilter = {
    every?: medi_timesWhereInput
    some?: medi_timesWhereInput
    none?: medi_timesWhereInput
  }

  export type medi_timesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_medisCountOrderByAggregateInput = {
    id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    userId?: SortOrder
    itemSeq?: SortOrder
  }

  export type user_medisAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type user_medisMaxOrderByAggregateInput = {
    id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    userId?: SortOrder
    itemSeq?: SortOrder
  }

  export type user_medisMinOrderByAggregateInput = {
    id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    userId?: SortOrder
    itemSeq?: SortOrder
  }

  export type user_medisSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type PostsListRelationFilter = {
    every?: postsWhereInput
    some?: postsWhereInput
    none?: postsWhereInput
  }

  export type QnasListRelationFilter = {
    every?: qnasWhereInput
    some?: qnasWhereInput
    none?: qnasWhereInput
  }

  export type PharmaciesNullableScalarRelationFilter = {
    is?: pharmaciesWhereInput | null
    isNot?: pharmaciesWhereInput | null
  }

  export type postsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type qnasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    name?: SortOrder
    birthyear?: SortOrder
    gender?: SortOrder
    member_type?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
    hpid?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    birthyear?: SortOrder
    member_type?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    name?: SortOrder
    birthyear?: SortOrder
    gender?: SortOrder
    member_type?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
    hpid?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    name?: SortOrder
    birthyear?: SortOrder
    gender?: SortOrder
    member_type?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
    hpid?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    birthyear?: SortOrder
    member_type?: SortOrder
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

  export type qnasCreateNestedOneWithoutAnswersInput = {
    create?: XOR<qnasCreateWithoutAnswersInput, qnasUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: qnasCreateOrConnectWithoutAnswersInput
    connect?: qnasWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutAnswersInput = {
    create?: XOR<usersCreateWithoutAnswersInput, usersUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAnswersInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type qnasUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<qnasCreateWithoutAnswersInput, qnasUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: qnasCreateOrConnectWithoutAnswersInput
    upsert?: qnasUpsertWithoutAnswersInput
    connect?: qnasWhereUniqueInput
    update?: XOR<XOR<qnasUpdateToOneWithWhereWithoutAnswersInput, qnasUpdateWithoutAnswersInput>, qnasUncheckedUpdateWithoutAnswersInput>
  }

  export type usersUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<usersCreateWithoutAnswersInput, usersUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAnswersInput
    upsert?: usersUpsertWithoutAnswersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAnswersInput, usersUpdateWithoutAnswersInput>, usersUncheckedUpdateWithoutAnswersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type postsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: postsCreateOrConnectWithoutCommentsInput
    connect?: postsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    connect?: usersWhereUniqueInput
  }

  export type postsUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: postsCreateOrConnectWithoutCommentsInput
    upsert?: postsUpsertWithoutCommentsInput
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutCommentsInput, postsUpdateWithoutCommentsInput>, postsUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    upsert?: usersUpsertWithoutCommentsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCommentsInput, usersUpdateWithoutCommentsInput>, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type user_healthsCreateNestedManyWithoutHealthsInput = {
    create?: XOR<user_healthsCreateWithoutHealthsInput, user_healthsUncheckedCreateWithoutHealthsInput> | user_healthsCreateWithoutHealthsInput[] | user_healthsUncheckedCreateWithoutHealthsInput[]
    connectOrCreate?: user_healthsCreateOrConnectWithoutHealthsInput | user_healthsCreateOrConnectWithoutHealthsInput[]
    createMany?: user_healthsCreateManyHealthsInputEnvelope
    connect?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
  }

  export type user_healthsUncheckedCreateNestedManyWithoutHealthsInput = {
    create?: XOR<user_healthsCreateWithoutHealthsInput, user_healthsUncheckedCreateWithoutHealthsInput> | user_healthsCreateWithoutHealthsInput[] | user_healthsUncheckedCreateWithoutHealthsInput[]
    connectOrCreate?: user_healthsCreateOrConnectWithoutHealthsInput | user_healthsCreateOrConnectWithoutHealthsInput[]
    createMany?: user_healthsCreateManyHealthsInputEnvelope
    connect?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
  }

  export type user_healthsUpdateManyWithoutHealthsNestedInput = {
    create?: XOR<user_healthsCreateWithoutHealthsInput, user_healthsUncheckedCreateWithoutHealthsInput> | user_healthsCreateWithoutHealthsInput[] | user_healthsUncheckedCreateWithoutHealthsInput[]
    connectOrCreate?: user_healthsCreateOrConnectWithoutHealthsInput | user_healthsCreateOrConnectWithoutHealthsInput[]
    upsert?: user_healthsUpsertWithWhereUniqueWithoutHealthsInput | user_healthsUpsertWithWhereUniqueWithoutHealthsInput[]
    createMany?: user_healthsCreateManyHealthsInputEnvelope
    set?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
    disconnect?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
    delete?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
    connect?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
    update?: user_healthsUpdateWithWhereUniqueWithoutHealthsInput | user_healthsUpdateWithWhereUniqueWithoutHealthsInput[]
    updateMany?: user_healthsUpdateManyWithWhereWithoutHealthsInput | user_healthsUpdateManyWithWhereWithoutHealthsInput[]
    deleteMany?: user_healthsScalarWhereInput | user_healthsScalarWhereInput[]
  }

  export type user_healthsUncheckedUpdateManyWithoutHealthsNestedInput = {
    create?: XOR<user_healthsCreateWithoutHealthsInput, user_healthsUncheckedCreateWithoutHealthsInput> | user_healthsCreateWithoutHealthsInput[] | user_healthsUncheckedCreateWithoutHealthsInput[]
    connectOrCreate?: user_healthsCreateOrConnectWithoutHealthsInput | user_healthsCreateOrConnectWithoutHealthsInput[]
    upsert?: user_healthsUpsertWithWhereUniqueWithoutHealthsInput | user_healthsUpsertWithWhereUniqueWithoutHealthsInput[]
    createMany?: user_healthsCreateManyHealthsInputEnvelope
    set?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
    disconnect?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
    delete?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
    connect?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
    update?: user_healthsUpdateWithWhereUniqueWithoutHealthsInput | user_healthsUpdateWithWhereUniqueWithoutHealthsInput[]
    updateMany?: user_healthsUpdateManyWithWhereWithoutHealthsInput | user_healthsUpdateManyWithWhereWithoutHealthsInput[]
    deleteMany?: user_healthsScalarWhereInput | user_healthsScalarWhereInput[]
  }

  export type pharmaciesCreateNestedOneWithoutInventoriesInput = {
    create?: XOR<pharmaciesCreateWithoutInventoriesInput, pharmaciesUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: pharmaciesCreateOrConnectWithoutInventoriesInput
    connect?: pharmaciesWhereUniqueInput
  }

  export type medicinesCreateNestedOneWithoutInventoriesInput = {
    create?: XOR<medicinesCreateWithoutInventoriesInput, medicinesUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: medicinesCreateOrConnectWithoutInventoriesInput
    connect?: medicinesWhereUniqueInput
  }

  export type pharmaciesUpdateOneRequiredWithoutInventoriesNestedInput = {
    create?: XOR<pharmaciesCreateWithoutInventoriesInput, pharmaciesUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: pharmaciesCreateOrConnectWithoutInventoriesInput
    upsert?: pharmaciesUpsertWithoutInventoriesInput
    connect?: pharmaciesWhereUniqueInput
    update?: XOR<XOR<pharmaciesUpdateToOneWithWhereWithoutInventoriesInput, pharmaciesUpdateWithoutInventoriesInput>, pharmaciesUncheckedUpdateWithoutInventoriesInput>
  }

  export type medicinesUpdateOneRequiredWithoutInventoriesNestedInput = {
    create?: XOR<medicinesCreateWithoutInventoriesInput, medicinesUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: medicinesCreateOrConnectWithoutInventoriesInput
    upsert?: medicinesUpsertWithoutInventoriesInput
    connect?: medicinesWhereUniqueInput
    update?: XOR<XOR<medicinesUpdateToOneWithWhereWithoutInventoriesInput, medicinesUpdateWithoutInventoriesInput>, medicinesUncheckedUpdateWithoutInventoriesInput>
  }

  export type user_medisCreateNestedOneWithoutMedi_timesInput = {
    create?: XOR<user_medisCreateWithoutMedi_timesInput, user_medisUncheckedCreateWithoutMedi_timesInput>
    connectOrCreate?: user_medisCreateOrConnectWithoutMedi_timesInput
    connect?: user_medisWhereUniqueInput
  }

  export type user_medisUpdateOneRequiredWithoutMedi_timesNestedInput = {
    create?: XOR<user_medisCreateWithoutMedi_timesInput, user_medisUncheckedCreateWithoutMedi_timesInput>
    connectOrCreate?: user_medisCreateOrConnectWithoutMedi_timesInput
    upsert?: user_medisUpsertWithoutMedi_timesInput
    connect?: user_medisWhereUniqueInput
    update?: XOR<XOR<user_medisUpdateToOneWithWhereWithoutMedi_timesInput, user_medisUpdateWithoutMedi_timesInput>, user_medisUncheckedUpdateWithoutMedi_timesInput>
  }

  export type inventoriesCreateNestedManyWithoutMedicinesInput = {
    create?: XOR<inventoriesCreateWithoutMedicinesInput, inventoriesUncheckedCreateWithoutMedicinesInput> | inventoriesCreateWithoutMedicinesInput[] | inventoriesUncheckedCreateWithoutMedicinesInput[]
    connectOrCreate?: inventoriesCreateOrConnectWithoutMedicinesInput | inventoriesCreateOrConnectWithoutMedicinesInput[]
    createMany?: inventoriesCreateManyMedicinesInputEnvelope
    connect?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
  }

  export type user_medisCreateNestedManyWithoutMedicinesInput = {
    create?: XOR<user_medisCreateWithoutMedicinesInput, user_medisUncheckedCreateWithoutMedicinesInput> | user_medisCreateWithoutMedicinesInput[] | user_medisUncheckedCreateWithoutMedicinesInput[]
    connectOrCreate?: user_medisCreateOrConnectWithoutMedicinesInput | user_medisCreateOrConnectWithoutMedicinesInput[]
    createMany?: user_medisCreateManyMedicinesInputEnvelope
    connect?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
  }

  export type inventoriesUncheckedCreateNestedManyWithoutMedicinesInput = {
    create?: XOR<inventoriesCreateWithoutMedicinesInput, inventoriesUncheckedCreateWithoutMedicinesInput> | inventoriesCreateWithoutMedicinesInput[] | inventoriesUncheckedCreateWithoutMedicinesInput[]
    connectOrCreate?: inventoriesCreateOrConnectWithoutMedicinesInput | inventoriesCreateOrConnectWithoutMedicinesInput[]
    createMany?: inventoriesCreateManyMedicinesInputEnvelope
    connect?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
  }

  export type user_medisUncheckedCreateNestedManyWithoutMedicinesInput = {
    create?: XOR<user_medisCreateWithoutMedicinesInput, user_medisUncheckedCreateWithoutMedicinesInput> | user_medisCreateWithoutMedicinesInput[] | user_medisUncheckedCreateWithoutMedicinesInput[]
    connectOrCreate?: user_medisCreateOrConnectWithoutMedicinesInput | user_medisCreateOrConnectWithoutMedicinesInput[]
    createMany?: user_medisCreateManyMedicinesInputEnvelope
    connect?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type inventoriesUpdateManyWithoutMedicinesNestedInput = {
    create?: XOR<inventoriesCreateWithoutMedicinesInput, inventoriesUncheckedCreateWithoutMedicinesInput> | inventoriesCreateWithoutMedicinesInput[] | inventoriesUncheckedCreateWithoutMedicinesInput[]
    connectOrCreate?: inventoriesCreateOrConnectWithoutMedicinesInput | inventoriesCreateOrConnectWithoutMedicinesInput[]
    upsert?: inventoriesUpsertWithWhereUniqueWithoutMedicinesInput | inventoriesUpsertWithWhereUniqueWithoutMedicinesInput[]
    createMany?: inventoriesCreateManyMedicinesInputEnvelope
    set?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
    disconnect?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
    delete?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
    connect?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
    update?: inventoriesUpdateWithWhereUniqueWithoutMedicinesInput | inventoriesUpdateWithWhereUniqueWithoutMedicinesInput[]
    updateMany?: inventoriesUpdateManyWithWhereWithoutMedicinesInput | inventoriesUpdateManyWithWhereWithoutMedicinesInput[]
    deleteMany?: inventoriesScalarWhereInput | inventoriesScalarWhereInput[]
  }

  export type user_medisUpdateManyWithoutMedicinesNestedInput = {
    create?: XOR<user_medisCreateWithoutMedicinesInput, user_medisUncheckedCreateWithoutMedicinesInput> | user_medisCreateWithoutMedicinesInput[] | user_medisUncheckedCreateWithoutMedicinesInput[]
    connectOrCreate?: user_medisCreateOrConnectWithoutMedicinesInput | user_medisCreateOrConnectWithoutMedicinesInput[]
    upsert?: user_medisUpsertWithWhereUniqueWithoutMedicinesInput | user_medisUpsertWithWhereUniqueWithoutMedicinesInput[]
    createMany?: user_medisCreateManyMedicinesInputEnvelope
    set?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
    disconnect?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
    delete?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
    connect?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
    update?: user_medisUpdateWithWhereUniqueWithoutMedicinesInput | user_medisUpdateWithWhereUniqueWithoutMedicinesInput[]
    updateMany?: user_medisUpdateManyWithWhereWithoutMedicinesInput | user_medisUpdateManyWithWhereWithoutMedicinesInput[]
    deleteMany?: user_medisScalarWhereInput | user_medisScalarWhereInput[]
  }

  export type inventoriesUncheckedUpdateManyWithoutMedicinesNestedInput = {
    create?: XOR<inventoriesCreateWithoutMedicinesInput, inventoriesUncheckedCreateWithoutMedicinesInput> | inventoriesCreateWithoutMedicinesInput[] | inventoriesUncheckedCreateWithoutMedicinesInput[]
    connectOrCreate?: inventoriesCreateOrConnectWithoutMedicinesInput | inventoriesCreateOrConnectWithoutMedicinesInput[]
    upsert?: inventoriesUpsertWithWhereUniqueWithoutMedicinesInput | inventoriesUpsertWithWhereUniqueWithoutMedicinesInput[]
    createMany?: inventoriesCreateManyMedicinesInputEnvelope
    set?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
    disconnect?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
    delete?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
    connect?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
    update?: inventoriesUpdateWithWhereUniqueWithoutMedicinesInput | inventoriesUpdateWithWhereUniqueWithoutMedicinesInput[]
    updateMany?: inventoriesUpdateManyWithWhereWithoutMedicinesInput | inventoriesUpdateManyWithWhereWithoutMedicinesInput[]
    deleteMany?: inventoriesScalarWhereInput | inventoriesScalarWhereInput[]
  }

  export type user_medisUncheckedUpdateManyWithoutMedicinesNestedInput = {
    create?: XOR<user_medisCreateWithoutMedicinesInput, user_medisUncheckedCreateWithoutMedicinesInput> | user_medisCreateWithoutMedicinesInput[] | user_medisUncheckedCreateWithoutMedicinesInput[]
    connectOrCreate?: user_medisCreateOrConnectWithoutMedicinesInput | user_medisCreateOrConnectWithoutMedicinesInput[]
    upsert?: user_medisUpsertWithWhereUniqueWithoutMedicinesInput | user_medisUpsertWithWhereUniqueWithoutMedicinesInput[]
    createMany?: user_medisCreateManyMedicinesInputEnvelope
    set?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
    disconnect?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
    delete?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
    connect?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
    update?: user_medisUpdateWithWhereUniqueWithoutMedicinesInput | user_medisUpdateWithWhereUniqueWithoutMedicinesInput[]
    updateMany?: user_medisUpdateManyWithWhereWithoutMedicinesInput | user_medisUpdateManyWithWhereWithoutMedicinesInput[]
    deleteMany?: user_medisScalarWhereInput | user_medisScalarWhereInput[]
  }

  export type inventoriesCreateNestedManyWithoutPharmaciesInput = {
    create?: XOR<inventoriesCreateWithoutPharmaciesInput, inventoriesUncheckedCreateWithoutPharmaciesInput> | inventoriesCreateWithoutPharmaciesInput[] | inventoriesUncheckedCreateWithoutPharmaciesInput[]
    connectOrCreate?: inventoriesCreateOrConnectWithoutPharmaciesInput | inventoriesCreateOrConnectWithoutPharmaciesInput[]
    createMany?: inventoriesCreateManyPharmaciesInputEnvelope
    connect?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutPharmaciesInput = {
    create?: XOR<usersCreateWithoutPharmaciesInput, usersUncheckedCreateWithoutPharmaciesInput> | usersCreateWithoutPharmaciesInput[] | usersUncheckedCreateWithoutPharmaciesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPharmaciesInput | usersCreateOrConnectWithoutPharmaciesInput[]
    createMany?: usersCreateManyPharmaciesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type inventoriesUncheckedCreateNestedManyWithoutPharmaciesInput = {
    create?: XOR<inventoriesCreateWithoutPharmaciesInput, inventoriesUncheckedCreateWithoutPharmaciesInput> | inventoriesCreateWithoutPharmaciesInput[] | inventoriesUncheckedCreateWithoutPharmaciesInput[]
    connectOrCreate?: inventoriesCreateOrConnectWithoutPharmaciesInput | inventoriesCreateOrConnectWithoutPharmaciesInput[]
    createMany?: inventoriesCreateManyPharmaciesInputEnvelope
    connect?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutPharmaciesInput = {
    create?: XOR<usersCreateWithoutPharmaciesInput, usersUncheckedCreateWithoutPharmaciesInput> | usersCreateWithoutPharmaciesInput[] | usersUncheckedCreateWithoutPharmaciesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPharmaciesInput | usersCreateOrConnectWithoutPharmaciesInput[]
    createMany?: usersCreateManyPharmaciesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type inventoriesUpdateManyWithoutPharmaciesNestedInput = {
    create?: XOR<inventoriesCreateWithoutPharmaciesInput, inventoriesUncheckedCreateWithoutPharmaciesInput> | inventoriesCreateWithoutPharmaciesInput[] | inventoriesUncheckedCreateWithoutPharmaciesInput[]
    connectOrCreate?: inventoriesCreateOrConnectWithoutPharmaciesInput | inventoriesCreateOrConnectWithoutPharmaciesInput[]
    upsert?: inventoriesUpsertWithWhereUniqueWithoutPharmaciesInput | inventoriesUpsertWithWhereUniqueWithoutPharmaciesInput[]
    createMany?: inventoriesCreateManyPharmaciesInputEnvelope
    set?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
    disconnect?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
    delete?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
    connect?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
    update?: inventoriesUpdateWithWhereUniqueWithoutPharmaciesInput | inventoriesUpdateWithWhereUniqueWithoutPharmaciesInput[]
    updateMany?: inventoriesUpdateManyWithWhereWithoutPharmaciesInput | inventoriesUpdateManyWithWhereWithoutPharmaciesInput[]
    deleteMany?: inventoriesScalarWhereInput | inventoriesScalarWhereInput[]
  }

  export type usersUpdateManyWithoutPharmaciesNestedInput = {
    create?: XOR<usersCreateWithoutPharmaciesInput, usersUncheckedCreateWithoutPharmaciesInput> | usersCreateWithoutPharmaciesInput[] | usersUncheckedCreateWithoutPharmaciesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPharmaciesInput | usersCreateOrConnectWithoutPharmaciesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutPharmaciesInput | usersUpsertWithWhereUniqueWithoutPharmaciesInput[]
    createMany?: usersCreateManyPharmaciesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutPharmaciesInput | usersUpdateWithWhereUniqueWithoutPharmaciesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutPharmaciesInput | usersUpdateManyWithWhereWithoutPharmaciesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type inventoriesUncheckedUpdateManyWithoutPharmaciesNestedInput = {
    create?: XOR<inventoriesCreateWithoutPharmaciesInput, inventoriesUncheckedCreateWithoutPharmaciesInput> | inventoriesCreateWithoutPharmaciesInput[] | inventoriesUncheckedCreateWithoutPharmaciesInput[]
    connectOrCreate?: inventoriesCreateOrConnectWithoutPharmaciesInput | inventoriesCreateOrConnectWithoutPharmaciesInput[]
    upsert?: inventoriesUpsertWithWhereUniqueWithoutPharmaciesInput | inventoriesUpsertWithWhereUniqueWithoutPharmaciesInput[]
    createMany?: inventoriesCreateManyPharmaciesInputEnvelope
    set?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
    disconnect?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
    delete?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
    connect?: inventoriesWhereUniqueInput | inventoriesWhereUniqueInput[]
    update?: inventoriesUpdateWithWhereUniqueWithoutPharmaciesInput | inventoriesUpdateWithWhereUniqueWithoutPharmaciesInput[]
    updateMany?: inventoriesUpdateManyWithWhereWithoutPharmaciesInput | inventoriesUpdateManyWithWhereWithoutPharmaciesInput[]
    deleteMany?: inventoriesScalarWhereInput | inventoriesScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutPharmaciesNestedInput = {
    create?: XOR<usersCreateWithoutPharmaciesInput, usersUncheckedCreateWithoutPharmaciesInput> | usersCreateWithoutPharmaciesInput[] | usersUncheckedCreateWithoutPharmaciesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPharmaciesInput | usersCreateOrConnectWithoutPharmaciesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutPharmaciesInput | usersUpsertWithWhereUniqueWithoutPharmaciesInput[]
    createMany?: usersCreateManyPharmaciesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutPharmaciesInput | usersUpdateWithWhereUniqueWithoutPharmaciesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutPharmaciesInput | usersUpdateManyWithWhereWithoutPharmaciesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type postsCreateNestedOneWithoutPost_tagsInput = {
    create?: XOR<postsCreateWithoutPost_tagsInput, postsUncheckedCreateWithoutPost_tagsInput>
    connectOrCreate?: postsCreateOrConnectWithoutPost_tagsInput
    connect?: postsWhereUniqueInput
  }

  export type tagsCreateNestedOneWithoutPost_tagsInput = {
    create?: XOR<tagsCreateWithoutPost_tagsInput, tagsUncheckedCreateWithoutPost_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutPost_tagsInput
    connect?: tagsWhereUniqueInput
  }

  export type postsUpdateOneRequiredWithoutPost_tagsNestedInput = {
    create?: XOR<postsCreateWithoutPost_tagsInput, postsUncheckedCreateWithoutPost_tagsInput>
    connectOrCreate?: postsCreateOrConnectWithoutPost_tagsInput
    upsert?: postsUpsertWithoutPost_tagsInput
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutPost_tagsInput, postsUpdateWithoutPost_tagsInput>, postsUncheckedUpdateWithoutPost_tagsInput>
  }

  export type tagsUpdateOneRequiredWithoutPost_tagsNestedInput = {
    create?: XOR<tagsCreateWithoutPost_tagsInput, tagsUncheckedCreateWithoutPost_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutPost_tagsInput
    upsert?: tagsUpsertWithoutPost_tagsInput
    connect?: tagsWhereUniqueInput
    update?: XOR<XOR<tagsUpdateToOneWithWhereWithoutPost_tagsInput, tagsUpdateWithoutPost_tagsInput>, tagsUncheckedUpdateWithoutPost_tagsInput>
  }

  export type commentsCreateNestedManyWithoutPostsInput = {
    create?: XOR<commentsCreateWithoutPostsInput, commentsUncheckedCreateWithoutPostsInput> | commentsCreateWithoutPostsInput[] | commentsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostsInput | commentsCreateOrConnectWithoutPostsInput[]
    createMany?: commentsCreateManyPostsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type post_tagsCreateNestedManyWithoutPostsInput = {
    create?: XOR<post_tagsCreateWithoutPostsInput, post_tagsUncheckedCreateWithoutPostsInput> | post_tagsCreateWithoutPostsInput[] | post_tagsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: post_tagsCreateOrConnectWithoutPostsInput | post_tagsCreateOrConnectWithoutPostsInput[]
    createMany?: post_tagsCreateManyPostsInputEnvelope
    connect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutPostsInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    connect?: usersWhereUniqueInput
  }

  export type commentsUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<commentsCreateWithoutPostsInput, commentsUncheckedCreateWithoutPostsInput> | commentsCreateWithoutPostsInput[] | commentsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostsInput | commentsCreateOrConnectWithoutPostsInput[]
    createMany?: commentsCreateManyPostsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type post_tagsUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<post_tagsCreateWithoutPostsInput, post_tagsUncheckedCreateWithoutPostsInput> | post_tagsCreateWithoutPostsInput[] | post_tagsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: post_tagsCreateOrConnectWithoutPostsInput | post_tagsCreateOrConnectWithoutPostsInput[]
    createMany?: post_tagsCreateManyPostsInputEnvelope
    connect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
  }

  export type commentsUpdateManyWithoutPostsNestedInput = {
    create?: XOR<commentsCreateWithoutPostsInput, commentsUncheckedCreateWithoutPostsInput> | commentsCreateWithoutPostsInput[] | commentsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostsInput | commentsCreateOrConnectWithoutPostsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutPostsInput | commentsUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: commentsCreateManyPostsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutPostsInput | commentsUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutPostsInput | commentsUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type post_tagsUpdateManyWithoutPostsNestedInput = {
    create?: XOR<post_tagsCreateWithoutPostsInput, post_tagsUncheckedCreateWithoutPostsInput> | post_tagsCreateWithoutPostsInput[] | post_tagsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: post_tagsCreateOrConnectWithoutPostsInput | post_tagsCreateOrConnectWithoutPostsInput[]
    upsert?: post_tagsUpsertWithWhereUniqueWithoutPostsInput | post_tagsUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: post_tagsCreateManyPostsInputEnvelope
    set?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    disconnect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    delete?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    connect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    update?: post_tagsUpdateWithWhereUniqueWithoutPostsInput | post_tagsUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: post_tagsUpdateManyWithWhereWithoutPostsInput | post_tagsUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: post_tagsScalarWhereInput | post_tagsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    upsert?: usersUpsertWithoutPostsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPostsInput, usersUpdateWithoutPostsInput>, usersUncheckedUpdateWithoutPostsInput>
  }

  export type commentsUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<commentsCreateWithoutPostsInput, commentsUncheckedCreateWithoutPostsInput> | commentsCreateWithoutPostsInput[] | commentsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostsInput | commentsCreateOrConnectWithoutPostsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutPostsInput | commentsUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: commentsCreateManyPostsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutPostsInput | commentsUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutPostsInput | commentsUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type post_tagsUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<post_tagsCreateWithoutPostsInput, post_tagsUncheckedCreateWithoutPostsInput> | post_tagsCreateWithoutPostsInput[] | post_tagsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: post_tagsCreateOrConnectWithoutPostsInput | post_tagsCreateOrConnectWithoutPostsInput[]
    upsert?: post_tagsUpsertWithWhereUniqueWithoutPostsInput | post_tagsUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: post_tagsCreateManyPostsInputEnvelope
    set?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    disconnect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    delete?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    connect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    update?: post_tagsUpdateWithWhereUniqueWithoutPostsInput | post_tagsUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: post_tagsUpdateManyWithWhereWithoutPostsInput | post_tagsUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: post_tagsScalarWhereInput | post_tagsScalarWhereInput[]
  }

  export type qnasCreateNestedOneWithoutQna_tagsInput = {
    create?: XOR<qnasCreateWithoutQna_tagsInput, qnasUncheckedCreateWithoutQna_tagsInput>
    connectOrCreate?: qnasCreateOrConnectWithoutQna_tagsInput
    connect?: qnasWhereUniqueInput
  }

  export type tagsCreateNestedOneWithoutQna_tagsInput = {
    create?: XOR<tagsCreateWithoutQna_tagsInput, tagsUncheckedCreateWithoutQna_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutQna_tagsInput
    connect?: tagsWhereUniqueInput
  }

  export type qnasUpdateOneRequiredWithoutQna_tagsNestedInput = {
    create?: XOR<qnasCreateWithoutQna_tagsInput, qnasUncheckedCreateWithoutQna_tagsInput>
    connectOrCreate?: qnasCreateOrConnectWithoutQna_tagsInput
    upsert?: qnasUpsertWithoutQna_tagsInput
    connect?: qnasWhereUniqueInput
    update?: XOR<XOR<qnasUpdateToOneWithWhereWithoutQna_tagsInput, qnasUpdateWithoutQna_tagsInput>, qnasUncheckedUpdateWithoutQna_tagsInput>
  }

  export type tagsUpdateOneRequiredWithoutQna_tagsNestedInput = {
    create?: XOR<tagsCreateWithoutQna_tagsInput, tagsUncheckedCreateWithoutQna_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutQna_tagsInput
    upsert?: tagsUpsertWithoutQna_tagsInput
    connect?: tagsWhereUniqueInput
    update?: XOR<XOR<tagsUpdateToOneWithWhereWithoutQna_tagsInput, tagsUpdateWithoutQna_tagsInput>, tagsUncheckedUpdateWithoutQna_tagsInput>
  }

  export type answersCreateNestedManyWithoutQnasInput = {
    create?: XOR<answersCreateWithoutQnasInput, answersUncheckedCreateWithoutQnasInput> | answersCreateWithoutQnasInput[] | answersUncheckedCreateWithoutQnasInput[]
    connectOrCreate?: answersCreateOrConnectWithoutQnasInput | answersCreateOrConnectWithoutQnasInput[]
    createMany?: answersCreateManyQnasInputEnvelope
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
  }

  export type qna_tagsCreateNestedManyWithoutQnasInput = {
    create?: XOR<qna_tagsCreateWithoutQnasInput, qna_tagsUncheckedCreateWithoutQnasInput> | qna_tagsCreateWithoutQnasInput[] | qna_tagsUncheckedCreateWithoutQnasInput[]
    connectOrCreate?: qna_tagsCreateOrConnectWithoutQnasInput | qna_tagsCreateOrConnectWithoutQnasInput[]
    createMany?: qna_tagsCreateManyQnasInputEnvelope
    connect?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutQnasInput = {
    create?: XOR<usersCreateWithoutQnasInput, usersUncheckedCreateWithoutQnasInput>
    connectOrCreate?: usersCreateOrConnectWithoutQnasInput
    connect?: usersWhereUniqueInput
  }

  export type answersUncheckedCreateNestedManyWithoutQnasInput = {
    create?: XOR<answersCreateWithoutQnasInput, answersUncheckedCreateWithoutQnasInput> | answersCreateWithoutQnasInput[] | answersUncheckedCreateWithoutQnasInput[]
    connectOrCreate?: answersCreateOrConnectWithoutQnasInput | answersCreateOrConnectWithoutQnasInput[]
    createMany?: answersCreateManyQnasInputEnvelope
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
  }

  export type qna_tagsUncheckedCreateNestedManyWithoutQnasInput = {
    create?: XOR<qna_tagsCreateWithoutQnasInput, qna_tagsUncheckedCreateWithoutQnasInput> | qna_tagsCreateWithoutQnasInput[] | qna_tagsUncheckedCreateWithoutQnasInput[]
    connectOrCreate?: qna_tagsCreateOrConnectWithoutQnasInput | qna_tagsCreateOrConnectWithoutQnasInput[]
    createMany?: qna_tagsCreateManyQnasInputEnvelope
    connect?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
  }

  export type answersUpdateManyWithoutQnasNestedInput = {
    create?: XOR<answersCreateWithoutQnasInput, answersUncheckedCreateWithoutQnasInput> | answersCreateWithoutQnasInput[] | answersUncheckedCreateWithoutQnasInput[]
    connectOrCreate?: answersCreateOrConnectWithoutQnasInput | answersCreateOrConnectWithoutQnasInput[]
    upsert?: answersUpsertWithWhereUniqueWithoutQnasInput | answersUpsertWithWhereUniqueWithoutQnasInput[]
    createMany?: answersCreateManyQnasInputEnvelope
    set?: answersWhereUniqueInput | answersWhereUniqueInput[]
    disconnect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    delete?: answersWhereUniqueInput | answersWhereUniqueInput[]
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    update?: answersUpdateWithWhereUniqueWithoutQnasInput | answersUpdateWithWhereUniqueWithoutQnasInput[]
    updateMany?: answersUpdateManyWithWhereWithoutQnasInput | answersUpdateManyWithWhereWithoutQnasInput[]
    deleteMany?: answersScalarWhereInput | answersScalarWhereInput[]
  }

  export type qna_tagsUpdateManyWithoutQnasNestedInput = {
    create?: XOR<qna_tagsCreateWithoutQnasInput, qna_tagsUncheckedCreateWithoutQnasInput> | qna_tagsCreateWithoutQnasInput[] | qna_tagsUncheckedCreateWithoutQnasInput[]
    connectOrCreate?: qna_tagsCreateOrConnectWithoutQnasInput | qna_tagsCreateOrConnectWithoutQnasInput[]
    upsert?: qna_tagsUpsertWithWhereUniqueWithoutQnasInput | qna_tagsUpsertWithWhereUniqueWithoutQnasInput[]
    createMany?: qna_tagsCreateManyQnasInputEnvelope
    set?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
    disconnect?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
    delete?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
    connect?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
    update?: qna_tagsUpdateWithWhereUniqueWithoutQnasInput | qna_tagsUpdateWithWhereUniqueWithoutQnasInput[]
    updateMany?: qna_tagsUpdateManyWithWhereWithoutQnasInput | qna_tagsUpdateManyWithWhereWithoutQnasInput[]
    deleteMany?: qna_tagsScalarWhereInput | qna_tagsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutQnasNestedInput = {
    create?: XOR<usersCreateWithoutQnasInput, usersUncheckedCreateWithoutQnasInput>
    connectOrCreate?: usersCreateOrConnectWithoutQnasInput
    upsert?: usersUpsertWithoutQnasInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutQnasInput, usersUpdateWithoutQnasInput>, usersUncheckedUpdateWithoutQnasInput>
  }

  export type answersUncheckedUpdateManyWithoutQnasNestedInput = {
    create?: XOR<answersCreateWithoutQnasInput, answersUncheckedCreateWithoutQnasInput> | answersCreateWithoutQnasInput[] | answersUncheckedCreateWithoutQnasInput[]
    connectOrCreate?: answersCreateOrConnectWithoutQnasInput | answersCreateOrConnectWithoutQnasInput[]
    upsert?: answersUpsertWithWhereUniqueWithoutQnasInput | answersUpsertWithWhereUniqueWithoutQnasInput[]
    createMany?: answersCreateManyQnasInputEnvelope
    set?: answersWhereUniqueInput | answersWhereUniqueInput[]
    disconnect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    delete?: answersWhereUniqueInput | answersWhereUniqueInput[]
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    update?: answersUpdateWithWhereUniqueWithoutQnasInput | answersUpdateWithWhereUniqueWithoutQnasInput[]
    updateMany?: answersUpdateManyWithWhereWithoutQnasInput | answersUpdateManyWithWhereWithoutQnasInput[]
    deleteMany?: answersScalarWhereInput | answersScalarWhereInput[]
  }

  export type qna_tagsUncheckedUpdateManyWithoutQnasNestedInput = {
    create?: XOR<qna_tagsCreateWithoutQnasInput, qna_tagsUncheckedCreateWithoutQnasInput> | qna_tagsCreateWithoutQnasInput[] | qna_tagsUncheckedCreateWithoutQnasInput[]
    connectOrCreate?: qna_tagsCreateOrConnectWithoutQnasInput | qna_tagsCreateOrConnectWithoutQnasInput[]
    upsert?: qna_tagsUpsertWithWhereUniqueWithoutQnasInput | qna_tagsUpsertWithWhereUniqueWithoutQnasInput[]
    createMany?: qna_tagsCreateManyQnasInputEnvelope
    set?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
    disconnect?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
    delete?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
    connect?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
    update?: qna_tagsUpdateWithWhereUniqueWithoutQnasInput | qna_tagsUpdateWithWhereUniqueWithoutQnasInput[]
    updateMany?: qna_tagsUpdateManyWithWhereWithoutQnasInput | qna_tagsUpdateManyWithWhereWithoutQnasInput[]
    deleteMany?: qna_tagsScalarWhereInput | qna_tagsScalarWhereInput[]
  }

  export type post_tagsCreateNestedManyWithoutTagsInput = {
    create?: XOR<post_tagsCreateWithoutTagsInput, post_tagsUncheckedCreateWithoutTagsInput> | post_tagsCreateWithoutTagsInput[] | post_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: post_tagsCreateOrConnectWithoutTagsInput | post_tagsCreateOrConnectWithoutTagsInput[]
    createMany?: post_tagsCreateManyTagsInputEnvelope
    connect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
  }

  export type qna_tagsCreateNestedManyWithoutTagsInput = {
    create?: XOR<qna_tagsCreateWithoutTagsInput, qna_tagsUncheckedCreateWithoutTagsInput> | qna_tagsCreateWithoutTagsInput[] | qna_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: qna_tagsCreateOrConnectWithoutTagsInput | qna_tagsCreateOrConnectWithoutTagsInput[]
    createMany?: qna_tagsCreateManyTagsInputEnvelope
    connect?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
  }

  export type post_tagsUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<post_tagsCreateWithoutTagsInput, post_tagsUncheckedCreateWithoutTagsInput> | post_tagsCreateWithoutTagsInput[] | post_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: post_tagsCreateOrConnectWithoutTagsInput | post_tagsCreateOrConnectWithoutTagsInput[]
    createMany?: post_tagsCreateManyTagsInputEnvelope
    connect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
  }

  export type qna_tagsUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<qna_tagsCreateWithoutTagsInput, qna_tagsUncheckedCreateWithoutTagsInput> | qna_tagsCreateWithoutTagsInput[] | qna_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: qna_tagsCreateOrConnectWithoutTagsInput | qna_tagsCreateOrConnectWithoutTagsInput[]
    createMany?: qna_tagsCreateManyTagsInputEnvelope
    connect?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
  }

  export type post_tagsUpdateManyWithoutTagsNestedInput = {
    create?: XOR<post_tagsCreateWithoutTagsInput, post_tagsUncheckedCreateWithoutTagsInput> | post_tagsCreateWithoutTagsInput[] | post_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: post_tagsCreateOrConnectWithoutTagsInput | post_tagsCreateOrConnectWithoutTagsInput[]
    upsert?: post_tagsUpsertWithWhereUniqueWithoutTagsInput | post_tagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: post_tagsCreateManyTagsInputEnvelope
    set?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    disconnect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    delete?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    connect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    update?: post_tagsUpdateWithWhereUniqueWithoutTagsInput | post_tagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: post_tagsUpdateManyWithWhereWithoutTagsInput | post_tagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: post_tagsScalarWhereInput | post_tagsScalarWhereInput[]
  }

  export type qna_tagsUpdateManyWithoutTagsNestedInput = {
    create?: XOR<qna_tagsCreateWithoutTagsInput, qna_tagsUncheckedCreateWithoutTagsInput> | qna_tagsCreateWithoutTagsInput[] | qna_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: qna_tagsCreateOrConnectWithoutTagsInput | qna_tagsCreateOrConnectWithoutTagsInput[]
    upsert?: qna_tagsUpsertWithWhereUniqueWithoutTagsInput | qna_tagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: qna_tagsCreateManyTagsInputEnvelope
    set?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
    disconnect?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
    delete?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
    connect?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
    update?: qna_tagsUpdateWithWhereUniqueWithoutTagsInput | qna_tagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: qna_tagsUpdateManyWithWhereWithoutTagsInput | qna_tagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: qna_tagsScalarWhereInput | qna_tagsScalarWhereInput[]
  }

  export type post_tagsUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<post_tagsCreateWithoutTagsInput, post_tagsUncheckedCreateWithoutTagsInput> | post_tagsCreateWithoutTagsInput[] | post_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: post_tagsCreateOrConnectWithoutTagsInput | post_tagsCreateOrConnectWithoutTagsInput[]
    upsert?: post_tagsUpsertWithWhereUniqueWithoutTagsInput | post_tagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: post_tagsCreateManyTagsInputEnvelope
    set?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    disconnect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    delete?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    connect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    update?: post_tagsUpdateWithWhereUniqueWithoutTagsInput | post_tagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: post_tagsUpdateManyWithWhereWithoutTagsInput | post_tagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: post_tagsScalarWhereInput | post_tagsScalarWhereInput[]
  }

  export type qna_tagsUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<qna_tagsCreateWithoutTagsInput, qna_tagsUncheckedCreateWithoutTagsInput> | qna_tagsCreateWithoutTagsInput[] | qna_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: qna_tagsCreateOrConnectWithoutTagsInput | qna_tagsCreateOrConnectWithoutTagsInput[]
    upsert?: qna_tagsUpsertWithWhereUniqueWithoutTagsInput | qna_tagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: qna_tagsCreateManyTagsInputEnvelope
    set?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
    disconnect?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
    delete?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
    connect?: qna_tagsWhereUniqueInput | qna_tagsWhereUniqueInput[]
    update?: qna_tagsUpdateWithWhereUniqueWithoutTagsInput | qna_tagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: qna_tagsUpdateManyWithWhereWithoutTagsInput | qna_tagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: qna_tagsScalarWhereInput | qna_tagsScalarWhereInput[]
  }

  export type healthsCreateNestedOneWithoutUser_healthsInput = {
    create?: XOR<healthsCreateWithoutUser_healthsInput, healthsUncheckedCreateWithoutUser_healthsInput>
    connectOrCreate?: healthsCreateOrConnectWithoutUser_healthsInput
    connect?: healthsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_healthsInput = {
    create?: XOR<usersCreateWithoutUser_healthsInput, usersUncheckedCreateWithoutUser_healthsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_healthsInput
    connect?: usersWhereUniqueInput
  }

  export type healthsUpdateOneRequiredWithoutUser_healthsNestedInput = {
    create?: XOR<healthsCreateWithoutUser_healthsInput, healthsUncheckedCreateWithoutUser_healthsInput>
    connectOrCreate?: healthsCreateOrConnectWithoutUser_healthsInput
    upsert?: healthsUpsertWithoutUser_healthsInput
    connect?: healthsWhereUniqueInput
    update?: XOR<XOR<healthsUpdateToOneWithWhereWithoutUser_healthsInput, healthsUpdateWithoutUser_healthsInput>, healthsUncheckedUpdateWithoutUser_healthsInput>
  }

  export type usersUpdateOneRequiredWithoutUser_healthsNestedInput = {
    create?: XOR<usersCreateWithoutUser_healthsInput, usersUncheckedCreateWithoutUser_healthsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_healthsInput
    upsert?: usersUpsertWithoutUser_healthsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_healthsInput, usersUpdateWithoutUser_healthsInput>, usersUncheckedUpdateWithoutUser_healthsInput>
  }

  export type medi_timesCreateNestedManyWithoutUser_medisInput = {
    create?: XOR<medi_timesCreateWithoutUser_medisInput, medi_timesUncheckedCreateWithoutUser_medisInput> | medi_timesCreateWithoutUser_medisInput[] | medi_timesUncheckedCreateWithoutUser_medisInput[]
    connectOrCreate?: medi_timesCreateOrConnectWithoutUser_medisInput | medi_timesCreateOrConnectWithoutUser_medisInput[]
    createMany?: medi_timesCreateManyUser_medisInputEnvelope
    connect?: medi_timesWhereUniqueInput | medi_timesWhereUniqueInput[]
  }

  export type medicinesCreateNestedOneWithoutUser_medisInput = {
    create?: XOR<medicinesCreateWithoutUser_medisInput, medicinesUncheckedCreateWithoutUser_medisInput>
    connectOrCreate?: medicinesCreateOrConnectWithoutUser_medisInput
    connect?: medicinesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_medisInput = {
    create?: XOR<usersCreateWithoutUser_medisInput, usersUncheckedCreateWithoutUser_medisInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_medisInput
    connect?: usersWhereUniqueInput
  }

  export type medi_timesUncheckedCreateNestedManyWithoutUser_medisInput = {
    create?: XOR<medi_timesCreateWithoutUser_medisInput, medi_timesUncheckedCreateWithoutUser_medisInput> | medi_timesCreateWithoutUser_medisInput[] | medi_timesUncheckedCreateWithoutUser_medisInput[]
    connectOrCreate?: medi_timesCreateOrConnectWithoutUser_medisInput | medi_timesCreateOrConnectWithoutUser_medisInput[]
    createMany?: medi_timesCreateManyUser_medisInputEnvelope
    connect?: medi_timesWhereUniqueInput | medi_timesWhereUniqueInput[]
  }

  export type medi_timesUpdateManyWithoutUser_medisNestedInput = {
    create?: XOR<medi_timesCreateWithoutUser_medisInput, medi_timesUncheckedCreateWithoutUser_medisInput> | medi_timesCreateWithoutUser_medisInput[] | medi_timesUncheckedCreateWithoutUser_medisInput[]
    connectOrCreate?: medi_timesCreateOrConnectWithoutUser_medisInput | medi_timesCreateOrConnectWithoutUser_medisInput[]
    upsert?: medi_timesUpsertWithWhereUniqueWithoutUser_medisInput | medi_timesUpsertWithWhereUniqueWithoutUser_medisInput[]
    createMany?: medi_timesCreateManyUser_medisInputEnvelope
    set?: medi_timesWhereUniqueInput | medi_timesWhereUniqueInput[]
    disconnect?: medi_timesWhereUniqueInput | medi_timesWhereUniqueInput[]
    delete?: medi_timesWhereUniqueInput | medi_timesWhereUniqueInput[]
    connect?: medi_timesWhereUniqueInput | medi_timesWhereUniqueInput[]
    update?: medi_timesUpdateWithWhereUniqueWithoutUser_medisInput | medi_timesUpdateWithWhereUniqueWithoutUser_medisInput[]
    updateMany?: medi_timesUpdateManyWithWhereWithoutUser_medisInput | medi_timesUpdateManyWithWhereWithoutUser_medisInput[]
    deleteMany?: medi_timesScalarWhereInput | medi_timesScalarWhereInput[]
  }

  export type medicinesUpdateOneRequiredWithoutUser_medisNestedInput = {
    create?: XOR<medicinesCreateWithoutUser_medisInput, medicinesUncheckedCreateWithoutUser_medisInput>
    connectOrCreate?: medicinesCreateOrConnectWithoutUser_medisInput
    upsert?: medicinesUpsertWithoutUser_medisInput
    connect?: medicinesWhereUniqueInput
    update?: XOR<XOR<medicinesUpdateToOneWithWhereWithoutUser_medisInput, medicinesUpdateWithoutUser_medisInput>, medicinesUncheckedUpdateWithoutUser_medisInput>
  }

  export type usersUpdateOneRequiredWithoutUser_medisNestedInput = {
    create?: XOR<usersCreateWithoutUser_medisInput, usersUncheckedCreateWithoutUser_medisInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_medisInput
    upsert?: usersUpsertWithoutUser_medisInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_medisInput, usersUpdateWithoutUser_medisInput>, usersUncheckedUpdateWithoutUser_medisInput>
  }

  export type medi_timesUncheckedUpdateManyWithoutUser_medisNestedInput = {
    create?: XOR<medi_timesCreateWithoutUser_medisInput, medi_timesUncheckedCreateWithoutUser_medisInput> | medi_timesCreateWithoutUser_medisInput[] | medi_timesUncheckedCreateWithoutUser_medisInput[]
    connectOrCreate?: medi_timesCreateOrConnectWithoutUser_medisInput | medi_timesCreateOrConnectWithoutUser_medisInput[]
    upsert?: medi_timesUpsertWithWhereUniqueWithoutUser_medisInput | medi_timesUpsertWithWhereUniqueWithoutUser_medisInput[]
    createMany?: medi_timesCreateManyUser_medisInputEnvelope
    set?: medi_timesWhereUniqueInput | medi_timesWhereUniqueInput[]
    disconnect?: medi_timesWhereUniqueInput | medi_timesWhereUniqueInput[]
    delete?: medi_timesWhereUniqueInput | medi_timesWhereUniqueInput[]
    connect?: medi_timesWhereUniqueInput | medi_timesWhereUniqueInput[]
    update?: medi_timesUpdateWithWhereUniqueWithoutUser_medisInput | medi_timesUpdateWithWhereUniqueWithoutUser_medisInput[]
    updateMany?: medi_timesUpdateManyWithWhereWithoutUser_medisInput | medi_timesUpdateManyWithWhereWithoutUser_medisInput[]
    deleteMany?: medi_timesScalarWhereInput | medi_timesScalarWhereInput[]
  }

  export type answersCreateNestedManyWithoutUsersInput = {
    create?: XOR<answersCreateWithoutUsersInput, answersUncheckedCreateWithoutUsersInput> | answersCreateWithoutUsersInput[] | answersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: answersCreateOrConnectWithoutUsersInput | answersCreateOrConnectWithoutUsersInput[]
    createMany?: answersCreateManyUsersInputEnvelope
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
  }

  export type commentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type postsCreateNestedManyWithoutUsersInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type qnasCreateNestedManyWithoutUsersInput = {
    create?: XOR<qnasCreateWithoutUsersInput, qnasUncheckedCreateWithoutUsersInput> | qnasCreateWithoutUsersInput[] | qnasUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: qnasCreateOrConnectWithoutUsersInput | qnasCreateOrConnectWithoutUsersInput[]
    createMany?: qnasCreateManyUsersInputEnvelope
    connect?: qnasWhereUniqueInput | qnasWhereUniqueInput[]
  }

  export type user_healthsCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_healthsCreateWithoutUsersInput, user_healthsUncheckedCreateWithoutUsersInput> | user_healthsCreateWithoutUsersInput[] | user_healthsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_healthsCreateOrConnectWithoutUsersInput | user_healthsCreateOrConnectWithoutUsersInput[]
    createMany?: user_healthsCreateManyUsersInputEnvelope
    connect?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
  }

  export type user_medisCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_medisCreateWithoutUsersInput, user_medisUncheckedCreateWithoutUsersInput> | user_medisCreateWithoutUsersInput[] | user_medisUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_medisCreateOrConnectWithoutUsersInput | user_medisCreateOrConnectWithoutUsersInput[]
    createMany?: user_medisCreateManyUsersInputEnvelope
    connect?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
  }

  export type pharmaciesCreateNestedOneWithoutUsersInput = {
    create?: XOR<pharmaciesCreateWithoutUsersInput, pharmaciesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: pharmaciesCreateOrConnectWithoutUsersInput
    connect?: pharmaciesWhereUniqueInput
  }

  export type answersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<answersCreateWithoutUsersInput, answersUncheckedCreateWithoutUsersInput> | answersCreateWithoutUsersInput[] | answersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: answersCreateOrConnectWithoutUsersInput | answersCreateOrConnectWithoutUsersInput[]
    createMany?: answersCreateManyUsersInputEnvelope
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type postsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type qnasUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<qnasCreateWithoutUsersInput, qnasUncheckedCreateWithoutUsersInput> | qnasCreateWithoutUsersInput[] | qnasUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: qnasCreateOrConnectWithoutUsersInput | qnasCreateOrConnectWithoutUsersInput[]
    createMany?: qnasCreateManyUsersInputEnvelope
    connect?: qnasWhereUniqueInput | qnasWhereUniqueInput[]
  }

  export type user_healthsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_healthsCreateWithoutUsersInput, user_healthsUncheckedCreateWithoutUsersInput> | user_healthsCreateWithoutUsersInput[] | user_healthsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_healthsCreateOrConnectWithoutUsersInput | user_healthsCreateOrConnectWithoutUsersInput[]
    createMany?: user_healthsCreateManyUsersInputEnvelope
    connect?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
  }

  export type user_medisUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_medisCreateWithoutUsersInput, user_medisUncheckedCreateWithoutUsersInput> | user_medisCreateWithoutUsersInput[] | user_medisUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_medisCreateOrConnectWithoutUsersInput | user_medisCreateOrConnectWithoutUsersInput[]
    createMany?: user_medisCreateManyUsersInputEnvelope
    connect?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type answersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<answersCreateWithoutUsersInput, answersUncheckedCreateWithoutUsersInput> | answersCreateWithoutUsersInput[] | answersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: answersCreateOrConnectWithoutUsersInput | answersCreateOrConnectWithoutUsersInput[]
    upsert?: answersUpsertWithWhereUniqueWithoutUsersInput | answersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: answersCreateManyUsersInputEnvelope
    set?: answersWhereUniqueInput | answersWhereUniqueInput[]
    disconnect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    delete?: answersWhereUniqueInput | answersWhereUniqueInput[]
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    update?: answersUpdateWithWhereUniqueWithoutUsersInput | answersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: answersUpdateManyWithWhereWithoutUsersInput | answersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: answersScalarWhereInput | answersScalarWhereInput[]
  }

  export type commentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type postsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutUsersInput | postsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutUsersInput | postsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: postsUpdateManyWithWhereWithoutUsersInput | postsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type qnasUpdateManyWithoutUsersNestedInput = {
    create?: XOR<qnasCreateWithoutUsersInput, qnasUncheckedCreateWithoutUsersInput> | qnasCreateWithoutUsersInput[] | qnasUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: qnasCreateOrConnectWithoutUsersInput | qnasCreateOrConnectWithoutUsersInput[]
    upsert?: qnasUpsertWithWhereUniqueWithoutUsersInput | qnasUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: qnasCreateManyUsersInputEnvelope
    set?: qnasWhereUniqueInput | qnasWhereUniqueInput[]
    disconnect?: qnasWhereUniqueInput | qnasWhereUniqueInput[]
    delete?: qnasWhereUniqueInput | qnasWhereUniqueInput[]
    connect?: qnasWhereUniqueInput | qnasWhereUniqueInput[]
    update?: qnasUpdateWithWhereUniqueWithoutUsersInput | qnasUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: qnasUpdateManyWithWhereWithoutUsersInput | qnasUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: qnasScalarWhereInput | qnasScalarWhereInput[]
  }

  export type user_healthsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_healthsCreateWithoutUsersInput, user_healthsUncheckedCreateWithoutUsersInput> | user_healthsCreateWithoutUsersInput[] | user_healthsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_healthsCreateOrConnectWithoutUsersInput | user_healthsCreateOrConnectWithoutUsersInput[]
    upsert?: user_healthsUpsertWithWhereUniqueWithoutUsersInput | user_healthsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_healthsCreateManyUsersInputEnvelope
    set?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
    disconnect?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
    delete?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
    connect?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
    update?: user_healthsUpdateWithWhereUniqueWithoutUsersInput | user_healthsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_healthsUpdateManyWithWhereWithoutUsersInput | user_healthsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_healthsScalarWhereInput | user_healthsScalarWhereInput[]
  }

  export type user_medisUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_medisCreateWithoutUsersInput, user_medisUncheckedCreateWithoutUsersInput> | user_medisCreateWithoutUsersInput[] | user_medisUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_medisCreateOrConnectWithoutUsersInput | user_medisCreateOrConnectWithoutUsersInput[]
    upsert?: user_medisUpsertWithWhereUniqueWithoutUsersInput | user_medisUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_medisCreateManyUsersInputEnvelope
    set?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
    disconnect?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
    delete?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
    connect?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
    update?: user_medisUpdateWithWhereUniqueWithoutUsersInput | user_medisUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_medisUpdateManyWithWhereWithoutUsersInput | user_medisUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_medisScalarWhereInput | user_medisScalarWhereInput[]
  }

  export type pharmaciesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<pharmaciesCreateWithoutUsersInput, pharmaciesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: pharmaciesCreateOrConnectWithoutUsersInput
    upsert?: pharmaciesUpsertWithoutUsersInput
    disconnect?: pharmaciesWhereInput | boolean
    delete?: pharmaciesWhereInput | boolean
    connect?: pharmaciesWhereUniqueInput
    update?: XOR<XOR<pharmaciesUpdateToOneWithWhereWithoutUsersInput, pharmaciesUpdateWithoutUsersInput>, pharmaciesUncheckedUpdateWithoutUsersInput>
  }

  export type answersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<answersCreateWithoutUsersInput, answersUncheckedCreateWithoutUsersInput> | answersCreateWithoutUsersInput[] | answersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: answersCreateOrConnectWithoutUsersInput | answersCreateOrConnectWithoutUsersInput[]
    upsert?: answersUpsertWithWhereUniqueWithoutUsersInput | answersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: answersCreateManyUsersInputEnvelope
    set?: answersWhereUniqueInput | answersWhereUniqueInput[]
    disconnect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    delete?: answersWhereUniqueInput | answersWhereUniqueInput[]
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    update?: answersUpdateWithWhereUniqueWithoutUsersInput | answersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: answersUpdateManyWithWhereWithoutUsersInput | answersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: answersScalarWhereInput | answersScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type postsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutUsersInput | postsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutUsersInput | postsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: postsUpdateManyWithWhereWithoutUsersInput | postsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type qnasUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<qnasCreateWithoutUsersInput, qnasUncheckedCreateWithoutUsersInput> | qnasCreateWithoutUsersInput[] | qnasUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: qnasCreateOrConnectWithoutUsersInput | qnasCreateOrConnectWithoutUsersInput[]
    upsert?: qnasUpsertWithWhereUniqueWithoutUsersInput | qnasUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: qnasCreateManyUsersInputEnvelope
    set?: qnasWhereUniqueInput | qnasWhereUniqueInput[]
    disconnect?: qnasWhereUniqueInput | qnasWhereUniqueInput[]
    delete?: qnasWhereUniqueInput | qnasWhereUniqueInput[]
    connect?: qnasWhereUniqueInput | qnasWhereUniqueInput[]
    update?: qnasUpdateWithWhereUniqueWithoutUsersInput | qnasUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: qnasUpdateManyWithWhereWithoutUsersInput | qnasUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: qnasScalarWhereInput | qnasScalarWhereInput[]
  }

  export type user_healthsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_healthsCreateWithoutUsersInput, user_healthsUncheckedCreateWithoutUsersInput> | user_healthsCreateWithoutUsersInput[] | user_healthsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_healthsCreateOrConnectWithoutUsersInput | user_healthsCreateOrConnectWithoutUsersInput[]
    upsert?: user_healthsUpsertWithWhereUniqueWithoutUsersInput | user_healthsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_healthsCreateManyUsersInputEnvelope
    set?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
    disconnect?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
    delete?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
    connect?: user_healthsWhereUniqueInput | user_healthsWhereUniqueInput[]
    update?: user_healthsUpdateWithWhereUniqueWithoutUsersInput | user_healthsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_healthsUpdateManyWithWhereWithoutUsersInput | user_healthsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_healthsScalarWhereInput | user_healthsScalarWhereInput[]
  }

  export type user_medisUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_medisCreateWithoutUsersInput, user_medisUncheckedCreateWithoutUsersInput> | user_medisCreateWithoutUsersInput[] | user_medisUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_medisCreateOrConnectWithoutUsersInput | user_medisCreateOrConnectWithoutUsersInput[]
    upsert?: user_medisUpsertWithWhereUniqueWithoutUsersInput | user_medisUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_medisCreateManyUsersInputEnvelope
    set?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
    disconnect?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
    delete?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
    connect?: user_medisWhereUniqueInput | user_medisWhereUniqueInput[]
    update?: user_medisUpdateWithWhereUniqueWithoutUsersInput | user_medisUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_medisUpdateManyWithWhereWithoutUsersInput | user_medisUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_medisScalarWhereInput | user_medisScalarWhereInput[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type qnasCreateWithoutAnswersInput = {
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    qna_tags?: qna_tagsCreateNestedManyWithoutQnasInput
    users: usersCreateNestedOneWithoutQnasInput
  }

  export type qnasUncheckedCreateWithoutAnswersInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    userId: string
    qna_tags?: qna_tagsUncheckedCreateNestedManyWithoutQnasInput
  }

  export type qnasCreateOrConnectWithoutAnswersInput = {
    where: qnasWhereUniqueInput
    create: XOR<qnasCreateWithoutAnswersInput, qnasUncheckedCreateWithoutAnswersInput>
  }

  export type usersCreateWithoutAnswersInput = {
    id: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    member_type: number
    created_at?: Date | string
    deleted_at?: Date | string | null
    comments?: commentsCreateNestedManyWithoutUsersInput
    posts?: postsCreateNestedManyWithoutUsersInput
    qnas?: qnasCreateNestedManyWithoutUsersInput
    user_healths?: user_healthsCreateNestedManyWithoutUsersInput
    user_medis?: user_medisCreateNestedManyWithoutUsersInput
    pharmacies?: pharmaciesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAnswersInput = {
    id: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    member_type: number
    created_at?: Date | string
    deleted_at?: Date | string | null
    hpid?: string | null
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    qnas?: qnasUncheckedCreateNestedManyWithoutUsersInput
    user_healths?: user_healthsUncheckedCreateNestedManyWithoutUsersInput
    user_medis?: user_medisUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAnswersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAnswersInput, usersUncheckedCreateWithoutAnswersInput>
  }

  export type qnasUpsertWithoutAnswersInput = {
    update: XOR<qnasUpdateWithoutAnswersInput, qnasUncheckedUpdateWithoutAnswersInput>
    create: XOR<qnasCreateWithoutAnswersInput, qnasUncheckedCreateWithoutAnswersInput>
    where?: qnasWhereInput
  }

  export type qnasUpdateToOneWithWhereWithoutAnswersInput = {
    where?: qnasWhereInput
    data: XOR<qnasUpdateWithoutAnswersInput, qnasUncheckedUpdateWithoutAnswersInput>
  }

  export type qnasUpdateWithoutAnswersInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qna_tags?: qna_tagsUpdateManyWithoutQnasNestedInput
    users?: usersUpdateOneRequiredWithoutQnasNestedInput
  }

  export type qnasUncheckedUpdateWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    qna_tags?: qna_tagsUncheckedUpdateManyWithoutQnasNestedInput
  }

  export type usersUpsertWithoutAnswersInput = {
    update: XOR<usersUpdateWithoutAnswersInput, usersUncheckedUpdateWithoutAnswersInput>
    create: XOR<usersCreateWithoutAnswersInput, usersUncheckedCreateWithoutAnswersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAnswersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAnswersInput, usersUncheckedUpdateWithoutAnswersInput>
  }

  export type usersUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutUsersNestedInput
    posts?: postsUpdateManyWithoutUsersNestedInput
    qnas?: qnasUpdateManyWithoutUsersNestedInput
    user_healths?: user_healthsUpdateManyWithoutUsersNestedInput
    user_medis?: user_medisUpdateManyWithoutUsersNestedInput
    pharmacies?: pharmaciesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hpid?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
    qnas?: qnasUncheckedUpdateManyWithoutUsersNestedInput
    user_healths?: user_healthsUncheckedUpdateManyWithoutUsersNestedInput
    user_medis?: user_medisUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type postsCreateWithoutCommentsInput = {
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    post_tags?: post_tagsCreateNestedManyWithoutPostsInput
    users: usersCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    userId: string
    post_tags?: post_tagsUncheckedCreateNestedManyWithoutPostsInput
  }

  export type postsCreateOrConnectWithoutCommentsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
  }

  export type usersCreateWithoutCommentsInput = {
    id: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    member_type: number
    created_at?: Date | string
    deleted_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutUsersInput
    posts?: postsCreateNestedManyWithoutUsersInput
    qnas?: qnasCreateNestedManyWithoutUsersInput
    user_healths?: user_healthsCreateNestedManyWithoutUsersInput
    user_medis?: user_medisCreateNestedManyWithoutUsersInput
    pharmacies?: pharmaciesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCommentsInput = {
    id: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    member_type: number
    created_at?: Date | string
    deleted_at?: Date | string | null
    hpid?: string | null
    answers?: answersUncheckedCreateNestedManyWithoutUsersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    qnas?: qnasUncheckedCreateNestedManyWithoutUsersInput
    user_healths?: user_healthsUncheckedCreateNestedManyWithoutUsersInput
    user_medis?: user_medisUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCommentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
  }

  export type postsUpsertWithoutCommentsInput = {
    update: XOR<postsUpdateWithoutCommentsInput, postsUncheckedUpdateWithoutCommentsInput>
    create: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutCommentsInput, postsUncheckedUpdateWithoutCommentsInput>
  }

  export type postsUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_tags?: post_tagsUpdateManyWithoutPostsNestedInput
    users?: usersUpdateOneRequiredWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    post_tags?: post_tagsUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type usersUpsertWithoutCommentsInput = {
    update: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutUsersNestedInput
    posts?: postsUpdateManyWithoutUsersNestedInput
    qnas?: qnasUpdateManyWithoutUsersNestedInput
    user_healths?: user_healthsUpdateManyWithoutUsersNestedInput
    user_medis?: user_medisUpdateManyWithoutUsersNestedInput
    pharmacies?: pharmaciesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hpid?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: answersUncheckedUpdateManyWithoutUsersNestedInput
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
    qnas?: qnasUncheckedUpdateManyWithoutUsersNestedInput
    user_healths?: user_healthsUncheckedUpdateManyWithoutUsersNestedInput
    user_medis?: user_medisUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type user_healthsCreateWithoutHealthsInput = {
    users: usersCreateNestedOneWithoutUser_healthsInput
  }

  export type user_healthsUncheckedCreateWithoutHealthsInput = {
    id?: number
    userId: string
  }

  export type user_healthsCreateOrConnectWithoutHealthsInput = {
    where: user_healthsWhereUniqueInput
    create: XOR<user_healthsCreateWithoutHealthsInput, user_healthsUncheckedCreateWithoutHealthsInput>
  }

  export type user_healthsCreateManyHealthsInputEnvelope = {
    data: user_healthsCreateManyHealthsInput | user_healthsCreateManyHealthsInput[]
    skipDuplicates?: boolean
  }

  export type user_healthsUpsertWithWhereUniqueWithoutHealthsInput = {
    where: user_healthsWhereUniqueInput
    update: XOR<user_healthsUpdateWithoutHealthsInput, user_healthsUncheckedUpdateWithoutHealthsInput>
    create: XOR<user_healthsCreateWithoutHealthsInput, user_healthsUncheckedCreateWithoutHealthsInput>
  }

  export type user_healthsUpdateWithWhereUniqueWithoutHealthsInput = {
    where: user_healthsWhereUniqueInput
    data: XOR<user_healthsUpdateWithoutHealthsInput, user_healthsUncheckedUpdateWithoutHealthsInput>
  }

  export type user_healthsUpdateManyWithWhereWithoutHealthsInput = {
    where: user_healthsScalarWhereInput
    data: XOR<user_healthsUpdateManyMutationInput, user_healthsUncheckedUpdateManyWithoutHealthsInput>
  }

  export type user_healthsScalarWhereInput = {
    AND?: user_healthsScalarWhereInput | user_healthsScalarWhereInput[]
    OR?: user_healthsScalarWhereInput[]
    NOT?: user_healthsScalarWhereInput | user_healthsScalarWhereInput[]
    id?: IntFilter<"user_healths"> | number
    userId?: StringFilter<"user_healths"> | string
    healthId?: IntFilter<"user_healths"> | number
  }

  export type pharmaciesCreateWithoutInventoriesInput = {
    hpid: string
    duty_addr?: string | null
    duty_mapimg?: string | null
    duty_name: string
    duty_tel1?: string | null
    duty_time1c?: string | null
    duty_time1s?: string | null
    duty_time2c?: string | null
    duty_time2s?: string | null
    duty_time3c?: string | null
    duty_time3s?: string | null
    duty_time4c?: string | null
    duty_time4s?: string | null
    duty_time5c?: string | null
    duty_time5s?: string | null
    duty_time6c?: string | null
    duty_time6s?: string | null
    duty_time7c?: string | null
    duty_time7s?: string | null
    post_cdn1?: string | null
    post_cdn2?: string | null
    wgs84_lat?: Decimal | DecimalJsLike | number | string | null
    wgs84_lon?: Decimal | DecimalJsLike | number | string | null
    users?: usersCreateNestedManyWithoutPharmaciesInput
  }

  export type pharmaciesUncheckedCreateWithoutInventoriesInput = {
    hpid: string
    duty_addr?: string | null
    duty_mapimg?: string | null
    duty_name: string
    duty_tel1?: string | null
    duty_time1c?: string | null
    duty_time1s?: string | null
    duty_time2c?: string | null
    duty_time2s?: string | null
    duty_time3c?: string | null
    duty_time3s?: string | null
    duty_time4c?: string | null
    duty_time4s?: string | null
    duty_time5c?: string | null
    duty_time5s?: string | null
    duty_time6c?: string | null
    duty_time6s?: string | null
    duty_time7c?: string | null
    duty_time7s?: string | null
    post_cdn1?: string | null
    post_cdn2?: string | null
    wgs84_lat?: Decimal | DecimalJsLike | number | string | null
    wgs84_lon?: Decimal | DecimalJsLike | number | string | null
    users?: usersUncheckedCreateNestedManyWithoutPharmaciesInput
  }

  export type pharmaciesCreateOrConnectWithoutInventoriesInput = {
    where: pharmaciesWhereUniqueInput
    create: XOR<pharmaciesCreateWithoutInventoriesInput, pharmaciesUncheckedCreateWithoutInventoriesInput>
  }

  export type medicinesCreateWithoutInventoriesInput = {
    item_seq: string
    item_name: string
    entp_name?: string | null
    item_permit_date?: Date | string | null
    etc_otc_code?: string | null
    class_no?: string | null
    chart?: string | null
    bar_code?: string | null
    material_name?: string | null
    ee_doc_id?: string | null
    user_medis?: user_medisCreateNestedManyWithoutMedicinesInput
  }

  export type medicinesUncheckedCreateWithoutInventoriesInput = {
    item_seq: string
    item_name: string
    entp_name?: string | null
    item_permit_date?: Date | string | null
    etc_otc_code?: string | null
    class_no?: string | null
    chart?: string | null
    bar_code?: string | null
    material_name?: string | null
    ee_doc_id?: string | null
    user_medis?: user_medisUncheckedCreateNestedManyWithoutMedicinesInput
  }

  export type medicinesCreateOrConnectWithoutInventoriesInput = {
    where: medicinesWhereUniqueInput
    create: XOR<medicinesCreateWithoutInventoriesInput, medicinesUncheckedCreateWithoutInventoriesInput>
  }

  export type pharmaciesUpsertWithoutInventoriesInput = {
    update: XOR<pharmaciesUpdateWithoutInventoriesInput, pharmaciesUncheckedUpdateWithoutInventoriesInput>
    create: XOR<pharmaciesCreateWithoutInventoriesInput, pharmaciesUncheckedCreateWithoutInventoriesInput>
    where?: pharmaciesWhereInput
  }

  export type pharmaciesUpdateToOneWithWhereWithoutInventoriesInput = {
    where?: pharmaciesWhereInput
    data: XOR<pharmaciesUpdateWithoutInventoriesInput, pharmaciesUncheckedUpdateWithoutInventoriesInput>
  }

  export type pharmaciesUpdateWithoutInventoriesInput = {
    hpid?: StringFieldUpdateOperationsInput | string
    duty_addr?: NullableStringFieldUpdateOperationsInput | string | null
    duty_mapimg?: NullableStringFieldUpdateOperationsInput | string | null
    duty_name?: StringFieldUpdateOperationsInput | string
    duty_tel1?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time1c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time1s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time2c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time2s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time3c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time3s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time4c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time4s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time5c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time5s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time6c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time6s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time7c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time7s?: NullableStringFieldUpdateOperationsInput | string | null
    post_cdn1?: NullableStringFieldUpdateOperationsInput | string | null
    post_cdn2?: NullableStringFieldUpdateOperationsInput | string | null
    wgs84_lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgs84_lon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    users?: usersUpdateManyWithoutPharmaciesNestedInput
  }

  export type pharmaciesUncheckedUpdateWithoutInventoriesInput = {
    hpid?: StringFieldUpdateOperationsInput | string
    duty_addr?: NullableStringFieldUpdateOperationsInput | string | null
    duty_mapimg?: NullableStringFieldUpdateOperationsInput | string | null
    duty_name?: StringFieldUpdateOperationsInput | string
    duty_tel1?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time1c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time1s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time2c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time2s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time3c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time3s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time4c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time4s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time5c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time5s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time6c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time6s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time7c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time7s?: NullableStringFieldUpdateOperationsInput | string | null
    post_cdn1?: NullableStringFieldUpdateOperationsInput | string | null
    post_cdn2?: NullableStringFieldUpdateOperationsInput | string | null
    wgs84_lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgs84_lon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    users?: usersUncheckedUpdateManyWithoutPharmaciesNestedInput
  }

  export type medicinesUpsertWithoutInventoriesInput = {
    update: XOR<medicinesUpdateWithoutInventoriesInput, medicinesUncheckedUpdateWithoutInventoriesInput>
    create: XOR<medicinesCreateWithoutInventoriesInput, medicinesUncheckedCreateWithoutInventoriesInput>
    where?: medicinesWhereInput
  }

  export type medicinesUpdateToOneWithWhereWithoutInventoriesInput = {
    where?: medicinesWhereInput
    data: XOR<medicinesUpdateWithoutInventoriesInput, medicinesUncheckedUpdateWithoutInventoriesInput>
  }

  export type medicinesUpdateWithoutInventoriesInput = {
    item_seq?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    entp_name?: NullableStringFieldUpdateOperationsInput | string | null
    item_permit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    etc_otc_code?: NullableStringFieldUpdateOperationsInput | string | null
    class_no?: NullableStringFieldUpdateOperationsInput | string | null
    chart?: NullableStringFieldUpdateOperationsInput | string | null
    bar_code?: NullableStringFieldUpdateOperationsInput | string | null
    material_name?: NullableStringFieldUpdateOperationsInput | string | null
    ee_doc_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_medis?: user_medisUpdateManyWithoutMedicinesNestedInput
  }

  export type medicinesUncheckedUpdateWithoutInventoriesInput = {
    item_seq?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    entp_name?: NullableStringFieldUpdateOperationsInput | string | null
    item_permit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    etc_otc_code?: NullableStringFieldUpdateOperationsInput | string | null
    class_no?: NullableStringFieldUpdateOperationsInput | string | null
    chart?: NullableStringFieldUpdateOperationsInput | string | null
    bar_code?: NullableStringFieldUpdateOperationsInput | string | null
    material_name?: NullableStringFieldUpdateOperationsInput | string | null
    ee_doc_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_medis?: user_medisUncheckedUpdateManyWithoutMedicinesNestedInput
  }

  export type user_medisCreateWithoutMedi_timesInput = {
    start_date?: Date | string | null
    end_date?: Date | string | null
    medicines: medicinesCreateNestedOneWithoutUser_medisInput
    users: usersCreateNestedOneWithoutUser_medisInput
  }

  export type user_medisUncheckedCreateWithoutMedi_timesInput = {
    id?: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    userId: string
    itemSeq: string
  }

  export type user_medisCreateOrConnectWithoutMedi_timesInput = {
    where: user_medisWhereUniqueInput
    create: XOR<user_medisCreateWithoutMedi_timesInput, user_medisUncheckedCreateWithoutMedi_timesInput>
  }

  export type user_medisUpsertWithoutMedi_timesInput = {
    update: XOR<user_medisUpdateWithoutMedi_timesInput, user_medisUncheckedUpdateWithoutMedi_timesInput>
    create: XOR<user_medisCreateWithoutMedi_timesInput, user_medisUncheckedCreateWithoutMedi_timesInput>
    where?: user_medisWhereInput
  }

  export type user_medisUpdateToOneWithWhereWithoutMedi_timesInput = {
    where?: user_medisWhereInput
    data: XOR<user_medisUpdateWithoutMedi_timesInput, user_medisUncheckedUpdateWithoutMedi_timesInput>
  }

  export type user_medisUpdateWithoutMedi_timesInput = {
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicines?: medicinesUpdateOneRequiredWithoutUser_medisNestedInput
    users?: usersUpdateOneRequiredWithoutUser_medisNestedInput
  }

  export type user_medisUncheckedUpdateWithoutMedi_timesInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    itemSeq?: StringFieldUpdateOperationsInput | string
  }

  export type inventoriesCreateWithoutMedicinesInput = {
    quantity: number
    pharmacies: pharmaciesCreateNestedOneWithoutInventoriesInput
  }

  export type inventoriesUncheckedCreateWithoutMedicinesInput = {
    id?: number
    quantity: number
    hpid: string
  }

  export type inventoriesCreateOrConnectWithoutMedicinesInput = {
    where: inventoriesWhereUniqueInput
    create: XOR<inventoriesCreateWithoutMedicinesInput, inventoriesUncheckedCreateWithoutMedicinesInput>
  }

  export type inventoriesCreateManyMedicinesInputEnvelope = {
    data: inventoriesCreateManyMedicinesInput | inventoriesCreateManyMedicinesInput[]
    skipDuplicates?: boolean
  }

  export type user_medisCreateWithoutMedicinesInput = {
    start_date?: Date | string | null
    end_date?: Date | string | null
    medi_times?: medi_timesCreateNestedManyWithoutUser_medisInput
    users: usersCreateNestedOneWithoutUser_medisInput
  }

  export type user_medisUncheckedCreateWithoutMedicinesInput = {
    id?: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    userId: string
    medi_times?: medi_timesUncheckedCreateNestedManyWithoutUser_medisInput
  }

  export type user_medisCreateOrConnectWithoutMedicinesInput = {
    where: user_medisWhereUniqueInput
    create: XOR<user_medisCreateWithoutMedicinesInput, user_medisUncheckedCreateWithoutMedicinesInput>
  }

  export type user_medisCreateManyMedicinesInputEnvelope = {
    data: user_medisCreateManyMedicinesInput | user_medisCreateManyMedicinesInput[]
    skipDuplicates?: boolean
  }

  export type inventoriesUpsertWithWhereUniqueWithoutMedicinesInput = {
    where: inventoriesWhereUniqueInput
    update: XOR<inventoriesUpdateWithoutMedicinesInput, inventoriesUncheckedUpdateWithoutMedicinesInput>
    create: XOR<inventoriesCreateWithoutMedicinesInput, inventoriesUncheckedCreateWithoutMedicinesInput>
  }

  export type inventoriesUpdateWithWhereUniqueWithoutMedicinesInput = {
    where: inventoriesWhereUniqueInput
    data: XOR<inventoriesUpdateWithoutMedicinesInput, inventoriesUncheckedUpdateWithoutMedicinesInput>
  }

  export type inventoriesUpdateManyWithWhereWithoutMedicinesInput = {
    where: inventoriesScalarWhereInput
    data: XOR<inventoriesUpdateManyMutationInput, inventoriesUncheckedUpdateManyWithoutMedicinesInput>
  }

  export type inventoriesScalarWhereInput = {
    AND?: inventoriesScalarWhereInput | inventoriesScalarWhereInput[]
    OR?: inventoriesScalarWhereInput[]
    NOT?: inventoriesScalarWhereInput | inventoriesScalarWhereInput[]
    id?: IntFilter<"inventories"> | number
    quantity?: IntFilter<"inventories"> | number
    itemSeq?: StringFilter<"inventories"> | string
    hpid?: StringFilter<"inventories"> | string
  }

  export type user_medisUpsertWithWhereUniqueWithoutMedicinesInput = {
    where: user_medisWhereUniqueInput
    update: XOR<user_medisUpdateWithoutMedicinesInput, user_medisUncheckedUpdateWithoutMedicinesInput>
    create: XOR<user_medisCreateWithoutMedicinesInput, user_medisUncheckedCreateWithoutMedicinesInput>
  }

  export type user_medisUpdateWithWhereUniqueWithoutMedicinesInput = {
    where: user_medisWhereUniqueInput
    data: XOR<user_medisUpdateWithoutMedicinesInput, user_medisUncheckedUpdateWithoutMedicinesInput>
  }

  export type user_medisUpdateManyWithWhereWithoutMedicinesInput = {
    where: user_medisScalarWhereInput
    data: XOR<user_medisUpdateManyMutationInput, user_medisUncheckedUpdateManyWithoutMedicinesInput>
  }

  export type user_medisScalarWhereInput = {
    AND?: user_medisScalarWhereInput | user_medisScalarWhereInput[]
    OR?: user_medisScalarWhereInput[]
    NOT?: user_medisScalarWhereInput | user_medisScalarWhereInput[]
    id?: IntFilter<"user_medis"> | number
    start_date?: DateTimeNullableFilter<"user_medis"> | Date | string | null
    end_date?: DateTimeNullableFilter<"user_medis"> | Date | string | null
    userId?: StringFilter<"user_medis"> | string
    itemSeq?: StringFilter<"user_medis"> | string
  }

  export type inventoriesCreateWithoutPharmaciesInput = {
    quantity: number
    medicines: medicinesCreateNestedOneWithoutInventoriesInput
  }

  export type inventoriesUncheckedCreateWithoutPharmaciesInput = {
    id?: number
    quantity: number
    itemSeq: string
  }

  export type inventoriesCreateOrConnectWithoutPharmaciesInput = {
    where: inventoriesWhereUniqueInput
    create: XOR<inventoriesCreateWithoutPharmaciesInput, inventoriesUncheckedCreateWithoutPharmaciesInput>
  }

  export type inventoriesCreateManyPharmaciesInputEnvelope = {
    data: inventoriesCreateManyPharmaciesInput | inventoriesCreateManyPharmaciesInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutPharmaciesInput = {
    id: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    member_type: number
    created_at?: Date | string
    deleted_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUsersInput
    posts?: postsCreateNestedManyWithoutUsersInput
    qnas?: qnasCreateNestedManyWithoutUsersInput
    user_healths?: user_healthsCreateNestedManyWithoutUsersInput
    user_medis?: user_medisCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPharmaciesInput = {
    id: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    member_type: number
    created_at?: Date | string
    deleted_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    qnas?: qnasUncheckedCreateNestedManyWithoutUsersInput
    user_healths?: user_healthsUncheckedCreateNestedManyWithoutUsersInput
    user_medis?: user_medisUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPharmaciesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPharmaciesInput, usersUncheckedCreateWithoutPharmaciesInput>
  }

  export type usersCreateManyPharmaciesInputEnvelope = {
    data: usersCreateManyPharmaciesInput | usersCreateManyPharmaciesInput[]
    skipDuplicates?: boolean
  }

  export type inventoriesUpsertWithWhereUniqueWithoutPharmaciesInput = {
    where: inventoriesWhereUniqueInput
    update: XOR<inventoriesUpdateWithoutPharmaciesInput, inventoriesUncheckedUpdateWithoutPharmaciesInput>
    create: XOR<inventoriesCreateWithoutPharmaciesInput, inventoriesUncheckedCreateWithoutPharmaciesInput>
  }

  export type inventoriesUpdateWithWhereUniqueWithoutPharmaciesInput = {
    where: inventoriesWhereUniqueInput
    data: XOR<inventoriesUpdateWithoutPharmaciesInput, inventoriesUncheckedUpdateWithoutPharmaciesInput>
  }

  export type inventoriesUpdateManyWithWhereWithoutPharmaciesInput = {
    where: inventoriesScalarWhereInput
    data: XOR<inventoriesUpdateManyMutationInput, inventoriesUncheckedUpdateManyWithoutPharmaciesInput>
  }

  export type usersUpsertWithWhereUniqueWithoutPharmaciesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutPharmaciesInput, usersUncheckedUpdateWithoutPharmaciesInput>
    create: XOR<usersCreateWithoutPharmaciesInput, usersUncheckedCreateWithoutPharmaciesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutPharmaciesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutPharmaciesInput, usersUncheckedUpdateWithoutPharmaciesInput>
  }

  export type usersUpdateManyWithWhereWithoutPharmaciesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutPharmaciesInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: StringFilter<"users"> | string
    email?: StringNullableFilter<"users"> | string | null
    photo?: StringNullableFilter<"users"> | string | null
    name?: StringNullableFilter<"users"> | string | null
    birthyear?: IntNullableFilter<"users"> | number | null
    gender?: StringNullableFilter<"users"> | string | null
    member_type?: IntFilter<"users"> | number
    created_at?: DateTimeFilter<"users"> | Date | string
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    hpid?: StringNullableFilter<"users"> | string | null
  }

  export type postsCreateWithoutPost_tagsInput = {
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    comments?: commentsCreateNestedManyWithoutPostsInput
    users: usersCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutPost_tagsInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    userId: string
    comments?: commentsUncheckedCreateNestedManyWithoutPostsInput
  }

  export type postsCreateOrConnectWithoutPost_tagsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutPost_tagsInput, postsUncheckedCreateWithoutPost_tagsInput>
  }

  export type tagsCreateWithoutPost_tagsInput = {
    tag_name: string
    qna_tags?: qna_tagsCreateNestedManyWithoutTagsInput
  }

  export type tagsUncheckedCreateWithoutPost_tagsInput = {
    id?: number
    tag_name: string
    qna_tags?: qna_tagsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type tagsCreateOrConnectWithoutPost_tagsInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutPost_tagsInput, tagsUncheckedCreateWithoutPost_tagsInput>
  }

  export type postsUpsertWithoutPost_tagsInput = {
    update: XOR<postsUpdateWithoutPost_tagsInput, postsUncheckedUpdateWithoutPost_tagsInput>
    create: XOR<postsCreateWithoutPost_tagsInput, postsUncheckedCreateWithoutPost_tagsInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutPost_tagsInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutPost_tagsInput, postsUncheckedUpdateWithoutPost_tagsInput>
  }

  export type postsUpdateWithoutPost_tagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutPostsNestedInput
    users?: usersUpdateOneRequiredWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateWithoutPost_tagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    comments?: commentsUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type tagsUpsertWithoutPost_tagsInput = {
    update: XOR<tagsUpdateWithoutPost_tagsInput, tagsUncheckedUpdateWithoutPost_tagsInput>
    create: XOR<tagsCreateWithoutPost_tagsInput, tagsUncheckedCreateWithoutPost_tagsInput>
    where?: tagsWhereInput
  }

  export type tagsUpdateToOneWithWhereWithoutPost_tagsInput = {
    where?: tagsWhereInput
    data: XOR<tagsUpdateWithoutPost_tagsInput, tagsUncheckedUpdateWithoutPost_tagsInput>
  }

  export type tagsUpdateWithoutPost_tagsInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    qna_tags?: qna_tagsUpdateManyWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateWithoutPost_tagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    qna_tags?: qna_tagsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type commentsCreateWithoutPostsInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    users: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutPostsInput = {
    id?: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    userId: string
  }

  export type commentsCreateOrConnectWithoutPostsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutPostsInput, commentsUncheckedCreateWithoutPostsInput>
  }

  export type commentsCreateManyPostsInputEnvelope = {
    data: commentsCreateManyPostsInput | commentsCreateManyPostsInput[]
    skipDuplicates?: boolean
  }

  export type post_tagsCreateWithoutPostsInput = {
    tags: tagsCreateNestedOneWithoutPost_tagsInput
  }

  export type post_tagsUncheckedCreateWithoutPostsInput = {
    id?: number
    tagId: number
  }

  export type post_tagsCreateOrConnectWithoutPostsInput = {
    where: post_tagsWhereUniqueInput
    create: XOR<post_tagsCreateWithoutPostsInput, post_tagsUncheckedCreateWithoutPostsInput>
  }

  export type post_tagsCreateManyPostsInputEnvelope = {
    data: post_tagsCreateManyPostsInput | post_tagsCreateManyPostsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutPostsInput = {
    id: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    member_type: number
    created_at?: Date | string
    deleted_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUsersInput
    qnas?: qnasCreateNestedManyWithoutUsersInput
    user_healths?: user_healthsCreateNestedManyWithoutUsersInput
    user_medis?: user_medisCreateNestedManyWithoutUsersInput
    pharmacies?: pharmaciesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPostsInput = {
    id: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    member_type: number
    created_at?: Date | string
    deleted_at?: Date | string | null
    hpid?: string | null
    answers?: answersUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    qnas?: qnasUncheckedCreateNestedManyWithoutUsersInput
    user_healths?: user_healthsUncheckedCreateNestedManyWithoutUsersInput
    user_medis?: user_medisUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPostsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
  }

  export type commentsUpsertWithWhereUniqueWithoutPostsInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutPostsInput, commentsUncheckedUpdateWithoutPostsInput>
    create: XOR<commentsCreateWithoutPostsInput, commentsUncheckedCreateWithoutPostsInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutPostsInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutPostsInput, commentsUncheckedUpdateWithoutPostsInput>
  }

  export type commentsUpdateManyWithWhereWithoutPostsInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutPostsInput>
  }

  export type commentsScalarWhereInput = {
    AND?: commentsScalarWhereInput | commentsScalarWhereInput[]
    OR?: commentsScalarWhereInput[]
    NOT?: commentsScalarWhereInput | commentsScalarWhereInput[]
    id?: IntFilter<"comments"> | number
    content?: StringFilter<"comments"> | string
    created_at?: DateTimeFilter<"comments"> | Date | string
    updated_at?: DateTimeFilter<"comments"> | Date | string
    deleted_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    userId?: StringFilter<"comments"> | string
    postId?: IntFilter<"comments"> | number
  }

  export type post_tagsUpsertWithWhereUniqueWithoutPostsInput = {
    where: post_tagsWhereUniqueInput
    update: XOR<post_tagsUpdateWithoutPostsInput, post_tagsUncheckedUpdateWithoutPostsInput>
    create: XOR<post_tagsCreateWithoutPostsInput, post_tagsUncheckedCreateWithoutPostsInput>
  }

  export type post_tagsUpdateWithWhereUniqueWithoutPostsInput = {
    where: post_tagsWhereUniqueInput
    data: XOR<post_tagsUpdateWithoutPostsInput, post_tagsUncheckedUpdateWithoutPostsInput>
  }

  export type post_tagsUpdateManyWithWhereWithoutPostsInput = {
    where: post_tagsScalarWhereInput
    data: XOR<post_tagsUpdateManyMutationInput, post_tagsUncheckedUpdateManyWithoutPostsInput>
  }

  export type post_tagsScalarWhereInput = {
    AND?: post_tagsScalarWhereInput | post_tagsScalarWhereInput[]
    OR?: post_tagsScalarWhereInput[]
    NOT?: post_tagsScalarWhereInput | post_tagsScalarWhereInput[]
    id?: IntFilter<"post_tags"> | number
    tagId?: IntFilter<"post_tags"> | number
    postId?: IntFilter<"post_tags"> | number
  }

  export type usersUpsertWithoutPostsInput = {
    update: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPostsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
  }

  export type usersUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUsersNestedInput
    qnas?: qnasUpdateManyWithoutUsersNestedInput
    user_healths?: user_healthsUpdateManyWithoutUsersNestedInput
    user_medis?: user_medisUpdateManyWithoutUsersNestedInput
    pharmacies?: pharmaciesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hpid?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: answersUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    qnas?: qnasUncheckedUpdateManyWithoutUsersNestedInput
    user_healths?: user_healthsUncheckedUpdateManyWithoutUsersNestedInput
    user_medis?: user_medisUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type qnasCreateWithoutQna_tagsInput = {
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutQnasInput
    users: usersCreateNestedOneWithoutQnasInput
  }

  export type qnasUncheckedCreateWithoutQna_tagsInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    userId: string
    answers?: answersUncheckedCreateNestedManyWithoutQnasInput
  }

  export type qnasCreateOrConnectWithoutQna_tagsInput = {
    where: qnasWhereUniqueInput
    create: XOR<qnasCreateWithoutQna_tagsInput, qnasUncheckedCreateWithoutQna_tagsInput>
  }

  export type tagsCreateWithoutQna_tagsInput = {
    tag_name: string
    post_tags?: post_tagsCreateNestedManyWithoutTagsInput
  }

  export type tagsUncheckedCreateWithoutQna_tagsInput = {
    id?: number
    tag_name: string
    post_tags?: post_tagsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type tagsCreateOrConnectWithoutQna_tagsInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutQna_tagsInput, tagsUncheckedCreateWithoutQna_tagsInput>
  }

  export type qnasUpsertWithoutQna_tagsInput = {
    update: XOR<qnasUpdateWithoutQna_tagsInput, qnasUncheckedUpdateWithoutQna_tagsInput>
    create: XOR<qnasCreateWithoutQna_tagsInput, qnasUncheckedCreateWithoutQna_tagsInput>
    where?: qnasWhereInput
  }

  export type qnasUpdateToOneWithWhereWithoutQna_tagsInput = {
    where?: qnasWhereInput
    data: XOR<qnasUpdateWithoutQna_tagsInput, qnasUncheckedUpdateWithoutQna_tagsInput>
  }

  export type qnasUpdateWithoutQna_tagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutQnasNestedInput
    users?: usersUpdateOneRequiredWithoutQnasNestedInput
  }

  export type qnasUncheckedUpdateWithoutQna_tagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    answers?: answersUncheckedUpdateManyWithoutQnasNestedInput
  }

  export type tagsUpsertWithoutQna_tagsInput = {
    update: XOR<tagsUpdateWithoutQna_tagsInput, tagsUncheckedUpdateWithoutQna_tagsInput>
    create: XOR<tagsCreateWithoutQna_tagsInput, tagsUncheckedCreateWithoutQna_tagsInput>
    where?: tagsWhereInput
  }

  export type tagsUpdateToOneWithWhereWithoutQna_tagsInput = {
    where?: tagsWhereInput
    data: XOR<tagsUpdateWithoutQna_tagsInput, tagsUncheckedUpdateWithoutQna_tagsInput>
  }

  export type tagsUpdateWithoutQna_tagsInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    post_tags?: post_tagsUpdateManyWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateWithoutQna_tagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    post_tags?: post_tagsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type answersCreateWithoutQnasInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_accepted?: boolean
    users: usersCreateNestedOneWithoutAnswersInput
  }

  export type answersUncheckedCreateWithoutQnasInput = {
    id?: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_accepted?: boolean
    userId: string
  }

  export type answersCreateOrConnectWithoutQnasInput = {
    where: answersWhereUniqueInput
    create: XOR<answersCreateWithoutQnasInput, answersUncheckedCreateWithoutQnasInput>
  }

  export type answersCreateManyQnasInputEnvelope = {
    data: answersCreateManyQnasInput | answersCreateManyQnasInput[]
    skipDuplicates?: boolean
  }

  export type qna_tagsCreateWithoutQnasInput = {
    tags: tagsCreateNestedOneWithoutQna_tagsInput
  }

  export type qna_tagsUncheckedCreateWithoutQnasInput = {
    id?: number
    tagId: number
  }

  export type qna_tagsCreateOrConnectWithoutQnasInput = {
    where: qna_tagsWhereUniqueInput
    create: XOR<qna_tagsCreateWithoutQnasInput, qna_tagsUncheckedCreateWithoutQnasInput>
  }

  export type qna_tagsCreateManyQnasInputEnvelope = {
    data: qna_tagsCreateManyQnasInput | qna_tagsCreateManyQnasInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutQnasInput = {
    id: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    member_type: number
    created_at?: Date | string
    deleted_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUsersInput
    posts?: postsCreateNestedManyWithoutUsersInput
    user_healths?: user_healthsCreateNestedManyWithoutUsersInput
    user_medis?: user_medisCreateNestedManyWithoutUsersInput
    pharmacies?: pharmaciesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutQnasInput = {
    id: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    member_type: number
    created_at?: Date | string
    deleted_at?: Date | string | null
    hpid?: string | null
    answers?: answersUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    user_healths?: user_healthsUncheckedCreateNestedManyWithoutUsersInput
    user_medis?: user_medisUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutQnasInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutQnasInput, usersUncheckedCreateWithoutQnasInput>
  }

  export type answersUpsertWithWhereUniqueWithoutQnasInput = {
    where: answersWhereUniqueInput
    update: XOR<answersUpdateWithoutQnasInput, answersUncheckedUpdateWithoutQnasInput>
    create: XOR<answersCreateWithoutQnasInput, answersUncheckedCreateWithoutQnasInput>
  }

  export type answersUpdateWithWhereUniqueWithoutQnasInput = {
    where: answersWhereUniqueInput
    data: XOR<answersUpdateWithoutQnasInput, answersUncheckedUpdateWithoutQnasInput>
  }

  export type answersUpdateManyWithWhereWithoutQnasInput = {
    where: answersScalarWhereInput
    data: XOR<answersUpdateManyMutationInput, answersUncheckedUpdateManyWithoutQnasInput>
  }

  export type answersScalarWhereInput = {
    AND?: answersScalarWhereInput | answersScalarWhereInput[]
    OR?: answersScalarWhereInput[]
    NOT?: answersScalarWhereInput | answersScalarWhereInput[]
    id?: IntFilter<"answers"> | number
    content?: StringFilter<"answers"> | string
    created_at?: DateTimeFilter<"answers"> | Date | string
    updated_at?: DateTimeFilter<"answers"> | Date | string
    deleted_at?: DateTimeNullableFilter<"answers"> | Date | string | null
    is_accepted?: BoolFilter<"answers"> | boolean
    userId?: StringFilter<"answers"> | string
    qnaId?: IntFilter<"answers"> | number
  }

  export type qna_tagsUpsertWithWhereUniqueWithoutQnasInput = {
    where: qna_tagsWhereUniqueInput
    update: XOR<qna_tagsUpdateWithoutQnasInput, qna_tagsUncheckedUpdateWithoutQnasInput>
    create: XOR<qna_tagsCreateWithoutQnasInput, qna_tagsUncheckedCreateWithoutQnasInput>
  }

  export type qna_tagsUpdateWithWhereUniqueWithoutQnasInput = {
    where: qna_tagsWhereUniqueInput
    data: XOR<qna_tagsUpdateWithoutQnasInput, qna_tagsUncheckedUpdateWithoutQnasInput>
  }

  export type qna_tagsUpdateManyWithWhereWithoutQnasInput = {
    where: qna_tagsScalarWhereInput
    data: XOR<qna_tagsUpdateManyMutationInput, qna_tagsUncheckedUpdateManyWithoutQnasInput>
  }

  export type qna_tagsScalarWhereInput = {
    AND?: qna_tagsScalarWhereInput | qna_tagsScalarWhereInput[]
    OR?: qna_tagsScalarWhereInput[]
    NOT?: qna_tagsScalarWhereInput | qna_tagsScalarWhereInput[]
    id?: IntFilter<"qna_tags"> | number
    tagId?: IntFilter<"qna_tags"> | number
    qnaId?: IntFilter<"qna_tags"> | number
  }

  export type usersUpsertWithoutQnasInput = {
    update: XOR<usersUpdateWithoutQnasInput, usersUncheckedUpdateWithoutQnasInput>
    create: XOR<usersCreateWithoutQnasInput, usersUncheckedCreateWithoutQnasInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutQnasInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutQnasInput, usersUncheckedUpdateWithoutQnasInput>
  }

  export type usersUpdateWithoutQnasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUsersNestedInput
    posts?: postsUpdateManyWithoutUsersNestedInput
    user_healths?: user_healthsUpdateManyWithoutUsersNestedInput
    user_medis?: user_medisUpdateManyWithoutUsersNestedInput
    pharmacies?: pharmaciesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutQnasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hpid?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: answersUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
    user_healths?: user_healthsUncheckedUpdateManyWithoutUsersNestedInput
    user_medis?: user_medisUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type post_tagsCreateWithoutTagsInput = {
    posts: postsCreateNestedOneWithoutPost_tagsInput
  }

  export type post_tagsUncheckedCreateWithoutTagsInput = {
    id?: number
    postId: number
  }

  export type post_tagsCreateOrConnectWithoutTagsInput = {
    where: post_tagsWhereUniqueInput
    create: XOR<post_tagsCreateWithoutTagsInput, post_tagsUncheckedCreateWithoutTagsInput>
  }

  export type post_tagsCreateManyTagsInputEnvelope = {
    data: post_tagsCreateManyTagsInput | post_tagsCreateManyTagsInput[]
    skipDuplicates?: boolean
  }

  export type qna_tagsCreateWithoutTagsInput = {
    qnas: qnasCreateNestedOneWithoutQna_tagsInput
  }

  export type qna_tagsUncheckedCreateWithoutTagsInput = {
    id?: number
    qnaId: number
  }

  export type qna_tagsCreateOrConnectWithoutTagsInput = {
    where: qna_tagsWhereUniqueInput
    create: XOR<qna_tagsCreateWithoutTagsInput, qna_tagsUncheckedCreateWithoutTagsInput>
  }

  export type qna_tagsCreateManyTagsInputEnvelope = {
    data: qna_tagsCreateManyTagsInput | qna_tagsCreateManyTagsInput[]
    skipDuplicates?: boolean
  }

  export type post_tagsUpsertWithWhereUniqueWithoutTagsInput = {
    where: post_tagsWhereUniqueInput
    update: XOR<post_tagsUpdateWithoutTagsInput, post_tagsUncheckedUpdateWithoutTagsInput>
    create: XOR<post_tagsCreateWithoutTagsInput, post_tagsUncheckedCreateWithoutTagsInput>
  }

  export type post_tagsUpdateWithWhereUniqueWithoutTagsInput = {
    where: post_tagsWhereUniqueInput
    data: XOR<post_tagsUpdateWithoutTagsInput, post_tagsUncheckedUpdateWithoutTagsInput>
  }

  export type post_tagsUpdateManyWithWhereWithoutTagsInput = {
    where: post_tagsScalarWhereInput
    data: XOR<post_tagsUpdateManyMutationInput, post_tagsUncheckedUpdateManyWithoutTagsInput>
  }

  export type qna_tagsUpsertWithWhereUniqueWithoutTagsInput = {
    where: qna_tagsWhereUniqueInput
    update: XOR<qna_tagsUpdateWithoutTagsInput, qna_tagsUncheckedUpdateWithoutTagsInput>
    create: XOR<qna_tagsCreateWithoutTagsInput, qna_tagsUncheckedCreateWithoutTagsInput>
  }

  export type qna_tagsUpdateWithWhereUniqueWithoutTagsInput = {
    where: qna_tagsWhereUniqueInput
    data: XOR<qna_tagsUpdateWithoutTagsInput, qna_tagsUncheckedUpdateWithoutTagsInput>
  }

  export type qna_tagsUpdateManyWithWhereWithoutTagsInput = {
    where: qna_tagsScalarWhereInput
    data: XOR<qna_tagsUpdateManyMutationInput, qna_tagsUncheckedUpdateManyWithoutTagsInput>
  }

  export type healthsCreateWithoutUser_healthsInput = {
    health_name: string
  }

  export type healthsUncheckedCreateWithoutUser_healthsInput = {
    id?: number
    health_name: string
  }

  export type healthsCreateOrConnectWithoutUser_healthsInput = {
    where: healthsWhereUniqueInput
    create: XOR<healthsCreateWithoutUser_healthsInput, healthsUncheckedCreateWithoutUser_healthsInput>
  }

  export type usersCreateWithoutUser_healthsInput = {
    id: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    member_type: number
    created_at?: Date | string
    deleted_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUsersInput
    posts?: postsCreateNestedManyWithoutUsersInput
    qnas?: qnasCreateNestedManyWithoutUsersInput
    user_medis?: user_medisCreateNestedManyWithoutUsersInput
    pharmacies?: pharmaciesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_healthsInput = {
    id: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    member_type: number
    created_at?: Date | string
    deleted_at?: Date | string | null
    hpid?: string | null
    answers?: answersUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    qnas?: qnasUncheckedCreateNestedManyWithoutUsersInput
    user_medis?: user_medisUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_healthsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_healthsInput, usersUncheckedCreateWithoutUser_healthsInput>
  }

  export type healthsUpsertWithoutUser_healthsInput = {
    update: XOR<healthsUpdateWithoutUser_healthsInput, healthsUncheckedUpdateWithoutUser_healthsInput>
    create: XOR<healthsCreateWithoutUser_healthsInput, healthsUncheckedCreateWithoutUser_healthsInput>
    where?: healthsWhereInput
  }

  export type healthsUpdateToOneWithWhereWithoutUser_healthsInput = {
    where?: healthsWhereInput
    data: XOR<healthsUpdateWithoutUser_healthsInput, healthsUncheckedUpdateWithoutUser_healthsInput>
  }

  export type healthsUpdateWithoutUser_healthsInput = {
    health_name?: StringFieldUpdateOperationsInput | string
  }

  export type healthsUncheckedUpdateWithoutUser_healthsInput = {
    id?: IntFieldUpdateOperationsInput | number
    health_name?: StringFieldUpdateOperationsInput | string
  }

  export type usersUpsertWithoutUser_healthsInput = {
    update: XOR<usersUpdateWithoutUser_healthsInput, usersUncheckedUpdateWithoutUser_healthsInput>
    create: XOR<usersCreateWithoutUser_healthsInput, usersUncheckedCreateWithoutUser_healthsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_healthsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_healthsInput, usersUncheckedUpdateWithoutUser_healthsInput>
  }

  export type usersUpdateWithoutUser_healthsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUsersNestedInput
    posts?: postsUpdateManyWithoutUsersNestedInput
    qnas?: qnasUpdateManyWithoutUsersNestedInput
    user_medis?: user_medisUpdateManyWithoutUsersNestedInput
    pharmacies?: pharmaciesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_healthsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hpid?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: answersUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
    qnas?: qnasUncheckedUpdateManyWithoutUsersNestedInput
    user_medis?: user_medisUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type medi_timesCreateWithoutUser_medisInput = {
    medi_time: number
  }

  export type medi_timesUncheckedCreateWithoutUser_medisInput = {
    id?: number
    medi_time: number
  }

  export type medi_timesCreateOrConnectWithoutUser_medisInput = {
    where: medi_timesWhereUniqueInput
    create: XOR<medi_timesCreateWithoutUser_medisInput, medi_timesUncheckedCreateWithoutUser_medisInput>
  }

  export type medi_timesCreateManyUser_medisInputEnvelope = {
    data: medi_timesCreateManyUser_medisInput | medi_timesCreateManyUser_medisInput[]
    skipDuplicates?: boolean
  }

  export type medicinesCreateWithoutUser_medisInput = {
    item_seq: string
    item_name: string
    entp_name?: string | null
    item_permit_date?: Date | string | null
    etc_otc_code?: string | null
    class_no?: string | null
    chart?: string | null
    bar_code?: string | null
    material_name?: string | null
    ee_doc_id?: string | null
    inventories?: inventoriesCreateNestedManyWithoutMedicinesInput
  }

  export type medicinesUncheckedCreateWithoutUser_medisInput = {
    item_seq: string
    item_name: string
    entp_name?: string | null
    item_permit_date?: Date | string | null
    etc_otc_code?: string | null
    class_no?: string | null
    chart?: string | null
    bar_code?: string | null
    material_name?: string | null
    ee_doc_id?: string | null
    inventories?: inventoriesUncheckedCreateNestedManyWithoutMedicinesInput
  }

  export type medicinesCreateOrConnectWithoutUser_medisInput = {
    where: medicinesWhereUniqueInput
    create: XOR<medicinesCreateWithoutUser_medisInput, medicinesUncheckedCreateWithoutUser_medisInput>
  }

  export type usersCreateWithoutUser_medisInput = {
    id: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    member_type: number
    created_at?: Date | string
    deleted_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUsersInput
    posts?: postsCreateNestedManyWithoutUsersInput
    qnas?: qnasCreateNestedManyWithoutUsersInput
    user_healths?: user_healthsCreateNestedManyWithoutUsersInput
    pharmacies?: pharmaciesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_medisInput = {
    id: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    member_type: number
    created_at?: Date | string
    deleted_at?: Date | string | null
    hpid?: string | null
    answers?: answersUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    qnas?: qnasUncheckedCreateNestedManyWithoutUsersInput
    user_healths?: user_healthsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_medisInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_medisInput, usersUncheckedCreateWithoutUser_medisInput>
  }

  export type medi_timesUpsertWithWhereUniqueWithoutUser_medisInput = {
    where: medi_timesWhereUniqueInput
    update: XOR<medi_timesUpdateWithoutUser_medisInput, medi_timesUncheckedUpdateWithoutUser_medisInput>
    create: XOR<medi_timesCreateWithoutUser_medisInput, medi_timesUncheckedCreateWithoutUser_medisInput>
  }

  export type medi_timesUpdateWithWhereUniqueWithoutUser_medisInput = {
    where: medi_timesWhereUniqueInput
    data: XOR<medi_timesUpdateWithoutUser_medisInput, medi_timesUncheckedUpdateWithoutUser_medisInput>
  }

  export type medi_timesUpdateManyWithWhereWithoutUser_medisInput = {
    where: medi_timesScalarWhereInput
    data: XOR<medi_timesUpdateManyMutationInput, medi_timesUncheckedUpdateManyWithoutUser_medisInput>
  }

  export type medi_timesScalarWhereInput = {
    AND?: medi_timesScalarWhereInput | medi_timesScalarWhereInput[]
    OR?: medi_timesScalarWhereInput[]
    NOT?: medi_timesScalarWhereInput | medi_timesScalarWhereInput[]
    id?: IntFilter<"medi_times"> | number
    medi_time?: IntFilter<"medi_times"> | number
    userMediId?: IntFilter<"medi_times"> | number
  }

  export type medicinesUpsertWithoutUser_medisInput = {
    update: XOR<medicinesUpdateWithoutUser_medisInput, medicinesUncheckedUpdateWithoutUser_medisInput>
    create: XOR<medicinesCreateWithoutUser_medisInput, medicinesUncheckedCreateWithoutUser_medisInput>
    where?: medicinesWhereInput
  }

  export type medicinesUpdateToOneWithWhereWithoutUser_medisInput = {
    where?: medicinesWhereInput
    data: XOR<medicinesUpdateWithoutUser_medisInput, medicinesUncheckedUpdateWithoutUser_medisInput>
  }

  export type medicinesUpdateWithoutUser_medisInput = {
    item_seq?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    entp_name?: NullableStringFieldUpdateOperationsInput | string | null
    item_permit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    etc_otc_code?: NullableStringFieldUpdateOperationsInput | string | null
    class_no?: NullableStringFieldUpdateOperationsInput | string | null
    chart?: NullableStringFieldUpdateOperationsInput | string | null
    bar_code?: NullableStringFieldUpdateOperationsInput | string | null
    material_name?: NullableStringFieldUpdateOperationsInput | string | null
    ee_doc_id?: NullableStringFieldUpdateOperationsInput | string | null
    inventories?: inventoriesUpdateManyWithoutMedicinesNestedInput
  }

  export type medicinesUncheckedUpdateWithoutUser_medisInput = {
    item_seq?: StringFieldUpdateOperationsInput | string
    item_name?: StringFieldUpdateOperationsInput | string
    entp_name?: NullableStringFieldUpdateOperationsInput | string | null
    item_permit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    etc_otc_code?: NullableStringFieldUpdateOperationsInput | string | null
    class_no?: NullableStringFieldUpdateOperationsInput | string | null
    chart?: NullableStringFieldUpdateOperationsInput | string | null
    bar_code?: NullableStringFieldUpdateOperationsInput | string | null
    material_name?: NullableStringFieldUpdateOperationsInput | string | null
    ee_doc_id?: NullableStringFieldUpdateOperationsInput | string | null
    inventories?: inventoriesUncheckedUpdateManyWithoutMedicinesNestedInput
  }

  export type usersUpsertWithoutUser_medisInput = {
    update: XOR<usersUpdateWithoutUser_medisInput, usersUncheckedUpdateWithoutUser_medisInput>
    create: XOR<usersCreateWithoutUser_medisInput, usersUncheckedCreateWithoutUser_medisInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_medisInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_medisInput, usersUncheckedUpdateWithoutUser_medisInput>
  }

  export type usersUpdateWithoutUser_medisInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUsersNestedInput
    posts?: postsUpdateManyWithoutUsersNestedInput
    qnas?: qnasUpdateManyWithoutUsersNestedInput
    user_healths?: user_healthsUpdateManyWithoutUsersNestedInput
    pharmacies?: pharmaciesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_medisInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hpid?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: answersUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
    qnas?: qnasUncheckedUpdateManyWithoutUsersNestedInput
    user_healths?: user_healthsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type answersCreateWithoutUsersInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_accepted?: boolean
    qnas: qnasCreateNestedOneWithoutAnswersInput
  }

  export type answersUncheckedCreateWithoutUsersInput = {
    id?: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_accepted?: boolean
    qnaId: number
  }

  export type answersCreateOrConnectWithoutUsersInput = {
    where: answersWhereUniqueInput
    create: XOR<answersCreateWithoutUsersInput, answersUncheckedCreateWithoutUsersInput>
  }

  export type answersCreateManyUsersInputEnvelope = {
    data: answersCreateManyUsersInput | answersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type commentsCreateWithoutUsersInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    posts: postsCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutUsersInput = {
    id?: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    postId: number
  }

  export type commentsCreateOrConnectWithoutUsersInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsCreateManyUsersInputEnvelope = {
    data: commentsCreateManyUsersInput | commentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type postsCreateWithoutUsersInput = {
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    comments?: commentsCreateNestedManyWithoutPostsInput
    post_tags?: post_tagsCreateNestedManyWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutPostsInput
    post_tags?: post_tagsUncheckedCreateNestedManyWithoutPostsInput
  }

  export type postsCreateOrConnectWithoutUsersInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput>
  }

  export type postsCreateManyUsersInputEnvelope = {
    data: postsCreateManyUsersInput | postsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type qnasCreateWithoutUsersInput = {
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutQnasInput
    qna_tags?: qna_tagsCreateNestedManyWithoutQnasInput
  }

  export type qnasUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutQnasInput
    qna_tags?: qna_tagsUncheckedCreateNestedManyWithoutQnasInput
  }

  export type qnasCreateOrConnectWithoutUsersInput = {
    where: qnasWhereUniqueInput
    create: XOR<qnasCreateWithoutUsersInput, qnasUncheckedCreateWithoutUsersInput>
  }

  export type qnasCreateManyUsersInputEnvelope = {
    data: qnasCreateManyUsersInput | qnasCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_healthsCreateWithoutUsersInput = {
    healths: healthsCreateNestedOneWithoutUser_healthsInput
  }

  export type user_healthsUncheckedCreateWithoutUsersInput = {
    id?: number
    healthId: number
  }

  export type user_healthsCreateOrConnectWithoutUsersInput = {
    where: user_healthsWhereUniqueInput
    create: XOR<user_healthsCreateWithoutUsersInput, user_healthsUncheckedCreateWithoutUsersInput>
  }

  export type user_healthsCreateManyUsersInputEnvelope = {
    data: user_healthsCreateManyUsersInput | user_healthsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_medisCreateWithoutUsersInput = {
    start_date?: Date | string | null
    end_date?: Date | string | null
    medi_times?: medi_timesCreateNestedManyWithoutUser_medisInput
    medicines: medicinesCreateNestedOneWithoutUser_medisInput
  }

  export type user_medisUncheckedCreateWithoutUsersInput = {
    id?: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    itemSeq: string
    medi_times?: medi_timesUncheckedCreateNestedManyWithoutUser_medisInput
  }

  export type user_medisCreateOrConnectWithoutUsersInput = {
    where: user_medisWhereUniqueInput
    create: XOR<user_medisCreateWithoutUsersInput, user_medisUncheckedCreateWithoutUsersInput>
  }

  export type user_medisCreateManyUsersInputEnvelope = {
    data: user_medisCreateManyUsersInput | user_medisCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type pharmaciesCreateWithoutUsersInput = {
    hpid: string
    duty_addr?: string | null
    duty_mapimg?: string | null
    duty_name: string
    duty_tel1?: string | null
    duty_time1c?: string | null
    duty_time1s?: string | null
    duty_time2c?: string | null
    duty_time2s?: string | null
    duty_time3c?: string | null
    duty_time3s?: string | null
    duty_time4c?: string | null
    duty_time4s?: string | null
    duty_time5c?: string | null
    duty_time5s?: string | null
    duty_time6c?: string | null
    duty_time6s?: string | null
    duty_time7c?: string | null
    duty_time7s?: string | null
    post_cdn1?: string | null
    post_cdn2?: string | null
    wgs84_lat?: Decimal | DecimalJsLike | number | string | null
    wgs84_lon?: Decimal | DecimalJsLike | number | string | null
    inventories?: inventoriesCreateNestedManyWithoutPharmaciesInput
  }

  export type pharmaciesUncheckedCreateWithoutUsersInput = {
    hpid: string
    duty_addr?: string | null
    duty_mapimg?: string | null
    duty_name: string
    duty_tel1?: string | null
    duty_time1c?: string | null
    duty_time1s?: string | null
    duty_time2c?: string | null
    duty_time2s?: string | null
    duty_time3c?: string | null
    duty_time3s?: string | null
    duty_time4c?: string | null
    duty_time4s?: string | null
    duty_time5c?: string | null
    duty_time5s?: string | null
    duty_time6c?: string | null
    duty_time6s?: string | null
    duty_time7c?: string | null
    duty_time7s?: string | null
    post_cdn1?: string | null
    post_cdn2?: string | null
    wgs84_lat?: Decimal | DecimalJsLike | number | string | null
    wgs84_lon?: Decimal | DecimalJsLike | number | string | null
    inventories?: inventoriesUncheckedCreateNestedManyWithoutPharmaciesInput
  }

  export type pharmaciesCreateOrConnectWithoutUsersInput = {
    where: pharmaciesWhereUniqueInput
    create: XOR<pharmaciesCreateWithoutUsersInput, pharmaciesUncheckedCreateWithoutUsersInput>
  }

  export type answersUpsertWithWhereUniqueWithoutUsersInput = {
    where: answersWhereUniqueInput
    update: XOR<answersUpdateWithoutUsersInput, answersUncheckedUpdateWithoutUsersInput>
    create: XOR<answersCreateWithoutUsersInput, answersUncheckedCreateWithoutUsersInput>
  }

  export type answersUpdateWithWhereUniqueWithoutUsersInput = {
    where: answersWhereUniqueInput
    data: XOR<answersUpdateWithoutUsersInput, answersUncheckedUpdateWithoutUsersInput>
  }

  export type answersUpdateManyWithWhereWithoutUsersInput = {
    where: answersScalarWhereInput
    data: XOR<answersUpdateManyMutationInput, answersUncheckedUpdateManyWithoutUsersInput>
  }

  export type commentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
  }

  export type commentsUpdateManyWithWhereWithoutUsersInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type postsUpsertWithWhereUniqueWithoutUsersInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutUsersInput, postsUncheckedUpdateWithoutUsersInput>
    create: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput>
  }

  export type postsUpdateWithWhereUniqueWithoutUsersInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutUsersInput, postsUncheckedUpdateWithoutUsersInput>
  }

  export type postsUpdateManyWithWhereWithoutUsersInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutUsersInput>
  }

  export type postsScalarWhereInput = {
    AND?: postsScalarWhereInput | postsScalarWhereInput[]
    OR?: postsScalarWhereInput[]
    NOT?: postsScalarWhereInput | postsScalarWhereInput[]
    id?: IntFilter<"posts"> | number
    title?: StringFilter<"posts"> | string
    content?: StringFilter<"posts"> | string
    created_at?: DateTimeFilter<"posts"> | Date | string
    updated_at?: DateTimeFilter<"posts"> | Date | string
    deleted_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    userId?: StringFilter<"posts"> | string
  }

  export type qnasUpsertWithWhereUniqueWithoutUsersInput = {
    where: qnasWhereUniqueInput
    update: XOR<qnasUpdateWithoutUsersInput, qnasUncheckedUpdateWithoutUsersInput>
    create: XOR<qnasCreateWithoutUsersInput, qnasUncheckedCreateWithoutUsersInput>
  }

  export type qnasUpdateWithWhereUniqueWithoutUsersInput = {
    where: qnasWhereUniqueInput
    data: XOR<qnasUpdateWithoutUsersInput, qnasUncheckedUpdateWithoutUsersInput>
  }

  export type qnasUpdateManyWithWhereWithoutUsersInput = {
    where: qnasScalarWhereInput
    data: XOR<qnasUpdateManyMutationInput, qnasUncheckedUpdateManyWithoutUsersInput>
  }

  export type qnasScalarWhereInput = {
    AND?: qnasScalarWhereInput | qnasScalarWhereInput[]
    OR?: qnasScalarWhereInput[]
    NOT?: qnasScalarWhereInput | qnasScalarWhereInput[]
    id?: IntFilter<"qnas"> | number
    title?: StringFilter<"qnas"> | string
    content?: StringFilter<"qnas"> | string
    created_at?: DateTimeFilter<"qnas"> | Date | string
    updated_at?: DateTimeFilter<"qnas"> | Date | string
    deleted_at?: DateTimeNullableFilter<"qnas"> | Date | string | null
    userId?: StringFilter<"qnas"> | string
  }

  export type user_healthsUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_healthsWhereUniqueInput
    update: XOR<user_healthsUpdateWithoutUsersInput, user_healthsUncheckedUpdateWithoutUsersInput>
    create: XOR<user_healthsCreateWithoutUsersInput, user_healthsUncheckedCreateWithoutUsersInput>
  }

  export type user_healthsUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_healthsWhereUniqueInput
    data: XOR<user_healthsUpdateWithoutUsersInput, user_healthsUncheckedUpdateWithoutUsersInput>
  }

  export type user_healthsUpdateManyWithWhereWithoutUsersInput = {
    where: user_healthsScalarWhereInput
    data: XOR<user_healthsUpdateManyMutationInput, user_healthsUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_medisUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_medisWhereUniqueInput
    update: XOR<user_medisUpdateWithoutUsersInput, user_medisUncheckedUpdateWithoutUsersInput>
    create: XOR<user_medisCreateWithoutUsersInput, user_medisUncheckedCreateWithoutUsersInput>
  }

  export type user_medisUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_medisWhereUniqueInput
    data: XOR<user_medisUpdateWithoutUsersInput, user_medisUncheckedUpdateWithoutUsersInput>
  }

  export type user_medisUpdateManyWithWhereWithoutUsersInput = {
    where: user_medisScalarWhereInput
    data: XOR<user_medisUpdateManyMutationInput, user_medisUncheckedUpdateManyWithoutUsersInput>
  }

  export type pharmaciesUpsertWithoutUsersInput = {
    update: XOR<pharmaciesUpdateWithoutUsersInput, pharmaciesUncheckedUpdateWithoutUsersInput>
    create: XOR<pharmaciesCreateWithoutUsersInput, pharmaciesUncheckedCreateWithoutUsersInput>
    where?: pharmaciesWhereInput
  }

  export type pharmaciesUpdateToOneWithWhereWithoutUsersInput = {
    where?: pharmaciesWhereInput
    data: XOR<pharmaciesUpdateWithoutUsersInput, pharmaciesUncheckedUpdateWithoutUsersInput>
  }

  export type pharmaciesUpdateWithoutUsersInput = {
    hpid?: StringFieldUpdateOperationsInput | string
    duty_addr?: NullableStringFieldUpdateOperationsInput | string | null
    duty_mapimg?: NullableStringFieldUpdateOperationsInput | string | null
    duty_name?: StringFieldUpdateOperationsInput | string
    duty_tel1?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time1c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time1s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time2c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time2s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time3c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time3s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time4c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time4s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time5c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time5s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time6c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time6s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time7c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time7s?: NullableStringFieldUpdateOperationsInput | string | null
    post_cdn1?: NullableStringFieldUpdateOperationsInput | string | null
    post_cdn2?: NullableStringFieldUpdateOperationsInput | string | null
    wgs84_lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgs84_lon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    inventories?: inventoriesUpdateManyWithoutPharmaciesNestedInput
  }

  export type pharmaciesUncheckedUpdateWithoutUsersInput = {
    hpid?: StringFieldUpdateOperationsInput | string
    duty_addr?: NullableStringFieldUpdateOperationsInput | string | null
    duty_mapimg?: NullableStringFieldUpdateOperationsInput | string | null
    duty_name?: StringFieldUpdateOperationsInput | string
    duty_tel1?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time1c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time1s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time2c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time2s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time3c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time3s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time4c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time4s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time5c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time5s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time6c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time6s?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time7c?: NullableStringFieldUpdateOperationsInput | string | null
    duty_time7s?: NullableStringFieldUpdateOperationsInput | string | null
    post_cdn1?: NullableStringFieldUpdateOperationsInput | string | null
    post_cdn2?: NullableStringFieldUpdateOperationsInput | string | null
    wgs84_lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgs84_lon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    inventories?: inventoriesUncheckedUpdateManyWithoutPharmaciesNestedInput
  }

  export type user_healthsCreateManyHealthsInput = {
    id?: number
    userId: string
  }

  export type user_healthsUpdateWithoutHealthsInput = {
    users?: usersUpdateOneRequiredWithoutUser_healthsNestedInput
  }

  export type user_healthsUncheckedUpdateWithoutHealthsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type user_healthsUncheckedUpdateManyWithoutHealthsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type inventoriesCreateManyMedicinesInput = {
    id?: number
    quantity: number
    hpid: string
  }

  export type user_medisCreateManyMedicinesInput = {
    id?: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    userId: string
  }

  export type inventoriesUpdateWithoutMedicinesInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    pharmacies?: pharmaciesUpdateOneRequiredWithoutInventoriesNestedInput
  }

  export type inventoriesUncheckedUpdateWithoutMedicinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    hpid?: StringFieldUpdateOperationsInput | string
  }

  export type inventoriesUncheckedUpdateManyWithoutMedicinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    hpid?: StringFieldUpdateOperationsInput | string
  }

  export type user_medisUpdateWithoutMedicinesInput = {
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medi_times?: medi_timesUpdateManyWithoutUser_medisNestedInput
    users?: usersUpdateOneRequiredWithoutUser_medisNestedInput
  }

  export type user_medisUncheckedUpdateWithoutMedicinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    medi_times?: medi_timesUncheckedUpdateManyWithoutUser_medisNestedInput
  }

  export type user_medisUncheckedUpdateManyWithoutMedicinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type inventoriesCreateManyPharmaciesInput = {
    id?: number
    quantity: number
    itemSeq: string
  }

  export type usersCreateManyPharmaciesInput = {
    id: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    member_type: number
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type inventoriesUpdateWithoutPharmaciesInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    medicines?: medicinesUpdateOneRequiredWithoutInventoriesNestedInput
  }

  export type inventoriesUncheckedUpdateWithoutPharmaciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    itemSeq?: StringFieldUpdateOperationsInput | string
  }

  export type inventoriesUncheckedUpdateManyWithoutPharmaciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    itemSeq?: StringFieldUpdateOperationsInput | string
  }

  export type usersUpdateWithoutPharmaciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUsersNestedInput
    posts?: postsUpdateManyWithoutUsersNestedInput
    qnas?: qnasUpdateManyWithoutUsersNestedInput
    user_healths?: user_healthsUpdateManyWithoutUsersNestedInput
    user_medis?: user_medisUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPharmaciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
    qnas?: qnasUncheckedUpdateManyWithoutUsersNestedInput
    user_healths?: user_healthsUncheckedUpdateManyWithoutUsersNestedInput
    user_medis?: user_medisUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutPharmaciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsCreateManyPostsInput = {
    id?: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    userId: string
  }

  export type post_tagsCreateManyPostsInput = {
    id?: number
    tagId: number
  }

  export type commentsUpdateWithoutPostsInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type commentsUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type post_tagsUpdateWithoutPostsInput = {
    tags?: tagsUpdateOneRequiredWithoutPost_tagsNestedInput
  }

  export type post_tagsUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type post_tagsUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type answersCreateManyQnasInput = {
    id?: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_accepted?: boolean
    userId: string
  }

  export type qna_tagsCreateManyQnasInput = {
    id?: number
    tagId: number
  }

  export type answersUpdateWithoutQnasInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type answersUncheckedUpdateWithoutQnasInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type answersUncheckedUpdateManyWithoutQnasInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type qna_tagsUpdateWithoutQnasInput = {
    tags?: tagsUpdateOneRequiredWithoutQna_tagsNestedInput
  }

  export type qna_tagsUncheckedUpdateWithoutQnasInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type qna_tagsUncheckedUpdateManyWithoutQnasInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type post_tagsCreateManyTagsInput = {
    id?: number
    postId: number
  }

  export type qna_tagsCreateManyTagsInput = {
    id?: number
    qnaId: number
  }

  export type post_tagsUpdateWithoutTagsInput = {
    posts?: postsUpdateOneRequiredWithoutPost_tagsNestedInput
  }

  export type post_tagsUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type post_tagsUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type qna_tagsUpdateWithoutTagsInput = {
    qnas?: qnasUpdateOneRequiredWithoutQna_tagsNestedInput
  }

  export type qna_tagsUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    qnaId?: IntFieldUpdateOperationsInput | number
  }

  export type qna_tagsUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    qnaId?: IntFieldUpdateOperationsInput | number
  }

  export type medi_timesCreateManyUser_medisInput = {
    id?: number
    medi_time: number
  }

  export type medi_timesUpdateWithoutUser_medisInput = {
    medi_time?: IntFieldUpdateOperationsInput | number
  }

  export type medi_timesUncheckedUpdateWithoutUser_medisInput = {
    id?: IntFieldUpdateOperationsInput | number
    medi_time?: IntFieldUpdateOperationsInput | number
  }

  export type medi_timesUncheckedUpdateManyWithoutUser_medisInput = {
    id?: IntFieldUpdateOperationsInput | number
    medi_time?: IntFieldUpdateOperationsInput | number
  }

  export type answersCreateManyUsersInput = {
    id?: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_accepted?: boolean
    qnaId: number
  }

  export type commentsCreateManyUsersInput = {
    id?: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    postId: number
  }

  export type postsCreateManyUsersInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type qnasCreateManyUsersInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type user_healthsCreateManyUsersInput = {
    id?: number
    healthId: number
  }

  export type user_medisCreateManyUsersInput = {
    id?: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    itemSeq: string
  }

  export type answersUpdateWithoutUsersInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    qnas?: qnasUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type answersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    qnaId?: IntFieldUpdateOperationsInput | number
  }

  export type answersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    qnaId?: IntFieldUpdateOperationsInput | number
  }

  export type commentsUpdateWithoutUsersInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type commentsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type postsUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutPostsNestedInput
    post_tags?: post_tagsUpdateManyWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutPostsNestedInput
    post_tags?: post_tagsUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type qnasUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutQnasNestedInput
    qna_tags?: qna_tagsUpdateManyWithoutQnasNestedInput
  }

  export type qnasUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutQnasNestedInput
    qna_tags?: qna_tagsUncheckedUpdateManyWithoutQnasNestedInput
  }

  export type qnasUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_healthsUpdateWithoutUsersInput = {
    healths?: healthsUpdateOneRequiredWithoutUser_healthsNestedInput
  }

  export type user_healthsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    healthId?: IntFieldUpdateOperationsInput | number
  }

  export type user_healthsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    healthId?: IntFieldUpdateOperationsInput | number
  }

  export type user_medisUpdateWithoutUsersInput = {
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medi_times?: medi_timesUpdateManyWithoutUser_medisNestedInput
    medicines?: medicinesUpdateOneRequiredWithoutUser_medisNestedInput
  }

  export type user_medisUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemSeq?: StringFieldUpdateOperationsInput | string
    medi_times?: medi_timesUncheckedUpdateManyWithoutUser_medisNestedInput
  }

  export type user_medisUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemSeq?: StringFieldUpdateOperationsInput | string
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
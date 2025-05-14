
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
 * Model QnaTag
 * 
 */
export type QnaTag = $Result.DefaultSelection<Prisma.$QnaTagPayload>
/**
 * Model Qna
 * 
 */
export type Qna = $Result.DefaultSelection<Prisma.$QnaPayload>
/**
 * Model UserMedi
 * 
 */
export type UserMedi = $Result.DefaultSelection<Prisma.$UserMediPayload>
/**
 * Model UserHealth
 * 
 */
export type UserHealth = $Result.DefaultSelection<Prisma.$UserHealthPayload>
/**
 * Model Medicine
 * 
 */
export type Medicine = $Result.DefaultSelection<Prisma.$MedicinePayload>
/**
 * Model MediTime
 * 
 */
export type MediTime = $Result.DefaultSelection<Prisma.$MediTimePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model Pharmacy
 * 
 */
export type Pharmacy = $Result.DefaultSelection<Prisma.$PharmacyPayload>
/**
 * Model PostTag
 * 
 */
export type PostTag = $Result.DefaultSelection<Prisma.$PostTagPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Health
 * 
 */
export type Health = $Result.DefaultSelection<Prisma.$HealthPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more QnaTags
 * const qnaTags = await prisma.qnaTag.findMany()
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
   * // Fetch zero or more QnaTags
   * const qnaTags = await prisma.qnaTag.findMany()
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
   * `prisma.qnaTag`: Exposes CRUD operations for the **QnaTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QnaTags
    * const qnaTags = await prisma.qnaTag.findMany()
    * ```
    */
  get qnaTag(): Prisma.QnaTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qna`: Exposes CRUD operations for the **Qna** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Qnas
    * const qnas = await prisma.qna.findMany()
    * ```
    */
  get qna(): Prisma.QnaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userMedi`: Exposes CRUD operations for the **UserMedi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMedis
    * const userMedis = await prisma.userMedi.findMany()
    * ```
    */
  get userMedi(): Prisma.UserMediDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userHealth`: Exposes CRUD operations for the **UserHealth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserHealths
    * const userHealths = await prisma.userHealth.findMany()
    * ```
    */
  get userHealth(): Prisma.UserHealthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicine`: Exposes CRUD operations for the **Medicine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicines
    * const medicines = await prisma.medicine.findMany()
    * ```
    */
  get medicine(): Prisma.MedicineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediTime`: Exposes CRUD operations for the **MediTime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediTimes
    * const mediTimes = await prisma.mediTime.findMany()
    * ```
    */
  get mediTime(): Prisma.MediTimeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pharmacy`: Exposes CRUD operations for the **Pharmacy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pharmacies
    * const pharmacies = await prisma.pharmacy.findMany()
    * ```
    */
  get pharmacy(): Prisma.PharmacyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postTag`: Exposes CRUD operations for the **PostTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostTags
    * const postTags = await prisma.postTag.findMany()
    * ```
    */
  get postTag(): Prisma.PostTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.health`: Exposes CRUD operations for the **Health** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Health
    * const health = await prisma.health.findMany()
    * ```
    */
  get health(): Prisma.HealthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    QnaTag: 'QnaTag',
    Qna: 'Qna',
    UserMedi: 'UserMedi',
    UserHealth: 'UserHealth',
    Medicine: 'Medicine',
    MediTime: 'MediTime',
    User: 'User',
    Post: 'Post',
    Answer: 'Answer',
    Pharmacy: 'Pharmacy',
    PostTag: 'PostTag',
    Tag: 'Tag',
    Health: 'Health',
    Comment: 'Comment',
    Inventory: 'Inventory'
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
      modelProps: "qnaTag" | "qna" | "userMedi" | "userHealth" | "medicine" | "mediTime" | "user" | "post" | "answer" | "pharmacy" | "postTag" | "tag" | "health" | "comment" | "inventory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      QnaTag: {
        payload: Prisma.$QnaTagPayload<ExtArgs>
        fields: Prisma.QnaTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QnaTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QnaTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaTagPayload>
          }
          findFirst: {
            args: Prisma.QnaTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QnaTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaTagPayload>
          }
          findMany: {
            args: Prisma.QnaTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaTagPayload>[]
          }
          create: {
            args: Prisma.QnaTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaTagPayload>
          }
          createMany: {
            args: Prisma.QnaTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QnaTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaTagPayload>[]
          }
          delete: {
            args: Prisma.QnaTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaTagPayload>
          }
          update: {
            args: Prisma.QnaTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaTagPayload>
          }
          deleteMany: {
            args: Prisma.QnaTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QnaTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QnaTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaTagPayload>[]
          }
          upsert: {
            args: Prisma.QnaTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaTagPayload>
          }
          aggregate: {
            args: Prisma.QnaTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQnaTag>
          }
          groupBy: {
            args: Prisma.QnaTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<QnaTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.QnaTagCountArgs<ExtArgs>
            result: $Utils.Optional<QnaTagCountAggregateOutputType> | number
          }
        }
      }
      Qna: {
        payload: Prisma.$QnaPayload<ExtArgs>
        fields: Prisma.QnaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QnaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QnaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaPayload>
          }
          findFirst: {
            args: Prisma.QnaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QnaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaPayload>
          }
          findMany: {
            args: Prisma.QnaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaPayload>[]
          }
          create: {
            args: Prisma.QnaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaPayload>
          }
          createMany: {
            args: Prisma.QnaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QnaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaPayload>[]
          }
          delete: {
            args: Prisma.QnaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaPayload>
          }
          update: {
            args: Prisma.QnaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaPayload>
          }
          deleteMany: {
            args: Prisma.QnaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QnaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QnaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaPayload>[]
          }
          upsert: {
            args: Prisma.QnaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QnaPayload>
          }
          aggregate: {
            args: Prisma.QnaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQna>
          }
          groupBy: {
            args: Prisma.QnaGroupByArgs<ExtArgs>
            result: $Utils.Optional<QnaGroupByOutputType>[]
          }
          count: {
            args: Prisma.QnaCountArgs<ExtArgs>
            result: $Utils.Optional<QnaCountAggregateOutputType> | number
          }
        }
      }
      UserMedi: {
        payload: Prisma.$UserMediPayload<ExtArgs>
        fields: Prisma.UserMediFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserMediFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserMediFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediPayload>
          }
          findFirst: {
            args: Prisma.UserMediFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserMediFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediPayload>
          }
          findMany: {
            args: Prisma.UserMediFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediPayload>[]
          }
          create: {
            args: Prisma.UserMediCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediPayload>
          }
          createMany: {
            args: Prisma.UserMediCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserMediCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediPayload>[]
          }
          delete: {
            args: Prisma.UserMediDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediPayload>
          }
          update: {
            args: Prisma.UserMediUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediPayload>
          }
          deleteMany: {
            args: Prisma.UserMediDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserMediUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserMediUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediPayload>[]
          }
          upsert: {
            args: Prisma.UserMediUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediPayload>
          }
          aggregate: {
            args: Prisma.UserMediAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserMedi>
          }
          groupBy: {
            args: Prisma.UserMediGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserMediGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserMediCountArgs<ExtArgs>
            result: $Utils.Optional<UserMediCountAggregateOutputType> | number
          }
        }
      }
      UserHealth: {
        payload: Prisma.$UserHealthPayload<ExtArgs>
        fields: Prisma.UserHealthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserHealthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHealthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserHealthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHealthPayload>
          }
          findFirst: {
            args: Prisma.UserHealthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHealthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserHealthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHealthPayload>
          }
          findMany: {
            args: Prisma.UserHealthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHealthPayload>[]
          }
          create: {
            args: Prisma.UserHealthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHealthPayload>
          }
          createMany: {
            args: Prisma.UserHealthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserHealthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHealthPayload>[]
          }
          delete: {
            args: Prisma.UserHealthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHealthPayload>
          }
          update: {
            args: Prisma.UserHealthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHealthPayload>
          }
          deleteMany: {
            args: Prisma.UserHealthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserHealthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserHealthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHealthPayload>[]
          }
          upsert: {
            args: Prisma.UserHealthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHealthPayload>
          }
          aggregate: {
            args: Prisma.UserHealthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserHealth>
          }
          groupBy: {
            args: Prisma.UserHealthGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserHealthGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserHealthCountArgs<ExtArgs>
            result: $Utils.Optional<UserHealthCountAggregateOutputType> | number
          }
        }
      }
      Medicine: {
        payload: Prisma.$MedicinePayload<ExtArgs>
        fields: Prisma.MedicineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findFirst: {
            args: Prisma.MedicineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findMany: {
            args: Prisma.MedicineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          create: {
            args: Prisma.MedicineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          createMany: {
            args: Prisma.MedicineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          delete: {
            args: Prisma.MedicineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          update: {
            args: Prisma.MedicineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          deleteMany: {
            args: Prisma.MedicineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          upsert: {
            args: Prisma.MedicineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          aggregate: {
            args: Prisma.MedicineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicine>
          }
          groupBy: {
            args: Prisma.MedicineGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicineGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicineCountArgs<ExtArgs>
            result: $Utils.Optional<MedicineCountAggregateOutputType> | number
          }
        }
      }
      MediTime: {
        payload: Prisma.$MediTimePayload<ExtArgs>
        fields: Prisma.MediTimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediTimeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediTimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediTimeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediTimePayload>
          }
          findFirst: {
            args: Prisma.MediTimeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediTimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediTimeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediTimePayload>
          }
          findMany: {
            args: Prisma.MediTimeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediTimePayload>[]
          }
          create: {
            args: Prisma.MediTimeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediTimePayload>
          }
          createMany: {
            args: Prisma.MediTimeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediTimeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediTimePayload>[]
          }
          delete: {
            args: Prisma.MediTimeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediTimePayload>
          }
          update: {
            args: Prisma.MediTimeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediTimePayload>
          }
          deleteMany: {
            args: Prisma.MediTimeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediTimeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediTimeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediTimePayload>[]
          }
          upsert: {
            args: Prisma.MediTimeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediTimePayload>
          }
          aggregate: {
            args: Prisma.MediTimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediTime>
          }
          groupBy: {
            args: Prisma.MediTimeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediTimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediTimeCountArgs<ExtArgs>
            result: $Utils.Optional<MediTimeCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      Pharmacy: {
        payload: Prisma.$PharmacyPayload<ExtArgs>
        fields: Prisma.PharmacyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PharmacyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PharmacyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          findFirst: {
            args: Prisma.PharmacyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PharmacyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          findMany: {
            args: Prisma.PharmacyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>[]
          }
          create: {
            args: Prisma.PharmacyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          createMany: {
            args: Prisma.PharmacyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PharmacyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>[]
          }
          delete: {
            args: Prisma.PharmacyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          update: {
            args: Prisma.PharmacyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          deleteMany: {
            args: Prisma.PharmacyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PharmacyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PharmacyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>[]
          }
          upsert: {
            args: Prisma.PharmacyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          aggregate: {
            args: Prisma.PharmacyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePharmacy>
          }
          groupBy: {
            args: Prisma.PharmacyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PharmacyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PharmacyCountArgs<ExtArgs>
            result: $Utils.Optional<PharmacyCountAggregateOutputType> | number
          }
        }
      }
      PostTag: {
        payload: Prisma.$PostTagPayload<ExtArgs>
        fields: Prisma.PostTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          findFirst: {
            args: Prisma.PostTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          findMany: {
            args: Prisma.PostTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>[]
          }
          create: {
            args: Prisma.PostTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          createMany: {
            args: Prisma.PostTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>[]
          }
          delete: {
            args: Prisma.PostTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          update: {
            args: Prisma.PostTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          deleteMany: {
            args: Prisma.PostTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>[]
          }
          upsert: {
            args: Prisma.PostTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          aggregate: {
            args: Prisma.PostTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostTag>
          }
          groupBy: {
            args: Prisma.PostTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostTagCountArgs<ExtArgs>
            result: $Utils.Optional<PostTagCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Health: {
        payload: Prisma.$HealthPayload<ExtArgs>
        fields: Prisma.HealthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HealthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HealthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload>
          }
          findFirst: {
            args: Prisma.HealthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HealthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload>
          }
          findMany: {
            args: Prisma.HealthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload>[]
          }
          create: {
            args: Prisma.HealthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload>
          }
          createMany: {
            args: Prisma.HealthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HealthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload>[]
          }
          delete: {
            args: Prisma.HealthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload>
          }
          update: {
            args: Prisma.HealthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload>
          }
          deleteMany: {
            args: Prisma.HealthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HealthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HealthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload>[]
          }
          upsert: {
            args: Prisma.HealthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload>
          }
          aggregate: {
            args: Prisma.HealthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHealth>
          }
          groupBy: {
            args: Prisma.HealthGroupByArgs<ExtArgs>
            result: $Utils.Optional<HealthGroupByOutputType>[]
          }
          count: {
            args: Prisma.HealthCountArgs<ExtArgs>
            result: $Utils.Optional<HealthCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
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
    qnaTag?: QnaTagOmit
    qna?: QnaOmit
    userMedi?: UserMediOmit
    userHealth?: UserHealthOmit
    medicine?: MedicineOmit
    mediTime?: MediTimeOmit
    user?: UserOmit
    post?: PostOmit
    answer?: AnswerOmit
    pharmacy?: PharmacyOmit
    postTag?: PostTagOmit
    tag?: TagOmit
    health?: HealthOmit
    comment?: CommentOmit
    inventory?: InventoryOmit
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
   * Count Type QnaCountOutputType
   */

  export type QnaCountOutputType = {
    answers: number
    qnaTags: number
  }

  export type QnaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QnaCountOutputTypeCountAnswersArgs
    qnaTags?: boolean | QnaCountOutputTypeCountQnaTagsArgs
  }

  // Custom InputTypes
  /**
   * QnaCountOutputType without action
   */
  export type QnaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QnaCountOutputType
     */
    select?: QnaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QnaCountOutputType without action
   */
  export type QnaCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }

  /**
   * QnaCountOutputType without action
   */
  export type QnaCountOutputTypeCountQnaTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QnaTagWhereInput
  }


  /**
   * Count Type UserMediCountOutputType
   */

  export type UserMediCountOutputType = {
    mediTimes: number
  }

  export type UserMediCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediTimes?: boolean | UserMediCountOutputTypeCountMediTimesArgs
  }

  // Custom InputTypes
  /**
   * UserMediCountOutputType without action
   */
  export type UserMediCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMediCountOutputType
     */
    select?: UserMediCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserMediCountOutputType without action
   */
  export type UserMediCountOutputTypeCountMediTimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediTimeWhereInput
  }


  /**
   * Count Type MedicineCountOutputType
   */

  export type MedicineCountOutputType = {
    userMedis: number
    inventories: number
  }

  export type MedicineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMedis?: boolean | MedicineCountOutputTypeCountUserMedisArgs
    inventories?: boolean | MedicineCountOutputTypeCountInventoriesArgs
  }

  // Custom InputTypes
  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineCountOutputType
     */
    select?: MedicineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeCountUserMedisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMediWhereInput
  }

  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeCountInventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    qnas: number
    answers: number
    comments: number
    userMedis: number
    userHealth: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    qnas?: boolean | UserCountOutputTypeCountQnasArgs
    answers?: boolean | UserCountOutputTypeCountAnswersArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    userMedis?: boolean | UserCountOutputTypeCountUserMedisArgs
    userHealth?: boolean | UserCountOutputTypeCountUserHealthArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQnasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QnaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserMedisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMediWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserHealthArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHealthWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    comments: number
    postTags: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
    postTags?: boolean | PostCountOutputTypeCountPostTagsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPostTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTagWhereInput
  }


  /**
   * Count Type PharmacyCountOutputType
   */

  export type PharmacyCountOutputType = {
    users: number
    inventories: number
  }

  export type PharmacyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | PharmacyCountOutputTypeCountUsersArgs
    inventories?: boolean | PharmacyCountOutputTypeCountInventoriesArgs
  }

  // Custom InputTypes
  /**
   * PharmacyCountOutputType without action
   */
  export type PharmacyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyCountOutputType
     */
    select?: PharmacyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PharmacyCountOutputType without action
   */
  export type PharmacyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * PharmacyCountOutputType without action
   */
  export type PharmacyCountOutputTypeCountInventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    postTags: number
    qnaTags: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postTags?: boolean | TagCountOutputTypeCountPostTagsArgs
    qnaTags?: boolean | TagCountOutputTypeCountQnaTagsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountPostTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTagWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountQnaTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QnaTagWhereInput
  }


  /**
   * Count Type HealthCountOutputType
   */

  export type HealthCountOutputType = {
    userHealth: number
  }

  export type HealthCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userHealth?: boolean | HealthCountOutputTypeCountUserHealthArgs
  }

  // Custom InputTypes
  /**
   * HealthCountOutputType without action
   */
  export type HealthCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthCountOutputType
     */
    select?: HealthCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HealthCountOutputType without action
   */
  export type HealthCountOutputTypeCountUserHealthArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHealthWhereInput
  }


  /**
   * Models
   */

  /**
   * Model QnaTag
   */

  export type AggregateQnaTag = {
    _count: QnaTagCountAggregateOutputType | null
    _avg: QnaTagAvgAggregateOutputType | null
    _sum: QnaTagSumAggregateOutputType | null
    _min: QnaTagMinAggregateOutputType | null
    _max: QnaTagMaxAggregateOutputType | null
  }

  export type QnaTagAvgAggregateOutputType = {
    id: number | null
    tagId: number | null
    qnaId: number | null
  }

  export type QnaTagSumAggregateOutputType = {
    id: number | null
    tagId: number | null
    qnaId: number | null
  }

  export type QnaTagMinAggregateOutputType = {
    id: number | null
    tagId: number | null
    qnaId: number | null
  }

  export type QnaTagMaxAggregateOutputType = {
    id: number | null
    tagId: number | null
    qnaId: number | null
  }

  export type QnaTagCountAggregateOutputType = {
    id: number
    tagId: number
    qnaId: number
    _all: number
  }


  export type QnaTagAvgAggregateInputType = {
    id?: true
    tagId?: true
    qnaId?: true
  }

  export type QnaTagSumAggregateInputType = {
    id?: true
    tagId?: true
    qnaId?: true
  }

  export type QnaTagMinAggregateInputType = {
    id?: true
    tagId?: true
    qnaId?: true
  }

  export type QnaTagMaxAggregateInputType = {
    id?: true
    tagId?: true
    qnaId?: true
  }

  export type QnaTagCountAggregateInputType = {
    id?: true
    tagId?: true
    qnaId?: true
    _all?: true
  }

  export type QnaTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QnaTag to aggregate.
     */
    where?: QnaTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QnaTags to fetch.
     */
    orderBy?: QnaTagOrderByWithRelationInput | QnaTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QnaTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QnaTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QnaTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QnaTags
    **/
    _count?: true | QnaTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QnaTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QnaTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QnaTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QnaTagMaxAggregateInputType
  }

  export type GetQnaTagAggregateType<T extends QnaTagAggregateArgs> = {
        [P in keyof T & keyof AggregateQnaTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQnaTag[P]>
      : GetScalarType<T[P], AggregateQnaTag[P]>
  }




  export type QnaTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QnaTagWhereInput
    orderBy?: QnaTagOrderByWithAggregationInput | QnaTagOrderByWithAggregationInput[]
    by: QnaTagScalarFieldEnum[] | QnaTagScalarFieldEnum
    having?: QnaTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QnaTagCountAggregateInputType | true
    _avg?: QnaTagAvgAggregateInputType
    _sum?: QnaTagSumAggregateInputType
    _min?: QnaTagMinAggregateInputType
    _max?: QnaTagMaxAggregateInputType
  }

  export type QnaTagGroupByOutputType = {
    id: number
    tagId: number
    qnaId: number
    _count: QnaTagCountAggregateOutputType | null
    _avg: QnaTagAvgAggregateOutputType | null
    _sum: QnaTagSumAggregateOutputType | null
    _min: QnaTagMinAggregateOutputType | null
    _max: QnaTagMaxAggregateOutputType | null
  }

  type GetQnaTagGroupByPayload<T extends QnaTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QnaTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QnaTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QnaTagGroupByOutputType[P]>
            : GetScalarType<T[P], QnaTagGroupByOutputType[P]>
        }
      >
    >


  export type QnaTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagId?: boolean
    qnaId?: boolean
    tag?: boolean | TagDefaultArgs<ExtArgs>
    qna?: boolean | QnaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qnaTag"]>

  export type QnaTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagId?: boolean
    qnaId?: boolean
    tag?: boolean | TagDefaultArgs<ExtArgs>
    qna?: boolean | QnaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qnaTag"]>

  export type QnaTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagId?: boolean
    qnaId?: boolean
    tag?: boolean | TagDefaultArgs<ExtArgs>
    qna?: boolean | QnaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qnaTag"]>

  export type QnaTagSelectScalar = {
    id?: boolean
    tagId?: boolean
    qnaId?: boolean
  }

  export type QnaTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tagId" | "qnaId", ExtArgs["result"]["qnaTag"]>
  export type QnaTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | TagDefaultArgs<ExtArgs>
    qna?: boolean | QnaDefaultArgs<ExtArgs>
  }
  export type QnaTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | TagDefaultArgs<ExtArgs>
    qna?: boolean | QnaDefaultArgs<ExtArgs>
  }
  export type QnaTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | TagDefaultArgs<ExtArgs>
    qna?: boolean | QnaDefaultArgs<ExtArgs>
  }

  export type $QnaTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QnaTag"
    objects: {
      tag: Prisma.$TagPayload<ExtArgs>
      qna: Prisma.$QnaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tagId: number
      qnaId: number
    }, ExtArgs["result"]["qnaTag"]>
    composites: {}
  }

  type QnaTagGetPayload<S extends boolean | null | undefined | QnaTagDefaultArgs> = $Result.GetResult<Prisma.$QnaTagPayload, S>

  type QnaTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QnaTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QnaTagCountAggregateInputType | true
    }

  export interface QnaTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QnaTag'], meta: { name: 'QnaTag' } }
    /**
     * Find zero or one QnaTag that matches the filter.
     * @param {QnaTagFindUniqueArgs} args - Arguments to find a QnaTag
     * @example
     * // Get one QnaTag
     * const qnaTag = await prisma.qnaTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QnaTagFindUniqueArgs>(args: SelectSubset<T, QnaTagFindUniqueArgs<ExtArgs>>): Prisma__QnaTagClient<$Result.GetResult<Prisma.$QnaTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QnaTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QnaTagFindUniqueOrThrowArgs} args - Arguments to find a QnaTag
     * @example
     * // Get one QnaTag
     * const qnaTag = await prisma.qnaTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QnaTagFindUniqueOrThrowArgs>(args: SelectSubset<T, QnaTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QnaTagClient<$Result.GetResult<Prisma.$QnaTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QnaTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QnaTagFindFirstArgs} args - Arguments to find a QnaTag
     * @example
     * // Get one QnaTag
     * const qnaTag = await prisma.qnaTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QnaTagFindFirstArgs>(args?: SelectSubset<T, QnaTagFindFirstArgs<ExtArgs>>): Prisma__QnaTagClient<$Result.GetResult<Prisma.$QnaTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QnaTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QnaTagFindFirstOrThrowArgs} args - Arguments to find a QnaTag
     * @example
     * // Get one QnaTag
     * const qnaTag = await prisma.qnaTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QnaTagFindFirstOrThrowArgs>(args?: SelectSubset<T, QnaTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__QnaTagClient<$Result.GetResult<Prisma.$QnaTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QnaTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QnaTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QnaTags
     * const qnaTags = await prisma.qnaTag.findMany()
     * 
     * // Get first 10 QnaTags
     * const qnaTags = await prisma.qnaTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qnaTagWithIdOnly = await prisma.qnaTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QnaTagFindManyArgs>(args?: SelectSubset<T, QnaTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QnaTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QnaTag.
     * @param {QnaTagCreateArgs} args - Arguments to create a QnaTag.
     * @example
     * // Create one QnaTag
     * const QnaTag = await prisma.qnaTag.create({
     *   data: {
     *     // ... data to create a QnaTag
     *   }
     * })
     * 
     */
    create<T extends QnaTagCreateArgs>(args: SelectSubset<T, QnaTagCreateArgs<ExtArgs>>): Prisma__QnaTagClient<$Result.GetResult<Prisma.$QnaTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QnaTags.
     * @param {QnaTagCreateManyArgs} args - Arguments to create many QnaTags.
     * @example
     * // Create many QnaTags
     * const qnaTag = await prisma.qnaTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QnaTagCreateManyArgs>(args?: SelectSubset<T, QnaTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QnaTags and returns the data saved in the database.
     * @param {QnaTagCreateManyAndReturnArgs} args - Arguments to create many QnaTags.
     * @example
     * // Create many QnaTags
     * const qnaTag = await prisma.qnaTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QnaTags and only return the `id`
     * const qnaTagWithIdOnly = await prisma.qnaTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QnaTagCreateManyAndReturnArgs>(args?: SelectSubset<T, QnaTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QnaTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QnaTag.
     * @param {QnaTagDeleteArgs} args - Arguments to delete one QnaTag.
     * @example
     * // Delete one QnaTag
     * const QnaTag = await prisma.qnaTag.delete({
     *   where: {
     *     // ... filter to delete one QnaTag
     *   }
     * })
     * 
     */
    delete<T extends QnaTagDeleteArgs>(args: SelectSubset<T, QnaTagDeleteArgs<ExtArgs>>): Prisma__QnaTagClient<$Result.GetResult<Prisma.$QnaTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QnaTag.
     * @param {QnaTagUpdateArgs} args - Arguments to update one QnaTag.
     * @example
     * // Update one QnaTag
     * const qnaTag = await prisma.qnaTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QnaTagUpdateArgs>(args: SelectSubset<T, QnaTagUpdateArgs<ExtArgs>>): Prisma__QnaTagClient<$Result.GetResult<Prisma.$QnaTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QnaTags.
     * @param {QnaTagDeleteManyArgs} args - Arguments to filter QnaTags to delete.
     * @example
     * // Delete a few QnaTags
     * const { count } = await prisma.qnaTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QnaTagDeleteManyArgs>(args?: SelectSubset<T, QnaTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QnaTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QnaTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QnaTags
     * const qnaTag = await prisma.qnaTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QnaTagUpdateManyArgs>(args: SelectSubset<T, QnaTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QnaTags and returns the data updated in the database.
     * @param {QnaTagUpdateManyAndReturnArgs} args - Arguments to update many QnaTags.
     * @example
     * // Update many QnaTags
     * const qnaTag = await prisma.qnaTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QnaTags and only return the `id`
     * const qnaTagWithIdOnly = await prisma.qnaTag.updateManyAndReturn({
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
    updateManyAndReturn<T extends QnaTagUpdateManyAndReturnArgs>(args: SelectSubset<T, QnaTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QnaTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QnaTag.
     * @param {QnaTagUpsertArgs} args - Arguments to update or create a QnaTag.
     * @example
     * // Update or create a QnaTag
     * const qnaTag = await prisma.qnaTag.upsert({
     *   create: {
     *     // ... data to create a QnaTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QnaTag we want to update
     *   }
     * })
     */
    upsert<T extends QnaTagUpsertArgs>(args: SelectSubset<T, QnaTagUpsertArgs<ExtArgs>>): Prisma__QnaTagClient<$Result.GetResult<Prisma.$QnaTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QnaTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QnaTagCountArgs} args - Arguments to filter QnaTags to count.
     * @example
     * // Count the number of QnaTags
     * const count = await prisma.qnaTag.count({
     *   where: {
     *     // ... the filter for the QnaTags we want to count
     *   }
     * })
    **/
    count<T extends QnaTagCountArgs>(
      args?: Subset<T, QnaTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QnaTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QnaTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QnaTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QnaTagAggregateArgs>(args: Subset<T, QnaTagAggregateArgs>): Prisma.PrismaPromise<GetQnaTagAggregateType<T>>

    /**
     * Group by QnaTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QnaTagGroupByArgs} args - Group by arguments.
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
      T extends QnaTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QnaTagGroupByArgs['orderBy'] }
        : { orderBy?: QnaTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QnaTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQnaTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QnaTag model
   */
  readonly fields: QnaTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QnaTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QnaTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    qna<T extends QnaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QnaDefaultArgs<ExtArgs>>): Prisma__QnaClient<$Result.GetResult<Prisma.$QnaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QnaTag model
   */
  interface QnaTagFieldRefs {
    readonly id: FieldRef<"QnaTag", 'Int'>
    readonly tagId: FieldRef<"QnaTag", 'Int'>
    readonly qnaId: FieldRef<"QnaTag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * QnaTag findUnique
   */
  export type QnaTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QnaTag
     */
    select?: QnaTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QnaTag
     */
    omit?: QnaTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaTagInclude<ExtArgs> | null
    /**
     * Filter, which QnaTag to fetch.
     */
    where: QnaTagWhereUniqueInput
  }

  /**
   * QnaTag findUniqueOrThrow
   */
  export type QnaTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QnaTag
     */
    select?: QnaTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QnaTag
     */
    omit?: QnaTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaTagInclude<ExtArgs> | null
    /**
     * Filter, which QnaTag to fetch.
     */
    where: QnaTagWhereUniqueInput
  }

  /**
   * QnaTag findFirst
   */
  export type QnaTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QnaTag
     */
    select?: QnaTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QnaTag
     */
    omit?: QnaTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaTagInclude<ExtArgs> | null
    /**
     * Filter, which QnaTag to fetch.
     */
    where?: QnaTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QnaTags to fetch.
     */
    orderBy?: QnaTagOrderByWithRelationInput | QnaTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QnaTags.
     */
    cursor?: QnaTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QnaTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QnaTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QnaTags.
     */
    distinct?: QnaTagScalarFieldEnum | QnaTagScalarFieldEnum[]
  }

  /**
   * QnaTag findFirstOrThrow
   */
  export type QnaTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QnaTag
     */
    select?: QnaTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QnaTag
     */
    omit?: QnaTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaTagInclude<ExtArgs> | null
    /**
     * Filter, which QnaTag to fetch.
     */
    where?: QnaTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QnaTags to fetch.
     */
    orderBy?: QnaTagOrderByWithRelationInput | QnaTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QnaTags.
     */
    cursor?: QnaTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QnaTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QnaTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QnaTags.
     */
    distinct?: QnaTagScalarFieldEnum | QnaTagScalarFieldEnum[]
  }

  /**
   * QnaTag findMany
   */
  export type QnaTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QnaTag
     */
    select?: QnaTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QnaTag
     */
    omit?: QnaTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaTagInclude<ExtArgs> | null
    /**
     * Filter, which QnaTags to fetch.
     */
    where?: QnaTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QnaTags to fetch.
     */
    orderBy?: QnaTagOrderByWithRelationInput | QnaTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QnaTags.
     */
    cursor?: QnaTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QnaTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QnaTags.
     */
    skip?: number
    distinct?: QnaTagScalarFieldEnum | QnaTagScalarFieldEnum[]
  }

  /**
   * QnaTag create
   */
  export type QnaTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QnaTag
     */
    select?: QnaTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QnaTag
     */
    omit?: QnaTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaTagInclude<ExtArgs> | null
    /**
     * The data needed to create a QnaTag.
     */
    data: XOR<QnaTagCreateInput, QnaTagUncheckedCreateInput>
  }

  /**
   * QnaTag createMany
   */
  export type QnaTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QnaTags.
     */
    data: QnaTagCreateManyInput | QnaTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QnaTag createManyAndReturn
   */
  export type QnaTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QnaTag
     */
    select?: QnaTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QnaTag
     */
    omit?: QnaTagOmit<ExtArgs> | null
    /**
     * The data used to create many QnaTags.
     */
    data: QnaTagCreateManyInput | QnaTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QnaTag update
   */
  export type QnaTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QnaTag
     */
    select?: QnaTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QnaTag
     */
    omit?: QnaTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaTagInclude<ExtArgs> | null
    /**
     * The data needed to update a QnaTag.
     */
    data: XOR<QnaTagUpdateInput, QnaTagUncheckedUpdateInput>
    /**
     * Choose, which QnaTag to update.
     */
    where: QnaTagWhereUniqueInput
  }

  /**
   * QnaTag updateMany
   */
  export type QnaTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QnaTags.
     */
    data: XOR<QnaTagUpdateManyMutationInput, QnaTagUncheckedUpdateManyInput>
    /**
     * Filter which QnaTags to update
     */
    where?: QnaTagWhereInput
    /**
     * Limit how many QnaTags to update.
     */
    limit?: number
  }

  /**
   * QnaTag updateManyAndReturn
   */
  export type QnaTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QnaTag
     */
    select?: QnaTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QnaTag
     */
    omit?: QnaTagOmit<ExtArgs> | null
    /**
     * The data used to update QnaTags.
     */
    data: XOR<QnaTagUpdateManyMutationInput, QnaTagUncheckedUpdateManyInput>
    /**
     * Filter which QnaTags to update
     */
    where?: QnaTagWhereInput
    /**
     * Limit how many QnaTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QnaTag upsert
   */
  export type QnaTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QnaTag
     */
    select?: QnaTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QnaTag
     */
    omit?: QnaTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaTagInclude<ExtArgs> | null
    /**
     * The filter to search for the QnaTag to update in case it exists.
     */
    where: QnaTagWhereUniqueInput
    /**
     * In case the QnaTag found by the `where` argument doesn't exist, create a new QnaTag with this data.
     */
    create: XOR<QnaTagCreateInput, QnaTagUncheckedCreateInput>
    /**
     * In case the QnaTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QnaTagUpdateInput, QnaTagUncheckedUpdateInput>
  }

  /**
   * QnaTag delete
   */
  export type QnaTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QnaTag
     */
    select?: QnaTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QnaTag
     */
    omit?: QnaTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaTagInclude<ExtArgs> | null
    /**
     * Filter which QnaTag to delete.
     */
    where: QnaTagWhereUniqueInput
  }

  /**
   * QnaTag deleteMany
   */
  export type QnaTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QnaTags to delete
     */
    where?: QnaTagWhereInput
    /**
     * Limit how many QnaTags to delete.
     */
    limit?: number
  }

  /**
   * QnaTag without action
   */
  export type QnaTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QnaTag
     */
    select?: QnaTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QnaTag
     */
    omit?: QnaTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaTagInclude<ExtArgs> | null
  }


  /**
   * Model Qna
   */

  export type AggregateQna = {
    _count: QnaCountAggregateOutputType | null
    _avg: QnaAvgAggregateOutputType | null
    _sum: QnaSumAggregateOutputType | null
    _min: QnaMinAggregateOutputType | null
    _max: QnaMaxAggregateOutputType | null
  }

  export type QnaAvgAggregateOutputType = {
    id: number | null
  }

  export type QnaSumAggregateOutputType = {
    id: number | null
  }

  export type QnaMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: string | null
  }

  export type QnaMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: string | null
  }

  export type QnaCountAggregateOutputType = {
    id: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    userId: number
    _all: number
  }


  export type QnaAvgAggregateInputType = {
    id?: true
  }

  export type QnaSumAggregateInputType = {
    id?: true
  }

  export type QnaMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type QnaMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type QnaCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    _all?: true
  }

  export type QnaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Qna to aggregate.
     */
    where?: QnaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qnas to fetch.
     */
    orderBy?: QnaOrderByWithRelationInput | QnaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QnaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qnas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qnas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Qnas
    **/
    _count?: true | QnaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QnaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QnaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QnaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QnaMaxAggregateInputType
  }

  export type GetQnaAggregateType<T extends QnaAggregateArgs> = {
        [P in keyof T & keyof AggregateQna]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQna[P]>
      : GetScalarType<T[P], AggregateQna[P]>
  }




  export type QnaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QnaWhereInput
    orderBy?: QnaOrderByWithAggregationInput | QnaOrderByWithAggregationInput[]
    by: QnaScalarFieldEnum[] | QnaScalarFieldEnum
    having?: QnaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QnaCountAggregateInputType | true
    _avg?: QnaAvgAggregateInputType
    _sum?: QnaSumAggregateInputType
    _min?: QnaMinAggregateInputType
    _max?: QnaMaxAggregateInputType
  }

  export type QnaGroupByOutputType = {
    id: number
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    userId: string
    _count: QnaCountAggregateOutputType | null
    _avg: QnaAvgAggregateOutputType | null
    _sum: QnaSumAggregateOutputType | null
    _min: QnaMinAggregateOutputType | null
    _max: QnaMaxAggregateOutputType | null
  }

  type GetQnaGroupByPayload<T extends QnaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QnaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QnaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QnaGroupByOutputType[P]>
            : GetScalarType<T[P], QnaGroupByOutputType[P]>
        }
      >
    >


  export type QnaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    answers?: boolean | Qna$answersArgs<ExtArgs>
    qnaTags?: boolean | Qna$qnaTagsArgs<ExtArgs>
    _count?: boolean | QnaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qna"]>

  export type QnaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qna"]>

  export type QnaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qna"]>

  export type QnaSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
  }

  export type QnaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "createdAt" | "updatedAt" | "deletedAt" | "userId", ExtArgs["result"]["qna"]>
  export type QnaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    answers?: boolean | Qna$answersArgs<ExtArgs>
    qnaTags?: boolean | Qna$qnaTagsArgs<ExtArgs>
    _count?: boolean | QnaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QnaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QnaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QnaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Qna"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
      qnaTags: Prisma.$QnaTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      userId: string
    }, ExtArgs["result"]["qna"]>
    composites: {}
  }

  type QnaGetPayload<S extends boolean | null | undefined | QnaDefaultArgs> = $Result.GetResult<Prisma.$QnaPayload, S>

  type QnaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QnaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QnaCountAggregateInputType | true
    }

  export interface QnaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Qna'], meta: { name: 'Qna' } }
    /**
     * Find zero or one Qna that matches the filter.
     * @param {QnaFindUniqueArgs} args - Arguments to find a Qna
     * @example
     * // Get one Qna
     * const qna = await prisma.qna.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QnaFindUniqueArgs>(args: SelectSubset<T, QnaFindUniqueArgs<ExtArgs>>): Prisma__QnaClient<$Result.GetResult<Prisma.$QnaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Qna that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QnaFindUniqueOrThrowArgs} args - Arguments to find a Qna
     * @example
     * // Get one Qna
     * const qna = await prisma.qna.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QnaFindUniqueOrThrowArgs>(args: SelectSubset<T, QnaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QnaClient<$Result.GetResult<Prisma.$QnaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Qna that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QnaFindFirstArgs} args - Arguments to find a Qna
     * @example
     * // Get one Qna
     * const qna = await prisma.qna.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QnaFindFirstArgs>(args?: SelectSubset<T, QnaFindFirstArgs<ExtArgs>>): Prisma__QnaClient<$Result.GetResult<Prisma.$QnaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Qna that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QnaFindFirstOrThrowArgs} args - Arguments to find a Qna
     * @example
     * // Get one Qna
     * const qna = await prisma.qna.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QnaFindFirstOrThrowArgs>(args?: SelectSubset<T, QnaFindFirstOrThrowArgs<ExtArgs>>): Prisma__QnaClient<$Result.GetResult<Prisma.$QnaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Qnas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QnaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Qnas
     * const qnas = await prisma.qna.findMany()
     * 
     * // Get first 10 Qnas
     * const qnas = await prisma.qna.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qnaWithIdOnly = await prisma.qna.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QnaFindManyArgs>(args?: SelectSubset<T, QnaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QnaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Qna.
     * @param {QnaCreateArgs} args - Arguments to create a Qna.
     * @example
     * // Create one Qna
     * const Qna = await prisma.qna.create({
     *   data: {
     *     // ... data to create a Qna
     *   }
     * })
     * 
     */
    create<T extends QnaCreateArgs>(args: SelectSubset<T, QnaCreateArgs<ExtArgs>>): Prisma__QnaClient<$Result.GetResult<Prisma.$QnaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Qnas.
     * @param {QnaCreateManyArgs} args - Arguments to create many Qnas.
     * @example
     * // Create many Qnas
     * const qna = await prisma.qna.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QnaCreateManyArgs>(args?: SelectSubset<T, QnaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Qnas and returns the data saved in the database.
     * @param {QnaCreateManyAndReturnArgs} args - Arguments to create many Qnas.
     * @example
     * // Create many Qnas
     * const qna = await prisma.qna.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Qnas and only return the `id`
     * const qnaWithIdOnly = await prisma.qna.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QnaCreateManyAndReturnArgs>(args?: SelectSubset<T, QnaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QnaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Qna.
     * @param {QnaDeleteArgs} args - Arguments to delete one Qna.
     * @example
     * // Delete one Qna
     * const Qna = await prisma.qna.delete({
     *   where: {
     *     // ... filter to delete one Qna
     *   }
     * })
     * 
     */
    delete<T extends QnaDeleteArgs>(args: SelectSubset<T, QnaDeleteArgs<ExtArgs>>): Prisma__QnaClient<$Result.GetResult<Prisma.$QnaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Qna.
     * @param {QnaUpdateArgs} args - Arguments to update one Qna.
     * @example
     * // Update one Qna
     * const qna = await prisma.qna.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QnaUpdateArgs>(args: SelectSubset<T, QnaUpdateArgs<ExtArgs>>): Prisma__QnaClient<$Result.GetResult<Prisma.$QnaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Qnas.
     * @param {QnaDeleteManyArgs} args - Arguments to filter Qnas to delete.
     * @example
     * // Delete a few Qnas
     * const { count } = await prisma.qna.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QnaDeleteManyArgs>(args?: SelectSubset<T, QnaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Qnas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QnaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Qnas
     * const qna = await prisma.qna.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QnaUpdateManyArgs>(args: SelectSubset<T, QnaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Qnas and returns the data updated in the database.
     * @param {QnaUpdateManyAndReturnArgs} args - Arguments to update many Qnas.
     * @example
     * // Update many Qnas
     * const qna = await prisma.qna.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Qnas and only return the `id`
     * const qnaWithIdOnly = await prisma.qna.updateManyAndReturn({
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
    updateManyAndReturn<T extends QnaUpdateManyAndReturnArgs>(args: SelectSubset<T, QnaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QnaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Qna.
     * @param {QnaUpsertArgs} args - Arguments to update or create a Qna.
     * @example
     * // Update or create a Qna
     * const qna = await prisma.qna.upsert({
     *   create: {
     *     // ... data to create a Qna
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Qna we want to update
     *   }
     * })
     */
    upsert<T extends QnaUpsertArgs>(args: SelectSubset<T, QnaUpsertArgs<ExtArgs>>): Prisma__QnaClient<$Result.GetResult<Prisma.$QnaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Qnas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QnaCountArgs} args - Arguments to filter Qnas to count.
     * @example
     * // Count the number of Qnas
     * const count = await prisma.qna.count({
     *   where: {
     *     // ... the filter for the Qnas we want to count
     *   }
     * })
    **/
    count<T extends QnaCountArgs>(
      args?: Subset<T, QnaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QnaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Qna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QnaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QnaAggregateArgs>(args: Subset<T, QnaAggregateArgs>): Prisma.PrismaPromise<GetQnaAggregateType<T>>

    /**
     * Group by Qna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QnaGroupByArgs} args - Group by arguments.
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
      T extends QnaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QnaGroupByArgs['orderBy'] }
        : { orderBy?: QnaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QnaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQnaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Qna model
   */
  readonly fields: QnaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Qna.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QnaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Qna$answersArgs<ExtArgs> = {}>(args?: Subset<T, Qna$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    qnaTags<T extends Qna$qnaTagsArgs<ExtArgs> = {}>(args?: Subset<T, Qna$qnaTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QnaTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Qna model
   */
  interface QnaFieldRefs {
    readonly id: FieldRef<"Qna", 'Int'>
    readonly title: FieldRef<"Qna", 'String'>
    readonly content: FieldRef<"Qna", 'String'>
    readonly createdAt: FieldRef<"Qna", 'DateTime'>
    readonly updatedAt: FieldRef<"Qna", 'DateTime'>
    readonly deletedAt: FieldRef<"Qna", 'DateTime'>
    readonly userId: FieldRef<"Qna", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Qna findUnique
   */
  export type QnaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qna
     */
    select?: QnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qna
     */
    omit?: QnaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaInclude<ExtArgs> | null
    /**
     * Filter, which Qna to fetch.
     */
    where: QnaWhereUniqueInput
  }

  /**
   * Qna findUniqueOrThrow
   */
  export type QnaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qna
     */
    select?: QnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qna
     */
    omit?: QnaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaInclude<ExtArgs> | null
    /**
     * Filter, which Qna to fetch.
     */
    where: QnaWhereUniqueInput
  }

  /**
   * Qna findFirst
   */
  export type QnaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qna
     */
    select?: QnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qna
     */
    omit?: QnaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaInclude<ExtArgs> | null
    /**
     * Filter, which Qna to fetch.
     */
    where?: QnaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qnas to fetch.
     */
    orderBy?: QnaOrderByWithRelationInput | QnaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Qnas.
     */
    cursor?: QnaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qnas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qnas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Qnas.
     */
    distinct?: QnaScalarFieldEnum | QnaScalarFieldEnum[]
  }

  /**
   * Qna findFirstOrThrow
   */
  export type QnaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qna
     */
    select?: QnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qna
     */
    omit?: QnaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaInclude<ExtArgs> | null
    /**
     * Filter, which Qna to fetch.
     */
    where?: QnaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qnas to fetch.
     */
    orderBy?: QnaOrderByWithRelationInput | QnaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Qnas.
     */
    cursor?: QnaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qnas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qnas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Qnas.
     */
    distinct?: QnaScalarFieldEnum | QnaScalarFieldEnum[]
  }

  /**
   * Qna findMany
   */
  export type QnaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qna
     */
    select?: QnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qna
     */
    omit?: QnaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaInclude<ExtArgs> | null
    /**
     * Filter, which Qnas to fetch.
     */
    where?: QnaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qnas to fetch.
     */
    orderBy?: QnaOrderByWithRelationInput | QnaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Qnas.
     */
    cursor?: QnaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qnas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qnas.
     */
    skip?: number
    distinct?: QnaScalarFieldEnum | QnaScalarFieldEnum[]
  }

  /**
   * Qna create
   */
  export type QnaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qna
     */
    select?: QnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qna
     */
    omit?: QnaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaInclude<ExtArgs> | null
    /**
     * The data needed to create a Qna.
     */
    data: XOR<QnaCreateInput, QnaUncheckedCreateInput>
  }

  /**
   * Qna createMany
   */
  export type QnaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Qnas.
     */
    data: QnaCreateManyInput | QnaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Qna createManyAndReturn
   */
  export type QnaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qna
     */
    select?: QnaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Qna
     */
    omit?: QnaOmit<ExtArgs> | null
    /**
     * The data used to create many Qnas.
     */
    data: QnaCreateManyInput | QnaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Qna update
   */
  export type QnaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qna
     */
    select?: QnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qna
     */
    omit?: QnaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaInclude<ExtArgs> | null
    /**
     * The data needed to update a Qna.
     */
    data: XOR<QnaUpdateInput, QnaUncheckedUpdateInput>
    /**
     * Choose, which Qna to update.
     */
    where: QnaWhereUniqueInput
  }

  /**
   * Qna updateMany
   */
  export type QnaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Qnas.
     */
    data: XOR<QnaUpdateManyMutationInput, QnaUncheckedUpdateManyInput>
    /**
     * Filter which Qnas to update
     */
    where?: QnaWhereInput
    /**
     * Limit how many Qnas to update.
     */
    limit?: number
  }

  /**
   * Qna updateManyAndReturn
   */
  export type QnaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qna
     */
    select?: QnaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Qna
     */
    omit?: QnaOmit<ExtArgs> | null
    /**
     * The data used to update Qnas.
     */
    data: XOR<QnaUpdateManyMutationInput, QnaUncheckedUpdateManyInput>
    /**
     * Filter which Qnas to update
     */
    where?: QnaWhereInput
    /**
     * Limit how many Qnas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Qna upsert
   */
  export type QnaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qna
     */
    select?: QnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qna
     */
    omit?: QnaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaInclude<ExtArgs> | null
    /**
     * The filter to search for the Qna to update in case it exists.
     */
    where: QnaWhereUniqueInput
    /**
     * In case the Qna found by the `where` argument doesn't exist, create a new Qna with this data.
     */
    create: XOR<QnaCreateInput, QnaUncheckedCreateInput>
    /**
     * In case the Qna was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QnaUpdateInput, QnaUncheckedUpdateInput>
  }

  /**
   * Qna delete
   */
  export type QnaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qna
     */
    select?: QnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qna
     */
    omit?: QnaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaInclude<ExtArgs> | null
    /**
     * Filter which Qna to delete.
     */
    where: QnaWhereUniqueInput
  }

  /**
   * Qna deleteMany
   */
  export type QnaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Qnas to delete
     */
    where?: QnaWhereInput
    /**
     * Limit how many Qnas to delete.
     */
    limit?: number
  }

  /**
   * Qna.answers
   */
  export type Qna$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Qna.qnaTags
   */
  export type Qna$qnaTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QnaTag
     */
    select?: QnaTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QnaTag
     */
    omit?: QnaTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaTagInclude<ExtArgs> | null
    where?: QnaTagWhereInput
    orderBy?: QnaTagOrderByWithRelationInput | QnaTagOrderByWithRelationInput[]
    cursor?: QnaTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QnaTagScalarFieldEnum | QnaTagScalarFieldEnum[]
  }

  /**
   * Qna without action
   */
  export type QnaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qna
     */
    select?: QnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qna
     */
    omit?: QnaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaInclude<ExtArgs> | null
  }


  /**
   * Model UserMedi
   */

  export type AggregateUserMedi = {
    _count: UserMediCountAggregateOutputType | null
    _avg: UserMediAvgAggregateOutputType | null
    _sum: UserMediSumAggregateOutputType | null
    _min: UserMediMinAggregateOutputType | null
    _max: UserMediMaxAggregateOutputType | null
  }

  export type UserMediAvgAggregateOutputType = {
    id: number | null
  }

  export type UserMediSumAggregateOutputType = {
    id: number | null
  }

  export type UserMediMinAggregateOutputType = {
    id: number | null
    startDate: Date | null
    endDate: Date | null
    userId: string | null
    itemSeq: string | null
  }

  export type UserMediMaxAggregateOutputType = {
    id: number | null
    startDate: Date | null
    endDate: Date | null
    userId: string | null
    itemSeq: string | null
  }

  export type UserMediCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    userId: number
    itemSeq: number
    _all: number
  }


  export type UserMediAvgAggregateInputType = {
    id?: true
  }

  export type UserMediSumAggregateInputType = {
    id?: true
  }

  export type UserMediMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    userId?: true
    itemSeq?: true
  }

  export type UserMediMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    userId?: true
    itemSeq?: true
  }

  export type UserMediCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    userId?: true
    itemSeq?: true
    _all?: true
  }

  export type UserMediAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMedi to aggregate.
     */
    where?: UserMediWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMedis to fetch.
     */
    orderBy?: UserMediOrderByWithRelationInput | UserMediOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMediWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMedis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMedis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMedis
    **/
    _count?: true | UserMediCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserMediAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserMediSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMediMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMediMaxAggregateInputType
  }

  export type GetUserMediAggregateType<T extends UserMediAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMedi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMedi[P]>
      : GetScalarType<T[P], AggregateUserMedi[P]>
  }




  export type UserMediGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMediWhereInput
    orderBy?: UserMediOrderByWithAggregationInput | UserMediOrderByWithAggregationInput[]
    by: UserMediScalarFieldEnum[] | UserMediScalarFieldEnum
    having?: UserMediScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMediCountAggregateInputType | true
    _avg?: UserMediAvgAggregateInputType
    _sum?: UserMediSumAggregateInputType
    _min?: UserMediMinAggregateInputType
    _max?: UserMediMaxAggregateInputType
  }

  export type UserMediGroupByOutputType = {
    id: number
    startDate: Date | null
    endDate: Date | null
    userId: string
    itemSeq: string
    _count: UserMediCountAggregateOutputType | null
    _avg: UserMediAvgAggregateOutputType | null
    _sum: UserMediSumAggregateOutputType | null
    _min: UserMediMinAggregateOutputType | null
    _max: UserMediMaxAggregateOutputType | null
  }

  type GetUserMediGroupByPayload<T extends UserMediGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMediGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMediGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMediGroupByOutputType[P]>
            : GetScalarType<T[P], UserMediGroupByOutputType[P]>
        }
      >
    >


  export type UserMediSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    itemSeq?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    mediTimes?: boolean | UserMedi$mediTimesArgs<ExtArgs>
    _count?: boolean | UserMediCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMedi"]>

  export type UserMediSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    itemSeq?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMedi"]>

  export type UserMediSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    itemSeq?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMedi"]>

  export type UserMediSelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    itemSeq?: boolean
  }

  export type UserMediOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startDate" | "endDate" | "userId" | "itemSeq", ExtArgs["result"]["userMedi"]>
  export type UserMediInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    mediTimes?: boolean | UserMedi$mediTimesArgs<ExtArgs>
    _count?: boolean | UserMediCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserMediIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }
  export type UserMediIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }

  export type $UserMediPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserMedi"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      medicine: Prisma.$MedicinePayload<ExtArgs>
      mediTimes: Prisma.$MediTimePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startDate: Date | null
      endDate: Date | null
      userId: string
      itemSeq: string
    }, ExtArgs["result"]["userMedi"]>
    composites: {}
  }

  type UserMediGetPayload<S extends boolean | null | undefined | UserMediDefaultArgs> = $Result.GetResult<Prisma.$UserMediPayload, S>

  type UserMediCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserMediFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserMediCountAggregateInputType | true
    }

  export interface UserMediDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserMedi'], meta: { name: 'UserMedi' } }
    /**
     * Find zero or one UserMedi that matches the filter.
     * @param {UserMediFindUniqueArgs} args - Arguments to find a UserMedi
     * @example
     * // Get one UserMedi
     * const userMedi = await prisma.userMedi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserMediFindUniqueArgs>(args: SelectSubset<T, UserMediFindUniqueArgs<ExtArgs>>): Prisma__UserMediClient<$Result.GetResult<Prisma.$UserMediPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserMedi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserMediFindUniqueOrThrowArgs} args - Arguments to find a UserMedi
     * @example
     * // Get one UserMedi
     * const userMedi = await prisma.userMedi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserMediFindUniqueOrThrowArgs>(args: SelectSubset<T, UserMediFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserMediClient<$Result.GetResult<Prisma.$UserMediPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMedi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediFindFirstArgs} args - Arguments to find a UserMedi
     * @example
     * // Get one UserMedi
     * const userMedi = await prisma.userMedi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserMediFindFirstArgs>(args?: SelectSubset<T, UserMediFindFirstArgs<ExtArgs>>): Prisma__UserMediClient<$Result.GetResult<Prisma.$UserMediPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMedi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediFindFirstOrThrowArgs} args - Arguments to find a UserMedi
     * @example
     * // Get one UserMedi
     * const userMedi = await prisma.userMedi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserMediFindFirstOrThrowArgs>(args?: SelectSubset<T, UserMediFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserMediClient<$Result.GetResult<Prisma.$UserMediPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserMedis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMedis
     * const userMedis = await prisma.userMedi.findMany()
     * 
     * // Get first 10 UserMedis
     * const userMedis = await prisma.userMedi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userMediWithIdOnly = await prisma.userMedi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserMediFindManyArgs>(args?: SelectSubset<T, UserMediFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMediPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserMedi.
     * @param {UserMediCreateArgs} args - Arguments to create a UserMedi.
     * @example
     * // Create one UserMedi
     * const UserMedi = await prisma.userMedi.create({
     *   data: {
     *     // ... data to create a UserMedi
     *   }
     * })
     * 
     */
    create<T extends UserMediCreateArgs>(args: SelectSubset<T, UserMediCreateArgs<ExtArgs>>): Prisma__UserMediClient<$Result.GetResult<Prisma.$UserMediPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserMedis.
     * @param {UserMediCreateManyArgs} args - Arguments to create many UserMedis.
     * @example
     * // Create many UserMedis
     * const userMedi = await prisma.userMedi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserMediCreateManyArgs>(args?: SelectSubset<T, UserMediCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserMedis and returns the data saved in the database.
     * @param {UserMediCreateManyAndReturnArgs} args - Arguments to create many UserMedis.
     * @example
     * // Create many UserMedis
     * const userMedi = await prisma.userMedi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserMedis and only return the `id`
     * const userMediWithIdOnly = await prisma.userMedi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserMediCreateManyAndReturnArgs>(args?: SelectSubset<T, UserMediCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMediPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserMedi.
     * @param {UserMediDeleteArgs} args - Arguments to delete one UserMedi.
     * @example
     * // Delete one UserMedi
     * const UserMedi = await prisma.userMedi.delete({
     *   where: {
     *     // ... filter to delete one UserMedi
     *   }
     * })
     * 
     */
    delete<T extends UserMediDeleteArgs>(args: SelectSubset<T, UserMediDeleteArgs<ExtArgs>>): Prisma__UserMediClient<$Result.GetResult<Prisma.$UserMediPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserMedi.
     * @param {UserMediUpdateArgs} args - Arguments to update one UserMedi.
     * @example
     * // Update one UserMedi
     * const userMedi = await prisma.userMedi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserMediUpdateArgs>(args: SelectSubset<T, UserMediUpdateArgs<ExtArgs>>): Prisma__UserMediClient<$Result.GetResult<Prisma.$UserMediPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserMedis.
     * @param {UserMediDeleteManyArgs} args - Arguments to filter UserMedis to delete.
     * @example
     * // Delete a few UserMedis
     * const { count } = await prisma.userMedi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserMediDeleteManyArgs>(args?: SelectSubset<T, UserMediDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMedis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMedis
     * const userMedi = await prisma.userMedi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserMediUpdateManyArgs>(args: SelectSubset<T, UserMediUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMedis and returns the data updated in the database.
     * @param {UserMediUpdateManyAndReturnArgs} args - Arguments to update many UserMedis.
     * @example
     * // Update many UserMedis
     * const userMedi = await prisma.userMedi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserMedis and only return the `id`
     * const userMediWithIdOnly = await prisma.userMedi.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserMediUpdateManyAndReturnArgs>(args: SelectSubset<T, UserMediUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMediPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserMedi.
     * @param {UserMediUpsertArgs} args - Arguments to update or create a UserMedi.
     * @example
     * // Update or create a UserMedi
     * const userMedi = await prisma.userMedi.upsert({
     *   create: {
     *     // ... data to create a UserMedi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMedi we want to update
     *   }
     * })
     */
    upsert<T extends UserMediUpsertArgs>(args: SelectSubset<T, UserMediUpsertArgs<ExtArgs>>): Prisma__UserMediClient<$Result.GetResult<Prisma.$UserMediPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserMedis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediCountArgs} args - Arguments to filter UserMedis to count.
     * @example
     * // Count the number of UserMedis
     * const count = await prisma.userMedi.count({
     *   where: {
     *     // ... the filter for the UserMedis we want to count
     *   }
     * })
    **/
    count<T extends UserMediCountArgs>(
      args?: Subset<T, UserMediCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMediCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMedi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserMediAggregateArgs>(args: Subset<T, UserMediAggregateArgs>): Prisma.PrismaPromise<GetUserMediAggregateType<T>>

    /**
     * Group by UserMedi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediGroupByArgs} args - Group by arguments.
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
      T extends UserMediGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMediGroupByArgs['orderBy'] }
        : { orderBy?: UserMediGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserMediGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMediGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserMedi model
   */
  readonly fields: UserMediFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMedi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserMediClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicine<T extends MedicineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineDefaultArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mediTimes<T extends UserMedi$mediTimesArgs<ExtArgs> = {}>(args?: Subset<T, UserMedi$mediTimesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediTimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserMedi model
   */
  interface UserMediFieldRefs {
    readonly id: FieldRef<"UserMedi", 'Int'>
    readonly startDate: FieldRef<"UserMedi", 'DateTime'>
    readonly endDate: FieldRef<"UserMedi", 'DateTime'>
    readonly userId: FieldRef<"UserMedi", 'String'>
    readonly itemSeq: FieldRef<"UserMedi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserMedi findUnique
   */
  export type UserMediFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedi
     */
    select?: UserMediSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedi
     */
    omit?: UserMediOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediInclude<ExtArgs> | null
    /**
     * Filter, which UserMedi to fetch.
     */
    where: UserMediWhereUniqueInput
  }

  /**
   * UserMedi findUniqueOrThrow
   */
  export type UserMediFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedi
     */
    select?: UserMediSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedi
     */
    omit?: UserMediOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediInclude<ExtArgs> | null
    /**
     * Filter, which UserMedi to fetch.
     */
    where: UserMediWhereUniqueInput
  }

  /**
   * UserMedi findFirst
   */
  export type UserMediFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedi
     */
    select?: UserMediSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedi
     */
    omit?: UserMediOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediInclude<ExtArgs> | null
    /**
     * Filter, which UserMedi to fetch.
     */
    where?: UserMediWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMedis to fetch.
     */
    orderBy?: UserMediOrderByWithRelationInput | UserMediOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMedis.
     */
    cursor?: UserMediWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMedis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMedis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMedis.
     */
    distinct?: UserMediScalarFieldEnum | UserMediScalarFieldEnum[]
  }

  /**
   * UserMedi findFirstOrThrow
   */
  export type UserMediFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedi
     */
    select?: UserMediSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedi
     */
    omit?: UserMediOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediInclude<ExtArgs> | null
    /**
     * Filter, which UserMedi to fetch.
     */
    where?: UserMediWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMedis to fetch.
     */
    orderBy?: UserMediOrderByWithRelationInput | UserMediOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMedis.
     */
    cursor?: UserMediWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMedis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMedis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMedis.
     */
    distinct?: UserMediScalarFieldEnum | UserMediScalarFieldEnum[]
  }

  /**
   * UserMedi findMany
   */
  export type UserMediFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedi
     */
    select?: UserMediSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedi
     */
    omit?: UserMediOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediInclude<ExtArgs> | null
    /**
     * Filter, which UserMedis to fetch.
     */
    where?: UserMediWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMedis to fetch.
     */
    orderBy?: UserMediOrderByWithRelationInput | UserMediOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMedis.
     */
    cursor?: UserMediWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMedis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMedis.
     */
    skip?: number
    distinct?: UserMediScalarFieldEnum | UserMediScalarFieldEnum[]
  }

  /**
   * UserMedi create
   */
  export type UserMediCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedi
     */
    select?: UserMediSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedi
     */
    omit?: UserMediOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediInclude<ExtArgs> | null
    /**
     * The data needed to create a UserMedi.
     */
    data: XOR<UserMediCreateInput, UserMediUncheckedCreateInput>
  }

  /**
   * UserMedi createMany
   */
  export type UserMediCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserMedis.
     */
    data: UserMediCreateManyInput | UserMediCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserMedi createManyAndReturn
   */
  export type UserMediCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedi
     */
    select?: UserMediSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedi
     */
    omit?: UserMediOmit<ExtArgs> | null
    /**
     * The data used to create many UserMedis.
     */
    data: UserMediCreateManyInput | UserMediCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMedi update
   */
  export type UserMediUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedi
     */
    select?: UserMediSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedi
     */
    omit?: UserMediOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediInclude<ExtArgs> | null
    /**
     * The data needed to update a UserMedi.
     */
    data: XOR<UserMediUpdateInput, UserMediUncheckedUpdateInput>
    /**
     * Choose, which UserMedi to update.
     */
    where: UserMediWhereUniqueInput
  }

  /**
   * UserMedi updateMany
   */
  export type UserMediUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserMedis.
     */
    data: XOR<UserMediUpdateManyMutationInput, UserMediUncheckedUpdateManyInput>
    /**
     * Filter which UserMedis to update
     */
    where?: UserMediWhereInput
    /**
     * Limit how many UserMedis to update.
     */
    limit?: number
  }

  /**
   * UserMedi updateManyAndReturn
   */
  export type UserMediUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedi
     */
    select?: UserMediSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedi
     */
    omit?: UserMediOmit<ExtArgs> | null
    /**
     * The data used to update UserMedis.
     */
    data: XOR<UserMediUpdateManyMutationInput, UserMediUncheckedUpdateManyInput>
    /**
     * Filter which UserMedis to update
     */
    where?: UserMediWhereInput
    /**
     * Limit how many UserMedis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMedi upsert
   */
  export type UserMediUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedi
     */
    select?: UserMediSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedi
     */
    omit?: UserMediOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediInclude<ExtArgs> | null
    /**
     * The filter to search for the UserMedi to update in case it exists.
     */
    where: UserMediWhereUniqueInput
    /**
     * In case the UserMedi found by the `where` argument doesn't exist, create a new UserMedi with this data.
     */
    create: XOR<UserMediCreateInput, UserMediUncheckedCreateInput>
    /**
     * In case the UserMedi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMediUpdateInput, UserMediUncheckedUpdateInput>
  }

  /**
   * UserMedi delete
   */
  export type UserMediDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedi
     */
    select?: UserMediSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedi
     */
    omit?: UserMediOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediInclude<ExtArgs> | null
    /**
     * Filter which UserMedi to delete.
     */
    where: UserMediWhereUniqueInput
  }

  /**
   * UserMedi deleteMany
   */
  export type UserMediDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMedis to delete
     */
    where?: UserMediWhereInput
    /**
     * Limit how many UserMedis to delete.
     */
    limit?: number
  }

  /**
   * UserMedi.mediTimes
   */
  export type UserMedi$mediTimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediTime
     */
    select?: MediTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediTime
     */
    omit?: MediTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediTimeInclude<ExtArgs> | null
    where?: MediTimeWhereInput
    orderBy?: MediTimeOrderByWithRelationInput | MediTimeOrderByWithRelationInput[]
    cursor?: MediTimeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediTimeScalarFieldEnum | MediTimeScalarFieldEnum[]
  }

  /**
   * UserMedi without action
   */
  export type UserMediDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedi
     */
    select?: UserMediSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedi
     */
    omit?: UserMediOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediInclude<ExtArgs> | null
  }


  /**
   * Model UserHealth
   */

  export type AggregateUserHealth = {
    _count: UserHealthCountAggregateOutputType | null
    _avg: UserHealthAvgAggregateOutputType | null
    _sum: UserHealthSumAggregateOutputType | null
    _min: UserHealthMinAggregateOutputType | null
    _max: UserHealthMaxAggregateOutputType | null
  }

  export type UserHealthAvgAggregateOutputType = {
    id: number | null
    healthId: number | null
  }

  export type UserHealthSumAggregateOutputType = {
    id: number | null
    healthId: number | null
  }

  export type UserHealthMinAggregateOutputType = {
    id: number | null
    userId: string | null
    healthId: number | null
  }

  export type UserHealthMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    healthId: number | null
  }

  export type UserHealthCountAggregateOutputType = {
    id: number
    userId: number
    healthId: number
    _all: number
  }


  export type UserHealthAvgAggregateInputType = {
    id?: true
    healthId?: true
  }

  export type UserHealthSumAggregateInputType = {
    id?: true
    healthId?: true
  }

  export type UserHealthMinAggregateInputType = {
    id?: true
    userId?: true
    healthId?: true
  }

  export type UserHealthMaxAggregateInputType = {
    id?: true
    userId?: true
    healthId?: true
  }

  export type UserHealthCountAggregateInputType = {
    id?: true
    userId?: true
    healthId?: true
    _all?: true
  }

  export type UserHealthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHealth to aggregate.
     */
    where?: UserHealthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHealths to fetch.
     */
    orderBy?: UserHealthOrderByWithRelationInput | UserHealthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserHealthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHealths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHealths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserHealths
    **/
    _count?: true | UserHealthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserHealthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserHealthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserHealthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserHealthMaxAggregateInputType
  }

  export type GetUserHealthAggregateType<T extends UserHealthAggregateArgs> = {
        [P in keyof T & keyof AggregateUserHealth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserHealth[P]>
      : GetScalarType<T[P], AggregateUserHealth[P]>
  }




  export type UserHealthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHealthWhereInput
    orderBy?: UserHealthOrderByWithAggregationInput | UserHealthOrderByWithAggregationInput[]
    by: UserHealthScalarFieldEnum[] | UserHealthScalarFieldEnum
    having?: UserHealthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserHealthCountAggregateInputType | true
    _avg?: UserHealthAvgAggregateInputType
    _sum?: UserHealthSumAggregateInputType
    _min?: UserHealthMinAggregateInputType
    _max?: UserHealthMaxAggregateInputType
  }

  export type UserHealthGroupByOutputType = {
    id: number
    userId: string
    healthId: number
    _count: UserHealthCountAggregateOutputType | null
    _avg: UserHealthAvgAggregateOutputType | null
    _sum: UserHealthSumAggregateOutputType | null
    _min: UserHealthMinAggregateOutputType | null
    _max: UserHealthMaxAggregateOutputType | null
  }

  type GetUserHealthGroupByPayload<T extends UserHealthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserHealthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserHealthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserHealthGroupByOutputType[P]>
            : GetScalarType<T[P], UserHealthGroupByOutputType[P]>
        }
      >
    >


  export type UserHealthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    healthId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    health?: boolean | HealthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHealth"]>

  export type UserHealthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    healthId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    health?: boolean | HealthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHealth"]>

  export type UserHealthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    healthId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    health?: boolean | HealthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHealth"]>

  export type UserHealthSelectScalar = {
    id?: boolean
    userId?: boolean
    healthId?: boolean
  }

  export type UserHealthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "healthId", ExtArgs["result"]["userHealth"]>
  export type UserHealthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    health?: boolean | HealthDefaultArgs<ExtArgs>
  }
  export type UserHealthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    health?: boolean | HealthDefaultArgs<ExtArgs>
  }
  export type UserHealthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    health?: boolean | HealthDefaultArgs<ExtArgs>
  }

  export type $UserHealthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserHealth"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      health: Prisma.$HealthPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      healthId: number
    }, ExtArgs["result"]["userHealth"]>
    composites: {}
  }

  type UserHealthGetPayload<S extends boolean | null | undefined | UserHealthDefaultArgs> = $Result.GetResult<Prisma.$UserHealthPayload, S>

  type UserHealthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserHealthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserHealthCountAggregateInputType | true
    }

  export interface UserHealthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserHealth'], meta: { name: 'UserHealth' } }
    /**
     * Find zero or one UserHealth that matches the filter.
     * @param {UserHealthFindUniqueArgs} args - Arguments to find a UserHealth
     * @example
     * // Get one UserHealth
     * const userHealth = await prisma.userHealth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserHealthFindUniqueArgs>(args: SelectSubset<T, UserHealthFindUniqueArgs<ExtArgs>>): Prisma__UserHealthClient<$Result.GetResult<Prisma.$UserHealthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserHealth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserHealthFindUniqueOrThrowArgs} args - Arguments to find a UserHealth
     * @example
     * // Get one UserHealth
     * const userHealth = await prisma.userHealth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserHealthFindUniqueOrThrowArgs>(args: SelectSubset<T, UserHealthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserHealthClient<$Result.GetResult<Prisma.$UserHealthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserHealth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHealthFindFirstArgs} args - Arguments to find a UserHealth
     * @example
     * // Get one UserHealth
     * const userHealth = await prisma.userHealth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserHealthFindFirstArgs>(args?: SelectSubset<T, UserHealthFindFirstArgs<ExtArgs>>): Prisma__UserHealthClient<$Result.GetResult<Prisma.$UserHealthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserHealth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHealthFindFirstOrThrowArgs} args - Arguments to find a UserHealth
     * @example
     * // Get one UserHealth
     * const userHealth = await prisma.userHealth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserHealthFindFirstOrThrowArgs>(args?: SelectSubset<T, UserHealthFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserHealthClient<$Result.GetResult<Prisma.$UserHealthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserHealths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHealthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserHealths
     * const userHealths = await prisma.userHealth.findMany()
     * 
     * // Get first 10 UserHealths
     * const userHealths = await prisma.userHealth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userHealthWithIdOnly = await prisma.userHealth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserHealthFindManyArgs>(args?: SelectSubset<T, UserHealthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHealthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserHealth.
     * @param {UserHealthCreateArgs} args - Arguments to create a UserHealth.
     * @example
     * // Create one UserHealth
     * const UserHealth = await prisma.userHealth.create({
     *   data: {
     *     // ... data to create a UserHealth
     *   }
     * })
     * 
     */
    create<T extends UserHealthCreateArgs>(args: SelectSubset<T, UserHealthCreateArgs<ExtArgs>>): Prisma__UserHealthClient<$Result.GetResult<Prisma.$UserHealthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserHealths.
     * @param {UserHealthCreateManyArgs} args - Arguments to create many UserHealths.
     * @example
     * // Create many UserHealths
     * const userHealth = await prisma.userHealth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserHealthCreateManyArgs>(args?: SelectSubset<T, UserHealthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserHealths and returns the data saved in the database.
     * @param {UserHealthCreateManyAndReturnArgs} args - Arguments to create many UserHealths.
     * @example
     * // Create many UserHealths
     * const userHealth = await prisma.userHealth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserHealths and only return the `id`
     * const userHealthWithIdOnly = await prisma.userHealth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserHealthCreateManyAndReturnArgs>(args?: SelectSubset<T, UserHealthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHealthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserHealth.
     * @param {UserHealthDeleteArgs} args - Arguments to delete one UserHealth.
     * @example
     * // Delete one UserHealth
     * const UserHealth = await prisma.userHealth.delete({
     *   where: {
     *     // ... filter to delete one UserHealth
     *   }
     * })
     * 
     */
    delete<T extends UserHealthDeleteArgs>(args: SelectSubset<T, UserHealthDeleteArgs<ExtArgs>>): Prisma__UserHealthClient<$Result.GetResult<Prisma.$UserHealthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserHealth.
     * @param {UserHealthUpdateArgs} args - Arguments to update one UserHealth.
     * @example
     * // Update one UserHealth
     * const userHealth = await prisma.userHealth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserHealthUpdateArgs>(args: SelectSubset<T, UserHealthUpdateArgs<ExtArgs>>): Prisma__UserHealthClient<$Result.GetResult<Prisma.$UserHealthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserHealths.
     * @param {UserHealthDeleteManyArgs} args - Arguments to filter UserHealths to delete.
     * @example
     * // Delete a few UserHealths
     * const { count } = await prisma.userHealth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserHealthDeleteManyArgs>(args?: SelectSubset<T, UserHealthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserHealths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHealthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserHealths
     * const userHealth = await prisma.userHealth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserHealthUpdateManyArgs>(args: SelectSubset<T, UserHealthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserHealths and returns the data updated in the database.
     * @param {UserHealthUpdateManyAndReturnArgs} args - Arguments to update many UserHealths.
     * @example
     * // Update many UserHealths
     * const userHealth = await prisma.userHealth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserHealths and only return the `id`
     * const userHealthWithIdOnly = await prisma.userHealth.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserHealthUpdateManyAndReturnArgs>(args: SelectSubset<T, UserHealthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHealthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserHealth.
     * @param {UserHealthUpsertArgs} args - Arguments to update or create a UserHealth.
     * @example
     * // Update or create a UserHealth
     * const userHealth = await prisma.userHealth.upsert({
     *   create: {
     *     // ... data to create a UserHealth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserHealth we want to update
     *   }
     * })
     */
    upsert<T extends UserHealthUpsertArgs>(args: SelectSubset<T, UserHealthUpsertArgs<ExtArgs>>): Prisma__UserHealthClient<$Result.GetResult<Prisma.$UserHealthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserHealths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHealthCountArgs} args - Arguments to filter UserHealths to count.
     * @example
     * // Count the number of UserHealths
     * const count = await prisma.userHealth.count({
     *   where: {
     *     // ... the filter for the UserHealths we want to count
     *   }
     * })
    **/
    count<T extends UserHealthCountArgs>(
      args?: Subset<T, UserHealthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserHealthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserHealth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHealthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserHealthAggregateArgs>(args: Subset<T, UserHealthAggregateArgs>): Prisma.PrismaPromise<GetUserHealthAggregateType<T>>

    /**
     * Group by UserHealth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHealthGroupByArgs} args - Group by arguments.
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
      T extends UserHealthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserHealthGroupByArgs['orderBy'] }
        : { orderBy?: UserHealthGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserHealthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserHealthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserHealth model
   */
  readonly fields: UserHealthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserHealth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserHealthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    health<T extends HealthDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HealthDefaultArgs<ExtArgs>>): Prisma__HealthClient<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserHealth model
   */
  interface UserHealthFieldRefs {
    readonly id: FieldRef<"UserHealth", 'Int'>
    readonly userId: FieldRef<"UserHealth", 'String'>
    readonly healthId: FieldRef<"UserHealth", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserHealth findUnique
   */
  export type UserHealthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHealth
     */
    select?: UserHealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHealth
     */
    omit?: UserHealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHealthInclude<ExtArgs> | null
    /**
     * Filter, which UserHealth to fetch.
     */
    where: UserHealthWhereUniqueInput
  }

  /**
   * UserHealth findUniqueOrThrow
   */
  export type UserHealthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHealth
     */
    select?: UserHealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHealth
     */
    omit?: UserHealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHealthInclude<ExtArgs> | null
    /**
     * Filter, which UserHealth to fetch.
     */
    where: UserHealthWhereUniqueInput
  }

  /**
   * UserHealth findFirst
   */
  export type UserHealthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHealth
     */
    select?: UserHealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHealth
     */
    omit?: UserHealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHealthInclude<ExtArgs> | null
    /**
     * Filter, which UserHealth to fetch.
     */
    where?: UserHealthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHealths to fetch.
     */
    orderBy?: UserHealthOrderByWithRelationInput | UserHealthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHealths.
     */
    cursor?: UserHealthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHealths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHealths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHealths.
     */
    distinct?: UserHealthScalarFieldEnum | UserHealthScalarFieldEnum[]
  }

  /**
   * UserHealth findFirstOrThrow
   */
  export type UserHealthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHealth
     */
    select?: UserHealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHealth
     */
    omit?: UserHealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHealthInclude<ExtArgs> | null
    /**
     * Filter, which UserHealth to fetch.
     */
    where?: UserHealthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHealths to fetch.
     */
    orderBy?: UserHealthOrderByWithRelationInput | UserHealthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHealths.
     */
    cursor?: UserHealthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHealths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHealths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHealths.
     */
    distinct?: UserHealthScalarFieldEnum | UserHealthScalarFieldEnum[]
  }

  /**
   * UserHealth findMany
   */
  export type UserHealthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHealth
     */
    select?: UserHealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHealth
     */
    omit?: UserHealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHealthInclude<ExtArgs> | null
    /**
     * Filter, which UserHealths to fetch.
     */
    where?: UserHealthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHealths to fetch.
     */
    orderBy?: UserHealthOrderByWithRelationInput | UserHealthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserHealths.
     */
    cursor?: UserHealthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHealths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHealths.
     */
    skip?: number
    distinct?: UserHealthScalarFieldEnum | UserHealthScalarFieldEnum[]
  }

  /**
   * UserHealth create
   */
  export type UserHealthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHealth
     */
    select?: UserHealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHealth
     */
    omit?: UserHealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHealthInclude<ExtArgs> | null
    /**
     * The data needed to create a UserHealth.
     */
    data: XOR<UserHealthCreateInput, UserHealthUncheckedCreateInput>
  }

  /**
   * UserHealth createMany
   */
  export type UserHealthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserHealths.
     */
    data: UserHealthCreateManyInput | UserHealthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserHealth createManyAndReturn
   */
  export type UserHealthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHealth
     */
    select?: UserHealthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserHealth
     */
    omit?: UserHealthOmit<ExtArgs> | null
    /**
     * The data used to create many UserHealths.
     */
    data: UserHealthCreateManyInput | UserHealthCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHealthIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserHealth update
   */
  export type UserHealthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHealth
     */
    select?: UserHealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHealth
     */
    omit?: UserHealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHealthInclude<ExtArgs> | null
    /**
     * The data needed to update a UserHealth.
     */
    data: XOR<UserHealthUpdateInput, UserHealthUncheckedUpdateInput>
    /**
     * Choose, which UserHealth to update.
     */
    where: UserHealthWhereUniqueInput
  }

  /**
   * UserHealth updateMany
   */
  export type UserHealthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserHealths.
     */
    data: XOR<UserHealthUpdateManyMutationInput, UserHealthUncheckedUpdateManyInput>
    /**
     * Filter which UserHealths to update
     */
    where?: UserHealthWhereInput
    /**
     * Limit how many UserHealths to update.
     */
    limit?: number
  }

  /**
   * UserHealth updateManyAndReturn
   */
  export type UserHealthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHealth
     */
    select?: UserHealthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserHealth
     */
    omit?: UserHealthOmit<ExtArgs> | null
    /**
     * The data used to update UserHealths.
     */
    data: XOR<UserHealthUpdateManyMutationInput, UserHealthUncheckedUpdateManyInput>
    /**
     * Filter which UserHealths to update
     */
    where?: UserHealthWhereInput
    /**
     * Limit how many UserHealths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHealthIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserHealth upsert
   */
  export type UserHealthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHealth
     */
    select?: UserHealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHealth
     */
    omit?: UserHealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHealthInclude<ExtArgs> | null
    /**
     * The filter to search for the UserHealth to update in case it exists.
     */
    where: UserHealthWhereUniqueInput
    /**
     * In case the UserHealth found by the `where` argument doesn't exist, create a new UserHealth with this data.
     */
    create: XOR<UserHealthCreateInput, UserHealthUncheckedCreateInput>
    /**
     * In case the UserHealth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserHealthUpdateInput, UserHealthUncheckedUpdateInput>
  }

  /**
   * UserHealth delete
   */
  export type UserHealthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHealth
     */
    select?: UserHealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHealth
     */
    omit?: UserHealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHealthInclude<ExtArgs> | null
    /**
     * Filter which UserHealth to delete.
     */
    where: UserHealthWhereUniqueInput
  }

  /**
   * UserHealth deleteMany
   */
  export type UserHealthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHealths to delete
     */
    where?: UserHealthWhereInput
    /**
     * Limit how many UserHealths to delete.
     */
    limit?: number
  }

  /**
   * UserHealth without action
   */
  export type UserHealthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHealth
     */
    select?: UserHealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHealth
     */
    omit?: UserHealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHealthInclude<ExtArgs> | null
  }


  /**
   * Model Medicine
   */

  export type AggregateMedicine = {
    _count: MedicineCountAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  export type MedicineMinAggregateOutputType = {
    itemSeq: string | null
    itemName: string | null
    entpName: string | null
    itemPermitDate: Date | null
    etcOtcCode: string | null
    classNo: string | null
    chart: string | null
    barCode: string | null
    materialName: string | null
    eeDocId: string | null
  }

  export type MedicineMaxAggregateOutputType = {
    itemSeq: string | null
    itemName: string | null
    entpName: string | null
    itemPermitDate: Date | null
    etcOtcCode: string | null
    classNo: string | null
    chart: string | null
    barCode: string | null
    materialName: string | null
    eeDocId: string | null
  }

  export type MedicineCountAggregateOutputType = {
    itemSeq: number
    itemName: number
    entpName: number
    itemPermitDate: number
    etcOtcCode: number
    classNo: number
    chart: number
    barCode: number
    materialName: number
    eeDocId: number
    _all: number
  }


  export type MedicineMinAggregateInputType = {
    itemSeq?: true
    itemName?: true
    entpName?: true
    itemPermitDate?: true
    etcOtcCode?: true
    classNo?: true
    chart?: true
    barCode?: true
    materialName?: true
    eeDocId?: true
  }

  export type MedicineMaxAggregateInputType = {
    itemSeq?: true
    itemName?: true
    entpName?: true
    itemPermitDate?: true
    etcOtcCode?: true
    classNo?: true
    chart?: true
    barCode?: true
    materialName?: true
    eeDocId?: true
  }

  export type MedicineCountAggregateInputType = {
    itemSeq?: true
    itemName?: true
    entpName?: true
    itemPermitDate?: true
    etcOtcCode?: true
    classNo?: true
    chart?: true
    barCode?: true
    materialName?: true
    eeDocId?: true
    _all?: true
  }

  export type MedicineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicine to aggregate.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicines
    **/
    _count?: true | MedicineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineMaxAggregateInputType
  }

  export type GetMedicineAggregateType<T extends MedicineAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicine[P]>
      : GetScalarType<T[P], AggregateMedicine[P]>
  }




  export type MedicineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineWhereInput
    orderBy?: MedicineOrderByWithAggregationInput | MedicineOrderByWithAggregationInput[]
    by: MedicineScalarFieldEnum[] | MedicineScalarFieldEnum
    having?: MedicineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineCountAggregateInputType | true
    _min?: MedicineMinAggregateInputType
    _max?: MedicineMaxAggregateInputType
  }

  export type MedicineGroupByOutputType = {
    itemSeq: string
    itemName: string
    entpName: string | null
    itemPermitDate: Date | null
    etcOtcCode: string | null
    classNo: string | null
    chart: string | null
    barCode: string | null
    materialName: string | null
    eeDocId: string | null
    _count: MedicineCountAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  type GetMedicineGroupByPayload<T extends MedicineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineGroupByOutputType[P]>
        }
      >
    >


  export type MedicineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemSeq?: boolean
    itemName?: boolean
    entpName?: boolean
    itemPermitDate?: boolean
    etcOtcCode?: boolean
    classNo?: boolean
    chart?: boolean
    barCode?: boolean
    materialName?: boolean
    eeDocId?: boolean
    userMedis?: boolean | Medicine$userMedisArgs<ExtArgs>
    inventories?: boolean | Medicine$inventoriesArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemSeq?: boolean
    itemName?: boolean
    entpName?: boolean
    itemPermitDate?: boolean
    etcOtcCode?: boolean
    classNo?: boolean
    chart?: boolean
    barCode?: boolean
    materialName?: boolean
    eeDocId?: boolean
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemSeq?: boolean
    itemName?: boolean
    entpName?: boolean
    itemPermitDate?: boolean
    etcOtcCode?: boolean
    classNo?: boolean
    chart?: boolean
    barCode?: boolean
    materialName?: boolean
    eeDocId?: boolean
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectScalar = {
    itemSeq?: boolean
    itemName?: boolean
    entpName?: boolean
    itemPermitDate?: boolean
    etcOtcCode?: boolean
    classNo?: boolean
    chart?: boolean
    barCode?: boolean
    materialName?: boolean
    eeDocId?: boolean
  }

  export type MedicineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"itemSeq" | "itemName" | "entpName" | "itemPermitDate" | "etcOtcCode" | "classNo" | "chart" | "barCode" | "materialName" | "eeDocId", ExtArgs["result"]["medicine"]>
  export type MedicineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMedis?: boolean | Medicine$userMedisArgs<ExtArgs>
    inventories?: boolean | Medicine$inventoriesArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MedicineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MedicinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medicine"
    objects: {
      userMedis: Prisma.$UserMediPayload<ExtArgs>[]
      inventories: Prisma.$InventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      itemSeq: string
      itemName: string
      entpName: string | null
      itemPermitDate: Date | null
      etcOtcCode: string | null
      classNo: string | null
      chart: string | null
      barCode: string | null
      materialName: string | null
      eeDocId: string | null
    }, ExtArgs["result"]["medicine"]>
    composites: {}
  }

  type MedicineGetPayload<S extends boolean | null | undefined | MedicineDefaultArgs> = $Result.GetResult<Prisma.$MedicinePayload, S>

  type MedicineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicineCountAggregateInputType | true
    }

  export interface MedicineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medicine'], meta: { name: 'Medicine' } }
    /**
     * Find zero or one Medicine that matches the filter.
     * @param {MedicineFindUniqueArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicineFindUniqueArgs>(args: SelectSubset<T, MedicineFindUniqueArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medicine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicineFindUniqueOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicineFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicineFindFirstArgs>(args?: SelectSubset<T, MedicineFindFirstArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicineFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicineFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicines
     * const medicines = await prisma.medicine.findMany()
     * 
     * // Get first 10 Medicines
     * const medicines = await prisma.medicine.findMany({ take: 10 })
     * 
     * // Only select the `itemSeq`
     * const medicineWithItemSeqOnly = await prisma.medicine.findMany({ select: { itemSeq: true } })
     * 
     */
    findMany<T extends MedicineFindManyArgs>(args?: SelectSubset<T, MedicineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medicine.
     * @param {MedicineCreateArgs} args - Arguments to create a Medicine.
     * @example
     * // Create one Medicine
     * const Medicine = await prisma.medicine.create({
     *   data: {
     *     // ... data to create a Medicine
     *   }
     * })
     * 
     */
    create<T extends MedicineCreateArgs>(args: SelectSubset<T, MedicineCreateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicines.
     * @param {MedicineCreateManyArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicineCreateManyArgs>(args?: SelectSubset<T, MedicineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicines and returns the data saved in the database.
     * @param {MedicineCreateManyAndReturnArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicines and only return the `itemSeq`
     * const medicineWithItemSeqOnly = await prisma.medicine.createManyAndReturn({
     *   select: { itemSeq: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicineCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medicine.
     * @param {MedicineDeleteArgs} args - Arguments to delete one Medicine.
     * @example
     * // Delete one Medicine
     * const Medicine = await prisma.medicine.delete({
     *   where: {
     *     // ... filter to delete one Medicine
     *   }
     * })
     * 
     */
    delete<T extends MedicineDeleteArgs>(args: SelectSubset<T, MedicineDeleteArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medicine.
     * @param {MedicineUpdateArgs} args - Arguments to update one Medicine.
     * @example
     * // Update one Medicine
     * const medicine = await prisma.medicine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicineUpdateArgs>(args: SelectSubset<T, MedicineUpdateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicines.
     * @param {MedicineDeleteManyArgs} args - Arguments to filter Medicines to delete.
     * @example
     * // Delete a few Medicines
     * const { count } = await prisma.medicine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicineDeleteManyArgs>(args?: SelectSubset<T, MedicineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicineUpdateManyArgs>(args: SelectSubset<T, MedicineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines and returns the data updated in the database.
     * @param {MedicineUpdateManyAndReturnArgs} args - Arguments to update many Medicines.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medicines and only return the `itemSeq`
     * const medicineWithItemSeqOnly = await prisma.medicine.updateManyAndReturn({
     *   select: { itemSeq: true },
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
    updateManyAndReturn<T extends MedicineUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medicine.
     * @param {MedicineUpsertArgs} args - Arguments to update or create a Medicine.
     * @example
     * // Update or create a Medicine
     * const medicine = await prisma.medicine.upsert({
     *   create: {
     *     // ... data to create a Medicine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicine we want to update
     *   }
     * })
     */
    upsert<T extends MedicineUpsertArgs>(args: SelectSubset<T, MedicineUpsertArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineCountArgs} args - Arguments to filter Medicines to count.
     * @example
     * // Count the number of Medicines
     * const count = await prisma.medicine.count({
     *   where: {
     *     // ... the filter for the Medicines we want to count
     *   }
     * })
    **/
    count<T extends MedicineCountArgs>(
      args?: Subset<T, MedicineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicineAggregateArgs>(args: Subset<T, MedicineAggregateArgs>): Prisma.PrismaPromise<GetMedicineAggregateType<T>>

    /**
     * Group by Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineGroupByArgs} args - Group by arguments.
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
      T extends MedicineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineGroupByArgs['orderBy'] }
        : { orderBy?: MedicineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medicine model
   */
  readonly fields: MedicineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medicine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userMedis<T extends Medicine$userMedisArgs<ExtArgs> = {}>(args?: Subset<T, Medicine$userMedisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMediPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventories<T extends Medicine$inventoriesArgs<ExtArgs> = {}>(args?: Subset<T, Medicine$inventoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Medicine model
   */
  interface MedicineFieldRefs {
    readonly itemSeq: FieldRef<"Medicine", 'String'>
    readonly itemName: FieldRef<"Medicine", 'String'>
    readonly entpName: FieldRef<"Medicine", 'String'>
    readonly itemPermitDate: FieldRef<"Medicine", 'DateTime'>
    readonly etcOtcCode: FieldRef<"Medicine", 'String'>
    readonly classNo: FieldRef<"Medicine", 'String'>
    readonly chart: FieldRef<"Medicine", 'String'>
    readonly barCode: FieldRef<"Medicine", 'String'>
    readonly materialName: FieldRef<"Medicine", 'String'>
    readonly eeDocId: FieldRef<"Medicine", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Medicine findUnique
   */
  export type MedicineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findUniqueOrThrow
   */
  export type MedicineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findFirst
   */
  export type MedicineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findFirstOrThrow
   */
  export type MedicineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findMany
   */
  export type MedicineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicines to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine create
   */
  export type MedicineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to create a Medicine.
     */
    data: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
  }

  /**
   * Medicine createMany
   */
  export type MedicineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicine createManyAndReturn
   */
  export type MedicineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicine update
   */
  export type MedicineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to update a Medicine.
     */
    data: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
    /**
     * Choose, which Medicine to update.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine updateMany
   */
  export type MedicineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to update.
     */
    limit?: number
  }

  /**
   * Medicine updateManyAndReturn
   */
  export type MedicineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to update.
     */
    limit?: number
  }

  /**
   * Medicine upsert
   */
  export type MedicineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The filter to search for the Medicine to update in case it exists.
     */
    where: MedicineWhereUniqueInput
    /**
     * In case the Medicine found by the `where` argument doesn't exist, create a new Medicine with this data.
     */
    create: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
    /**
     * In case the Medicine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
  }

  /**
   * Medicine delete
   */
  export type MedicineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter which Medicine to delete.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine deleteMany
   */
  export type MedicineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicines to delete
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to delete.
     */
    limit?: number
  }

  /**
   * Medicine.userMedis
   */
  export type Medicine$userMedisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedi
     */
    select?: UserMediSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedi
     */
    omit?: UserMediOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediInclude<ExtArgs> | null
    where?: UserMediWhereInput
    orderBy?: UserMediOrderByWithRelationInput | UserMediOrderByWithRelationInput[]
    cursor?: UserMediWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMediScalarFieldEnum | UserMediScalarFieldEnum[]
  }

  /**
   * Medicine.inventories
   */
  export type Medicine$inventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Medicine without action
   */
  export type MedicineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
  }


  /**
   * Model MediTime
   */

  export type AggregateMediTime = {
    _count: MediTimeCountAggregateOutputType | null
    _avg: MediTimeAvgAggregateOutputType | null
    _sum: MediTimeSumAggregateOutputType | null
    _min: MediTimeMinAggregateOutputType | null
    _max: MediTimeMaxAggregateOutputType | null
  }

  export type MediTimeAvgAggregateOutputType = {
    id: number | null
    mediTime: number | null
    userMediId: number | null
  }

  export type MediTimeSumAggregateOutputType = {
    id: number | null
    mediTime: number | null
    userMediId: number | null
  }

  export type MediTimeMinAggregateOutputType = {
    id: number | null
    mediTime: number | null
    userMediId: number | null
  }

  export type MediTimeMaxAggregateOutputType = {
    id: number | null
    mediTime: number | null
    userMediId: number | null
  }

  export type MediTimeCountAggregateOutputType = {
    id: number
    mediTime: number
    userMediId: number
    _all: number
  }


  export type MediTimeAvgAggregateInputType = {
    id?: true
    mediTime?: true
    userMediId?: true
  }

  export type MediTimeSumAggregateInputType = {
    id?: true
    mediTime?: true
    userMediId?: true
  }

  export type MediTimeMinAggregateInputType = {
    id?: true
    mediTime?: true
    userMediId?: true
  }

  export type MediTimeMaxAggregateInputType = {
    id?: true
    mediTime?: true
    userMediId?: true
  }

  export type MediTimeCountAggregateInputType = {
    id?: true
    mediTime?: true
    userMediId?: true
    _all?: true
  }

  export type MediTimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediTime to aggregate.
     */
    where?: MediTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediTimes to fetch.
     */
    orderBy?: MediTimeOrderByWithRelationInput | MediTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediTimes
    **/
    _count?: true | MediTimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediTimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediTimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediTimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediTimeMaxAggregateInputType
  }

  export type GetMediTimeAggregateType<T extends MediTimeAggregateArgs> = {
        [P in keyof T & keyof AggregateMediTime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediTime[P]>
      : GetScalarType<T[P], AggregateMediTime[P]>
  }




  export type MediTimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediTimeWhereInput
    orderBy?: MediTimeOrderByWithAggregationInput | MediTimeOrderByWithAggregationInput[]
    by: MediTimeScalarFieldEnum[] | MediTimeScalarFieldEnum
    having?: MediTimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediTimeCountAggregateInputType | true
    _avg?: MediTimeAvgAggregateInputType
    _sum?: MediTimeSumAggregateInputType
    _min?: MediTimeMinAggregateInputType
    _max?: MediTimeMaxAggregateInputType
  }

  export type MediTimeGroupByOutputType = {
    id: number
    mediTime: number
    userMediId: number
    _count: MediTimeCountAggregateOutputType | null
    _avg: MediTimeAvgAggregateOutputType | null
    _sum: MediTimeSumAggregateOutputType | null
    _min: MediTimeMinAggregateOutputType | null
    _max: MediTimeMaxAggregateOutputType | null
  }

  type GetMediTimeGroupByPayload<T extends MediTimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediTimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediTimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediTimeGroupByOutputType[P]>
            : GetScalarType<T[P], MediTimeGroupByOutputType[P]>
        }
      >
    >


  export type MediTimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mediTime?: boolean
    userMediId?: boolean
    userMedi?: boolean | UserMediDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediTime"]>

  export type MediTimeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mediTime?: boolean
    userMediId?: boolean
    userMedi?: boolean | UserMediDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediTime"]>

  export type MediTimeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mediTime?: boolean
    userMediId?: boolean
    userMedi?: boolean | UserMediDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediTime"]>

  export type MediTimeSelectScalar = {
    id?: boolean
    mediTime?: boolean
    userMediId?: boolean
  }

  export type MediTimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mediTime" | "userMediId", ExtArgs["result"]["mediTime"]>
  export type MediTimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMedi?: boolean | UserMediDefaultArgs<ExtArgs>
  }
  export type MediTimeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMedi?: boolean | UserMediDefaultArgs<ExtArgs>
  }
  export type MediTimeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMedi?: boolean | UserMediDefaultArgs<ExtArgs>
  }

  export type $MediTimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediTime"
    objects: {
      userMedi: Prisma.$UserMediPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mediTime: number
      userMediId: number
    }, ExtArgs["result"]["mediTime"]>
    composites: {}
  }

  type MediTimeGetPayload<S extends boolean | null | undefined | MediTimeDefaultArgs> = $Result.GetResult<Prisma.$MediTimePayload, S>

  type MediTimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediTimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediTimeCountAggregateInputType | true
    }

  export interface MediTimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediTime'], meta: { name: 'MediTime' } }
    /**
     * Find zero or one MediTime that matches the filter.
     * @param {MediTimeFindUniqueArgs} args - Arguments to find a MediTime
     * @example
     * // Get one MediTime
     * const mediTime = await prisma.mediTime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediTimeFindUniqueArgs>(args: SelectSubset<T, MediTimeFindUniqueArgs<ExtArgs>>): Prisma__MediTimeClient<$Result.GetResult<Prisma.$MediTimePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediTime that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediTimeFindUniqueOrThrowArgs} args - Arguments to find a MediTime
     * @example
     * // Get one MediTime
     * const mediTime = await prisma.mediTime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediTimeFindUniqueOrThrowArgs>(args: SelectSubset<T, MediTimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediTimeClient<$Result.GetResult<Prisma.$MediTimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediTime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediTimeFindFirstArgs} args - Arguments to find a MediTime
     * @example
     * // Get one MediTime
     * const mediTime = await prisma.mediTime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediTimeFindFirstArgs>(args?: SelectSubset<T, MediTimeFindFirstArgs<ExtArgs>>): Prisma__MediTimeClient<$Result.GetResult<Prisma.$MediTimePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediTime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediTimeFindFirstOrThrowArgs} args - Arguments to find a MediTime
     * @example
     * // Get one MediTime
     * const mediTime = await prisma.mediTime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediTimeFindFirstOrThrowArgs>(args?: SelectSubset<T, MediTimeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediTimeClient<$Result.GetResult<Prisma.$MediTimePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediTimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediTimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediTimes
     * const mediTimes = await prisma.mediTime.findMany()
     * 
     * // Get first 10 MediTimes
     * const mediTimes = await prisma.mediTime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediTimeWithIdOnly = await prisma.mediTime.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediTimeFindManyArgs>(args?: SelectSubset<T, MediTimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediTimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediTime.
     * @param {MediTimeCreateArgs} args - Arguments to create a MediTime.
     * @example
     * // Create one MediTime
     * const MediTime = await prisma.mediTime.create({
     *   data: {
     *     // ... data to create a MediTime
     *   }
     * })
     * 
     */
    create<T extends MediTimeCreateArgs>(args: SelectSubset<T, MediTimeCreateArgs<ExtArgs>>): Prisma__MediTimeClient<$Result.GetResult<Prisma.$MediTimePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediTimes.
     * @param {MediTimeCreateManyArgs} args - Arguments to create many MediTimes.
     * @example
     * // Create many MediTimes
     * const mediTime = await prisma.mediTime.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediTimeCreateManyArgs>(args?: SelectSubset<T, MediTimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediTimes and returns the data saved in the database.
     * @param {MediTimeCreateManyAndReturnArgs} args - Arguments to create many MediTimes.
     * @example
     * // Create many MediTimes
     * const mediTime = await prisma.mediTime.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediTimes and only return the `id`
     * const mediTimeWithIdOnly = await prisma.mediTime.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediTimeCreateManyAndReturnArgs>(args?: SelectSubset<T, MediTimeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediTimePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MediTime.
     * @param {MediTimeDeleteArgs} args - Arguments to delete one MediTime.
     * @example
     * // Delete one MediTime
     * const MediTime = await prisma.mediTime.delete({
     *   where: {
     *     // ... filter to delete one MediTime
     *   }
     * })
     * 
     */
    delete<T extends MediTimeDeleteArgs>(args: SelectSubset<T, MediTimeDeleteArgs<ExtArgs>>): Prisma__MediTimeClient<$Result.GetResult<Prisma.$MediTimePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediTime.
     * @param {MediTimeUpdateArgs} args - Arguments to update one MediTime.
     * @example
     * // Update one MediTime
     * const mediTime = await prisma.mediTime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediTimeUpdateArgs>(args: SelectSubset<T, MediTimeUpdateArgs<ExtArgs>>): Prisma__MediTimeClient<$Result.GetResult<Prisma.$MediTimePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediTimes.
     * @param {MediTimeDeleteManyArgs} args - Arguments to filter MediTimes to delete.
     * @example
     * // Delete a few MediTimes
     * const { count } = await prisma.mediTime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediTimeDeleteManyArgs>(args?: SelectSubset<T, MediTimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediTimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediTimes
     * const mediTime = await prisma.mediTime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediTimeUpdateManyArgs>(args: SelectSubset<T, MediTimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediTimes and returns the data updated in the database.
     * @param {MediTimeUpdateManyAndReturnArgs} args - Arguments to update many MediTimes.
     * @example
     * // Update many MediTimes
     * const mediTime = await prisma.mediTime.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediTimes and only return the `id`
     * const mediTimeWithIdOnly = await prisma.mediTime.updateManyAndReturn({
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
    updateManyAndReturn<T extends MediTimeUpdateManyAndReturnArgs>(args: SelectSubset<T, MediTimeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediTimePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MediTime.
     * @param {MediTimeUpsertArgs} args - Arguments to update or create a MediTime.
     * @example
     * // Update or create a MediTime
     * const mediTime = await prisma.mediTime.upsert({
     *   create: {
     *     // ... data to create a MediTime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediTime we want to update
     *   }
     * })
     */
    upsert<T extends MediTimeUpsertArgs>(args: SelectSubset<T, MediTimeUpsertArgs<ExtArgs>>): Prisma__MediTimeClient<$Result.GetResult<Prisma.$MediTimePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MediTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediTimeCountArgs} args - Arguments to filter MediTimes to count.
     * @example
     * // Count the number of MediTimes
     * const count = await prisma.mediTime.count({
     *   where: {
     *     // ... the filter for the MediTimes we want to count
     *   }
     * })
    **/
    count<T extends MediTimeCountArgs>(
      args?: Subset<T, MediTimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediTimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediTimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediTimeAggregateArgs>(args: Subset<T, MediTimeAggregateArgs>): Prisma.PrismaPromise<GetMediTimeAggregateType<T>>

    /**
     * Group by MediTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediTimeGroupByArgs} args - Group by arguments.
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
      T extends MediTimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediTimeGroupByArgs['orderBy'] }
        : { orderBy?: MediTimeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediTimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediTimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediTime model
   */
  readonly fields: MediTimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediTime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediTimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userMedi<T extends UserMediDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserMediDefaultArgs<ExtArgs>>): Prisma__UserMediClient<$Result.GetResult<Prisma.$UserMediPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MediTime model
   */
  interface MediTimeFieldRefs {
    readonly id: FieldRef<"MediTime", 'Int'>
    readonly mediTime: FieldRef<"MediTime", 'Int'>
    readonly userMediId: FieldRef<"MediTime", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MediTime findUnique
   */
  export type MediTimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediTime
     */
    select?: MediTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediTime
     */
    omit?: MediTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediTimeInclude<ExtArgs> | null
    /**
     * Filter, which MediTime to fetch.
     */
    where: MediTimeWhereUniqueInput
  }

  /**
   * MediTime findUniqueOrThrow
   */
  export type MediTimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediTime
     */
    select?: MediTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediTime
     */
    omit?: MediTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediTimeInclude<ExtArgs> | null
    /**
     * Filter, which MediTime to fetch.
     */
    where: MediTimeWhereUniqueInput
  }

  /**
   * MediTime findFirst
   */
  export type MediTimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediTime
     */
    select?: MediTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediTime
     */
    omit?: MediTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediTimeInclude<ExtArgs> | null
    /**
     * Filter, which MediTime to fetch.
     */
    where?: MediTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediTimes to fetch.
     */
    orderBy?: MediTimeOrderByWithRelationInput | MediTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediTimes.
     */
    cursor?: MediTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediTimes.
     */
    distinct?: MediTimeScalarFieldEnum | MediTimeScalarFieldEnum[]
  }

  /**
   * MediTime findFirstOrThrow
   */
  export type MediTimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediTime
     */
    select?: MediTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediTime
     */
    omit?: MediTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediTimeInclude<ExtArgs> | null
    /**
     * Filter, which MediTime to fetch.
     */
    where?: MediTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediTimes to fetch.
     */
    orderBy?: MediTimeOrderByWithRelationInput | MediTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediTimes.
     */
    cursor?: MediTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediTimes.
     */
    distinct?: MediTimeScalarFieldEnum | MediTimeScalarFieldEnum[]
  }

  /**
   * MediTime findMany
   */
  export type MediTimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediTime
     */
    select?: MediTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediTime
     */
    omit?: MediTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediTimeInclude<ExtArgs> | null
    /**
     * Filter, which MediTimes to fetch.
     */
    where?: MediTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediTimes to fetch.
     */
    orderBy?: MediTimeOrderByWithRelationInput | MediTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediTimes.
     */
    cursor?: MediTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediTimes.
     */
    skip?: number
    distinct?: MediTimeScalarFieldEnum | MediTimeScalarFieldEnum[]
  }

  /**
   * MediTime create
   */
  export type MediTimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediTime
     */
    select?: MediTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediTime
     */
    omit?: MediTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediTimeInclude<ExtArgs> | null
    /**
     * The data needed to create a MediTime.
     */
    data: XOR<MediTimeCreateInput, MediTimeUncheckedCreateInput>
  }

  /**
   * MediTime createMany
   */
  export type MediTimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediTimes.
     */
    data: MediTimeCreateManyInput | MediTimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediTime createManyAndReturn
   */
  export type MediTimeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediTime
     */
    select?: MediTimeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediTime
     */
    omit?: MediTimeOmit<ExtArgs> | null
    /**
     * The data used to create many MediTimes.
     */
    data: MediTimeCreateManyInput | MediTimeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediTimeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediTime update
   */
  export type MediTimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediTime
     */
    select?: MediTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediTime
     */
    omit?: MediTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediTimeInclude<ExtArgs> | null
    /**
     * The data needed to update a MediTime.
     */
    data: XOR<MediTimeUpdateInput, MediTimeUncheckedUpdateInput>
    /**
     * Choose, which MediTime to update.
     */
    where: MediTimeWhereUniqueInput
  }

  /**
   * MediTime updateMany
   */
  export type MediTimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediTimes.
     */
    data: XOR<MediTimeUpdateManyMutationInput, MediTimeUncheckedUpdateManyInput>
    /**
     * Filter which MediTimes to update
     */
    where?: MediTimeWhereInput
    /**
     * Limit how many MediTimes to update.
     */
    limit?: number
  }

  /**
   * MediTime updateManyAndReturn
   */
  export type MediTimeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediTime
     */
    select?: MediTimeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediTime
     */
    omit?: MediTimeOmit<ExtArgs> | null
    /**
     * The data used to update MediTimes.
     */
    data: XOR<MediTimeUpdateManyMutationInput, MediTimeUncheckedUpdateManyInput>
    /**
     * Filter which MediTimes to update
     */
    where?: MediTimeWhereInput
    /**
     * Limit how many MediTimes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediTimeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediTime upsert
   */
  export type MediTimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediTime
     */
    select?: MediTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediTime
     */
    omit?: MediTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediTimeInclude<ExtArgs> | null
    /**
     * The filter to search for the MediTime to update in case it exists.
     */
    where: MediTimeWhereUniqueInput
    /**
     * In case the MediTime found by the `where` argument doesn't exist, create a new MediTime with this data.
     */
    create: XOR<MediTimeCreateInput, MediTimeUncheckedCreateInput>
    /**
     * In case the MediTime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediTimeUpdateInput, MediTimeUncheckedUpdateInput>
  }

  /**
   * MediTime delete
   */
  export type MediTimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediTime
     */
    select?: MediTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediTime
     */
    omit?: MediTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediTimeInclude<ExtArgs> | null
    /**
     * Filter which MediTime to delete.
     */
    where: MediTimeWhereUniqueInput
  }

  /**
   * MediTime deleteMany
   */
  export type MediTimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediTimes to delete
     */
    where?: MediTimeWhereInput
    /**
     * Limit how many MediTimes to delete.
     */
    limit?: number
  }

  /**
   * MediTime without action
   */
  export type MediTimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediTime
     */
    select?: MediTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediTime
     */
    omit?: MediTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediTimeInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    birthyear: number | null
    memberType: number | null
  }

  export type UserSumAggregateOutputType = {
    birthyear: number | null
    memberType: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    photo: string | null
    name: string | null
    birthyear: number | null
    gender: string | null
    memberType: number | null
    createdAt: Date | null
    deletedAt: Date | null
    hpid: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    photo: string | null
    name: string | null
    birthyear: number | null
    gender: string | null
    memberType: number | null
    createdAt: Date | null
    deletedAt: Date | null
    hpid: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    photo: number
    name: number
    birthyear: number
    gender: number
    memberType: number
    createdAt: number
    deletedAt: number
    hpid: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    birthyear?: true
    memberType?: true
  }

  export type UserSumAggregateInputType = {
    birthyear?: true
    memberType?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    photo?: true
    name?: true
    birthyear?: true
    gender?: true
    memberType?: true
    createdAt?: true
    deletedAt?: true
    hpid?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    photo?: true
    name?: true
    birthyear?: true
    gender?: true
    memberType?: true
    createdAt?: true
    deletedAt?: true
    hpid?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    photo?: true
    name?: true
    birthyear?: true
    gender?: true
    memberType?: true
    createdAt?: true
    deletedAt?: true
    hpid?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    photo: string | null
    name: string | null
    birthyear: number | null
    gender: string | null
    memberType: number
    createdAt: Date
    deletedAt: Date | null
    hpid: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    photo?: boolean
    name?: boolean
    birthyear?: boolean
    gender?: boolean
    memberType?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    hpid?: boolean
    pharmacy?: boolean | User$pharmacyArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    qnas?: boolean | User$qnasArgs<ExtArgs>
    answers?: boolean | User$answersArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    userMedis?: boolean | User$userMedisArgs<ExtArgs>
    userHealth?: boolean | User$userHealthArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    photo?: boolean
    name?: boolean
    birthyear?: boolean
    gender?: boolean
    memberType?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    hpid?: boolean
    pharmacy?: boolean | User$pharmacyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    photo?: boolean
    name?: boolean
    birthyear?: boolean
    gender?: boolean
    memberType?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    hpid?: boolean
    pharmacy?: boolean | User$pharmacyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    photo?: boolean
    name?: boolean
    birthyear?: boolean
    gender?: boolean
    memberType?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    hpid?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "photo" | "name" | "birthyear" | "gender" | "memberType" | "createdAt" | "deletedAt" | "hpid", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | User$pharmacyArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    qnas?: boolean | User$qnasArgs<ExtArgs>
    answers?: boolean | User$answersArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    userMedis?: boolean | User$userMedisArgs<ExtArgs>
    userHealth?: boolean | User$userHealthArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | User$pharmacyArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | User$pharmacyArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pharmacy: Prisma.$PharmacyPayload<ExtArgs> | null
      posts: Prisma.$PostPayload<ExtArgs>[]
      qnas: Prisma.$QnaPayload<ExtArgs>[]
      answers: Prisma.$AnswerPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      userMedis: Prisma.$UserMediPayload<ExtArgs>[]
      userHealth: Prisma.$UserHealthPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      photo: string | null
      name: string | null
      birthyear: number | null
      gender: string | null
      memberType: number
      createdAt: Date
      deletedAt: Date | null
      hpid: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pharmacy<T extends User$pharmacyArgs<ExtArgs> = {}>(args?: Subset<T, User$pharmacyArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    qnas<T extends User$qnasArgs<ExtArgs> = {}>(args?: Subset<T, User$qnasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QnaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answers<T extends User$answersArgs<ExtArgs> = {}>(args?: Subset<T, User$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userMedis<T extends User$userMedisArgs<ExtArgs> = {}>(args?: Subset<T, User$userMedisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMediPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userHealth<T extends User$userHealthArgs<ExtArgs> = {}>(args?: Subset<T, User$userHealthArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHealthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly photo: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly birthyear: FieldRef<"User", 'Int'>
    readonly gender: FieldRef<"User", 'String'>
    readonly memberType: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly hpid: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.pharmacy
   */
  export type User$pharmacyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    where?: PharmacyWhereInput
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.qnas
   */
  export type User$qnasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qna
     */
    select?: QnaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qna
     */
    omit?: QnaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaInclude<ExtArgs> | null
    where?: QnaWhereInput
    orderBy?: QnaOrderByWithRelationInput | QnaOrderByWithRelationInput[]
    cursor?: QnaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QnaScalarFieldEnum | QnaScalarFieldEnum[]
  }

  /**
   * User.answers
   */
  export type User$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.userMedis
   */
  export type User$userMedisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedi
     */
    select?: UserMediSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedi
     */
    omit?: UserMediOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediInclude<ExtArgs> | null
    where?: UserMediWhereInput
    orderBy?: UserMediOrderByWithRelationInput | UserMediOrderByWithRelationInput[]
    cursor?: UserMediWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMediScalarFieldEnum | UserMediScalarFieldEnum[]
  }

  /**
   * User.userHealth
   */
  export type User$userHealthArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHealth
     */
    select?: UserHealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHealth
     */
    omit?: UserHealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHealthInclude<ExtArgs> | null
    where?: UserHealthWhereInput
    orderBy?: UserHealthOrderByWithRelationInput | UserHealthOrderByWithRelationInput[]
    cursor?: UserHealthWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserHealthScalarFieldEnum | UserHealthScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    userId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    userId: string
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    postTags?: boolean | Post$postTagsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "createdAt" | "updatedAt" | "deletedAt" | "userId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    postTags?: boolean | Post$postTagsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      postTags: Prisma.$PostTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      userId: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postTags<T extends Post$postTagsArgs<ExtArgs> = {}>(args?: Subset<T, Post$postTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly deletedAt: FieldRef<"Post", 'DateTime'>
    readonly userId: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Post.postTags
   */
  export type Post$postTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    where?: PostTagWhereInput
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    cursor?: PostTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    id: number | null
    qnaId: number | null
  }

  export type AnswerSumAggregateOutputType = {
    id: number | null
    qnaId: number | null
  }

  export type AnswerMinAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    isAccepted: boolean | null
    userId: string | null
    qnaId: number | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    isAccepted: boolean | null
    userId: string | null
    qnaId: number | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    isAccepted: number
    userId: number
    qnaId: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    id?: true
    qnaId?: true
  }

  export type AnswerSumAggregateInputType = {
    id?: true
    qnaId?: true
  }

  export type AnswerMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    isAccepted?: true
    userId?: true
    qnaId?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    isAccepted?: true
    userId?: true
    qnaId?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    isAccepted?: true
    userId?: true
    qnaId?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: number
    content: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    isAccepted: boolean
    userId: string
    qnaId: number
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    isAccepted?: boolean
    userId?: boolean
    qnaId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    qna?: boolean | QnaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    isAccepted?: boolean
    userId?: boolean
    qnaId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    qna?: boolean | QnaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    isAccepted?: boolean
    userId?: boolean
    qnaId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    qna?: boolean | QnaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    isAccepted?: boolean
    userId?: boolean
    qnaId?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "updatedAt" | "deletedAt" | "isAccepted" | "userId" | "qnaId", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    qna?: boolean | QnaDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    qna?: boolean | QnaDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    qna?: boolean | QnaDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      qna: Prisma.$QnaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      isAccepted: boolean
      userId: string
      qnaId: number
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    qna<T extends QnaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QnaDefaultArgs<ExtArgs>>): Prisma__QnaClient<$Result.GetResult<Prisma.$QnaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'Int'>
    readonly content: FieldRef<"Answer", 'String'>
    readonly createdAt: FieldRef<"Answer", 'DateTime'>
    readonly updatedAt: FieldRef<"Answer", 'DateTime'>
    readonly deletedAt: FieldRef<"Answer", 'DateTime'>
    readonly isAccepted: FieldRef<"Answer", 'Boolean'>
    readonly userId: FieldRef<"Answer", 'String'>
    readonly qnaId: FieldRef<"Answer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model Pharmacy
   */

  export type AggregatePharmacy = {
    _count: PharmacyCountAggregateOutputType | null
    _avg: PharmacyAvgAggregateOutputType | null
    _sum: PharmacySumAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  export type PharmacyAvgAggregateOutputType = {
    wgs84Lat: Decimal | null
    wgs84Lon: Decimal | null
  }

  export type PharmacySumAggregateOutputType = {
    wgs84Lat: Decimal | null
    wgs84Lon: Decimal | null
  }

  export type PharmacyMinAggregateOutputType = {
    hpid: string | null
    dutyAddr: string | null
    dutyMapimg: string | null
    dutyName: string | null
    dutyTel1: string | null
    dutyTime1c: string | null
    dutyTime1s: string | null
    dutyTime2c: string | null
    dutyTime2s: string | null
    dutyTime3c: string | null
    dutyTime3s: string | null
    dutyTime4c: string | null
    dutyTime4s: string | null
    dutyTime5c: string | null
    dutyTime5s: string | null
    dutyTime6c: string | null
    dutyTime6s: string | null
    dutyTime7c: string | null
    dutyTime7s: string | null
    postCdn1: string | null
    postCdn2: string | null
    wgs84Lat: Decimal | null
    wgs84Lon: Decimal | null
  }

  export type PharmacyMaxAggregateOutputType = {
    hpid: string | null
    dutyAddr: string | null
    dutyMapimg: string | null
    dutyName: string | null
    dutyTel1: string | null
    dutyTime1c: string | null
    dutyTime1s: string | null
    dutyTime2c: string | null
    dutyTime2s: string | null
    dutyTime3c: string | null
    dutyTime3s: string | null
    dutyTime4c: string | null
    dutyTime4s: string | null
    dutyTime5c: string | null
    dutyTime5s: string | null
    dutyTime6c: string | null
    dutyTime6s: string | null
    dutyTime7c: string | null
    dutyTime7s: string | null
    postCdn1: string | null
    postCdn2: string | null
    wgs84Lat: Decimal | null
    wgs84Lon: Decimal | null
  }

  export type PharmacyCountAggregateOutputType = {
    hpid: number
    dutyAddr: number
    dutyMapimg: number
    dutyName: number
    dutyTel1: number
    dutyTime1c: number
    dutyTime1s: number
    dutyTime2c: number
    dutyTime2s: number
    dutyTime3c: number
    dutyTime3s: number
    dutyTime4c: number
    dutyTime4s: number
    dutyTime5c: number
    dutyTime5s: number
    dutyTime6c: number
    dutyTime6s: number
    dutyTime7c: number
    dutyTime7s: number
    postCdn1: number
    postCdn2: number
    wgs84Lat: number
    wgs84Lon: number
    _all: number
  }


  export type PharmacyAvgAggregateInputType = {
    wgs84Lat?: true
    wgs84Lon?: true
  }

  export type PharmacySumAggregateInputType = {
    wgs84Lat?: true
    wgs84Lon?: true
  }

  export type PharmacyMinAggregateInputType = {
    hpid?: true
    dutyAddr?: true
    dutyMapimg?: true
    dutyName?: true
    dutyTel1?: true
    dutyTime1c?: true
    dutyTime1s?: true
    dutyTime2c?: true
    dutyTime2s?: true
    dutyTime3c?: true
    dutyTime3s?: true
    dutyTime4c?: true
    dutyTime4s?: true
    dutyTime5c?: true
    dutyTime5s?: true
    dutyTime6c?: true
    dutyTime6s?: true
    dutyTime7c?: true
    dutyTime7s?: true
    postCdn1?: true
    postCdn2?: true
    wgs84Lat?: true
    wgs84Lon?: true
  }

  export type PharmacyMaxAggregateInputType = {
    hpid?: true
    dutyAddr?: true
    dutyMapimg?: true
    dutyName?: true
    dutyTel1?: true
    dutyTime1c?: true
    dutyTime1s?: true
    dutyTime2c?: true
    dutyTime2s?: true
    dutyTime3c?: true
    dutyTime3s?: true
    dutyTime4c?: true
    dutyTime4s?: true
    dutyTime5c?: true
    dutyTime5s?: true
    dutyTime6c?: true
    dutyTime6s?: true
    dutyTime7c?: true
    dutyTime7s?: true
    postCdn1?: true
    postCdn2?: true
    wgs84Lat?: true
    wgs84Lon?: true
  }

  export type PharmacyCountAggregateInputType = {
    hpid?: true
    dutyAddr?: true
    dutyMapimg?: true
    dutyName?: true
    dutyTel1?: true
    dutyTime1c?: true
    dutyTime1s?: true
    dutyTime2c?: true
    dutyTime2s?: true
    dutyTime3c?: true
    dutyTime3s?: true
    dutyTime4c?: true
    dutyTime4s?: true
    dutyTime5c?: true
    dutyTime5s?: true
    dutyTime6c?: true
    dutyTime6s?: true
    dutyTime7c?: true
    dutyTime7s?: true
    postCdn1?: true
    postCdn2?: true
    wgs84Lat?: true
    wgs84Lon?: true
    _all?: true
  }

  export type PharmacyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacy to aggregate.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pharmacies
    **/
    _count?: true | PharmacyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PharmacyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PharmacySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PharmacyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PharmacyMaxAggregateInputType
  }

  export type GetPharmacyAggregateType<T extends PharmacyAggregateArgs> = {
        [P in keyof T & keyof AggregatePharmacy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePharmacy[P]>
      : GetScalarType<T[P], AggregatePharmacy[P]>
  }




  export type PharmacyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmacyWhereInput
    orderBy?: PharmacyOrderByWithAggregationInput | PharmacyOrderByWithAggregationInput[]
    by: PharmacyScalarFieldEnum[] | PharmacyScalarFieldEnum
    having?: PharmacyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PharmacyCountAggregateInputType | true
    _avg?: PharmacyAvgAggregateInputType
    _sum?: PharmacySumAggregateInputType
    _min?: PharmacyMinAggregateInputType
    _max?: PharmacyMaxAggregateInputType
  }

  export type PharmacyGroupByOutputType = {
    hpid: string
    dutyAddr: string | null
    dutyMapimg: string | null
    dutyName: string
    dutyTel1: string | null
    dutyTime1c: string | null
    dutyTime1s: string | null
    dutyTime2c: string | null
    dutyTime2s: string | null
    dutyTime3c: string | null
    dutyTime3s: string | null
    dutyTime4c: string | null
    dutyTime4s: string | null
    dutyTime5c: string | null
    dutyTime5s: string | null
    dutyTime6c: string | null
    dutyTime6s: string | null
    dutyTime7c: string | null
    dutyTime7s: string | null
    postCdn1: string | null
    postCdn2: string | null
    wgs84Lat: Decimal | null
    wgs84Lon: Decimal | null
    _count: PharmacyCountAggregateOutputType | null
    _avg: PharmacyAvgAggregateOutputType | null
    _sum: PharmacySumAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  type GetPharmacyGroupByPayload<T extends PharmacyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PharmacyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PharmacyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
            : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
        }
      >
    >


  export type PharmacySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hpid?: boolean
    dutyAddr?: boolean
    dutyMapimg?: boolean
    dutyName?: boolean
    dutyTel1?: boolean
    dutyTime1c?: boolean
    dutyTime1s?: boolean
    dutyTime2c?: boolean
    dutyTime2s?: boolean
    dutyTime3c?: boolean
    dutyTime3s?: boolean
    dutyTime4c?: boolean
    dutyTime4s?: boolean
    dutyTime5c?: boolean
    dutyTime5s?: boolean
    dutyTime6c?: boolean
    dutyTime6s?: boolean
    dutyTime7c?: boolean
    dutyTime7s?: boolean
    postCdn1?: boolean
    postCdn2?: boolean
    wgs84Lat?: boolean
    wgs84Lon?: boolean
    users?: boolean | Pharmacy$usersArgs<ExtArgs>
    inventories?: boolean | Pharmacy$inventoriesArgs<ExtArgs>
    _count?: boolean | PharmacyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacy"]>

  export type PharmacySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hpid?: boolean
    dutyAddr?: boolean
    dutyMapimg?: boolean
    dutyName?: boolean
    dutyTel1?: boolean
    dutyTime1c?: boolean
    dutyTime1s?: boolean
    dutyTime2c?: boolean
    dutyTime2s?: boolean
    dutyTime3c?: boolean
    dutyTime3s?: boolean
    dutyTime4c?: boolean
    dutyTime4s?: boolean
    dutyTime5c?: boolean
    dutyTime5s?: boolean
    dutyTime6c?: boolean
    dutyTime6s?: boolean
    dutyTime7c?: boolean
    dutyTime7s?: boolean
    postCdn1?: boolean
    postCdn2?: boolean
    wgs84Lat?: boolean
    wgs84Lon?: boolean
  }, ExtArgs["result"]["pharmacy"]>

  export type PharmacySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hpid?: boolean
    dutyAddr?: boolean
    dutyMapimg?: boolean
    dutyName?: boolean
    dutyTel1?: boolean
    dutyTime1c?: boolean
    dutyTime1s?: boolean
    dutyTime2c?: boolean
    dutyTime2s?: boolean
    dutyTime3c?: boolean
    dutyTime3s?: boolean
    dutyTime4c?: boolean
    dutyTime4s?: boolean
    dutyTime5c?: boolean
    dutyTime5s?: boolean
    dutyTime6c?: boolean
    dutyTime6s?: boolean
    dutyTime7c?: boolean
    dutyTime7s?: boolean
    postCdn1?: boolean
    postCdn2?: boolean
    wgs84Lat?: boolean
    wgs84Lon?: boolean
  }, ExtArgs["result"]["pharmacy"]>

  export type PharmacySelectScalar = {
    hpid?: boolean
    dutyAddr?: boolean
    dutyMapimg?: boolean
    dutyName?: boolean
    dutyTel1?: boolean
    dutyTime1c?: boolean
    dutyTime1s?: boolean
    dutyTime2c?: boolean
    dutyTime2s?: boolean
    dutyTime3c?: boolean
    dutyTime3s?: boolean
    dutyTime4c?: boolean
    dutyTime4s?: boolean
    dutyTime5c?: boolean
    dutyTime5s?: boolean
    dutyTime6c?: boolean
    dutyTime6s?: boolean
    dutyTime7c?: boolean
    dutyTime7s?: boolean
    postCdn1?: boolean
    postCdn2?: boolean
    wgs84Lat?: boolean
    wgs84Lon?: boolean
  }

  export type PharmacyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"hpid" | "dutyAddr" | "dutyMapimg" | "dutyName" | "dutyTel1" | "dutyTime1c" | "dutyTime1s" | "dutyTime2c" | "dutyTime2s" | "dutyTime3c" | "dutyTime3s" | "dutyTime4c" | "dutyTime4s" | "dutyTime5c" | "dutyTime5s" | "dutyTime6c" | "dutyTime6s" | "dutyTime7c" | "dutyTime7s" | "postCdn1" | "postCdn2" | "wgs84Lat" | "wgs84Lon", ExtArgs["result"]["pharmacy"]>
  export type PharmacyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Pharmacy$usersArgs<ExtArgs>
    inventories?: boolean | Pharmacy$inventoriesArgs<ExtArgs>
    _count?: boolean | PharmacyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PharmacyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PharmacyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PharmacyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pharmacy"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      inventories: Prisma.$InventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      hpid: string
      dutyAddr: string | null
      dutyMapimg: string | null
      dutyName: string
      dutyTel1: string | null
      dutyTime1c: string | null
      dutyTime1s: string | null
      dutyTime2c: string | null
      dutyTime2s: string | null
      dutyTime3c: string | null
      dutyTime3s: string | null
      dutyTime4c: string | null
      dutyTime4s: string | null
      dutyTime5c: string | null
      dutyTime5s: string | null
      dutyTime6c: string | null
      dutyTime6s: string | null
      dutyTime7c: string | null
      dutyTime7s: string | null
      postCdn1: string | null
      postCdn2: string | null
      wgs84Lat: Prisma.Decimal | null
      wgs84Lon: Prisma.Decimal | null
    }, ExtArgs["result"]["pharmacy"]>
    composites: {}
  }

  type PharmacyGetPayload<S extends boolean | null | undefined | PharmacyDefaultArgs> = $Result.GetResult<Prisma.$PharmacyPayload, S>

  type PharmacyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PharmacyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PharmacyCountAggregateInputType | true
    }

  export interface PharmacyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pharmacy'], meta: { name: 'Pharmacy' } }
    /**
     * Find zero or one Pharmacy that matches the filter.
     * @param {PharmacyFindUniqueArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PharmacyFindUniqueArgs>(args: SelectSubset<T, PharmacyFindUniqueArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pharmacy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PharmacyFindUniqueOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PharmacyFindUniqueOrThrowArgs>(args: SelectSubset<T, PharmacyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pharmacy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PharmacyFindFirstArgs>(args?: SelectSubset<T, PharmacyFindFirstArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pharmacy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PharmacyFindFirstOrThrowArgs>(args?: SelectSubset<T, PharmacyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pharmacies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany()
     * 
     * // Get first 10 Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany({ take: 10 })
     * 
     * // Only select the `hpid`
     * const pharmacyWithHpidOnly = await prisma.pharmacy.findMany({ select: { hpid: true } })
     * 
     */
    findMany<T extends PharmacyFindManyArgs>(args?: SelectSubset<T, PharmacyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pharmacy.
     * @param {PharmacyCreateArgs} args - Arguments to create a Pharmacy.
     * @example
     * // Create one Pharmacy
     * const Pharmacy = await prisma.pharmacy.create({
     *   data: {
     *     // ... data to create a Pharmacy
     *   }
     * })
     * 
     */
    create<T extends PharmacyCreateArgs>(args: SelectSubset<T, PharmacyCreateArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pharmacies.
     * @param {PharmacyCreateManyArgs} args - Arguments to create many Pharmacies.
     * @example
     * // Create many Pharmacies
     * const pharmacy = await prisma.pharmacy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PharmacyCreateManyArgs>(args?: SelectSubset<T, PharmacyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pharmacies and returns the data saved in the database.
     * @param {PharmacyCreateManyAndReturnArgs} args - Arguments to create many Pharmacies.
     * @example
     * // Create many Pharmacies
     * const pharmacy = await prisma.pharmacy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pharmacies and only return the `hpid`
     * const pharmacyWithHpidOnly = await prisma.pharmacy.createManyAndReturn({
     *   select: { hpid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PharmacyCreateManyAndReturnArgs>(args?: SelectSubset<T, PharmacyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pharmacy.
     * @param {PharmacyDeleteArgs} args - Arguments to delete one Pharmacy.
     * @example
     * // Delete one Pharmacy
     * const Pharmacy = await prisma.pharmacy.delete({
     *   where: {
     *     // ... filter to delete one Pharmacy
     *   }
     * })
     * 
     */
    delete<T extends PharmacyDeleteArgs>(args: SelectSubset<T, PharmacyDeleteArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pharmacy.
     * @param {PharmacyUpdateArgs} args - Arguments to update one Pharmacy.
     * @example
     * // Update one Pharmacy
     * const pharmacy = await prisma.pharmacy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PharmacyUpdateArgs>(args: SelectSubset<T, PharmacyUpdateArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pharmacies.
     * @param {PharmacyDeleteManyArgs} args - Arguments to filter Pharmacies to delete.
     * @example
     * // Delete a few Pharmacies
     * const { count } = await prisma.pharmacy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PharmacyDeleteManyArgs>(args?: SelectSubset<T, PharmacyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pharmacies
     * const pharmacy = await prisma.pharmacy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PharmacyUpdateManyArgs>(args: SelectSubset<T, PharmacyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacies and returns the data updated in the database.
     * @param {PharmacyUpdateManyAndReturnArgs} args - Arguments to update many Pharmacies.
     * @example
     * // Update many Pharmacies
     * const pharmacy = await prisma.pharmacy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pharmacies and only return the `hpid`
     * const pharmacyWithHpidOnly = await prisma.pharmacy.updateManyAndReturn({
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
    updateManyAndReturn<T extends PharmacyUpdateManyAndReturnArgs>(args: SelectSubset<T, PharmacyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pharmacy.
     * @param {PharmacyUpsertArgs} args - Arguments to update or create a Pharmacy.
     * @example
     * // Update or create a Pharmacy
     * const pharmacy = await prisma.pharmacy.upsert({
     *   create: {
     *     // ... data to create a Pharmacy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pharmacy we want to update
     *   }
     * })
     */
    upsert<T extends PharmacyUpsertArgs>(args: SelectSubset<T, PharmacyUpsertArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyCountArgs} args - Arguments to filter Pharmacies to count.
     * @example
     * // Count the number of Pharmacies
     * const count = await prisma.pharmacy.count({
     *   where: {
     *     // ... the filter for the Pharmacies we want to count
     *   }
     * })
    **/
    count<T extends PharmacyCountArgs>(
      args?: Subset<T, PharmacyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PharmacyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PharmacyAggregateArgs>(args: Subset<T, PharmacyAggregateArgs>): Prisma.PrismaPromise<GetPharmacyAggregateType<T>>

    /**
     * Group by Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyGroupByArgs} args - Group by arguments.
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
      T extends PharmacyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PharmacyGroupByArgs['orderBy'] }
        : { orderBy?: PharmacyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PharmacyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPharmacyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pharmacy model
   */
  readonly fields: PharmacyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pharmacy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PharmacyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Pharmacy$usersArgs<ExtArgs> = {}>(args?: Subset<T, Pharmacy$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventories<T extends Pharmacy$inventoriesArgs<ExtArgs> = {}>(args?: Subset<T, Pharmacy$inventoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pharmacy model
   */
  interface PharmacyFieldRefs {
    readonly hpid: FieldRef<"Pharmacy", 'String'>
    readonly dutyAddr: FieldRef<"Pharmacy", 'String'>
    readonly dutyMapimg: FieldRef<"Pharmacy", 'String'>
    readonly dutyName: FieldRef<"Pharmacy", 'String'>
    readonly dutyTel1: FieldRef<"Pharmacy", 'String'>
    readonly dutyTime1c: FieldRef<"Pharmacy", 'String'>
    readonly dutyTime1s: FieldRef<"Pharmacy", 'String'>
    readonly dutyTime2c: FieldRef<"Pharmacy", 'String'>
    readonly dutyTime2s: FieldRef<"Pharmacy", 'String'>
    readonly dutyTime3c: FieldRef<"Pharmacy", 'String'>
    readonly dutyTime3s: FieldRef<"Pharmacy", 'String'>
    readonly dutyTime4c: FieldRef<"Pharmacy", 'String'>
    readonly dutyTime4s: FieldRef<"Pharmacy", 'String'>
    readonly dutyTime5c: FieldRef<"Pharmacy", 'String'>
    readonly dutyTime5s: FieldRef<"Pharmacy", 'String'>
    readonly dutyTime6c: FieldRef<"Pharmacy", 'String'>
    readonly dutyTime6s: FieldRef<"Pharmacy", 'String'>
    readonly dutyTime7c: FieldRef<"Pharmacy", 'String'>
    readonly dutyTime7s: FieldRef<"Pharmacy", 'String'>
    readonly postCdn1: FieldRef<"Pharmacy", 'String'>
    readonly postCdn2: FieldRef<"Pharmacy", 'String'>
    readonly wgs84Lat: FieldRef<"Pharmacy", 'Decimal'>
    readonly wgs84Lon: FieldRef<"Pharmacy", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Pharmacy findUnique
   */
  export type PharmacyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy findUniqueOrThrow
   */
  export type PharmacyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy findFirst
   */
  export type PharmacyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy findFirstOrThrow
   */
  export type PharmacyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy findMany
   */
  export type PharmacyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacies to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy create
   */
  export type PharmacyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The data needed to create a Pharmacy.
     */
    data: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
  }

  /**
   * Pharmacy createMany
   */
  export type PharmacyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pharmacies.
     */
    data: PharmacyCreateManyInput | PharmacyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pharmacy createManyAndReturn
   */
  export type PharmacyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * The data used to create many Pharmacies.
     */
    data: PharmacyCreateManyInput | PharmacyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pharmacy update
   */
  export type PharmacyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The data needed to update a Pharmacy.
     */
    data: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
    /**
     * Choose, which Pharmacy to update.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy updateMany
   */
  export type PharmacyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pharmacies.
     */
    data: XOR<PharmacyUpdateManyMutationInput, PharmacyUncheckedUpdateManyInput>
    /**
     * Filter which Pharmacies to update
     */
    where?: PharmacyWhereInput
    /**
     * Limit how many Pharmacies to update.
     */
    limit?: number
  }

  /**
   * Pharmacy updateManyAndReturn
   */
  export type PharmacyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * The data used to update Pharmacies.
     */
    data: XOR<PharmacyUpdateManyMutationInput, PharmacyUncheckedUpdateManyInput>
    /**
     * Filter which Pharmacies to update
     */
    where?: PharmacyWhereInput
    /**
     * Limit how many Pharmacies to update.
     */
    limit?: number
  }

  /**
   * Pharmacy upsert
   */
  export type PharmacyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The filter to search for the Pharmacy to update in case it exists.
     */
    where: PharmacyWhereUniqueInput
    /**
     * In case the Pharmacy found by the `where` argument doesn't exist, create a new Pharmacy with this data.
     */
    create: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
    /**
     * In case the Pharmacy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
  }

  /**
   * Pharmacy delete
   */
  export type PharmacyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter which Pharmacy to delete.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy deleteMany
   */
  export type PharmacyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacies to delete
     */
    where?: PharmacyWhereInput
    /**
     * Limit how many Pharmacies to delete.
     */
    limit?: number
  }

  /**
   * Pharmacy.users
   */
  export type Pharmacy$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Pharmacy.inventories
   */
  export type Pharmacy$inventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Pharmacy without action
   */
  export type PharmacyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
  }


  /**
   * Model PostTag
   */

  export type AggregatePostTag = {
    _count: PostTagCountAggregateOutputType | null
    _avg: PostTagAvgAggregateOutputType | null
    _sum: PostTagSumAggregateOutputType | null
    _min: PostTagMinAggregateOutputType | null
    _max: PostTagMaxAggregateOutputType | null
  }

  export type PostTagAvgAggregateOutputType = {
    id: number | null
    tagId: number | null
    postId: number | null
  }

  export type PostTagSumAggregateOutputType = {
    id: number | null
    tagId: number | null
    postId: number | null
  }

  export type PostTagMinAggregateOutputType = {
    id: number | null
    tagId: number | null
    postId: number | null
  }

  export type PostTagMaxAggregateOutputType = {
    id: number | null
    tagId: number | null
    postId: number | null
  }

  export type PostTagCountAggregateOutputType = {
    id: number
    tagId: number
    postId: number
    _all: number
  }


  export type PostTagAvgAggregateInputType = {
    id?: true
    tagId?: true
    postId?: true
  }

  export type PostTagSumAggregateInputType = {
    id?: true
    tagId?: true
    postId?: true
  }

  export type PostTagMinAggregateInputType = {
    id?: true
    tagId?: true
    postId?: true
  }

  export type PostTagMaxAggregateInputType = {
    id?: true
    tagId?: true
    postId?: true
  }

  export type PostTagCountAggregateInputType = {
    id?: true
    tagId?: true
    postId?: true
    _all?: true
  }

  export type PostTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostTag to aggregate.
     */
    where?: PostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostTags
    **/
    _count?: true | PostTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostTagMaxAggregateInputType
  }

  export type GetPostTagAggregateType<T extends PostTagAggregateArgs> = {
        [P in keyof T & keyof AggregatePostTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostTag[P]>
      : GetScalarType<T[P], AggregatePostTag[P]>
  }




  export type PostTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTagWhereInput
    orderBy?: PostTagOrderByWithAggregationInput | PostTagOrderByWithAggregationInput[]
    by: PostTagScalarFieldEnum[] | PostTagScalarFieldEnum
    having?: PostTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostTagCountAggregateInputType | true
    _avg?: PostTagAvgAggregateInputType
    _sum?: PostTagSumAggregateInputType
    _min?: PostTagMinAggregateInputType
    _max?: PostTagMaxAggregateInputType
  }

  export type PostTagGroupByOutputType = {
    id: number
    tagId: number
    postId: number
    _count: PostTagCountAggregateOutputType | null
    _avg: PostTagAvgAggregateOutputType | null
    _sum: PostTagSumAggregateOutputType | null
    _min: PostTagMinAggregateOutputType | null
    _max: PostTagMaxAggregateOutputType | null
  }

  type GetPostTagGroupByPayload<T extends PostTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostTagGroupByOutputType[P]>
            : GetScalarType<T[P], PostTagGroupByOutputType[P]>
        }
      >
    >


  export type PostTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagId?: boolean
    postId?: boolean
    tag?: boolean | TagDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTag"]>

  export type PostTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagId?: boolean
    postId?: boolean
    tag?: boolean | TagDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTag"]>

  export type PostTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagId?: boolean
    postId?: boolean
    tag?: boolean | TagDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTag"]>

  export type PostTagSelectScalar = {
    id?: boolean
    tagId?: boolean
    postId?: boolean
  }

  export type PostTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tagId" | "postId", ExtArgs["result"]["postTag"]>
  export type PostTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | TagDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | TagDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | TagDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostTag"
    objects: {
      tag: Prisma.$TagPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tagId: number
      postId: number
    }, ExtArgs["result"]["postTag"]>
    composites: {}
  }

  type PostTagGetPayload<S extends boolean | null | undefined | PostTagDefaultArgs> = $Result.GetResult<Prisma.$PostTagPayload, S>

  type PostTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostTagCountAggregateInputType | true
    }

  export interface PostTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostTag'], meta: { name: 'PostTag' } }
    /**
     * Find zero or one PostTag that matches the filter.
     * @param {PostTagFindUniqueArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostTagFindUniqueArgs>(args: SelectSubset<T, PostTagFindUniqueArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostTagFindUniqueOrThrowArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostTagFindUniqueOrThrowArgs>(args: SelectSubset<T, PostTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFindFirstArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostTagFindFirstArgs>(args?: SelectSubset<T, PostTagFindFirstArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFindFirstOrThrowArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostTagFindFirstOrThrowArgs>(args?: SelectSubset<T, PostTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostTags
     * const postTags = await prisma.postTag.findMany()
     * 
     * // Get first 10 PostTags
     * const postTags = await prisma.postTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postTagWithIdOnly = await prisma.postTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostTagFindManyArgs>(args?: SelectSubset<T, PostTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostTag.
     * @param {PostTagCreateArgs} args - Arguments to create a PostTag.
     * @example
     * // Create one PostTag
     * const PostTag = await prisma.postTag.create({
     *   data: {
     *     // ... data to create a PostTag
     *   }
     * })
     * 
     */
    create<T extends PostTagCreateArgs>(args: SelectSubset<T, PostTagCreateArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostTags.
     * @param {PostTagCreateManyArgs} args - Arguments to create many PostTags.
     * @example
     * // Create many PostTags
     * const postTag = await prisma.postTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostTagCreateManyArgs>(args?: SelectSubset<T, PostTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostTags and returns the data saved in the database.
     * @param {PostTagCreateManyAndReturnArgs} args - Arguments to create many PostTags.
     * @example
     * // Create many PostTags
     * const postTag = await prisma.postTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostTags and only return the `id`
     * const postTagWithIdOnly = await prisma.postTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostTagCreateManyAndReturnArgs>(args?: SelectSubset<T, PostTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostTag.
     * @param {PostTagDeleteArgs} args - Arguments to delete one PostTag.
     * @example
     * // Delete one PostTag
     * const PostTag = await prisma.postTag.delete({
     *   where: {
     *     // ... filter to delete one PostTag
     *   }
     * })
     * 
     */
    delete<T extends PostTagDeleteArgs>(args: SelectSubset<T, PostTagDeleteArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostTag.
     * @param {PostTagUpdateArgs} args - Arguments to update one PostTag.
     * @example
     * // Update one PostTag
     * const postTag = await prisma.postTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostTagUpdateArgs>(args: SelectSubset<T, PostTagUpdateArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostTags.
     * @param {PostTagDeleteManyArgs} args - Arguments to filter PostTags to delete.
     * @example
     * // Delete a few PostTags
     * const { count } = await prisma.postTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostTagDeleteManyArgs>(args?: SelectSubset<T, PostTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostTags
     * const postTag = await prisma.postTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostTagUpdateManyArgs>(args: SelectSubset<T, PostTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostTags and returns the data updated in the database.
     * @param {PostTagUpdateManyAndReturnArgs} args - Arguments to update many PostTags.
     * @example
     * // Update many PostTags
     * const postTag = await prisma.postTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostTags and only return the `id`
     * const postTagWithIdOnly = await prisma.postTag.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostTagUpdateManyAndReturnArgs>(args: SelectSubset<T, PostTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostTag.
     * @param {PostTagUpsertArgs} args - Arguments to update or create a PostTag.
     * @example
     * // Update or create a PostTag
     * const postTag = await prisma.postTag.upsert({
     *   create: {
     *     // ... data to create a PostTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostTag we want to update
     *   }
     * })
     */
    upsert<T extends PostTagUpsertArgs>(args: SelectSubset<T, PostTagUpsertArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagCountArgs} args - Arguments to filter PostTags to count.
     * @example
     * // Count the number of PostTags
     * const count = await prisma.postTag.count({
     *   where: {
     *     // ... the filter for the PostTags we want to count
     *   }
     * })
    **/
    count<T extends PostTagCountArgs>(
      args?: Subset<T, PostTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostTagAggregateArgs>(args: Subset<T, PostTagAggregateArgs>): Prisma.PrismaPromise<GetPostTagAggregateType<T>>

    /**
     * Group by PostTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagGroupByArgs} args - Group by arguments.
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
      T extends PostTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostTagGroupByArgs['orderBy'] }
        : { orderBy?: PostTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostTag model
   */
  readonly fields: PostTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostTag model
   */
  interface PostTagFieldRefs {
    readonly id: FieldRef<"PostTag", 'Int'>
    readonly tagId: FieldRef<"PostTag", 'Int'>
    readonly postId: FieldRef<"PostTag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PostTag findUnique
   */
  export type PostTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTag to fetch.
     */
    where: PostTagWhereUniqueInput
  }

  /**
   * PostTag findUniqueOrThrow
   */
  export type PostTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTag to fetch.
     */
    where: PostTagWhereUniqueInput
  }

  /**
   * PostTag findFirst
   */
  export type PostTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTag to fetch.
     */
    where?: PostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTags.
     */
    cursor?: PostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTags.
     */
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * PostTag findFirstOrThrow
   */
  export type PostTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTag to fetch.
     */
    where?: PostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTags.
     */
    cursor?: PostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTags.
     */
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * PostTag findMany
   */
  export type PostTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTags to fetch.
     */
    where?: PostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostTags.
     */
    cursor?: PostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * PostTag create
   */
  export type PostTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * The data needed to create a PostTag.
     */
    data: XOR<PostTagCreateInput, PostTagUncheckedCreateInput>
  }

  /**
   * PostTag createMany
   */
  export type PostTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostTags.
     */
    data: PostTagCreateManyInput | PostTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostTag createManyAndReturn
   */
  export type PostTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * The data used to create many PostTags.
     */
    data: PostTagCreateManyInput | PostTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostTag update
   */
  export type PostTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * The data needed to update a PostTag.
     */
    data: XOR<PostTagUpdateInput, PostTagUncheckedUpdateInput>
    /**
     * Choose, which PostTag to update.
     */
    where: PostTagWhereUniqueInput
  }

  /**
   * PostTag updateMany
   */
  export type PostTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostTags.
     */
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyInput>
    /**
     * Filter which PostTags to update
     */
    where?: PostTagWhereInput
    /**
     * Limit how many PostTags to update.
     */
    limit?: number
  }

  /**
   * PostTag updateManyAndReturn
   */
  export type PostTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * The data used to update PostTags.
     */
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyInput>
    /**
     * Filter which PostTags to update
     */
    where?: PostTagWhereInput
    /**
     * Limit how many PostTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostTag upsert
   */
  export type PostTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * The filter to search for the PostTag to update in case it exists.
     */
    where: PostTagWhereUniqueInput
    /**
     * In case the PostTag found by the `where` argument doesn't exist, create a new PostTag with this data.
     */
    create: XOR<PostTagCreateInput, PostTagUncheckedCreateInput>
    /**
     * In case the PostTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostTagUpdateInput, PostTagUncheckedUpdateInput>
  }

  /**
   * PostTag delete
   */
  export type PostTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter which PostTag to delete.
     */
    where: PostTagWhereUniqueInput
  }

  /**
   * PostTag deleteMany
   */
  export type PostTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostTags to delete
     */
    where?: PostTagWhereInput
    /**
     * Limit how many PostTags to delete.
     */
    limit?: number
  }

  /**
   * PostTag without action
   */
  export type PostTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    tagName: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    tagName: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    tagName: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    tagName?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    tagName?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    tagName?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    tagName: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagName?: boolean
    postTags?: boolean | Tag$postTagsArgs<ExtArgs>
    qnaTags?: boolean | Tag$qnaTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagName?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagName?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    tagName?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tagName", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postTags?: boolean | Tag$postTagsArgs<ExtArgs>
    qnaTags?: boolean | Tag$qnaTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      postTags: Prisma.$PostTagPayload<ExtArgs>[]
      qnaTags: Prisma.$QnaTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tagName: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postTags<T extends Tag$postTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$postTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    qnaTags<T extends Tag$qnaTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$qnaTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QnaTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly tagName: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.postTags
   */
  export type Tag$postTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    where?: PostTagWhereInput
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    cursor?: PostTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * Tag.qnaTags
   */
  export type Tag$qnaTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QnaTag
     */
    select?: QnaTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QnaTag
     */
    omit?: QnaTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QnaTagInclude<ExtArgs> | null
    where?: QnaTagWhereInput
    orderBy?: QnaTagOrderByWithRelationInput | QnaTagOrderByWithRelationInput[]
    cursor?: QnaTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QnaTagScalarFieldEnum | QnaTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Health
   */

  export type AggregateHealth = {
    _count: HealthCountAggregateOutputType | null
    _avg: HealthAvgAggregateOutputType | null
    _sum: HealthSumAggregateOutputType | null
    _min: HealthMinAggregateOutputType | null
    _max: HealthMaxAggregateOutputType | null
  }

  export type HealthAvgAggregateOutputType = {
    id: number | null
  }

  export type HealthSumAggregateOutputType = {
    id: number | null
  }

  export type HealthMinAggregateOutputType = {
    id: number | null
    healthName: string | null
  }

  export type HealthMaxAggregateOutputType = {
    id: number | null
    healthName: string | null
  }

  export type HealthCountAggregateOutputType = {
    id: number
    healthName: number
    _all: number
  }


  export type HealthAvgAggregateInputType = {
    id?: true
  }

  export type HealthSumAggregateInputType = {
    id?: true
  }

  export type HealthMinAggregateInputType = {
    id?: true
    healthName?: true
  }

  export type HealthMaxAggregateInputType = {
    id?: true
    healthName?: true
  }

  export type HealthCountAggregateInputType = {
    id?: true
    healthName?: true
    _all?: true
  }

  export type HealthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Health to aggregate.
     */
    where?: HealthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Health to fetch.
     */
    orderBy?: HealthOrderByWithRelationInput | HealthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HealthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Health from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Health.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Health
    **/
    _count?: true | HealthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HealthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HealthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HealthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HealthMaxAggregateInputType
  }

  export type GetHealthAggregateType<T extends HealthAggregateArgs> = {
        [P in keyof T & keyof AggregateHealth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealth[P]>
      : GetScalarType<T[P], AggregateHealth[P]>
  }




  export type HealthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealthWhereInput
    orderBy?: HealthOrderByWithAggregationInput | HealthOrderByWithAggregationInput[]
    by: HealthScalarFieldEnum[] | HealthScalarFieldEnum
    having?: HealthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HealthCountAggregateInputType | true
    _avg?: HealthAvgAggregateInputType
    _sum?: HealthSumAggregateInputType
    _min?: HealthMinAggregateInputType
    _max?: HealthMaxAggregateInputType
  }

  export type HealthGroupByOutputType = {
    id: number
    healthName: string
    _count: HealthCountAggregateOutputType | null
    _avg: HealthAvgAggregateOutputType | null
    _sum: HealthSumAggregateOutputType | null
    _min: HealthMinAggregateOutputType | null
    _max: HealthMaxAggregateOutputType | null
  }

  type GetHealthGroupByPayload<T extends HealthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HealthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HealthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HealthGroupByOutputType[P]>
            : GetScalarType<T[P], HealthGroupByOutputType[P]>
        }
      >
    >


  export type HealthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    healthName?: boolean
    userHealth?: boolean | Health$userHealthArgs<ExtArgs>
    _count?: boolean | HealthCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["health"]>

  export type HealthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    healthName?: boolean
  }, ExtArgs["result"]["health"]>

  export type HealthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    healthName?: boolean
  }, ExtArgs["result"]["health"]>

  export type HealthSelectScalar = {
    id?: boolean
    healthName?: boolean
  }

  export type HealthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "healthName", ExtArgs["result"]["health"]>
  export type HealthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userHealth?: boolean | Health$userHealthArgs<ExtArgs>
    _count?: boolean | HealthCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HealthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HealthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HealthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Health"
    objects: {
      userHealth: Prisma.$UserHealthPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      healthName: string
    }, ExtArgs["result"]["health"]>
    composites: {}
  }

  type HealthGetPayload<S extends boolean | null | undefined | HealthDefaultArgs> = $Result.GetResult<Prisma.$HealthPayload, S>

  type HealthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HealthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HealthCountAggregateInputType | true
    }

  export interface HealthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Health'], meta: { name: 'Health' } }
    /**
     * Find zero or one Health that matches the filter.
     * @param {HealthFindUniqueArgs} args - Arguments to find a Health
     * @example
     * // Get one Health
     * const health = await prisma.health.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HealthFindUniqueArgs>(args: SelectSubset<T, HealthFindUniqueArgs<ExtArgs>>): Prisma__HealthClient<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Health that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HealthFindUniqueOrThrowArgs} args - Arguments to find a Health
     * @example
     * // Get one Health
     * const health = await prisma.health.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HealthFindUniqueOrThrowArgs>(args: SelectSubset<T, HealthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HealthClient<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Health that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthFindFirstArgs} args - Arguments to find a Health
     * @example
     * // Get one Health
     * const health = await prisma.health.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HealthFindFirstArgs>(args?: SelectSubset<T, HealthFindFirstArgs<ExtArgs>>): Prisma__HealthClient<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Health that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthFindFirstOrThrowArgs} args - Arguments to find a Health
     * @example
     * // Get one Health
     * const health = await prisma.health.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HealthFindFirstOrThrowArgs>(args?: SelectSubset<T, HealthFindFirstOrThrowArgs<ExtArgs>>): Prisma__HealthClient<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Health that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Health
     * const health = await prisma.health.findMany()
     * 
     * // Get first 10 Health
     * const health = await prisma.health.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const healthWithIdOnly = await prisma.health.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HealthFindManyArgs>(args?: SelectSubset<T, HealthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Health.
     * @param {HealthCreateArgs} args - Arguments to create a Health.
     * @example
     * // Create one Health
     * const Health = await prisma.health.create({
     *   data: {
     *     // ... data to create a Health
     *   }
     * })
     * 
     */
    create<T extends HealthCreateArgs>(args: SelectSubset<T, HealthCreateArgs<ExtArgs>>): Prisma__HealthClient<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Health.
     * @param {HealthCreateManyArgs} args - Arguments to create many Health.
     * @example
     * // Create many Health
     * const health = await prisma.health.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HealthCreateManyArgs>(args?: SelectSubset<T, HealthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Health and returns the data saved in the database.
     * @param {HealthCreateManyAndReturnArgs} args - Arguments to create many Health.
     * @example
     * // Create many Health
     * const health = await prisma.health.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Health and only return the `id`
     * const healthWithIdOnly = await prisma.health.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HealthCreateManyAndReturnArgs>(args?: SelectSubset<T, HealthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Health.
     * @param {HealthDeleteArgs} args - Arguments to delete one Health.
     * @example
     * // Delete one Health
     * const Health = await prisma.health.delete({
     *   where: {
     *     // ... filter to delete one Health
     *   }
     * })
     * 
     */
    delete<T extends HealthDeleteArgs>(args: SelectSubset<T, HealthDeleteArgs<ExtArgs>>): Prisma__HealthClient<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Health.
     * @param {HealthUpdateArgs} args - Arguments to update one Health.
     * @example
     * // Update one Health
     * const health = await prisma.health.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HealthUpdateArgs>(args: SelectSubset<T, HealthUpdateArgs<ExtArgs>>): Prisma__HealthClient<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Health.
     * @param {HealthDeleteManyArgs} args - Arguments to filter Health to delete.
     * @example
     * // Delete a few Health
     * const { count } = await prisma.health.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HealthDeleteManyArgs>(args?: SelectSubset<T, HealthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Health.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Health
     * const health = await prisma.health.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HealthUpdateManyArgs>(args: SelectSubset<T, HealthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Health and returns the data updated in the database.
     * @param {HealthUpdateManyAndReturnArgs} args - Arguments to update many Health.
     * @example
     * // Update many Health
     * const health = await prisma.health.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Health and only return the `id`
     * const healthWithIdOnly = await prisma.health.updateManyAndReturn({
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
    updateManyAndReturn<T extends HealthUpdateManyAndReturnArgs>(args: SelectSubset<T, HealthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Health.
     * @param {HealthUpsertArgs} args - Arguments to update or create a Health.
     * @example
     * // Update or create a Health
     * const health = await prisma.health.upsert({
     *   create: {
     *     // ... data to create a Health
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Health we want to update
     *   }
     * })
     */
    upsert<T extends HealthUpsertArgs>(args: SelectSubset<T, HealthUpsertArgs<ExtArgs>>): Prisma__HealthClient<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Health.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthCountArgs} args - Arguments to filter Health to count.
     * @example
     * // Count the number of Health
     * const count = await prisma.health.count({
     *   where: {
     *     // ... the filter for the Health we want to count
     *   }
     * })
    **/
    count<T extends HealthCountArgs>(
      args?: Subset<T, HealthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HealthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Health.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HealthAggregateArgs>(args: Subset<T, HealthAggregateArgs>): Prisma.PrismaPromise<GetHealthAggregateType<T>>

    /**
     * Group by Health.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthGroupByArgs} args - Group by arguments.
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
      T extends HealthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HealthGroupByArgs['orderBy'] }
        : { orderBy?: HealthGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HealthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHealthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Health model
   */
  readonly fields: HealthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Health.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HealthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userHealth<T extends Health$userHealthArgs<ExtArgs> = {}>(args?: Subset<T, Health$userHealthArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHealthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Health model
   */
  interface HealthFieldRefs {
    readonly id: FieldRef<"Health", 'Int'>
    readonly healthName: FieldRef<"Health", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Health findUnique
   */
  export type HealthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
    /**
     * Filter, which Health to fetch.
     */
    where: HealthWhereUniqueInput
  }

  /**
   * Health findUniqueOrThrow
   */
  export type HealthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
    /**
     * Filter, which Health to fetch.
     */
    where: HealthWhereUniqueInput
  }

  /**
   * Health findFirst
   */
  export type HealthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
    /**
     * Filter, which Health to fetch.
     */
    where?: HealthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Health to fetch.
     */
    orderBy?: HealthOrderByWithRelationInput | HealthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Health.
     */
    cursor?: HealthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Health from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Health.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Health.
     */
    distinct?: HealthScalarFieldEnum | HealthScalarFieldEnum[]
  }

  /**
   * Health findFirstOrThrow
   */
  export type HealthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
    /**
     * Filter, which Health to fetch.
     */
    where?: HealthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Health to fetch.
     */
    orderBy?: HealthOrderByWithRelationInput | HealthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Health.
     */
    cursor?: HealthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Health from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Health.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Health.
     */
    distinct?: HealthScalarFieldEnum | HealthScalarFieldEnum[]
  }

  /**
   * Health findMany
   */
  export type HealthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
    /**
     * Filter, which Health to fetch.
     */
    where?: HealthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Health to fetch.
     */
    orderBy?: HealthOrderByWithRelationInput | HealthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Health.
     */
    cursor?: HealthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Health from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Health.
     */
    skip?: number
    distinct?: HealthScalarFieldEnum | HealthScalarFieldEnum[]
  }

  /**
   * Health create
   */
  export type HealthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
    /**
     * The data needed to create a Health.
     */
    data: XOR<HealthCreateInput, HealthUncheckedCreateInput>
  }

  /**
   * Health createMany
   */
  export type HealthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Health.
     */
    data: HealthCreateManyInput | HealthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Health createManyAndReturn
   */
  export type HealthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * The data used to create many Health.
     */
    data: HealthCreateManyInput | HealthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Health update
   */
  export type HealthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
    /**
     * The data needed to update a Health.
     */
    data: XOR<HealthUpdateInput, HealthUncheckedUpdateInput>
    /**
     * Choose, which Health to update.
     */
    where: HealthWhereUniqueInput
  }

  /**
   * Health updateMany
   */
  export type HealthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Health.
     */
    data: XOR<HealthUpdateManyMutationInput, HealthUncheckedUpdateManyInput>
    /**
     * Filter which Health to update
     */
    where?: HealthWhereInput
    /**
     * Limit how many Health to update.
     */
    limit?: number
  }

  /**
   * Health updateManyAndReturn
   */
  export type HealthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * The data used to update Health.
     */
    data: XOR<HealthUpdateManyMutationInput, HealthUncheckedUpdateManyInput>
    /**
     * Filter which Health to update
     */
    where?: HealthWhereInput
    /**
     * Limit how many Health to update.
     */
    limit?: number
  }

  /**
   * Health upsert
   */
  export type HealthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
    /**
     * The filter to search for the Health to update in case it exists.
     */
    where: HealthWhereUniqueInput
    /**
     * In case the Health found by the `where` argument doesn't exist, create a new Health with this data.
     */
    create: XOR<HealthCreateInput, HealthUncheckedCreateInput>
    /**
     * In case the Health was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HealthUpdateInput, HealthUncheckedUpdateInput>
  }

  /**
   * Health delete
   */
  export type HealthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
    /**
     * Filter which Health to delete.
     */
    where: HealthWhereUniqueInput
  }

  /**
   * Health deleteMany
   */
  export type HealthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Health to delete
     */
    where?: HealthWhereInput
    /**
     * Limit how many Health to delete.
     */
    limit?: number
  }

  /**
   * Health.userHealth
   */
  export type Health$userHealthArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHealth
     */
    select?: UserHealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHealth
     */
    omit?: UserHealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHealthInclude<ExtArgs> | null
    where?: UserHealthWhereInput
    orderBy?: UserHealthOrderByWithRelationInput | UserHealthOrderByWithRelationInput[]
    cursor?: UserHealthWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserHealthScalarFieldEnum | UserHealthScalarFieldEnum[]
  }

  /**
   * Health without action
   */
  export type HealthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: string | null
    postId: number | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: string | null
    postId: number | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    userId: number
    postId: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    postId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    postId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    postId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    postId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    content: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    userId: string
    postId: number
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "updatedAt" | "deletedAt" | "userId" | "postId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      userId: string
      postId: number
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
    readonly deletedAt: FieldRef<"Comment", 'DateTime'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly postId: FieldRef<"Comment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type InventorySumAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    itemSeq: string | null
    hpid: string | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    itemSeq: string | null
    hpid: string | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    quantity: number
    itemSeq: number
    hpid: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type InventorySumAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    quantity?: true
    itemSeq?: true
    hpid?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    quantity?: true
    itemSeq?: true
    hpid?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    quantity?: true
    itemSeq?: true
    hpid?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: number
    quantity: number
    itemSeq: string
    hpid: string
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    itemSeq?: boolean
    hpid?: boolean
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    itemSeq?: boolean
    hpid?: boolean
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    itemSeq?: boolean
    hpid?: boolean
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectScalar = {
    id?: boolean
    quantity?: boolean
    itemSeq?: boolean
    hpid?: boolean
  }

  export type InventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "itemSeq" | "hpid", ExtArgs["result"]["inventory"]>
  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }
  export type InventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }
  export type InventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      medicine: Prisma.$MedicinePayload<ExtArgs>
      pharmacy: Prisma.$PharmacyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      itemSeq: string
      hpid: string
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {InventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {InventoryUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.updateManyAndReturn({
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
    updateManyAndReturn<T extends InventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
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
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicine<T extends MedicineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineDefaultArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pharmacy<T extends PharmacyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PharmacyDefaultArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Inventory model
   */
  interface InventoryFieldRefs {
    readonly id: FieldRef<"Inventory", 'Int'>
    readonly quantity: FieldRef<"Inventory", 'Int'>
    readonly itemSeq: FieldRef<"Inventory", 'String'>
    readonly hpid: FieldRef<"Inventory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventory createManyAndReturn
   */
  export type InventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
  }

  /**
   * Inventory updateManyAndReturn
   */
  export type InventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to delete.
     */
    limit?: number
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
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


  export const QnaTagScalarFieldEnum: {
    id: 'id',
    tagId: 'tagId',
    qnaId: 'qnaId'
  };

  export type QnaTagScalarFieldEnum = (typeof QnaTagScalarFieldEnum)[keyof typeof QnaTagScalarFieldEnum]


  export const QnaScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    userId: 'userId'
  };

  export type QnaScalarFieldEnum = (typeof QnaScalarFieldEnum)[keyof typeof QnaScalarFieldEnum]


  export const UserMediScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    userId: 'userId',
    itemSeq: 'itemSeq'
  };

  export type UserMediScalarFieldEnum = (typeof UserMediScalarFieldEnum)[keyof typeof UserMediScalarFieldEnum]


  export const UserHealthScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    healthId: 'healthId'
  };

  export type UserHealthScalarFieldEnum = (typeof UserHealthScalarFieldEnum)[keyof typeof UserHealthScalarFieldEnum]


  export const MedicineScalarFieldEnum: {
    itemSeq: 'itemSeq',
    itemName: 'itemName',
    entpName: 'entpName',
    itemPermitDate: 'itemPermitDate',
    etcOtcCode: 'etcOtcCode',
    classNo: 'classNo',
    chart: 'chart',
    barCode: 'barCode',
    materialName: 'materialName',
    eeDocId: 'eeDocId'
  };

  export type MedicineScalarFieldEnum = (typeof MedicineScalarFieldEnum)[keyof typeof MedicineScalarFieldEnum]


  export const MediTimeScalarFieldEnum: {
    id: 'id',
    mediTime: 'mediTime',
    userMediId: 'userMediId'
  };

  export type MediTimeScalarFieldEnum = (typeof MediTimeScalarFieldEnum)[keyof typeof MediTimeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    photo: 'photo',
    name: 'name',
    birthyear: 'birthyear',
    gender: 'gender',
    memberType: 'memberType',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    hpid: 'hpid'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    userId: 'userId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    isAccepted: 'isAccepted',
    userId: 'userId',
    qnaId: 'qnaId'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const PharmacyScalarFieldEnum: {
    hpid: 'hpid',
    dutyAddr: 'dutyAddr',
    dutyMapimg: 'dutyMapimg',
    dutyName: 'dutyName',
    dutyTel1: 'dutyTel1',
    dutyTime1c: 'dutyTime1c',
    dutyTime1s: 'dutyTime1s',
    dutyTime2c: 'dutyTime2c',
    dutyTime2s: 'dutyTime2s',
    dutyTime3c: 'dutyTime3c',
    dutyTime3s: 'dutyTime3s',
    dutyTime4c: 'dutyTime4c',
    dutyTime4s: 'dutyTime4s',
    dutyTime5c: 'dutyTime5c',
    dutyTime5s: 'dutyTime5s',
    dutyTime6c: 'dutyTime6c',
    dutyTime6s: 'dutyTime6s',
    dutyTime7c: 'dutyTime7c',
    dutyTime7s: 'dutyTime7s',
    postCdn1: 'postCdn1',
    postCdn2: 'postCdn2',
    wgs84Lat: 'wgs84Lat',
    wgs84Lon: 'wgs84Lon'
  };

  export type PharmacyScalarFieldEnum = (typeof PharmacyScalarFieldEnum)[keyof typeof PharmacyScalarFieldEnum]


  export const PostTagScalarFieldEnum: {
    id: 'id',
    tagId: 'tagId',
    postId: 'postId'
  };

  export type PostTagScalarFieldEnum = (typeof PostTagScalarFieldEnum)[keyof typeof PostTagScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    tagName: 'tagName'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const HealthScalarFieldEnum: {
    id: 'id',
    healthName: 'healthName'
  };

  export type HealthScalarFieldEnum = (typeof HealthScalarFieldEnum)[keyof typeof HealthScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    userId: 'userId',
    postId: 'postId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    itemSeq: 'itemSeq',
    hpid: 'hpid'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


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


  export type QnaTagWhereInput = {
    AND?: QnaTagWhereInput | QnaTagWhereInput[]
    OR?: QnaTagWhereInput[]
    NOT?: QnaTagWhereInput | QnaTagWhereInput[]
    id?: IntFilter<"QnaTag"> | number
    tagId?: IntFilter<"QnaTag"> | number
    qnaId?: IntFilter<"QnaTag"> | number
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    qna?: XOR<QnaScalarRelationFilter, QnaWhereInput>
  }

  export type QnaTagOrderByWithRelationInput = {
    id?: SortOrder
    tagId?: SortOrder
    qnaId?: SortOrder
    tag?: TagOrderByWithRelationInput
    qna?: QnaOrderByWithRelationInput
  }

  export type QnaTagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QnaTagWhereInput | QnaTagWhereInput[]
    OR?: QnaTagWhereInput[]
    NOT?: QnaTagWhereInput | QnaTagWhereInput[]
    tagId?: IntFilter<"QnaTag"> | number
    qnaId?: IntFilter<"QnaTag"> | number
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    qna?: XOR<QnaScalarRelationFilter, QnaWhereInput>
  }, "id">

  export type QnaTagOrderByWithAggregationInput = {
    id?: SortOrder
    tagId?: SortOrder
    qnaId?: SortOrder
    _count?: QnaTagCountOrderByAggregateInput
    _avg?: QnaTagAvgOrderByAggregateInput
    _max?: QnaTagMaxOrderByAggregateInput
    _min?: QnaTagMinOrderByAggregateInput
    _sum?: QnaTagSumOrderByAggregateInput
  }

  export type QnaTagScalarWhereWithAggregatesInput = {
    AND?: QnaTagScalarWhereWithAggregatesInput | QnaTagScalarWhereWithAggregatesInput[]
    OR?: QnaTagScalarWhereWithAggregatesInput[]
    NOT?: QnaTagScalarWhereWithAggregatesInput | QnaTagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QnaTag"> | number
    tagId?: IntWithAggregatesFilter<"QnaTag"> | number
    qnaId?: IntWithAggregatesFilter<"QnaTag"> | number
  }

  export type QnaWhereInput = {
    AND?: QnaWhereInput | QnaWhereInput[]
    OR?: QnaWhereInput[]
    NOT?: QnaWhereInput | QnaWhereInput[]
    id?: IntFilter<"Qna"> | number
    title?: StringFilter<"Qna"> | string
    content?: StringFilter<"Qna"> | string
    createdAt?: DateTimeFilter<"Qna"> | Date | string
    updatedAt?: DateTimeFilter<"Qna"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Qna"> | Date | string | null
    userId?: StringFilter<"Qna"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    answers?: AnswerListRelationFilter
    qnaTags?: QnaTagListRelationFilter
  }

  export type QnaOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
    qnaTags?: QnaTagOrderByRelationAggregateInput
  }

  export type QnaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QnaWhereInput | QnaWhereInput[]
    OR?: QnaWhereInput[]
    NOT?: QnaWhereInput | QnaWhereInput[]
    title?: StringFilter<"Qna"> | string
    content?: StringFilter<"Qna"> | string
    createdAt?: DateTimeFilter<"Qna"> | Date | string
    updatedAt?: DateTimeFilter<"Qna"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Qna"> | Date | string | null
    userId?: StringFilter<"Qna"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    answers?: AnswerListRelationFilter
    qnaTags?: QnaTagListRelationFilter
  }, "id">

  export type QnaOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: QnaCountOrderByAggregateInput
    _avg?: QnaAvgOrderByAggregateInput
    _max?: QnaMaxOrderByAggregateInput
    _min?: QnaMinOrderByAggregateInput
    _sum?: QnaSumOrderByAggregateInput
  }

  export type QnaScalarWhereWithAggregatesInput = {
    AND?: QnaScalarWhereWithAggregatesInput | QnaScalarWhereWithAggregatesInput[]
    OR?: QnaScalarWhereWithAggregatesInput[]
    NOT?: QnaScalarWhereWithAggregatesInput | QnaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Qna"> | number
    title?: StringWithAggregatesFilter<"Qna"> | string
    content?: StringWithAggregatesFilter<"Qna"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Qna"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Qna"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Qna"> | Date | string | null
    userId?: StringWithAggregatesFilter<"Qna"> | string
  }

  export type UserMediWhereInput = {
    AND?: UserMediWhereInput | UserMediWhereInput[]
    OR?: UserMediWhereInput[]
    NOT?: UserMediWhereInput | UserMediWhereInput[]
    id?: IntFilter<"UserMedi"> | number
    startDate?: DateTimeNullableFilter<"UserMedi"> | Date | string | null
    endDate?: DateTimeNullableFilter<"UserMedi"> | Date | string | null
    userId?: StringFilter<"UserMedi"> | string
    itemSeq?: StringFilter<"UserMedi"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
    mediTimes?: MediTimeListRelationFilter
  }

  export type UserMediOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    userId?: SortOrder
    itemSeq?: SortOrder
    user?: UserOrderByWithRelationInput
    medicine?: MedicineOrderByWithRelationInput
    mediTimes?: MediTimeOrderByRelationAggregateInput
  }

  export type UserMediWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserMediWhereInput | UserMediWhereInput[]
    OR?: UserMediWhereInput[]
    NOT?: UserMediWhereInput | UserMediWhereInput[]
    startDate?: DateTimeNullableFilter<"UserMedi"> | Date | string | null
    endDate?: DateTimeNullableFilter<"UserMedi"> | Date | string | null
    userId?: StringFilter<"UserMedi"> | string
    itemSeq?: StringFilter<"UserMedi"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
    mediTimes?: MediTimeListRelationFilter
  }, "id">

  export type UserMediOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    userId?: SortOrder
    itemSeq?: SortOrder
    _count?: UserMediCountOrderByAggregateInput
    _avg?: UserMediAvgOrderByAggregateInput
    _max?: UserMediMaxOrderByAggregateInput
    _min?: UserMediMinOrderByAggregateInput
    _sum?: UserMediSumOrderByAggregateInput
  }

  export type UserMediScalarWhereWithAggregatesInput = {
    AND?: UserMediScalarWhereWithAggregatesInput | UserMediScalarWhereWithAggregatesInput[]
    OR?: UserMediScalarWhereWithAggregatesInput[]
    NOT?: UserMediScalarWhereWithAggregatesInput | UserMediScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserMedi"> | number
    startDate?: DateTimeNullableWithAggregatesFilter<"UserMedi"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"UserMedi"> | Date | string | null
    userId?: StringWithAggregatesFilter<"UserMedi"> | string
    itemSeq?: StringWithAggregatesFilter<"UserMedi"> | string
  }

  export type UserHealthWhereInput = {
    AND?: UserHealthWhereInput | UserHealthWhereInput[]
    OR?: UserHealthWhereInput[]
    NOT?: UserHealthWhereInput | UserHealthWhereInput[]
    id?: IntFilter<"UserHealth"> | number
    userId?: StringFilter<"UserHealth"> | string
    healthId?: IntFilter<"UserHealth"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    health?: XOR<HealthScalarRelationFilter, HealthWhereInput>
  }

  export type UserHealthOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    healthId?: SortOrder
    user?: UserOrderByWithRelationInput
    health?: HealthOrderByWithRelationInput
  }

  export type UserHealthWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserHealthWhereInput | UserHealthWhereInput[]
    OR?: UserHealthWhereInput[]
    NOT?: UserHealthWhereInput | UserHealthWhereInput[]
    userId?: StringFilter<"UserHealth"> | string
    healthId?: IntFilter<"UserHealth"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    health?: XOR<HealthScalarRelationFilter, HealthWhereInput>
  }, "id">

  export type UserHealthOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    healthId?: SortOrder
    _count?: UserHealthCountOrderByAggregateInput
    _avg?: UserHealthAvgOrderByAggregateInput
    _max?: UserHealthMaxOrderByAggregateInput
    _min?: UserHealthMinOrderByAggregateInput
    _sum?: UserHealthSumOrderByAggregateInput
  }

  export type UserHealthScalarWhereWithAggregatesInput = {
    AND?: UserHealthScalarWhereWithAggregatesInput | UserHealthScalarWhereWithAggregatesInput[]
    OR?: UserHealthScalarWhereWithAggregatesInput[]
    NOT?: UserHealthScalarWhereWithAggregatesInput | UserHealthScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserHealth"> | number
    userId?: StringWithAggregatesFilter<"UserHealth"> | string
    healthId?: IntWithAggregatesFilter<"UserHealth"> | number
  }

  export type MedicineWhereInput = {
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    itemSeq?: StringFilter<"Medicine"> | string
    itemName?: StringFilter<"Medicine"> | string
    entpName?: StringNullableFilter<"Medicine"> | string | null
    itemPermitDate?: DateTimeNullableFilter<"Medicine"> | Date | string | null
    etcOtcCode?: StringNullableFilter<"Medicine"> | string | null
    classNo?: StringNullableFilter<"Medicine"> | string | null
    chart?: StringNullableFilter<"Medicine"> | string | null
    barCode?: StringNullableFilter<"Medicine"> | string | null
    materialName?: StringNullableFilter<"Medicine"> | string | null
    eeDocId?: StringNullableFilter<"Medicine"> | string | null
    userMedis?: UserMediListRelationFilter
    inventories?: InventoryListRelationFilter
  }

  export type MedicineOrderByWithRelationInput = {
    itemSeq?: SortOrder
    itemName?: SortOrder
    entpName?: SortOrderInput | SortOrder
    itemPermitDate?: SortOrderInput | SortOrder
    etcOtcCode?: SortOrderInput | SortOrder
    classNo?: SortOrderInput | SortOrder
    chart?: SortOrderInput | SortOrder
    barCode?: SortOrderInput | SortOrder
    materialName?: SortOrderInput | SortOrder
    eeDocId?: SortOrderInput | SortOrder
    userMedis?: UserMediOrderByRelationAggregateInput
    inventories?: InventoryOrderByRelationAggregateInput
  }

  export type MedicineWhereUniqueInput = Prisma.AtLeast<{
    itemSeq?: string
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    itemName?: StringFilter<"Medicine"> | string
    entpName?: StringNullableFilter<"Medicine"> | string | null
    itemPermitDate?: DateTimeNullableFilter<"Medicine"> | Date | string | null
    etcOtcCode?: StringNullableFilter<"Medicine"> | string | null
    classNo?: StringNullableFilter<"Medicine"> | string | null
    chart?: StringNullableFilter<"Medicine"> | string | null
    barCode?: StringNullableFilter<"Medicine"> | string | null
    materialName?: StringNullableFilter<"Medicine"> | string | null
    eeDocId?: StringNullableFilter<"Medicine"> | string | null
    userMedis?: UserMediListRelationFilter
    inventories?: InventoryListRelationFilter
  }, "itemSeq">

  export type MedicineOrderByWithAggregationInput = {
    itemSeq?: SortOrder
    itemName?: SortOrder
    entpName?: SortOrderInput | SortOrder
    itemPermitDate?: SortOrderInput | SortOrder
    etcOtcCode?: SortOrderInput | SortOrder
    classNo?: SortOrderInput | SortOrder
    chart?: SortOrderInput | SortOrder
    barCode?: SortOrderInput | SortOrder
    materialName?: SortOrderInput | SortOrder
    eeDocId?: SortOrderInput | SortOrder
    _count?: MedicineCountOrderByAggregateInput
    _max?: MedicineMaxOrderByAggregateInput
    _min?: MedicineMinOrderByAggregateInput
  }

  export type MedicineScalarWhereWithAggregatesInput = {
    AND?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    OR?: MedicineScalarWhereWithAggregatesInput[]
    NOT?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    itemSeq?: StringWithAggregatesFilter<"Medicine"> | string
    itemName?: StringWithAggregatesFilter<"Medicine"> | string
    entpName?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    itemPermitDate?: DateTimeNullableWithAggregatesFilter<"Medicine"> | Date | string | null
    etcOtcCode?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    classNo?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    chart?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    barCode?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    materialName?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    eeDocId?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
  }

  export type MediTimeWhereInput = {
    AND?: MediTimeWhereInput | MediTimeWhereInput[]
    OR?: MediTimeWhereInput[]
    NOT?: MediTimeWhereInput | MediTimeWhereInput[]
    id?: IntFilter<"MediTime"> | number
    mediTime?: IntFilter<"MediTime"> | number
    userMediId?: IntFilter<"MediTime"> | number
    userMedi?: XOR<UserMediScalarRelationFilter, UserMediWhereInput>
  }

  export type MediTimeOrderByWithRelationInput = {
    id?: SortOrder
    mediTime?: SortOrder
    userMediId?: SortOrder
    userMedi?: UserMediOrderByWithRelationInput
  }

  export type MediTimeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MediTimeWhereInput | MediTimeWhereInput[]
    OR?: MediTimeWhereInput[]
    NOT?: MediTimeWhereInput | MediTimeWhereInput[]
    mediTime?: IntFilter<"MediTime"> | number
    userMediId?: IntFilter<"MediTime"> | number
    userMedi?: XOR<UserMediScalarRelationFilter, UserMediWhereInput>
  }, "id">

  export type MediTimeOrderByWithAggregationInput = {
    id?: SortOrder
    mediTime?: SortOrder
    userMediId?: SortOrder
    _count?: MediTimeCountOrderByAggregateInput
    _avg?: MediTimeAvgOrderByAggregateInput
    _max?: MediTimeMaxOrderByAggregateInput
    _min?: MediTimeMinOrderByAggregateInput
    _sum?: MediTimeSumOrderByAggregateInput
  }

  export type MediTimeScalarWhereWithAggregatesInput = {
    AND?: MediTimeScalarWhereWithAggregatesInput | MediTimeScalarWhereWithAggregatesInput[]
    OR?: MediTimeScalarWhereWithAggregatesInput[]
    NOT?: MediTimeScalarWhereWithAggregatesInput | MediTimeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MediTime"> | number
    mediTime?: IntWithAggregatesFilter<"MediTime"> | number
    userMediId?: IntWithAggregatesFilter<"MediTime"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    photo?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    birthyear?: IntNullableFilter<"User"> | number | null
    gender?: StringNullableFilter<"User"> | string | null
    memberType?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    hpid?: StringNullableFilter<"User"> | string | null
    pharmacy?: XOR<PharmacyNullableScalarRelationFilter, PharmacyWhereInput> | null
    posts?: PostListRelationFilter
    qnas?: QnaListRelationFilter
    answers?: AnswerListRelationFilter
    comments?: CommentListRelationFilter
    userMedis?: UserMediListRelationFilter
    userHealth?: UserHealthListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    birthyear?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    memberType?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    hpid?: SortOrderInput | SortOrder
    pharmacy?: PharmacyOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    qnas?: QnaOrderByRelationAggregateInput
    answers?: AnswerOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    userMedis?: UserMediOrderByRelationAggregateInput
    userHealth?: UserHealthOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringNullableFilter<"User"> | string | null
    photo?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    birthyear?: IntNullableFilter<"User"> | number | null
    gender?: StringNullableFilter<"User"> | string | null
    memberType?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    hpid?: StringNullableFilter<"User"> | string | null
    pharmacy?: XOR<PharmacyNullableScalarRelationFilter, PharmacyWhereInput> | null
    posts?: PostListRelationFilter
    qnas?: QnaListRelationFilter
    answers?: AnswerListRelationFilter
    comments?: CommentListRelationFilter
    userMedis?: UserMediListRelationFilter
    userHealth?: UserHealthListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    birthyear?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    memberType?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    hpid?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    photo?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthyear?: IntNullableWithAggregatesFilter<"User"> | number | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    memberType?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    hpid?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    userId?: StringFilter<"Post"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    postTags?: PostTagListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    postTags?: PostTagOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    userId?: StringFilter<"Post"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    postTags?: PostTagListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    userId?: StringWithAggregatesFilter<"Post"> | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: IntFilter<"Answer"> | number
    content?: StringFilter<"Answer"> | string
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Answer"> | Date | string | null
    isAccepted?: BoolFilter<"Answer"> | boolean
    userId?: StringFilter<"Answer"> | string
    qnaId?: IntFilter<"Answer"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    qna?: XOR<QnaScalarRelationFilter, QnaWhereInput>
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    isAccepted?: SortOrder
    userId?: SortOrder
    qnaId?: SortOrder
    user?: UserOrderByWithRelationInput
    qna?: QnaOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    content?: StringFilter<"Answer"> | string
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Answer"> | Date | string | null
    isAccepted?: BoolFilter<"Answer"> | boolean
    userId?: StringFilter<"Answer"> | string
    qnaId?: IntFilter<"Answer"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    qna?: XOR<QnaScalarRelationFilter, QnaWhereInput>
  }, "id">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    isAccepted?: SortOrder
    userId?: SortOrder
    qnaId?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Answer"> | number
    content?: StringWithAggregatesFilter<"Answer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Answer"> | Date | string | null
    isAccepted?: BoolWithAggregatesFilter<"Answer"> | boolean
    userId?: StringWithAggregatesFilter<"Answer"> | string
    qnaId?: IntWithAggregatesFilter<"Answer"> | number
  }

  export type PharmacyWhereInput = {
    AND?: PharmacyWhereInput | PharmacyWhereInput[]
    OR?: PharmacyWhereInput[]
    NOT?: PharmacyWhereInput | PharmacyWhereInput[]
    hpid?: StringFilter<"Pharmacy"> | string
    dutyAddr?: StringNullableFilter<"Pharmacy"> | string | null
    dutyMapimg?: StringNullableFilter<"Pharmacy"> | string | null
    dutyName?: StringFilter<"Pharmacy"> | string
    dutyTel1?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime1c?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime1s?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime2c?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime2s?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime3c?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime3s?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime4c?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime4s?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime5c?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime5s?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime6c?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime6s?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime7c?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime7s?: StringNullableFilter<"Pharmacy"> | string | null
    postCdn1?: StringNullableFilter<"Pharmacy"> | string | null
    postCdn2?: StringNullableFilter<"Pharmacy"> | string | null
    wgs84Lat?: DecimalNullableFilter<"Pharmacy"> | Decimal | DecimalJsLike | number | string | null
    wgs84Lon?: DecimalNullableFilter<"Pharmacy"> | Decimal | DecimalJsLike | number | string | null
    users?: UserListRelationFilter
    inventories?: InventoryListRelationFilter
  }

  export type PharmacyOrderByWithRelationInput = {
    hpid?: SortOrder
    dutyAddr?: SortOrderInput | SortOrder
    dutyMapimg?: SortOrderInput | SortOrder
    dutyName?: SortOrder
    dutyTel1?: SortOrderInput | SortOrder
    dutyTime1c?: SortOrderInput | SortOrder
    dutyTime1s?: SortOrderInput | SortOrder
    dutyTime2c?: SortOrderInput | SortOrder
    dutyTime2s?: SortOrderInput | SortOrder
    dutyTime3c?: SortOrderInput | SortOrder
    dutyTime3s?: SortOrderInput | SortOrder
    dutyTime4c?: SortOrderInput | SortOrder
    dutyTime4s?: SortOrderInput | SortOrder
    dutyTime5c?: SortOrderInput | SortOrder
    dutyTime5s?: SortOrderInput | SortOrder
    dutyTime6c?: SortOrderInput | SortOrder
    dutyTime6s?: SortOrderInput | SortOrder
    dutyTime7c?: SortOrderInput | SortOrder
    dutyTime7s?: SortOrderInput | SortOrder
    postCdn1?: SortOrderInput | SortOrder
    postCdn2?: SortOrderInput | SortOrder
    wgs84Lat?: SortOrderInput | SortOrder
    wgs84Lon?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    inventories?: InventoryOrderByRelationAggregateInput
  }

  export type PharmacyWhereUniqueInput = Prisma.AtLeast<{
    hpid?: string
    AND?: PharmacyWhereInput | PharmacyWhereInput[]
    OR?: PharmacyWhereInput[]
    NOT?: PharmacyWhereInput | PharmacyWhereInput[]
    dutyAddr?: StringNullableFilter<"Pharmacy"> | string | null
    dutyMapimg?: StringNullableFilter<"Pharmacy"> | string | null
    dutyName?: StringFilter<"Pharmacy"> | string
    dutyTel1?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime1c?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime1s?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime2c?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime2s?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime3c?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime3s?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime4c?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime4s?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime5c?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime5s?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime6c?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime6s?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime7c?: StringNullableFilter<"Pharmacy"> | string | null
    dutyTime7s?: StringNullableFilter<"Pharmacy"> | string | null
    postCdn1?: StringNullableFilter<"Pharmacy"> | string | null
    postCdn2?: StringNullableFilter<"Pharmacy"> | string | null
    wgs84Lat?: DecimalNullableFilter<"Pharmacy"> | Decimal | DecimalJsLike | number | string | null
    wgs84Lon?: DecimalNullableFilter<"Pharmacy"> | Decimal | DecimalJsLike | number | string | null
    users?: UserListRelationFilter
    inventories?: InventoryListRelationFilter
  }, "hpid">

  export type PharmacyOrderByWithAggregationInput = {
    hpid?: SortOrder
    dutyAddr?: SortOrderInput | SortOrder
    dutyMapimg?: SortOrderInput | SortOrder
    dutyName?: SortOrder
    dutyTel1?: SortOrderInput | SortOrder
    dutyTime1c?: SortOrderInput | SortOrder
    dutyTime1s?: SortOrderInput | SortOrder
    dutyTime2c?: SortOrderInput | SortOrder
    dutyTime2s?: SortOrderInput | SortOrder
    dutyTime3c?: SortOrderInput | SortOrder
    dutyTime3s?: SortOrderInput | SortOrder
    dutyTime4c?: SortOrderInput | SortOrder
    dutyTime4s?: SortOrderInput | SortOrder
    dutyTime5c?: SortOrderInput | SortOrder
    dutyTime5s?: SortOrderInput | SortOrder
    dutyTime6c?: SortOrderInput | SortOrder
    dutyTime6s?: SortOrderInput | SortOrder
    dutyTime7c?: SortOrderInput | SortOrder
    dutyTime7s?: SortOrderInput | SortOrder
    postCdn1?: SortOrderInput | SortOrder
    postCdn2?: SortOrderInput | SortOrder
    wgs84Lat?: SortOrderInput | SortOrder
    wgs84Lon?: SortOrderInput | SortOrder
    _count?: PharmacyCountOrderByAggregateInput
    _avg?: PharmacyAvgOrderByAggregateInput
    _max?: PharmacyMaxOrderByAggregateInput
    _min?: PharmacyMinOrderByAggregateInput
    _sum?: PharmacySumOrderByAggregateInput
  }

  export type PharmacyScalarWhereWithAggregatesInput = {
    AND?: PharmacyScalarWhereWithAggregatesInput | PharmacyScalarWhereWithAggregatesInput[]
    OR?: PharmacyScalarWhereWithAggregatesInput[]
    NOT?: PharmacyScalarWhereWithAggregatesInput | PharmacyScalarWhereWithAggregatesInput[]
    hpid?: StringWithAggregatesFilter<"Pharmacy"> | string
    dutyAddr?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    dutyMapimg?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    dutyName?: StringWithAggregatesFilter<"Pharmacy"> | string
    dutyTel1?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    dutyTime1c?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    dutyTime1s?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    dutyTime2c?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    dutyTime2s?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    dutyTime3c?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    dutyTime3s?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    dutyTime4c?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    dutyTime4s?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    dutyTime5c?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    dutyTime5s?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    dutyTime6c?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    dutyTime6s?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    dutyTime7c?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    dutyTime7s?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    postCdn1?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    postCdn2?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    wgs84Lat?: DecimalNullableWithAggregatesFilter<"Pharmacy"> | Decimal | DecimalJsLike | number | string | null
    wgs84Lon?: DecimalNullableWithAggregatesFilter<"Pharmacy"> | Decimal | DecimalJsLike | number | string | null
  }

  export type PostTagWhereInput = {
    AND?: PostTagWhereInput | PostTagWhereInput[]
    OR?: PostTagWhereInput[]
    NOT?: PostTagWhereInput | PostTagWhereInput[]
    id?: IntFilter<"PostTag"> | number
    tagId?: IntFilter<"PostTag"> | number
    postId?: IntFilter<"PostTag"> | number
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostTagOrderByWithRelationInput = {
    id?: SortOrder
    tagId?: SortOrder
    postId?: SortOrder
    tag?: TagOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type PostTagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostTagWhereInput | PostTagWhereInput[]
    OR?: PostTagWhereInput[]
    NOT?: PostTagWhereInput | PostTagWhereInput[]
    tagId?: IntFilter<"PostTag"> | number
    postId?: IntFilter<"PostTag"> | number
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type PostTagOrderByWithAggregationInput = {
    id?: SortOrder
    tagId?: SortOrder
    postId?: SortOrder
    _count?: PostTagCountOrderByAggregateInput
    _avg?: PostTagAvgOrderByAggregateInput
    _max?: PostTagMaxOrderByAggregateInput
    _min?: PostTagMinOrderByAggregateInput
    _sum?: PostTagSumOrderByAggregateInput
  }

  export type PostTagScalarWhereWithAggregatesInput = {
    AND?: PostTagScalarWhereWithAggregatesInput | PostTagScalarWhereWithAggregatesInput[]
    OR?: PostTagScalarWhereWithAggregatesInput[]
    NOT?: PostTagScalarWhereWithAggregatesInput | PostTagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostTag"> | number
    tagId?: IntWithAggregatesFilter<"PostTag"> | number
    postId?: IntWithAggregatesFilter<"PostTag"> | number
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    tagName?: StringFilter<"Tag"> | string
    postTags?: PostTagListRelationFilter
    qnaTags?: QnaTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    tagName?: SortOrder
    postTags?: PostTagOrderByRelationAggregateInput
    qnaTags?: QnaTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    tagName?: StringFilter<"Tag"> | string
    postTags?: PostTagListRelationFilter
    qnaTags?: QnaTagListRelationFilter
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    tagName?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    tagName?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type HealthWhereInput = {
    AND?: HealthWhereInput | HealthWhereInput[]
    OR?: HealthWhereInput[]
    NOT?: HealthWhereInput | HealthWhereInput[]
    id?: IntFilter<"Health"> | number
    healthName?: StringFilter<"Health"> | string
    userHealth?: UserHealthListRelationFilter
  }

  export type HealthOrderByWithRelationInput = {
    id?: SortOrder
    healthName?: SortOrder
    userHealth?: UserHealthOrderByRelationAggregateInput
  }

  export type HealthWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HealthWhereInput | HealthWhereInput[]
    OR?: HealthWhereInput[]
    NOT?: HealthWhereInput | HealthWhereInput[]
    healthName?: StringFilter<"Health"> | string
    userHealth?: UserHealthListRelationFilter
  }, "id">

  export type HealthOrderByWithAggregationInput = {
    id?: SortOrder
    healthName?: SortOrder
    _count?: HealthCountOrderByAggregateInput
    _avg?: HealthAvgOrderByAggregateInput
    _max?: HealthMaxOrderByAggregateInput
    _min?: HealthMinOrderByAggregateInput
    _sum?: HealthSumOrderByAggregateInput
  }

  export type HealthScalarWhereWithAggregatesInput = {
    AND?: HealthScalarWhereWithAggregatesInput | HealthScalarWhereWithAggregatesInput[]
    OR?: HealthScalarWhereWithAggregatesInput[]
    NOT?: HealthScalarWhereWithAggregatesInput | HealthScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Health"> | number
    healthName?: StringWithAggregatesFilter<"Health"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    userId?: StringFilter<"Comment"> | string
    postId?: IntFilter<"Comment"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    postId?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    userId?: StringFilter<"Comment"> | string
    postId?: IntFilter<"Comment"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    content?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Comment"> | Date | string | null
    userId?: StringWithAggregatesFilter<"Comment"> | string
    postId?: IntWithAggregatesFilter<"Comment"> | number
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    id?: IntFilter<"Inventory"> | number
    quantity?: IntFilter<"Inventory"> | number
    itemSeq?: StringFilter<"Inventory"> | string
    hpid?: StringFilter<"Inventory"> | string
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
    pharmacy?: XOR<PharmacyScalarRelationFilter, PharmacyWhereInput>
  }

  export type InventoryOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    itemSeq?: SortOrder
    hpid?: SortOrder
    medicine?: MedicineOrderByWithRelationInput
    pharmacy?: PharmacyOrderByWithRelationInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    quantity?: IntFilter<"Inventory"> | number
    itemSeq?: StringFilter<"Inventory"> | string
    hpid?: StringFilter<"Inventory"> | string
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
    pharmacy?: XOR<PharmacyScalarRelationFilter, PharmacyWhereInput>
  }, "id">

  export type InventoryOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    itemSeq?: SortOrder
    hpid?: SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inventory"> | number
    quantity?: IntWithAggregatesFilter<"Inventory"> | number
    itemSeq?: StringWithAggregatesFilter<"Inventory"> | string
    hpid?: StringWithAggregatesFilter<"Inventory"> | string
  }

  export type QnaTagCreateInput = {
    tag: TagCreateNestedOneWithoutQnaTagsInput
    qna: QnaCreateNestedOneWithoutQnaTagsInput
  }

  export type QnaTagUncheckedCreateInput = {
    id?: number
    tagId: number
    qnaId: number
  }

  export type QnaTagUpdateInput = {
    tag?: TagUpdateOneRequiredWithoutQnaTagsNestedInput
    qna?: QnaUpdateOneRequiredWithoutQnaTagsNestedInput
  }

  export type QnaTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    qnaId?: IntFieldUpdateOperationsInput | number
  }

  export type QnaTagCreateManyInput = {
    id?: number
    tagId: number
    qnaId: number
  }

  export type QnaTagUpdateManyMutationInput = {

  }

  export type QnaTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    qnaId?: IntFieldUpdateOperationsInput | number
  }

  export type QnaCreateInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutQnasInput
    answers?: AnswerCreateNestedManyWithoutQnaInput
    qnaTags?: QnaTagCreateNestedManyWithoutQnaInput
  }

  export type QnaUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    answers?: AnswerUncheckedCreateNestedManyWithoutQnaInput
    qnaTags?: QnaTagUncheckedCreateNestedManyWithoutQnaInput
  }

  export type QnaUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutQnasNestedInput
    answers?: AnswerUpdateManyWithoutQnaNestedInput
    qnaTags?: QnaTagUpdateManyWithoutQnaNestedInput
  }

  export type QnaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutQnaNestedInput
    qnaTags?: QnaTagUncheckedUpdateManyWithoutQnaNestedInput
  }

  export type QnaCreateManyInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
  }

  export type QnaUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QnaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserMediCreateInput = {
    startDate?: Date | string | null
    endDate?: Date | string | null
    user: UserCreateNestedOneWithoutUserMedisInput
    medicine: MedicineCreateNestedOneWithoutUserMedisInput
    mediTimes?: MediTimeCreateNestedManyWithoutUserMediInput
  }

  export type UserMediUncheckedCreateInput = {
    id?: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    userId: string
    itemSeq: string
    mediTimes?: MediTimeUncheckedCreateNestedManyWithoutUserMediInput
  }

  export type UserMediUpdateInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserMedisNestedInput
    medicine?: MedicineUpdateOneRequiredWithoutUserMedisNestedInput
    mediTimes?: MediTimeUpdateManyWithoutUserMediNestedInput
  }

  export type UserMediUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    itemSeq?: StringFieldUpdateOperationsInput | string
    mediTimes?: MediTimeUncheckedUpdateManyWithoutUserMediNestedInput
  }

  export type UserMediCreateManyInput = {
    id?: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    userId: string
    itemSeq: string
  }

  export type UserMediUpdateManyMutationInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserMediUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    itemSeq?: StringFieldUpdateOperationsInput | string
  }

  export type UserHealthCreateInput = {
    user: UserCreateNestedOneWithoutUserHealthInput
    health: HealthCreateNestedOneWithoutUserHealthInput
  }

  export type UserHealthUncheckedCreateInput = {
    id?: number
    userId: string
    healthId: number
  }

  export type UserHealthUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserHealthNestedInput
    health?: HealthUpdateOneRequiredWithoutUserHealthNestedInput
  }

  export type UserHealthUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    healthId?: IntFieldUpdateOperationsInput | number
  }

  export type UserHealthCreateManyInput = {
    id?: number
    userId: string
    healthId: number
  }

  export type UserHealthUpdateManyMutationInput = {

  }

  export type UserHealthUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    healthId?: IntFieldUpdateOperationsInput | number
  }

  export type MedicineCreateInput = {
    itemSeq: string
    itemName: string
    entpName?: string | null
    itemPermitDate?: Date | string | null
    etcOtcCode?: string | null
    classNo?: string | null
    chart?: string | null
    barCode?: string | null
    materialName?: string | null
    eeDocId?: string | null
    userMedis?: UserMediCreateNestedManyWithoutMedicineInput
    inventories?: InventoryCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateInput = {
    itemSeq: string
    itemName: string
    entpName?: string | null
    itemPermitDate?: Date | string | null
    etcOtcCode?: string | null
    classNo?: string | null
    chart?: string | null
    barCode?: string | null
    materialName?: string | null
    eeDocId?: string | null
    userMedis?: UserMediUncheckedCreateNestedManyWithoutMedicineInput
    inventories?: InventoryUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUpdateInput = {
    itemSeq?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    entpName?: NullableStringFieldUpdateOperationsInput | string | null
    itemPermitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    etcOtcCode?: NullableStringFieldUpdateOperationsInput | string | null
    classNo?: NullableStringFieldUpdateOperationsInput | string | null
    chart?: NullableStringFieldUpdateOperationsInput | string | null
    barCode?: NullableStringFieldUpdateOperationsInput | string | null
    materialName?: NullableStringFieldUpdateOperationsInput | string | null
    eeDocId?: NullableStringFieldUpdateOperationsInput | string | null
    userMedis?: UserMediUpdateManyWithoutMedicineNestedInput
    inventories?: InventoryUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateInput = {
    itemSeq?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    entpName?: NullableStringFieldUpdateOperationsInput | string | null
    itemPermitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    etcOtcCode?: NullableStringFieldUpdateOperationsInput | string | null
    classNo?: NullableStringFieldUpdateOperationsInput | string | null
    chart?: NullableStringFieldUpdateOperationsInput | string | null
    barCode?: NullableStringFieldUpdateOperationsInput | string | null
    materialName?: NullableStringFieldUpdateOperationsInput | string | null
    eeDocId?: NullableStringFieldUpdateOperationsInput | string | null
    userMedis?: UserMediUncheckedUpdateManyWithoutMedicineNestedInput
    inventories?: InventoryUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineCreateManyInput = {
    itemSeq: string
    itemName: string
    entpName?: string | null
    itemPermitDate?: Date | string | null
    etcOtcCode?: string | null
    classNo?: string | null
    chart?: string | null
    barCode?: string | null
    materialName?: string | null
    eeDocId?: string | null
  }

  export type MedicineUpdateManyMutationInput = {
    itemSeq?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    entpName?: NullableStringFieldUpdateOperationsInput | string | null
    itemPermitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    etcOtcCode?: NullableStringFieldUpdateOperationsInput | string | null
    classNo?: NullableStringFieldUpdateOperationsInput | string | null
    chart?: NullableStringFieldUpdateOperationsInput | string | null
    barCode?: NullableStringFieldUpdateOperationsInput | string | null
    materialName?: NullableStringFieldUpdateOperationsInput | string | null
    eeDocId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicineUncheckedUpdateManyInput = {
    itemSeq?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    entpName?: NullableStringFieldUpdateOperationsInput | string | null
    itemPermitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    etcOtcCode?: NullableStringFieldUpdateOperationsInput | string | null
    classNo?: NullableStringFieldUpdateOperationsInput | string | null
    chart?: NullableStringFieldUpdateOperationsInput | string | null
    barCode?: NullableStringFieldUpdateOperationsInput | string | null
    materialName?: NullableStringFieldUpdateOperationsInput | string | null
    eeDocId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediTimeCreateInput = {
    mediTime: number
    userMedi: UserMediCreateNestedOneWithoutMediTimesInput
  }

  export type MediTimeUncheckedCreateInput = {
    id?: number
    mediTime: number
    userMediId: number
  }

  export type MediTimeUpdateInput = {
    mediTime?: IntFieldUpdateOperationsInput | number
    userMedi?: UserMediUpdateOneRequiredWithoutMediTimesNestedInput
  }

  export type MediTimeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediTime?: IntFieldUpdateOperationsInput | number
    userMediId?: IntFieldUpdateOperationsInput | number
  }

  export type MediTimeCreateManyInput = {
    id?: number
    mediTime: number
    userMediId: number
  }

  export type MediTimeUpdateManyMutationInput = {
    mediTime?: IntFieldUpdateOperationsInput | number
  }

  export type MediTimeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediTime?: IntFieldUpdateOperationsInput | number
    userMediId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    memberType: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    pharmacy?: PharmacyCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutUserInput
    qnas?: QnaCreateNestedManyWithoutUserInput
    answers?: AnswerCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    userMedis?: UserMediCreateNestedManyWithoutUserInput
    userHealth?: UserHealthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    memberType: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    hpid?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    qnas?: QnaUncheckedCreateNestedManyWithoutUserInput
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    userMedis?: UserMediUncheckedCreateNestedManyWithoutUserInput
    userHealth?: UserHealthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pharmacy?: PharmacyUpdateOneWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    qnas?: QnaUpdateManyWithoutUserNestedInput
    answers?: AnswerUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    userMedis?: UserMediUpdateManyWithoutUserNestedInput
    userHealth?: UserHealthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hpid?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    qnas?: QnaUncheckedUpdateManyWithoutUserNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userMedis?: UserMediUncheckedUpdateManyWithoutUserNestedInput
    userHealth?: UserHealthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    memberType: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    hpid?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hpid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    postTags?: PostTagCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    postTags?: PostTagUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    postTags?: PostTagUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    postTags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    isAccepted?: boolean
    user: UserCreateNestedOneWithoutAnswersInput
    qna: QnaCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    isAccepted?: boolean
    userId: string
    qnaId: number
  }

  export type AnswerUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAnswersNestedInput
    qna?: QnaUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    qnaId?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerCreateManyInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    isAccepted?: boolean
    userId: string
    qnaId: number
  }

  export type AnswerUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    qnaId?: IntFieldUpdateOperationsInput | number
  }

  export type PharmacyCreateInput = {
    hpid: string
    dutyAddr?: string | null
    dutyMapimg?: string | null
    dutyName: string
    dutyTel1?: string | null
    dutyTime1c?: string | null
    dutyTime1s?: string | null
    dutyTime2c?: string | null
    dutyTime2s?: string | null
    dutyTime3c?: string | null
    dutyTime3s?: string | null
    dutyTime4c?: string | null
    dutyTime4s?: string | null
    dutyTime5c?: string | null
    dutyTime5s?: string | null
    dutyTime6c?: string | null
    dutyTime6s?: string | null
    dutyTime7c?: string | null
    dutyTime7s?: string | null
    postCdn1?: string | null
    postCdn2?: string | null
    wgs84Lat?: Decimal | DecimalJsLike | number | string | null
    wgs84Lon?: Decimal | DecimalJsLike | number | string | null
    users?: UserCreateNestedManyWithoutPharmacyInput
    inventories?: InventoryCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateInput = {
    hpid: string
    dutyAddr?: string | null
    dutyMapimg?: string | null
    dutyName: string
    dutyTel1?: string | null
    dutyTime1c?: string | null
    dutyTime1s?: string | null
    dutyTime2c?: string | null
    dutyTime2s?: string | null
    dutyTime3c?: string | null
    dutyTime3s?: string | null
    dutyTime4c?: string | null
    dutyTime4s?: string | null
    dutyTime5c?: string | null
    dutyTime5s?: string | null
    dutyTime6c?: string | null
    dutyTime6s?: string | null
    dutyTime7c?: string | null
    dutyTime7s?: string | null
    postCdn1?: string | null
    postCdn2?: string | null
    wgs84Lat?: Decimal | DecimalJsLike | number | string | null
    wgs84Lon?: Decimal | DecimalJsLike | number | string | null
    users?: UserUncheckedCreateNestedManyWithoutPharmacyInput
    inventories?: InventoryUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUpdateInput = {
    hpid?: StringFieldUpdateOperationsInput | string
    dutyAddr?: NullableStringFieldUpdateOperationsInput | string | null
    dutyMapimg?: NullableStringFieldUpdateOperationsInput | string | null
    dutyName?: StringFieldUpdateOperationsInput | string
    dutyTel1?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime1c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime1s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime2c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime2s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime3c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime3s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime4c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime4s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime5c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime5s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime6c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime6s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime7c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime7s?: NullableStringFieldUpdateOperationsInput | string | null
    postCdn1?: NullableStringFieldUpdateOperationsInput | string | null
    postCdn2?: NullableStringFieldUpdateOperationsInput | string | null
    wgs84Lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgs84Lon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    users?: UserUpdateManyWithoutPharmacyNestedInput
    inventories?: InventoryUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateInput = {
    hpid?: StringFieldUpdateOperationsInput | string
    dutyAddr?: NullableStringFieldUpdateOperationsInput | string | null
    dutyMapimg?: NullableStringFieldUpdateOperationsInput | string | null
    dutyName?: StringFieldUpdateOperationsInput | string
    dutyTel1?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime1c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime1s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime2c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime2s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime3c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime3s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime4c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime4s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime5c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime5s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime6c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime6s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime7c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime7s?: NullableStringFieldUpdateOperationsInput | string | null
    postCdn1?: NullableStringFieldUpdateOperationsInput | string | null
    postCdn2?: NullableStringFieldUpdateOperationsInput | string | null
    wgs84Lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgs84Lon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    users?: UserUncheckedUpdateManyWithoutPharmacyNestedInput
    inventories?: InventoryUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyCreateManyInput = {
    hpid: string
    dutyAddr?: string | null
    dutyMapimg?: string | null
    dutyName: string
    dutyTel1?: string | null
    dutyTime1c?: string | null
    dutyTime1s?: string | null
    dutyTime2c?: string | null
    dutyTime2s?: string | null
    dutyTime3c?: string | null
    dutyTime3s?: string | null
    dutyTime4c?: string | null
    dutyTime4s?: string | null
    dutyTime5c?: string | null
    dutyTime5s?: string | null
    dutyTime6c?: string | null
    dutyTime6s?: string | null
    dutyTime7c?: string | null
    dutyTime7s?: string | null
    postCdn1?: string | null
    postCdn2?: string | null
    wgs84Lat?: Decimal | DecimalJsLike | number | string | null
    wgs84Lon?: Decimal | DecimalJsLike | number | string | null
  }

  export type PharmacyUpdateManyMutationInput = {
    hpid?: StringFieldUpdateOperationsInput | string
    dutyAddr?: NullableStringFieldUpdateOperationsInput | string | null
    dutyMapimg?: NullableStringFieldUpdateOperationsInput | string | null
    dutyName?: StringFieldUpdateOperationsInput | string
    dutyTel1?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime1c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime1s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime2c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime2s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime3c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime3s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime4c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime4s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime5c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime5s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime6c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime6s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime7c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime7s?: NullableStringFieldUpdateOperationsInput | string | null
    postCdn1?: NullableStringFieldUpdateOperationsInput | string | null
    postCdn2?: NullableStringFieldUpdateOperationsInput | string | null
    wgs84Lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgs84Lon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PharmacyUncheckedUpdateManyInput = {
    hpid?: StringFieldUpdateOperationsInput | string
    dutyAddr?: NullableStringFieldUpdateOperationsInput | string | null
    dutyMapimg?: NullableStringFieldUpdateOperationsInput | string | null
    dutyName?: StringFieldUpdateOperationsInput | string
    dutyTel1?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime1c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime1s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime2c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime2s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime3c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime3s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime4c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime4s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime5c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime5s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime6c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime6s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime7c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime7s?: NullableStringFieldUpdateOperationsInput | string | null
    postCdn1?: NullableStringFieldUpdateOperationsInput | string | null
    postCdn2?: NullableStringFieldUpdateOperationsInput | string | null
    wgs84Lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgs84Lon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PostTagCreateInput = {
    tag: TagCreateNestedOneWithoutPostTagsInput
    post: PostCreateNestedOneWithoutPostTagsInput
  }

  export type PostTagUncheckedCreateInput = {
    id?: number
    tagId: number
    postId: number
  }

  export type PostTagUpdateInput = {
    tag?: TagUpdateOneRequiredWithoutPostTagsNestedInput
    post?: PostUpdateOneRequiredWithoutPostTagsNestedInput
  }

  export type PostTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostTagCreateManyInput = {
    id?: number
    tagId: number
    postId: number
  }

  export type PostTagUpdateManyMutationInput = {

  }

  export type PostTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type TagCreateInput = {
    tagName: string
    postTags?: PostTagCreateNestedManyWithoutTagInput
    qnaTags?: QnaTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    tagName: string
    postTags?: PostTagUncheckedCreateNestedManyWithoutTagInput
    qnaTags?: QnaTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    tagName?: StringFieldUpdateOperationsInput | string
    postTags?: PostTagUpdateManyWithoutTagNestedInput
    qnaTags?: QnaTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagName?: StringFieldUpdateOperationsInput | string
    postTags?: PostTagUncheckedUpdateManyWithoutTagNestedInput
    qnaTags?: QnaTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    tagName: string
  }

  export type TagUpdateManyMutationInput = {
    tagName?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagName?: StringFieldUpdateOperationsInput | string
  }

  export type HealthCreateInput = {
    healthName: string
    userHealth?: UserHealthCreateNestedManyWithoutHealthInput
  }

  export type HealthUncheckedCreateInput = {
    id?: number
    healthName: string
    userHealth?: UserHealthUncheckedCreateNestedManyWithoutHealthInput
  }

  export type HealthUpdateInput = {
    healthName?: StringFieldUpdateOperationsInput | string
    userHealth?: UserHealthUpdateManyWithoutHealthNestedInput
  }

  export type HealthUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    healthName?: StringFieldUpdateOperationsInput | string
    userHealth?: UserHealthUncheckedUpdateManyWithoutHealthNestedInput
  }

  export type HealthCreateManyInput = {
    id?: number
    healthName: string
  }

  export type HealthUpdateManyMutationInput = {
    healthName?: StringFieldUpdateOperationsInput | string
  }

  export type HealthUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    healthName?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    postId: number
  }

  export type CommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateManyInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    postId: number
  }

  export type CommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryCreateInput = {
    quantity: number
    medicine: MedicineCreateNestedOneWithoutInventoriesInput
    pharmacy: PharmacyCreateNestedOneWithoutInventoriesInput
  }

  export type InventoryUncheckedCreateInput = {
    id?: number
    quantity: number
    itemSeq: string
    hpid: string
  }

  export type InventoryUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    medicine?: MedicineUpdateOneRequiredWithoutInventoriesNestedInput
    pharmacy?: PharmacyUpdateOneRequiredWithoutInventoriesNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    itemSeq?: StringFieldUpdateOperationsInput | string
    hpid?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryCreateManyInput = {
    id?: number
    quantity: number
    itemSeq: string
    hpid: string
  }

  export type InventoryUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    itemSeq?: StringFieldUpdateOperationsInput | string
    hpid?: StringFieldUpdateOperationsInput | string
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

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type QnaScalarRelationFilter = {
    is?: QnaWhereInput
    isNot?: QnaWhereInput
  }

  export type QnaTagCountOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    qnaId?: SortOrder
  }

  export type QnaTagAvgOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    qnaId?: SortOrder
  }

  export type QnaTagMaxOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    qnaId?: SortOrder
  }

  export type QnaTagMinOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    qnaId?: SortOrder
  }

  export type QnaTagSumOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type QnaTagListRelationFilter = {
    every?: QnaTagWhereInput
    some?: QnaTagWhereInput
    none?: QnaTagWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QnaTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QnaCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type QnaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QnaMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type QnaMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type QnaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type MedicineScalarRelationFilter = {
    is?: MedicineWhereInput
    isNot?: MedicineWhereInput
  }

  export type MediTimeListRelationFilter = {
    every?: MediTimeWhereInput
    some?: MediTimeWhereInput
    none?: MediTimeWhereInput
  }

  export type MediTimeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserMediCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    itemSeq?: SortOrder
  }

  export type UserMediAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMediMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    itemSeq?: SortOrder
  }

  export type UserMediMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    itemSeq?: SortOrder
  }

  export type UserMediSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HealthScalarRelationFilter = {
    is?: HealthWhereInput
    isNot?: HealthWhereInput
  }

  export type UserHealthCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    healthId?: SortOrder
  }

  export type UserHealthAvgOrderByAggregateInput = {
    id?: SortOrder
    healthId?: SortOrder
  }

  export type UserHealthMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    healthId?: SortOrder
  }

  export type UserHealthMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    healthId?: SortOrder
  }

  export type UserHealthSumOrderByAggregateInput = {
    id?: SortOrder
    healthId?: SortOrder
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

  export type UserMediListRelationFilter = {
    every?: UserMediWhereInput
    some?: UserMediWhereInput
    none?: UserMediWhereInput
  }

  export type InventoryListRelationFilter = {
    every?: InventoryWhereInput
    some?: InventoryWhereInput
    none?: InventoryWhereInput
  }

  export type UserMediOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicineCountOrderByAggregateInput = {
    itemSeq?: SortOrder
    itemName?: SortOrder
    entpName?: SortOrder
    itemPermitDate?: SortOrder
    etcOtcCode?: SortOrder
    classNo?: SortOrder
    chart?: SortOrder
    barCode?: SortOrder
    materialName?: SortOrder
    eeDocId?: SortOrder
  }

  export type MedicineMaxOrderByAggregateInput = {
    itemSeq?: SortOrder
    itemName?: SortOrder
    entpName?: SortOrder
    itemPermitDate?: SortOrder
    etcOtcCode?: SortOrder
    classNo?: SortOrder
    chart?: SortOrder
    barCode?: SortOrder
    materialName?: SortOrder
    eeDocId?: SortOrder
  }

  export type MedicineMinOrderByAggregateInput = {
    itemSeq?: SortOrder
    itemName?: SortOrder
    entpName?: SortOrder
    itemPermitDate?: SortOrder
    etcOtcCode?: SortOrder
    classNo?: SortOrder
    chart?: SortOrder
    barCode?: SortOrder
    materialName?: SortOrder
    eeDocId?: SortOrder
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

  export type UserMediScalarRelationFilter = {
    is?: UserMediWhereInput
    isNot?: UserMediWhereInput
  }

  export type MediTimeCountOrderByAggregateInput = {
    id?: SortOrder
    mediTime?: SortOrder
    userMediId?: SortOrder
  }

  export type MediTimeAvgOrderByAggregateInput = {
    id?: SortOrder
    mediTime?: SortOrder
    userMediId?: SortOrder
  }

  export type MediTimeMaxOrderByAggregateInput = {
    id?: SortOrder
    mediTime?: SortOrder
    userMediId?: SortOrder
  }

  export type MediTimeMinOrderByAggregateInput = {
    id?: SortOrder
    mediTime?: SortOrder
    userMediId?: SortOrder
  }

  export type MediTimeSumOrderByAggregateInput = {
    id?: SortOrder
    mediTime?: SortOrder
    userMediId?: SortOrder
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

  export type PharmacyNullableScalarRelationFilter = {
    is?: PharmacyWhereInput | null
    isNot?: PharmacyWhereInput | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type QnaListRelationFilter = {
    every?: QnaWhereInput
    some?: QnaWhereInput
    none?: QnaWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type UserHealthListRelationFilter = {
    every?: UserHealthWhereInput
    some?: UserHealthWhereInput
    none?: UserHealthWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QnaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserHealthOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    name?: SortOrder
    birthyear?: SortOrder
    gender?: SortOrder
    memberType?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    hpid?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    birthyear?: SortOrder
    memberType?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    name?: SortOrder
    birthyear?: SortOrder
    gender?: SortOrder
    memberType?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    hpid?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    name?: SortOrder
    birthyear?: SortOrder
    gender?: SortOrder
    memberType?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    hpid?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    birthyear?: SortOrder
    memberType?: SortOrder
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

  export type PostTagListRelationFilter = {
    every?: PostTagWhereInput
    some?: PostTagWhereInput
    none?: PostTagWhereInput
  }

  export type PostTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    isAccepted?: SortOrder
    userId?: SortOrder
    qnaId?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    id?: SortOrder
    qnaId?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    isAccepted?: SortOrder
    userId?: SortOrder
    qnaId?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    isAccepted?: SortOrder
    userId?: SortOrder
    qnaId?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    id?: SortOrder
    qnaId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PharmacyCountOrderByAggregateInput = {
    hpid?: SortOrder
    dutyAddr?: SortOrder
    dutyMapimg?: SortOrder
    dutyName?: SortOrder
    dutyTel1?: SortOrder
    dutyTime1c?: SortOrder
    dutyTime1s?: SortOrder
    dutyTime2c?: SortOrder
    dutyTime2s?: SortOrder
    dutyTime3c?: SortOrder
    dutyTime3s?: SortOrder
    dutyTime4c?: SortOrder
    dutyTime4s?: SortOrder
    dutyTime5c?: SortOrder
    dutyTime5s?: SortOrder
    dutyTime6c?: SortOrder
    dutyTime6s?: SortOrder
    dutyTime7c?: SortOrder
    dutyTime7s?: SortOrder
    postCdn1?: SortOrder
    postCdn2?: SortOrder
    wgs84Lat?: SortOrder
    wgs84Lon?: SortOrder
  }

  export type PharmacyAvgOrderByAggregateInput = {
    wgs84Lat?: SortOrder
    wgs84Lon?: SortOrder
  }

  export type PharmacyMaxOrderByAggregateInput = {
    hpid?: SortOrder
    dutyAddr?: SortOrder
    dutyMapimg?: SortOrder
    dutyName?: SortOrder
    dutyTel1?: SortOrder
    dutyTime1c?: SortOrder
    dutyTime1s?: SortOrder
    dutyTime2c?: SortOrder
    dutyTime2s?: SortOrder
    dutyTime3c?: SortOrder
    dutyTime3s?: SortOrder
    dutyTime4c?: SortOrder
    dutyTime4s?: SortOrder
    dutyTime5c?: SortOrder
    dutyTime5s?: SortOrder
    dutyTime6c?: SortOrder
    dutyTime6s?: SortOrder
    dutyTime7c?: SortOrder
    dutyTime7s?: SortOrder
    postCdn1?: SortOrder
    postCdn2?: SortOrder
    wgs84Lat?: SortOrder
    wgs84Lon?: SortOrder
  }

  export type PharmacyMinOrderByAggregateInput = {
    hpid?: SortOrder
    dutyAddr?: SortOrder
    dutyMapimg?: SortOrder
    dutyName?: SortOrder
    dutyTel1?: SortOrder
    dutyTime1c?: SortOrder
    dutyTime1s?: SortOrder
    dutyTime2c?: SortOrder
    dutyTime2s?: SortOrder
    dutyTime3c?: SortOrder
    dutyTime3s?: SortOrder
    dutyTime4c?: SortOrder
    dutyTime4s?: SortOrder
    dutyTime5c?: SortOrder
    dutyTime5s?: SortOrder
    dutyTime6c?: SortOrder
    dutyTime6s?: SortOrder
    dutyTime7c?: SortOrder
    dutyTime7s?: SortOrder
    postCdn1?: SortOrder
    postCdn2?: SortOrder
    wgs84Lat?: SortOrder
    wgs84Lon?: SortOrder
  }

  export type PharmacySumOrderByAggregateInput = {
    wgs84Lat?: SortOrder
    wgs84Lon?: SortOrder
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

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type PostTagCountOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    postId?: SortOrder
  }

  export type PostTagAvgOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    postId?: SortOrder
  }

  export type PostTagMaxOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    postId?: SortOrder
  }

  export type PostTagMinOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    postId?: SortOrder
  }

  export type PostTagSumOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    postId?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    tagName?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    tagName?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    tagName?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HealthCountOrderByAggregateInput = {
    id?: SortOrder
    healthName?: SortOrder
  }

  export type HealthAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HealthMaxOrderByAggregateInput = {
    id?: SortOrder
    healthName?: SortOrder
  }

  export type HealthMinOrderByAggregateInput = {
    id?: SortOrder
    healthName?: SortOrder
  }

  export type HealthSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type PharmacyScalarRelationFilter = {
    is?: PharmacyWhereInput
    isNot?: PharmacyWhereInput
  }

  export type InventoryCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    itemSeq?: SortOrder
    hpid?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    itemSeq?: SortOrder
    hpid?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    itemSeq?: SortOrder
    hpid?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type TagCreateNestedOneWithoutQnaTagsInput = {
    create?: XOR<TagCreateWithoutQnaTagsInput, TagUncheckedCreateWithoutQnaTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutQnaTagsInput
    connect?: TagWhereUniqueInput
  }

  export type QnaCreateNestedOneWithoutQnaTagsInput = {
    create?: XOR<QnaCreateWithoutQnaTagsInput, QnaUncheckedCreateWithoutQnaTagsInput>
    connectOrCreate?: QnaCreateOrConnectWithoutQnaTagsInput
    connect?: QnaWhereUniqueInput
  }

  export type TagUpdateOneRequiredWithoutQnaTagsNestedInput = {
    create?: XOR<TagCreateWithoutQnaTagsInput, TagUncheckedCreateWithoutQnaTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutQnaTagsInput
    upsert?: TagUpsertWithoutQnaTagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutQnaTagsInput, TagUpdateWithoutQnaTagsInput>, TagUncheckedUpdateWithoutQnaTagsInput>
  }

  export type QnaUpdateOneRequiredWithoutQnaTagsNestedInput = {
    create?: XOR<QnaCreateWithoutQnaTagsInput, QnaUncheckedCreateWithoutQnaTagsInput>
    connectOrCreate?: QnaCreateOrConnectWithoutQnaTagsInput
    upsert?: QnaUpsertWithoutQnaTagsInput
    connect?: QnaWhereUniqueInput
    update?: XOR<XOR<QnaUpdateToOneWithWhereWithoutQnaTagsInput, QnaUpdateWithoutQnaTagsInput>, QnaUncheckedUpdateWithoutQnaTagsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutQnasInput = {
    create?: XOR<UserCreateWithoutQnasInput, UserUncheckedCreateWithoutQnasInput>
    connectOrCreate?: UserCreateOrConnectWithoutQnasInput
    connect?: UserWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutQnaInput = {
    create?: XOR<AnswerCreateWithoutQnaInput, AnswerUncheckedCreateWithoutQnaInput> | AnswerCreateWithoutQnaInput[] | AnswerUncheckedCreateWithoutQnaInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQnaInput | AnswerCreateOrConnectWithoutQnaInput[]
    createMany?: AnswerCreateManyQnaInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type QnaTagCreateNestedManyWithoutQnaInput = {
    create?: XOR<QnaTagCreateWithoutQnaInput, QnaTagUncheckedCreateWithoutQnaInput> | QnaTagCreateWithoutQnaInput[] | QnaTagUncheckedCreateWithoutQnaInput[]
    connectOrCreate?: QnaTagCreateOrConnectWithoutQnaInput | QnaTagCreateOrConnectWithoutQnaInput[]
    createMany?: QnaTagCreateManyQnaInputEnvelope
    connect?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQnaInput = {
    create?: XOR<AnswerCreateWithoutQnaInput, AnswerUncheckedCreateWithoutQnaInput> | AnswerCreateWithoutQnaInput[] | AnswerUncheckedCreateWithoutQnaInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQnaInput | AnswerCreateOrConnectWithoutQnaInput[]
    createMany?: AnswerCreateManyQnaInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type QnaTagUncheckedCreateNestedManyWithoutQnaInput = {
    create?: XOR<QnaTagCreateWithoutQnaInput, QnaTagUncheckedCreateWithoutQnaInput> | QnaTagCreateWithoutQnaInput[] | QnaTagUncheckedCreateWithoutQnaInput[]
    connectOrCreate?: QnaTagCreateOrConnectWithoutQnaInput | QnaTagCreateOrConnectWithoutQnaInput[]
    createMany?: QnaTagCreateManyQnaInputEnvelope
    connect?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
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

  export type UserUpdateOneRequiredWithoutQnasNestedInput = {
    create?: XOR<UserCreateWithoutQnasInput, UserUncheckedCreateWithoutQnasInput>
    connectOrCreate?: UserCreateOrConnectWithoutQnasInput
    upsert?: UserUpsertWithoutQnasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQnasInput, UserUpdateWithoutQnasInput>, UserUncheckedUpdateWithoutQnasInput>
  }

  export type AnswerUpdateManyWithoutQnaNestedInput = {
    create?: XOR<AnswerCreateWithoutQnaInput, AnswerUncheckedCreateWithoutQnaInput> | AnswerCreateWithoutQnaInput[] | AnswerUncheckedCreateWithoutQnaInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQnaInput | AnswerCreateOrConnectWithoutQnaInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQnaInput | AnswerUpsertWithWhereUniqueWithoutQnaInput[]
    createMany?: AnswerCreateManyQnaInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQnaInput | AnswerUpdateWithWhereUniqueWithoutQnaInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQnaInput | AnswerUpdateManyWithWhereWithoutQnaInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QnaTagUpdateManyWithoutQnaNestedInput = {
    create?: XOR<QnaTagCreateWithoutQnaInput, QnaTagUncheckedCreateWithoutQnaInput> | QnaTagCreateWithoutQnaInput[] | QnaTagUncheckedCreateWithoutQnaInput[]
    connectOrCreate?: QnaTagCreateOrConnectWithoutQnaInput | QnaTagCreateOrConnectWithoutQnaInput[]
    upsert?: QnaTagUpsertWithWhereUniqueWithoutQnaInput | QnaTagUpsertWithWhereUniqueWithoutQnaInput[]
    createMany?: QnaTagCreateManyQnaInputEnvelope
    set?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
    disconnect?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
    delete?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
    connect?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
    update?: QnaTagUpdateWithWhereUniqueWithoutQnaInput | QnaTagUpdateWithWhereUniqueWithoutQnaInput[]
    updateMany?: QnaTagUpdateManyWithWhereWithoutQnaInput | QnaTagUpdateManyWithWhereWithoutQnaInput[]
    deleteMany?: QnaTagScalarWhereInput | QnaTagScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQnaNestedInput = {
    create?: XOR<AnswerCreateWithoutQnaInput, AnswerUncheckedCreateWithoutQnaInput> | AnswerCreateWithoutQnaInput[] | AnswerUncheckedCreateWithoutQnaInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQnaInput | AnswerCreateOrConnectWithoutQnaInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQnaInput | AnswerUpsertWithWhereUniqueWithoutQnaInput[]
    createMany?: AnswerCreateManyQnaInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQnaInput | AnswerUpdateWithWhereUniqueWithoutQnaInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQnaInput | AnswerUpdateManyWithWhereWithoutQnaInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QnaTagUncheckedUpdateManyWithoutQnaNestedInput = {
    create?: XOR<QnaTagCreateWithoutQnaInput, QnaTagUncheckedCreateWithoutQnaInput> | QnaTagCreateWithoutQnaInput[] | QnaTagUncheckedCreateWithoutQnaInput[]
    connectOrCreate?: QnaTagCreateOrConnectWithoutQnaInput | QnaTagCreateOrConnectWithoutQnaInput[]
    upsert?: QnaTagUpsertWithWhereUniqueWithoutQnaInput | QnaTagUpsertWithWhereUniqueWithoutQnaInput[]
    createMany?: QnaTagCreateManyQnaInputEnvelope
    set?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
    disconnect?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
    delete?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
    connect?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
    update?: QnaTagUpdateWithWhereUniqueWithoutQnaInput | QnaTagUpdateWithWhereUniqueWithoutQnaInput[]
    updateMany?: QnaTagUpdateManyWithWhereWithoutQnaInput | QnaTagUpdateManyWithWhereWithoutQnaInput[]
    deleteMany?: QnaTagScalarWhereInput | QnaTagScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserMedisInput = {
    create?: XOR<UserCreateWithoutUserMedisInput, UserUncheckedCreateWithoutUserMedisInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserMedisInput
    connect?: UserWhereUniqueInput
  }

  export type MedicineCreateNestedOneWithoutUserMedisInput = {
    create?: XOR<MedicineCreateWithoutUserMedisInput, MedicineUncheckedCreateWithoutUserMedisInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutUserMedisInput
    connect?: MedicineWhereUniqueInput
  }

  export type MediTimeCreateNestedManyWithoutUserMediInput = {
    create?: XOR<MediTimeCreateWithoutUserMediInput, MediTimeUncheckedCreateWithoutUserMediInput> | MediTimeCreateWithoutUserMediInput[] | MediTimeUncheckedCreateWithoutUserMediInput[]
    connectOrCreate?: MediTimeCreateOrConnectWithoutUserMediInput | MediTimeCreateOrConnectWithoutUserMediInput[]
    createMany?: MediTimeCreateManyUserMediInputEnvelope
    connect?: MediTimeWhereUniqueInput | MediTimeWhereUniqueInput[]
  }

  export type MediTimeUncheckedCreateNestedManyWithoutUserMediInput = {
    create?: XOR<MediTimeCreateWithoutUserMediInput, MediTimeUncheckedCreateWithoutUserMediInput> | MediTimeCreateWithoutUserMediInput[] | MediTimeUncheckedCreateWithoutUserMediInput[]
    connectOrCreate?: MediTimeCreateOrConnectWithoutUserMediInput | MediTimeCreateOrConnectWithoutUserMediInput[]
    createMany?: MediTimeCreateManyUserMediInputEnvelope
    connect?: MediTimeWhereUniqueInput | MediTimeWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutUserMedisNestedInput = {
    create?: XOR<UserCreateWithoutUserMedisInput, UserUncheckedCreateWithoutUserMedisInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserMedisInput
    upsert?: UserUpsertWithoutUserMedisInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserMedisInput, UserUpdateWithoutUserMedisInput>, UserUncheckedUpdateWithoutUserMedisInput>
  }

  export type MedicineUpdateOneRequiredWithoutUserMedisNestedInput = {
    create?: XOR<MedicineCreateWithoutUserMedisInput, MedicineUncheckedCreateWithoutUserMedisInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutUserMedisInput
    upsert?: MedicineUpsertWithoutUserMedisInput
    connect?: MedicineWhereUniqueInput
    update?: XOR<XOR<MedicineUpdateToOneWithWhereWithoutUserMedisInput, MedicineUpdateWithoutUserMedisInput>, MedicineUncheckedUpdateWithoutUserMedisInput>
  }

  export type MediTimeUpdateManyWithoutUserMediNestedInput = {
    create?: XOR<MediTimeCreateWithoutUserMediInput, MediTimeUncheckedCreateWithoutUserMediInput> | MediTimeCreateWithoutUserMediInput[] | MediTimeUncheckedCreateWithoutUserMediInput[]
    connectOrCreate?: MediTimeCreateOrConnectWithoutUserMediInput | MediTimeCreateOrConnectWithoutUserMediInput[]
    upsert?: MediTimeUpsertWithWhereUniqueWithoutUserMediInput | MediTimeUpsertWithWhereUniqueWithoutUserMediInput[]
    createMany?: MediTimeCreateManyUserMediInputEnvelope
    set?: MediTimeWhereUniqueInput | MediTimeWhereUniqueInput[]
    disconnect?: MediTimeWhereUniqueInput | MediTimeWhereUniqueInput[]
    delete?: MediTimeWhereUniqueInput | MediTimeWhereUniqueInput[]
    connect?: MediTimeWhereUniqueInput | MediTimeWhereUniqueInput[]
    update?: MediTimeUpdateWithWhereUniqueWithoutUserMediInput | MediTimeUpdateWithWhereUniqueWithoutUserMediInput[]
    updateMany?: MediTimeUpdateManyWithWhereWithoutUserMediInput | MediTimeUpdateManyWithWhereWithoutUserMediInput[]
    deleteMany?: MediTimeScalarWhereInput | MediTimeScalarWhereInput[]
  }

  export type MediTimeUncheckedUpdateManyWithoutUserMediNestedInput = {
    create?: XOR<MediTimeCreateWithoutUserMediInput, MediTimeUncheckedCreateWithoutUserMediInput> | MediTimeCreateWithoutUserMediInput[] | MediTimeUncheckedCreateWithoutUserMediInput[]
    connectOrCreate?: MediTimeCreateOrConnectWithoutUserMediInput | MediTimeCreateOrConnectWithoutUserMediInput[]
    upsert?: MediTimeUpsertWithWhereUniqueWithoutUserMediInput | MediTimeUpsertWithWhereUniqueWithoutUserMediInput[]
    createMany?: MediTimeCreateManyUserMediInputEnvelope
    set?: MediTimeWhereUniqueInput | MediTimeWhereUniqueInput[]
    disconnect?: MediTimeWhereUniqueInput | MediTimeWhereUniqueInput[]
    delete?: MediTimeWhereUniqueInput | MediTimeWhereUniqueInput[]
    connect?: MediTimeWhereUniqueInput | MediTimeWhereUniqueInput[]
    update?: MediTimeUpdateWithWhereUniqueWithoutUserMediInput | MediTimeUpdateWithWhereUniqueWithoutUserMediInput[]
    updateMany?: MediTimeUpdateManyWithWhereWithoutUserMediInput | MediTimeUpdateManyWithWhereWithoutUserMediInput[]
    deleteMany?: MediTimeScalarWhereInput | MediTimeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserHealthInput = {
    create?: XOR<UserCreateWithoutUserHealthInput, UserUncheckedCreateWithoutUserHealthInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserHealthInput
    connect?: UserWhereUniqueInput
  }

  export type HealthCreateNestedOneWithoutUserHealthInput = {
    create?: XOR<HealthCreateWithoutUserHealthInput, HealthUncheckedCreateWithoutUserHealthInput>
    connectOrCreate?: HealthCreateOrConnectWithoutUserHealthInput
    connect?: HealthWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserHealthNestedInput = {
    create?: XOR<UserCreateWithoutUserHealthInput, UserUncheckedCreateWithoutUserHealthInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserHealthInput
    upsert?: UserUpsertWithoutUserHealthInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserHealthInput, UserUpdateWithoutUserHealthInput>, UserUncheckedUpdateWithoutUserHealthInput>
  }

  export type HealthUpdateOneRequiredWithoutUserHealthNestedInput = {
    create?: XOR<HealthCreateWithoutUserHealthInput, HealthUncheckedCreateWithoutUserHealthInput>
    connectOrCreate?: HealthCreateOrConnectWithoutUserHealthInput
    upsert?: HealthUpsertWithoutUserHealthInput
    connect?: HealthWhereUniqueInput
    update?: XOR<XOR<HealthUpdateToOneWithWhereWithoutUserHealthInput, HealthUpdateWithoutUserHealthInput>, HealthUncheckedUpdateWithoutUserHealthInput>
  }

  export type UserMediCreateNestedManyWithoutMedicineInput = {
    create?: XOR<UserMediCreateWithoutMedicineInput, UserMediUncheckedCreateWithoutMedicineInput> | UserMediCreateWithoutMedicineInput[] | UserMediUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: UserMediCreateOrConnectWithoutMedicineInput | UserMediCreateOrConnectWithoutMedicineInput[]
    createMany?: UserMediCreateManyMedicineInputEnvelope
    connect?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
  }

  export type InventoryCreateNestedManyWithoutMedicineInput = {
    create?: XOR<InventoryCreateWithoutMedicineInput, InventoryUncheckedCreateWithoutMedicineInput> | InventoryCreateWithoutMedicineInput[] | InventoryUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutMedicineInput | InventoryCreateOrConnectWithoutMedicineInput[]
    createMany?: InventoryCreateManyMedicineInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type UserMediUncheckedCreateNestedManyWithoutMedicineInput = {
    create?: XOR<UserMediCreateWithoutMedicineInput, UserMediUncheckedCreateWithoutMedicineInput> | UserMediCreateWithoutMedicineInput[] | UserMediUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: UserMediCreateOrConnectWithoutMedicineInput | UserMediCreateOrConnectWithoutMedicineInput[]
    createMany?: UserMediCreateManyMedicineInputEnvelope
    connect?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutMedicineInput = {
    create?: XOR<InventoryCreateWithoutMedicineInput, InventoryUncheckedCreateWithoutMedicineInput> | InventoryCreateWithoutMedicineInput[] | InventoryUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutMedicineInput | InventoryCreateOrConnectWithoutMedicineInput[]
    createMany?: InventoryCreateManyMedicineInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserMediUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<UserMediCreateWithoutMedicineInput, UserMediUncheckedCreateWithoutMedicineInput> | UserMediCreateWithoutMedicineInput[] | UserMediUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: UserMediCreateOrConnectWithoutMedicineInput | UserMediCreateOrConnectWithoutMedicineInput[]
    upsert?: UserMediUpsertWithWhereUniqueWithoutMedicineInput | UserMediUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: UserMediCreateManyMedicineInputEnvelope
    set?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
    disconnect?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
    delete?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
    connect?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
    update?: UserMediUpdateWithWhereUniqueWithoutMedicineInput | UserMediUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: UserMediUpdateManyWithWhereWithoutMedicineInput | UserMediUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: UserMediScalarWhereInput | UserMediScalarWhereInput[]
  }

  export type InventoryUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<InventoryCreateWithoutMedicineInput, InventoryUncheckedCreateWithoutMedicineInput> | InventoryCreateWithoutMedicineInput[] | InventoryUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutMedicineInput | InventoryCreateOrConnectWithoutMedicineInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutMedicineInput | InventoryUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: InventoryCreateManyMedicineInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutMedicineInput | InventoryUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutMedicineInput | InventoryUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type UserMediUncheckedUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<UserMediCreateWithoutMedicineInput, UserMediUncheckedCreateWithoutMedicineInput> | UserMediCreateWithoutMedicineInput[] | UserMediUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: UserMediCreateOrConnectWithoutMedicineInput | UserMediCreateOrConnectWithoutMedicineInput[]
    upsert?: UserMediUpsertWithWhereUniqueWithoutMedicineInput | UserMediUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: UserMediCreateManyMedicineInputEnvelope
    set?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
    disconnect?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
    delete?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
    connect?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
    update?: UserMediUpdateWithWhereUniqueWithoutMedicineInput | UserMediUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: UserMediUpdateManyWithWhereWithoutMedicineInput | UserMediUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: UserMediScalarWhereInput | UserMediScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<InventoryCreateWithoutMedicineInput, InventoryUncheckedCreateWithoutMedicineInput> | InventoryCreateWithoutMedicineInput[] | InventoryUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutMedicineInput | InventoryCreateOrConnectWithoutMedicineInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutMedicineInput | InventoryUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: InventoryCreateManyMedicineInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutMedicineInput | InventoryUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutMedicineInput | InventoryUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type UserMediCreateNestedOneWithoutMediTimesInput = {
    create?: XOR<UserMediCreateWithoutMediTimesInput, UserMediUncheckedCreateWithoutMediTimesInput>
    connectOrCreate?: UserMediCreateOrConnectWithoutMediTimesInput
    connect?: UserMediWhereUniqueInput
  }

  export type UserMediUpdateOneRequiredWithoutMediTimesNestedInput = {
    create?: XOR<UserMediCreateWithoutMediTimesInput, UserMediUncheckedCreateWithoutMediTimesInput>
    connectOrCreate?: UserMediCreateOrConnectWithoutMediTimesInput
    upsert?: UserMediUpsertWithoutMediTimesInput
    connect?: UserMediWhereUniqueInput
    update?: XOR<XOR<UserMediUpdateToOneWithWhereWithoutMediTimesInput, UserMediUpdateWithoutMediTimesInput>, UserMediUncheckedUpdateWithoutMediTimesInput>
  }

  export type PharmacyCreateNestedOneWithoutUsersInput = {
    create?: XOR<PharmacyCreateWithoutUsersInput, PharmacyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutUsersInput
    connect?: PharmacyWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type QnaCreateNestedManyWithoutUserInput = {
    create?: XOR<QnaCreateWithoutUserInput, QnaUncheckedCreateWithoutUserInput> | QnaCreateWithoutUserInput[] | QnaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QnaCreateOrConnectWithoutUserInput | QnaCreateOrConnectWithoutUserInput[]
    createMany?: QnaCreateManyUserInputEnvelope
    connect?: QnaWhereUniqueInput | QnaWhereUniqueInput[]
  }

  export type AnswerCreateNestedManyWithoutUserInput = {
    create?: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput> | AnswerCreateWithoutUserInput[] | AnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserInput | AnswerCreateOrConnectWithoutUserInput[]
    createMany?: AnswerCreateManyUserInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserMediCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMediCreateWithoutUserInput, UserMediUncheckedCreateWithoutUserInput> | UserMediCreateWithoutUserInput[] | UserMediUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMediCreateOrConnectWithoutUserInput | UserMediCreateOrConnectWithoutUserInput[]
    createMany?: UserMediCreateManyUserInputEnvelope
    connect?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
  }

  export type UserHealthCreateNestedManyWithoutUserInput = {
    create?: XOR<UserHealthCreateWithoutUserInput, UserHealthUncheckedCreateWithoutUserInput> | UserHealthCreateWithoutUserInput[] | UserHealthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHealthCreateOrConnectWithoutUserInput | UserHealthCreateOrConnectWithoutUserInput[]
    createMany?: UserHealthCreateManyUserInputEnvelope
    connect?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type QnaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QnaCreateWithoutUserInput, QnaUncheckedCreateWithoutUserInput> | QnaCreateWithoutUserInput[] | QnaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QnaCreateOrConnectWithoutUserInput | QnaCreateOrConnectWithoutUserInput[]
    createMany?: QnaCreateManyUserInputEnvelope
    connect?: QnaWhereUniqueInput | QnaWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput> | AnswerCreateWithoutUserInput[] | AnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserInput | AnswerCreateOrConnectWithoutUserInput[]
    createMany?: AnswerCreateManyUserInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserMediUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMediCreateWithoutUserInput, UserMediUncheckedCreateWithoutUserInput> | UserMediCreateWithoutUserInput[] | UserMediUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMediCreateOrConnectWithoutUserInput | UserMediCreateOrConnectWithoutUserInput[]
    createMany?: UserMediCreateManyUserInputEnvelope
    connect?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
  }

  export type UserHealthUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserHealthCreateWithoutUserInput, UserHealthUncheckedCreateWithoutUserInput> | UserHealthCreateWithoutUserInput[] | UserHealthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHealthCreateOrConnectWithoutUserInput | UserHealthCreateOrConnectWithoutUserInput[]
    createMany?: UserHealthCreateManyUserInputEnvelope
    connect?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PharmacyUpdateOneWithoutUsersNestedInput = {
    create?: XOR<PharmacyCreateWithoutUsersInput, PharmacyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutUsersInput
    upsert?: PharmacyUpsertWithoutUsersInput
    disconnect?: PharmacyWhereInput | boolean
    delete?: PharmacyWhereInput | boolean
    connect?: PharmacyWhereUniqueInput
    update?: XOR<XOR<PharmacyUpdateToOneWithWhereWithoutUsersInput, PharmacyUpdateWithoutUsersInput>, PharmacyUncheckedUpdateWithoutUsersInput>
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type QnaUpdateManyWithoutUserNestedInput = {
    create?: XOR<QnaCreateWithoutUserInput, QnaUncheckedCreateWithoutUserInput> | QnaCreateWithoutUserInput[] | QnaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QnaCreateOrConnectWithoutUserInput | QnaCreateOrConnectWithoutUserInput[]
    upsert?: QnaUpsertWithWhereUniqueWithoutUserInput | QnaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QnaCreateManyUserInputEnvelope
    set?: QnaWhereUniqueInput | QnaWhereUniqueInput[]
    disconnect?: QnaWhereUniqueInput | QnaWhereUniqueInput[]
    delete?: QnaWhereUniqueInput | QnaWhereUniqueInput[]
    connect?: QnaWhereUniqueInput | QnaWhereUniqueInput[]
    update?: QnaUpdateWithWhereUniqueWithoutUserInput | QnaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QnaUpdateManyWithWhereWithoutUserInput | QnaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QnaScalarWhereInput | QnaScalarWhereInput[]
  }

  export type AnswerUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput> | AnswerCreateWithoutUserInput[] | AnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserInput | AnswerCreateOrConnectWithoutUserInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutUserInput | AnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnswerCreateManyUserInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutUserInput | AnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutUserInput | AnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserMediUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMediCreateWithoutUserInput, UserMediUncheckedCreateWithoutUserInput> | UserMediCreateWithoutUserInput[] | UserMediUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMediCreateOrConnectWithoutUserInput | UserMediCreateOrConnectWithoutUserInput[]
    upsert?: UserMediUpsertWithWhereUniqueWithoutUserInput | UserMediUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMediCreateManyUserInputEnvelope
    set?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
    disconnect?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
    delete?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
    connect?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
    update?: UserMediUpdateWithWhereUniqueWithoutUserInput | UserMediUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMediUpdateManyWithWhereWithoutUserInput | UserMediUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMediScalarWhereInput | UserMediScalarWhereInput[]
  }

  export type UserHealthUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserHealthCreateWithoutUserInput, UserHealthUncheckedCreateWithoutUserInput> | UserHealthCreateWithoutUserInput[] | UserHealthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHealthCreateOrConnectWithoutUserInput | UserHealthCreateOrConnectWithoutUserInput[]
    upsert?: UserHealthUpsertWithWhereUniqueWithoutUserInput | UserHealthUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserHealthCreateManyUserInputEnvelope
    set?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
    disconnect?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
    delete?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
    connect?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
    update?: UserHealthUpdateWithWhereUniqueWithoutUserInput | UserHealthUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserHealthUpdateManyWithWhereWithoutUserInput | UserHealthUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserHealthScalarWhereInput | UserHealthScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type QnaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QnaCreateWithoutUserInput, QnaUncheckedCreateWithoutUserInput> | QnaCreateWithoutUserInput[] | QnaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QnaCreateOrConnectWithoutUserInput | QnaCreateOrConnectWithoutUserInput[]
    upsert?: QnaUpsertWithWhereUniqueWithoutUserInput | QnaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QnaCreateManyUserInputEnvelope
    set?: QnaWhereUniqueInput | QnaWhereUniqueInput[]
    disconnect?: QnaWhereUniqueInput | QnaWhereUniqueInput[]
    delete?: QnaWhereUniqueInput | QnaWhereUniqueInput[]
    connect?: QnaWhereUniqueInput | QnaWhereUniqueInput[]
    update?: QnaUpdateWithWhereUniqueWithoutUserInput | QnaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QnaUpdateManyWithWhereWithoutUserInput | QnaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QnaScalarWhereInput | QnaScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput> | AnswerCreateWithoutUserInput[] | AnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserInput | AnswerCreateOrConnectWithoutUserInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutUserInput | AnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnswerCreateManyUserInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutUserInput | AnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutUserInput | AnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserMediUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMediCreateWithoutUserInput, UserMediUncheckedCreateWithoutUserInput> | UserMediCreateWithoutUserInput[] | UserMediUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMediCreateOrConnectWithoutUserInput | UserMediCreateOrConnectWithoutUserInput[]
    upsert?: UserMediUpsertWithWhereUniqueWithoutUserInput | UserMediUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMediCreateManyUserInputEnvelope
    set?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
    disconnect?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
    delete?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
    connect?: UserMediWhereUniqueInput | UserMediWhereUniqueInput[]
    update?: UserMediUpdateWithWhereUniqueWithoutUserInput | UserMediUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMediUpdateManyWithWhereWithoutUserInput | UserMediUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMediScalarWhereInput | UserMediScalarWhereInput[]
  }

  export type UserHealthUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserHealthCreateWithoutUserInput, UserHealthUncheckedCreateWithoutUserInput> | UserHealthCreateWithoutUserInput[] | UserHealthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHealthCreateOrConnectWithoutUserInput | UserHealthCreateOrConnectWithoutUserInput[]
    upsert?: UserHealthUpsertWithWhereUniqueWithoutUserInput | UserHealthUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserHealthCreateManyUserInputEnvelope
    set?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
    disconnect?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
    delete?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
    connect?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
    update?: UserHealthUpdateWithWhereUniqueWithoutUserInput | UserHealthUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserHealthUpdateManyWithWhereWithoutUserInput | UserHealthUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserHealthScalarWhereInput | UserHealthScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostTagCreateNestedManyWithoutPostInput = {
    create?: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput> | PostTagCreateWithoutPostInput[] | PostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
    createMany?: PostTagCreateManyPostInputEnvelope
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostTagUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput> | PostTagCreateWithoutPostInput[] | PostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
    createMany?: PostTagCreateManyPostInputEnvelope
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostTagUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput> | PostTagCreateWithoutPostInput[] | PostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
    upsert?: PostTagUpsertWithWhereUniqueWithoutPostInput | PostTagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostTagCreateManyPostInputEnvelope
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    update?: PostTagUpdateWithWhereUniqueWithoutPostInput | PostTagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostTagUpdateManyWithWhereWithoutPostInput | PostTagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostTagUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput> | PostTagCreateWithoutPostInput[] | PostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
    upsert?: PostTagUpsertWithWhereUniqueWithoutPostInput | PostTagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostTagCreateManyPostInputEnvelope
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    update?: PostTagUpdateWithWhereUniqueWithoutPostInput | PostTagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostTagUpdateManyWithWhereWithoutPostInput | PostTagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAnswersInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    connect?: UserWhereUniqueInput
  }

  export type QnaCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QnaCreateWithoutAnswersInput, QnaUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QnaCreateOrConnectWithoutAnswersInput
    connect?: QnaWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    upsert?: UserUpsertWithoutAnswersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnswersInput, UserUpdateWithoutAnswersInput>, UserUncheckedUpdateWithoutAnswersInput>
  }

  export type QnaUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QnaCreateWithoutAnswersInput, QnaUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QnaCreateOrConnectWithoutAnswersInput
    upsert?: QnaUpsertWithoutAnswersInput
    connect?: QnaWhereUniqueInput
    update?: XOR<XOR<QnaUpdateToOneWithWhereWithoutAnswersInput, QnaUpdateWithoutAnswersInput>, QnaUncheckedUpdateWithoutAnswersInput>
  }

  export type UserCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<UserCreateWithoutPharmacyInput, UserUncheckedCreateWithoutPharmacyInput> | UserCreateWithoutPharmacyInput[] | UserUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPharmacyInput | UserCreateOrConnectWithoutPharmacyInput[]
    createMany?: UserCreateManyPharmacyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type InventoryCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<InventoryCreateWithoutPharmacyInput, InventoryUncheckedCreateWithoutPharmacyInput> | InventoryCreateWithoutPharmacyInput[] | InventoryUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutPharmacyInput | InventoryCreateOrConnectWithoutPharmacyInput[]
    createMany?: InventoryCreateManyPharmacyInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<UserCreateWithoutPharmacyInput, UserUncheckedCreateWithoutPharmacyInput> | UserCreateWithoutPharmacyInput[] | UserUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPharmacyInput | UserCreateOrConnectWithoutPharmacyInput[]
    createMany?: UserCreateManyPharmacyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<InventoryCreateWithoutPharmacyInput, InventoryUncheckedCreateWithoutPharmacyInput> | InventoryCreateWithoutPharmacyInput[] | InventoryUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutPharmacyInput | InventoryCreateOrConnectWithoutPharmacyInput[]
    createMany?: InventoryCreateManyPharmacyInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<UserCreateWithoutPharmacyInput, UserUncheckedCreateWithoutPharmacyInput> | UserCreateWithoutPharmacyInput[] | UserUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPharmacyInput | UserCreateOrConnectWithoutPharmacyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPharmacyInput | UserUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: UserCreateManyPharmacyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPharmacyInput | UserUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPharmacyInput | UserUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type InventoryUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<InventoryCreateWithoutPharmacyInput, InventoryUncheckedCreateWithoutPharmacyInput> | InventoryCreateWithoutPharmacyInput[] | InventoryUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutPharmacyInput | InventoryCreateOrConnectWithoutPharmacyInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutPharmacyInput | InventoryUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: InventoryCreateManyPharmacyInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutPharmacyInput | InventoryUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutPharmacyInput | InventoryUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<UserCreateWithoutPharmacyInput, UserUncheckedCreateWithoutPharmacyInput> | UserCreateWithoutPharmacyInput[] | UserUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPharmacyInput | UserCreateOrConnectWithoutPharmacyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPharmacyInput | UserUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: UserCreateManyPharmacyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPharmacyInput | UserUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPharmacyInput | UserUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<InventoryCreateWithoutPharmacyInput, InventoryUncheckedCreateWithoutPharmacyInput> | InventoryCreateWithoutPharmacyInput[] | InventoryUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutPharmacyInput | InventoryCreateOrConnectWithoutPharmacyInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutPharmacyInput | InventoryUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: InventoryCreateManyPharmacyInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutPharmacyInput | InventoryUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutPharmacyInput | InventoryUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type TagCreateNestedOneWithoutPostTagsInput = {
    create?: XOR<TagCreateWithoutPostTagsInput, TagUncheckedCreateWithoutPostTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPostTagsInput
    connect?: TagWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutPostTagsInput = {
    create?: XOR<PostCreateWithoutPostTagsInput, PostUncheckedCreateWithoutPostTagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostTagsInput
    connect?: PostWhereUniqueInput
  }

  export type TagUpdateOneRequiredWithoutPostTagsNestedInput = {
    create?: XOR<TagCreateWithoutPostTagsInput, TagUncheckedCreateWithoutPostTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPostTagsInput
    upsert?: TagUpsertWithoutPostTagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutPostTagsInput, TagUpdateWithoutPostTagsInput>, TagUncheckedUpdateWithoutPostTagsInput>
  }

  export type PostUpdateOneRequiredWithoutPostTagsNestedInput = {
    create?: XOR<PostCreateWithoutPostTagsInput, PostUncheckedCreateWithoutPostTagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostTagsInput
    upsert?: PostUpsertWithoutPostTagsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPostTagsInput, PostUpdateWithoutPostTagsInput>, PostUncheckedUpdateWithoutPostTagsInput>
  }

  export type PostTagCreateNestedManyWithoutTagInput = {
    create?: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput> | PostTagCreateWithoutTagInput[] | PostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
    createMany?: PostTagCreateManyTagInputEnvelope
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
  }

  export type QnaTagCreateNestedManyWithoutTagInput = {
    create?: XOR<QnaTagCreateWithoutTagInput, QnaTagUncheckedCreateWithoutTagInput> | QnaTagCreateWithoutTagInput[] | QnaTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: QnaTagCreateOrConnectWithoutTagInput | QnaTagCreateOrConnectWithoutTagInput[]
    createMany?: QnaTagCreateManyTagInputEnvelope
    connect?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
  }

  export type PostTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput> | PostTagCreateWithoutTagInput[] | PostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
    createMany?: PostTagCreateManyTagInputEnvelope
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
  }

  export type QnaTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<QnaTagCreateWithoutTagInput, QnaTagUncheckedCreateWithoutTagInput> | QnaTagCreateWithoutTagInput[] | QnaTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: QnaTagCreateOrConnectWithoutTagInput | QnaTagCreateOrConnectWithoutTagInput[]
    createMany?: QnaTagCreateManyTagInputEnvelope
    connect?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
  }

  export type PostTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput> | PostTagCreateWithoutTagInput[] | PostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
    upsert?: PostTagUpsertWithWhereUniqueWithoutTagInput | PostTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PostTagCreateManyTagInputEnvelope
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    update?: PostTagUpdateWithWhereUniqueWithoutTagInput | PostTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PostTagUpdateManyWithWhereWithoutTagInput | PostTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
  }

  export type QnaTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<QnaTagCreateWithoutTagInput, QnaTagUncheckedCreateWithoutTagInput> | QnaTagCreateWithoutTagInput[] | QnaTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: QnaTagCreateOrConnectWithoutTagInput | QnaTagCreateOrConnectWithoutTagInput[]
    upsert?: QnaTagUpsertWithWhereUniqueWithoutTagInput | QnaTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: QnaTagCreateManyTagInputEnvelope
    set?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
    disconnect?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
    delete?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
    connect?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
    update?: QnaTagUpdateWithWhereUniqueWithoutTagInput | QnaTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: QnaTagUpdateManyWithWhereWithoutTagInput | QnaTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: QnaTagScalarWhereInput | QnaTagScalarWhereInput[]
  }

  export type PostTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput> | PostTagCreateWithoutTagInput[] | PostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
    upsert?: PostTagUpsertWithWhereUniqueWithoutTagInput | PostTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PostTagCreateManyTagInputEnvelope
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    update?: PostTagUpdateWithWhereUniqueWithoutTagInput | PostTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PostTagUpdateManyWithWhereWithoutTagInput | PostTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
  }

  export type QnaTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<QnaTagCreateWithoutTagInput, QnaTagUncheckedCreateWithoutTagInput> | QnaTagCreateWithoutTagInput[] | QnaTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: QnaTagCreateOrConnectWithoutTagInput | QnaTagCreateOrConnectWithoutTagInput[]
    upsert?: QnaTagUpsertWithWhereUniqueWithoutTagInput | QnaTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: QnaTagCreateManyTagInputEnvelope
    set?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
    disconnect?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
    delete?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
    connect?: QnaTagWhereUniqueInput | QnaTagWhereUniqueInput[]
    update?: QnaTagUpdateWithWhereUniqueWithoutTagInput | QnaTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: QnaTagUpdateManyWithWhereWithoutTagInput | QnaTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: QnaTagScalarWhereInput | QnaTagScalarWhereInput[]
  }

  export type UserHealthCreateNestedManyWithoutHealthInput = {
    create?: XOR<UserHealthCreateWithoutHealthInput, UserHealthUncheckedCreateWithoutHealthInput> | UserHealthCreateWithoutHealthInput[] | UserHealthUncheckedCreateWithoutHealthInput[]
    connectOrCreate?: UserHealthCreateOrConnectWithoutHealthInput | UserHealthCreateOrConnectWithoutHealthInput[]
    createMany?: UserHealthCreateManyHealthInputEnvelope
    connect?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
  }

  export type UserHealthUncheckedCreateNestedManyWithoutHealthInput = {
    create?: XOR<UserHealthCreateWithoutHealthInput, UserHealthUncheckedCreateWithoutHealthInput> | UserHealthCreateWithoutHealthInput[] | UserHealthUncheckedCreateWithoutHealthInput[]
    connectOrCreate?: UserHealthCreateOrConnectWithoutHealthInput | UserHealthCreateOrConnectWithoutHealthInput[]
    createMany?: UserHealthCreateManyHealthInputEnvelope
    connect?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
  }

  export type UserHealthUpdateManyWithoutHealthNestedInput = {
    create?: XOR<UserHealthCreateWithoutHealthInput, UserHealthUncheckedCreateWithoutHealthInput> | UserHealthCreateWithoutHealthInput[] | UserHealthUncheckedCreateWithoutHealthInput[]
    connectOrCreate?: UserHealthCreateOrConnectWithoutHealthInput | UserHealthCreateOrConnectWithoutHealthInput[]
    upsert?: UserHealthUpsertWithWhereUniqueWithoutHealthInput | UserHealthUpsertWithWhereUniqueWithoutHealthInput[]
    createMany?: UserHealthCreateManyHealthInputEnvelope
    set?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
    disconnect?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
    delete?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
    connect?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
    update?: UserHealthUpdateWithWhereUniqueWithoutHealthInput | UserHealthUpdateWithWhereUniqueWithoutHealthInput[]
    updateMany?: UserHealthUpdateManyWithWhereWithoutHealthInput | UserHealthUpdateManyWithWhereWithoutHealthInput[]
    deleteMany?: UserHealthScalarWhereInput | UserHealthScalarWhereInput[]
  }

  export type UserHealthUncheckedUpdateManyWithoutHealthNestedInput = {
    create?: XOR<UserHealthCreateWithoutHealthInput, UserHealthUncheckedCreateWithoutHealthInput> | UserHealthCreateWithoutHealthInput[] | UserHealthUncheckedCreateWithoutHealthInput[]
    connectOrCreate?: UserHealthCreateOrConnectWithoutHealthInput | UserHealthCreateOrConnectWithoutHealthInput[]
    upsert?: UserHealthUpsertWithWhereUniqueWithoutHealthInput | UserHealthUpsertWithWhereUniqueWithoutHealthInput[]
    createMany?: UserHealthCreateManyHealthInputEnvelope
    set?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
    disconnect?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
    delete?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
    connect?: UserHealthWhereUniqueInput | UserHealthWhereUniqueInput[]
    update?: UserHealthUpdateWithWhereUniqueWithoutHealthInput | UserHealthUpdateWithWhereUniqueWithoutHealthInput[]
    updateMany?: UserHealthUpdateManyWithWhereWithoutHealthInput | UserHealthUpdateManyWithWhereWithoutHealthInput[]
    deleteMany?: UserHealthScalarWhereInput | UserHealthScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type MedicineCreateNestedOneWithoutInventoriesInput = {
    create?: XOR<MedicineCreateWithoutInventoriesInput, MedicineUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutInventoriesInput
    connect?: MedicineWhereUniqueInput
  }

  export type PharmacyCreateNestedOneWithoutInventoriesInput = {
    create?: XOR<PharmacyCreateWithoutInventoriesInput, PharmacyUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutInventoriesInput
    connect?: PharmacyWhereUniqueInput
  }

  export type MedicineUpdateOneRequiredWithoutInventoriesNestedInput = {
    create?: XOR<MedicineCreateWithoutInventoriesInput, MedicineUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutInventoriesInput
    upsert?: MedicineUpsertWithoutInventoriesInput
    connect?: MedicineWhereUniqueInput
    update?: XOR<XOR<MedicineUpdateToOneWithWhereWithoutInventoriesInput, MedicineUpdateWithoutInventoriesInput>, MedicineUncheckedUpdateWithoutInventoriesInput>
  }

  export type PharmacyUpdateOneRequiredWithoutInventoriesNestedInput = {
    create?: XOR<PharmacyCreateWithoutInventoriesInput, PharmacyUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutInventoriesInput
    upsert?: PharmacyUpsertWithoutInventoriesInput
    connect?: PharmacyWhereUniqueInput
    update?: XOR<XOR<PharmacyUpdateToOneWithWhereWithoutInventoriesInput, PharmacyUpdateWithoutInventoriesInput>, PharmacyUncheckedUpdateWithoutInventoriesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TagCreateWithoutQnaTagsInput = {
    tagName: string
    postTags?: PostTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutQnaTagsInput = {
    id?: number
    tagName: string
    postTags?: PostTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutQnaTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutQnaTagsInput, TagUncheckedCreateWithoutQnaTagsInput>
  }

  export type QnaCreateWithoutQnaTagsInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutQnasInput
    answers?: AnswerCreateNestedManyWithoutQnaInput
  }

  export type QnaUncheckedCreateWithoutQnaTagsInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    answers?: AnswerUncheckedCreateNestedManyWithoutQnaInput
  }

  export type QnaCreateOrConnectWithoutQnaTagsInput = {
    where: QnaWhereUniqueInput
    create: XOR<QnaCreateWithoutQnaTagsInput, QnaUncheckedCreateWithoutQnaTagsInput>
  }

  export type TagUpsertWithoutQnaTagsInput = {
    update: XOR<TagUpdateWithoutQnaTagsInput, TagUncheckedUpdateWithoutQnaTagsInput>
    create: XOR<TagCreateWithoutQnaTagsInput, TagUncheckedCreateWithoutQnaTagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutQnaTagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutQnaTagsInput, TagUncheckedUpdateWithoutQnaTagsInput>
  }

  export type TagUpdateWithoutQnaTagsInput = {
    tagName?: StringFieldUpdateOperationsInput | string
    postTags?: PostTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutQnaTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagName?: StringFieldUpdateOperationsInput | string
    postTags?: PostTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type QnaUpsertWithoutQnaTagsInput = {
    update: XOR<QnaUpdateWithoutQnaTagsInput, QnaUncheckedUpdateWithoutQnaTagsInput>
    create: XOR<QnaCreateWithoutQnaTagsInput, QnaUncheckedCreateWithoutQnaTagsInput>
    where?: QnaWhereInput
  }

  export type QnaUpdateToOneWithWhereWithoutQnaTagsInput = {
    where?: QnaWhereInput
    data: XOR<QnaUpdateWithoutQnaTagsInput, QnaUncheckedUpdateWithoutQnaTagsInput>
  }

  export type QnaUpdateWithoutQnaTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutQnasNestedInput
    answers?: AnswerUpdateManyWithoutQnaNestedInput
  }

  export type QnaUncheckedUpdateWithoutQnaTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutQnaNestedInput
  }

  export type UserCreateWithoutQnasInput = {
    id?: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    memberType: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    pharmacy?: PharmacyCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutUserInput
    answers?: AnswerCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    userMedis?: UserMediCreateNestedManyWithoutUserInput
    userHealth?: UserHealthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQnasInput = {
    id?: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    memberType: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    hpid?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    userMedis?: UserMediUncheckedCreateNestedManyWithoutUserInput
    userHealth?: UserHealthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQnasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQnasInput, UserUncheckedCreateWithoutQnasInput>
  }

  export type AnswerCreateWithoutQnaInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    isAccepted?: boolean
    user: UserCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutQnaInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    isAccepted?: boolean
    userId: string
  }

  export type AnswerCreateOrConnectWithoutQnaInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQnaInput, AnswerUncheckedCreateWithoutQnaInput>
  }

  export type AnswerCreateManyQnaInputEnvelope = {
    data: AnswerCreateManyQnaInput | AnswerCreateManyQnaInput[]
    skipDuplicates?: boolean
  }

  export type QnaTagCreateWithoutQnaInput = {
    tag: TagCreateNestedOneWithoutQnaTagsInput
  }

  export type QnaTagUncheckedCreateWithoutQnaInput = {
    id?: number
    tagId: number
  }

  export type QnaTagCreateOrConnectWithoutQnaInput = {
    where: QnaTagWhereUniqueInput
    create: XOR<QnaTagCreateWithoutQnaInput, QnaTagUncheckedCreateWithoutQnaInput>
  }

  export type QnaTagCreateManyQnaInputEnvelope = {
    data: QnaTagCreateManyQnaInput | QnaTagCreateManyQnaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutQnasInput = {
    update: XOR<UserUpdateWithoutQnasInput, UserUncheckedUpdateWithoutQnasInput>
    create: XOR<UserCreateWithoutQnasInput, UserUncheckedCreateWithoutQnasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQnasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQnasInput, UserUncheckedUpdateWithoutQnasInput>
  }

  export type UserUpdateWithoutQnasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pharmacy?: PharmacyUpdateOneWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    answers?: AnswerUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    userMedis?: UserMediUpdateManyWithoutUserNestedInput
    userHealth?: UserHealthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQnasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hpid?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userMedis?: UserMediUncheckedUpdateManyWithoutUserNestedInput
    userHealth?: UserHealthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutQnaInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQnaInput, AnswerUncheckedUpdateWithoutQnaInput>
    create: XOR<AnswerCreateWithoutQnaInput, AnswerUncheckedCreateWithoutQnaInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQnaInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQnaInput, AnswerUncheckedUpdateWithoutQnaInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQnaInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQnaInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: IntFilter<"Answer"> | number
    content?: StringFilter<"Answer"> | string
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Answer"> | Date | string | null
    isAccepted?: BoolFilter<"Answer"> | boolean
    userId?: StringFilter<"Answer"> | string
    qnaId?: IntFilter<"Answer"> | number
  }

  export type QnaTagUpsertWithWhereUniqueWithoutQnaInput = {
    where: QnaTagWhereUniqueInput
    update: XOR<QnaTagUpdateWithoutQnaInput, QnaTagUncheckedUpdateWithoutQnaInput>
    create: XOR<QnaTagCreateWithoutQnaInput, QnaTagUncheckedCreateWithoutQnaInput>
  }

  export type QnaTagUpdateWithWhereUniqueWithoutQnaInput = {
    where: QnaTagWhereUniqueInput
    data: XOR<QnaTagUpdateWithoutQnaInput, QnaTagUncheckedUpdateWithoutQnaInput>
  }

  export type QnaTagUpdateManyWithWhereWithoutQnaInput = {
    where: QnaTagScalarWhereInput
    data: XOR<QnaTagUpdateManyMutationInput, QnaTagUncheckedUpdateManyWithoutQnaInput>
  }

  export type QnaTagScalarWhereInput = {
    AND?: QnaTagScalarWhereInput | QnaTagScalarWhereInput[]
    OR?: QnaTagScalarWhereInput[]
    NOT?: QnaTagScalarWhereInput | QnaTagScalarWhereInput[]
    id?: IntFilter<"QnaTag"> | number
    tagId?: IntFilter<"QnaTag"> | number
    qnaId?: IntFilter<"QnaTag"> | number
  }

  export type UserCreateWithoutUserMedisInput = {
    id?: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    memberType: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    pharmacy?: PharmacyCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutUserInput
    qnas?: QnaCreateNestedManyWithoutUserInput
    answers?: AnswerCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    userHealth?: UserHealthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserMedisInput = {
    id?: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    memberType: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    hpid?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    qnas?: QnaUncheckedCreateNestedManyWithoutUserInput
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    userHealth?: UserHealthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserMedisInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserMedisInput, UserUncheckedCreateWithoutUserMedisInput>
  }

  export type MedicineCreateWithoutUserMedisInput = {
    itemSeq: string
    itemName: string
    entpName?: string | null
    itemPermitDate?: Date | string | null
    etcOtcCode?: string | null
    classNo?: string | null
    chart?: string | null
    barCode?: string | null
    materialName?: string | null
    eeDocId?: string | null
    inventories?: InventoryCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateWithoutUserMedisInput = {
    itemSeq: string
    itemName: string
    entpName?: string | null
    itemPermitDate?: Date | string | null
    etcOtcCode?: string | null
    classNo?: string | null
    chart?: string | null
    barCode?: string | null
    materialName?: string | null
    eeDocId?: string | null
    inventories?: InventoryUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineCreateOrConnectWithoutUserMedisInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutUserMedisInput, MedicineUncheckedCreateWithoutUserMedisInput>
  }

  export type MediTimeCreateWithoutUserMediInput = {
    mediTime: number
  }

  export type MediTimeUncheckedCreateWithoutUserMediInput = {
    id?: number
    mediTime: number
  }

  export type MediTimeCreateOrConnectWithoutUserMediInput = {
    where: MediTimeWhereUniqueInput
    create: XOR<MediTimeCreateWithoutUserMediInput, MediTimeUncheckedCreateWithoutUserMediInput>
  }

  export type MediTimeCreateManyUserMediInputEnvelope = {
    data: MediTimeCreateManyUserMediInput | MediTimeCreateManyUserMediInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUserMedisInput = {
    update: XOR<UserUpdateWithoutUserMedisInput, UserUncheckedUpdateWithoutUserMedisInput>
    create: XOR<UserCreateWithoutUserMedisInput, UserUncheckedCreateWithoutUserMedisInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserMedisInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserMedisInput, UserUncheckedUpdateWithoutUserMedisInput>
  }

  export type UserUpdateWithoutUserMedisInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pharmacy?: PharmacyUpdateOneWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    qnas?: QnaUpdateManyWithoutUserNestedInput
    answers?: AnswerUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    userHealth?: UserHealthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserMedisInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hpid?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    qnas?: QnaUncheckedUpdateManyWithoutUserNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userHealth?: UserHealthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MedicineUpsertWithoutUserMedisInput = {
    update: XOR<MedicineUpdateWithoutUserMedisInput, MedicineUncheckedUpdateWithoutUserMedisInput>
    create: XOR<MedicineCreateWithoutUserMedisInput, MedicineUncheckedCreateWithoutUserMedisInput>
    where?: MedicineWhereInput
  }

  export type MedicineUpdateToOneWithWhereWithoutUserMedisInput = {
    where?: MedicineWhereInput
    data: XOR<MedicineUpdateWithoutUserMedisInput, MedicineUncheckedUpdateWithoutUserMedisInput>
  }

  export type MedicineUpdateWithoutUserMedisInput = {
    itemSeq?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    entpName?: NullableStringFieldUpdateOperationsInput | string | null
    itemPermitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    etcOtcCode?: NullableStringFieldUpdateOperationsInput | string | null
    classNo?: NullableStringFieldUpdateOperationsInput | string | null
    chart?: NullableStringFieldUpdateOperationsInput | string | null
    barCode?: NullableStringFieldUpdateOperationsInput | string | null
    materialName?: NullableStringFieldUpdateOperationsInput | string | null
    eeDocId?: NullableStringFieldUpdateOperationsInput | string | null
    inventories?: InventoryUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateWithoutUserMedisInput = {
    itemSeq?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    entpName?: NullableStringFieldUpdateOperationsInput | string | null
    itemPermitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    etcOtcCode?: NullableStringFieldUpdateOperationsInput | string | null
    classNo?: NullableStringFieldUpdateOperationsInput | string | null
    chart?: NullableStringFieldUpdateOperationsInput | string | null
    barCode?: NullableStringFieldUpdateOperationsInput | string | null
    materialName?: NullableStringFieldUpdateOperationsInput | string | null
    eeDocId?: NullableStringFieldUpdateOperationsInput | string | null
    inventories?: InventoryUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type MediTimeUpsertWithWhereUniqueWithoutUserMediInput = {
    where: MediTimeWhereUniqueInput
    update: XOR<MediTimeUpdateWithoutUserMediInput, MediTimeUncheckedUpdateWithoutUserMediInput>
    create: XOR<MediTimeCreateWithoutUserMediInput, MediTimeUncheckedCreateWithoutUserMediInput>
  }

  export type MediTimeUpdateWithWhereUniqueWithoutUserMediInput = {
    where: MediTimeWhereUniqueInput
    data: XOR<MediTimeUpdateWithoutUserMediInput, MediTimeUncheckedUpdateWithoutUserMediInput>
  }

  export type MediTimeUpdateManyWithWhereWithoutUserMediInput = {
    where: MediTimeScalarWhereInput
    data: XOR<MediTimeUpdateManyMutationInput, MediTimeUncheckedUpdateManyWithoutUserMediInput>
  }

  export type MediTimeScalarWhereInput = {
    AND?: MediTimeScalarWhereInput | MediTimeScalarWhereInput[]
    OR?: MediTimeScalarWhereInput[]
    NOT?: MediTimeScalarWhereInput | MediTimeScalarWhereInput[]
    id?: IntFilter<"MediTime"> | number
    mediTime?: IntFilter<"MediTime"> | number
    userMediId?: IntFilter<"MediTime"> | number
  }

  export type UserCreateWithoutUserHealthInput = {
    id?: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    memberType: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    pharmacy?: PharmacyCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutUserInput
    qnas?: QnaCreateNestedManyWithoutUserInput
    answers?: AnswerCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    userMedis?: UserMediCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserHealthInput = {
    id?: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    memberType: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    hpid?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    qnas?: QnaUncheckedCreateNestedManyWithoutUserInput
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    userMedis?: UserMediUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserHealthInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserHealthInput, UserUncheckedCreateWithoutUserHealthInput>
  }

  export type HealthCreateWithoutUserHealthInput = {
    healthName: string
  }

  export type HealthUncheckedCreateWithoutUserHealthInput = {
    id?: number
    healthName: string
  }

  export type HealthCreateOrConnectWithoutUserHealthInput = {
    where: HealthWhereUniqueInput
    create: XOR<HealthCreateWithoutUserHealthInput, HealthUncheckedCreateWithoutUserHealthInput>
  }

  export type UserUpsertWithoutUserHealthInput = {
    update: XOR<UserUpdateWithoutUserHealthInput, UserUncheckedUpdateWithoutUserHealthInput>
    create: XOR<UserCreateWithoutUserHealthInput, UserUncheckedCreateWithoutUserHealthInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserHealthInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserHealthInput, UserUncheckedUpdateWithoutUserHealthInput>
  }

  export type UserUpdateWithoutUserHealthInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pharmacy?: PharmacyUpdateOneWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    qnas?: QnaUpdateManyWithoutUserNestedInput
    answers?: AnswerUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    userMedis?: UserMediUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserHealthInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hpid?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    qnas?: QnaUncheckedUpdateManyWithoutUserNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userMedis?: UserMediUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HealthUpsertWithoutUserHealthInput = {
    update: XOR<HealthUpdateWithoutUserHealthInput, HealthUncheckedUpdateWithoutUserHealthInput>
    create: XOR<HealthCreateWithoutUserHealthInput, HealthUncheckedCreateWithoutUserHealthInput>
    where?: HealthWhereInput
  }

  export type HealthUpdateToOneWithWhereWithoutUserHealthInput = {
    where?: HealthWhereInput
    data: XOR<HealthUpdateWithoutUserHealthInput, HealthUncheckedUpdateWithoutUserHealthInput>
  }

  export type HealthUpdateWithoutUserHealthInput = {
    healthName?: StringFieldUpdateOperationsInput | string
  }

  export type HealthUncheckedUpdateWithoutUserHealthInput = {
    id?: IntFieldUpdateOperationsInput | number
    healthName?: StringFieldUpdateOperationsInput | string
  }

  export type UserMediCreateWithoutMedicineInput = {
    startDate?: Date | string | null
    endDate?: Date | string | null
    user: UserCreateNestedOneWithoutUserMedisInput
    mediTimes?: MediTimeCreateNestedManyWithoutUserMediInput
  }

  export type UserMediUncheckedCreateWithoutMedicineInput = {
    id?: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    userId: string
    mediTimes?: MediTimeUncheckedCreateNestedManyWithoutUserMediInput
  }

  export type UserMediCreateOrConnectWithoutMedicineInput = {
    where: UserMediWhereUniqueInput
    create: XOR<UserMediCreateWithoutMedicineInput, UserMediUncheckedCreateWithoutMedicineInput>
  }

  export type UserMediCreateManyMedicineInputEnvelope = {
    data: UserMediCreateManyMedicineInput | UserMediCreateManyMedicineInput[]
    skipDuplicates?: boolean
  }

  export type InventoryCreateWithoutMedicineInput = {
    quantity: number
    pharmacy: PharmacyCreateNestedOneWithoutInventoriesInput
  }

  export type InventoryUncheckedCreateWithoutMedicineInput = {
    id?: number
    quantity: number
    hpid: string
  }

  export type InventoryCreateOrConnectWithoutMedicineInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutMedicineInput, InventoryUncheckedCreateWithoutMedicineInput>
  }

  export type InventoryCreateManyMedicineInputEnvelope = {
    data: InventoryCreateManyMedicineInput | InventoryCreateManyMedicineInput[]
    skipDuplicates?: boolean
  }

  export type UserMediUpsertWithWhereUniqueWithoutMedicineInput = {
    where: UserMediWhereUniqueInput
    update: XOR<UserMediUpdateWithoutMedicineInput, UserMediUncheckedUpdateWithoutMedicineInput>
    create: XOR<UserMediCreateWithoutMedicineInput, UserMediUncheckedCreateWithoutMedicineInput>
  }

  export type UserMediUpdateWithWhereUniqueWithoutMedicineInput = {
    where: UserMediWhereUniqueInput
    data: XOR<UserMediUpdateWithoutMedicineInput, UserMediUncheckedUpdateWithoutMedicineInput>
  }

  export type UserMediUpdateManyWithWhereWithoutMedicineInput = {
    where: UserMediScalarWhereInput
    data: XOR<UserMediUpdateManyMutationInput, UserMediUncheckedUpdateManyWithoutMedicineInput>
  }

  export type UserMediScalarWhereInput = {
    AND?: UserMediScalarWhereInput | UserMediScalarWhereInput[]
    OR?: UserMediScalarWhereInput[]
    NOT?: UserMediScalarWhereInput | UserMediScalarWhereInput[]
    id?: IntFilter<"UserMedi"> | number
    startDate?: DateTimeNullableFilter<"UserMedi"> | Date | string | null
    endDate?: DateTimeNullableFilter<"UserMedi"> | Date | string | null
    userId?: StringFilter<"UserMedi"> | string
    itemSeq?: StringFilter<"UserMedi"> | string
  }

  export type InventoryUpsertWithWhereUniqueWithoutMedicineInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutMedicineInput, InventoryUncheckedUpdateWithoutMedicineInput>
    create: XOR<InventoryCreateWithoutMedicineInput, InventoryUncheckedCreateWithoutMedicineInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutMedicineInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutMedicineInput, InventoryUncheckedUpdateWithoutMedicineInput>
  }

  export type InventoryUpdateManyWithWhereWithoutMedicineInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutMedicineInput>
  }

  export type InventoryScalarWhereInput = {
    AND?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    OR?: InventoryScalarWhereInput[]
    NOT?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    id?: IntFilter<"Inventory"> | number
    quantity?: IntFilter<"Inventory"> | number
    itemSeq?: StringFilter<"Inventory"> | string
    hpid?: StringFilter<"Inventory"> | string
  }

  export type UserMediCreateWithoutMediTimesInput = {
    startDate?: Date | string | null
    endDate?: Date | string | null
    user: UserCreateNestedOneWithoutUserMedisInput
    medicine: MedicineCreateNestedOneWithoutUserMedisInput
  }

  export type UserMediUncheckedCreateWithoutMediTimesInput = {
    id?: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    userId: string
    itemSeq: string
  }

  export type UserMediCreateOrConnectWithoutMediTimesInput = {
    where: UserMediWhereUniqueInput
    create: XOR<UserMediCreateWithoutMediTimesInput, UserMediUncheckedCreateWithoutMediTimesInput>
  }

  export type UserMediUpsertWithoutMediTimesInput = {
    update: XOR<UserMediUpdateWithoutMediTimesInput, UserMediUncheckedUpdateWithoutMediTimesInput>
    create: XOR<UserMediCreateWithoutMediTimesInput, UserMediUncheckedCreateWithoutMediTimesInput>
    where?: UserMediWhereInput
  }

  export type UserMediUpdateToOneWithWhereWithoutMediTimesInput = {
    where?: UserMediWhereInput
    data: XOR<UserMediUpdateWithoutMediTimesInput, UserMediUncheckedUpdateWithoutMediTimesInput>
  }

  export type UserMediUpdateWithoutMediTimesInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserMedisNestedInput
    medicine?: MedicineUpdateOneRequiredWithoutUserMedisNestedInput
  }

  export type UserMediUncheckedUpdateWithoutMediTimesInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    itemSeq?: StringFieldUpdateOperationsInput | string
  }

  export type PharmacyCreateWithoutUsersInput = {
    hpid: string
    dutyAddr?: string | null
    dutyMapimg?: string | null
    dutyName: string
    dutyTel1?: string | null
    dutyTime1c?: string | null
    dutyTime1s?: string | null
    dutyTime2c?: string | null
    dutyTime2s?: string | null
    dutyTime3c?: string | null
    dutyTime3s?: string | null
    dutyTime4c?: string | null
    dutyTime4s?: string | null
    dutyTime5c?: string | null
    dutyTime5s?: string | null
    dutyTime6c?: string | null
    dutyTime6s?: string | null
    dutyTime7c?: string | null
    dutyTime7s?: string | null
    postCdn1?: string | null
    postCdn2?: string | null
    wgs84Lat?: Decimal | DecimalJsLike | number | string | null
    wgs84Lon?: Decimal | DecimalJsLike | number | string | null
    inventories?: InventoryCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateWithoutUsersInput = {
    hpid: string
    dutyAddr?: string | null
    dutyMapimg?: string | null
    dutyName: string
    dutyTel1?: string | null
    dutyTime1c?: string | null
    dutyTime1s?: string | null
    dutyTime2c?: string | null
    dutyTime2s?: string | null
    dutyTime3c?: string | null
    dutyTime3s?: string | null
    dutyTime4c?: string | null
    dutyTime4s?: string | null
    dutyTime5c?: string | null
    dutyTime5s?: string | null
    dutyTime6c?: string | null
    dutyTime6s?: string | null
    dutyTime7c?: string | null
    dutyTime7s?: string | null
    postCdn1?: string | null
    postCdn2?: string | null
    wgs84Lat?: Decimal | DecimalJsLike | number | string | null
    wgs84Lon?: Decimal | DecimalJsLike | number | string | null
    inventories?: InventoryUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyCreateOrConnectWithoutUsersInput = {
    where: PharmacyWhereUniqueInput
    create: XOR<PharmacyCreateWithoutUsersInput, PharmacyUncheckedCreateWithoutUsersInput>
  }

  export type PostCreateWithoutUserInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    comments?: CommentCreateNestedManyWithoutPostInput
    postTags?: PostTagCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    postTags?: PostTagUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QnaCreateWithoutUserInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    answers?: AnswerCreateNestedManyWithoutQnaInput
    qnaTags?: QnaTagCreateNestedManyWithoutQnaInput
  }

  export type QnaUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    answers?: AnswerUncheckedCreateNestedManyWithoutQnaInput
    qnaTags?: QnaTagUncheckedCreateNestedManyWithoutQnaInput
  }

  export type QnaCreateOrConnectWithoutUserInput = {
    where: QnaWhereUniqueInput
    create: XOR<QnaCreateWithoutUserInput, QnaUncheckedCreateWithoutUserInput>
  }

  export type QnaCreateManyUserInputEnvelope = {
    data: QnaCreateManyUserInput | QnaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnswerCreateWithoutUserInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    isAccepted?: boolean
    qna: QnaCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    isAccepted?: boolean
    qnaId: number
  }

  export type AnswerCreateOrConnectWithoutUserInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput>
  }

  export type AnswerCreateManyUserInputEnvelope = {
    data: AnswerCreateManyUserInput | AnswerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    post: PostCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    postId: number
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserMediCreateWithoutUserInput = {
    startDate?: Date | string | null
    endDate?: Date | string | null
    medicine: MedicineCreateNestedOneWithoutUserMedisInput
    mediTimes?: MediTimeCreateNestedManyWithoutUserMediInput
  }

  export type UserMediUncheckedCreateWithoutUserInput = {
    id?: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    itemSeq: string
    mediTimes?: MediTimeUncheckedCreateNestedManyWithoutUserMediInput
  }

  export type UserMediCreateOrConnectWithoutUserInput = {
    where: UserMediWhereUniqueInput
    create: XOR<UserMediCreateWithoutUserInput, UserMediUncheckedCreateWithoutUserInput>
  }

  export type UserMediCreateManyUserInputEnvelope = {
    data: UserMediCreateManyUserInput | UserMediCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserHealthCreateWithoutUserInput = {
    health: HealthCreateNestedOneWithoutUserHealthInput
  }

  export type UserHealthUncheckedCreateWithoutUserInput = {
    id?: number
    healthId: number
  }

  export type UserHealthCreateOrConnectWithoutUserInput = {
    where: UserHealthWhereUniqueInput
    create: XOR<UserHealthCreateWithoutUserInput, UserHealthUncheckedCreateWithoutUserInput>
  }

  export type UserHealthCreateManyUserInputEnvelope = {
    data: UserHealthCreateManyUserInput | UserHealthCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PharmacyUpsertWithoutUsersInput = {
    update: XOR<PharmacyUpdateWithoutUsersInput, PharmacyUncheckedUpdateWithoutUsersInput>
    create: XOR<PharmacyCreateWithoutUsersInput, PharmacyUncheckedCreateWithoutUsersInput>
    where?: PharmacyWhereInput
  }

  export type PharmacyUpdateToOneWithWhereWithoutUsersInput = {
    where?: PharmacyWhereInput
    data: XOR<PharmacyUpdateWithoutUsersInput, PharmacyUncheckedUpdateWithoutUsersInput>
  }

  export type PharmacyUpdateWithoutUsersInput = {
    hpid?: StringFieldUpdateOperationsInput | string
    dutyAddr?: NullableStringFieldUpdateOperationsInput | string | null
    dutyMapimg?: NullableStringFieldUpdateOperationsInput | string | null
    dutyName?: StringFieldUpdateOperationsInput | string
    dutyTel1?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime1c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime1s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime2c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime2s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime3c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime3s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime4c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime4s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime5c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime5s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime6c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime6s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime7c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime7s?: NullableStringFieldUpdateOperationsInput | string | null
    postCdn1?: NullableStringFieldUpdateOperationsInput | string | null
    postCdn2?: NullableStringFieldUpdateOperationsInput | string | null
    wgs84Lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgs84Lon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    inventories?: InventoryUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateWithoutUsersInput = {
    hpid?: StringFieldUpdateOperationsInput | string
    dutyAddr?: NullableStringFieldUpdateOperationsInput | string | null
    dutyMapimg?: NullableStringFieldUpdateOperationsInput | string | null
    dutyName?: StringFieldUpdateOperationsInput | string
    dutyTel1?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime1c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime1s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime2c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime2s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime3c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime3s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime4c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime4s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime5c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime5s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime6c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime6s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime7c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime7s?: NullableStringFieldUpdateOperationsInput | string | null
    postCdn1?: NullableStringFieldUpdateOperationsInput | string | null
    postCdn2?: NullableStringFieldUpdateOperationsInput | string | null
    wgs84Lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgs84Lon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    inventories?: InventoryUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    userId?: StringFilter<"Post"> | string
  }

  export type QnaUpsertWithWhereUniqueWithoutUserInput = {
    where: QnaWhereUniqueInput
    update: XOR<QnaUpdateWithoutUserInput, QnaUncheckedUpdateWithoutUserInput>
    create: XOR<QnaCreateWithoutUserInput, QnaUncheckedCreateWithoutUserInput>
  }

  export type QnaUpdateWithWhereUniqueWithoutUserInput = {
    where: QnaWhereUniqueInput
    data: XOR<QnaUpdateWithoutUserInput, QnaUncheckedUpdateWithoutUserInput>
  }

  export type QnaUpdateManyWithWhereWithoutUserInput = {
    where: QnaScalarWhereInput
    data: XOR<QnaUpdateManyMutationInput, QnaUncheckedUpdateManyWithoutUserInput>
  }

  export type QnaScalarWhereInput = {
    AND?: QnaScalarWhereInput | QnaScalarWhereInput[]
    OR?: QnaScalarWhereInput[]
    NOT?: QnaScalarWhereInput | QnaScalarWhereInput[]
    id?: IntFilter<"Qna"> | number
    title?: StringFilter<"Qna"> | string
    content?: StringFilter<"Qna"> | string
    createdAt?: DateTimeFilter<"Qna"> | Date | string
    updatedAt?: DateTimeFilter<"Qna"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Qna"> | Date | string | null
    userId?: StringFilter<"Qna"> | string
  }

  export type AnswerUpsertWithWhereUniqueWithoutUserInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutUserInput, AnswerUncheckedUpdateWithoutUserInput>
    create: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutUserInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutUserInput, AnswerUncheckedUpdateWithoutUserInput>
  }

  export type AnswerUpdateManyWithWhereWithoutUserInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    userId?: StringFilter<"Comment"> | string
    postId?: IntFilter<"Comment"> | number
  }

  export type UserMediUpsertWithWhereUniqueWithoutUserInput = {
    where: UserMediWhereUniqueInput
    update: XOR<UserMediUpdateWithoutUserInput, UserMediUncheckedUpdateWithoutUserInput>
    create: XOR<UserMediCreateWithoutUserInput, UserMediUncheckedCreateWithoutUserInput>
  }

  export type UserMediUpdateWithWhereUniqueWithoutUserInput = {
    where: UserMediWhereUniqueInput
    data: XOR<UserMediUpdateWithoutUserInput, UserMediUncheckedUpdateWithoutUserInput>
  }

  export type UserMediUpdateManyWithWhereWithoutUserInput = {
    where: UserMediScalarWhereInput
    data: XOR<UserMediUpdateManyMutationInput, UserMediUncheckedUpdateManyWithoutUserInput>
  }

  export type UserHealthUpsertWithWhereUniqueWithoutUserInput = {
    where: UserHealthWhereUniqueInput
    update: XOR<UserHealthUpdateWithoutUserInput, UserHealthUncheckedUpdateWithoutUserInput>
    create: XOR<UserHealthCreateWithoutUserInput, UserHealthUncheckedCreateWithoutUserInput>
  }

  export type UserHealthUpdateWithWhereUniqueWithoutUserInput = {
    where: UserHealthWhereUniqueInput
    data: XOR<UserHealthUpdateWithoutUserInput, UserHealthUncheckedUpdateWithoutUserInput>
  }

  export type UserHealthUpdateManyWithWhereWithoutUserInput = {
    where: UserHealthScalarWhereInput
    data: XOR<UserHealthUpdateManyMutationInput, UserHealthUncheckedUpdateManyWithoutUserInput>
  }

  export type UserHealthScalarWhereInput = {
    AND?: UserHealthScalarWhereInput | UserHealthScalarWhereInput[]
    OR?: UserHealthScalarWhereInput[]
    NOT?: UserHealthScalarWhereInput | UserHealthScalarWhereInput[]
    id?: IntFilter<"UserHealth"> | number
    userId?: StringFilter<"UserHealth"> | string
    healthId?: IntFilter<"UserHealth"> | number
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    memberType: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    pharmacy?: PharmacyCreateNestedOneWithoutUsersInput
    qnas?: QnaCreateNestedManyWithoutUserInput
    answers?: AnswerCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    userMedis?: UserMediCreateNestedManyWithoutUserInput
    userHealth?: UserHealthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    memberType: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    hpid?: string | null
    qnas?: QnaUncheckedCreateNestedManyWithoutUserInput
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    userMedis?: UserMediUncheckedCreateNestedManyWithoutUserInput
    userHealth?: UserHealthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type CommentCreateWithoutPostInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostTagCreateWithoutPostInput = {
    tag: TagCreateNestedOneWithoutPostTagsInput
  }

  export type PostTagUncheckedCreateWithoutPostInput = {
    id?: number
    tagId: number
  }

  export type PostTagCreateOrConnectWithoutPostInput = {
    where: PostTagWhereUniqueInput
    create: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>
  }

  export type PostTagCreateManyPostInputEnvelope = {
    data: PostTagCreateManyPostInput | PostTagCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pharmacy?: PharmacyUpdateOneWithoutUsersNestedInput
    qnas?: QnaUpdateManyWithoutUserNestedInput
    answers?: AnswerUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    userMedis?: UserMediUpdateManyWithoutUserNestedInput
    userHealth?: UserHealthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hpid?: NullableStringFieldUpdateOperationsInput | string | null
    qnas?: QnaUncheckedUpdateManyWithoutUserNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userMedis?: UserMediUncheckedUpdateManyWithoutUserNestedInput
    userHealth?: UserHealthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type PostTagUpsertWithWhereUniqueWithoutPostInput = {
    where: PostTagWhereUniqueInput
    update: XOR<PostTagUpdateWithoutPostInput, PostTagUncheckedUpdateWithoutPostInput>
    create: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>
  }

  export type PostTagUpdateWithWhereUniqueWithoutPostInput = {
    where: PostTagWhereUniqueInput
    data: XOR<PostTagUpdateWithoutPostInput, PostTagUncheckedUpdateWithoutPostInput>
  }

  export type PostTagUpdateManyWithWhereWithoutPostInput = {
    where: PostTagScalarWhereInput
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyWithoutPostInput>
  }

  export type PostTagScalarWhereInput = {
    AND?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
    OR?: PostTagScalarWhereInput[]
    NOT?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
    id?: IntFilter<"PostTag"> | number
    tagId?: IntFilter<"PostTag"> | number
    postId?: IntFilter<"PostTag"> | number
  }

  export type UserCreateWithoutAnswersInput = {
    id?: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    memberType: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    pharmacy?: PharmacyCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutUserInput
    qnas?: QnaCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    userMedis?: UserMediCreateNestedManyWithoutUserInput
    userHealth?: UserHealthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnswersInput = {
    id?: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    memberType: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    hpid?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    qnas?: QnaUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    userMedis?: UserMediUncheckedCreateNestedManyWithoutUserInput
    userHealth?: UserHealthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnswersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
  }

  export type QnaCreateWithoutAnswersInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutQnasInput
    qnaTags?: QnaTagCreateNestedManyWithoutQnaInput
  }

  export type QnaUncheckedCreateWithoutAnswersInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    qnaTags?: QnaTagUncheckedCreateNestedManyWithoutQnaInput
  }

  export type QnaCreateOrConnectWithoutAnswersInput = {
    where: QnaWhereUniqueInput
    create: XOR<QnaCreateWithoutAnswersInput, QnaUncheckedCreateWithoutAnswersInput>
  }

  export type UserUpsertWithoutAnswersInput = {
    update: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnswersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
  }

  export type UserUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pharmacy?: PharmacyUpdateOneWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    qnas?: QnaUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    userMedis?: UserMediUpdateManyWithoutUserNestedInput
    userHealth?: UserHealthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hpid?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    qnas?: QnaUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userMedis?: UserMediUncheckedUpdateManyWithoutUserNestedInput
    userHealth?: UserHealthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QnaUpsertWithoutAnswersInput = {
    update: XOR<QnaUpdateWithoutAnswersInput, QnaUncheckedUpdateWithoutAnswersInput>
    create: XOR<QnaCreateWithoutAnswersInput, QnaUncheckedCreateWithoutAnswersInput>
    where?: QnaWhereInput
  }

  export type QnaUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QnaWhereInput
    data: XOR<QnaUpdateWithoutAnswersInput, QnaUncheckedUpdateWithoutAnswersInput>
  }

  export type QnaUpdateWithoutAnswersInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutQnasNestedInput
    qnaTags?: QnaTagUpdateManyWithoutQnaNestedInput
  }

  export type QnaUncheckedUpdateWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    qnaTags?: QnaTagUncheckedUpdateManyWithoutQnaNestedInput
  }

  export type UserCreateWithoutPharmacyInput = {
    id?: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    memberType: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    posts?: PostCreateNestedManyWithoutUserInput
    qnas?: QnaCreateNestedManyWithoutUserInput
    answers?: AnswerCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    userMedis?: UserMediCreateNestedManyWithoutUserInput
    userHealth?: UserHealthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPharmacyInput = {
    id?: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    memberType: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    qnas?: QnaUncheckedCreateNestedManyWithoutUserInput
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    userMedis?: UserMediUncheckedCreateNestedManyWithoutUserInput
    userHealth?: UserHealthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPharmacyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPharmacyInput, UserUncheckedCreateWithoutPharmacyInput>
  }

  export type UserCreateManyPharmacyInputEnvelope = {
    data: UserCreateManyPharmacyInput | UserCreateManyPharmacyInput[]
    skipDuplicates?: boolean
  }

  export type InventoryCreateWithoutPharmacyInput = {
    quantity: number
    medicine: MedicineCreateNestedOneWithoutInventoriesInput
  }

  export type InventoryUncheckedCreateWithoutPharmacyInput = {
    id?: number
    quantity: number
    itemSeq: string
  }

  export type InventoryCreateOrConnectWithoutPharmacyInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutPharmacyInput, InventoryUncheckedCreateWithoutPharmacyInput>
  }

  export type InventoryCreateManyPharmacyInputEnvelope = {
    data: InventoryCreateManyPharmacyInput | InventoryCreateManyPharmacyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutPharmacyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPharmacyInput, UserUncheckedUpdateWithoutPharmacyInput>
    create: XOR<UserCreateWithoutPharmacyInput, UserUncheckedCreateWithoutPharmacyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPharmacyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPharmacyInput, UserUncheckedUpdateWithoutPharmacyInput>
  }

  export type UserUpdateManyWithWhereWithoutPharmacyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutPharmacyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    photo?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    birthyear?: IntNullableFilter<"User"> | number | null
    gender?: StringNullableFilter<"User"> | string | null
    memberType?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    hpid?: StringNullableFilter<"User"> | string | null
  }

  export type InventoryUpsertWithWhereUniqueWithoutPharmacyInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutPharmacyInput, InventoryUncheckedUpdateWithoutPharmacyInput>
    create: XOR<InventoryCreateWithoutPharmacyInput, InventoryUncheckedCreateWithoutPharmacyInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutPharmacyInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutPharmacyInput, InventoryUncheckedUpdateWithoutPharmacyInput>
  }

  export type InventoryUpdateManyWithWhereWithoutPharmacyInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutPharmacyInput>
  }

  export type TagCreateWithoutPostTagsInput = {
    tagName: string
    qnaTags?: QnaTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutPostTagsInput = {
    id?: number
    tagName: string
    qnaTags?: QnaTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutPostTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutPostTagsInput, TagUncheckedCreateWithoutPostTagsInput>
  }

  export type PostCreateWithoutPostTagsInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPostTagsInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPostTagsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostTagsInput, PostUncheckedCreateWithoutPostTagsInput>
  }

  export type TagUpsertWithoutPostTagsInput = {
    update: XOR<TagUpdateWithoutPostTagsInput, TagUncheckedUpdateWithoutPostTagsInput>
    create: XOR<TagCreateWithoutPostTagsInput, TagUncheckedCreateWithoutPostTagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutPostTagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutPostTagsInput, TagUncheckedUpdateWithoutPostTagsInput>
  }

  export type TagUpdateWithoutPostTagsInput = {
    tagName?: StringFieldUpdateOperationsInput | string
    qnaTags?: QnaTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutPostTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagName?: StringFieldUpdateOperationsInput | string
    qnaTags?: QnaTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type PostUpsertWithoutPostTagsInput = {
    update: XOR<PostUpdateWithoutPostTagsInput, PostUncheckedUpdateWithoutPostTagsInput>
    create: XOR<PostCreateWithoutPostTagsInput, PostUncheckedCreateWithoutPostTagsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPostTagsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPostTagsInput, PostUncheckedUpdateWithoutPostTagsInput>
  }

  export type PostUpdateWithoutPostTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPostTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostTagCreateWithoutTagInput = {
    post: PostCreateNestedOneWithoutPostTagsInput
  }

  export type PostTagUncheckedCreateWithoutTagInput = {
    id?: number
    postId: number
  }

  export type PostTagCreateOrConnectWithoutTagInput = {
    where: PostTagWhereUniqueInput
    create: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>
  }

  export type PostTagCreateManyTagInputEnvelope = {
    data: PostTagCreateManyTagInput | PostTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type QnaTagCreateWithoutTagInput = {
    qna: QnaCreateNestedOneWithoutQnaTagsInput
  }

  export type QnaTagUncheckedCreateWithoutTagInput = {
    id?: number
    qnaId: number
  }

  export type QnaTagCreateOrConnectWithoutTagInput = {
    where: QnaTagWhereUniqueInput
    create: XOR<QnaTagCreateWithoutTagInput, QnaTagUncheckedCreateWithoutTagInput>
  }

  export type QnaTagCreateManyTagInputEnvelope = {
    data: QnaTagCreateManyTagInput | QnaTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type PostTagUpsertWithWhereUniqueWithoutTagInput = {
    where: PostTagWhereUniqueInput
    update: XOR<PostTagUpdateWithoutTagInput, PostTagUncheckedUpdateWithoutTagInput>
    create: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>
  }

  export type PostTagUpdateWithWhereUniqueWithoutTagInput = {
    where: PostTagWhereUniqueInput
    data: XOR<PostTagUpdateWithoutTagInput, PostTagUncheckedUpdateWithoutTagInput>
  }

  export type PostTagUpdateManyWithWhereWithoutTagInput = {
    where: PostTagScalarWhereInput
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyWithoutTagInput>
  }

  export type QnaTagUpsertWithWhereUniqueWithoutTagInput = {
    where: QnaTagWhereUniqueInput
    update: XOR<QnaTagUpdateWithoutTagInput, QnaTagUncheckedUpdateWithoutTagInput>
    create: XOR<QnaTagCreateWithoutTagInput, QnaTagUncheckedCreateWithoutTagInput>
  }

  export type QnaTagUpdateWithWhereUniqueWithoutTagInput = {
    where: QnaTagWhereUniqueInput
    data: XOR<QnaTagUpdateWithoutTagInput, QnaTagUncheckedUpdateWithoutTagInput>
  }

  export type QnaTagUpdateManyWithWhereWithoutTagInput = {
    where: QnaTagScalarWhereInput
    data: XOR<QnaTagUpdateManyMutationInput, QnaTagUncheckedUpdateManyWithoutTagInput>
  }

  export type UserHealthCreateWithoutHealthInput = {
    user: UserCreateNestedOneWithoutUserHealthInput
  }

  export type UserHealthUncheckedCreateWithoutHealthInput = {
    id?: number
    userId: string
  }

  export type UserHealthCreateOrConnectWithoutHealthInput = {
    where: UserHealthWhereUniqueInput
    create: XOR<UserHealthCreateWithoutHealthInput, UserHealthUncheckedCreateWithoutHealthInput>
  }

  export type UserHealthCreateManyHealthInputEnvelope = {
    data: UserHealthCreateManyHealthInput | UserHealthCreateManyHealthInput[]
    skipDuplicates?: boolean
  }

  export type UserHealthUpsertWithWhereUniqueWithoutHealthInput = {
    where: UserHealthWhereUniqueInput
    update: XOR<UserHealthUpdateWithoutHealthInput, UserHealthUncheckedUpdateWithoutHealthInput>
    create: XOR<UserHealthCreateWithoutHealthInput, UserHealthUncheckedCreateWithoutHealthInput>
  }

  export type UserHealthUpdateWithWhereUniqueWithoutHealthInput = {
    where: UserHealthWhereUniqueInput
    data: XOR<UserHealthUpdateWithoutHealthInput, UserHealthUncheckedUpdateWithoutHealthInput>
  }

  export type UserHealthUpdateManyWithWhereWithoutHealthInput = {
    where: UserHealthScalarWhereInput
    data: XOR<UserHealthUpdateManyMutationInput, UserHealthUncheckedUpdateManyWithoutHealthInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    memberType: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    pharmacy?: PharmacyCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutUserInput
    qnas?: QnaCreateNestedManyWithoutUserInput
    answers?: AnswerCreateNestedManyWithoutUserInput
    userMedis?: UserMediCreateNestedManyWithoutUserInput
    userHealth?: UserHealthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    memberType: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    hpid?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    qnas?: QnaUncheckedCreateNestedManyWithoutUserInput
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
    userMedis?: UserMediUncheckedCreateNestedManyWithoutUserInput
    userHealth?: UserHealthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type PostCreateWithoutCommentsInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutPostsInput
    postTags?: PostTagCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    postTags?: PostTagUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pharmacy?: PharmacyUpdateOneWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    qnas?: QnaUpdateManyWithoutUserNestedInput
    answers?: AnswerUpdateManyWithoutUserNestedInput
    userMedis?: UserMediUpdateManyWithoutUserNestedInput
    userHealth?: UserHealthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hpid?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    qnas?: QnaUncheckedUpdateManyWithoutUserNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
    userMedis?: UserMediUncheckedUpdateManyWithoutUserNestedInput
    userHealth?: UserHealthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    postTags?: PostTagUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    postTags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
  }

  export type MedicineCreateWithoutInventoriesInput = {
    itemSeq: string
    itemName: string
    entpName?: string | null
    itemPermitDate?: Date | string | null
    etcOtcCode?: string | null
    classNo?: string | null
    chart?: string | null
    barCode?: string | null
    materialName?: string | null
    eeDocId?: string | null
    userMedis?: UserMediCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateWithoutInventoriesInput = {
    itemSeq: string
    itemName: string
    entpName?: string | null
    itemPermitDate?: Date | string | null
    etcOtcCode?: string | null
    classNo?: string | null
    chart?: string | null
    barCode?: string | null
    materialName?: string | null
    eeDocId?: string | null
    userMedis?: UserMediUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineCreateOrConnectWithoutInventoriesInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutInventoriesInput, MedicineUncheckedCreateWithoutInventoriesInput>
  }

  export type PharmacyCreateWithoutInventoriesInput = {
    hpid: string
    dutyAddr?: string | null
    dutyMapimg?: string | null
    dutyName: string
    dutyTel1?: string | null
    dutyTime1c?: string | null
    dutyTime1s?: string | null
    dutyTime2c?: string | null
    dutyTime2s?: string | null
    dutyTime3c?: string | null
    dutyTime3s?: string | null
    dutyTime4c?: string | null
    dutyTime4s?: string | null
    dutyTime5c?: string | null
    dutyTime5s?: string | null
    dutyTime6c?: string | null
    dutyTime6s?: string | null
    dutyTime7c?: string | null
    dutyTime7s?: string | null
    postCdn1?: string | null
    postCdn2?: string | null
    wgs84Lat?: Decimal | DecimalJsLike | number | string | null
    wgs84Lon?: Decimal | DecimalJsLike | number | string | null
    users?: UserCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateWithoutInventoriesInput = {
    hpid: string
    dutyAddr?: string | null
    dutyMapimg?: string | null
    dutyName: string
    dutyTel1?: string | null
    dutyTime1c?: string | null
    dutyTime1s?: string | null
    dutyTime2c?: string | null
    dutyTime2s?: string | null
    dutyTime3c?: string | null
    dutyTime3s?: string | null
    dutyTime4c?: string | null
    dutyTime4s?: string | null
    dutyTime5c?: string | null
    dutyTime5s?: string | null
    dutyTime6c?: string | null
    dutyTime6s?: string | null
    dutyTime7c?: string | null
    dutyTime7s?: string | null
    postCdn1?: string | null
    postCdn2?: string | null
    wgs84Lat?: Decimal | DecimalJsLike | number | string | null
    wgs84Lon?: Decimal | DecimalJsLike | number | string | null
    users?: UserUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyCreateOrConnectWithoutInventoriesInput = {
    where: PharmacyWhereUniqueInput
    create: XOR<PharmacyCreateWithoutInventoriesInput, PharmacyUncheckedCreateWithoutInventoriesInput>
  }

  export type MedicineUpsertWithoutInventoriesInput = {
    update: XOR<MedicineUpdateWithoutInventoriesInput, MedicineUncheckedUpdateWithoutInventoriesInput>
    create: XOR<MedicineCreateWithoutInventoriesInput, MedicineUncheckedCreateWithoutInventoriesInput>
    where?: MedicineWhereInput
  }

  export type MedicineUpdateToOneWithWhereWithoutInventoriesInput = {
    where?: MedicineWhereInput
    data: XOR<MedicineUpdateWithoutInventoriesInput, MedicineUncheckedUpdateWithoutInventoriesInput>
  }

  export type MedicineUpdateWithoutInventoriesInput = {
    itemSeq?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    entpName?: NullableStringFieldUpdateOperationsInput | string | null
    itemPermitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    etcOtcCode?: NullableStringFieldUpdateOperationsInput | string | null
    classNo?: NullableStringFieldUpdateOperationsInput | string | null
    chart?: NullableStringFieldUpdateOperationsInput | string | null
    barCode?: NullableStringFieldUpdateOperationsInput | string | null
    materialName?: NullableStringFieldUpdateOperationsInput | string | null
    eeDocId?: NullableStringFieldUpdateOperationsInput | string | null
    userMedis?: UserMediUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateWithoutInventoriesInput = {
    itemSeq?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    entpName?: NullableStringFieldUpdateOperationsInput | string | null
    itemPermitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    etcOtcCode?: NullableStringFieldUpdateOperationsInput | string | null
    classNo?: NullableStringFieldUpdateOperationsInput | string | null
    chart?: NullableStringFieldUpdateOperationsInput | string | null
    barCode?: NullableStringFieldUpdateOperationsInput | string | null
    materialName?: NullableStringFieldUpdateOperationsInput | string | null
    eeDocId?: NullableStringFieldUpdateOperationsInput | string | null
    userMedis?: UserMediUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type PharmacyUpsertWithoutInventoriesInput = {
    update: XOR<PharmacyUpdateWithoutInventoriesInput, PharmacyUncheckedUpdateWithoutInventoriesInput>
    create: XOR<PharmacyCreateWithoutInventoriesInput, PharmacyUncheckedCreateWithoutInventoriesInput>
    where?: PharmacyWhereInput
  }

  export type PharmacyUpdateToOneWithWhereWithoutInventoriesInput = {
    where?: PharmacyWhereInput
    data: XOR<PharmacyUpdateWithoutInventoriesInput, PharmacyUncheckedUpdateWithoutInventoriesInput>
  }

  export type PharmacyUpdateWithoutInventoriesInput = {
    hpid?: StringFieldUpdateOperationsInput | string
    dutyAddr?: NullableStringFieldUpdateOperationsInput | string | null
    dutyMapimg?: NullableStringFieldUpdateOperationsInput | string | null
    dutyName?: StringFieldUpdateOperationsInput | string
    dutyTel1?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime1c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime1s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime2c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime2s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime3c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime3s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime4c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime4s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime5c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime5s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime6c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime6s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime7c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime7s?: NullableStringFieldUpdateOperationsInput | string | null
    postCdn1?: NullableStringFieldUpdateOperationsInput | string | null
    postCdn2?: NullableStringFieldUpdateOperationsInput | string | null
    wgs84Lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgs84Lon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    users?: UserUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateWithoutInventoriesInput = {
    hpid?: StringFieldUpdateOperationsInput | string
    dutyAddr?: NullableStringFieldUpdateOperationsInput | string | null
    dutyMapimg?: NullableStringFieldUpdateOperationsInput | string | null
    dutyName?: StringFieldUpdateOperationsInput | string
    dutyTel1?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime1c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime1s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime2c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime2s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime3c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime3s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime4c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime4s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime5c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime5s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime6c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime6s?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime7c?: NullableStringFieldUpdateOperationsInput | string | null
    dutyTime7s?: NullableStringFieldUpdateOperationsInput | string | null
    postCdn1?: NullableStringFieldUpdateOperationsInput | string | null
    postCdn2?: NullableStringFieldUpdateOperationsInput | string | null
    wgs84Lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgs84Lon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    users?: UserUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type AnswerCreateManyQnaInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    isAccepted?: boolean
    userId: string
  }

  export type QnaTagCreateManyQnaInput = {
    id?: number
    tagId: number
  }

  export type AnswerUpdateWithoutQnaInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQnaInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUncheckedUpdateManyWithoutQnaInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type QnaTagUpdateWithoutQnaInput = {
    tag?: TagUpdateOneRequiredWithoutQnaTagsNestedInput
  }

  export type QnaTagUncheckedUpdateWithoutQnaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type QnaTagUncheckedUpdateManyWithoutQnaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type MediTimeCreateManyUserMediInput = {
    id?: number
    mediTime: number
  }

  export type MediTimeUpdateWithoutUserMediInput = {
    mediTime?: IntFieldUpdateOperationsInput | number
  }

  export type MediTimeUncheckedUpdateWithoutUserMediInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediTime?: IntFieldUpdateOperationsInput | number
  }

  export type MediTimeUncheckedUpdateManyWithoutUserMediInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediTime?: IntFieldUpdateOperationsInput | number
  }

  export type UserMediCreateManyMedicineInput = {
    id?: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    userId: string
  }

  export type InventoryCreateManyMedicineInput = {
    id?: number
    quantity: number
    hpid: string
  }

  export type UserMediUpdateWithoutMedicineInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserMedisNestedInput
    mediTimes?: MediTimeUpdateManyWithoutUserMediNestedInput
  }

  export type UserMediUncheckedUpdateWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    mediTimes?: MediTimeUncheckedUpdateManyWithoutUserMediNestedInput
  }

  export type UserMediUncheckedUpdateManyWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryUpdateWithoutMedicineInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    pharmacy?: PharmacyUpdateOneRequiredWithoutInventoriesNestedInput
  }

  export type InventoryUncheckedUpdateWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    hpid?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryUncheckedUpdateManyWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    hpid?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyUserInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type QnaCreateManyUserInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AnswerCreateManyUserInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    isAccepted?: boolean
    qnaId: number
  }

  export type CommentCreateManyUserInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    postId: number
  }

  export type UserMediCreateManyUserInput = {
    id?: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    itemSeq: string
  }

  export type UserHealthCreateManyUserInput = {
    id?: number
    healthId: number
  }

  export type PostUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUpdateManyWithoutPostNestedInput
    postTags?: PostTagUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    postTags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QnaUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: AnswerUpdateManyWithoutQnaNestedInput
    qnaTags?: QnaTagUpdateManyWithoutQnaNestedInput
  }

  export type QnaUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: AnswerUncheckedUpdateManyWithoutQnaNestedInput
    qnaTags?: QnaTagUncheckedUpdateManyWithoutQnaNestedInput
  }

  export type QnaUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnswerUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    qna?: QnaUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    qnaId?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    qnaId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type UserMediUpdateWithoutUserInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicine?: MedicineUpdateOneRequiredWithoutUserMedisNestedInput
    mediTimes?: MediTimeUpdateManyWithoutUserMediNestedInput
  }

  export type UserMediUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemSeq?: StringFieldUpdateOperationsInput | string
    mediTimes?: MediTimeUncheckedUpdateManyWithoutUserMediNestedInput
  }

  export type UserMediUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemSeq?: StringFieldUpdateOperationsInput | string
  }

  export type UserHealthUpdateWithoutUserInput = {
    health?: HealthUpdateOneRequiredWithoutUserHealthNestedInput
  }

  export type UserHealthUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    healthId?: IntFieldUpdateOperationsInput | number
  }

  export type UserHealthUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    healthId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateManyPostInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
  }

  export type PostTagCreateManyPostInput = {
    id?: number
    tagId: number
  }

  export type CommentUpdateWithoutPostInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagUpdateWithoutPostInput = {
    tag?: TagUpdateOneRequiredWithoutPostTagsNestedInput
  }

  export type PostTagUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type PostTagUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateManyPharmacyInput = {
    id?: string
    email?: string | null
    photo?: string | null
    name?: string | null
    birthyear?: number | null
    gender?: string | null
    memberType: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type InventoryCreateManyPharmacyInput = {
    id?: number
    quantity: number
    itemSeq: string
  }

  export type UserUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: PostUpdateManyWithoutUserNestedInput
    qnas?: QnaUpdateManyWithoutUserNestedInput
    answers?: AnswerUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    userMedis?: UserMediUpdateManyWithoutUserNestedInput
    userHealth?: UserHealthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    qnas?: QnaUncheckedUpdateManyWithoutUserNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userMedis?: UserMediUncheckedUpdateManyWithoutUserNestedInput
    userHealth?: UserHealthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthyear?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryUpdateWithoutPharmacyInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    medicine?: MedicineUpdateOneRequiredWithoutInventoriesNestedInput
  }

  export type InventoryUncheckedUpdateWithoutPharmacyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    itemSeq?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryUncheckedUpdateManyWithoutPharmacyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    itemSeq?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagCreateManyTagInput = {
    id?: number
    postId: number
  }

  export type QnaTagCreateManyTagInput = {
    id?: number
    qnaId: number
  }

  export type PostTagUpdateWithoutTagInput = {
    post?: PostUpdateOneRequiredWithoutPostTagsNestedInput
  }

  export type PostTagUncheckedUpdateWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostTagUncheckedUpdateManyWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type QnaTagUpdateWithoutTagInput = {
    qna?: QnaUpdateOneRequiredWithoutQnaTagsNestedInput
  }

  export type QnaTagUncheckedUpdateWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    qnaId?: IntFieldUpdateOperationsInput | number
  }

  export type QnaTagUncheckedUpdateManyWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    qnaId?: IntFieldUpdateOperationsInput | number
  }

  export type UserHealthCreateManyHealthInput = {
    id?: number
    userId: string
  }

  export type UserHealthUpdateWithoutHealthInput = {
    user?: UserUpdateOneRequiredWithoutUserHealthNestedInput
  }

  export type UserHealthUncheckedUpdateWithoutHealthInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserHealthUncheckedUpdateManyWithoutHealthInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
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
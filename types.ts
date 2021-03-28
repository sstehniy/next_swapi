import { GraphQLResolveInfo } from "graphql";
import { IContext } from "./pages/api/graphql";

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = {
	[X in Exclude<keyof T, K>]?: T[X];
} &
	{ [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type All = People | Film | Starship | Vehicle | Specie | Planet;

export type AllResponse = {
	pageInfo?: Maybe<PageInfo>;
	data: Array<Maybe<All>>;
};

export type Film = {
	title?: Maybe<Scalars["String"]>;
	episode_id?: Maybe<Scalars["Int"]>;
	opening_crawl?: Maybe<Scalars["String"]>;
	director?: Maybe<Scalars["String"]>;
	producer?: Maybe<Scalars["String"]>;
	release_date?: Maybe<Scalars["String"]>;
	species: Array<Maybe<Specie>>;
	starships: Array<Maybe<Starship>>;
	vehicles: Array<Maybe<Vehicle>>;
	characters: Array<Maybe<People>>;
	planets: Array<Maybe<Planet>>;
	url: Scalars["String"];
	images: Array<Maybe<Scalars["String"]>>;
};

export type FilmImagesArgs = {
	first?: Maybe<Scalars["Boolean"]>;
};

export type FilmsResponse = {
	pageInfo?: Maybe<PageInfo>;
	data: Array<Maybe<Film>>;
};

export type PageInfo = {
	hasNextPage?: Maybe<Scalars["Boolean"]>;
};

export type People = {
	birth_year?: Maybe<Scalars["String"]>;
	eye_color?: Maybe<Scalars["String"]>;
	films: Array<Maybe<Film>>;
	gender?: Maybe<Scalars["String"]>;
	hair_color?: Maybe<Scalars["String"]>;
	height?: Maybe<Scalars["Int"]>;
	homeworld?: Maybe<Planet>;
	mass?: Maybe<Scalars["Int"]>;
	name?: Maybe<Scalars["String"]>;
	skin_color?: Maybe<Scalars["String"]>;
	species: Array<Maybe<Specie>>;
	starships: Array<Maybe<Starship>>;
	vehicles: Array<Maybe<Vehicle>>;
	images: Array<Maybe<Scalars["String"]>>;
};

export type PeopleImagesArgs = {
	first?: Maybe<Scalars["Boolean"]>;
};

export type PeopleResponse = {
	pageInfo?: Maybe<PageInfo>;
	data: Array<Maybe<People>>;
};

export type Planet = {
	name?: Maybe<Scalars["String"]>;
	diameter?: Maybe<Scalars["Int"]>;
	rotation_period?: Maybe<Scalars["Int"]>;
	orbital_period?: Maybe<Scalars["Int"]>;
	gravity?: Maybe<Scalars["Float"]>;
	population?: Maybe<Scalars["Int"]>;
	climate?: Maybe<Scalars["String"]>;
	terrain?: Maybe<Scalars["String"]>;
	surface_water?: Maybe<Scalars["Int"]>;
	residents: Array<Maybe<People>>;
	films: Array<Maybe<Film>>;
	url: Scalars["String"];
	images: Array<Maybe<Scalars["String"]>>;
};

export type PlanetImagesArgs = {
	first?: Maybe<Scalars["Boolean"]>;
};

export type PlanetsResposne = {
	pageInfo?: Maybe<PageInfo>;
	data: Array<Maybe<Planet>>;
};

export type Query = {
	getAll: AllResponse;
	getPeople: PeopleResponse;
	getFilms: FilmsResponse;
	getStarships: StarhipsResponse;
	getVehicles: VehiclesResponse;
	getSpecies: SpeciesResponse;
	getPlanets: PlanetsResposne;
};

export type QueryGetAllArgs = {
	keyword?: Maybe<Scalars["String"]>;
	limit?: Maybe<Scalars["Int"]>;
	offset?: Maybe<Scalars["Int"]>;
};

export type QueryGetPeopleArgs = {
	keyword?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	limit?: Maybe<Scalars["Int"]>;
	offset?: Maybe<Scalars["Int"]>;
};

export type QueryGetFilmsArgs = {
	keyword?: Maybe<Scalars["String"]>;
	title?: Maybe<Scalars["String"]>;
	limit?: Maybe<Scalars["Int"]>;
	offset?: Maybe<Scalars["Int"]>;
};

export type QueryGetStarshipsArgs = {
	keyword?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	limit?: Maybe<Scalars["Int"]>;
	offset?: Maybe<Scalars["Int"]>;
};

export type QueryGetVehiclesArgs = {
	keyword?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	limit?: Maybe<Scalars["Int"]>;
	offset?: Maybe<Scalars["Int"]>;
};

export type QueryGetSpeciesArgs = {
	keyword?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	limit?: Maybe<Scalars["Int"]>;
	offset?: Maybe<Scalars["Int"]>;
};

export type QueryGetPlanetsArgs = {
	keyword?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	limit?: Maybe<Scalars["Int"]>;
	offset?: Maybe<Scalars["Int"]>;
};

export type Specie = {
	name?: Maybe<Scalars["String"]>;
	classification?: Maybe<Scalars["String"]>;
	designation?: Maybe<Scalars["String"]>;
	eye_colors?: Maybe<Scalars["String"]>;
	hair_colors?: Maybe<Scalars["String"]>;
	skin_colors?: Maybe<Scalars["String"]>;
	language?: Maybe<Scalars["String"]>;
	average_height?: Maybe<Scalars["Float"]>;
	average_lifespan?: Maybe<Scalars["Int"]>;
	homeworld?: Maybe<Planet>;
	people: Array<Maybe<People>>;
	films: Array<Maybe<Film>>;
	url: Scalars["String"];
	images: Array<Maybe<Scalars["String"]>>;
};

export type SpecieImagesArgs = {
	first?: Maybe<Scalars["Boolean"]>;
};

export type SpeciesResponse = {
	pageInfo?: Maybe<PageInfo>;
	data: Array<Maybe<Specie>>;
};

export type StarhipsResponse = {
	pageInfo?: Maybe<PageInfo>;
	data: Array<Maybe<Starship>>;
};

export type Starship = {
	starship_class?: Maybe<Scalars["String"]>;
	hyperdrive_rating?: Maybe<Scalars["Int"]>;
	MGLT?: Maybe<Scalars["Int"]>;
	name?: Maybe<Scalars["String"]>;
	model?: Maybe<Scalars["String"]>;
	manufacturer?: Maybe<Scalars["String"]>;
	length?: Maybe<Scalars["Int"]>;
	crew?: Maybe<Scalars["String"]>;
	max_atmosphering_speed?: Maybe<Scalars["Int"]>;
	passengers?: Maybe<Scalars["String"]>;
	cargo_capacity?: Maybe<Scalars["Int"]>;
	consumables?: Maybe<Scalars["String"]>;
	films: Array<Maybe<Film>>;
	pilots: Array<Maybe<People>>;
	url: Scalars["String"];
	cost_in_credits?: Maybe<Scalars["Int"]>;
	images: Array<Maybe<Scalars["String"]>>;
};

export type StarshipImagesArgs = {
	first?: Maybe<Scalars["Boolean"]>;
};

export type Vehicle = {
	vehicle_class?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	model?: Maybe<Scalars["String"]>;
	manufacturer?: Maybe<Scalars["String"]>;
	length?: Maybe<Scalars["Int"]>;
	crew?: Maybe<Scalars["String"]>;
	max_atmosphering_speed?: Maybe<Scalars["Int"]>;
	passengers?: Maybe<Scalars["String"]>;
	cargo_capacity?: Maybe<Scalars["Int"]>;
	consumables?: Maybe<Scalars["String"]>;
	films: Array<Maybe<Film>>;
	pilots: Array<Maybe<People>>;
	url: Scalars["String"];
	cost_in_credits?: Maybe<Scalars["Int"]>;
	images: Array<Maybe<Scalars["String"]>>;
};

export type VehicleImagesArgs = {
	first?: Maybe<Scalars["Boolean"]>;
};

export type VehiclesResponse = {
	pageInfo?: Maybe<PageInfo>;
	data: Array<Maybe<Vehicle>>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
	fragment: string;
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
	selectionSet: string;
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
	| LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
	| NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs
> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {}
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {}
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	All:
		| ResolversTypes["People"]
		| ResolversTypes["Film"]
		| ResolversTypes["Starship"]
		| ResolversTypes["Vehicle"]
		| ResolversTypes["Specie"]
		| ResolversTypes["Planet"];
	AllResponse: ResolverTypeWrapper<
		Omit<AllResponse, "data"> & { data: Array<Maybe<ResolversTypes["All"]>> }
	>;
	Film: ResolverTypeWrapper<Film>;
	String: ResolverTypeWrapper<Scalars["String"]>;
	Int: ResolverTypeWrapper<Scalars["Int"]>;
	Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
	FilmsResponse: ResolverTypeWrapper<FilmsResponse>;
	PageInfo: ResolverTypeWrapper<PageInfo>;
	People: ResolverTypeWrapper<People>;
	PeopleResponse: ResolverTypeWrapper<PeopleResponse>;
	Planet: ResolverTypeWrapper<Planet>;
	Float: ResolverTypeWrapper<Scalars["Float"]>;
	PlanetsResposne: ResolverTypeWrapper<PlanetsResposne>;
	Query: ResolverTypeWrapper<{}>;
	Specie: ResolverTypeWrapper<Specie>;
	SpeciesResponse: ResolverTypeWrapper<SpeciesResponse>;
	StarhipsResponse: ResolverTypeWrapper<StarhipsResponse>;
	Starship: ResolverTypeWrapper<Starship>;
	Vehicle: ResolverTypeWrapper<Vehicle>;
	VehiclesResponse: ResolverTypeWrapper<VehiclesResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	All:
		| ResolversParentTypes["People"]
		| ResolversParentTypes["Film"]
		| ResolversParentTypes["Starship"]
		| ResolversParentTypes["Vehicle"]
		| ResolversParentTypes["Specie"]
		| ResolversParentTypes["Planet"];
	AllResponse: Omit<AllResponse, "data"> & {
		data: Array<Maybe<ResolversParentTypes["All"]>>;
	};
	Film: Film;
	String: Scalars["String"];
	Int: Scalars["Int"];
	Boolean: Scalars["Boolean"];
	FilmsResponse: FilmsResponse;
	PageInfo: PageInfo;
	People: People;
	PeopleResponse: PeopleResponse;
	Planet: Planet;
	Float: Scalars["Float"];
	PlanetsResposne: PlanetsResposne;
	Query: {};
	Specie: Specie;
	SpeciesResponse: SpeciesResponse;
	StarhipsResponse: StarhipsResponse;
	Starship: Starship;
	Vehicle: Vehicle;
	VehiclesResponse: VehiclesResponse;
};

export type AllResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes["All"] = ResolversParentTypes["All"]
> = {
	__resolveType: TypeResolveFn<
		"People" | "Film" | "Starship" | "Vehicle" | "Specie" | "Planet",
		ParentType,
		ContextType
	>;
};

export type AllResponseResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes["AllResponse"] = ResolversParentTypes["AllResponse"]
> = {
	pageInfo?: Resolver<
		Maybe<ResolversTypes["PageInfo"]>,
		ParentType,
		ContextType
	>;
	data?: Resolver<Array<Maybe<ResolversTypes["All"]>>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilmResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes["Film"] = ResolversParentTypes["Film"]
> = {
	title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	episode_id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
	opening_crawl?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	director?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	producer?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	release_date?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	species?: Resolver<
		Array<Maybe<ResolversTypes["Specie"]>>,
		ParentType,
		ContextType
	>;
	starships?: Resolver<
		Array<Maybe<ResolversTypes["Starship"]>>,
		ParentType,
		ContextType
	>;
	vehicles?: Resolver<
		Array<Maybe<ResolversTypes["Vehicle"]>>,
		ParentType,
		ContextType
	>;
	characters?: Resolver<
		Array<Maybe<ResolversTypes["People"]>>,
		ParentType,
		ContextType
	>;
	planets?: Resolver<
		Array<Maybe<ResolversTypes["Planet"]>>,
		ParentType,
		ContextType
	>;
	url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	images?: Resolver<
		Array<Maybe<ResolversTypes["String"]>>,
		ParentType,
		ContextType,
		RequireFields<FilmImagesArgs, never>
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilmsResponseResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes["FilmsResponse"] = ResolversParentTypes["FilmsResponse"]
> = {
	pageInfo?: Resolver<
		Maybe<ResolversTypes["PageInfo"]>,
		ParentType,
		ContextType
	>;
	data?: Resolver<
		Array<Maybe<ResolversTypes["Film"]>>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes["PageInfo"] = ResolversParentTypes["PageInfo"]
> = {
	hasNextPage?: Resolver<
		Maybe<ResolversTypes["Boolean"]>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PeopleResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes["People"] = ResolversParentTypes["People"]
> = {
	birth_year?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	eye_color?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	films?: Resolver<
		Array<Maybe<ResolversTypes["Film"]>>,
		ParentType,
		ContextType
	>;
	gender?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	hair_color?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	height?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
	homeworld?: Resolver<
		Maybe<ResolversTypes["Planet"]>,
		ParentType,
		ContextType
	>;
	mass?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
	name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	skin_color?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	species?: Resolver<
		Array<Maybe<ResolversTypes["Specie"]>>,
		ParentType,
		ContextType
	>;
	starships?: Resolver<
		Array<Maybe<ResolversTypes["Starship"]>>,
		ParentType,
		ContextType
	>;
	vehicles?: Resolver<
		Array<Maybe<ResolversTypes["Vehicle"]>>,
		ParentType,
		ContextType
	>;
	images?: Resolver<
		Array<Maybe<ResolversTypes["String"]>>,
		ParentType,
		ContextType,
		RequireFields<PeopleImagesArgs, never>
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PeopleResponseResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes["PeopleResponse"] = ResolversParentTypes["PeopleResponse"]
> = {
	pageInfo?: Resolver<
		Maybe<ResolversTypes["PageInfo"]>,
		ParentType,
		ContextType
	>;
	data?: Resolver<
		Array<Maybe<ResolversTypes["People"]>>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlanetResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes["Planet"] = ResolversParentTypes["Planet"]
> = {
	name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	diameter?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
	rotation_period?: Resolver<
		Maybe<ResolversTypes["Int"]>,
		ParentType,
		ContextType
	>;
	orbital_period?: Resolver<
		Maybe<ResolversTypes["Int"]>,
		ParentType,
		ContextType
	>;
	gravity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
	population?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
	climate?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	terrain?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	surface_water?: Resolver<
		Maybe<ResolversTypes["Int"]>,
		ParentType,
		ContextType
	>;
	residents?: Resolver<
		Array<Maybe<ResolversTypes["People"]>>,
		ParentType,
		ContextType
	>;
	films?: Resolver<
		Array<Maybe<ResolversTypes["Film"]>>,
		ParentType,
		ContextType
	>;
	url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	images?: Resolver<
		Array<Maybe<ResolversTypes["String"]>>,
		ParentType,
		ContextType,
		RequireFields<PlanetImagesArgs, never>
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlanetsResposneResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes["PlanetsResposne"] = ResolversParentTypes["PlanetsResposne"]
> = {
	pageInfo?: Resolver<
		Maybe<ResolversTypes["PageInfo"]>,
		ParentType,
		ContextType
	>;
	data?: Resolver<
		Array<Maybe<ResolversTypes["Planet"]>>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
	getAll?: Resolver<
		ResolversTypes["AllResponse"],
		ParentType,
		ContextType,
		RequireFields<QueryGetAllArgs, never>
	>;
	getPeople?: Resolver<
		ResolversTypes["PeopleResponse"],
		ParentType,
		ContextType,
		RequireFields<QueryGetPeopleArgs, never>
	>;
	getFilms?: Resolver<
		ResolversTypes["FilmsResponse"],
		ParentType,
		ContextType,
		RequireFields<QueryGetFilmsArgs, never>
	>;
	getStarships?: Resolver<
		ResolversTypes["StarhipsResponse"],
		ParentType,
		ContextType,
		RequireFields<QueryGetStarshipsArgs, never>
	>;
	getVehicles?: Resolver<
		ResolversTypes["VehiclesResponse"],
		ParentType,
		ContextType,
		RequireFields<QueryGetVehiclesArgs, never>
	>;
	getSpecies?: Resolver<
		ResolversTypes["SpeciesResponse"],
		ParentType,
		ContextType,
		RequireFields<QueryGetSpeciesArgs, never>
	>;
	getPlanets?: Resolver<
		ResolversTypes["PlanetsResposne"],
		ParentType,
		ContextType,
		RequireFields<QueryGetPlanetsArgs, never>
	>;
};

export type SpecieResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes["Specie"] = ResolversParentTypes["Specie"]
> = {
	name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	classification?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	designation?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	eye_colors?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	hair_colors?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	skin_colors?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	language?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	average_height?: Resolver<
		Maybe<ResolversTypes["Float"]>,
		ParentType,
		ContextType
	>;
	average_lifespan?: Resolver<
		Maybe<ResolversTypes["Int"]>,
		ParentType,
		ContextType
	>;
	homeworld?: Resolver<
		Maybe<ResolversTypes["Planet"]>,
		ParentType,
		ContextType
	>;
	people?: Resolver<
		Array<Maybe<ResolversTypes["People"]>>,
		ParentType,
		ContextType
	>;
	films?: Resolver<
		Array<Maybe<ResolversTypes["Film"]>>,
		ParentType,
		ContextType
	>;
	url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	images?: Resolver<
		Array<Maybe<ResolversTypes["String"]>>,
		ParentType,
		ContextType,
		RequireFields<SpecieImagesArgs, never>
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpeciesResponseResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes["SpeciesResponse"] = ResolversParentTypes["SpeciesResponse"]
> = {
	pageInfo?: Resolver<
		Maybe<ResolversTypes["PageInfo"]>,
		ParentType,
		ContextType
	>;
	data?: Resolver<
		Array<Maybe<ResolversTypes["Specie"]>>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StarhipsResponseResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes["StarhipsResponse"] = ResolversParentTypes["StarhipsResponse"]
> = {
	pageInfo?: Resolver<
		Maybe<ResolversTypes["PageInfo"]>,
		ParentType,
		ContextType
	>;
	data?: Resolver<
		Array<Maybe<ResolversTypes["Starship"]>>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StarshipResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes["Starship"] = ResolversParentTypes["Starship"]
> = {
	starship_class?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	hyperdrive_rating?: Resolver<
		Maybe<ResolversTypes["Int"]>,
		ParentType,
		ContextType
	>;
	MGLT?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
	name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	model?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	manufacturer?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	length?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
	crew?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	max_atmosphering_speed?: Resolver<
		Maybe<ResolversTypes["Int"]>,
		ParentType,
		ContextType
	>;
	passengers?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	cargo_capacity?: Resolver<
		Maybe<ResolversTypes["Int"]>,
		ParentType,
		ContextType
	>;
	consumables?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	films?: Resolver<
		Array<Maybe<ResolversTypes["Film"]>>,
		ParentType,
		ContextType
	>;
	pilots?: Resolver<
		Array<Maybe<ResolversTypes["People"]>>,
		ParentType,
		ContextType
	>;
	url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	cost_in_credits?: Resolver<
		Maybe<ResolversTypes["Int"]>,
		ParentType,
		ContextType
	>;
	images?: Resolver<
		Array<Maybe<ResolversTypes["String"]>>,
		ParentType,
		ContextType,
		RequireFields<StarshipImagesArgs, never>
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VehicleResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes["Vehicle"] = ResolversParentTypes["Vehicle"]
> = {
	vehicle_class?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	model?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	manufacturer?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	length?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
	crew?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	max_atmosphering_speed?: Resolver<
		Maybe<ResolversTypes["Int"]>,
		ParentType,
		ContextType
	>;
	passengers?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	cargo_capacity?: Resolver<
		Maybe<ResolversTypes["Int"]>,
		ParentType,
		ContextType
	>;
	consumables?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	films?: Resolver<
		Array<Maybe<ResolversTypes["Film"]>>,
		ParentType,
		ContextType
	>;
	pilots?: Resolver<
		Array<Maybe<ResolversTypes["People"]>>,
		ParentType,
		ContextType
	>;
	url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	cost_in_credits?: Resolver<
		Maybe<ResolversTypes["Int"]>,
		ParentType,
		ContextType
	>;
	images?: Resolver<
		Array<Maybe<ResolversTypes["String"]>>,
		ParentType,
		ContextType,
		RequireFields<VehicleImagesArgs, never>
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VehiclesResponseResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes["VehiclesResponse"] = ResolversParentTypes["VehiclesResponse"]
> = {
	pageInfo?: Resolver<
		Maybe<ResolversTypes["PageInfo"]>,
		ParentType,
		ContextType
	>;
	data?: Resolver<
		Array<Maybe<ResolversTypes["Vehicle"]>>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = IContext> = {
	All?: AllResolvers<ContextType>;
	AllResponse?: AllResponseResolvers<ContextType>;
	Film?: FilmResolvers<ContextType>;
	FilmsResponse?: FilmsResponseResolvers<ContextType>;
	PageInfo?: PageInfoResolvers<ContextType>;
	People?: PeopleResolvers<ContextType>;
	PeopleResponse?: PeopleResponseResolvers<ContextType>;
	Planet?: PlanetResolvers<ContextType>;
	PlanetsResposne?: PlanetsResposneResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	Specie?: SpecieResolvers<ContextType>;
	SpeciesResponse?: SpeciesResponseResolvers<ContextType>;
	StarhipsResponse?: StarhipsResponseResolvers<ContextType>;
	Starship?: StarshipResolvers<ContextType>;
	Vehicle?: VehicleResolvers<ContextType>;
	VehiclesResponse?: VehiclesResponseResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = IContext> = Resolvers<ContextType>;

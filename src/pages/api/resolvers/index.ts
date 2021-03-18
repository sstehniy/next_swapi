import { Planet, Resolvers } from "../types";

export const resolvers: Resolvers = {
	Query: {
		getAll: async (_, { keyword, limit, offset }, { db }) => {
			const collection = db.collection("all");
			let hasNextPage = false;
			const regex = new RegExp(keyword || "", "i");
			const docs = await collection
				.find({
					$or: [{ title: regex }, { name: regex }, { model: regex }],
				})
				.limit(limit || 300)
				.skip(offset || 0)
				.toArray();
			const totalCount = await collection.countDocuments({
				$or: [{ title: regex }, { name: regex }, { model: regex }],
			});

			if (docs.length + (offset || 0) < totalCount) {
				hasNextPage = true;
			}
			return { data: docs, pageInfo: { hasNextPage } };
		},
		getPeople: async (_, { keyword, name, limit, offset }, { db }) => {
			const collection = db.collection("people");
			if (name) {
				const object = await collection.find({ name }).toArray();
				return { data: object };
			}
			let hasNextPage = false;
			const regex = new RegExp(keyword || "", "i");
			const data = await collection
				.find({
					$or: [{ title: regex }, { name: regex }, { model: regex }],
				})
				.limit(limit || 300)
				.skip(offset || 0)
				.toArray();
			const totalCount = await collection.countDocuments({
				$or: [{ title: regex }, { name: regex }, { model: regex }],
			});

			if (data.length + (offset || 0) < totalCount) {
				hasNextPage = true;
			}

			return { data, pageInfo: { hasNextPage } };
		},
		getFilms: async (_, { keyword, title, limit, offset }, { db }) => {
			const collection = await db.collection("films");
			if (title) {
				const object = await collection.find({ title }).toArray();
				return { data: object };
			}
			let hasNextPage = false;
			const regex = new RegExp(keyword || "", "i");
			const data = await collection
				.find({
					$or: [{ title: regex }, { name: regex }, { model: regex }],
				})
				.limit(limit || 300)
				.skip(offset || 0)
				.toArray();
			const totalCount = await collection.countDocuments({
				$or: [{ title: regex }, { name: regex }, { model: regex }],
			});

			if (data.length + (offset || 0) < totalCount) {
				hasNextPage = true;
			}

			return { data, pageInfo: { hasNextPage } };
		},
		getPlanets: async (_, { keyword, name, limit, offset }, { db }) => {
			const collection = await db.collection("planets");
			if (name) {
				const object = await collection.find({ name }).toArray();
				return { data: object };
			}
			let hasNextPage = false;
			const regex = new RegExp(keyword || "", "i");
			const data = await collection
				.find({
					$or: [{ title: regex }, { name: regex }, { model: regex }],
				})
				.limit(limit || 300)
				.skip(offset || 0)
				.toArray();
			const totalCount = await collection.countDocuments({
				$or: [{ title: regex }, { name: regex }, { model: regex }],
			});

			if (data.length + (offset || 0) < totalCount) {
				hasNextPage = true;
			}

			return { data, pageInfo: { hasNextPage } };
		},
		getStarships: async (_, { keyword, name, limit, offset }, { db }) => {
			const collection = await db.collection("starships");
			if (name) {
				const object = await collection.find({ name }).toArray();
				return { data: object };
			}
			let hasNextPage = false;
			const regex = new RegExp(keyword || "", "i");
			const data = await collection
				.find({
					$or: [{ title: regex }, { name: regex }, { model: regex }],
				})
				.limit(limit || 300)
				.skip(offset || 0)
				.toArray();
			const totalCount = await collection.countDocuments({
				$or: [{ title: regex }, { name: regex }, { model: regex }],
			});

			if (data.length + (offset || 0) < totalCount) {
				hasNextPage = true;
			}

			return { data, pageInfo: { hasNextPage } };
		},
		getVehicles: async (_, { keyword, name, limit, offset }, { db }) => {
			const collection = await db.collection("vehicles");
			if (name) {
				const object = await collection.find({ name }).toArray();
				return { data: object };
			}
			let hasNextPage = false;
			const regex = new RegExp(keyword || "", "i");
			const data = await collection
				.find({
					$or: [{ title: regex }, { name: regex }, { model: regex }],
				})
				.limit(limit || 300)
				.skip(offset || 0)
				.toArray();
			const totalCount = await collection.countDocuments({
				$or: [{ title: regex }, { name: regex }, { model: regex }],
			});

			if (data.length + (offset || 0) < totalCount) {
				hasNextPage = true;
			}

			return { data, pageInfo: { hasNextPage } };
		},
	},
	All: {
		// eslint-disable-next-line no-underscore-dangle
		__resolveType(obj) {
			if ("rotation_period" in obj) return "Planet";
			if ("designation" in obj) return "Specie";
			if ("MGLT" in obj) return "Vehicle";
			if ("director" in obj) return "Film";
			if ("birth_year" in obj) return "People";
			return "Vehicle";
		},
	},
	People: {
		homeworld: async (root, _, { db }) => {
			const url = root.homeworld;
			const planet = await db.collection("planets").find({ url }).toArray();

			return planet[0] as Planet;
		},
		films: async (root, _, { db }) => {
			const urls = root.films;
			const films = await db
				.collection("films")
				.find({ url: { $in: [...urls] } })
				.toArray();

			return films;
		},
		species: async (root, _, { db }) => {
			const urls = root.species;
			const species = await db
				.collection("species")
				.find({ url: { $in: [...urls] } })
				.toArray();

			return species;
		},
		starships: async (root, _, { db }) => {
			const urls = root.starships;
			const starships = await db
				.collection("starships")
				.find({ url: { $in: [...urls] } })
				.toArray();

			return starships;
		},
		vehicles: async (root, _, { db }) => {
			const urls = root.vehicles;
			const vehicles = await db
				.collection("vehicles")
				.find({ url: { $in: [...urls] } })
				.toArray();

			return vehicles;
		},
	},
	Film: {
		species: async (root, _, { db }) => {
			const urls = root.species;
			const species = await db
				.collection("species")
				.find({ url: { $in: [...urls] } })
				.toArray();

			return species;
		},
		starships: async (root, _, { db }) => {
			const urls = root.starships;
			const starships = await db
				.collection("starships")
				.find({ url: { $in: [...urls] } })
				.toArray();

			return starships;
		},
		vehicles: async (root, _, { db }) => {
			const urls = root.vehicles;
			const vehicles = await db
				.collection("vehicles")
				.find({ url: { $in: [...urls] } })
				.toArray();

			return vehicles;
		},
		characters: async (root, _, { db }) => {
			const urls = root.characters;
			const characters = await db
				.collection("people")
				.find({ url: { $in: [...urls] } })
				.toArray();

			return characters;
		},
		planets: async (root, _, { db }) => {
			const urls = root.planets;
			const planets = await db
				.collection("planets")
				.find({ url: { $in: [...urls] } })
				.toArray();

			return planets;
		},
	},
	Starship: {
		films: async (root, _, { db }) => {
			const urls = root.films;
			const films = await db
				.collection("films")
				.find({ url: { $in: [...urls] } })
				.toArray();

			return films;
		},
		pilots: async (root, _, { db }) => {
			const urls = root.pilots;
			const pilots = await db
				.collection("people")
				.find({ url: { $in: [...urls] } })
				.toArray();

			return pilots;
		},
	},
	Vehicle: {
		films: async (root, _, { db }) => {
			const urls = root.films;
			const films = await db
				.collection("films")
				.find({ url: { $in: [...urls] } })
				.toArray();

			return films;
		},
		pilots: async (root, _, { db }) => {
			const urls = root.pilots;
			const pilots = await db
				.collection("people")
				.find({ url: { $in: [...urls] } })
				.toArray();

			return pilots;
		},
	},
	Specie: {
		people: async (root, _, { db }) => {
			const urls = root.people;
			const people = await db
				.collection("people")
				.find({ url: { $in: [...urls] } })
				.toArray();

			return people;
		},
		films: async (root, _, { db }) => {
			const urls = root.films;
			const films = await db
				.collection("films")
				.find({ url: { $in: [...urls] } })
				.toArray();

			return films;
		},
	},
	Planet: {
		residents: async (root, _, { db }) => {
			const urls = root.residents;
			const residents = await db
				.collection("people")
				.find({ url: { $in: [...urls] } })
				.toArray();

			return residents;
		},
		films: async (root, _, { db }) => {
			const urls = root.films;
			const films = await db
				.collection("films")
				.find({ url: { $in: [...urls] } })
				.toArray();

			return films;
		},
	},
};

import { IResolvers } from "apollo-server-micro";
import { Planet, Resolvers, ResolversTypes } from "../types";

export const resolvers: Resolvers = {
	Query: {
		getAll: async (_, { category }, { db }) => {
			const collections = await db.listCollections();
			const data = [];

			if (category) {
				const allOfCategory = await db.collection(category).get();
				allOfCategory.forEach(doc => data.push(doc.data()));
			} else {
				const promises = [];
				for (const collection of collections) {
					promises.push(collection.get());
				}
				const snapshots = await Promise.all(promises);
				snapshots.forEach(snapshot =>
					snapshot.forEach(doc => {
						data.push(doc.data());
					})
				);
			}

			return data;
		},
		getPeople: async (_, { name }, { db }) => {
			const collection = await db.collection("people");
			const data = [];
			let query;
			if (name) {
				query = collection.where("name", "==", name);
			} else {
				query = collection;
			}
			const snapshot = await query.get();
			snapshot.forEach(p => data.push(p.data()));
			return data;
		},
		getFilms: async (_, { title }, { db }) => {
			const collection = await db.collection("films");
			const data = [];
			let query;
			if (title) {
				query = collection.where("title", "==", title);
			} else {
				query = collection;
			}
			const snapshot = await query.get();
			snapshot.forEach(p => data.push(p.data()));
			return data;
		},
		getPlanets: async (_, { name }, { db }) => {
			const collection = await db.collection("planets");
			const data = [];
			let query;
			if (name) {
				query = collection.where("name", "==", name);
			} else {
				query = collection;
			}
			const snapshot = await query.get();
			snapshot.forEach(p => data.push(p.data()));
			return data;
		},
		getSpecies: async (_, { name }, { db }) => {
			const collection = await db.collection("species");
			const data = [];
			let query;
			if (name) {
				query = collection.where("name", "==", name);
			} else {
				query = collection;
			}
			const snapshot = await query.get();
			snapshot.forEach(p => data.push(p.data()));
			return data;
		},
		getStarships: async (_, { name }, { db }) => {
			const collection = await db.collection("starships");
			const data = [];
			let query;
			if (name) {
				query = collection.where("name", "==", name);
			} else {
				query = collection;
			}
			const snapshot = await query.get();
			snapshot.forEach(p => data.push(p.data()));
			return data;
		},
		getVehicles: async (_, { name }, { db }) => {
			const collection = await db.collection("vehicles");
			const data = [];
			let query;
			if (name) {
				query = collection.where("name", "==", name);
			} else {
				query = collection;
			}
			const snapshot = await query.get();
			snapshot.forEach(p => data.push(p.data()));
			return data;
		},
	},
	All: {
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
			const link = root.homeworld;
			const planet = await db
				.collection("planets")
				.where("url", "==", link)
				.get();
			console.log(planet.docs[0].data());
			return planet.docs[0].data() as Planet;
		},
		films: async (root, _, { db }) => {
			const links = root.films;
			const promises = [];
			const data = [];
			for (const link of links) {
				promises.push(
					db.collection("films").where("url", "==", link).limit(1).get()
				);
			}
			const snapshots = await Promise.all(promises);
			snapshots.forEach(sp => data.push(sp.docs[0].data()));
			return data;
		},
		species: async (root, _, { db }) => {
			const links = root.species;
			const promises = [];
			const data = [];
			for (const link of links) {
				promises.push(
					db.collection("species").where("url", "==", link).limit(1).get()
				);
			}
			const snapshots = await Promise.all(promises);
			snapshots.forEach(sp => data.push(sp.docs[0].data()));
			return data;
		},
		starships: async (root, _, { db }) => {
			const links = root.starships;
			const promises = [];
			const data = [];
			for (const link of links) {
				promises.push(
					db.collection("starships").where("url", "==", link).limit(1).get()
				);
			}
			const snapshots = await Promise.all(promises);
			snapshots.forEach(sp => data.push(sp.docs[0].data()));
			return data;
		},
		vehicles: async (root, _, { db }) => {
			const links = root.vehicles;
			const promises = [];
			const data = [];
			for (const link of links) {
				promises.push(
					db.collection("vehicles").where("url", "==", link).limit(1).get()
				);
			}
			const snapshots = await Promise.all(promises);
			snapshots.forEach(sp => data.push(sp.docs[0].data()));
			return data;
		},
	},
	Film: {
		species: async (root, _, { db }) => {
			const links = root.species;
			const promises = [];
			const data = [];
			for (const link of links) {
				promises.push(
					db.collection("species").where("url", "==", link).limit(1).get()
				);
			}
			const snapshots = await Promise.all(promises);
			snapshots.forEach(sp => data.push(sp.docs[0].data()));
			return data;
		},
		starships: async (root, _, { db }) => {
			const links = root.starships;
			const promises = [];
			const data = [];
			for (const link of links) {
				promises.push(
					db.collection("starships").where("url", "==", link).limit(1).get()
				);
			}
			const snapshots = await Promise.all(promises);
			snapshots.forEach(sp => data.push(sp.docs[0].data()));
			return data;
		},
		vehicles: async (root, _, { db }) => {
			const links = root.vehicles;
			const promises = [];
			const data = [];
			for (const link of links) {
				promises.push(
					db.collection("vehicles").where("url", "==", link).limit(1).get()
				);
			}
			const snapshots = await Promise.all(promises);
			snapshots.forEach(sp => data.push(sp.docs[0].data()));
			return data;
		},
		characters: async (root, _, { db }) => {
			const links = root.characters;
			const promises = [];
			const data = [];
			for (const link of links) {
				promises.push(
					db.collection("people").where("url", "==", link).limit(1).get()
				);
			}
			const snapshots = await Promise.all(promises);
			snapshots.forEach(sp => data.push(sp.docs[0].data()));
			return data;
		},
		planets: async (root, _, { db }) => {
			const links = root.planets;
			const promises = [];
			const data = [];
			for (const link of links) {
				promises.push(
					db.collection("planets").where("url", "==", link).limit(1).get()
				);
			}
			const snapshots = await Promise.all(promises);
			snapshots.forEach(sp => data.push(sp.docs[0].data()));
			return data;
		},
	},
	Starship: {
		films: async (root, _, { db }) => {
			const links = root.films;
			const promises = [];
			const data = [];
			for (const link of links) {
				promises.push(
					db.collection("films").where("url", "==", link).limit(1).get()
				);
			}
			const snapshots = await Promise.all(promises);
			snapshots.forEach(sp => data.push(sp.docs[0].data()));
			return data;
		},
		pilots: async (root, _, { db }) => {
			const links = root.pilots;
			const promises = [];
			const data = [];
			for (const link of links) {
				promises.push(
					db.collection("people").where("url", "==", link).limit(1).get()
				);
			}
			const snapshots = await Promise.all(promises);
			snapshots.forEach(sp => data.push(sp.docs[0].data()));
			return data;
		},
	},
	Vehicle: {
		films: async (root, _, { db }) => {
			const links = root.films;
			const promises = [];
			const data = [];
			for (const link of links) {
				promises.push(
					db.collection("films").where("url", "==", link).limit(1).get()
				);
			}
			const snapshots = await Promise.all(promises);
			snapshots.forEach(sp => data.push(sp.docs[0].data()));
			return data;
		},
		pilots: async (root, _, { db }) => {
			const links = root.pilots;
			const promises = [];
			const data = [];
			for (const link of links) {
				promises.push(
					db.collection("people").where("url", "==", link).limit(1).get()
				);
			}
			const snapshots = await Promise.all(promises);
			snapshots.forEach(sp => data.push(sp.docs[0].data()));
			return data;
		},
	},
	Specie: {
		people: async (root, _, { db }) => {
			const links = root.people;
			const promises = [];
			const data = [];
			for (const link of links) {
				promises.push(
					db.collection("people").where("url", "==", link).limit(1).get()
				);
			}
			const snapshots = await Promise.all(promises);
			snapshots.forEach(sp => data.push(sp.docs[0].data()));
			return data;
		},
		films: async (root, _, { db }) => {
			const links = root.films;
			const promises = [];
			const data = [];
			for (const link of links) {
				promises.push(
					db.collection("films").where("url", "==", link).limit(1).get()
				);
			}
			const snapshots = await Promise.all(promises);
			snapshots.forEach(sp => data.push(sp.docs[0].data()));
			return data;
		},
	},
	Planet: {
		residents: async (root, _, { db }) => {
			const links = root.residents;
			const promises = [];
			const data = [];
			for (const link of links) {
				promises.push(
					db.collection("people").where("url", "==", link).limit(1).get()
				);
			}
			const snapshots = await Promise.all(promises);
			snapshots.forEach(sp => data.push(sp.docs[0].data()));
			return data;
		},
		films: async (root, _, { db }) => {
			const links = root.films;
			const promises = [];
			const data = [];
			for (const link of links) {
				promises.push(
					db.collection("films").where("url", "==", link).limit(1).get()
				);
			}
			const snapshots = await Promise.all(promises);
			snapshots.forEach(sp => data.push(sp.docs[0].data()));
			return data;
		},
	},
};

/// -------------------- Tous les régiments de l'Armée de Terre --------------------

const regiments = [
  // -------------------- Infanterie --------------------
  { nom:"1er régiment de tirailleurs", ville:"Épinal", lat:48.170, lon:6.450, arme:"Infanterie", parachutiste:false, legion:false, marine:false },
  { nom:"13e bataillon de chasseurs alpins", ville:"Barby", lat:45.657, lon:5.915, arme:"Infanterie", parachutiste:false, legion:false, marine:false },
  { nom:"94e régiment d'infanterie", ville:"Sissonne", lat:49.566, lon:3.601, arme:"Infanterie", parachutiste:false, legion:false, marine:false },
  { nom:"8e régiment de parachutistes d'infanterie de marine", ville:"Castres", lat:43.602, lon:2.245, arme:"Infanterie", parachutiste:true, legion:false, marine:true },
  { nom:"21e régiment d'infanterie de marine", ville:"Fréjus", lat:43.431, lon:6.735, arme:"Infanterie", parachutiste:false, legion:false, marine:true },

  // -------------------- Parachutistes --------------------
  { nom:"1er régiment de chasseurs parachutistes", ville:"Pamiers", lat:43.117, lon:1.617, arme:"Infanterie", parachutiste:true, legion:false, marine:false },

  // -------------------- Cavalerie / Blindés --------------------
  { nom:"1er régiment de chasseurs", ville:"Thierville-sur-Meuse", lat:49.230, lon:5.345, arme:"Cavalerie", parachutiste:false, legion:false, marine:false },
  { nom:"2e régiment de hussards", ville:"Haguenau", lat:48.817, lon:7.783, arme:"Cavalerie", parachutiste:false, legion:false, marine:false },
  { nom:"3e régiment de hussards", ville:"Metz", lat:49.120, lon:6.170, arme:"Cavalerie", parachutiste:false, legion:false, marine:false },
  { nom:"5e régiment de dragons", ville:"Mailly-le-Camp", lat:48.716, lon:4.182, arme:"Cavalerie", parachutiste:false, legion:false, marine:false },
  { nom:"12e régiment de cuirassiers", ville:"Olive‑sur‑Toul", lat:48.679, lon:5.852, arme:"Cavalerie", parachutiste:false, legion:false, marine:false },
  { nom:"501e régiment de chars de combat", ville:"Mourmelon‑le‑Grand", lat:49.064, lon:4.253, arme:"Cavalerie", parachutiste:false, legion:false, marine:false },

  // -------------------- Artillerie --------------------
  { nom:"1er régiment d'artillerie", ville:"Bourogne", lat:47.667, lon:7.017, arme:"Artillerie", parachutiste:false, legion:false, marine:false },
  { nom:"35e régiment d'artillerie parachutiste", ville:"Tarbes", lat:43.233, lon:0.074, arme:"Artillerie", parachutiste:true, legion:false, marine:false },
  { nom:"40e régiment d'artillerie", ville:"Suippes", lat:49.083, lon:4.433, arme:"Artillerie", parachutiste:false, legion:false, marine:false },
  { nom:"54e régiment d'artillerie", ville:"Hyères", lat:43.120, lon:6.130, arme:"Artillerie", parachutiste:false, legion:false, marine:false },
  { nom:"61e régiment d'artillerie", ville:"Chaumont", lat:48.110, lon:5.141, arme:"Artillerie", parachutiste:false, legion:false, marine:false },
  { nom:"93e régiment d'artillerie de montagne", ville:"Varces", lat:45.066, lon:5.750, arme:"Artillerie", parachutiste:false, legion:false, marine:false },
  { nom:"3e régiment d'artillerie de marine", ville:"Canjuers", lat:43.569, lon:6.364, arme:"Artillerie", parachutiste:false, legion:false, marine:true },

  // -------------------- Génie --------------------
  { nom:"13e régiment du génie", ville:"Valdahon", lat:47.175, lon:6.392, arme:"Génie", parachutiste:false, legion:false, marine:false },
  { nom:"3e régiment du génie", ville:"Charleville-Mézières", lat:49.7833, lon:4.7167, arme:"Génie", parachutiste:false, legion:false, marine:false },
  { nom:"6e régiment du génie", ville:"Angers", lat:47.478, lon:-0.563, arme:"Génie", parachutiste:false, legion:false, marine:false },
  { nom:"17e régiment du génie parachutiste", ville:"Montauban", lat:44.020, lon:1.350, arme:"Génie", parachutiste:true, legion:false, marine:false },
  { nom:"19e régiment du génie", ville:"Besançon", lat:47.237, lon:6.024, arme:"Génie", parachutiste:false, legion:false, marine:false },
  { nom:"31e régiment du génie", ville:"Laval", lat:48.066, lon:-0.766, arme:"Génie", parachutiste:false, legion:false, marine:false },
  { nom:"1er régiment étranger du génie", ville:"Laudun", lat:44.163, lon:4.656, arme:"Génie", parachutiste:false, legion:true, marine:false },
  { nom:"2e régiment étranger du génie", ville:"Saint-Christol", lat:43.688, lon:4.661, arme:"Génie", parachutiste:false, legion:true, marine:false },
  { nom:"Brigade de sapeurs‑pompiers de Paris", ville:"Paris", lat:48.856, lon:2.352, arme:"Génie", parachutiste:false, legion:false, marine:false },
  { nom:"1er régiment d'instruction et d'intervention de la sécurité civile", ville:"Nogent‑le‑Rotrou", lat:48.327, lon:0.826, arme:"Génie", parachutiste:false, legion:false, marine:false },

  // -------------------- Transmissions --------------------
  { nom:"40e régiment de transmissions", ville:"Thionville", lat:49.357, lon:6.169, arme:"Transmissions", parachutiste:false, legion:false, marine:false },
  { nom:"41e régiment de transmissions", ville:"Douai", lat:50.370, lon:3.080, arme:"Transmissions", parachutiste:false, legion:false, marine:false },
  { nom:"44e régiment de transmissions", ville:"Mutzig", lat:48.455, lon:7.442, arme:"Transmissions", parachutiste:false, legion:false, marine:false },
  { nom:"48e régiment de transmissions", ville:"Agen", lat:44.200, lon:0.617, arme:"Transmissions", parachutiste:false, legion:false, marine:false },
  { nom:"53e régiment de transmissions", ville:"Besançon", lat:47.237, lon:6.024, arme:"Transmissions", parachutiste:false, legion:false, marine:false },
  { nom:"54e régiment de transmissions", ville:"Haguenau", lat:48.817, lon:7.783, arme:"Transmissions", parachutiste:false, legion:false, marine:false },

  // -------------------- Train / Logistique --------------------
  { nom:"121e régiment du train", ville:"Saint‑Denis", lat:20.878, lon:55.448, arme:"Train", parachutiste:false, legion:false, marine:false },
  { nom:"511e régiment du train", ville:"Chambéry", lat:45.564, lon:5.917, arme:"Train", parachutiste:false, legion:false, marine:false },
  { nom:"516e régiment du train", ville:"Toul", lat:48.692, lon:5.889, arme:"Train", parachutiste:false, legion:false, marine:false },

  // -------------------- Matériel --------------------
  { nom:"1er régiment du matériel", ville:"Woippy", lat:49.149, lon:6.188, arme:"Matériel", parachutiste:false, legion:false, marine:false },
  { nom:"2e régiment du matériel", ville:"Bruz", lat:48.030, lon:-1.734, arme:"Matériel", parachutiste:false, legion:false, marine:false },
  { nom:"3e régiment du matériel", ville:"Muret", lat:43.546, lon:1.361, arme:"Matériel", parachutiste:false, legion:false, marine:false },
  { nom:"4e régiment du matériel", ville:"Nîmes", lat:43.830, lon:4.350, arme:"Matériel", parachutiste:false, legion:false, marine:false },
  { nom:"6e régiment du matériel", ville:"Besançon", lat:47.237, lon:6.024, arme:"Matériel", parachutiste:false, legion:false, marine:false },

  // -------------------- Légion étrangère --------------------
  { nom:"1er régiment étranger de cavalerie", ville:"Marseille", lat:43.300, lon:5.380, arme:"Cavalerie", parachutiste:false, legion:true, marine:false },
  { nom:"2e régiment étranger d'infanterie", ville:"Nîmes", lat:43.837, lon:4.360, arme:"Infanterie", parachutiste:false, legion:true, marine:false },
  { nom:"13e demi‑brigade de légion étrangère", ville:"Dijon", lat:47.316, lon:5.017, arme:"Infanterie", parachutiste:false, legion:true, marine:false },
  { nom:"3e régiment étranger d'infanterie", ville:"Kourou (Guyane)", lat:5.160, lon:-52.640, arme:"Infanterie", parachutiste:false, legion:true, marine:false },
  { nom:"5e régiment étranger", ville:"Mayotte", lat:-12.828, lon:45.136, arme:"Infanterie", parachutiste:false, legion:true, marine:false },

  // -------------------- Troupes de Marine Outre‑mer --------------------
  { nom:"RIMaP‑NC", ville:"Nouméa (Nouvelle‑Calédonie)", lat:-22.271, lon:166.445, arme:"Infanterie", parachutiste:false, legion:false, marine:true },
  { nom:"33e régiment d'infanterie de marine", ville:"Fort‑de‑France (Martinique)", lat:14.610, lon:-61.072, arme:"Infanterie", parachutiste:false, legion:false, marine:true },
  { nom:"9e régiment d'infanterie de marine", ville:"Cayenne (Guyane)", lat:4.933, lon:-52.330, arme:"Infanterie", parachutiste:false, legion:false, marine:true },
  { nom:"5e régiment interarmes d'outre‑mer", ville:"Djibouti", lat:11.588, lon:43.145, arme:"Infanterie", parachutiste:false, legion:false, marine:true }
];
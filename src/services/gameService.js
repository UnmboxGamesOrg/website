import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

function formatGameData(game) {
  if (!game) return null;

  return {
    ...game,
    heroImage: game.hero_image || game.heroImage,
    iconImage: game.icon_image || game.iconImage,
    longDescription: game.long_description || game.longDescription,
    technicalSpecs: game.technical_specs || game.technicalSpecs,
    accessibilityFeatures:
      game.accessibility_features || game.accessibilityFeatures,
    keyFeatures: game.key_features || game.keyFeatures,
  };
}

export async function fetchAllGames() {
  const { data, error } = await supabase
    .from("games")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching games:", error);
    return [];
  }

  return data.map(formatGameData);
}

export async function fetchLatestGames(count = 2) {
  const { data, error } = await supabase
    .from("games")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(count);

  if (error) {
    console.error("Error fetching latest games:", error);
    return [];
  }

  return data.map(formatGameData);
}

export async function fetchGameBySlug(slug) {
  const { data, error } = await supabase
    .from("games")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error(`Error fetching game with slug ${slug}:`, error);
    return null;
  }

  return formatGameData(data);
}

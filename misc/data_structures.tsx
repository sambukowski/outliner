interface Story {}

interface Overview {
  title: string;
  author: string;
  synopsis: string;
}

// TODO: complete character data structures
// TODO: complete world building data structures
// TODO: complete plot data structures
// TODO: complete outline data structures
// TODO: complete file data structures

interface Character {
  name: string;
  description: string;
  arcs: CharacterArc[];
}

interface CharacterArc {
  types: CharacterArcType[];
}

enum PlotArchitype {
  // https://en.wikipedia.org/wiki/List_of_genres
  // TODO: need to figure out a way to add modifiers or subgenres to these
  Action,
  Adventure, // quest or voyage and return
  Comedy,
  ComingOfAge,
  CrimeDrama, // (undercover cop, law enforcement)
  DefeatTheMonster,
  Fantasy,
  FishOutOfWater, // Isekai
  Heist,
  Historical,
  Horror,
  Information, // broader: ie. quest for knowledge, secret, or wisdom
  MasterApprentice,
  Mystery, // narrower: ie. murder, whodunit or other
  RagsToRiches,
  Rebirth, // or transformation
  Relationship_Buddy, // ie. buddy cop
  Relationship_Family,
  Relationship_Romance,
  Revenge,
  Sacrifice, // martyr
  Satire,
  ScienceFiction,
  Speculative,
  Survival,
  Thriller,
  Tragedy,
  TravelLog, // or road trip diary
  UnderdogStory,
  WarStory, // military
}

enum StoryStructure {
  ThreeAct, //https://en.wikipedia.org/wiki/Three-act_structure
  HerosJourney, // https://en.wikipedia.org/wiki/Hero%27s_journey
  FiveAct, // https://www.scribophile.com/academy/what-is-the-five-act-structure
  SevenAct, // https://games.udlvirtual.edu.pe/view/7-act-story-structure.html
  FreytagsPryamid, // https://blog.reedsy.com/guide/story-structure/freytags-pyramid/
  InMediaRes, // https://en.wikipedia.org/wiki/In_medias_res
  Nonlinear,
  Circular, // https://industrialscripts.com/circular-storytelling/
  Parallel, // https://www.storyboardthat.com/articles/e/nonlinear-plots
  FramingDevice, // (story within a story) https://www.tor.com/2013/12/04/story-worlds-frame-stories/
  Episodic, // https://en.wikipedia.org/wiki/Episodic_storytelling
  Vignette, // https://www.masterclass.com/articles/what-is-a-vignette-in-literature-defining-the-literary-device-plus-5-tips-on-writing-vignettes
  Braided, // http://www.thebeginningwriter.com/2013/04/layering-your-story-line-using-braiding.html
  Hyperstory, // https://en.wikipedia.org/wiki/Story_structure#Interactive_narrative (generally nontraditional with a somewhat multibedia aspect)
}

enum CharacterArcType {}

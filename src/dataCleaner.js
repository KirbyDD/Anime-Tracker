const dataCleaner = data => {
  return data.map(show => {
    return {
      id: show.id,
      synopsis: show.attributes.synopsis,
      enTitle: show.attributes.titles.en,
      jpTitle: show.attributes.titles.en_jp,
      rating: show.attributes.averageRating,
      startDate: show.attributes.startDate,
      endDate: show.attributes.endDate,
      ageRating: show.attributes.ageRatingGuide,
      posterImage: show.attributes.posterImage,
      coverImage: show.attributes.coverImage,
      episodes: show.attributes.episodeCount
    };
  });
};

export default dataCleaner;

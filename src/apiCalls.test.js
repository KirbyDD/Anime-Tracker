import { fetchAnime, fetchAdditionalAnime } from './apiCalls';

describe('fetchAnime', () => {
  let mockAnime;
  let mockAnimeResponse;

  beforeEach(() => {
    mockAnime = { id: 1, title: 'Life of Tron'}
    mockAnimeResponse = [
      { id: 2, title: 'Life of Kat'},
      mockAnime
    ]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockAnimeResponse)
      })
    })
  })

  it('should be called with correct params', async () => {
    await fetchAnime();
    expect(window.fetch).toHaveBeenCalledWith('https://kitsu.io/api/edge/anime');
  })

  it('should return a parsed response if status is ok', async () => {
    const result = await fetchAnime();
    expect(result).toEqual(mockAnimeResponse);
  })

  it('should be called with correct params', async () => {
    await fetchAdditionalAnime();
    expect(window.fetch).toHaveBeenCalledWith('https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=10');
  })

  it('should return a parsed response if status is ok', async () => {
    const result = await fetchAdditionalAnime();
    expect(result).toEqual(mockAnimeResponse);
  })

})
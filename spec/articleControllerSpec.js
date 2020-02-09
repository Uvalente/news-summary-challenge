(function (exports) {
  let articleController

  function fetchArticlesFromApi () {
    console.log('fetchArticlesFromApi')
    let articleController2 = new ArticleController(new ArticleList)
    articleController2.fetchArticles('/public/mockJson/mockMultipleArticlesAPI.json').then((data) => {
      expect(data.length).toEqual(2)
      expect(articleController2.articleList.list[0].title).toEqual("Alex Salmond speech – first minister hits back over Scottish independence")
      expect(articleController2.articleList.list[1].title).toEqual("Brighton 1-1 Watford: Premier League – as it happened")
    })
  }

  function fetchSingleArticleFromApi () {
    console.log('fetchSingleArticleFromApi')
    articleController = new ArticleController(new ArticleList)
    articleController.fetchSingleArticle('/public/mockJson/mockSingleArticleAPI.json').then((data) => {
      expect(data).toEqual(1)
      expect(articleController.articleList.list[0].title).toEqual("Alex Salmond speech – first minister hits back over Scottish independence")
    })
  }

  fetchArticlesFromApi()
  fetchSingleArticleFromApi()
})(this)

// Guardian query example
// "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?page-size=2" 

// Guardian Json example
// {"response":{"status":"ok","userTier":"developer","total":2171375,"startIndex":1,"pageSize":2,"currentPage":1,"pages":1085688,"orderBy":"newest","results":[{"id":"football/live/2020/feb/08/brighton-v-watford-premier-league-live","type":"liveblog","sectionId":"football","sectionName":"Football","webPublicationDate":"2020-02-08T19:39:23Z","webTitle":"Brighton 1-1 Watford: Premier League – as it happened","webUrl":"https://www.theguardian.com/football/live/2020/feb/08/brighton-v-watford-premier-league-live","apiUrl":"https://content.guardianapis.com/football/live/2020/feb/08/brighton-v-watford-premier-league-live","isHosted":false,"pillarId":"pillar/sport","pillarName":"Sport"},{"id":"sport/blog/2020/feb/08/gregor-townsend-scotland-england","type":"article","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2020-02-08T19:20:51Z","webTitle":"Gregor Townsend left to lament Scotland’s failure to take chances | Gerard Meagher","webUrl":"https://www.theguardian.com/sport/blog/2020/feb/08/gregor-townsend-scotland-england","apiUrl":"https://content.guardianapis.com/sport/blog/2020/feb/08/gregor-townsend-scotland-england","isHosted":false,"pillarId":"pillar/sport","pillarName":"Sport"}]}}%  
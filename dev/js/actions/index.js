export const selectNews = (news) => {
    console.log("You clicked on news ", news.title);

    return {
        type: "NEWS_SELECTED",
        payload: news
    }

};
export default () => ({ // eslint-disable-line

  // link file UUID
  id: 'b4f57138-0ca7-11e2-b175-00144feabdc0',

  // canonical URL of the published page
  // https://ig.ft.com/sites/rich-graphics-talk get filled in by the ./configure script
  url: 'https://ig.ft.com/sites/straight-of-hormuz-corridor-of-power',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2012-10-04T17:11:22Z'),

  headline: 'Straight of Hormuz: the corridor of power',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'Fears are rising that Iran’s cornered leadership could block the world’s most critical oil choke point.',

  topic: {
    name: 'Oil',
    url: 'https://www.ft.com/topics/themes/Oil',
  },

  relatedArticle: {
    text: '',
    url: '',
  },

  mainImage: {
    title: '',
    description: '',
    url: '',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Javier Blas', url: 'https://www.ft.com/stream/authorsId/Q0ItMDAwMDY4NQ==-QXV0aG9ycw==' },
    { name: 'Chris Campbell', url: 'https://www.ft.com/stream/authorsId/YjEwZjcxNDktMGNkYy00MzE4LThjYjgtNTY4NDFmNmY2MWRj-QXV0aG9ycw==' },
  ],

  // Appears in the HTML <title>
  title: 'Straight of Hormuz: the corridor of power',

  // meta data
  description: 'Fears are rising that Iran’s cornered leadership could block the world’s most critical oil choke point.',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  // socialHeadline: '',
  // socialSummary:  '',

  // TWITTER
  // twitterImage: '',
  // twitterCreator: '@individual's_account',
  // tweetText:  '',
  // twitterHeadline:  '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});

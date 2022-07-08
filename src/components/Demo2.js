import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "WISN Milwaukee",
      },
      author: "WISN.com Staff",
      title:
        "This is what the Highland Park suspect looked like in disguise - WISN Milwaukee",
      description:
        "This is the disguise Robert E. Bobby Crimo III used at the Highland Park parade",
      url: "https://www.wisn.com/article/highland-park-suspect-in-disguise/40517973",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/crimo-in-disguise-1657054370.jpeg?crop=1.00xw:0.564xh;0,0.179xh&resize=1200:*",
      publishedAt: "2022-07-06T12:25:00Z",
      content:
        "The latest breaking updates, delivered straight to your email inbox.",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title: "Crypto lender Voyager Digital files for bankruptcy - Reuters",
      description:
        'U.S. crypto lender Voyager Digital <a href="https://www.reuters.com/companies/VOYG.TO" target="_blank">(VOYG.TO)</a> said on Wednesday it had filed for bankruptcy, becoming another casualty of a dramatic fall in prices that has shaken the cryptocurrency secto…',
      url: "https://www.reuters.com/technology/crypto-lender-voyager-files-bankruptcy-2022-07-06/",
      urlToImage:
        "https://www.reuters.com/resizer/pJq1iLjWssQ8cbL6O1CNT2AjeZ8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ROGRV6Z32ZKN7BBQ7XHWNIR77E.jpg",
      publishedAt: "2022-07-06T12:25:00Z",
      content:
        "July 6 (Reuters) - U.S. crypto lender Voyager Digital (VOYG.TO) said on Wednesday it had filed for bankruptcy, becoming another casualty of a dramatic fall in prices that has shaken the cryptocurrenc… [+2991 chars]",
    },
    {
      source: {
        id: null,
        name: "WTAE Pittsburgh",
      },
      author: "Nick Matoney",
      title:
        "Carlos Santana concert at Star Lake postponed after performer passes out on stage in Michigan - WTAE Pittsburgh",
      description: "Santana has thanked his fans for their prayers",
      url: "https://www.wtae.com/article/carlos-santana-concert-at-star-lake-postponed-after-performer-passes-out-on-stage-in-michigan/40521746",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/pic-for-web-0124-1657094387.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
      publishedAt: "2022-07-06T11:58:00Z",
      content:
        "BURGETTSTOWN, Pa. —Wednesday nights scheduled concert with Carlos Santana and Earth, Wind &amp; Fire at the Pavilion at Star Lake has been postponed.\r\nNo new date has been set.\r\nThe postponement was … [+512 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Analisa Novak",
      title:
        'Brittney Griner\'s wife Cherelle says it is "very disheartening" that she has not heard from President Biden - CBS News',
      description:
        "In a handwritten letter from Brittney Griner that was delivered to the White House, Griner wrote about how terrified she is.",
      url: "https://www.cbsnews.com/news/brittney-griner-wife-cherelle-russia-biden/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2022/07/05/2114dad9-3515-401c-af3e-f6437afe842a/thumbnail/1200x630/7dd0bfc5af7f49cf0e63aafacd80ebbd/0705-cbsmornings-grinerpartnerwnba-1106215-640x360.jpg",
      publishedAt: "2022-07-06T11:56:00Z",
      content:
        'In a handwritten letter from Brittney Griner that was delivered to the White House on Monday, the WNBA player wrote how terrified she is that she may be imprisoned in Russia "forever." \r\nGriner\'s wif… [+3716 chars]',
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Kathryn Watson, Graham Kates, Aaron Navarro",
      title:
        "Will Trump associates Giuliani, Graham have to testify before a grand jury in Georgia? Fulton County DA petitions court to compel testimony - CBS News",
      description:
        "A special grand jury in Fulton County, Georgia, is probing potential interference in the state's 2020 elections.",
      url: "https://www.cbsnews.com/news/trump-georgia-2020-election-giuliani-lindsey-graham-grand-jury-fulton-county/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2021/01/25/1ed0728f-eb79-4b5f-8a15-8d0f89ca6e35/thumbnail/1200x630/c7c643839b237f66e87cfd25f81d199b/GettyImages-1229917791.jpg",
      publishedAt: "2022-07-06T11:47:00Z",
      content:
        "Washington — The Georgia prosecutor examining former President Donald Trump's efforts to overturn the state's 2020 election results is seeking to compel several Trump allies, including Rudy Giuliani … [+3098 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "'Why not run it back?!' - JWill wonders if Kevin Durant & Kyrie Irving will return to the Nets | KJM - ESPN",
      description:
        "'Why not run it back?!' - JWill wonders if Kevin Durant & Kyrie Irving will return to the Nets | KJMJay Williams and Freddie Coleman discuss Adrian Wojnarows...",
      url: "https://www.youtube.com/watch?v=BlXkPk3eo7Q",
      urlToImage: "https://i.ytimg.com/vi/BlXkPk3eo7Q/maxresdefault.jpg",
      publishedAt: "2022-07-06T11:45:35Z",
      content: null,
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Russian advance on Ukraine's Donetsk region thwarted so far, Kyiv says - Reuters",
      description:
        "Ukraine has so far thwarted an attempted Russian advance into the north of its Donetsk region but the city of Sloviansk and other civilian areas are being heavily shelled, Ukrainian officials said on Wednesday.",
      url: "https://www.reuters.com/world/europe/heavy-fighting-widespread-shelling-battle-donetsk-says-ukrainian-officials-2022-07-06/",
      urlToImage:
        "https://www.reuters.com/resizer/48Tfn7le5Wzwvxtp8Fqphesaw6w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/W7PTVTL5FRMJNCZLIA4Y6QESKU.jpg",
      publishedAt: "2022-07-06T11:19:00Z",
      content:
        "KYIV, July 6 (Reuters) - Ukraine has so far thwarted an attempted Russian advance into the north of its Donetsk region but the city of Sloviansk and other civilian areas are being heavily shelled, Uk… [+5232 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Lisa Rizzolo",
      title: "Mortgage demand sinks even as rates drop - CNBC",
      description:
        "Mortgage demand dropped last week, even as mortgage rates fell, according to the Mortgage Bankers Association.",
      url: "https://www.cnbc.com/2022/07/06/mortgage-demand-sinks-even-as-rates-drop.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106712974-1600806715637-zhouse.jpg?v=1657053976&w=1920&h=1080",
      publishedAt: "2022-07-06T11:00:01Z",
      content:
        "Mortgage rates dropped for the second week in a row, but that didn't revive demand from homeowners or potential buyers. \r\nRates fell 10 basis points last week and have declined 24 basis points in the… [+2110 chars]",
    },
    {
      source: {
        id: null,
        name: "Electrek",
      },
      author: null,
      title:
        "Tesla is still the world’s largest electric car producer despite what you are hearing - Electrek.co",
      description:
        "“Tesla is no longer the world’s largest electric car producer” is the take that the media is parroting this week, but it stems from adding plug-in hybrids into the mix, while everyone agrees that all-electric vehicles are the future of the industry. For years…",
      url: "https://electrek.co/2022/07/06/tesla-worlds-largest-electric-car-producer/",
      urlToImage:
        "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2021/05/Tesla-hero.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-07-06T09:59:00Z",
      content:
        "“Tesla is no longer the world’s largest electric car producer” is the take that the media is parroting this week, but it stems from adding plug-in hybrids into the mix, while everyone agrees that all… [+2487 chars]",
    },
    {
      source: {
        id: "bloomberg",
        name: "Bloomberg",
      },
      author: null,
      title:
        "China Covid News: Shanghai Testing Fuels Concern of Another Lockdown - Bloomberg",
      description: null,
      url: "https://www.bloomberg.com/tosv2.html?vid=&uuid=9dea603f-fd1a-11ec-afed-4647414a624a&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0wNy0wNi9zaGFuZ2hhaS1tYXNzLXRlc3RpbmctZnVlbHMtY29uY2Vybi1hbm90aGVyLWxvY2tkb3duLWxvb21z",
      urlToImage: null,
      publishedAt: "2022-07-06T09:31:58Z",
      content:
        "To continue, please click the box below to let us know you're not a robot.",
    },
    {
      source: {
        id: null,
        name: "Eleven Warriors",
      },
      author: null,
      title:
        "Skull Session: Pac-12 Considers Another “Alliance,” Notre Dame Wants to Stay Independent, and Ohio State H - Eleven Warriors",
      description:
        'Pac-12 is looks "loose partnership" with the ACC, Notre Dame wants to stay independent until it can\'t anymore, Ohio State dominates in social media reach, and more.',
      url: "https://www.elevenwarriors.com/skull-sessions/2022/07/131567/ohio-state-football-pac-12-considers-another-alliance-notre-dame-wants-to-stay-independent-and-ohio-state-has-massive",
      urlToImage:
        "https://www.elevenwarriors.com/sites/default/files/styles/904x490/public/c/2022/07/131567_h.jpg?itok=cnsgloYi",
      publishedAt: "2022-07-06T09:30:23Z",
      content:
        "Folks, it's here.\r\nthe greatest 'shoe on turf #GoBuckspic.twitter.com/8L8z5rBs79\r\nOhio State Football (@OhioStateFB) July 5, 2022\r\nWord of the Day: Latent.\r\n THE ALLIANCE, PT. II. The first \"loose pa… [+5707 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Ben Morse, CNN",
      title:
        "No. 2 overall pick Chet Holmgren shines in NBA Summer League debut as he sets record - CNN",
      description:
        "He came in with a lot of hype and expectation, and in his first professional outing, Chet Holmgren shone.",
      url: "https://www.cnn.com/2022/07/06/sport/chet-holmgren-debut-nba-summer-league-spt-intl/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220706041704-01-chet-holmgren-nba-summer-league-debut-restricted-super-tease.jpg",
      publishedAt: "2022-07-06T09:24:00Z",
      content:
        "(CNN)He came in with a lot of hype and expectation, and in his first professional outing, Chet Holmgren shone. \r\nThe No. 2 overall pick in the 2022 NBA Draft by the Oklahoma City Thunder donned the b… [+2796 chars]",
    },
    {
      source: {
        id: null,
        name: "SciTechDaily",
      },
      author: null,
      title:
        "Large Hadron Collider Successfully Restarted at Record Energy: Revving Up the Search for Dark Matter - SciTechDaily",
      description:
        "The Large Hadron Collider is once again delivering proton collisions to experiments, this time at an unprecedented energy of 13.6 TeV, marking the start of the accelerator’s third run of data taking for physics. A burst of applause erupted in the CERN Control…",
      url: "https://scitechdaily.com/large-hadron-collider-successfully-restarted-at-record-energy-revving-up-the-search-for-dark-matter/",
      urlToImage:
        "https://scitechdaily.com/images/Physics-Particle-Accelerator-Collider-Illustration.jpg",
      publishedAt: "2022-07-06T08:39:39Z",
      content:
        "ByCERNJuly 6, 2022\r\nThe Large Hadron Collider detectors started recording high-energy collisions at the unprecedented energy of 13.6 TeV.\r\nThe Large Hadron Collider is once again delivering proton co… [+6138 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: null,
      title: "Shadow 2024 race: Newsom vs. DeSantis - POLITICO - POLITICO",
      description:
        "The fight highlights how two young governors have captured the attention of their respective parties.",
      url: "https://www.politico.com/news/2022/07/06/newsom-desantis-election-2024-00044128",
      urlToImage:
        "https://static.politico.com/a3/8b/14a895754d8190059c2c75388d28/supreme-court-abortion-states-access-98243.jpg",
      publishedAt: "2022-07-06T08:30:00Z",
      content:
        "The fight highlights how two young governors have captured the attention of their respective parties: On one side is Newsom, a progressive and telegenic leader who survived an attempted recall. On th… [+7024 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Holly Ellyatt",
      title:
        "UK's Boris Johnson fights for his political survival after top resignations and scandals - CNBC",
      description:
        "But he shows no signs of being ready to stand down. Last night, he reshuffled his ministerial team to fill vacancies created by the resignations.",
      url: "https://www.cnbc.com/2022/07/06/boris-johnsons-leadership-hangs-by-a-thread-after-top-resignations.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107084882-1657087126606-gettyimages-1241641358-67685068.jpeg?v=1657090814&w=1920&h=1080",
      publishedAt: "2022-07-06T07:41:00Z",
      content:
        "A snap YouGov poll conducted Tuesday found that 69% of Britons surveyed want Johnson to resign. The poll of 3,009 adults found that only 18% want him to stay on.\r\nLONDON U.K. Prime Minister Boris Joh… [+5906 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Amir Vera, Jason Hanna, Adrienne Broaddus and Helen Regan, CNN",
      title:
        "Highland Park parade shooting suspect charged with 7 counts of murder, state's attorney says - CNN",
      description:
        "The suspect in Monday's mass shooting at a July 4th parade in Highland Park, Illinois, that left seven dead and injured more than two dozen has been charged with seven counts of first-degree murder, Lake County State's Attorney Eric Rinehart announced during …",
      url: "https://www.cnn.com/2022/07/05/us/highland-park-illinois-shooting-july-fourth-parade-tuesday-intl-hnk/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220705010951-highland-park-illinois-shooting-july-4-parade-tuesday-super-tease.jpg",
      publishedAt: "2022-07-06T07:31:00Z",
      content:
        "Highland Park, Illinois (CNN)The suspect in Monday's mass shooting at a July 4th parade in Highland Park, Illinois, that left seven dead and injured more than two dozen has been charged with seven co… [+16586 chars]",
    },
    {
      source: {
        id: null,
        name: "Fox Business",
      },
      author: "Ken Martin",
      title: "Stock futures trade lower on recession concerns - Fox Business",
      description:
        "U.S. equity futures were trading lower on Wednesday ahead of the release of the minutes from the Federal Reserve's latest meeting in which interest rates were raised.",
      url: "https://www.foxbusiness.com/markets/stock-futures-7-6-2022",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/07/0/0/Stocks5-blog-reuters-A.jpg?ve=1&tl=1",
      publishedAt: "2022-07-06T07:10:03Z",
      content:
        "U.S. equity futures were lower after a tepid trading session on Wall Street amid worries about a global recession.\r\nThe major futures indexes suggest a decline of 0.3% when the trading day begins.\r\nT… [+3066 chars]",
    },
    {
      source: {
        id: "independent",
        name: "Independent",
      },
      author: "Jacob Stolworthy",
      title:
        "Tom Hanks questions Pixar’s decision to replace Tim Allen as Buzz Lightyear - The Independent",
      description: "‘I don’t understand that,’ actor said",
      url: "https://www.independent.co.uk/arts-entertainment/films/news/lightyear-buzz-chris-evans-tom-hanks-b2116734.html",
      urlToImage:
        "https://static.independent.co.uk/2022/07/04/10/Tom-Hanks-Tim-Allen.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2022-07-06T06:53:53Z",
      content:
        "Tom Hanks has questioned why Tim Allen wasnt asked to voice Buzz in Lightyear.\r\nWhen the film was announced, many assumed Allen would be voicing the character. However, it was revealed that Chris Eva… [+1315 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Natasha Turak",
      title: "OPEC Secretary General Mohammad Barkindo dies at age 63 - CNBC",
      description:
        "Barkindo's unexpected death came as a surprise to members of the oil and gas world, many of whom describe him as a giant in the industry.",
      url: "https://www.cnbc.com/2022/07/06/opec-secretary-general-mohammad-barkindo-dies-at-age-63.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107027626-1646832791746-gettyimages-1239047379-CERAWEEK_2022.jpeg?v=1657087865&w=1920&h=1080",
      publishedAt: "2022-07-06T05:59:32Z",
      content:
        "Mohammad Barkindo, a Nigerian politician and the secretary general of oil producer group OPEC, died at the age of 63, just days before he was set to finish his term at the organization.\r\nThe head of … [+2449 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Matthew Daly",
      title:
        "Judge throws out Trump-era rollbacks on endangered species - The Associated Press - en Español",
      description:
        "WASHINGTON (AP) — A federal judge on Tuesday threw out a host of actions by the Trump administration to roll back protections for endangered or threatened species, a year after the Biden administration said it was moving to strengthen such species protections.",
      url: "https://apnews.com/article/biden-california-donald-trump-wildlife-climate-and-environment-798795d6a974fc74e29067ed4043ca9a",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/cafa5c2cf49445a6889d317780ca33de/3000.jpeg",
      publishedAt: "2022-07-06T05:05:43Z",
      content:
        "WASHINGTON (AP) A federal judge on Tuesday threw out a host of actions by the Trump administration to roll back protections for endangered or threatened species, a year after the Biden administration… [+4065 chars]",
    },
  ];

  // constructor() {
  //   super();
  //   this.setStatestate({
  //     articles: this.articles,
  //     loading: false,
  //   });
  // }
  render() {
    return (
      <div className="container my-3">
        <h2>Top headlines</h2>
        <div className="row">
          
            {this.articles.map(item => {
              return(
              <div className="col-md-3" key={item.url}>
              <NewsItem
              title={item.title}
              desc={item.description}
              url={item.urlToImage}
              newsUrl={item.url}
            />
            </div>
            )  
            })}
            {/* <NewsItem
              title={"titel 1"}
              desc={"desc 1"}
              url={
                "https://image.cnbcfm.com/api/v1/image/107027626-1646832791746-gettyimages-1239047379-CERAWEEK_2022.jpeg?v=1657087865&w=1920&h=1080"
              }
              newsUrl={"todo"} */}
            {/* /> */}
          </div>
          {/* <div className="col-md-3">
            <NewsItem title={"titel 1"} desc={"desc 1"} />
          </div>
          <div className="col-md-3">
            <NewsItem title={"titel 1"} desc={"desc 1"} />
          </div>
          <div className="col-md-3">
            <NewsItem title={"titel 1"} desc={"desc 1"} />
          </div> */}
        {/* </div> */}
      </div>
    );
  }
}

export default News;
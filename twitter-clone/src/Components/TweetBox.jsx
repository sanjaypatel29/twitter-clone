import React from 'react'
import ImageIcon from '@material-ui/icons/Image';
import GifIcon from '@material-ui/icons/Gif';
import PollIcon from '@material-ui/icons/Poll';
import MoodIcon from '@material-ui/icons/Mood';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Tweets from './Tweets';

function TweetBox() {
    var tweet = [
        {
            "name": "Vania D'Elias",
            "tHandle": "vdelias0",
            "profileImage": "https://robohash.org/voluptatemilloex.jpg?size=50x50&set=set1",
            "verified": false,
            "time": "5:50",
            "image": "https://pbs.twimg.com/media/EoYwh-SW4AIxZ-0?format=jpg&name=900x900",
            "title": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
            "like": 53,
            "share": 1,
            "comment": 31
        },
        {
            "name": "Britte Girvin",
            "tHandle": "bgirvin1",
            "profileImage": "https://robohash.org/velitpariaturminus.jpg?size=50x50&set=set1",
            "verified": true,
            "time": "22:26",
            "image": "https://pbs.twimg.com/media/EoijdBnXMAAUm6y?format=jpg&name=900x900",
            "title": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
            "like": 72,
            "share": 86,
            "comment": 43
        },
        {
            "name": "Jori Tenwick",
            "tHandle": "jtenwick2",
            "profileImage": "https://robohash.org/rerummagnamet.jpg?size=50x50&set=set1",
            "verified": true,
            "time": "15:13",
            "image": "https://pbs.twimg.com/media/Eoi5XQkUYAErVIe?format=jpg&name=900x900",
            "title": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
            "like": 12,
            "share": 94,
            "comment": 32
        },
        {
            "name": "Florance Ilyas",
            "tHandle": "filyas3",
            "profileImage": "https://robohash.org/etdolorumaliquid.jpg?size=50x50&set=set1",
            "verified": false,
            "time": "2:21",
            "image": "https://pbs.twimg.com/media/EoiE_mJUUAAGZLk?format=jpg&name=900x900",
            "title": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
            "like": 45,
            "share": 46,
            "comment": 13
        },
        {
            "name": "Robb Brewerton",
            "tHandle": "rbrewerton4",
            "profileImage": "https://robohash.org/mollitiareprehenderitpossimus.jpg?size=50x50&set=set1",
            "verified": true,
            "time": "5:53",
            "image": "https://pbs.twimg.com/media/EojEdj_VoAIoRLw?format=jpg&name=900x900",
            "title": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "like": 9,
            "share": 14,
            "comment": 34
        },
        {
            "name": "Ban O'Cahsedy",
            "tHandle": "bocahsedy5",
            "profileImage": "https://robohash.org/errorvoluptatibusqui.jpg?size=50x50&set=set1",
            "verified": true,
            "time": "18:40",
            "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAK8SURBVDjLbZFPbFRVFIe/897rdDpgKqKTDi6GtmOLg67cuGwixsSNoQujhLDSjYkLumhQg+BCTFgpCxeCJDZKQggxmrjQxoRgjG2thRaskkxptECYEmWG6fzpu+/c42LKaNWb3Jvf4n7fyTlHzIwDb55JPTm0YymKJH1p8WZh4ti+Kv9znnvx7d5dTwyUarVGa3FhdnDq69OxmBnAJsmPC78Vzhw/sEnyzOih3qHdg6V6o9FavDwzOPvtZzFARwCw/41PU8WBR5YwS09PLxa++HisCjDywsHewuOPlRr1ZuuXKzODly6cje8zmwQAe189kRoeypXUJz0/Tc0V4rjBUHG4VF9rNn/9ebYwf/Fc/M//YmaMj4+/A7x1X2ZmZLPZEEBV8d5TLpfVzDAzVJV6vf7uxMTEkWgDOFx46T3599DMQA28N3xTw5v3HE0FA+6e3ncYOBIAZDIZyW4RAvkvnKhxq+pYqToSL4QCAeCcE2hnzIx0BH1bhSj4G27FykolphZ7QhHCoA0EIqgqHYFzDqdtcFtaEGnDd9YSzLMBCwFCIEJgdAQRQBzHxB7YqJwSo9pSQBAxAmD46kn65z8iVS5R680x3Ubbr6riFLyBek/NeTKpAKdGEEBh/hRP/3GeXftfobt/N82Fb9hxcZLJPV2vBwBJkrCuRpwYa7Ghvt1nVwhmQt/MCYZH9pJeuoB88jKZ658zsHM7Jnaw00J93XAems5IFNQMNcHEeODu76T7+uH5sc6WoqM5Qi87I4Du7m4qk8dZXl7m2LVrjOXzOOcoFotcnZtjpGcrjctfseXL11hv3qYB1O6FaMitqLMF58jlcryfzfKoKqpKpVIhn89zo7bGlR++I7+9hyjsonYn4Xo5wPAfipkxOjpqq6ureO8718w25WcfavCUrPAwCX8S8n39QT6Yui1/AWOZi6sZoXAuAAAAAElFTkSuQmCC",
            "title": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
            "like": 16,
            "share": 28,
            "comment": 29
        },
        {
            "name": "Tirrell De Giorgi",
            "tHandle": "tdeb",
            "profileImage": "https://robohash.org/doloremidsuscipit.jpg?size=50x50&set=set1",
            "verified": false,
            "time": "9:00",
            "image": "http://dummyimage.com/132x136.jpg/dddddd/000000",
            "title": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
            "like": 75,
            "share": 39,
            "comment": 46
        },
        {
            "name": "Melesa Pryke",
            "tHandle": "mprykec",
            "profileImage": "https://robohash.org/suntundevelit.jpg?size=50x50&set=set1",
            "verified": false,
            "time": "4:41",
            "image": "http://dummyimage.com/179x137.jpg/cc0000/ffffff",
            "title": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
            "like": 30,
            "share": 74,
            "comment": 3
        },
        {
            "name": "Evelina Joris",
            "tHandle": "ejorisd",
            "profileImage": "https://robohash.org/porroenimillum.jpg?size=50x50&set=set1",
            "verified": false,
            "time": "17:06",
            "image": "http://dummyimage.com/111x190.jpg/dddddd/000000",
            "title": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
            "like": 86,
            "share": 51,
            "comment": 3
        },
        {
            "name": "Udale Glossop",
            "tHandle": "uglossope",
            "profileImage": "https://robohash.org/sitsimiliquesuscipit.jpg?size=50x50&set=set1",
            "verified": true,
            "time": "17:12",
            "image": "http://dummyimage.com/150x204.jpg/dddddd/000000",
            "title": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
            "like": 96,
            "share": 14,
            "comment": 22
        },
        {
            "name": "Nikaniki Halfhide",
            "tHandle": "nhalfhidef",
            "profileImage": "https://robohash.org/remdoloresquia.jpg?size=50x50&set=set1",
            "verified": true,
            "time": "16:57",
            "image": "http://dummyimage.com/184x232.jpg/5fa2dd/ffffff",
            "title": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
            "like": 5,
            "share": 48,
            "comment": 34
        },
        {
            "name": "Sharla Lune",
            "tHandle": "sluneg",
            "profileImage": "https://robohash.org/nullarepudiandaevoluptas.jpg?size=50x50&set=set1",
            "verified": true,
            "time": "9:36",
            "image": "http://dummyimage.com/239x109.jpg/ff4444/ffffff",
            "title": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
            "like": 72,
            "share": 66,
            "comment": 7
        },
        {
            "name": "Randa Semrad",
            "tHandle": "rsemradh",
            "profileImage": "https://robohash.org/voluptateperspiciatisminima.jpg?size=50x50&set=set1",
            "verified": false,
            "time": "14:21",
            "image": "http://dummyimage.com/176x189.jpg/ff4444/ffffff",
            "title": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
            "like": 27,
            "share": 47,
            "comment": 15
        },
        {
            "name": "Corrina Loveless",
            "tHandle": "clovelessi",
            "profileImage": "https://robohash.org/earumadipiscivoluptates.jpg?size=50x50&set=set1",
            "verified": false,
            "time": "5:51",
            "image": "http://dummyimage.com/221x184.jpg/ff4444/ffffff",
            "title": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
            "like": 59,
            "share": 62,
            "comment": 15
        },
        {
            "name": "Fayre Paynes",
            "tHandle": "fpaynesj",
            "profileImage": "https://robohash.org/reprehenderitutmodi.jpg?size=50x50&set=set1",
            "verified": true,
            "time": "5:59",
            "image": "http://dummyimage.com/215x170.jpg/cc0000/ffffff",
            "title": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
            "like": 61,
            "share": 99,
            "comment": 1
        },
        {
            "name": "Talya Vaskov",
            "tHandle": "tvaskovk",
            "profileImage": "https://robohash.org/quosetenim.jpg?size=50x50&set=set1",
            "verified": false,
            "time": "0:16",
            "image": "http://dummyimage.com/111x103.jpg/cc0000/ffffff",
            "title": "Fusce consequat. Nulla nisl. Nunc nisl.",
            "like": 26,
            "share": 63,
            "comment": 39
        },
        {
            "name": "Hettie Rodriguez",
            "tHandle": "hrodriguezl",
            "profileImage": "https://robohash.org/utsedimpedit.jpg?size=50x50&set=set1",
            "verified": true,
            "time": "6:12",
            "image": "http://dummyimage.com/226x179.jpg/cc0000/ffffff",
            "title": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
            "like": 93,
            "share": 98,
            "comment": 46
        },
        {
            "name": "Terri Coit",
            "tHandle": "tcoitm",
            "profileImage": "https://robohash.org/molestiasenimducimus.jpg?size=50x50&set=set1",
            "verified": true,
            "time": "12:41",
            "image": "http://dummyimage.com/176x217.jpg/5fa2dd/ffffff",
            "title": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
            "like": 78,
            "share": 27,
            "comment": 28
        },
        {
            "name": "Barclay Dolphin",
            "tHandle": "bdolphinn",
            "profileImage": "https://robohash.org/mollitiasuntearum.jpg?size=50x50&set=set1",
            "verified": true,
            "time": "4:13",
            "image": "http://dummyimage.com/136x200.jpg/cc0000/ffffff",
            "title": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
            "like": 79,
            "share": 34,
            "comment": 49
        },
        {
            "name": "Dianne Novkovic",
            "tHandle": "dnovkovico",
            "profileImage": "https://robohash.org/suscipitconsequaturea.jpg?size=50x50&set=set1",
            "verified": true,
            "time": "2:56",
            "image": "http://dummyimage.com/101x169.jpg/dddddd/000000",
            "title": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
            "like": 42,
            "share": 27,
            "comment": 12
        },
        {
            "name": "Boyce Dullaghan",
            "tHandle": "bdullaghanp",
            "profileImage": "https://robohash.org/eligendiquiaexplicabo.jpg?size=50x50&set=set1",
            "verified": false,
            "time": "18:01",
            "image": "http://dummyimage.com/127x191.jpg/dddddd/000000",
            "title": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
            "like": 45,
            "share": 32,
            "comment": 10
        },
        {
            "name": "Babbette Rivlin",
            "tHandle": "brivlinq",
            "profileImage": "https://robohash.org/laborenumquamvoluptates.jpg?size=50x50&set=set1",
            "verified": false,
            "time": "23:12",
            "image": "http://dummyimage.com/220x153.jpg/ff4444/ffffff",
            "title": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
            "like": 24,
            "share": 47,
            "comment": 1
        },
        {
            "name": "Harlie Roden",
            "tHandle": "hrodenr",
            "profileImage": "https://robohash.org/estpariaturcommodi.jpg?size=50x50&set=set1",
            "verified": true,
            "time": "4:26",
            "image": "http://dummyimage.com/179x207.jpg/dddddd/000000",
            "title": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
            "like": 69,
            "share": 86,
            "comment": 26
        },
        {
            "name": "Fan Orred",
            "tHandle": "forreds",
            "profileImage": "https://robohash.org/voluptasconsecteturnesciunt.jpg?size=50x50&set=set1",
            "verified": false,
            "time": "12:53",
            "image": "http://dummyimage.com/111x250.jpg/dddddd/000000",
            "title": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
            "like": 43,
            "share": 83,
            "comment": 9
        },
        {
            "name": "Ketti Freer",
            "tHandle": "kfreert",
            "profileImage": "https://robohash.org/laboriosamullameos.jpg?size=50x50&set=set1",
            "verified": false,
            "time": "16:45",
            "image": "http://dummyimage.com/229x211.jpg/ff4444/ffffff",
            "title": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
            "like": 69,
            "share": 38,
            "comment": 47
        },
        {
            "name": "Vassili Grasha",
            "tHandle": "vgrashau",
            "profileImage": "https://robohash.org/repellendusquamperferendis.jpg?size=50x50&set=set1",
            "verified": true,
            "time": "0:05",
            "image": "http://dummyimage.com/109x237.jpg/5fa2dd/ffffff",
            "title": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
            "like": 23,
            "share": 75,
            "comment": 13
        },
        {
            "name": "Konstance Rawls",
            "tHandle": "krawlsv",
            "profileImage": "https://robohash.org/etvoluptatesquam.jpg?size=50x50&set=set1",
            "verified": false,
            "time": "1:52",
            "image": "http://dummyimage.com/134x185.jpg/ff4444/ffffff",
            "title": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "like": 19,
            "share": 42,
            "comment": 37
        },
        {
            "name": "Daniele Lodevick",
            "tHandle": "dlodevickw",
            "profileImage": "https://robohash.org/adquasidolor.jpg?size=50x50&set=set1",
            "verified": true,
            "time": "18:02",
            "image": "http://dummyimage.com/218x142.jpg/dddddd/000000",
            "title": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
            "like": 28,
            "share": 44,
            "comment": 50
        },
        {
            "name": "Marsh Murricanes",
            "tHandle": "mmurricanesx",
            "profileImage": "https://robohash.org/pariaturbeataeet.jpg?size=50x50&set=set1",
            "verified": true,
            "time": "23:55",
            "image": "http://dummyimage.com/231x142.jpg/cc0000/ffffff",
            "title": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
            "like": 54,
            "share": 96,
            "comment": 50
        },
        {
            "name": "Brandea Bucky",
            "tHandle": "bbuckyy",
            "profileImage": "https://robohash.org/placeatexest.jpg?size=50x50&set=set1",
            "verified": false,
            "time": "10:49",
            "image": "http://dummyimage.com/181x249.jpg/cc0000/ffffff",
            "title": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
            "like": 82,
            "share": 25,
            "comment": 20
        },
        {
            "name": "Wallache Van Der Vlies",
            "tHandle": "wvanz",
            "profileImage": "https://robohash.org/nequecupiditatenesciunt.jpg?size=50x50&set=set1",
            "verified": false,
            "time": "17:17",
            "image": "http://dummyimage.com/123x166.jpg/dddddd/000000",
            "title": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            "like": 36,
            "share": 58,
            "comment": 8
        }
    ]
    console.log(tweet)
    const data = JSON.parse(localStorage.getItem("userData"))
    return (
        <div className="container">
            <div className="row border bg-white">
                <div className="col-1 p-1">
                    <img style={{ width: "60px", borderRadius: "50%" }} src={data.user.profileImage} alt="profilepi" />
                </div>
                <div className="col-11 p-2 px-3">
                    <input type="text" className="border-0 w-100 h4" style={{ height: "50px", outline: "none" }} placeholder="Whats Happening?" />
                    <input type="url" className="border-0 w-100 h6" style={{ height: "20px", outline: "none" }} placeholder="Image url" />

                    <div className="row border-top">
                        <div className="col-9 mt-3" style={{ color: "#28a8f7" }}>
                            <ImageIcon className="mx-2" />
                            <GifIcon className="mx-2" />
                            <PollIcon className="mx-2" />
                            <MoodIcon className="mx-2" />
                            <CalendarTodayIcon />
                        </div>
                        <div className="col-3 mt-3">
                            <button type="button" className="btn btn-primary btn-sm rounded-pill w-75"> Tweet </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-2 bg-white">
                {/* <Tweets title="Falcon 9 is vertical on SpaceX’s West Coast pad ahead of tomorrow’s launch of the Sentinel-6 Michael Freilich mission. Weather forecast is 80% favorable for liftoff → http://spacex.com/launches" image="https://pbs.twimg.com/media/EnUzRhkW4AI28tO?format=jpg&name=900x900" verified="true" profileImage="https://pbs.twimg.com/profile_images/1260456676890742786/MzGhbLvr_400x400.jpg" name="elon musk" tHandle="elon musk" time="24m" like="22" comment="5" share="23" />
                <Tweets title="मुख्यमंत्री श्री @ChouhanShivraj निवास पर वरिष्ठ अधिकारियों के साथ जनसंपर्क विभाग की समीक्षा बैठक कर रहे हैं।" image="https://pbs.twimg.com/media/EoewsdAUYAIX8TQ?format=jpg&name=900x900" verified="flase" profileImage="https://pbs.twimg.com/profile_images/1197186228694728706/OXO0Uj5w_400x400.jpg" name="shivrajsingh" tHandle="chauhanshivraj" time="1s" like="22" comment="5" share="23" />
                <Tweets title="hello" image="https://pbs.twimg.com/media/EoewsdAUYAIX8TQ?format=jpg&name=900x900" verified="flase" profileImage="https://pbs.twimg.com/profile_images/1197186228694728706/OXO0Uj5w_400x400.jpg" name="Rahul" tHandle="Rahulsingh1221" time="2s" like="22" comment="5" share="23" />
                <Tweets title="Tesla CEO Elon Musk has told friends and associates he plans to move to Texas" image="https://pbs.twimg.com/card_img/1334281481104068608/M4Lw0m1e?format=jpg&name=900x900" verified="true" profileImage="https://pbs.twimg.com/profile_images/1295975423654977537/dHw9JcrK_400x400.jpg" name="elonmusk" tHandle="elonmusk" time="3" like="22k" comment="5.5k" share="12k" />
                <Tweets title="hello" image="https://pbs.twimg.com/media/EoewsdAUYAIX8TQ?format=jpg&name=900x900" verified="true" profileImage="https://pbs.twimg.com/profile_images/1197186228694728706/OXO0Uj5w_400x400.jpg" name="Rahul" tHandle="Rahulsingh1221" time="2m" like="22" comment="5" share="23" />
                <Tweets title="hello" image="https://pbs.twimg.com/media/EoewsdAUYAIX8TQ?format=jpg&name=900x900" verified="flase" profileImage="https://pbs.twimg.com/profile_images/1197186228694728706/OXO0Uj5w_400x400.jpg" name="Rahul" tHandle="Rahulsingh1221" time="d" like="22" comment="5" share="23" />
                <Tweets title="hello" image="https://pbs.twimg.com/media/EoewsdAUYAIX8TQ?format=jpg&name=900x900" verified="true" profileImage="https://pbs.twimg.com/profile_images/1295975423654977537/dHw9JcrK_400x400.jpg" name="Rahul" tHandle="Rahulsingh1221" time="m" like="22" comment="5" share="23" />
                <Tweets title="hello" image="https://pbs.twimg.com/media/EoewsdAUYAIX8TQ?format=jpg&name=900x900" verified="false" profileImage="https://pbs.twimg.com/profile_images/1197186228694728706/OXO0Uj5w_400x400.jpg" name="Rahul" tHandle="Rahulsingh1221" time="2m" like="22" comment="5" share="23" />
                <Tweets title="hello" image="https://pbs.twimg.com/media/EoewsdAUYAIX8TQ?format=jpg&name=900x900" verified="true" profileImage="https://pbs.twimg.com/profile_images/1260456676890742786/MzGhbLvr_400x400.jpg" name="Rahul" tHandle="Rahulsingh1221" time="23m" like="22" comment="5" share="23" />
                <Tweets title="hello" image="https://pbs.twimg.com/media/EoewsdAUYAIX8TQ?format=jpg&name=900x900" verified="flase" profileImage="https://pbs.twimg.com/profile_images/1197186228694728706/OXO0Uj5w_400x400.jpg" name="Rahul" tHandle="Rahulsingh1221" time="4" like="22" comment="5" share="23" />
                <Tweets title="hello" image="https://pbs.twimg.com/media/EoewsdAUYAIX8TQ?format=jpg&name=900x900" verified="true" profileImage="https://pbs.twimg.com/profile_images/1197186228694728706/OXO0Uj5w_400x400.jpg" name="Rahul" tHandle="Rahulsingh1221" time="2" like="22" comment="5" share="23" />
                <Tweets title="hello" image="https://pbs.twimg.com/media/EoewsdAUYAIX8TQ?format=jpg&name=900x900" verified="flase" profileImage="https://pbs.twimg.com/profile_images/1295975423654977537/dHw9JcrK_400x400.jpg" name="Rahul" tHandle="Rahulsingh1221" time="2" like="22" comment="5" share="23" />
                <Tweets title="hello" image="https://pbs.twimg.com/media/EoewsdAUYAIX8TQ?format=jpg&name=900x900" verified="true" profileImage="https://pbs.twimg.com/profile_images/1197186228694728706/OXO0Uj5w_400x400.jpg" name="Rahul" tHandle="Rahulsingh1221" time="2s" like="22" comment="5" share="23" />
                <Tweets title="hello" image="https://pbs.twimg.com/media/EoewsdAUYAIX8TQ?format=jpg&name=900x900" verified="true" profileImage="https://pbs.twimg.com/profile_images/1295975423654977537/dHw9JcrK_400x400.jpg" name="Rahul" tHandle="Rahulsingh1221" time="14m" like="22" comment="5" share="23" /> */}
                {
                    tweet && tweet.map((a, i) => (
                        <Tweets title={a.title} image={a.image} time={a.time} profileImage={a.profileImage} verified={a.verified} like={a.like} share={a.share} comment={a.comment} name={a.name} tHandle={a.tHandle} />
                    ))
                }
            </div>
        </div>
    )
}

export default TweetBox

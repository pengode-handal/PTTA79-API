// UIUX untuk undangan
const html = (name, code, id) => {
    return `
    <link href="https://fonts.cdnfonts.com/css/ananda-black" rel="stylesheet">
<div
    style="
        max-width: 600px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        background-color: #fff;
        border-radius: 8px;
        border-color: #dde2e8;
        border-width: 1px;
        border-style: solid;
        overflow: hidden;
    ">
    <div>
        <div>
            <img
                style="width: 100%"
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/25818efe-e024-4881-a41a-542fa6df832b-profile_banner-480.png"
                class="CToWUd a6T"
                data-bit="iit"
                tabindex="0" />
        </div>

        <div style="text-align: center">
            <div>
                <p
                    style="
                        font-size: 20px;
                        font-weight: 600;
                        line-height: 29px;
                        color: #1f2d3d;
                        font-family: 'Ananda Black';
                    ">
                    Hai ${name}! Ini Undangan YTTA
                </p>
                <p
                    style="
                        font-size: 16px;
                        line-height: 29px;
                        color: #6a7481;
                    ">
                    Cuman testimoni
                </p>
            </div>

            <div
                style="
                    max-width: 385px;
                    border-radius: 8px;
                    border-color: #dde2e8;
                    border-width: 1px;
                    border-style: solid;
                    padding-top: 14px;
                    padding-bottom: 15;
                    margin-left: auto;
                    margin-right: auto
                ">
                <table border="0" style="width: 100%">
                    <tbody>
                        <tr>
                            <td
                                colspan="2"
                                style="
                                    border-bottom: 1px solid #dde2e8;
                                    padding-bottom: 16px;
                                    padding-left: 14px;
                                    padding-right: 14px;
                                ">
                                <p
                                    style="
                                        font-size: 13px;
                                        margin: 0px;
                                        padding: 0px;
                                        line-height: 24px;
                                        color: #6a7481;
                                    ">
                                    Tanggal Pelaksanaan
                                </p>
                                <p
                                    style="
                                        font-weight: 600;
                                        font-size: 16px;
                                        margin: 0px;
                                        padding: 0px;
                                        line-height: 24px;
                                        color: #1f2d3d;
                                    ">
                                    Belum Tw
                                </p>
                                <br />
                                <p
                                    style="
                                        font-size: 13px;
                                        margin: 0px;
                                        padding: 0px;
                                        line-height: 24px;
                                        color: #6a7481;
                                    ">
                                    Unique Code
                                </p>
                                <p
                                    style="
                                        font-weight: 600;
                                        font-size: 16px;
                                        margin: 0px;
                                        padding: 0px;
                                        line-height: 24px;
                                        color: #1f2d3d;
                                    ">
                                    ${id}
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td
                                style="
                                    width: 50%;
                                    padding-left: 14px;
                                    padding-right: 14px;
                                    border-bottom: 1px solid #dde2e8;
                                    color: #1f2d3d;
                                ">
                                <p style="font-size: 13px">APA GITU</p>
                            </td>
                            <td
                                style="
                                    width: 50%;
                                    padding-left: 14px;
                                    padding-right: 14px;
                                    text-align: right;
                                    border-bottom: 1px solid #dde2e8;
                                    color: #1f2d3d;
                                ">
                                <p
                                    style="
                                        font-size: 13px;
                                        font-weight: bold;
                                        color: #1f2d3d;
                                    ">
                                    SOON
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td
                                style="
                                    width: 50%;
                                    padding-left: 14px;
                                    padding-right: 14px;
                                ">
                                <p
                                    style="
                                        font-size: 16px;
                                        font-weight: 600;
                                        color: #1f2d3d;
                                    ">
                                    Tukar Konsum
                                    <br />
                                </p>
                            </td>
                            <td
                                style="
                                    padding-left: 80px;
                                    padding-right: 14px;
                                    padding-top: 14px;
                                    padding-bottom: 10px;
                                    text-align: right;
                                ">
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${code}"
                                    alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p
                style="
                    font-size: 16px;
                    color: #6a7481;
                    margin-top: 24px;
                    margin-bottom: 0;
                ">
                Kyaaaaaaaa >//<
                <img
                    data-emoji="❤"
                    style="height: 1.2em;
                    width: 1.2em;
                    vertical-align: middle;"
                    alt="❤"
                    aria-label="❤"
                    src="https://fonts.gstatic.com/s/e/notoemoji/15.0/2764/72.png"
                    loading="lazy" />
            </p>

            <p
                style="
                    font-size: 16px;
                    color: #6a7481;
                    margin-top: 40px;
                    margin-bottom: 5px;
                ">
                Salam hangat kami,
            </p>
            <p
                style="
                    font-size: 16px;
                    font-weight: bold;
                    margin-top: 0;
                    margin-bottom: 10px;
                    color: #1f2d3d;
                ">
                Copyright: &copy;2024 by Padmanaba
            </p>
        </div>
    </div>
</div>`;
};

const html1 = (name, code, id) => {
    return `<link href="https://fonts.cdnfonts.com/css/ananda-black" rel="stylesheet" 
    />
        <div
            style="
                width: 709px;
                margin-left: auto;
                margin-right: auto;
                background-color: #fff;
                border-radius: 8px;
                border-color: #dde2e8;
                border-width: 1px;
                border-style: solid;
                overflow: hidden;
            ">
            <div>
                <div>
                    <img
                        style="width: 100%"
                        src="https://i.ibb.co.com/ZNNzL4w/pttahead.jpg"
                        tabindex="0" />
                </div>
    
                <div style="
                text-align: center;
                background-image: url(https://i.ibb.co.com/0YvtJTs/pttabody.jpg);
                width: 709px;
                height: 472px;
                background-size: cover;
                background-position: center;
                ">
                    <div
                    style="
                    width: 100%;
                    height: 100%;
                    "
                    >
                    <div
                        style="
                        height: 50px;
                        "
                    ></div>
                        <img
                            src="https://pttagacor.vercel.app/api/font?q=${name}&size=80&h=290&w=500"
                            alt=""
                            style="
                            height: 200px;
                            "/>
                        <a
                        href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
                        style="
                            display: block;
                            background-color: transparent;;
                            color: transparent;
                            border-radius: 90px;
                            height: 75px;
                            width: 100%;
                            z-index: 9999;
                        "
                        >Click Here</a>
                    </div>
                </div>
            </div>
            <img
            style="width: 23px"
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${code}"
            alt="" />
        </div>
    `;
};
const htmlFIX = (name, code, id) => {
    return `<body>
    <link href="https://fonts.cdnfonts.com/css/ananda-black" rel="stylesheet" />
    <div
        style="
            width: 547px;
            margin-left: auto;
            margin-right: auto;
            background-color: #fff;
            border-radius: 8px;
            border-color: #dde2e8;
            border-width: 1px;
            border-style: solid;
            overflow: hidden;
        ">
        <div>
            <div
                style="
                    text-align: center;
                    background-image: url(https://i.ibb.co.com/yXQPJXk/desain-undangan-tiga-banding-empat.png);
                    width: 547px;
                    height: 729px;
                    background-size: cover;
                    background-position: center;
                ">
                <div style="width: 100%; height: 100%">
                    <div style="height: 182px"></div>
                    <img
                        src="https://pttagacor.vercel.app/api/font?q=${name}&size=65&h=290&w=500&color==FFC6D3"
                        alt=""
                        style="height: 200px" />
                    <div style="height: 39px"></div>
                    <a
                        href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
                        target="_blank"
                        style="
                            display: block;
                            background-color: transparent;
                            color: transparent;
                            border-radius: 90px;
                            height: 45px;
                            width: 37.4%;
                            margin-left: 187px;
                            z-index: 9999;
                        "
                        >Click Here</a
                    >
                    <div style="height: 95px"></div>
                    <img
                        style="width: 125px; margin-left: 285px"
                        src="https://api.qrserver.com/v1/create-qr-code/?size=125x125&data=${code}"
                        alt="" />
                </div>
            </div>
        </div>
    </div>
</body>
    `;
};
module.exports = {
    html,
    html1,
    htmlFIX,
};

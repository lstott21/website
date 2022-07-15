var slides = [
    "https://chi01pap002files.storage.live.com/y4p6PdQJge1NZzFi7B2tk6Q7LH1-7mM1qAt4Hrl2h1SlWfpuBL6Y1Eeo_fhe_DqsJ_OJfzUCl5nVmUNcXRXwBV3YmXH4drQC8gDo9H95Fr2btjsq4jB3xH3V8Wym7wiwlHYYvhe7iB0MRvsIg5qjdZjgXWlHk5z22aW-TCM0Ci6AXUWVf_3HVaB1ocRfaMv0QLMORzehlyl-gOjx-WlVJKkhstALKacRp60eojNzQq3RlA/DSCF0622.JPG?psid=1&amp;width=1852&amp;height=1235",
    "https://chi01pap002files.storage.live.com/y4mk15Fo2G0G2W9vrU6j4KzWhJ6a9HAwo4felbtfBs1hQ7U5MospW-BTqXT3Aeg2VtfjUmtdifz0AbNR9hHFnv4czF9IqcrplMYDDBkKA5ppSSAR2UCMO5kxEmn6BGTMnXQRidEKQsJxqP18R-GipMBmXwlHJgeMcusnH1uQhDsrmbIINiUjTXjK_mIA3UZXNAu?width=6400&height=1440&cropmode=none",
    "./images/20181016_193010.jpg",
    "./images/20181016_193010.jpg",
    "https://chi01pap002files.storage.live.com/y4p6PdQJge1NZzFi7B2tk6Q7LH1-7mM1qAt4Hrl2h1SlWfpuBL6Y1Eeo_fhe_DqsJ_OJfzUCl5nVmUNcXRXwBV3YmXH4drQC8gDo9H95Fr2btjsq4jB3xH3V8Wym7wiwlHYYvhe7iB0MRvsIg5qjdZjgXWlHk5z22aW-TCM0Ci6AXUWVf_3HVaB1ocRfaMv0QLMORzehlyl-gOjx-WlVJKkhstALKacRp60eojNzQq3RlA/DSCF0622.JPG?psid=1&amp;width=1852&amp;height=1235",
    "https://chi01pap002files.storage.live.com/y4mk15Fo2G0G2W9vrU6j4KzWhJ6a9HAwo4felbtfBs1hQ7U5MospW-BTqXT3Aeg2VtfjUmtdifz0AbNR9hHFnv4czF9IqcrplMYDDBkKA5ppSSAR2UCMO5kxEmn6BGTMnXQRidEKQsJxqP18R-GipMBmXwlHJgeMcusnH1uQhDsrmbIINiUjTXjK_mIA3UZXNAu?width=6400&height=1440&cropmode=none",
    "./images/20181016_193010.jpg",
    "./images/20181016_193010.jpg",
    "https://chi01pap002files.storage.live.com/y4p6PdQJge1NZzFi7B2tk6Q7LH1-7mM1qAt4Hrl2h1SlWfpuBL6Y1Eeo_fhe_DqsJ_OJfzUCl5nVmUNcXRXwBV3YmXH4drQC8gDo9H95Fr2btjsq4jB3xH3V8Wym7wiwlHYYvhe7iB0MRvsIg5qjdZjgXWlHk5z22aW-TCM0Ci6AXUWVf_3HVaB1ocRfaMv0QLMORzehlyl-gOjx-WlVJKkhstALKacRp60eojNzQq3RlA/DSCF0622.JPG?psid=1&amp;width=1852&amp;height=1235",
    "https://chi01pap002files.storage.live.com/y4mk15Fo2G0G2W9vrU6j4KzWhJ6a9HAwo4felbtfBs1hQ7U5MospW-BTqXT3Aeg2VtfjUmtdifz0AbNR9hHFnv4czF9IqcrplMYDDBkKA5ppSSAR2UCMO5kxEmn6BGTMnXQRidEKQsJxqP18R-GipMBmXwlHJgeMcusnH1uQhDsrmbIINiUjTXjK_mIA3UZXNAu?width=6400&height=1440&cropmode=none",
    "./images/20181016_193010.jpg",
    "./images/20181016_193010.jpg",
    "./images/20181016_193010.jpg"
    ]

    var str = '<div class ="container">'

    slides.forEach(function(slide) {
    str += '<div class="card" style="background-image: url(' + "'" + slide + "'" + ');"></div>';
    }); 

    str += '</div>';
    document.getElementById("images").innerHTML = str;
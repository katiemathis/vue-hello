const root = new Vue (
    {
        el: "#root",
        data: {
            nome: '',
            theme: '',
            place: '',
            day: '',
            time: '',
            verb: '',
            animal: '',
            bodyPart: '',
            hideOption: 'hidden',
            logo: 'download.png'
        },
        methods: {
            showMadlib: function () {
                if (this.hideOption == "hidden") {
                    this.hideOption = 'show';    
                } else {
                    this.hideOption = 'hidden';
                }
            },


        }
    }
);
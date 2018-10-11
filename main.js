let app = new Vue({

    el: "#app",

    data: {
        textblock:'',
        paragraphno:0,
        sentenceno:0,
        wordno:0,
        charno:0,
        mostfreq:'',
        longestword:'',
        //words: [],
    },

    methods: {

      runInput: function () {


          this.charno= this.textblock.replace(/\s/g, "").length;



          this.paragraphno= this.textblock.split("\n\n").length;

          this.wordno= this.textblock.length-this.charno-(this.paragraphno-1)+1;

          this.sentenceno=0;
          for (var i=0; i<this.textblock.length; i++) {
            if (this.textblock[i]=="." && this.textblock[i-1] !== "."){
              this.sentenceno++;
            }
            if (this.textblock[i]=="?"){
              this.sentenceno++;
            }
            if (this.textblock[i]=="!"){
              this.sentenceno++;
            }
          }

          let frequencycount= {};
          let maxkey='';
          for (var i=0; i<this.textblock.replace(/\s/g, "").length; i++) {
            let key=this.textblock.replace(/\s/g, "")[i];
            if (!frequencycount[key]) {
              frequencycount[key]=1;
            }
            else {
              frequencycount[key]++;
              if (maxkey=='' || frequencycount[key] > frequencycount[maxkey]) {
                maxkey=key;
                this.mostfreq=maxkey;
              }
            }

          }

          let words=this.textblock.split(" ");
          let length=0;
          let longest=''
          for (var i=0; i<words.length; i++) {
            if (words[i].length>length) {
              length=words[i].length;
              longest=words[i];
            }
          }
          this.longestword=longest.replace(/[,.?!]/g,'');





          //this.paragraphno= this.textblock.split("\n\n").length)​;​​​

        /*  this.words=this.textblock.split(/\b/);
          for (var i = 0; i < this.words.length; i++) {
              for (var j=i+1; j <this.words.legnth)
        }*/


          /*if (this.charno>0) {
            this.wordno=this.texblock.trim().replace(regex, ' ').split(' ').length;
          }*/
        }


    }

});

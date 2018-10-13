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

      },

    methods: {

      runInput: function () {


          this.charno= this.textblock.replace(/\s/g, "").length;

          this.paragraphno= this.textblock.split("\n\n").length;

          let tempwordno= this.textblock.replace(/[,.?!]/g,'');
          let tempwordno2= tempwordno.replace( /\n/g, " " ).split( " " );
          if (tempwordno2[1]=="") {
            this.wordno=1;
          }
          else {
            this.wordno=tempwordno2.length-this.paragraphno+1;
          }

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
          let sanspunc=this.textblock.replace(/[,.?!]/g,'');
          let words=sanspunc.replace( /\n/g, " " ).split( " " );
          let length=0;
          let longest=''
          for (var i=0; i<words.length; i++) {
            if (words[i].length>length) {
              length=words[i].length;
              longest=words[i];
            }
          }
          this.longestword=longest;





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

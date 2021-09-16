import{s as e,R as t,P as r,r as n,a,W as s,H as o,B as l,S as i,b as c,c as m,d as u}from"./vendor.69179115.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const d=e.a`
border-radius: .5rem;
background-color: #23BC55;
color: #fff;
cursor: pointer;
text-decoration: none;
text-align: center;
padding: .5rem 1rem;
width: max-content;
height: max-content;
transition: .5s;
&:hover{
	background-color: #218F46;
	transition: .5s;
}
`,p=e.h2`
font-size: 2rem;
`,g=e.h3`
font-size: 1.5rem;
font-weight: 500;
`,h=e.img`
width: ${e=>e.width};
height: auto;
justify-self: center;
border-radius: ${e=>e.user&&"2rem"};
`,f=e.div`
display: flex;
flex-direction: ${e=>e.direction};
justify-content: ${e=>e.justify};
flex-wrap: ${e=>e.wrap};
align-items: ${e=>e.align};
margin: ${e=>e.margin};
padding: ${e=>e.padding};
gap: ${e=>e.gap}
`,E=e.div`
display: grid;
grid-template-columns: ${e=>e.twoColumns?"repeat(2, 1fr)":"repeat(3, 1fr)"};
padding: ${e=>e.variant?"1rem 3.5rem":"3.5rem 2rem"};
gap: ${e=>e.variant?"3.5rem":0};
`,y=e.h1`
text-align: center;
font-size: 2.5rem;
padding: 1.5rem;
`,v=e.p`
font-size: ${e=>e.variant?".75rem":"1rem"};
`;const b=()=>t.createElement(f,{variant:!0,direction:"row",align:"center",margin:".5rem",justify:"center"},t.createElement(v,null,"Esta aplicación funciona con ayuda de ")," ",t.createElement(h,{src:"/assets/spotify.703d1a00.svg",width:30}));const w=()=>{const e=["playlist-modify-public","playlist-modify-private","user-read-private","user-read-email"].join("%20"),r=`https://accounts.spotify.com/authorize?client_id=2ab6dff6b53145db89da10d5f4e710ee&redirect_uri=${encodeURI("https://minfreack.github.io/playlist_generator")}\n\t&scope=${e}&response_type=token&show_dialog=true`;return t.createElement(t.Fragment,null,t.createElement(y,null,"Playlist Generator"),t.createElement(E,{twoColumns:!0},t.createElement(h,{width:450,src:"/assets/welcomeImg.a2f201f1.png"}),t.createElement(f,{direction:"column",justify:"center",gap:"1rem"},t.createElement(p,null,"¿Qué te parece si hoy escuchas algo totalmente nuevo?"),t.createElement(g,null,"Sabemos que algunas veces escuchar las mismas canciones es aburrido así que ¡déjanos hacerte una playlist!"),t.createElement(d,{onClick:()=>{window.location.href=r}},"¡Comenzar!"))),t.createElement(b,null))},k=e.div`
background-color: #1B1C1E;
border-radius: .5rem;
padding: 1rem;
height: 25rem;
overflow: scroll;
overflow-x: hidden;
::-webkit-scrollbar{
	display: none;
}
-ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;
`;const x=({username:e})=>t.createElement(f,{direction:"row",align:"center",justify:"center",gap:"1rem"},t.createElement(h,{user:!0,src:"/assets/robot.7a9983f3.png",width:60}),t.createElement(v,null,"¡Hola ",t.createElement("br",null),e,"!"));x.propTypes={username:r.string};const S=e.input`
outline: none;
padding: .75rem 1rem;
border-radius: .75rem;
border: 0;
margin: 1rem;
font-size: 1.1rem;
font-weight: 500;
width: ${e=>e.width};
&::placeholder{
	color: #acacac;
}
`;const $=e.img`
position: absolute;
top: 1.4rem;
right: 2rem;
`,U=e.div`
position: relative;
`,C=({token:e,setArtist:r,setSongs:s})=>{const[o,l]=n.exports.useState(""),i=()=>{a.get(`https://api.spotify.com/v1/search?q=${o}&type=track&limit=20`,{headers:{Authorization:"Bearer "+e}}).then((e=>{s(e.data.tracks.items)})),a.get(`https://api.spotify.com/v1/search?q=${o}&type=artist&limit=20`,{headers:{Authorization:"Bearer "+e}}).then((e=>{r(e.data.artists.items)}))};return t.createElement(f,{variant:!0,direction:"column",align:"center",justify:"center",margin:"1rem 0"},t.createElement(v,null,"Selecciona por lo menos 1 artista, 1 canción y un género. ¡Esto nos ayudará a darnos una idea de qué es lo que te gusta!"),t.createElement(U,null,t.createElement($,{src:"/assets/search.4beca7ef.svg",width:30,onClick:i}),t.createElement(S,{onChange:e=>{e.preventDefault(),l(e.target.value)},onKeyDown:e=>{"Enter"==e.key&&i()},placeholder:"Escríbe un artista o canción...",width:"45rem",value:o})))};C.propTypes={token:r.string,setArtist:r.any,setSongs:r.any};const _=e.div`
background-color: #131313;
border-radius: .5rem;
padding: .5rem;
width: 22.5rem;
cursor: pointer;
`;const j=({name:e,images:r,id:a,artistUser:s,setArtistUser:o})=>{var l;const[i,c]=n.exports.useState(!1);return t.createElement(_,{className:`${i&&"active"}`,onClick:()=>{0==i?(c(!i),o([...s,a])):(c(!i),o((e=>{const t=e.slice();return t.splice(t.indexOf(a),1),t})))}},t.createElement(f,{direction:"row",align:"center",gap:"1rem"},t.createElement(h,{user:!0,src:null==(l=r[0])?void 0:l.url,width:40}),t.createElement(v,null,e)))};j.propTypes={name:r.string,images:r.array,id:r.string,artistUser:r.any,setArtistUser:r.func};const A=({name:e,album:r,id:a,songsUser:s,setSongsUser:o})=>{var l;const[i,c]=n.exports.useState(!1);return t.createElement(_,{className:`${i&&"active"}`,onClick:()=>{0==i?(c(!i),o([...s,a])):(c(!i),o((e=>{const t=e.slice();return t.splice(t.indexOf(a),1),t})))}},t.createElement(f,{direction:"row",align:"center",gap:"1rem"},t.createElement(h,{user:!0,src:null==(l=r.images[0])?void 0:l.url,width:40}),t.createElement(v,null,e)))};A.propTypes={name:r.string,album:r.any,id:r.string,songsUser:r.any,setSongsUser:r.func};const z=e.div`
background-color: #131313;
border-radius: .5rem;
padding: .5rem;
width: 45%;
cursor: pointer;
`;const I=({genre:e,genresUser:r,setGenresUser:a})=>{const[s,o]=n.exports.useState(!1);return t.createElement(z,{className:`${s&&"active"}`,onClick:()=>{0==s?(o(!s),a([...r,e])):(o(!s),a((t=>{const r=t.slice();return r.splice(r.indexOf(e),1),r})))}},t.createElement(f,{direction:"row",align:"center"},t.createElement(v,null,e)))};I.propTypes={genre:r.string,genresUser:r.any,setGenresUser:r.func};const B=e.div`
background-color: #000000;
position: absolute;
width: 25rem;
left: 68.45rem;
padding: 2rem 1rem 1rem 1rem;
height: 100vh;
top: 0px;
transition: .5s;
`,T=({modal:e,setModal:r,token:s,userId:o,artistUser:l,songsUser:i,genresUser:c})=>{const[m,u]=n.exports.useState(""),[p,h]=n.exports.useState(""),[E,y]=n.exports.useState(!0),[b,w]=n.exports.useState("");return t.createElement(B,null,t.createElement(f,{direction:"column",gap:".75rem"},t.createElement(d,{onClick:()=>r(!e)},"< Volver a mis elecciones"),t.createElement(g,null,"¡Solo queda un paso más!"),t.createElement(v,null,"Toda playlist necesita un nombre"),t.createElement(S,{placeholder:"Mi nueva playlist...",value:m,onChange:e=>{e.preventDefault(),u(e.target.value)}}),t.createElement(v,null,"Descripción"),t.createElement(S,{placeholder:"Esta es mi playlist...",value:p,onChange:e=>{e.preventDefault(),h(e.target.value)}}),t.createElement(v,null,"¿Quieres compartir tu playlist?"),t.createElement(v,{variant:!0},"Si está activado la playlist será pública"),t.createElement("input",{type:"checkbox",id:"switch",checked:E,onChange:()=>{y(!E)}}),t.createElement("label",{htmlFor:"switch"},"Toggle"),t.createElement(d,{onClick:async()=>{let e="",t="",r="",n="",u="";const d=JSON.stringify({name:m,description:p,public:E});for(const a of l)e+=`%2C${a}`;for(const a of i)t+=`%2C${a}`;for(const a of c)u+=`%2C${a}`;const g={id:"",url:""};try{await a.post(`https://api.spotify.com/v1/users/${o}/playlists`,d,{headers:{Authorization:"Bearer "+s,Accept:"application/json"}}).then((e=>{w(e.data.external_urls.spotify),g.url=e.data.external_urls.spotify,g.id=e.data.id,w(e.data.external_urls.spotify)})),await a.get(`https://api.spotify.com/v1/recommendations?limit=50&seed_artists=${e.substr(3)}&seed_genres=${u.substr(3)}&seed_tracks=${t.substr(3)}`,{headers:{Authorization:"Bearer "+s,Accept:"application/json"}}).then((e=>{r=e.data.tracks;for(const t of r)n+=`%2C${t.uri}`})),await a.post(`https://api.spotify.com/v1/playlists/${g.id}/tracks?uris=${n.substr(3)}`,{},{headers:{Authorization:"Bearer "+s,Accept:"application/json","Content-Type":"application/json"}})}catch(h){console.log(h)}}},"Crear playlist"),t.createElement(d,{href:b,target:"_blank"},"Ir a playlist")))};T.propTypes={modal:r.bool,setModal:r.func,token:r.string,userId:r.string,artistUser:r.array,songsUser:r.array,genresUser:r.array};const q=()=>{const[e,r]=n.exports.useState(""),[s,o]=n.exports.useState(""),[l,i]=n.exports.useState([]),[c,m]=n.exports.useState([]),[u,p]=n.exports.useState([]),[h,w]=n.exports.useState([]),[S,$]=n.exports.useState([]),[U,_]=n.exports.useState([]),[z,B]=n.exports.useState(!1),[q,F]=n.exports.useState("");return n.exports.useEffect((()=>{if(window.location.hash){const{access_token:t,expires_in:n,token_type:s}=window.location.hash.substring(1).split("&").reduce(((e,t)=>{const[r,n]=t.split("=");return e[r]=n,e}),{});return localStorage.clear(),r(t),(async e=>{try{await a.get("\thttps://api.spotify.com/v1/me",{headers:{Authorization:"Bearer "+e}}).then((e=>{o(e.data),F(e.data.id)}))}catch(t){console.log(t.message),t.message}})(t),(async e=>{await a.get("https://api.spotify.com/v1/recommendations/available-genre-seeds",{headers:{Authorization:"Bearer "+e}}).then((e=>{p(e.data.genres)}))})(t),localStorage.setItem("access_token",t),localStorage.setItem("expires_in",n),localStorage.setItem("token_type",s),e}}),[]),t.createElement(t.Fragment,null,t.createElement(f,{variant:!0,direction:"row",align:"center",justify:"space-between",padding:" 0 3.5rem",gap:"0"},t.createElement(x,{username:s.display_name}),t.createElement(y,null,"Playlist Generator"),t.createElement(d,{onClick:()=>B(!z)},"Ir al generador")),t.createElement(C,{token:e,setArtist:m,setSongs:i}),t.createElement(E,{variant:!0},t.createElement(k,null,t.createElement(f,{align:"center",justify:"space-between"},t.createElement(g,null,"Artistas"),t.createElement(v,null,S.length," seleccionado(s)")),t.createElement(f,{direction:"column",gap:"1rem"},null==c?void 0:c.map((({name:e,images:r,id:n})=>t.createElement(j,{key:n,id:n,name:e,images:r,artistUser:S,setArtistUser:$}))))),t.createElement(k,null,t.createElement(f,{align:"center",justify:"space-between"},t.createElement(g,null,"Canciones"),t.createElement(v,null,h.length," seleccionada(s)")),t.createElement(f,{direction:"column",gap:"1rem"},null==l?void 0:l.map((({name:e,album:r,id:n})=>t.createElement(A,{key:n,id:n,name:e,album:r,songsUser:h,setSongsUser:w}))))),t.createElement(k,null,t.createElement(f,{align:"center",justify:"space-between"},t.createElement(g,null,"Géneros"),t.createElement(v,null,U.length," seleccionado(s)")),t.createElement(f,{direction:"row",gap:"1rem",wrap:"wrap"},null==u?void 0:u.map(((e,r)=>t.createElement(I,{key:r,genre:e,genresUser:U,setGenresUser:_}))))),z&&t.createElement(T,{modal:z,setModal:B,token:e,userId:q,artistUser:S,songsUser:h,genresUser:U})),t.createElement(b,null))},F=s`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  }
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #131313;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #EDEFF2;
  }
`,N=()=>t.createElement(t.Fragment,null,t.createElement(o,null,t.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),t.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),t.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap",rel:"stylesheet"})),t.createElement(F,null),t.createElement(l,null,t.createElement(i,null,t.createElement(c,{exact:!0,path:"/"},t.createElement(w,null)),t.createElement(c,{exact:!0,path:"/generador"},t.createElement(q,null)),t.createElement(m,{to:"/"}))));u.render(t.createElement(N,null),document.getElementById("root"));

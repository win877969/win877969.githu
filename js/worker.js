// worker.js
import { connect } from "cloudflare:sockets";
var listProxy = [
   { path: "/vless-sg-do1", proxy: "167.71.194.185:8443" },
 // { path: "8.215.59.6:443", proxy: "8.215.59.6:443" },  
 // { path: "147.139.245.56:443", proxy: "147.139.245.56:443" },
 // { path: "103.67.79.230:443", proxy: "103.67.79.230:443" },  
  { path: "203.194.112.119:8443", proxy: "203.194.112.119:8443" },
  { path: "111.95.40.14:32414", proxy: "111.95.40.14:32414" },
  { path: "103.186.1.209:8443", proxy: "103.186.1.209:8443" },
  { path: "35.219.50.99:443", proxy: "35.219.50.99:443" },
  { path: "35.219.15.90:443", proxy: "35.219.15.90:443" },
  { path: "210.186.12.244:443", proxy: "210.186.12.244:443" },
  { path: "166.88.35.141:443", proxy: "166.88.35.141:443" },
  { path: "167.71.194.185:8443", proxy: "167.71.194.185:8443" },
  { path: "89.34.227.166:8443", proxy: "89.34.227.166:8443" },
  { path: "45.77.36.40:443", proxy: "45.77.36.40:443" },
  { path: "43.134.34.18:443", proxy: "43.134.34.18:443" },
  { path: "103.180.193.56:443", proxy: "103.180.193.56:443" },
  { path: "164.52.2.100:443", proxy: "164.52.2.100:443" },
  { path: "51.79.254.182:443", proxy: "51.79.254.182:443" },
  { path: "104.248.145.216:443", proxy: "104.248.145.216:443" },
  { path: "185.217.5.3:443", proxy: "185.217.5.3:443" },
  { path: "129.150.50.63:443", proxy: "129.150.50.63:443" },
  { path: "185.114.78.230:443", proxy: "185.114.78.230:443" },
  { path: "194.36.179.237:443", proxy: "194.36.179.237:443" },
  { path: "52.74.101.26:443", proxy: "52.74.101.26:443" },
  { path: "143.42.66.91:443", proxy: "143.42.66.91:443" },
{ path: "3.112.21.102:443", proxy: "3.112.21.102:443" },
{ path: "3.113.64.82:443", proxy: "3.113.64.82:443" },
{ path: "5.226.48.84:443", proxy: "5.226.48.84:443" },
{ path: "13.230.34.30:443", proxy: "13.230.34.30:443" },
{ path: "18.183.158.211:443", proxy: "18.183.158.211:443" },
{ path: "35.77.126.144:443", proxy: "35.77.126.144:443" },
{ path: "38.180.29.115:443", proxy: "38.180.29.115:443" },
{ path: "45.76.198.248:443", proxy: "45.76.198.248:443" },
{ path: "45.76.220.61:443", proxy: "45.76.220.61:443" },
{ path: "45.77.130.245:443", proxy: "45.77.130.245:443" },
{ path: "54.249.135.43:443", proxy: "54.249.135.43:443" },
{ path: "128.1.18.29:443", proxy: "128.1.18.29:443" },
{ path: "140.227.233.71:443", proxy: "140.227.233.71:443" },
{ path: "149.28.21.106:443", proxy: "149.28.21.106:443" },
{ path: "154.31.113.72:443", proxy: "154.31.113.72:443" },
{ path: "159.100.194.42:443", proxy: "159.100.194.42:443" },
{ path: "207.148.105.247:443", proxy: "207.148.105.247:443" },
{ path: "219.111.17.202:443", proxy: "219.111.17.202:443" },
{ path: "141.98.196.223:443", proxy: "141.98.196.223:443" },
{ path: "168.138.46.67:443", proxy: "168.138.46.67:443" },
{ path: "141.147.163.68:443", proxy: "141.147.163.68:443" },
{ path: "52.197.230.94:443", proxy: "52.197.230.94:443" },
{ path: "168.138.212.87:443", proxy: "168.138.212.87:443" },
{ path: "54.199.222.232:443", proxy: "54.199.222.232:443" },
 { path: "178.128.80.43:443", proxy: "178.128.80.43:443" },
  { path: "38.180.165.29:443", proxy: "38.180.165.29:443" },
  { path: "185.103.109.139:443", proxy: "185.103.109.139:443" },
  { path: "31.28.27.38:443", proxy: "31.28.27.38:443" }
//  { path: "146.56.169.198:443", proxy: "146.56.169.198:443" },
 // { path: "158.180.94.12:443", proxy: "158.180.94.12:443" },
// batas
//  { path: "198.13.56.210:443", proxy: "198.13.56.210:443" },
 // { path: "35.73.102.80:443", proxy: "35.73.102.80:443" }
//  { path: "185.103.109.139", proxy: "185.103.109.139" },
//  { path: "178.128.80.43", proxy: "178.128.80.43" },
//  { path: "35.219.15.90", proxy: "35.219.15.90" },
 // { path: "8.223.39.101", proxy: "8.223.39.101" },
//  { path: "175.142.86.195", proxy: "175.142.86.195" },
//  { path: "166.88.35.141", proxy: "166.88.35.141" },
//  { path: "31.28.27.38", proxy: "31.28.27.38" },
//  { path: "203.194.112.119", proxy: "203.194.112.119" },
 // { path: "104.17.159.243", proxy: "104.17.159.243" }
  //tambahin sendiri
];
var proxyIP;
var proxyPort;
var worker_default = {
  async fetch(request, ctx) {
    try {
      proxyIP = proxyIP;
      const url = new URL(request.url);
      const upgradeHeader = request.headers.get("Upgrade");
      for (const entry of listProxy) {
        if (url.pathname === entry.path) {
          [proxyIP, proxyPort] = entry.proxy.split(':');
          break;
        }
      }
      if (upgradeHeader === "websocket" && proxyIP) {
        return await vlessOverWSHandler(request);
      }
      const allConfig = await getAllConfigVless(request.headers.get("Host"));
      return new Response(allConfig, {
        status: 200,
        headers: { "Content-Type": "text/html;charset=utf-8" }
      });
    } catch (err) {
      return new Response(err.toString(), { status: 500 });
    }
  }
};
async function getAllConfigVless(hostName) {
  try {    
    let v2rayConfigs = "";
    let v2raylist = "";
    let showconfig = "";
    let clashlist = "";
    let clashConfigs = "";
    let v2raytable = "";
    let clashtable = "";    
    for (const entry of listProxy) {
      const { path, proxy } = entry;
      const [ipOnly] = proxy.split(':');
      const response = await fetch(`http://ip-api.com/json/${ipOnly}`);
      const data = await response.json();
      const pathFixed = encodeURIComponent(path);
      const vlessTls = `vless://FREE-CF-BMGK-XYZ@xvp.bmkg.xyz:443?encryption=none&security=tls&sni=xvp.bmkg.xyz&fp=randomized&type=ws&host=xvp.bmkg.xyz&path=%2Fvl%3D${pathFixed}#${data.isp} (${data.countryCode})`;
      const vlessTls1 = `vless://FREE-CF-BMGK-XYZ@ava.game.naver.com:443?encryption=none&security=tls&sni=ava.game.naver.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=ava.game.naver.com.xvp.bmkg.xyz&path=%2Fvl%3D${pathFixed}#${data.isp} (${data.countryCode})`;
      const vlessTls2 = `vless://FREE-CF-BMGK-XYZ@graph.instagram.com:443?encryption=none&security=tls&sni=graph.instagram.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=graph.instagram.com.xvp.bmkg.xyz&path=%2Fvl%3D${pathFixed}#${data.isp} (${data.countryCode})`;
      const vlessTls3 = `vless://FREE-CF-BMGK-XYZ@quiz.int.vidio.com:443?encryption=none&security=tls&sni=quiz.int.vidio.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=quiz.int.vidio.com.xvp.bmkg.xyz&path=%2Fvl%3D${pathFixed}#${data.isp} (${data.countryCode})`;
      const vlessTls4 = `vless://FREE-CF-BMGK-XYZ@live.iflix.com:443?encryption=none&security=tls&sni=live.iflix.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=live.iflix.com.xvp.bmkg.xyz&path=%2Fvl%3D${pathFixed}#${data.isp} (${data.countryCode})`;
      const vlessTls5 = `vless://FREE-CF-BMGK-XYZ@support.zoom.us.:443?encryption=none&security=tls&sni=support.zoom.us.xvp.bmkg.xyz&fp=randomized&type=ws&host=support.zoom.us.xvp.bmkg.xyz&path=%2Fvl%3D${pathFixed}#${data.isp} (${data.countryCode})`;
      const vlessTls6 = `vless://FREE-CF-BMGK-XYZ@blog.webex.com:443?encryption=none&security=tls&sni=blog.webex.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=blog.webex.com.xvp.bmkg.xyz&path=%2Fvl%3D${pathFixed}#${data.isp} (${data.countryCode})`;
      const vlessTls7 = `vless://FREE-CF-BMGK-XYZ@investors.spotify.com.:443?encryption=none&security=tls&sni=investors.spotify.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=investors.spotify.com.xvp.bmkg.xyz&path=%2Fvl%3D${pathFixed}#${data.isp} (${data.countryCode})`;
      const vlessTls8 = `vless://FREE-CF-BMGK-XYZ@cache.netflix.com:443?encryption=none&security=tls&sni=cache.netflix.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=cache.netflix.com.xvp.bmkg.xyz&path=%2Fvl%3D${pathFixed}#${data.isp} (${data.countryCode})`;
      const vlessTls9 = `vless://FREE-CF-BMGK-XYZ@zaintest.vuclip.com:443?encryption=none&security=tls&sni=zaintest.vuclip.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=zaintest.vuclip.com.xvp.bmkg.xyz&path=%2Fvl%3D${pathFixed}#${data.isp} (${data.countryCode})`;
      const vlessTls10 = `vless://FREE-CF-BMGK-XYZ@io.ruangguru.com:443?encryption=none&security=tls&sni=io.ruangguru.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=io.ruangguru.com.xvp.bmkg.xyz&path=%2Fvl%3D${pathFixed}#${data.isp} (${data.countryCode})`;
      const vlessNtls = `vless://FREE-CF-BMGK-XYZ@xvp.bmkg.xyz:80?path=%2Fvl%3D${pathFixed}&security=none&encryption=none&host=xvp.bmkg.xyz&fp=randomized&type=ws&sni=xvp.bmkg.xyz#${data.isp} (${data.countryCode})`;
      const vlessTlsFixed = vlessTls.replace(/ /g, "+");
      const vlessTls1Fixed = vlessTls1.replace(/ /g, "+");
      const vlessTls2Fixed = vlessTls2.replace(/ /g, "+");
      const vlessTls3Fixed = vlessTls3.replace(/ /g, "+");
      const vlessTls4Fixed = vlessTls4.replace(/ /g, "+");
      const vlessTls5Fixed = vlessTls5.replace(/ /g, "+");
      const vlessTls6Fixed = vlessTls6.replace(/ /g, "+");
      const vlessTls7Fixed = vlessTls7.replace(/ /g, "+");
      const vlessTls8Fixed = vlessTls8.replace(/ /g, "+");
      const vlessTls9Fixed = vlessTls9.replace(/ /g, "+");
      const vlessTls10Fixed = vlessTls10.replace(/ /g, "+");
      const vlessNtlsFixed = vlessNtls.replace(/ /g, "+");
      const trojanTls = `trojan://FREE-CF-BMGK-XYZ@xvp.bmkg.xyz:443?security=tls&type=ws&host=xvp.bmkg.xyz&sni=xvp.bmkg.xyz&fp=random&path=%2Ftr%3D${pathFixed}#${data.isp} (${data.country})`;
      const trojanTls1 = `trojan://FREE-CF-BMGK-XYZ@ava.game.naver.com:443?security=tls&type=ws&host=ava.game.naver.com.xvp.bmkg.xyz&sni=ava.game.naver.com.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D${pathFixed}#${data.isp} (${data.country})`;
      const trojanTls2 = `trojan://FREE-CF-BMGK-XYZ@graph.instagram.com:443?security=tls&type=ws&host=graph.instagram.com.xvp.bmkg.xyz&sni=graph.instagram.com.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D${pathFixed}#${data.isp} (${data.country})`;
      const trojanTls3 = `trojan://FREE-CF-BMGK-XYZ@quiz.int.vidio.com:443?security=tls&type=ws&host=quiz.int.vidio.com.xvp.bmkg.xyz&sni=quiz.int.vidio.com.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D${pathFixed}#${data.isp} (${data.country})`;
      const trojanTls4 = `trojan://FREE-CF-BMGK-XYZ@live.iflix.com:443?security=tls&type=ws&host=live.iflix.com.xvp.bmkg.xyz&sni=live.iflix.com.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D${pathFixed}#${data.isp} (${data.country})`;
      const trojanTls5 = `trojan://FREE-CF-BMGK-XYZ@support.zoom.us:443?security=tls&type=ws&host=support.zoom.us.xvp.bmkg.xyz&sni=support.zoom.us.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D${pathFixed}#${data.isp} (${data.country})`;
      const trojanTls6 = `trojan://FREE-CF-BMGK-XYZ@blog.webex.com:443?security=tls&type=ws&host=blog.webex.com.xvp.bmkg.xyz&sni=blog.webex.com.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D${pathFixed}#${data.isp} (${data.country})`;
      const trojanTls7 = `trojan://FREE-CF-BMGK-XYZ@investors.spotify.com:443?security=tls&type=ws&host=investors.spotify.com.xvp.bmkg.xyz&sni=investors.spotify.com.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D${pathFixed}#${data.isp} (${data.country})`;
      const trojanTls8 = `trojan://FREE-CF-BMGK-XYZ@cache.netflix.com:443?security=tls&type=ws&host=cache.netflix.com.xvp.bmkg.xyz&sni=cache.netflix.com.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D${pathFixed}#${data.isp} (${data.country})`;
      const trojanTls9 = `trojan://FREE-CF-BMGK-XYZ@zaintest.vuclip.com:443?security=tls&type=ws&host=zaintest.vuclip.com.xvp.bmkg.xyz&sni=zaintest.vuclip.com.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D${pathFixed}#${data.isp} (${data.country})`;
      const trojanTls10 = `trojan://FREE-CF-BMGK-XYZ@io.ruangguru.com:443?security=tls&type=ws&host=io.ruangguru.com.xvp.bmkg.xyz&sni=io.ruangguru.com.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D${pathFixed}#${data.isp} (${data.country})`;
      const trojanTlsFixed = trojanTls.replace(/ /g, '+');
      const trojanTlsFixed1 = trojanTls1.replace(/ /g, '+');
      const trojanTlsFixed2 = trojanTls2.replace(/ /g, '+');
      const trojanTlsFixed3 = trojanTls3.replace(/ /g, '+');
      const trojanTlsFixed4 = trojanTls4.replace(/ /g, '+');
      const trojanTlsFixed5 = trojanTls5.replace(/ /g, '+');
      const trojanTlsFixed6 = trojanTls6.replace(/ /g, '+');
      const trojanTlsFixed7 = trojanTls7.replace(/ /g, '+');
      const trojanTlsFixed8 = trojanTls8.replace(/ /g, '+');
      const trojanTlsFixed9 = trojanTls9.replace(/ /g, '+');
      const trojanTlsFixed10 = trojanTls10.replace(/ /g, '+');           
      const clashConfTls = `- name: ${data.isp} (${data.countryCode})
  server: xvp.bmkg.xyz
  port: 443
  type: vless
  uuid: FREE-CF-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: xvp.bmkg.xyz
  ws-opts:
    path: /vl=${path}
    headers:
      Host: xvp.bmkg.xyz`;
      
      const clashConfTls1 = `- name: ${data.isp} (${data.countryCode})
  server: ava.game.naver.com
  port: 443
  type: vless
  uuid: FREE-CF-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: ava.game.naver.com.xvp.bmkg.xyz
  ws-opts:
    path: /vl=${path}
    headers:
      Host: ava.game.naver.com.xvp.bmkg.xyz`;
      
      const clashConfTls2 = `- name: ${data.isp} (${data.countryCode})
  server: graph.instagram.com
  port: 443
  type: vless
  uuid: FREE-CF-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: graph.instagram.com.xvp.bmkg.xyz
  ws-opts:
    path: /vl=${path}
    headers:
      Host: graph.instagram.com.xvp.bmkg.xyz`;
      
      const clashConfTls3 = `- name: ${data.isp} (${data.countryCode})
  server: quiz.int.vidio.com
  port: 443
  type: vless
  uuid: FREE-CF-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: quiz.int.vidio.com.xvp.bmkg.xyz
  ws-opts:
    path: /vl=${path}
    headers:
      Host: quiz.int.vidio.com.xvp.bmkg.xyz`;
      
      const clashConfTls4 = `- name: ${data.isp} (${data.countryCode})
  server: live.iflix.com
  port: 443
  type: vless
  uuid: FREE-CF-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: live.iflix.com.xvp.bmkg.xyz
  ws-opts:
    path: /vl=${path}
    headers:
      Host: live.iflix.com.xvp.bmkg.xyz`;
      
      const clashConfTls5 = `- name: ${data.isp} (${data.countryCode})
  server: support.zoom.us
  port: 443
  type: vless
  uuid: FREE-CF-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: support.zoom.us.xvp.bmkg.xyz
  ws-opts:
    path: /vl=${path}
    headers:
      Host: support.zoom.us.xvp.bmkg.xyz`;
      
      const clashConfTls6 = `- name: ${data.isp} (${data.countryCode})
  server: blog.webex.com
  port: 443
  type: vless
  uuid: FREE-CF-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: blog.webex.com.xvp.bmkg.xyz
  ws-opts:
    path: /vl=${path}
    headers:
      Host: blog.webex.com.xvp.bmkg.xyz`;
      
      const clashConfTls7 = `- name: ${data.isp} (${data.countryCode})
  server: investors.spotify.com
  port: 443
  type: vless
  uuid: FREE-CF-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: investors.spotify.com.xvp.bmkg.xyz
  ws-opts:
    path: /vl=${path}
    headers:
      Host: investors.spotify.com.xvp.bmkg.xyz`;
      
      const clashConfTls8 = `- name: ${data.isp} (${data.countryCode})
  server: cache.netflix.com
  port: 443
  type: vless
  uuid: FREE-CF-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: cache.netflix.com.xvp.bmkg.xyz
  ws-opts:
    path: /vl=${path}
    headers:
      Host: cache.netflix.com.xvp.bmkg.xyz`;
      
      const clashConfTls9 = `- name: ${data.isp} (${data.countryCode})
  server: zaintest.vuclip.com
  port: 443
  type: vless
  uuid: FREE-CF-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: zaintest.vuclip.com.xvp.bmkg.xyz
  ws-opts:
    path: /vl=${path}
    headers:
      Host: zaintest.vuclip.com.xvp.bmkg.xyz`;
      
      const clashConfTls10 = `- name: ${data.isp} (${data.countryCode})
  server: io.ruangguru.com
  port: 443
  type: vless
  uuid: FREE-CF-BMGK-XYZ
  cipher: auto
  tls: true
  udp: true
  skip-cert-verify: true
  network: ws
  servername: io.ruangguru.com.xvp.bmkg.xyz
  ws-opts:
    path: /vl=${path}
    headers:
      Host: io.ruangguru.com.xvp.bmkg.xyz`;
      const clashConfNtls = `- name: ${data.isp} (${data.countryCode})
  server: xvp.bmkg.xyz
  port: 80
  type: vless
  uuid: FREE-CF-BMGK-XYZ
  cipher: auto
  tls: false
  udp: true
  skip-cert-verify: true
  network: ws
  ws-opts:
    path: /vl=${path}
    headers:
      Host: xvp.bmkg.xyz`;
const clashConfTls11 = `- name: ${data.isp} (${data.countryCode})
    server: xvp.bmkg.xyz
    port: 443
    type: trojan
    password: FREE-CF-BMGK-XYZ
    skip-cert-verify: true
    sni: xvp.bmkg.xyz
    network: ws
    ws-opts:
      path: /tr=${path}
      headers:
        Host: xvp.bmkg.xyz
    udp: true `;
      const clashConfTls12 = `- name: ${data.isp} (${data.countryCode})
    server: ava.game.naver.com
    port: 443
    type: trojan
    password: FREE-CF-BMGK-XYZ
    skip-cert-verify: true
    sni: ava.game.naver.com.xvp.bmkg.xyz
    network: ws
    ws-opts:
      path: /tr=${path}
      headers:
        Host: ava.game.naver.com.xvp.bmkg.xyz
    udp: true `;
      const clashConfTls13 = `- name: ${data.isp} (${data.countryCode})
    server: graph.instagram.com
    port: 443
    type: trojan
    password: FREE-CF-BMGK-XYZ
    skip-cert-verify: true
    sni: graph.instagram.com.xvp.bmkg.xyz
    network: ws
    ws-opts:
      path: /tr=${path}
      headers:
        Host: graph.instagram.com.xvp.bmkg.xyz
    udp: true `;
      const clashConfTls14 = `- name: ${data.isp} (${data.countryCode})
    server: quiz.int.vidio.com
    port: 443
    type: trojan
    password: FREE-CF-BMGK-XYZ
    skip-cert-verify: true
    sni: quiz.int.vidio.com.xvp.bmkg.xyz
    network: ws
    ws-opts:
      path: /tr=${path}
      headers:
        Host: quiz.int.vidio.com.xvp.bmkg.xyz
    udp: true `;
      const clashConfTls15 = `- name: ${data.isp} (${data.countryCode})
    server: live.iflix.com
    port: 443
    type: trojan
    password: FREE-CF-BMGK-XYZ
    skip-cert-verify: true
    sni: live.iflix.com.xvp.bmkg.xyz
    network: ws
    ws-opts:
      path: /tr=${path}
      headers:
        Host: live.iflix.com.xvp.bmkg.xyz
    udp: true `;
      const clashConfTls16 = `- name: ${data.isp} (${data.countryCode})
    server: support.zoom.us
    port: 443
    type: trojan
    password: FREE-CF-BMGK-XYZ
    skip-cert-verify: true
    sni: support.zoom.us.xvp.bmkg.xyz
    network: ws
    ws-opts:
      path: /tr=${path}
      headers:
        Host: support.zoom.us.xvp.bmkg.xyz
    udp: true `;
      const clashConfTls17 = `- name: ${data.isp} (${data.countryCode})
    server: blog.webex.com
    port: 443
    type: trojan
    password: FREE-CF-BMGK-XYZ
    skip-cert-verify: true
    sni: blog.webex.com.xvp.bmkg.xyz
    network: ws
    ws-opts:
      path: /tr=${path}
      headers:
        Host: blog.webex.com.xvp.bmkg.xyz
    udp: true `;
      const clashConfTls18 = `- name: ${data.isp} (${data.countryCode})
    server: investors.spotify.com
    port: 443
    type: trojan
    password: FREE-CF-BMGK-XYZ
    skip-cert-verify: true
    sni: investors.spotify.com.xvp.bmkg.xyz
    network: ws
    ws-opts:
      path: /tr=${path}
      headers:
        Host: investors.spotify.com.xvp.bmkg.xyz
    udp: true `;
      const clashConfTls19 = `- name: ${data.isp} (${data.countryCode})
    server: cache.netflix.com
    port: 443
    type: trojan
    password: FREE-CF-BMGK-XYZ
    skip-cert-verify: true
    sni: cache.netflix.com.xvp.bmkg.xyz
    network: ws
    ws-opts:
      path: /tr=${path}
      headers:
        Host: cache.netflix.com.xvp.bmkg.xyz
    udp: true `;
      const clashConfTls20 = `- name: ${data.isp} (${data.countryCode})
    server: zaintest.vuclip.com
    port: 443
    type: trojan
    password: FREE-CF-BMGK-XYZ
    skip-cert-verify: true
    sni: zaintest.vuclip.com.xvp.bmkg.xyz
    network: ws
    ws-opts:
      path: /tr=${path}
      headers:
        Host: zaintest.vuclip.com.xvp.bmkg.xyz
    udp: true `;
      const clashConfTls21 = `- name: ${data.isp} (${data.countryCode})
    server: io.ruangguru.com
    port: 443
    type: trojan
    password: FREE-CF-BMGK-XYZ
    skip-cert-verify: true
    sni: io.ruangguru.com.xvp.bmkg.xyz
    network: ws
    ws-opts:
      path: /tr=${path}
      headers:
        Host: io.ruangguru.com.xvp.bmkg.xyz
    udp: true `;
      clashConfigs += `<div style="display: none;">
   <textarea id="clashTls%2Fvl%3D${path}">${clashConfTls}</textarea>
   <textarea id="clashTls1%2Fvl%3D${path}">${clashConfTls1}</textarea>
   <textarea id="clashTls2%2Fvl%3D${path}">${clashConfTls2}</textarea>
   <textarea id="clashTls3%2Fvl%3D${path}">${clashConfTls3}</textarea>
   <textarea id="clashTls4%2Fvl%3D${path}">${clashConfTls4}</textarea>
   <textarea id="clashTls5%2Fvl%3D${path}">${clashConfTls5}</textarea>
   <textarea id="clashTls6%2Fvl%3D${path}">${clashConfTls6}</textarea>
   <textarea id="clashTls7%2Fvl%3D${path}">${clashConfTls7}</textarea>
   <textarea id="clashTls8%2Fvl%3D${path}">${clashConfTls8}</textarea>
   <textarea id="clashTls9%2Fvl%3D${path}">${clashConfTls9}</textarea>
   <textarea id="clashTls10%2Fvl%3D${path}">${clashConfTls10}</textarea>
   <textarea id="clashTls11%2Ftr%3D${path}">${clashConfTls11}</textarea>
   <textarea id="clashTls12%2Ftr%3D${path}">${clashConfTls12}</textarea>
   <textarea id="clashTls13%2Ftr%3D${path}">${clashConfTls13}</textarea>
   <textarea id="clashTls14%2Ftr%3D${path}">${clashConfTls14}</textarea>
   <textarea id="clashTls15%2Ftr%3D${path}">${clashConfTls15}</textarea>
   <textarea id="clashTls16%2Ftr%3D${path}">${clashConfTls16}</textarea>
   <textarea id="clashTls17%2Ftr%3D${path}">${clashConfTls17}</textarea>
   <textarea id="clashTls18%2Ftr%3D${path}">${clashConfTls18}</textarea>
   <textarea id="clashTls19%2Ftr%3D${path}">${clashConfTls19}</textarea>
   <textarea id="clashTls20%2Ftr%3D${path}">${clashConfTls20}</textarea>
   <textarea id="clashTls21%2Ftr%3D${path}">${clashConfTls21}</textarea>

   </div>
<div style="display: none;">
   <textarea id="clashNtls%2Fvl%3D${path}">${clashConfNtls}</textarea>
 </div>
 <div id="clash${path}" class="tabcontent1">
   
<div class="config-section">
    <p><strong>ISP :  ${data.isp} (${data.countryCode})</strong> </p>
    <hr/>
    <div class="config-toggle">
        <div class="config-block">
                <h3>TROJAN TLS:</h3>
          <p class="config">${trojanTlsFixed}</p>
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed}")'><i class="fa fa-clipboard"></i>Copy</button>
               </div> 
            <p class="config">» ava.game.naver.com
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed1}")'><i class="fa fa-clipboard"></i>Copy</button></p>
            <p class="config">» graph.instagram.com
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed2}")'><i class="fa fa-clipboard"></i>Copy</button></p>
            <p class="config">» quiz.int.vidio.com
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed3}")'><i class="fa fa-clipboard"></i>Copy</button></p>
            <p class="config">» live.iflix.com
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed4}")'><i class="fa fa-clipboard"></i>Copy</button></p>    
            <p class="config">» support.zoom.us
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed5}")'><i class="fa fa-clipboard"></i>Copy</button></p>   
            <p class="config">» blog.webex.com
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed6}")'><i class="fa fa-clipboard"></i>Copy</button></p>   
            <p class="config">» investors.spotify.com
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed7}")'><i class="fa fa-clipboard"></i>Copy</button></p>   
            <p class="config">» cache.netflix.com
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed8}")'><i class="fa fa-clipboard"></i>Copy</button></p>  
            <p class="config">» zaintest.vuclip.com
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed9}")'><i class="fa fa-clipboard"></i>Copy</button></p> 
            <p class="config">» io.ruangguru.com
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed10}")'><i class="fa fa-clipboard"></i>Copy</button></p> 
               
          
            <hr />
            <div class="config-block">
                <h3>TROJAN CLASH TLS:</h3>
                <p class="config">${clashConfTls11}</p>
                <button class="button2" onclick='copyClash("clashTls11%2Ftr%3D${path}")'><i class="fa fa-clipboard"></i>Copy</button>
          </div>
          <p class="config">» ava.game.naver.com
                <button class="button2" onclick='copyClash("clashTls12%2Ftr%3D${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          <p class="config">» graph.instagram.com
                <button class="button2" onclick='copyClash("clashTls13%2Ftr%3D${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          <p class="config">» quiz.int.vidio.com
                <button class="button2" onclick='copyClash("clashTls14%2Ftr%3D${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          <p class="config">» live.iflix.com
                <button class="button2" onclick='copyClash("clashTls15%2Ftr%3D${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          <p class="config">» support.zoom.us
                <button class="button2" onclick='copyClash("clashTls16%2Ftr%3D${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          <p class="config">» blog.webex.com
                <button class="button2" onclick='copyClash("clashTls17%2Ftr%3D${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          <p class="config">» investors.spotify.com
                <button class="button2" onclick='copyClash("clashTls18%2Ftr%3D${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          <p class="config">» cache.netflix.com 
                <button class="button2" onclick='copyClash("clashTls19%2Ftr%3D${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          <p class="config">» zaintest.vuclip.com
                <button class="button2" onclick='copyClash("clashTls20%2Ftr%3D${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          <p class="config">» io.ruangguru.com 
                <button class="button2" onclick='copyClash("clashTls21%2Ftr%3D${path}")'><i class="fa fa-clipboard"></i>Copy</button></p>
          
                
        </div>
    </div>
</div>
<hr class="config-divider" />
`;
      v2rayConfigs += `  <div id="v2ray${path}" class="tabcontent">

       <p style="font-size: 28px; "><strong>ISP  :  ${data.isp} (${data.countryCode}) </strong> </p>
    <hr />
    
        <div class="config-block">
                <h3>VLESS TLS:</h3>
                <p class="config">${vlessTlsFixed}</p>
                <button class="button2" onclick='copyToClipboard("${vlessTlsFixed}")'><i class="fa fa-clipboard"></i>Copy</button>
               </div><hr />
            <p class="config">» ava.game.naver.com
                <button class="button2" onclick='copyToClipboard("${vlessTls1Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p>
            <p class="config">» graph.instagram.com
                <button class="button2" onclick='copyToClipboard("${vlessTls2Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p>
            <p class="config">» quiz.int.vidio.com
                <button class="button2" onclick='copyToClipboard("${vlessTls3Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p>
            <p class="config">» live.iflix.com
                <button class="button2" onclick='copyToClipboard("${vlessTls4Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p>    
            <p class="config">» support.zoom.us
                <button class="button2" onclick='copyToClipboard("${vlessTls5Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p>   
            <p class="config">» blog.webex.com
                <button class="button2" onclick='copyToClipboard("${vlessTls6Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p>   
            <p class="config">» investors.spotify.com
                <button class="button2" onclick='copyToClipboard("${vlessTls7Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p>   
            <p class="config">» cache.netflix.com
                <button class="button2" onclick='copyToClipboard("${vlessTls8Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p>  
            <p class="config">» zaintest.vuclip.com
                <button class="button2" onclick='copyToClipboard("${vlessTls9Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p> 
            <p class="config">» io.ruangguru.com
                <button class="button2" onclick='copyToClipboard("${vlessTls10Fixed}")'><i class="fa fa-clipboard"></i>Copy</button></p> 
              <hr /> 
              
            <div class="config-block">
                <h3>VLESS NTLS:</h3>
                <p class="config">${vlessNtlsFixed}</p>
                <button class="button2" onclick='copyToClipboard("${vlessNtlsFixed}")'><i class="fa fa-clipboard"></i>Copy</button>
            </div><hr /> 
            <div class="config-block">
                <h3>TROJAN TLS:</h3>
          <p class="config">${trojanTlsFixed}</p>
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed}")'><i class="fa fa-clipboard"></i>Copy</button>
               </div> <hr /> 
            <p class="config">» ava.game.naver.com
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed1}")'><i class="fa fa-clipboard"></i>Copy</button></p>
            <p class="config">» graph.instagram.com
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed2}")'><i class="fa fa-clipboard"></i>Copy</button></p>
            <p class="config">» quiz.int.vidio.com
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed3}")'><i class="fa fa-clipboard"></i>Copy</button></p>
            <p class="config">» live.iflix.com
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed4}")'><i class="fa fa-clipboard"></i>Copy</button></p>    
            <p class="config">» support.zoom.us
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed5}")'><i class="fa fa-clipboard"></i>Copy</button></p>   
            <p class="config">» blog.webex.com
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed6}")'><i class="fa fa-clipboard"></i>Copy</button></p>   
            <p class="config">» investors.spotify.com
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed7}")'><i class="fa fa-clipboard"></i>Copy</button></p>   
            <p class="config">» cache.netflix.com
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed8}")'><i class="fa fa-clipboard"></i>Copy</button></p>  
            <p class="config">» zaintest.vuclip.com
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed9}")'><i class="fa fa-clipboard"></i>Copy</button></p> 
            <p class="config">» io.ruangguru.com
                <button class="button2" onclick='copyToClipboard("${trojanTlsFixed10}")'><i class="fa fa-clipboard"></i>Copy</button></p> 
               
          
            <hr />
           <a href="#defaultOpen">BACK TO SEARCH</a> 

       
        
    </div>


`;
      showconfig += `<pre><b>
<hr class="config-divider" />
» Domain      : xvp.bmkg.xyz
» ISP         : BIZNET
» Country     : Indonesia
» City        : Jakarta
» UUID        : FREE-CF-BMGK-XYZ
» Port TLS    : 443
» Port NTLS   : 80
» Security    : auto
» Network     : (WS)
» Path Vless  : /vl=35.219.15.90:443
» Path Trojan : /tr=35.219.15.90:443
<hr class="config-divider" /></b>
</pre> 
            
      
       `;
      clashlist += `
      <tr> 
      <button class="tablinks" onclick="openCity(event, 'v2ray1')"  id="defaultOpen">LIST V2RAY</button>

      <td class="tabs" onclick="showContent('clash${path}')"> ${data.isp} | (${data.countryCode})<hr class="config-divider" /></td>
     </tr>

`;
      v2raytable += ` <tr> 
       
<td class="tablinks" onclick="openCity(event, 'v2ray${path}')"><p style="font-size: 24px; "><a href="#v2ray${path}">${data.isp} | (${data.countryCode})</a></p><hr class="config-divider" /></td>
</tr>
      
        `;
      clashtable += `<tr> 
      <td class="tabv2ray" onclick="openPage('clash${path}')">${data.isp} | (${data.countryCode})<hr class="config-divider" /></td>
   </tr>

`;
    }
    const htmlConfigs = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>FREE | CF | VLESS | TROJAN | BMKG-XYZ</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicon -->
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="icon" href="https://raw.githubusercontent.com/win877969/NS1/refs/heads/main/img/icon.png" type="image/png">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    
    <!-- Icon Font Stylesheet -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="https://bmkg.xyz/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="https://bmkg.xyz/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link href="https://bmkg.xyz/css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="https://bmkg.xyz/css/style.css" rel="stylesheet">
        <link href="https://bmkg.xyz/css/config.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">


</head>
 
<body>


            


    <div class="container-fluid position-relative d-flex p-0">
        <!-- Spinner Start -->
        
        <!-- Spinner End -->


        <!-- Sidebar Start -->
        <div class="sidebar pe-4 pb-3">
            <nav class="navbar bg-secondary navbar-dark">
                <a href="index.html" class="navbar-brand mx-4 mb-3">
                    <h3 class="text-primary"> <i class="fa fa-user-edit me-2"></i>DarkPan</h3>
                </a>
                <div class="d-flex align-items-center ms-4 mb-4">
                    <div class="position-relative">
                                                
                    </div>
                    <div class="ms-3">
                        
                        
                    </div>
                </div>
                <div class="navbar-nav w-100">
                    <a href="#" class="nav-item nav-link active"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-laptop me-2"></i>List Server Premium</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <a href="#" class="dropdown-item">SINGAPORE</a>
                            <a href="#" class="dropdown-item">INDONESIA</a>
                            <a href="#" class="dropdown-item">OTHER SERVER</a>
                        </div>
                    </div>                    
                </div>
            </nav>
        </div>
        <!-- Sidebar End -->


        <!-- Content Start -->
        <div class="content">
            <!-- Navbar Start -->
            <nav class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
                
                <a href="#" class="sidebar-toggler flex-shrink-0">
                    <i class="fa fa-bars"></i>
                </a>
                
                <div class="navbar-nav align-items-center ms-auto">
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="fa fa-envelope me-lg-2"></i>
                            <span class="d-none d-lg-inline-flex">Message</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <a href="http://wa.me/6287861167414" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="https://raw.githubusercontent.com/win877969/NS1/refs/heads/main/img/social.png" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">WHATSAPP</h6>
                                        <small>Admin Whatsapp</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="http://t.me/seaker877" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="https://raw.githubusercontent.com/win877969/NS1/refs/heads/main/img/telegram.png" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">TELEGRAM</h6>
                                        <small>Admin Telegram</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="https://chat.whatsapp.com/L9bbkRbzyozEFJHgGc9pPh" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="https://raw.githubusercontent.com/win877969/NS1/refs/heads/main/img/pngwing.com.png" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">GRUB WHATSAPP</h6>
                                        <small>Grub Whatsapp</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider">
                               </div>
                    </div>
                    <div class="nav-item dropdown">
                        

                        </div>
                    </div>
                    
            </nav>
            <!-- Navbar End -->

<div class="card__top">
          <img src="https://raw.githubusercontent.com/win877969/NS1/refs/heads/main/img/icon.png" alt="XVPN" height="150" width="75">
                        
        </div>
        
            <!-- Sale & Revenue Start -->
            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-6 col-xl-3">
                        
                            <div class="config-section">
                            <pre><b>
<hr class="config-divider" />
» Domain      : xvp.bmkg.xyz
» ISP         : BIZNET
» Country     : Indonesia
» City        : Jakarta
» UUID        : FREE-CF-BMGK-XYZ
» Port TLS    : 443
» Port NTLS   : 80
» Security    : auto
» Network     : (WS)
» Path Vless  : /vl=35.219.15.90:443
» Path Trojan : /tr=35.219.15.90:443
<hr class="config-divider" /></b>
</pre> </div> <hr class="config-divider" />
<div class="config-section">
                          
        <strong><b><p style="font-size: 28px;">DAFTAR WILCARD:<p></strong> 
      <hr class="config-divider" />  
<br>» ava.game.naver.com.xvp.bmkg.xyz
<br>» graph.instagram.com.xvp.bmkg.xyz
<br>» quiz.int.vidio.com.xvp.bmkg.xyz
<br>» live.iflix.com.xvp.bmkg.xyz
<br>» support.zoom.us.xvp.bmkg.xyz
<br>» blog.webex.com.xvp.bmkg.xyz
<br>» investors.spotify.com.xvp.bmkg.xyz
<br>» cache.netflix.com.xvp.bmkg.xyz
<br>» zaintest.vuclip.com.xvp.bmkg.xyz
<br>» io.ruangguru.com.xvp.bmkg.xyz</b></hr></DIV>
        <hr class="config-divider" />
          <div class="config-section">
      

  <table id="userTable" width="100%">
  <center>
  
<div class="tablinks" onclick="openCity(event, 'v2rayaktif')" id="defaultOpen">
  <p style="font-size: 30px; color: red;">LIST V2RAY<hr class="config-divider" /></p></div></center>
  <thead>
            <tr>
                <th><hr/> <p style="font-size: 25px; ">ISP | COUNTRY</p><hr/> </th>
              </tr>
        </thead>
        <tbody>
            
            ${v2raytable}
             </tbody>
             
              </table>

        </div>
        
                        
                    </div>
                    <div class="col-sm-6 col-xl-3">
       <div class="config-section"> 
           
       ${v2rayConfigs}
      <div id="v2rayaktif" class="tabcontent">
      <p style="font-size: 27px; "><strong>ISP  :  CV. Rumahweb Indonesia (ID) </strong> </p>
    <hr />
    
       
               <div class="config-block">
                <h3>VLESS TLS:</h3>
                <p class="config">vless://FREE-CF-BMGK-XYZ@xvp.bmkg.xyz:443?encryption=none&security=tls&sni=xvp.bmkg.xyz&fp=randomized&type=ws&host=xvp.bmkg.xyz&path=%2Fvl%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(ID)</p>
                <button class="button2" onclick='copyToClipboard("vless://FREE-CF-BMGK-XYZ@xvp.bmkg.xyz:443?encryption=none&security=tls&sni=xvp.bmkg.xyz&fp=randomized&type=ws&host=xvp.bmkg.xyz&path=%2Fvl%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(ID)")'><i class="fa fa-clipboard"></i>Copy</button>
               </div> 
            <p class="config">» ava.game.naver.com
                <button class="button2" onclick='copyToClipboard("vless://FREE-CF-BMGK-XYZ@ava.game.naver.com:443?encryption=none&security=tls&sni=ava.game.naver.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=ava.game.naver.com.xvp.bmkg.xyz&path=%2Fvl%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(ID)")'><i class="fa fa-clipboard"></i>Copy</button></p>
            <p class="config">» graph.instagram.com
                <button class="button2" onclick='copyToClipboard("vless://FREE-CF-BMGK-XYZ@graph.instagram.com:443?encryption=none&security=tls&sni=graph.instagram.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=graph.instagram.com.xvp.bmkg.xyz&path=%2Fvl%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(ID)")'><i class="fa fa-clipboard"></i>Copy</button></p>
            <p class="config">» quiz.int.vidio.com
                <button class="button2" onclick='copyToClipboard("vless://FREE-CF-BMGK-XYZ@quiz.int.vidio.com:443?encryption=none&security=tls&sni=quiz.int.vidio.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=quiz.int.vidio.com.xvp.bmkg.xyz&path=%2Fvl%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(ID)")'><i class="fa fa-clipboard"></i>Copy</button></p>
            <p class="config">» live.iflix.com
                <button class="button2" onclick='copyToClipboard("vless://FREE-CF-BMGK-XYZ@live.iflix.com:443?encryption=none&security=tls&sni=live.iflix.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=live.iflix.com.xvp.bmkg.xyz&path=%2Fvl%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(ID)")'><i class="fa fa-clipboard"></i>Copy</button></p>    
            <p class="config">» support.zoom.us
                <button class="button2" onclick='copyToClipboard("vless://FREE-CF-BMGK-XYZ@support.zoom.us.:443?encryption=none&security=tls&sni=support.zoom.us.xvp.bmkg.xyz&fp=randomized&type=ws&host=support.zoom.us.xvp.bmkg.xyz&path=%2Fvl%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(ID)")'><i class="fa fa-clipboard"></i>Copy</button></p>   
            <p class="config">» blog.webex.com
                <button class="button2" onclick='copyToClipboard("vless://FREE-CF-BMGK-XYZ@blog.webex.com:443?encryption=none&security=tls&sni=blog.webex.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=blog.webex.com.xvp.bmkg.xyz&path=%2Fvl%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(ID)")'><i class="fa fa-clipboard"></i>Copy</button></p>   
            <p class="config">» investors.spotify.com
                <button class="button2" onclick='copyToClipboard("vless://FREE-CF-BMGK-XYZ@investors.spotify.com.:443?encryption=none&security=tls&sni=investors.spotify.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=investors.spotify.com.xvp.bmkg.xyz&path=%2Fvl%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(ID)")'><i class="fa fa-clipboard"></i>Copy</button></p>   
            <p class="config">» cache.netflix.com
                <button class="button2" onclick='copyToClipboard("vless://FREE-CF-BMGK-XYZ@cache.netflix.com:443?encryption=none&security=tls&sni=cache.netflix.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=cache.netflix.com.xvp.bmkg.xyz&path=%2Fvl%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(ID)")'><i class="fa fa-clipboard"></i>Copy</button></p>  
            <p class="config">» zaintest.vuclip.com
                <button class="button2" onclick='copyToClipboard("vless://FREE-CF-BMGK-XYZ@zaintest.vuclip.com:443?encryption=none&security=tls&sni=zaintest.vuclip.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=zaintest.vuclip.com.xvp.bmkg.xyz&path=%2Fvl%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(ID)")'><i class="fa fa-clipboard"></i>Copy</button></p> 
            <p class="config">» io.ruangguru.com
                <button class="button2" onclick='copyToClipboard("vless://FREE-CF-BMGK-XYZ@io.ruangguru.com:443?encryption=none&security=tls&sni=io.ruangguru.com.xvp.bmkg.xyz&fp=randomized&type=ws&host=io.ruangguru.com.xvp.bmkg.xyz&path=%2Fvl%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(ID)")'><i class="fa fa-clipboard"></i>Copy</button></p> 
               
              
            <hr />
            <div class="config-block">
                <h3>VLESS NTLS:</h3>
                <p class="config">vless://FREE-CF-BMGK-XYZ@xvp.bmkg.xyz:80?path=%2Fvl%3D203.194.112.119%3A8443&security=none&encryption=none&host=xvp.bmkg.xyz&fp=randomized&type=ws&sni=xvp.bmkg.xyz#CV.+Rumahweb+Indonesia+(ID)</p>
                <button class="button2" onclick='copyToClipboard("vless://FREE-CF-BMGK-XYZ@xvp.bmkg.xyz:80?path=%2Fvl%3D203.194.112.119%3A8443&security=none&encryption=none&host=xvp.bmkg.xyz&fp=randomized&type=ws&sni=xvp.bmkg.xyz#CV.+Rumahweb+Indonesia+(ID)")'><i class="fa fa-clipboard"></i>Copy</button>
            </div>
            
            <hr />
            <div class="config-block">
                <h3>TROJAN TLS:</h3>
          <p class="config">trojan://FREE-CF-BMGK-XYZ@xvp.bmkg.xyz:443?security=tls&type=ws&host=xvp.bmkg.xyz&sni=xvp.bmkg.xyz&fp=random&path=%2Ftr%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(Indonesia)</p>
                <button class="button2" onclick='copyToClipboard("trojan://FREE-CF-BMGK-XYZ@xvp.bmkg.xyz:443?security=tls&type=ws&host=xvp.bmkg.xyz&sni=xvp.bmkg.xyz&fp=random&path=%2Ftr%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(Indonesia)")'><i class="fa fa-clipboard"></i>Copy</button>
               </div> 
            <p class="config">» ava.game.naver.com
                <button class="button2" onclick='copyToClipboard("trojan://FREE-CF-BMGK-XYZ@ava.game.naver.com:443?security=tls&type=ws&host=ava.game.naver.com.xvp.bmkg.xyz&sni=ava.game.naver.com.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(Indonesia)")'><i class="fa fa-clipboard"></i>Copy</button></p>
            <p class="config">» graph.instagram.com
                <button class="button2" onclick='copyToClipboard("trojan://FREE-CF-BMGK-XYZ@graph.instagram.com:443?security=tls&type=ws&host=graph.instagram.com.xvp.bmkg.xyz&sni=graph.instagram.com.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(Indonesia)")'><i class="fa fa-clipboard"></i>Copy</button></p>
            <p class="config">» quiz.int.vidio.com
                <button class="button2" onclick='copyToClipboard("trojan://FREE-CF-BMGK-XYZ@quiz.int.vidio.com:443?security=tls&type=ws&host=quiz.int.vidio.com.xvp.bmkg.xyz&sni=quiz.int.vidio.com.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(Indonesia)")'><i class="fa fa-clipboard"></i>Copy</button></p>
            <p class="config">» live.iflix.com
                <button class="button2" onclick='copyToClipboard("trojan://FREE-CF-BMGK-XYZ@live.iflix.com:443?security=tls&type=ws&host=live.iflix.com.xvp.bmkg.xyz&sni=live.iflix.com.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(Indonesia)")'><i class="fa fa-clipboard"></i>Copy</button></p>    
            <p class="config">» support.zoom.us
                <button class="button2" onclick='copyToClipboard("trojan://FREE-CF-BMGK-XYZ@support.zoom.us:443?security=tls&type=ws&host=support.zoom.us.xvp.bmkg.xyz&sni=support.zoom.us.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(Indonesia)")'><i class="fa fa-clipboard"></i>Copy</button></p>   
            <p class="config">» blog.webex.com
                <button class="button2" onclick='copyToClipboard("trojan://FREE-CF-BMGK-XYZ@blog.webex.com:443?security=tls&type=ws&host=blog.webex.com.xvp.bmkg.xyz&sni=blog.webex.com.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(Indonesia)")'><i class="fa fa-clipboard"></i>Copy</button></p>   
            <p class="config">» investors.spotify.com
                <button class="button2" onclick='copyToClipboard("trojan://FREE-CF-BMGK-XYZ@investors.spotify.com:443?security=tls&type=ws&host=investors.spotify.com.xvp.bmkg.xyz&sni=investors.spotify.com.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(Indonesia)")'><i class="fa fa-clipboard"></i>Copy</button></p>   
            <p class="config">» cache.netflix.com
                <button class="button2" onclick='copyToClipboard("trojan://FREE-CF-BMGK-XYZ@cache.netflix.com:443?security=tls&type=ws&host=cache.netflix.com.xvp.bmkg.xyz&sni=cache.netflix.com.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(Indonesia)")'><i class="fa fa-clipboard"></i>Copy</button></p>  
            <p class="config">» zaintest.vuclip.com
                <button class="button2" onclick='copyToClipboard("trojan://FREE-CF-BMGK-XYZ@zaintest.vuclip.com:443?security=tls&type=ws&host=zaintest.vuclip.com.xvp.bmkg.xyz&sni=zaintest.vuclip.com.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(Indonesia)")'><i class="fa fa-clipboard"></i>Copy</button></p> 
            <p class="config">» io.ruangguru.com
                <button class="button2" onclick='copyToClipboard("trojan://FREE-CF-BMGK-XYZ@io.ruangguru.com:443?security=tls&type=ws&host=io.ruangguru.com.xvp.bmkg.xyz&sni=io.ruangguru.com.xvp.bmkg.xyz&fp=random&path=%2Ftr%3D203.194.112.119%3A8443#CV.+Rumahweb+Indonesia+(Indonesia)")'><i class="fa fa-clipboard"></i>Copy</button></p> 
               
        
    
</hr>
                            
                        <a href="#defaultOpen">BACK TO SEARCH</a> 


                    
                      
                      
                   </div>
                 </div>
                </div>
              </div>
            </div>
            <!-- Sale & Revenue End -->


            <!-- Sales Chart Start -->


 


            <!-- Footer Start -->
          <div class="container-fluid pt-4 px-4">                
            <div class="bg-secondary rounded-top p-4">
                    <div class="row">
                        <div class="col-12 col-sm-6 text-center text-sm-start">
                            &copy; <a href="#">BMKG.XYZ</a>, All Right Reserved. 
                        </div>
                        <div class="col-12 col-sm-6 text-center text-sm-end">
                            
                            Designed By <a href="https://t.me/seaker877/">SEAKER</a>
                            <br>Distributed By: <a href="https://wa.me/6281335135082" target="_blank">Theme-X</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer End -->
    </div>
        <!-- Content End -->
 
        <!-- Back to Top -->
        <a href="#defaultOpen" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
                         </div>

    <!-- JavaScript Libraries -->


</body>
</html>`;
    return htmlConfigs;
  } catch (error) {
    return `An error occurred while generating the VLESS configurations. ${error}`;
  }
}
function generateUUIDv4() {
  const randomValues = crypto.getRandomValues(new Uint8Array(16));
  randomValues[6] = randomValues[6] & 15 | 64;
  randomValues[8] = randomValues[8] & 63 | 128;
  return [
    randomValues[0].toString(16).padStart(2, "0"),
    randomValues[1].toString(16).padStart(2, "0"),
    randomValues[2].toString(16).padStart(2, "0"),
    randomValues[3].toString(16).padStart(2, "0"),
    randomValues[4].toString(16).padStart(2, "0"),
    randomValues[5].toString(16).padStart(2, "0"),
    randomValues[6].toString(16).padStart(2, "0"),
    randomValues[7].toString(16).padStart(2, "0"),
    randomValues[8].toString(16).padStart(2, "0"),
    randomValues[9].toString(16).padStart(2, "0"),
    randomValues[10].toString(16).padStart(2, "0"),
    randomValues[11].toString(16).padStart(2, "0"),
    randomValues[12].toString(16).padStart(2, "0"),
    randomValues[13].toString(16).padStart(2, "0"),
    randomValues[14].toString(16).padStart(2, "0"),
    randomValues[15].toString(16).padStart(2, "0")
  ].join("").replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, "$1-$2-$3-$4-$5");
}
async function vlessOverWSHandler(request) {
  const webSocketPair = new WebSocketPair();
  const [client, webSocket] = Object.values(webSocketPair);
  webSocket.accept();
  let address = "";
  let portWithRandomLog = "";
  const log = (info, event) => {
    console.log(`[${address}:${portWithRandomLog}] ${info}`, event || "");
  };
  const earlyDataHeader = request.headers.get("sec-websocket-protocol") || "";
  const readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log);
  let remoteSocketWapper = {
    value: null
  };
  let udpStreamWrite = null;
  let isDns = false;
  readableWebSocketStream.pipeTo(new WritableStream({
    async write(chunk, controller) {
      if (isDns && udpStreamWrite) {
        return udpStreamWrite(chunk);
      }
      if (remoteSocketWapper.value) {
        const writer = remoteSocketWapper.value.writable.getWriter();
        await writer.write(chunk);
        writer.releaseLock();
        return;
      }
      const {
        hasError,
        message,
        portRemote = 443,
        addressRemote = "",
        rawDataIndex,
        vlessVersion = new Uint8Array([0, 0]),
        isUDP
      } = processVlessHeader(chunk);
      address = addressRemote;
      portWithRandomLog = `${portRemote}--${Math.random()} ${isUDP ? "udp " : "tcp "} `;
      if (hasError) {
        throw new Error(message);
        return;
      }
      if (isUDP) {
        if (portRemote === 53) {
          isDns = true;
        } else {
          throw new Error("UDP proxy only enable for DNS which is port 53");
          return;
        }
      }
      const vlessResponseHeader = new Uint8Array([vlessVersion[0], 0]);
      const rawClientData = chunk.slice(rawDataIndex);
      if (isDns) {
        const { write } = await handleUDPOutBound(webSocket, vlessResponseHeader, log);
        udpStreamWrite = write;
        udpStreamWrite(rawClientData);
        return;
      }
      handleTCPOutBound(remoteSocketWapper, addressRemote, portRemote, rawClientData, webSocket, vlessResponseHeader, log);
    },
    close() {
      log(`readableWebSocketStream is close`);
    },
    abort(reason) {
      log(`readableWebSocketStream is abort`, JSON.stringify(reason));
    }
  })).catch((err) => {
    log("readableWebSocketStream pipeTo error", err);
  });
  return new Response(null, {
    status: 101,
    webSocket: client
  });
}
async function handleTCPOutBound(remoteSocket, addressRemote, portRemote, rawClientData, webSocket, vlessResponseHeader, log) {
  async function connectAndWrite(address, port) {
    const tcpSocket2 = connect({
      hostname: address,
      port
    });
    remoteSocket.value = tcpSocket2;
    log(`connected to ${address}:${port}`);
    const writer = tcpSocket2.writable.getWriter();
    await writer.write(rawClientData);
    writer.releaseLock();
    return tcpSocket2;
  }
  async function retry() {
    const tcpSocket2 = await connectAndWrite(proxyIP || addressRemote, proxyPort || portRemote);
    tcpSocket2.closed.catch((error) => {
      console.log("retry tcpSocket closed error", error);
    }).finally(() => {
      safeCloseWebSocket(webSocket);
    });
    remoteSocketToWS(tcpSocket2, webSocket, vlessResponseHeader, null, log);
  }
  const tcpSocket = await connectAndWrite(addressRemote, portRemote);
  remoteSocketToWS(tcpSocket, webSocket, vlessResponseHeader, retry, log);
}
function makeReadableWebSocketStream(webSocketServer, earlyDataHeader, log) {
  let readableStreamCancel = false;
  const stream = new ReadableStream({
    start(controller) {
      webSocketServer.addEventListener("message", (event) => {
        if (readableStreamCancel) {
          return;
        }
        const message = event.data;
        controller.enqueue(message);
      });
      webSocketServer.addEventListener(
        "close",
        () => {
          safeCloseWebSocket(webSocketServer);
          if (readableStreamCancel) {
            return;
          }
          controller.close();
        }
      );
      webSocketServer.addEventListener(
        "error",
        (err) => {
          log("webSocketServer has error");
          controller.error(err);
        }
      );
      const { earlyData, error } = base64ToArrayBuffer(earlyDataHeader);
      if (error) {
        controller.error(error);
      } else if (earlyData) {
        controller.enqueue(earlyData);
      }
    },
    pull(controller) {
    },
    cancel(reason) {
      if (readableStreamCancel) {
        return;
      }
      log(`ReadableStream was canceled, due to ${reason}`);
      readableStreamCancel = true;
      safeCloseWebSocket(webSocketServer);
    }
  });
  return stream;
}
function processVlessHeader(vlessBuffer) {
  if (vlessBuffer.byteLength < 24) {
    return {
      hasError: true,
      message: "invalid data"
    };
  }
  const version = new Uint8Array(vlessBuffer.slice(0, 1));
  let isValidUser = true;
  let isUDP = false;
  if (!isValidUser) {
    return {
      hasError: true,
      message: "invalid user"
    };
  }
  const optLength = new Uint8Array(vlessBuffer.slice(17, 18))[0];
  const command = new Uint8Array(
    vlessBuffer.slice(18 + optLength, 18 + optLength + 1)
  )[0];
  if (command === 1) {
  } else if (command === 2) {
    isUDP = true;
  } else {
    return {
      hasError: true,
      message: `command ${command} is not support, command 01-tcp,02-udp,03-mux`
    };
  }
  const portIndex = 18 + optLength + 1;
  const portBuffer = vlessBuffer.slice(portIndex, portIndex + 2);
  const portRemote = new DataView(portBuffer).getUint16(0);
  let addressIndex = portIndex + 2;
  const addressBuffer = new Uint8Array(
    vlessBuffer.slice(addressIndex, addressIndex + 1)
  );
  const addressType = addressBuffer[0];
  let addressLength = 0;
  let addressValueIndex = addressIndex + 1;
  let addressValue = "";
  switch (addressType) {
    case 1:
      addressLength = 4;
      addressValue = new Uint8Array(
        vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
      ).join(".");
      break;
    case 2:
      addressLength = new Uint8Array(
        vlessBuffer.slice(addressValueIndex, addressValueIndex + 1)
      )[0];
      addressValueIndex += 1;
      addressValue = new TextDecoder().decode(
        vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
      );
      break;
    case 3:
      addressLength = 16;
      const dataView = new DataView(
        vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
      );
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        ipv6.push(dataView.getUint16(i * 2).toString(16));
      }
      addressValue = ipv6.join(":");
      break;
    default:
      return {
        hasError: true,
        message: `invild  addressType is ${addressType}`
      };
  }
  if (!addressValue) {
    return {
      hasError: true,
      message: `addressValue is empty, addressType is ${addressType}`
    };
  }
  return {
    hasError: false,
    addressRemote: addressValue,
    addressType,
    portRemote,
    rawDataIndex: addressValueIndex + addressLength,
    vlessVersion: version,
    isUDP
  };
}
async function remoteSocketToWS(remoteSocket, webSocket, vlessResponseHeader, retry, log) {
  let remoteChunkCount = 0;
  let chunks = [];
  let vlessHeader = vlessResponseHeader;
  let hasIncomingData = false;
  await remoteSocket.readable.pipeTo(
    new WritableStream({
      start() {
      },
      async write(chunk, controller) {
        hasIncomingData = true;
        if (webSocket.readyState !== WS_READY_STATE_OPEN) {
          controller.error(
            "webSocket.readyState is not open, maybe close"
          );
        }
        if (vlessHeader) {
          webSocket.send(await new Blob([vlessHeader, chunk]).arrayBuffer());
          vlessHeader = null;
        } else {
          webSocket.send(chunk);
        }
      },
      close() {
        log(`remoteConnection!.readable is close with hasIncomingData is ${hasIncomingData}`);
      },
      abort(reason) {
        console.error(`remoteConnection!.readable abort`, reason);
      }
    })
  ).catch((error) => {
    console.error(
      `remoteSocketToWS has exception `,
      error.stack || error
    );
    safeCloseWebSocket(webSocket);
  });
  if (hasIncomingData === false && retry) {
    log(`retry`);
    retry();
  }
}
function base64ToArrayBuffer(base64Str) {
  if (!base64Str) {
    return { error: null };
  }
  try {
    base64Str = base64Str.replace(/-/g, "+").replace(/_/g, "/");
    const decode = atob(base64Str);
    const arryBuffer = Uint8Array.from(decode, (c) => c.charCodeAt(0));
    return { earlyData: arryBuffer.buffer, error: null };
  } catch (error) {
    return { error };
  }
}
var WS_READY_STATE_OPEN = 1;
var WS_READY_STATE_CLOSING = 2;
function safeCloseWebSocket(socket) {
  try {
    if (socket.readyState === WS_READY_STATE_OPEN || socket.readyState === WS_READY_STATE_CLOSING) {
      socket.close();
    }
  } catch (error) {
    console.error("safeCloseWebSocket error", error);
  }
}
async function handleUDPOutBound(webSocket, vlessResponseHeader, log) {
  let isVlessHeaderSent = false;
  const transformStream = new TransformStream({
    start(controller) {
    },
    transform(chunk, controller) {
      for (let index = 0; index < chunk.byteLength; ) {
        const lengthBuffer = chunk.slice(index, index + 2);
        const udpPakcetLength = new DataView(lengthBuffer).getUint16(0);
        const udpData = new Uint8Array(
          chunk.slice(index + 2, index + 2 + udpPakcetLength)
        );
        index = index + 2 + udpPakcetLength;
        controller.enqueue(udpData);
      }
    },
    flush(controller) {
    }
  });
  transformStream.readable.pipeTo(new WritableStream({
    async write(chunk) {
      const resp = await fetch(
        "https://1.1.1.1/dns-query",
        {
          method: "POST",
          headers: {
            "content-type": "application/dns-message"
          },
          body: chunk
        }
      );
      const dnsQueryResult = await resp.arrayBuffer();
      const udpSize = dnsQueryResult.byteLength;
      const udpSizeBuffer = new Uint8Array([udpSize >> 8 & 255, udpSize & 255]);
      if (webSocket.readyState === WS_READY_STATE_OPEN) {
        log(`doh success and dns message length is ${udpSize}`);
        if (isVlessHeaderSent) {
          webSocket.send(await new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer());
        } else {
          webSocket.send(await new Blob([vlessResponseHeader, udpSizeBuffer, dnsQueryResult]).arrayBuffer());
          isVlessHeaderSent = true;
        }
      }
    }
  })).catch((error) => {
    log("dns udp has error" + error);
  });
  const writer = transformStream.writable.getWriter();
  return {
    write(chunk) {
      writer.write(chunk);
    }
  };
}
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
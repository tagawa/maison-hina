---
title: 設備
json_ld:
  "@context": "https://schema.org"
  "@type": "Article"
  headline: "観察設備について"
  url: "https://maison-hina.com/ja/setup"
  inLanguage: "ja"
---

# 観察設備について

## 巣箱

巣箱は手作りです。入口の穴は直径28mmで、[シジュウカラ](https://ja.wikipedia.org/wiki/%E3%82%B7%E3%82%B8%E3%83%A5%E3%82%A6%E3%82%AB%E3%83%A9)に適したサイズです（スズメには小さすぎます）。カーポートの屋根の下に設置しています。

毎年の巣立ちが終わった後、巣箱の中身を取り出し、熱湯で消毒しています。

## カメラ

OV5647センサー搭載の赤外線カメラモジュールを使用しています。赤外線フィルターなしのため、暗い巣箱の中でも撮影できます。最大解像度は2592×1944ピクセルです。

カメラのレンズの両側に赤外線LEDが1つずつ取り付けられています。各LEDには明るさ調整用のネジがあり、手動で調整します。赤外線LEDはわずかに赤く光りますが、鳥には見えないため巣作りの妨げにはなりません。

カメラはリボンケーブルでRaspberry Piに接続しています。

## Raspberry Pi

[Raspberry Pi 4 Model B](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/)（8GB RAM、ARM 64bit）を使用しています。

OSは[Raspberry Pi OS](https://www.raspberrypi.com/software/operating-systems/) Lite「Trixie」（2025年12月リリース、Debian 13ベース）です。デスクトップ環境なしの軽量版を使っています。

## ソフトウェア

カメラの映像取得と配信にはGStreamer（`gst-launch-1.0`と`libcamerasrc`）を使用しています。映像はRTMPで[MediaMTX](https://github.com/bluenviron/mediamtx)に送り、RTSPストリームとしてローカルネットワーク内で視聴できるようにしています。この構成にしたのは、ローカルネットワークでの視聴とYouTubeへの同時配信を比較的低い負荷で実現するためです。温度を低く保つことも重要なポイントです！

赤外線LEDは最低の明るさでも映像が紫がかるため、カラーモードの彩度を少し下げています。

30秒ごとにRTSPストリームからスナップショットを撮影し、あとからImageMagickで画像を比較して、鳥の出入りなど変化のあったコマだけを抽出しています。

Motionなどの動体検知ソフトも検討しましたが、現在のOS（Trixie）との相性が悪いため使用していません。

## 配信

映像はWi-Fi経由でローカルネットワーク内に配信しており、自宅から視聴しています。外部への配信は行っていません。

## 電源・ネットワーク

Raspberry Piにはカーポートまで延長した電源ケーブルで給電しています。ネットワークはWi-Fiで接続しています。

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

巣箱は手作りです。入口の穴の直径は28mmで、[シジュウカラ](https://ja.wikipedia.org/wiki/%E3%82%B7%E3%82%B8%E3%83%A5%E3%82%A6%E3%82%AB%E3%83%A9){:target="_blank" rel="noopener"}にちょうどよく、スズメには小さすぎるとされています（とはいえ、2025年にはスズメに侵入されましたが…）。カーポートの屋根の下に設置しているため、巣箱の完全な防水性を心配する必要はありません。

毎年の巣立ちが終わった後、巣箱の中身を取り出し、熱湯で消毒しています。

<figure>
  <img src="/assets/images/birdbox_v1_exterior.jpg" alt="自作の巣箱。" width="480" height="640" loading="lazy">
  <figcaption>初代の巣箱</figcaption>
</figure>

## カメラ

OV5647センサー搭載の赤外線カメラモジュールを使用しています。赤外線フィルターなしのため、暗い巣箱の中でも撮影できます。最大解像度は2592×1944ピクセルです。

カメラのレンズの片側に赤外線LEDが1つ取り付けられています。LED用の小さな基板がカメラ基板にネジ止めされています。LEDの横にある小さなネジで明るさを手動で調整します。赤外線LEDはわずかに赤く光りますが、鳥には見えないため巣作りの妨げにはなりません。カメラの反対側には小型のUSBマイク（ラベリアマイク）を取り付けています。鳥たちはこれらを気にする様子はなく、時々つついてボスは自分だとアピールしています！

<figure>
  <img src="/assets/images/birdbox_v2_interior.jpg" alt="現在の巣箱の内部。カメラモジュール、赤外線LED、USBマイク" width="480" height="640" loading="lazy">
  <figcaption>現在の巣箱の内部。赤外線LEDの片方をUSBマイクに交換</figcaption>
</figure>

## Raspberry Pi

[Raspberry Pi 4 Model B](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/){:target="_blank" rel="noopener"}（8GB RAM、ARM 64bit）を使用しています。

OSは[Raspberry Pi OS](https://www.raspberrypi.com/software/operating-systems/){:target="_blank" rel="noopener"} Lite「Trixie」（2025年12月リリース、Debian 13ベース）です。デスクトップ環境なしの軽量版を使っています。

## ソフトウェア

カメラの映像取得と配信にはGStreamer（`gst-launch-1.0`と`libcamerasrc`）を使用しています。映像はRTMPで[MediaMTX](https://github.com/bluenviron/mediamtx){:target="_blank" rel="noopener"}に送り、RTSPストリームとしてローカルネットワーク内で視聴できるようにしています。この構成にしたのは、ローカルネットワークでの視聴とYouTubeへの同時配信を比較的低い負荷で実現するためです。温度を低く保つことも重要なポイントです！

赤外線LEDは最低の明るさでも映像が紫がかるため、カラーモードの彩度を少し下げています。

30秒ごとにRTSPストリームからスナップショットを撮影し、あとからImageMagickで画像を比較して、鳥の出入りなど変化のあったコマだけを抽出しています。

Motionなどの動体検知ソフトも検討しましたが、現在のOS（Trixie）との相性が悪いため使用していません。

## 配信

映像はWi-Fi経由でローカルネットワーク内に配信しており、自宅から視聴しています。

YouTubeには映像のみを配信しています。近隣のプライバシー保護のため、音声は含めていません。

## 音声

現在の巣箱では、2つあった赤外線LEDの片方をUSBマイクに交換しています。音声はローカルネットワークのストリームでのみ視聴可能です。近隣のプライバシー保護のため、YouTubeには音声を配信していません。

## 電源・ネットワーク

Raspberry Piにはカーポートまで延長した電源ケーブルで給電しています。ネットワークはWi-Fiで接続しています。

## 以前のバージョン

初代の巣箱では[Raspberry Pi 3 Model B+](https://www.raspberrypi.com/products/raspberry-pi-3-model-b-plus/){:target="_blank" rel="noopener"}を使用していました。構成はよりシンプルで、映像のみ（音声なし）、ローカルネットワーク内でのみ視聴可能でした（YouTubeへの配信なし）。

<figure>
  <img src="/assets/images/birdbox_v1_interior.jpg" alt="初代の巣箱の内部。Raspberry Pi 3 B+のカメラモジュールと赤外線LED" width="480" height="640" loading="lazy">
  <figcaption>初代の巣箱の内部。Raspberry Pi 3 B+のカメラモジュールと赤外線LED</figcaption>
</figure>

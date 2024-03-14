function getGoogleDriveDownloadUrl(assetId: string) {
  return `https://drive.google.com/uc?id=${assetId}&export=download`;
}

type MusicAssetType = {
  type: "album" | "single" | "album_song";
  name: string;
  mp3: string;
  wav: string;
  wav24bit: string;
  wavCensored?: string;
  wav24bitCensored?: string;
  mp3Censored?: string;
  albumCover?: string;
};

type GetAssetsUrlsOutputType = {
  music: Record<string, MusicAssetType>;
  photos: Record<string, string>;
};

export function getAssetsUrls(): GetAssetsUrlsOutputType {
  return {
    music: {
      firstShift: {
        type: "album",
        name: "First Shift EP",
        mp3: getGoogleDriveDownloadUrl("1OdCywwvUrRIURhW_tEu1SEmL9ZjmdRRw"),
        wav: getGoogleDriveDownloadUrl("1OgTUevdSkPELu67ER78VqjSdl0goCyIs"),
        wav24bit: getGoogleDriveDownloadUrl(
          "1Oi8__lhAmPx7V8tpeS15zKXkxG5X0u7n"
        ),
        albumCover: getGoogleDriveDownloadUrl(
          "1Ok-prri1JzDZYLLyYuud0zOeOPkm9cea"
        ),
      },
      impossible: {
        type: "single",
        name: "Impossible",
        wav: getGoogleDriveDownloadUrl("1O4lsy9Ya-uNptboouTtMhq7Q5So-sk_9"),
        wav24bit: getGoogleDriveDownloadUrl(
          "1NxOpMEWp12S6uE55Xw9A19mIZOLG2DHo"
        ),
        mp3: getGoogleDriveDownloadUrl("1OIJXh__67N713edXUH15qZSc0GDf9MsT"),
        albumCover: getGoogleDriveDownloadUrl(
          "10OKisJe6KKDHwSKaS0QklPcKwnn9S8xu"
        ),
      },
      weight: {
        type: "album_song",
        name: "Weight",
        wav: getGoogleDriveDownloadUrl("1OIbHAn4FOZb_VNZqab DV6zHIcBWH5lhH"),
        wav24bit: getGoogleDriveDownloadUrl(
          "1NuHFIJ6uIqHqENuueHVphFc0g1q8T3qH"
        ),
        mp3: getGoogleDriveDownloadUrl("1OLEIvCRegZpqtMxZ0tiRFATPirnTGEN9"),
      },
      occupation: {
        type: "album_song",
        name: "Occupation",
        wav: getGoogleDriveDownloadUrl("1OPLSXpcQyKZploWWUxzOUO6SzfeFWkdp"),
        wav24bit: getGoogleDriveDownloadUrl(
          "1NmZi6MOfoRq7ZyzY-oYG6b4gDD1l0lYw"
        ),
        mp3: getGoogleDriveDownloadUrl("1O9EHhov-FBcAu4xVtvvJTzDYRJO-Gtj2"),
        wavCensored: getGoogleDriveDownloadUrl(
          "1O2Ghqrsi9K3ehMwkIjaEEKMGLXKZ77tT"
        ),
        wav24bitCensored: getGoogleDriveDownloadUrl(
          "1NtCxhhNj40SSIqkTe8ArYNOCRORKqUVK"
        ),
        mp3Censored: getGoogleDriveDownloadUrl(
          "1OEhqo5jo__HFxgbeDutgi631TD_xlyfv"
        ),
      },
      distance: {
        type: "album_song",
        name: "Distance",
        wav: getGoogleDriveDownloadUrl("1OINQ7iPSNQFIuCQ-u983nC8QzlEtsai0"),
        wav24bit: getGoogleDriveDownloadUrl(
          "1Ns2q2Jy85tizoK5nWPkkZHvICZEDtN9Z"
        ),
        mp3: getGoogleDriveDownloadUrl("1ORJUJTCQP8xzSCr44t-1o6V0O5KhsN7L"),
      },
      fire: {
        type: "single",
        name: "Fire",
        wav: getGoogleDriveDownloadUrl("1D2EhWxeJblZ3j6sdabLB3KWURQO2eOKu"),
        wav24bit: getGoogleDriveDownloadUrl(
          "1XDG0JAJe0siQjBipkBdocBa2zdeCFlA6"
        ),
        mp3: getGoogleDriveDownloadUrl("1lsz3nw6fvpzegsffofZvZFLoYYMBZuPM"),
        albumCover: getGoogleDriveDownloadUrl(
          "1j0-IsfOKgUJjhxqNcWU2Eo-NygOVR3tX"
        ),
      },
      people: {
        type: "single",
        name: "People",
        wav: getGoogleDriveDownloadUrl("141OZvzluB8wwLtOEIet9KFex9dJZ4lsf"),
        wav24bit: getGoogleDriveDownloadUrl(
          "1p7CpNH2td6rTgg_1B1EtSYZAXrk-TOwA"
        ),
        mp3: getGoogleDriveDownloadUrl("1Vu9GfKsle2OQcYXw9Us5Jkei2m9idbBy"),
        albumCover: getGoogleDriveDownloadUrl(
          "1Ko_zOW3jO-lewyNmdXJMhHKeJAy8Dd7z"
        ),
      },
    },
    photos: {
      pressPack: getGoogleDriveDownloadUrl("1NWt-Q-KX2WeCFTPSdW8ST3_GZF7gXL7C"),
    },
  };
}

export function getMusicAssetsList() {
  return Object.values(getAssetsUrls().music);
}

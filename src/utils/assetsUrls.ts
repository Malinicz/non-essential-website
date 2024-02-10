function getGoogleDriveDownloadUrl(assetId: string) {
  return `https://drive.google.com/uc?id=${assetId}&export=download`;
}

export function getAssetsUrls() {
  return {
    music: {
      people: {
        name: "people",
        wav: getGoogleDriveDownloadUrl("141OZvzluB8wwLtOEIet9KFex9dJZ4lsf"),
        wav24bit: getGoogleDriveDownloadUrl(
          "1p7CpNH2td6rTgg_1B1EtSYZAXrk-TOwA"
        ),
        mp3: getGoogleDriveDownloadUrl("1Vu9GfKsle2OQcYXw9Us5Jkei2m9idbBy"),
        albumCover: getGoogleDriveDownloadUrl(
          "1Ko_zOW3jO-lewyNmdXJMhHKeJAy8Dd7z"
        ),
      },
      fire: {
        name: "fire",
        wav: getGoogleDriveDownloadUrl("1D2EhWxeJblZ3j6sdabLB3KWURQO2eOKu"),
        wav24bit: getGoogleDriveDownloadUrl(
          "1XDG0JAJe0siQjBipkBdocBa2zdeCFlA6"
        ),
        mp3: getGoogleDriveDownloadUrl("1lsz3nw6fvpzegsffofZvZFLoYYMBZuPM"),
        albumCover: getGoogleDriveDownloadUrl(
          "1j0-IsfOKgUJjhxqNcWU2Eo-NygOVR3tX"
        ),
      },
      impossible: {
        name: "impossible",
        wav: getGoogleDriveDownloadUrl("1-9EKrEWvfSnpTA7FRL-_wsu9POMwq6Ey"),
        wav24bit: getGoogleDriveDownloadUrl(
          "1-3S4Kk_oh0F3kxU4lKt2Y94GBYMnucDU"
        ),
        mp3: getGoogleDriveDownloadUrl("1-BRxc5Qwi82tnTt7xIV6vloUAlOCsFBV"),
        albumCover: getGoogleDriveDownloadUrl(
          "10OKisJe6KKDHwSKaS0QklPcKwnn9S8xu"
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

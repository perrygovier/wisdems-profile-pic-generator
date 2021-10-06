---
title:
  text: '#OneYearToWin'
  image: '/images/oneyeartowin/logo.png'
  wisdems: '/images/buildbackbetter/wisdems-blue.png'
overlays: 
  - ratio: 1
    bulma: is-square
    column: is-one-quarter
    avatar: '/images/placeholder-square.png'
    urls:
      sm: '/images/oneyeartowin/bar-500.png'
      md: '/images/oneyeartowin/bar-750.png'
      lg: '/images/oneyeartowin/bar-1000.png'
  - ratio: .563
    bulma: is-16by9
    column: is-one-half
    avatar: '/images/placeholder-16x9.png'
    urls:
      sm: '/images/oneyeartowin/filter-500.png'
      md: '/images/oneyeartowin/filter-750.png'
      lg: '/images/oneyeartowin/filter-1000.png'
  - ratio: 1
    bulma: is-square
    column: is-one-quarter
    avatar: '/images/placeholder-square-zoom.png'
    urls:
      sm: '/images/oneyeartowin/flair-500.png'
      md: '/images/oneyeartowin/flair-750.png'
      lg: '/images/oneyeartowin/flair-1000.png'
  # - ratio: 1
  #   bulma: is-square
  #   column: is-one-quarter
  #   avatar: '/images/buildbackbetter/placeholder-square.png'
  #   urls:
  #     sm: '/images/buildbackbetter/filter-square-thin-500.png'
  #     md: '/images/buildbackbetter/filter-square-thin-750.png'
  #     lg: '/images/buildbackbetter/filter-square-thin-1000.png'
  # - ratio: .5
  #   bulma: is-2by1
  #   column: is-one-half
  #   avatar: '/images/buildbackbetter/placeholder-wide.png'
  #   urls:
  #     sm: '/images/buildbackbetter/filter-500.png'
  #     md: '/images/buildbackbetter/filter-750.png'
  #     lg: '/images/buildbackbetter/filter-1000.png'
  # - ratio: 1
  #   bulma: is-square
  #   column: is-one-quarter
  #   avatar: '/images/buildbackbetter/placeholder-square-zoom.png'
  #   urls:
  #     sm: '/images/buildbackbetter/filter-square-bold-500.png'
  #     md: '/images/buildbackbetter/filter-square-bold-750.png'
  #     lg: '/images/buildbackbetter/filter-square-bold-1000.png'
  # - ratio: 1
  #   bulma: is-square
  #   column: is-one-fifth
  #   avatar: '/images/buildbackbetter/placeholder-square.png'
  #   urls:
  #     sm: '/images/buildbackbetter/BidenHarris-Frames-01.png'
  #     md: '/images/buildbackbetter/BidenHarris-Frames-01.png'
  #     lg: '/images/buildbackbetter/BidenHarris-Frames-01.png'
  # - ratio: 1
  #   bulma: is-square
  #   column: is-one-fifth
  #   avatar: '/images/buildbackbetter/placeholder-square.png'
  #   urls:
  #     sm: '/images/buildbackbetter/BidenHarris-Frames-02.png'
  #     md: '/images/buildbackbetter/BidenHarris-Frames-02.png'
  #     lg: '/images/buildbackbetter/BidenHarris-Frames-02.png'
  # - ratio: 1
  #   bulma: is-square
  #   column: is-one-fifth
  #   avatar: '/images/buildbackbetter/placeholder-square.png'
  #   urls:
  #     sm: '/images/buildbackbetter/BidenHarris-Frames-03.png'
  #     md: '/images/buildbackbetter/BidenHarris-Frames-03.png'
  #     lg: '/images/buildbackbetter/BidenHarris-Frames-03.png'
  # - ratio: 1
  #   bulma: is-square
  #   column: is-one-fifth
  #   avatar: '/images/buildbackbetter/placeholder-square.png'
  #   urls:
  #     sm: '/images/buildbackbetter/BidenHarris-Frames-04.png'
  #     md: '/images/buildbackbetter/BidenHarris-Frames-04.png'
  #     lg: '/images/buildbackbetter/BidenHarris-Frames-04.png'
  # - ratio: 1
  #   bulma: is-square
  #   column: is-one-fifth
  #   avatar: '/images/buildbackbetter/placeholder-square.png'
  #   urls:
  #     sm: '/images/buildbackbetter/BidenHarris-Frames-05.png'
  #     md: '/images/buildbackbetter/BidenHarris-Frames-05.png'
  #     lg: '/images/buildbackbetter/BidenHarris-Frames-05.png'
steps:
  index:
      label: Choose
      title: 'Make a One Year 2 Win photo frame'
      prompt: 'Upload your framed profile pic to -any- social media account! We only have One Year to re-elect Gov. Evers and replace Ron Johnson – both must-win elections for Wisconsinites! Help spread the word & volunteer with WisDems today. Choose a frame to get started.'
  upload:
    label: Upload
    title: 'Choose a profile image to upload'
    prompt: 'Upload your profile image to add this frame to it. Note, we do not save this image.'
    buttons:
      default:
        label: 'Upload your photo'
        icon: 'fa-upload'
      facebook:
        label: 'Use your Facebook profile picture'
  edit:
    label: Edit
    title: Adjust photo
    content: Drag the image around to reposition. Pinch to zoom.
    options:
      continue:
        label: Continue
      back:
        label: Change image
  share:
    label: Share
    title: 'Share the #OneYearToWin photo with your friends!'
    options:
      facebook:
        label: Facebook
        class: is-info
        icon: fa-facebook-square
        title: Open Facebook
        instructions: Upload the saved photo and paste in the suggested text.
        url:
          web: http://facebook.com/profile
          app: fb://profile
      twitter:
        label: Twitter
        class: is-default
        icon: fa-twitter
        title: Open Twitter
        instructions: Upload the saved photo and paste in the suggested text.
        url:
          web: http://twitter.com
          app: twitter://
      custom:
        label: Instagram
        icon: fa-instagram
        title: Open Instagram
        instructions: Upload the saved photo and paste in the suggested text.
    download:
      label: Save
      title: Save photo
      instructions: Press the photo to save it to your cameraroll
      icon: fa-download
      fileName: wisconsinite-for-biden
    suggestion:
      label: Copy text
      instruction: 'Paste the copied text or write your own. Remember #OneYearToWin'
      title: Copy text
      alternative: Share
      continue: Continue
      text: "As Goes Wisconsin, So Goes the Nation. We've got one year to win in 2022. Join me in showing support: wisdems.org/frame"
      icon: 'fa-clone'
nav:
  internal:
    - label: 'About'
      href: '/about'
      icon: 'fa-info-circle'
      iconOnly: true
  some:
    - label: 'Facebook'
      icon: 'fa-facebook-square'
      href: 'https://www.facebook.com/WisDems'
      iconOnly: true
    - label: 'Instagram'
      icon: 'fa-instagram'
      href: 'https://www.instagram.com/wisdems'
      iconOnly: true
    - label: 'Twitter'
      icon: 'fa-twitter'
      href: 'https://twitter.com/intent/follow?region=follow_link&screen_name=WisDems'
      iconOnly: true
footer:
  disclaimer:
    image: '/images/buildbackbetter/disclaimer.png'
    text: 'Paid for by the Democratic Part of Wisconsin, Ben Wikler, Chair.'
privacy: '**OneYearToWin**-filter-app only sends back usage statistics through Google Analytics. No images or personal information is stored by us.'
---

# Make a WisDems One Year to Win Graphic!

The senate hangs in the balance. Wisconsin must defeat Ron Johnson in 2022. Use this tool to show your support for the campaign as a proud Wisconsinite. 

Read more at [wisdems.org](https://wisdems.org)

Project based on [Profile Pic Overlay](https://github.com/lillylabs/profile-pic-overlay) by [Lilly Labs](http://lillylabs.no) in Norway 🇳🇴

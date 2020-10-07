---
title:
  text: '#BuildBackBetter'
  image: '/images/buildbackbetter/logo.png'
  wisdems: '/images/buildbackbetter/wisdems-blue.png'
overlays: 
  - ratio: 1
    bulma: is-square
    column: is-one-quarter
    avatar: '/images/buildbackbetter/placeholder-square.png'
    urls:
      sm: '/images/buildbackbetter/filter-square-thin-500.png'
      md: '/images/buildbackbetter/filter-square-thin-750.png'
      lg: '/images/buildbackbetter/filter-square-thin-1000.png'
  - ratio: .5
    bulma: is-2by1
    column: is-one-half
    avatar: '/images/buildbackbetter/placeholder-wide.png'
    urls:
      sm: '/images/buildbackbetter/filter-500.png'
      md: '/images/buildbackbetter/filter-750.png'
      lg: '/images/buildbackbetter/filter-1000.png'
  - ratio: 1
    bulma: is-square
    column: is-one-quarter
    avatar: '/images/buildbackbetter/placeholder-square-zoom.png'
    urls:
      sm: '/images/buildbackbetter/filter-square-bold-500.png'
      md: '/images/buildbackbetter/filter-square-bold-750.png'
      lg: '/images/buildbackbetter/filter-square-bold-1000.png'
  - ratio: 1
    bulma: is-square
    column: is-one-fifth
    avatar: '/images/buildbackbetter/placeholder-square.png'
    urls:
      sm: '/images/buildbackbetter/BidenHarris-Frames-01.png'
      md: '/images/buildbackbetter/BidenHarris-Frames-01.png'
      lg: '/images/buildbackbetter/BidenHarris-Frames-01.png'
  - ratio: 1
    bulma: is-square
    column: is-one-fifth
    avatar: '/images/buildbackbetter/placeholder-square.png'
    urls:
      sm: '/images/buildbackbetter/BidenHarris-Frames-02.png'
      md: '/images/buildbackbetter/BidenHarris-Frames-02.png'
      lg: '/images/buildbackbetter/BidenHarris-Frames-02.png'
  - ratio: 1
    bulma: is-square
    column: is-one-fifth
    avatar: '/images/buildbackbetter/placeholder-square.png'
    urls:
      sm: '/images/buildbackbetter/BidenHarris-Frames-03.png'
      md: '/images/buildbackbetter/BidenHarris-Frames-03.png'
      lg: '/images/buildbackbetter/BidenHarris-Frames-03.png'
  - ratio: 1
    bulma: is-square
    column: is-one-fifth
    avatar: '/images/buildbackbetter/placeholder-square.png'
    urls:
      sm: '/images/buildbackbetter/BidenHarris-Frames-04.png'
      md: '/images/buildbackbetter/BidenHarris-Frames-04.png'
      lg: '/images/buildbackbetter/BidenHarris-Frames-04.png'
  - ratio: 1
    bulma: is-square
    column: is-one-fifth
    avatar: '/images/buildbackbetter/placeholder-square.png'
    urls:
      sm: '/images/buildbackbetter/BidenHarris-Frames-05.png'
      md: '/images/buildbackbetter/BidenHarris-Frames-05.png'
      lg: '/images/buildbackbetter/BidenHarris-Frames-05.png'
steps:
  index:
      label: Choose
      title: 'Make a Biden + Harris Endorsement Graphic'
      prompt: 'Choose an endorsement filter to get started'
      buttons:
        default:
          label: 'Upload your photo'
          icon: 'fa-upload'
        facebook:
          label: 'Use your Facebook profile picture'
  upload:
    label: Upload
    title: 'Make a Biden + Harris Endorsement Graphic'
    prompt: 'Support the campaign. Create your own #BuildBackBetter photo and share with your friends.'
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
    title: 'Share the #BuildBackBetter photo with your friends!'
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
      instruction: 'Paste the copied text or write your own. Remember #BuildBackBetter'
      title: Copy text
      alternative: Share
      continue: Continue
      text: "I'm voting for Joe Biden in the November Election!  We’re in a battle for the soul of the nation, and it’s up to all of us to end the Trump nightmare. Join me in showing support: wisdems.org/frame"
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
privacy: '**Biden+Harris**-filter-app only sends back usage statistics through Google Analytics. No images or personal information is stored by us.'
---

# Make a Biden+Harris Endorsement Graphic!

Wisconsin is a must-win state for Joe Biden in 2020. Use this tool to show your support for the Biden Harris campaign as a proud Wisconsinite. 

Read more at [wisdems.org](https://wisdems.org)

Project based on [Profile Pic Overlay](https://github.com/lillylabs/profile-pic-overlay) by [Lilly Labs](http://lillylabs.no) in Norway 🇳🇴

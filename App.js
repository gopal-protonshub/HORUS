import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Svg, {G, Path, TextPath, TSpan} from 'react-native-svg';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={styles.topWrapper}>
          <Image source={require('./Assets/Images/SunMoon.png')} />
          <View>
            <Text style={styles.today}>Today</Text>
            <Text style={styles.day}>Wednesday</Text>
            <Text style={styles.date}>December 4, 2019</Text>
          </View>
          <Image source={require('./Assets/Images/Ankh.png')} />
        </View>
        <View style={styles.HORUS}>
          <Text style={styles.H}>H</Text>
          <Text style={styles.O}>O</Text>
          <Text style={styles.R}>R</Text>
          <Text style={styles.U}>U</Text>
          <Text style={styles.S}>S</Text>
        </View>
        {/*
         * for an arc :- Ax1 y1, m , x2 y2, x3 y3
         * x1 and y1 => how wide and how tall the arc will be
         * m => arc rotational angle
         * x2 and y2 => rotation of the arc along the x and y axis
         * x3 and y3 => ending point of the arc
         */}
        <Svg>
          {/*<Defs>
            <Path
              id="path"
              d="M0,0
                 A1,1 0 0 0 -2,0
                 A2,2 0 0 0 0,2
                 A3,3 0 0 0 3,-1
                 A5,5 0 0 0 -2,-6
                 A8,8 0 0 0 -10, 2
                 A13, 13 0 0 0 3, 15
                 A21, 21 0 0 0  24, -6
                 A34,34 0 0 0 -10, -40
                 A40,50 0 0 0 -50, 1
                 A70,70 0 0 0 120, 2
                 A160,140 0 0 0 70, -120
                 A175,140 0 0 0 -120, -150"
            />
          </Defs>*/}
          <G y="300" x="200">
            <TextPath href="#path">
              <TSpan fill="black" dy="4,6,10">
                {/*<TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>
                <TSpan fill="black">seieor</TSpan>*/}
              </TSpan>
            </TextPath>
            <Path
              d="M0, 0
                 A160,160 0 0 0 70, -120
                 A175,175 0 0 0 -120, -150
            "
              fill="#4E9AFF"
              stroke="black"
              strokeWidth="3"
            />
            <Path
              d="M0, 0
                 A70,70 0 0 0 125, 2
                 A160,160 0 0 0 70, -120
            "
              fill="#34A651"
              stroke="black"
              strokeWidth="3"
            />
            <Path
              d="M0, 0
                 A40,40 0 0 0 -50, 1
                 A70,70 0 0 0 125, 2
            "
              fill="#C849FF"
              stroke="black"
              strokeWidth="3"
            />
            <Path
              d="M0, 0
                 A34,34 0 0 0 -10, -40
                 A40,50 0 0 0 -50, 1
            "
              fill="#E5CE46"
              stroke="black"
              strokeWidth="3"
            />
            <Path
              d="M0,0
                 A21, 21 0 0 0  24, -6
                 A34,34 0 0 0 -10, -40
                 "
              fill="#FF984E"
              stroke="black"
              strokeWidth="3"
            />
            <Path
              d="M0,0
                 A8,8 0 0 0 -10, 2
                 A13, 13 0 0 0 3, 15
                 A13, 13 0 0 0 3, 15
                 A21, 21 0 0 0  24, -6
                 "
              fill="#2D9CDB"
              stroke="black"
              strokeWidth="3"
            />
            <Path
              d="M0,0
                 A1,1 0 0 0 -10,0
                 A10,10 0 0 0 0,2
                 A3,3 0 0 0 3,-1
                 A5,5 0 0 0 -2,-6
                 A8,8 0 0 0 -10, 2
                 "
              fill="#C96DD1"
              stroke="black"
              strokeWidth="3"
            />
            {/*<Path
              d="M-114.456 461.596
              L-119.775 448.766L-124.518 434.516
              L-128.646 419.537L-133.008 400.418
              L-137.068 375.05L-141.595 341.404
              L-142.649 322.776L-141.672 293.641
              L-140.109 274.854L-135.013 248.93
              L-128.19 218.747L-119.131 193.274
              L-109.263 170.521L-98.6236 149.798
              L-87.1741 131.795L-75.0317 114.442
              L-62.6943 100.539L-49.6638 87.2859
              L-35.9405 74.6829L-17.7175 60.4218
              L-0.685448 48.3099L14.5019 38.387
              L32.9979 28.9553L50.957 21.633
              L74.1477 13.9927L95.5326 9.23138
              L121.036 7.68106L133.461 6.92577
              L155.89 9.02377L182.399 13.6429
              L203.022 18.6198L221.146 25.8254
              L244.737 36.8525L261.748 47.5872
              L276.837 59.131L292.775 74.0847
              L307.444 89.8078L320.269 107.72
              L331.824 126.401L340.803 145.932
              L347.898 166.961L353.997 193.589
              L357.9 216.198L359.032 236.205
              L357.664 258.441L354.218 278.727
              L344.965 300.75L335.516 319.324
              L325.336 336.557L312.617 355.33
              L300.817 367.124L284.517 380.576
              L268.675 390.538L257.217 396.773
              L242.41 401.827L224.949 406.35
              L206.717 408.843L191.676 409.757
              L171.785 406.12L155.856 402.935
              L139.039 395.65L121.374 384.955
              L106.168 371.341L93.5775 357.568
              L82.715 339.537L74.2342 317.207
              L69.755 296.019L68.6235 276.011
              L70.6447 253.736L76.9017 236.74
              L85.7354 218.896L96.7649 205.072
              L110.527 193.159L127.062 183.847
              L143.137 178.024L158.831 177.07
              L174.643 178.185L189.303 182.14
              L200.117 187.713L211.087 196.046
              L220.174 205.878L227.376 217.209
              L232.851 232.799L235.866 251.307
              L234.568 263.155L230.732 276.541
              L224.855 288.667L216.822 297.463
              L206.75 304.998L193.251 309.972
              L182.134 310.648L170.9 309.254
              L158.817 304.451L149.809 295.999
              L142.645 285.357L139.366 273.788"
              stroke="black"
              strokeWidth="3"
            />*/}

            {/*<Path d="M160 0 A1 1, 0, 0 0, -190 0" stroke="black" strokeWidth="3" fill={'green'}/>
            <Path d="M-60 0 A1 1, 0, 0 0, 160 0" stroke="black" strokeWidth="3" fill={'cyan'}/>
            <Path d="M80 0 A1 1, 0, 0 0, -60 00" stroke="black" strokeWidth="3" fill={'red'}/>
            <Path d="M0 0 A1 1, 0, 0 0, 80 00" stroke="black" strokeWidth="3" fill={'black'}/>

            <Path d="M0 75 A1 1, 0, 0 0, -10 -140" stroke="black" strokeWidth="3" fill={'red'} />
            <Path d="M0 10 A1 1, 0, 0 0, 60 -120" stroke="black" strokeWidth="3" fill={'blue'} />
            <Path d="M0 0 A10 10, 0, 0 0, 100 -70" stroke="black" strokeWidth="3" fill={'red'} />
            <Path d="M0 0 A10 15, 0, 0 0, 100 -30" stroke="black" strokeWidth="3" fill={'pink'} />
            <Path d="M0 0 A10 14, 0, 0 0, 110 -5" stroke="black" strokeWidth="3" fill={'green'} />
            <Path d="M0 0 A10 13, 0, 0 0, 105 30" stroke="black" strokeWidth="3" fill={'blue'} />
            <Path d="M0 0 A1 1, 0, 0 0, 80 80" stroke="black" strokeWidth="3" fill={'#fff'} />
            <Path d="M0 0 A10 13, 0, 0 0, 50 90" stroke="black" strokeWidth="3" fill={'pink'} />
            <Path d="M5 -5 A10 14, 0, 0 0, 10 92" stroke="black" strokeWidth="3" fill={'#fff'} />
            <Path d="M0 0 A1 1, 0, 0 0, 40 00" stroke="black" strokeWidth="3" fill={'red'} />
            <Path d="M0 0 A1 1, 0, 0 1, 40 00" stroke="black" strokeWidth="3" fill={'green'} />*/}
          </G>
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'cyan',
    padding: 10,
  },
  topWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  HORUS: {
    display: 'flex',
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  today: {
    fontSize: 30,
    textAlign: 'center',
  },
  day: {
    fontSize: 20,
    textAlign: 'center',
  },
  date: {
    textAlign: 'center',
    fontSize: 18,
  },
  H: {
    fontSize: 35,
    fontWeight: '900',
    color: '#F2994A',
  },
  O: {
    fontSize: 35,
    fontWeight: '900',
    color: '#2D9CDB',
  },
  R: {
    fontSize: 35,
    fontWeight: '900',
    color: '#C849FF',
  },
  U: {
    fontSize: 35,
    fontWeight: '900',
    color: '#FF54DF',
  },
  S: {
    fontSize: 35,
    fontWeight: '900',
    color: '#27AE60',
  },
});

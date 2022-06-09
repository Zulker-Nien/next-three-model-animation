import {
  Html,
  PerspectiveCamera,
  SpotLight,
  useAnimations,
  useGLTF,
  useFBX,
  useScroll,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";
import { useEffect, useLayoutEffect, useState } from "react";
import { ShaderMaterial, MeshStandardMaterial, LoopPingPong } from "three";
import styles from "../styles/Component.module.scss";
import { damp } from "three/src/math/MathUtils";
import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

const Model = (props) => {
  const [clicked, setClicked] = useState(false);
  // Load Model
  const { scene, nodes, animations, cameras, materials } = useGLTF("fin.gltf");
  const { actions } = useAnimations(animations, cameras[0]);
  const x = useAnimations(animations, scene);
  // const material2 = new MeshStandardNodeMaterial();
  // console.log(materials["ProceduralScifiPanels"])
  // Load Textures
  const Body = useTexture([
    "/Assets/mark-farias-dt60oksDTx8-unsplash.jpg",
    "/Assets/ludvig-wiese-d-MfHM-jHwc-unsplash.jpg",
    "/Assets/Asset_4.png",
    "/Assets/Asset_5.png",
    "/Assets/x_alb2x.png",
    "/Assets/love_alb2x.png",
    "/Assets/text2x.png",
    "/Assets/concrete.png",
    "/Assets/metal.png",
    "/Assets/slider.png",
    "/Assets/space_ao.png",
    "/Assets/space_color.png",
    "/Assets/space_displace.png",
    "/Assets/space_normal.png",
    "/Assets/space_roughness.png",
  ]);
  // Create Materials
  let map0, map1, map2, map3, map4, map5, map6, map7, map8;
  let coloronly = new MeshStandardMaterial({
    color: "#fb00ff",
    depthTest: true,
    depthWrite: true,
  });
  let coloronly1 = new MeshStandardMaterial({
    color: "#ff0000",
    // defines: materials.Coffee,
  });
  let coloronly2 = new MeshStandardMaterial({
    color: "#0d0d0d",
    map: Body[7],
  });
  let coloronly3 = new MeshStandardMaterial({
    color: "#00ff00",
    // map:
  });
  let coloronly4 = new MeshStandardMaterial({
    color: "#0a0a0a",
    map: Body[8],
  });
  let coloronly5 = new MeshStandardMaterial({
    color: "#000000",
    map: Body[8],
  });
  let coloronly6 = new MeshStandardMaterial({
    color: "#0a0a0a",
    aoMap: Body[10],
    map: Body[11],
    // displacementMap: Body[12],
    normalMap: Body[13],
    roughnessMap: Body[14],
  });
  // let coloronlylvl = materials['ProceduralScifiPanels']
  // map: materials.LVL,;
  map0 = new MeshStandardMaterial({
    map: Body[1],
    // color: "#ff0000",
  });
  map1 = new MeshStandardMaterial({
    map: Body[0],
    // color: "#ff0000",
  });
  map2 = new MeshStandardMaterial({
    map: Body[2],
    color: "#00ff00",
    transparent: true,
  });
  map3 = new MeshStandardMaterial({
    map: Body[3],
    transparent: true,
    color: "#00ff00",
  });
  map4 = new MeshStandardMaterial({
    map: Body[4],
    transparent: true,
    color: "#00ff00",
  });
  map5 = new MeshStandardMaterial({
    map: Body[5],
    transparent: true,
    color: "#00ff00",
  });
  map6 = new MeshStandardMaterial({
    map: Body[6],
    transparent: true,
  });
  map7 = new MeshStandardMaterial({
    map: Body[6],
    transparent: true,
    color: "#00ff00",
  });
  map8 = new MeshStandardMaterial({
    map: Body[9],
    transparent: true,
  });
  const WithoutMAP = [
    // { childID: "Plane", mtl: new_mtl },Ground Fog
    { childID: "Cylinder016", mtl: coloronly3 },
    { childID: "1thfloor", mtl: coloronly4 },
    { childID: "2thfloor", mtl: coloronly4 },
    { childID: "3thfloor", mtl: coloronly4 },
    { childID: "4thfloor", mtl: coloronly4 },
    { childID: "Cube005", mtl: coloronly4 },
    // { childID: "Cylinder021", mtl: coloronly3 },
    { childID: "Cube007", mtl: coloronly4 },
    { childID: "Cube008", mtl: coloronly3 },
    //
    { childID: "Cube014", mtl: coloronly2 },
    { childID: "Cube010", mtl: coloronly2 },
    { childID: "Cube012", mtl: coloronly6 },
    { childID: "Cube011", mtl: coloronly2 },
    { childID: "Cube013", mtl: coloronly2 },
    { childID: "Cube014", mtl: coloronly6 },
    { childID: "Cube029", mtl: coloronly6 },
    { childID: "Cube128", mtl: coloronly6 },
    { childID: "Cube121", mtl: coloronly6 },
    { childID: "Cube122", mtl: coloronly6 },
    { childID: "Cube125", mtl: coloronly6 },
    { childID: "Cube127", mtl: coloronly6 },
    { childID: "Cube017", mtl: coloronly4 },
    { childID: "Cube019", mtl: coloronly4 },
    { childID: "Cube006", mtl: coloronly4 },
    { childID: "Cube021", mtl: coloronly4 },
    { childID: "Cube023", mtl: coloronly4 },
    { childID: "Cube025", mtl: materials.Metal_Aluminum_Anodized },
    { childID: "Cube080", mtl: coloronly2 },
    { childID: "Plane009", mtl: coloronly2 },
    // { childID: "Cube074", mtl: materials.Upperfog },
    { childID: "Cube076", mtl: coloronly2 },
    { childID: "Cube077", mtl: coloronly2 },
    { childID: "Cube078", mtl: coloronly2 },
    //
    { childID: "Road2", mtl: coloronly2 },
    { childID: "Road3", mtl: coloronly2 },
    { childID: "Road4", mtl: coloronly2 },
    { childID: "Road5", mtl: coloronly2 },
    { childID: "Text001", mtl: coloronly1 },
    { childID: "Text", mtl: coloronly1 },
    { childID: "Text002", mtl: coloronly1 },
    { childID: "Text003", mtl: coloronly },
    { childID: "Text004", mtl: coloronly1 },
    { childID: "Text005", mtl: coloronly1 },
    { childID: "Text008", mtl: coloronly },
    { childID: "Text009", mtl: coloronly1 },
    { childID: "Text010", mtl: coloronly1 },
    { childID: "Text011", mtl: coloronly1 },
    { childID: "Text012", mtl: coloronly1 },
    { childID: "Text013", mtl: coloronly3 },
    { childID: "Text014", mtl: coloronly1 },
    { childID: "Text015", mtl: coloronly1 },
    { childID: "Text016", mtl: coloronly1 },
    { childID: "Text017", mtl: coloronly1 },
    { childID: "Text019", mtl: coloronly },
    { childID: "Text022", mtl: coloronly3 },
    { childID: "G-__556086.005", mtl: coloronly },
    { childID: "Plane010", mtl: coloronly },
    { childID: "Plane011", mtl: coloronly },
    { childID: "Plane012", mtl: coloronly },
    { childID: "Plane015", mtl: coloronly },
    { childID: "Balcony_Strips", mtl: coloronly2 },

    // { childID: "Plane001", mtl: materials.Beaucoupwriting },
  ];

  const WithMAP = [
    { childID: "GroundFog", mtl: coloronly5 },
    // beau
    { childID: "Plane001", mtl: map2 },
    // coup
    { childID: "Plane008", mtl: map3 },
    // team1
    { childID: "Plane013", mtl: map0 },
    // team2
    { childID: "Plane014", mtl: map1 },
    // cross
    { childID: "Plane004", mtl: map4 },
    // love
    { childID: "Plane005", mtl: map5 },
    // imgbytext
    { childID: "Plane003", mtl: map1 },
    // txt
    { childID: "Plane006", mtl: map7 },
    // slider
    { childID: "Slider", mtl: map8 },
  ];

  const withTexture = (parent, type, mtl) => {
    parent.traverse((o) => {
      if (o.isMesh) {
        if (o.name == type) {
          o.material = mtl;
          o.material.map.flipY = false;
        }
      }
    });
  };

  const withoutTexture = (parent, type, mtl) => {
    parent.traverse((o) => {
      if (o.isMesh) {
        if (o.name == type) {
          o.material = mtl;
        }
      }
    });
  };

  if (scene) {
    for (let object of WithMAP) {
      withTexture(scene, object.childID, object.mtl);
    }
  }

  if (scene) {
    for (let object of WithoutMAP) {
      withoutTexture(scene, object.childID, object.mtl);
    }
  }

  useLayoutEffect(() =>
    Object.values(nodes).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    )
  );

  function animate() {
    requestAnimationFrame(animate);
    // nodes.Slider.rotation.y += 0.01;
    // nodes.Text017.position.x += 0.1;
  }

  if (scene) {
    const scroll = useScroll();
    useEffect(() => {
      void (actions["CameraAction"].play().paused = true),
        [actions, clicked, setClicked];
    });
    x.actions["Text.017Action"].play().setLoop(LoopPingPong, Infinity);

    console.log(x.actions["Text.017Action"]);

    useFrame((state, delta) => {
      const action = actions["CameraAction"];
      const offset = scroll.offset;
      action.time = damp(
        action.time,
        action.getClip().duration * offset,
        10,
        delta
      );

      state.camera.position.set(
        cameras[0].position.x,
        cameras[0].position.y,
        cameras[0].position.z
      );
      state.camera.rotation.set(
        cameras[0].rotation.x,
        cameras[0].rotation.y,
        cameras[0].rotation.z
      );
      {
        clicked &&
          window.scrollBy(
            0,
            (action.time = damp(
              action.time,
              1 - action.getClip().duration,
              10,
              1
            ))
          );
      }
    });
  }

  animate();
  function Nav() {
    const [toggle, setToggle] = useState(false);

    return (
      <Html>
        <div className={styles.nav}>
          <div
            className={styles.toggleContainer}
            onClick={() => {
              setToggle(true);
            }}
          >
            {toggle ? (
              ""
            ) : (
              <>
                <img src="/Assets/nav/toggle-1.png" />
                <img src="/Assets/nav/toggle-2.png" />
              </>
            )}
          </div>
          <div className={styles.menuContainer}>
            <div className={styles.pentagon}>Meet your Sifter</div>
            <div className={styles.social}>
              <FaTwitter size={30} />
            </div>
          </div>
        </div>
        {toggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.3,
              },
            }}
            className={styles.popUp}
          >
            <div className={styles.toggleWrapper}>
              <div className={styles.toggleContent}>
                <div
                  onClick={() => {
                    setClicked(true);
                    // scroll2.offset.toFixed(10);
                  }}
                >
                  <p>ABOUT</p>
                </div>
                <div>
                  <p>TEAM</p>
                </div>
                <div>
                  <p>ROADMAP</p>
                </div>
                <div>
                  <p>MEET YOUR SIFTER</p>
                </div>
              </div>
              <div
                className={styles.closeBtn}
                onClick={() => {
                  setToggle(false);
                }}
              ></div>
            </div>
          </motion.div>
        )}
      </Html>
    );
  }

  function Team() {
    function replace(hide, show) {
      document.getElementById(hide).style.display = "none";
      document.getElementById(show).style.display = "block";
    }
    return (
      <Html transform occlude position={[4, -5, 19]} rotation={[1.6, 1.6, 0]}>
        <div className={styles.teamContainer}>
          <Swiper
            grabCursor={true}
            effect={"creative"}
            pagination={{
              clickable: true,
            }}
            creativeEffect={{
              prev: {
                // shadow: true,
                translate: ["-100%", 0, -1],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative, Pagination]}
            className="mySwiper3"
          >
            <SwiperSlide>
              <div className={styles.collection}>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <img src="/Assets/team/Lovin.jpeg" />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION ID NAME - Lovin</h1>
                    <p>
                      Mastermind (Project Manager). First to live and die for
                      the movement Built identities for 15 years. Has worked
                      incognito with Audesser brands: Mercedes, Pepsi, Rockstar;
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <img src="/Assets/team/Bishop.png" />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION ID NAME - Bishop</h1>
                    <p>
                      The Black Chapeau (Developer) Beau Coup's shepherd of
                      clever minds. Connects the Sifter channels. Crypto
                      Adaptor, having worked on various Decentralized systems;
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.collection}>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <img src="/Assets/team/Smoke.png" />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION ID NAME - Smoke</h1>
                    <p>
                      Orateur extraordinaire (Marketer) Propaganda leader,
                      Audesser's most wanted. Recruited from web 2.0 for his
                      talents.
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <img src="/Assets/team/Rust.png" />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION ID NAME - Rust</h1>
                    <p>
                      Chef Comptroller (Financials) Never shot a gun yet he
                      always has the money shot. Supply and currency manager;
                      Keeps the organization stable Managed a 70 personnel
                      company.
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.collection}>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <img src="/Assets/team/Gman.png" />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION ID NAME - Gman</h1>
                    <p>
                      The White Chapeau (Protection) Builder of walls of fire
                      and brimstone. Security of the Beau Coup servers;
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <img src="/Assets/team/Moon-Bagger.png" />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION ID NAME - Moon-Bagger</h1>
                    <p>
                      Flag Porteur (Community Manager) As long as he's standing,
                      the movement lives on. Raid strategist; Novice trainer
                      Well connected in the Asian space; Web 3.0 adaptor
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.collection}>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <img src="/Assets/team/MercedHees.png" />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION ID NAME - MercedHees</h1>
                    <p>
                      Beau Crowd whisperer (Community Manager) He makes your
                      head spin and you're gonna love it. Defense strategist;
                      Leader in diplomacy.
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <img src="/Assets/team/Insurgents.png" />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION GROUP NAME - Insurgents</h1>
                    <p>
                      Ximads; Direé; Sanchez; EuroSadBoy; Frank Beaucoup Beaus
                      (Artists) Creators of propaganda. The movement paints the
                      world with their hands. Worked with brands such as: Nike;
                      Rebook including many more;
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.collection}>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <img src="/Assets/team/Enforcers.png" />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION GROUP NAME - Enforcers</h1>
                    <p>
                      Darkblizzard; DocHuckleberry; Samseo; HarryNiu HKJC; K7;
                      Matei; Siomay; Ganjagymgod; HotmessMellow Moderators; The
                      Beau Coup's Tier 1
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <img src="/Assets/team/strategist.png" />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION GROUP NAME - Strategist</h1>
                    <p>
                    Dyno; Ayhth; Haputt; Jfx187; Mike Costache
Advisers; The Beau Coup's consultants
M.C. has managed Hedge Funds;
Haputt part of leading VC Asia
Dyno Co-founder of 721club, OpenDAO
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Html>
    );
  }

  return (
    <>
      <group>
        <Team />
      </group>
      <group>
        <PerspectiveCamera makeDefault name="Camera" fov={22.89} far={1000} />
        <Nav />
        <fog attach="fog" color="#0a0a0a" near={1} far={30} />

        {/* <pointLight position={[15.906, -4.3835, 54.296]} power={400}/>
        <pointLight position={[7.15991 , -4.3835, 54.296]} power={400}/>
        <pointLight position={[3.73821, -19.9273, 63.9735]} power={400}/>
        <pointLight position={[-2.19026, 0.468862, 35.7171]} power={400} radius={0.25}/> */}

        {/* <spotLight
          position={[25.844, -24.784, 17.363]}
          rotation={[23.4, 20.2, -13.7]}
        />
        <spotLight
          position={[28.483, -10.822, 22.298]}
          rotation={[23.4, 20.2, -13.7]}
        /> */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={-0.6}
            luminanceSmoothing={0.5}
            height={1000}
          />
          <Noise premultiply={true} opacity={2} />
          <primitive object={scene} {...props} />
        </EffectComposer>
      </group>
    </>
  );
};

export default Model;

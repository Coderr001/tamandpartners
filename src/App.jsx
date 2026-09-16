import './App.css'


/* =========================================================
   PRACTICE AREAS
========================================================= */

const layanan = [
  {
    nomor: '01',
    nama: 'Legal Opinion & Legal Drafting',
    deskripsi:
      'Pendapat hukum, penyusunan kontrak, perjanjian, dan MoU untuk kebutuhan individu maupun korporasi.'
  },
  {
    nomor: '02',
    nama: 'Mediasi & Negosiasi',
    deskripsi:
      'Pendampingan dalam proses mediasi dan negosiasi untuk membantu mencapai penyelesaian hukum yang tepat.'
  },
  {
    nomor: '03',
    nama: 'Konsultasi Hukum Korporasi',
    deskripsi:
      'Konsultasi hukum untuk mendukung kebutuhan dan kepentingan perusahaan dalam menjalankan kegiatan usaha.'
  },
  {
    nomor: '04',
    nama: 'Hubungan Industrial & Ketenagakerjaan',
    deskripsi:
      'Penyelesaian hubungan industrial dan berbagai persoalan hukum ketenagakerjaan.'
  },
  {
    nomor: '05',
    nama: 'Compliance & Regulatory',
    deskripsi:
      'Pendampingan kepatuhan hukum dan regulasi untuk membantu perusahaan memenuhi ketentuan yang berlaku.'
  },
  {
    nomor: '06',
    nama: 'Perizinan Usaha & Investasi',
    deskripsi:
      'Pendampingan hukum dalam pengurusan perizinan usaha dan kebutuhan investasi.'
  },
  {
    nomor: '07',
    nama: 'Hukum Keluarga',
    deskripsi:
      'Konsultasi hukum keluarga meliputi perkawinan, perceraian, waris, dan adopsi.'
  },
  {
    nomor: '08',
    nama: 'Hukum Pidana',
    deskripsi:
      'Pendampingan penyidikan, penuntutan, hingga persidangan dalam perkara pidana.'
  },
  {
    nomor: '09',
    nama: 'Hukum Perdata',
    deskripsi:
      'Gugatan sengketa utang piutang, wanprestasi, dan ganti rugi.'
  },
  {
    nomor: '10',
    nama: 'Hukum Korporasi',
    deskripsi:
      'Pendampingan sengketa pemegang saham, merger, dan akuisisi.'
  },
  {
    nomor: '11',
    nama: 'Ketenagakerjaan & Hubungan Industrial',
    deskripsi:
      'Pendampingan perselisihan PHK, pesangon, dan berbagai persoalan hubungan industrial.'
  },
  {
    nomor: '12',
    nama: 'Hukum Imigrasi',
    deskripsi:
      'Pendampingan dalam berbagai kasus dan permasalahan keimigrasian.'
  },
  {
    nomor: '13',
    nama: 'Hukum Pertanahan',
    deskripsi:
      'Pendampingan sengketa tanah, sertifikat, dan permasalahan ganti rugi.'
  },
  {
    nomor: '14',
    nama: 'Pertambangan & Perkebunan',
    deskripsi:
      'Pendampingan sengketa izin dan pengelolaan usaha pertambangan maupun perkebunan.'
  },
  {
    nomor: '15',
    nama: 'Property & Perkapalan',
    deskripsi:
      'Pendampingan jual beli, leasing, dan sengketa maritim.'
  },
  {
    nomor: '16',
    nama: 'Hukum Kesehatan',
    deskripsi:
      'Pendampingan sengketa medis dan permasalahan hukum rumah sakit.'
  }
]


/* =========================================================
   CORPORATE RETAINER PACKAGES
========================================================= */

const paketRetainer = [
  {
    nomor: '01',
    nama: 'PLATINUM',
    deskripsi:
      'Pendampingan hukum korporasi secara komprehensif untuk kebutuhan legal perusahaan yang berkelanjutan.',
    layanan: [
      'Mendampingi perusahaan dalam pembahasan kontrak.',
      'Bekerjasama dengan notaris dalam menyusun akta notaril perusahaan.',
      'Memberikan legal opinion dan/atau legal consultation.',
      'Mendata utang dan/atau piutang perusahaan dengan bagian keuangan.',
      'Mendata semua aset milik perusahaan.',
      'Membuat, menandatangani, mengirim dan menjawab somasi.',
      'Mengurus semua perijinan perusahaan.',
      'Membantu pembentukan kantor cabang dan/atau kantor baru.',
      'Restrukturisasi perusahaan.',
      'Mempersiapkan dokumen, menghadiri dan membuat risalah RUPS dan/atau RUPSLB.',
      'Membuat draft kontrak dan menerima kuasa menandatangani kontrak mewakili direktur perusahaan.',
      'Penjualan dan pembelian saham perusahaan.',
      'Melakukan review kontrak perusahaan.'
    ]
  },
  {
    nomor: '02',
    nama: 'GOLD',
    deskripsi:
      'Pendampingan legal untuk perusahaan dengan kebutuhan hukum yang terarah, praktis, dan profesional.',
    layanan: [
      'Mendampingi perusahaan dalam pembahasan kontrak.',
      'Bekerjasama dengan notaris dalam menyusun akta notaril perusahaan.',
      'Memberikan legal opinion dan/atau legal consultation.',
      'Mendata utang dan/atau piutang perusahaan dengan bagian keuangan.',
      'Mendata semua aset milik perusahaan.',
      'Membuat, menandatangani, mengirim dan menjawab somasi.',
      'Melakukan review kontrak perusahaan.'
    ]
  },
  {
    nomor: '03',
    nama: 'SILVER',
    deskripsi:
      'Pendampingan hukum untuk memenuhi kebutuhan legal perusahaan secara praktis dan efisien.',
    layanan: [
      'Mendampingi perusahaan dalam pembahasan kontrak.',
      'Memberikan legal opinion dan/atau legal consultation.',
      'Mendata utang dan/atau piutang perusahaan dengan bagian keuangan.',
      'Membuat, menandatangani, mengirim dan menjawab somasi.',
      'Melakukan review kontrak perusahaan.'
    ]
  }
]


/* =========================================================
   LAWYERS
========================================================= */

const BASE_URL = import.meta.env.BASE_URL;

const lawyers = [
  {
    foto: `${BASE_URL}Lawyers/dani.jpeg`,
    initials: 'DM',
    nama: 'DANI MULYA TASDIK, S.H., M.M., M.H., CHRP.',
    jabatan: 'MANAGING PARTNER',
    role: 'ADVOCATE',
    title: 'Managing Partner',
    pendidikan: [
      'S1 Fakultas Hukum Universitas Indonesia',
      'S2 Fakultas Ekonomi dan Bisnis Universitas Muhammadiyah Tangerang',
      'S2 Fakultas Hukum Universitas Muhammadiyah Tangerang',
      'S3 Fakultas Hukum Universitas Borobudur (studi)'
    ],
    pengalaman:
      'Menyelesaikan berbagai permasalahan hukum baik perdata, pidana, kepailitan, ketenagakerjaan, dan lain-lain.',
    keahlian:
      'Perdata, arbitrase, pidana, kepailitan dan hukum ketenagakerjaan.',
    organisasi: 'PERADI PROFESIONAL',
    sertifikat: [
      'Certified Human Resources Profesional',
      'Ahli K3 Umum KEMNAKER'
    ]
  },

  {
    foto: `${BASE_URL}Lawyers/ahmad purmadi.jpeg`,
    initials: 'AP',
    nama: 'AHMAD PURMADI, S.H., CCLC.',
    jabatan: 'PARTNER',
    role: 'ADVOCATE',
    title: 'Partner',
    pendidikan: [
      'S1 Fakultas Hukum Universitas Pamulang',
      'S2 Fakultas Hukum Universitas Muhammadiyah Tangerang (studi)'
    ],
    pengalaman:
      'Menyelesaikan berbagai permasalahan hukum baik perdata, pidana, kepailitan, ketenagakerjaan, dan lain-lain.',
    keahlian:
      'Perdata, arbitrase, pidana, perlindungan konsumen dan hukum ketenagakerjaan.',
    organisasi: 'PERADI PROFESIONAL',
    sertifikat: [
      'Certified Corporate Legal Consultant'
    ]
  },

  {
    foto: `${BASE_URL}Lawyers/erland.jpeg`,
    initials: 'EN',
    nama: 'ERLANDA NOVRIADI, S.H., CPLA.',
    jabatan: 'PARTNER',
    role: 'ADVOCATE',
    title: 'Partner',
    pendidikan: [
      'S1 Fakultas Hukum Universitas Pamulang',
      'S2 Fakultas Hukum Universitas Muhammadiyah Tangerang (studi)'
    ],
    pengalaman:
      'Menyelesaikan berbagai permasalahan hukum baik perdata, pidana, kepailitan, ketenagakerjaan, dan lain-lain.',
    keahlian:
      'Perdata, arbitrase, pidana, perlindungan konsumen dan hukum ketenagakerjaan.',
    organisasi: 'PERADI PROFESIONAL',
    sertifikat: [
      'Certified Profesional Legal Auditor'
    ]
  },

  {
    foto: `${BASE_URL}Lawyers/ari wibowo.jpeg`,
    initials: 'GA',
    nama: 'GUN CATUR ARI WIBOWO, S.H.',
    jabatan: 'PARTNER',
    role: 'ADVOCATE',
    title: 'Partner',
    pendidikan: [
      'S1 Fakultas Hukum Universitas Pamulang',
      'S2 Fakultas Hukum Universitas Muhammadiyah Tangerang (studi)'
    ],
    pengalaman:
      'Menyelesaikan berbagai permasalahan hukum baik perdata, pidana, kepailitan, ketenagakerjaan, dan lain-lain.',
    keahlian:
      'Perdata, arbitrase, pidana, perlindungan konsumen dan hukum ketenagakerjaan.',
    organisasi: 'PERADI PROFESIONAL',
    sertifikat: []
  },

  {
    foto: `${BASE_URL}Lawyers/Rahmatulah.jpeg`,
    initials: 'RH',
    nama: 'ROHMATTULLOH, S.H.',
    jabatan: 'PARTNER',
    role: 'ADVOCATE',
    title: 'Partner',
    pendidikan: [
      'S1 Fakultas Hukum Universitas Pamulang',
      'S2 Fakultas Hukum Universitas Muhammadiyah Tangerang (studi)'
    ],
    pengalaman:
      'Menyelesaikan berbagai permasalahan hukum baik perdata, pidana, kepailitan, ketenagakerjaan, dan lain-lain.',
    keahlian:
      'Perdata, arbitrase, pidana, perlindungan konsumen dan hukum ketenagakerjaan.',
    organisasi: 'PERADI PROFESIONAL',
    sertifikat: []
  },

  {
    foto: `${BASE_URL}Lawyers/titis.jpeg`,
    initials: 'TM',
    photoClass: 'titisPhoto',
    nama: 'TITIS MUBAROKH, S.H.',
    jabatan: 'PARTNER',
    role: 'ADVOCATE',
    title: 'Partner',
    pendidikan: [
      'S1 Fakultas Hukum UIN Lampung',
      'S2 Fakultas Hukum Universitas Muhammadiyah Tangerang (studi)'
    ],
    pengalaman:
      'Menyelesaikan berbagai permasalahan hukum baik perdata, pidana, kepailitan, ketenagakerjaan, dan lain-lain.',
    keahlian:
      'Perdata, arbitrase, pidana, perlindungan konsumen dan hukum ketenagakerjaan.',
    organisasi: 'PERADI PROFESIONAL',
    sertifikat: []
  },

  {
    foto: `${BASE_URL}Lawyers/jejen.jpeg`,
    initials: 'JM',
    nama: 'JEJEN MUSTOPA, S.H.',
    jabatan: 'PARTNER',
    role: 'ADVOCATE',
    title: 'Partner',
    pendidikan: [
      'S1 Fakultas Hukum STIH Gunung Jati',
      'S2 Fakultas Hukum Universitas Muhammadiyah Tangerang (studi)'
    ],
    pengalaman:
      'Menyelesaikan berbagai permasalahan hukum baik perdata, pidana, kepailitan, ketenagakerjaan, dan lain-lain.',
    keahlian:
      'Perdata, arbitrase, pidana, perlindungan konsumen dan hukum ketenagakerjaan.',
    organisasi: 'PERADI PROFESIONAL',
    sertifikat: []
  }
];


function App() {
  return (
    <main>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="navbar">

        <a className="logo" href="#beranda">

          <img
            src="/.logo-tam-partners-transparent.png"
            alt="TAM & PARTNERS"
            className="logoImage"
          />

        </a>


        <div className="navLinks">

          <a
            className="active"
            href="#beranda"
          >
            Beranda
          </a>

          <a href="#tentang">
            Tentang
          </a>

          <a href="#layanan">
            Layanan
          </a>

          <a href="#tim">
            Tim
          </a>

          <a href="#kontak">
            Kontak
          </a>

        </div>


        <a
          className="navButton"
          href="#kontak"
        >
          Konsultasi

          <span>
            →
          </span>

        </a>

      </nav>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="hero"
        id="beranda"
      >

        <div className="heroCurve heroCurveTop"></div>

        <div className="heroCurve heroCurveBottom"></div>

        <div className="heroDots"></div>

        <div className="heroLeaves">

          <span></span>
          <span></span>
          <span></span>
          <span></span>

        </div>


        <div className="justiceWatermark">
          ⚖
        </div>


        <div className="heroContent">

          <p className="label">
            SOLUSI HUKUM · KEPASTIAN MASA DEPAN
          </p>


          <h1>

            Partner Hukum

            <br />

            untuk Setiap

            <br />

            Keputusan{' '}

            <em>
              Penting.
            </em>

          </h1>


          <p className="heroText">

            TAM & PARTNERS memberikan layanan hukum yang
            profesional, strategis, dan berintegritas bagi
            individu maupun perusahaan.

          </p>


          <div className="heroButtons">

            <a
              className="button primaryButton"
              href="#kontak"
            >

              Konsultasi Sekarang

              <span>
                →
              </span>

            </a>


            <a
              className="textButton"
              href="#tentang"
            >

              Pelajari Lebih Lanjut

              <span>
                →
              </span>

            </a>

          </div>

        </div>


        <div className="heroStats">

          <div className="stat">

            <strong>
              2024
            </strong>

            <span>
              TAHUN
              <br />
              BERDIRI
            </span>

          </div>


          <div className="stat">

            <strong>
              07
            </strong>

            <span>
              LEGAL
              <br />
              PROFESSIONALS
            </span>

          </div>


          <div className="stat">

            <strong>
              08
            </strong>

            <span>
              AREA
              <br />
              PRAKTIK
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        className="about section"
        id="tentang"
      >

        <div className="aboutGrid">


          <div className="aboutHeading">

            <p className="sectionLabel">
              TENTANG KAMI
            </p>

            <h2>

              Lebih dari Sekadar
              <br />

              Layanan{' '}

              <em>
                Hukum.
              </em>

            </h2>

          </div>


          <div className="aboutText">

            <p>

              TAM & PARTNERS adalah Kantor Hukum Advokat /
              Pengacara Profesional yang memiliki pemahaman
              hukum mumpuni dan sebagai praktisi hukum yang
              ahli dalam bidangnya.

            </p>


            <p>

              TAM & PARTNERS bergerak dalam bidang pelayanan
              jasa hukum baik secara individual maupun
              korporasi / perusahaan, baik pelayanan jasa
              hukum litigasi ataupun non litigasi, maupun
              berupa legal opinion terhadap masalah hukum
              ataupun potensi masalah hukum yang akan timbul.

            </p>


            <p>

              Kami dapat memberikan win-win solution terbaik
              terhadap permasalahan hukum yang tengah
              dihadapi serta menyediakan produk hukum yang
              berkualitas dan profesional.

            </p>


            <div className="aboutLine"></div>


            <span className="aboutQuote">

              "Integrity. Expertise. Results."

            </span>

          </div>


          <div className="officeImage">

            <div className="officeDecoration"></div>


            <div className="officeOverlay">

              <strong>
                TAM & PARTNERS
              </strong>

              <span>
                ADVOCATES & CONSULTANT
              </span>

            </div>

          </div>

        </div>


        {/* =====================================================
            COMPANY INFORMATION
        ===================================================== */}

        <div className="companyInfo">

          <div className="companyMeta">

            <div className="companyMetaItem">

              <span>
                ESTABLISHED
              </span>

              <strong>
                01 JULI 2024
              </strong>

            </div>


            <div className="companyMetaItem">

              <span>
                LEGALITAS
              </span>

              <strong>
                AHU-0001571-AH.01.18
                <br />
                Tahun 2026
              </strong>

            </div>

          </div>


          <div className="companyProfile">

            <span className="companyProfileLabel">
              COMPANY PROFILE
            </span>


            <p>

              TAM & PARTNERS pertama kali berdiri pada tanggal
              01 Juli 2024 di Kabupaten Tangerang, Provinsi Banten
              dengan tujuh pendiri yaitu Dani Mulya Tasdik,
              Ahmad Purmadi, Erlanda Novriadi, Gun Catur Ari Wibowo,
              Rohmattulloh, Titis Mubarokh, dan Jejen Mustopa.

            </p>


            <p>

              Menangani berbagai kasus penting baik kasus perdata
              maupun pidana skala nasional dengan berbekal
              profesionalisme, etos kerja serta jaringan yang
              kuat dan luas.

            </p>


            <p>

              Dalam waktu yang singkat kami berinovasi dan
              berkomitmen sehingga mendapatkan reputasi yang baik.

            </p>

          </div>


          {/* =====================================================
              VISION & MISSION
          ===================================================== */}

          <div className="visionMission">


            <div className="visionBox">

              <span className="visionNumber">
                01
              </span>


              <div>

                <span className="visionLabel">
                  OUR VISION
                </span>

                <h3>
                  Visi
                </h3>

                <p>

                  Menjadi kantor hukum terpercaya yang memberikan
                  solusi komprehensif dan strategis bagi klien,
                  dengan menjunjung tinggi keadilan dan
                  profesionalisme.

                </p>

              </div>

            </div>


            <div className="missionBox">

              <span className="visionNumber">
                02
              </span>


              <div>

                <span className="visionLabel">
                  OUR MISSION
                </span>

                <h3>
                  Misi
                </h3>


                <div className="missionList">


                  <div>

                    <span>
                      01
                    </span>

                    <p>
                      Memberikan pelayanan hukum yang cepat,
                      tepat, dan akurat.
                    </p>

                  </div>


                  <div>

                    <span>
                      02
                    </span>

                    <p>
                      Menjunjung tinggi integritas dan etika
                      profesi advokat.
                    </p>

                  </div>


                  <div>

                    <span>
                      03
                    </span>

                    <p>
                      Memberikan perlindungan hukum terbaik
                      bagi kepentingan klien.
                    </p>

                  </div>


                  <div>

                    <span>
                      04
                    </span>

                    <p>
                      Membangun hubungan jangka panjang dengan
                      klien melalui pelayanan berbasis kepercayaan.
                    </p>

                  </div>


                  <div>

                    <span>
                      05
                    </span>

                    <p>
                      Mengembangkan sumber daya manusia hukum
                      yang professional dan berdaya saing global.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        className="services section"
        id="layanan"
      >

        <div className="sectionHeader">

          <p className="sectionLabel">
            LAYANAN KAMI
          </p>

          <h2>

            Area{' '}

            <em>
              Praktik
            </em>

          </h2>

          <p>

            Pendampingan hukum yang dirancang untuk
            menjawab berbagai kebutuhan individu maupun
            perusahaan.

          </p>

        </div>


        <div className="serviceGrid">

          {layanan.map((item) => (

            <article
              className="serviceCard"
              key={item.nomor}
            >

              <span className="serviceNumber">
                {item.nomor}
              </span>


              <div className="serviceContent">

                <h3>
                  {item.nama}
                </h3>

                <p>
                  {item.deskripsi}
                </p>

              </div>


              <span className="serviceArrow">
                ↗
              </span>

            </article>

          ))}

        </div>


        {/* =====================================================
            CORPORATE RETAINER
        ===================================================== */}

        <div className="retainerSection">


          <div className="retainerHeader">

            <div className="retainerHeadingTop">

              <p className="sectionLabel">
                CORPORATE RETAINER
              </p>

              <span className="retainerGoldLine"></span>

            </div>


            <h3>

              Pendampingan Hukum
              <br />

              <em>
                untuk Bisnis Anda.
              </em>

            </h3>


            <p>

              Pilihan paket pendampingan hukum yang dirancang
              untuk mendukung kebutuhan legal perusahaan secara
              berkelanjutan.

            </p>

          </div>


          <div className="retainerGrid">

            {paketRetainer.map((paket) => (

              <article
                className={`retainerCard ${
                  paket.nama === 'PLATINUM'
                    ? 'retainerPlatinum'
                    : ''
                }`}
                key={paket.nama}
              >


                <div className="retainerTop">

                  <div className="retainerIdentity">

                    <span className="retainerNumber">
                      {paket.nomor}
                    </span>

                    <span className="retainerSmall">
                      CORPORATE RETAINER
                    </span>

                  </div>


                  {paket.nama === 'PLATINUM' && (

                    <span className="retainerFeatured">

                      <span>
                        ♛
                      </span>

                      FEATURED

                    </span>

                  )}

                </div>


                <div className="retainerName">

                  <h3>
                    {paket.nama}
                  </h3>

                  <span className="retainerTitleLine"></span>

                </div>


                <p className="retainerDescription">

                  {paket.deskripsi}

                </p>


                <div className="retainerDivider"></div>


                <span className="retainerIncludes">
                  PACKAGE INCLUDES
                </span>


                <ul className="retainerList">

                  {paket.layanan.map((item, index) => (

                    <li key={index}>

                      <span className="retainerCheck">
                        ✓
                      </span>

                      <span>
                        {item}
                      </span>

                    </li>

                  ))}

                </ul>


                <a
                  href="#kontak"
                  className="retainerButton"
                >

                  <span>
                    KONSULTASI PAKET
                  </span>

                  <strong>
                    →
                  </strong>

                </a>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LAWYERS
      ===================================================== */}

      <section
        className="lawyers section"
        id="tim"
      >

        <div className="sectionHeader">

          <p className="sectionLabel">
            OUR LAWYERS
          </p>

          <h2>

            Bertemu dengan
            <br />

            <em>
              Tim Hukum Kami.
            </em>

          </h2>

          <p>

            Profesional hukum yang berdedikasi untuk
            memberikan pendampingan, strategi, dan solusi
            hukum bagi setiap klien.

          </p>

        </div>


        <div className="lawyerGrid">

          {lawyers.map((lawyer) => (

            <article
              className="lawyerCard"
              key={lawyer.nama}
            >

<div className="lawyerPhoto">

  <img
  src={lawyer.foto}
  alt={lawyer.nama}
  className={`lawyerActualPhoto ${lawyer.photoClass || ''}`}
/>


  <div className="lawyerPhotoPattern"></div>

  <div className="lawyerRole">
    {lawyer.role}
  </div>

</div>


              <div className="lawyerInfo">

                <p className="lawyerPosition">
                  {lawyer.jabatan}
                </p>


                <h3>
                  {lawyer.nama}
                </h3>


                <p className="lawyerTitle">
                  {lawyer.title}
                </p>


                <p className="lawyerDescription">

                  <strong>
                    Pendidikan
                  </strong>

                  <br />

                  {lawyer.pendidikan.map((item, index) => (
                    <span key={index}>
                      {item}
                      <br />
                    </span>
                  ))}

                  <br />

                  <strong>
                    Pengalaman
                  </strong>

                  <br />

                  {lawyer.pengalaman}

                  <br />
                  <br />

                  <strong>
                    Bidang Keahlian
                  </strong>

                  <br />

                  {lawyer.keahlian}

                  <br />
                  <br />

                  <strong>
                    Organisasi Profesi
                  </strong>

                  <br />

                  {lawyer.organisasi}


                  {lawyer.sertifikat.length > 0 && (

                    <>

                      <br />
                      <br />

                      <strong>
                        Sertifikat / Penghargaan
                      </strong>

                      <br />

                      {lawyer.sertifikat.map((item, index) => (
                        <span key={index}>
                          {item}
                          <br />
                        </span>
                      ))}

                    </>

                  )}

                </p>


                <a
                  href="#kontak"
                  className="lawyerLink"
                >

                  Konsultasi

                  <span>
                    →
                  </span>

                </a>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        className="contact"
        id="kontak"
      >

        <div className="contactCurve"></div>

        <div className="contactInner">

          <p className="sectionLabel">
            HUBUNGI KAMI
          </p>


          <h2>

            Mari Diskusikan
            <br />

            Kebutuhan{' '}

            <em>
              Hukum Anda.
            </em>

          </h2>


          <p className="contactDescription">

            Kami siap membantu memberikan solusi hukum
            yang tepat sesuai dengan kebutuhan Anda.

          </p>


          <div className="contactDetails">


            <div>

              <span>
                TELEPON / WHATSAPP
              </span>

              <strong>
                0812-2345-4177
              </strong>

            </div>
            <div>

  <span>
    INSTAGRAM
  </span>

  <a
    href="https://instagram.com/tam_partners"
    target="_blank"
    rel="noreferrer"
    className="contactInstagram"
  >
    @tam_partners
    <span>↗</span>
  </a>

</div>

            <div>

              <span>
                EMAIL
              </span>

              <strong>
                office@tamandpartners.org
              </strong>

              <strong>
                lawofficetampartners@gmail.com
              </strong>

            </div>


            <div>

              <span>
                ALAMAT
              </span>

              <strong>

                Jl. Raya Serang KM.16,8
                <br />

                Kel. Sukamulya, Kec. Cikupa
                <br />

                Kab. Tangerang – Banten 15710

              </strong>

            </div>

          </div>


          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap'
            }}
          >

            <a
              className="button primaryButton"
              href="https://wa.me/6281223454177"
              target="_blank"
              rel="noreferrer"
            >

              Hubungi via WhatsApp

              <span>
                →
              </span>

            </a>


            <a
              className="button"
              href="https://maps.app.goo.gl/k9LT4jgyanb6rm8J9?g_st=ac"
              target="_blank"
              rel="noreferrer"
              style={{
                border: '1px solid rgba(255,255,255,0.5)',
                color: '#ffffff'
              }}
            >

              Lihat Google Maps

              <span>
                ↗
              </span>

            </a>

          </div>


          <p
            style={{
              marginTop: '30px',
              color: '#91a8c2',
              fontSize: '11px',
              lineHeight: '1.7'
            }}
          >

            Jam Operasional: 08.00 s/d 17.00 WIB

          </p>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>

        <div className="footerBrand">

          <strong>
            TAM & PARTNERS
          </strong>

          <span>
            ADVOCATES & CONSULTANT
          </span>

        </div>


        <p>

          © 2026 TamAndPartners.
          All rights reserved.

        </p>

      </footer>
      <div className="footerSocial">

  <a
    href="https://instagram.com/tam_partners"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram TAM & PARTNERS"
  >
    Instagram ↗
  </a>

</div>

    </main>
  )
}

export default App
export type User = {
  username: string
  displayName: string
  avatar: string
  avatarUrl: string
  verified: boolean
  bio?: string
  website?: string
  followers?: string
  following?: string
  posts?: string
}

export type Story = {
  id: string
  user: User
  seen: boolean
}

export type Comment = {
  username: string
  text: string
  likes: number
}

export type Post = {
  id: string
  user: User
  imageUrl: string
  caption: string
  likes: number
  comments: Comment[]
  totalComments: number
  saves: number
  time: string
  budgetTag?: string
}

export type SuggestedUser = User & {
  reason: string
}

export type InstitutionProfile = {
  slug: string
  user: User
  description: string
  website: string
  stats: { label: string; value: string }[]
  gallery: {
    id: string
    title: string
    imageUrl: string
    likes: number
    comments: number
  }[]
  related: { username: string; displayName: string; avatar: string }[]
}

const picsum = (id: number, width: number, height: number) =>
  `https://picsum.photos/id/${id}/${width}/${height}`

const pravatar = (seed: string) => `https://i.pravatar.cc/150?u=${seed}`

export const currentUser: User = {
  username: "budi.santoso",
  displayName: "Budi Santoso",
  avatar: "BS",
  avatarUrl: pravatar("4d8f9f59-0fc5-4587-987a-52ef1b7c4f2c"),
  verified: false,
}

export const stories: Story[] = [
  {
    id: "s1",
    user: {
      username: "kemenkeu_ri",
      displayName: "Kemenkeu RI",
      avatar: "KR",
      avatarUrl: pravatar("3331238e-7b8f-46cb-b621-b5652b7fd5d3"),
      verified: true,
    },
    seen: false,
  },
  {
    id: "s2",
    user: {
      username: "pupr_ri",
      displayName: "Kemen PUPR",
      avatar: "PU",
      avatarUrl: pravatar("49b21ef1-c55f-4f40-80da-c3a93698a1f0"),
      verified: true,
    },
    seen: false,
  },
  {
    id: "s3",
    user: {
      username: "kemendikbud",
      displayName: "Kemendikbud",
      avatar: "KD",
      avatarUrl: pravatar("4ed4f7a2-f617-47ed-b7f1-76d45bd34f2c"),
      verified: true,
    },
    seen: true,
  },
  {
    id: "s4",
    user: {
      username: "kemenkes_ri",
      displayName: "Kemenkes RI",
      avatar: "KS",
      avatarUrl: pravatar("57aafca0-29c4-498d-84ef-d9eb1b17d4a8"),
      verified: true,
    },
    seen: false,
  },
  {
    id: "s5",
    user: {
      username: "bappenas_ri",
      displayName: "Bappenas",
      avatar: "BP",
      avatarUrl: pravatar("baf2b261-cf1e-4b05-b12e-78ad7214061e"),
      verified: true,
    },
    seen: true,
  },
  {
    id: "s6",
    user: {
      username: "dinsos_jkt",
      displayName: "Dinsos DKI",
      avatar: "DJ",
      avatarUrl: pravatar("3e942dad-6107-4c6c-8621-fa5b0eb3ec05"),
      verified: false,
    },
    seen: false,
  },
  {
    id: "s7",
    user: {
      username: "bpk_ri",
      displayName: "BPK RI",
      avatar: "BK",
      avatarUrl: pravatar("4f6e8bd6-5f25-465b-9508-3cc4ff35703b"),
      verified: true,
    },
    seen: true,
  },
]

export const feedPosts: Post[] = [
  {
    id: "p1",
    user: {
      username: "pupr_ri",
      displayName: "Kemen PUPR",
      avatar: "PU",
      avatarUrl: pravatar("49b21ef1-c55f-4f40-80da-c3a93698a1f0"),
      verified: true,
    },
    imageUrl: picsum(1011, 900, 900),
    caption:
      "Progres pembangunan Jembatan Suku A di IKN. Serapan anggaran 85% tetapi realisasi fisik baru 45%. Selisih ini perlu diinvestigasi lebih lanjut. #APBN2024 #Infrastruktur #SocialGov",
    likes: 1842,
    comments: [
      {
        username: "warga_ikn",
        text: "Di lapangan memang belum kelihatan progres signifikan",
        likes: 24,
      },
      {
        username: "pengamat_apbn",
        text: "Serapan tinggi tapi fisik rendah, red flag klasik",
        likes: 58,
      },
    ],
    totalComments: 142,
    saves: 318,
    time: "2 jam",
    budgetTag: "Rp15,2 Miliar",
  },
  {
    id: "p2",
    user: {
      username: "kemendikbud",
      displayName: "Kemendikbud",
      avatar: "KD",
      avatarUrl: pravatar("4ed4f7a2-f617-47ed-b7f1-76d45bd34f2c"),
      verified: true,
    },
    imageUrl: picsum(1015, 900, 900),
    caption:
      "Rehabilitasi 12 SD Negeri di Jawa Barat selesai tepat waktu. Laporan masyarakat mengonfirmasi kualitas bangunan sesuai spesifikasi teknis. Terima kasih atas partisipasi warga! #Pendidikan #Verified",
    likes: 3204,
    comments: [
      {
        username: "guru_jabar",
        text: "Alhamdulillah sekolah kami sudah layak lagi 🙏",
        likes: 112,
      },
      { username: "kepsek_bandung", text: "Proses cepat dan transparan. Apresiasi!", likes: 45 },
    ],
    totalComments: 86,
    saves: 264,
    time: "5 jam",
    budgetTag: "Rp4,8 Miliar",
  },
  {
    id: "p3",
    user: {
      username: "dinsos_jkt",
      displayName: "Dinsos DKI Jakarta",
      avatar: "DJ",
      avatarUrl: pravatar("3e942dad-6107-4c6c-8621-fa5b0eb3ec05"),
      verified: false,
    },
    imageUrl: picsum(1025, 900, 900),
    caption:
      "Update distribusi Bantuan Sosial Tunai bulan ini. Data penerima sedang diverifikasi ulang bersama RT/RW setempat. Mohon kesabaran warga. #Bansos #Jakarta",
    likes: 956,
    comments: [{ username: "warga_jaksel", text: "Semoga kali ini tepat sasaran", likes: 31 }],
    totalComments: 204,
    saves: 190,
    time: "7 jam",
    budgetTag: "Rp96,8 Miliar",
  },
  {
    id: "p4",
    user: {
      username: "kemenkeu_ri",
      displayName: "Kemenkeu RI",
      avatar: "KR",
      avatarUrl: pravatar("3331238e-7b8f-46cb-b621-b5652b7fd5d3"),
      verified: true,
    },
    imageUrl: picsum(1035, 900, 900),
    caption:
      "Realisasi APBN semester I mencapai 48,2% dari pagu. Belanja infrastruktur dan pendidikan menjadi penggerak utama. Data lengkap tersedia di portal transparansi. #APBN #Transparansi",
    likes: 5621,
    comments: [
      { username: "ekonom_id", text: "Serapan cukup baik untuk semester pertama", likes: 89 },
      {
        username: "pengamat_apbn",
        text: "Perlu dilihat juga kualitas belanjanya, bukan hanya kuantitas",
        likes: 134,
      },
    ],
    totalComments: 312,
    saves: 487,
    time: "12 jam",
    budgetTag: "Rp1.200 Triliun",
  },
  {
    id: "p5",
    user: {
      username: "kemenkes_ri",
      displayName: "Kemenkes RI",
      avatar: "KS",
      avatarUrl: pravatar("57aafca0-29c4-498d-84ef-d9eb1b17d4a8"),
      verified: true,
    },
    imageUrl: picsum(1043, 900, 900),
    caption:
      "Pembangunan 45 Puskesmas baru di daerah terpencil. Progres 72%, sesuai jadwal. Akses kesehatan dasar untuk semua. #Kesehatan #APBN2024",
    likes: 2890,
    comments: [
      { username: "dokter_pedalaman", text: "Sangat ditunggu oleh masyarakat di sini!", likes: 67 },
    ],
    totalComments: 98,
    saves: 156,
    time: "1 hari",
    budgetTag: "Rp2,1 Triliun",
  },
]

export const suggestedUsers: SuggestedUser[] = [
  {
    username: "bappenas_ri",
    displayName: "Bappenas RI",
    avatar: "BP",
    avatarUrl: pravatar("baf2b261-cf1e-4b05-b12e-78ad7214061e"),
    verified: true,
    reason: "Followed by kemenkeu_ri",
  },
  {
    username: "bpk_ri",
    displayName: "BPK RI",
    avatar: "BK",
    avatarUrl: pravatar("4f6e8bd6-5f25-465b-9508-3cc4ff35703b"),
    verified: true,
    reason: "Suggested for you",
  },
  {
    username: "kpk_ri",
    displayName: "KPK RI",
    avatar: "KP",
    avatarUrl: pravatar("a719a63b-ec50-49d9-91ec-98613cd8a504"),
    verified: true,
    reason: "Followed by pupr_ri",
  },
  {
    username: "dpr_ri",
    displayName: "DPR RI",
    avatar: "DR",
    avatarUrl: pravatar("b65fa1ec-20db-4eb7-bc0b-c40440a4ecfd"),
    verified: true,
    reason: "Popular in your area",
  },
  {
    username: "ombudsman_ri",
    displayName: "Ombudsman RI",
    avatar: "OR",
    avatarUrl: pravatar("dd7b4d76-ea95-4c64-bf59-cd84e4cd4e89"),
    verified: true,
    reason: "Suggested for you",
  },
]

export const institutions: InstitutionProfile[] = [
  {
    slug: "pupr",
    user: {
      username: "pupr_ri",
      displayName: "Kemen PUPR",
      avatar: "PU",
      avatarUrl: pravatar("49b21ef1-c55f-4f40-80da-c3a93698a1f0"),
      verified: true,
      followers: "245K",
      following: "12",
      posts: "1,204",
    },
    description:
      "Kementerian Pekerjaan Umum dan Perumahan Rakyat Republik Indonesia. Membangun infrastruktur negeri. 🏗️ Transparansi adalah prioritas kami.",
    website: "pu.go.id",
    stats: [
      { label: "posts", value: "1,204" },
      { label: "followers", value: "245K" },
      { label: "following", value: "12" },
    ],
    gallery: [
      {
        id: "g1",
        title: "Jembatan Suku A",
        imageUrl: picsum(1050, 700, 700),
        likes: 1842,
        comments: 142,
      },
      {
        id: "g2",
        title: "Pengaspalan Jalan",
        imageUrl: picsum(1057, 700, 700),
        likes: 654,
        comments: 43,
      },
      {
        id: "g3",
        title: "Bendungan Baru",
        imageUrl: picsum(106, 700, 700),
        likes: 2103,
        comments: 89,
      },
      {
        id: "g4",
        title: "Rusun Publik",
        imageUrl: picsum(1069, 700, 700),
        likes: 987,
        comments: 56,
      },
      {
        id: "g5",
        title: "Irigasi",
        imageUrl: picsum(1074, 700, 700),
        likes: 432,
        comments: 21,
      },
      {
        id: "g6",
        title: "Laporan Keuangan Q3",
        imageUrl: picsum(1080, 700, 700),
        likes: 1567,
        comments: 203,
      },
      {
        id: "g7",
        title: "Tol Trans Jawa",
        imageUrl: picsum(1084, 700, 700),
        likes: 3421,
        comments: 178,
      },
      {
        id: "g8",
        title: "Waduk Cirata",
        imageUrl: picsum(1081, 700, 700),
        likes: 876,
        comments: 34,
      },
      {
        id: "g9",
        title: "Perumahan Rakyat",
        imageUrl: picsum(1082, 700, 700),
        likes: 1234,
        comments: 67,
      },
    ],
    related: [
      { username: "bappenas_ri", displayName: "Bappenas RI", avatar: "BP" },
      { username: "kemenkeu_ri", displayName: "Kemenkeu RI", avatar: "KR" },
    ],
  },
  {
    slug: "kemenkeu",
    user: {
      username: "kemenkeu_ri",
      displayName: "Kemenkeu RI",
      avatar: "KR",
      avatarUrl: pravatar("3331238e-7b8f-46cb-b621-b5652b7fd5d3"),
      verified: true,
      followers: "512K",
      following: "8",
      posts: "2,891",
    },
    description:
      "Kementerian Keuangan Republik Indonesia. Portal transparansi APBN untuk seluruh rakyat Indonesia. 📊",
    website: "kemenkeu.go.id",
    stats: [
      { label: "posts", value: "2,891" },
      { label: "followers", value: "512K" },
      { label: "following", value: "8" },
    ],
    gallery: [
      {
        id: "g1",
        title: "Realisasi APBN",
        imageUrl: picsum(1083, 700, 700),
        likes: 5621,
        comments: 312,
      },
      {
        id: "g2",
        title: "Tax Revenue",
        imageUrl: picsum(1084, 700, 700),
        likes: 2345,
        comments: 156,
      },
      {
        id: "g3",
        title: "Subsidi Energi",
        imageUrl: picsum(1081, 700, 700),
        likes: 4567,
        comments: 234,
      },
      {
        id: "g4",
        title: "Belanja Pendidikan",
        imageUrl: picsum(1076, 700, 700),
        likes: 1890,
        comments: 98,
      },
      {
        id: "g5",
        title: "Debt Management",
        imageUrl: picsum(1077, 700, 700),
        likes: 3210,
        comments: 187,
      },
      {
        id: "g6",
        title: "Dana Desa",
        imageUrl: picsum(1078, 700, 700),
        likes: 2876,
        comments: 145,
      },
    ],
    related: [
      { username: "bappenas_ri", displayName: "Bappenas RI", avatar: "BP" },
      { username: "bpk_ri", displayName: "BPK RI", avatar: "BK" },
    ],
  },
  {
    slug: "kemendikbud",
    user: {
      username: "kemendikbud",
      displayName: "Kemendikbud",
      avatar: "KD",
      avatarUrl: pravatar("4ed4f7a2-f617-47ed-b7f1-76d45bd34f2c"),
      verified: true,
      followers: "189K",
      following: "15",
      posts: "876",
    },
    description:
      "Kementerian Pendidikan dan Kebudayaan. Memajukan pendidikan dan kebudayaan Indonesia. 📚",
    website: "kemdikbud.go.id",
    stats: [
      { label: "posts", value: "876" },
      { label: "followers", value: "189K" },
      { label: "following", value: "15" },
    ],
    gallery: [
      {
        id: "g1",
        title: "Rehabilitasi SD",
        imageUrl: picsum(1080, 700, 700),
        likes: 3204,
        comments: 86,
      },
      {
        id: "g2",
        title: "Laptop Siswa",
        imageUrl: picsum(1085, 700, 700),
        likes: 1456,
        comments: 234,
      },
      {
        id: "g3",
        title: "Beasiswa",
        imageUrl: picsum(1089, 700, 700),
        likes: 4532,
        comments: 167,
      },
      {
        id: "g4",
        title: "Lab Sekolah",
        imageUrl: picsum(109, 700, 700),
        likes: 876,
        comments: 45,
      },
      {
        id: "g5",
        title: "Kurikulum Baru",
        imageUrl: picsum(1090, 700, 700),
        likes: 2345,
        comments: 312,
      },
      {
        id: "g6",
        title: "Museum Nasional",
        imageUrl: picsum(110, 700, 700),
        likes: 1678,
        comments: 78,
      },
    ],
    related: [
      { username: "kemenkeu_ri", displayName: "Kemenkeu RI", avatar: "KR" },
      { username: "bappenas_ri", displayName: "Bappenas RI", avatar: "BP" },
    ],
  },
]

export const exploreGrid = [
  {
    id: "e1",
    imageUrl: picsum(111, 900, 1200),
    size: "large" as const,
    label: "Infrastruktur IKN",
  },
  {
    id: "e2",
    imageUrl: picsum(112, 900, 900),
    size: "small" as const,
    label: "Rehabilitasi Sekolah",
  },
  {
    id: "e3",
    imageUrl: picsum(119, 900, 900),
    size: "small" as const,
    label: "Realisasi APBN",
  },
  {
    id: "e4",
    imageUrl: picsum(122, 900, 900),
    size: "small" as const,
    label: "Subsidi Energi",
  },
  {
    id: "e5",
    imageUrl: picsum(133, 900, 900),
    size: "small" as const,
    label: "Dana Desa",
  },
  {
    id: "e6",
    imageUrl: picsum(136, 900, 1200),
    size: "large" as const,
    label: "Bantuan Sosial",
  },
  {
    id: "e7",
    imageUrl: picsum(141, 900, 900),
    size: "small" as const,
    label: "Kesehatan",
  },
  {
    id: "e8",
    imageUrl: picsum(142, 900, 900),
    size: "small" as const,
    label: "Transportasi",
  },
  {
    id: "e9",
    imageUrl: picsum(143, 900, 900),
    size: "small" as const,
    label: "Pengadaan Barang",
  },
  {
    id: "e10",
    imageUrl: picsum(152, 900, 900),
    size: "small" as const,
    label: "Belanja Pendidikan",
  },
  {
    id: "e11",
    imageUrl: picsum(155, 900, 1200),
    size: "large" as const,
    label: "Investigasi Khusus",
  },
  {
    id: "e12",
    imageUrl: picsum(160, 900, 900),
    size: "small" as const,
    label: "Air Bersih",
  },
]

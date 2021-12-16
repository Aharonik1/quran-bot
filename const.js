const commands = `
/start - Botni qayta ishga tushirish
/sura - Surani tanlash
/help - Yordam olish
`;

const suraFileIds = {
  surah_1: {
    title: "Al-Fatihah",
    alafasy:
      "CQACAgIAAxkBAAEPPOFhuh7YyqZP8yduF00c9lazHXkaSAACkR8AAlJE0UkZv66yF_7mwCME",
  },
  surah_2: {
    title: "Al-Baqarah",
    alafasy:
      "CQACAgIAAxkBAAEPPPFhuiGIXiwV30qCORUNXaoYGDUXAwACkx8AAlJE0UmOP9iEq8UWoCME",
  },
  surah_3: {
    title: "Al-Imran",
    alafasy:
      "CQACAgIAAxkBAAEPPPVhuiGw5ULTLdcVjxaRXO0NZLQwiAAClR8AAlJE0UnNlFAr2hVMNiME",
  },
  surah_4: {
    title: "An-Nisa'",
    alafasy:
      "CQACAgIAAxkBAAEPPPZhuiGwouWpM0fj6zpJ7yNf415wXwAClh8AAlJE0UneVGxH-rQYvSME",
  },
  surah_5: {
    title: "Al-Ma'idah",
    alafasy:
      "CQACAgIAAxkBAAEPPPdhuiGwHF9h9VZifnZtaVUCSOwWCgAClx8AAlJE0UmvL_XmFQJj8SME",
  },
  surah_6: {
    title: "Al-An'am",
    alafasy:
      "CQACAgIAAxkBAAEPPPhhuiGw-5umWVmyb9EOmMd72QGFCwACmR8AAlJE0UltbgQ9WHhjwiME",
  },
  surah_7: {
    title: "Al-A'raf",
    alafasy:
      "CQACAgIAAxkBAAEPPPlhuiGwQx5GqYSUunQB14UtL0xn1QACmh8AAlJE0UmoUHRMVxZq2SME",
  },
  surah_8: {
    title: "Al-Anfal",
    alafasy:
      "CQACAgIAAxkBAAEPPPphuiGwok9SjJR8EU1yjnjVeujPeQACmx8AAlJE0UkHDjFASCG-gyME",
  },
  surah_9: {
    title: "At-Taubah",
    alafasy:
      "CQACAgIAAxkBAAEPPPthuiGwB2EH0a2dmBj7gyb1_ewK6wACnB8AAlJE0Ulnu1nV-X53tiME",
  },
  surah_10: {
    title: "Yunus",
    alafasy:
      "CQACAgIAAxkBAAEPP7RhurCZnk1Y0Iem1JhEIw-jWAaOxQAC8h4AAlJE0UmwPql5popnVyME",
  },
  surah_11: {
    title: "Hood",
    alafasy:
      "CQACAgIAAxkBAAEPP7VhurCZECh63Ju2j4zhxsVf-2m3NwAC9B4AAlJE0UkW0h8xtQSUGiME",
  },
  surah_12: {
    title: "Yusuf",
    alafasy:
      "CQACAgIAAxkBAAEPP7ZhurCZE3LyyrhPIHmjEYZ3714DAQAC9R4AAlJE0UnOqyB7Q_zn1iME",
  },
  surah_13: {
    title: "Ar-Ra'd",
    alafasy:
      "CQACAgIAAxkBAAEPP7dhurCZIEX3IkP2Yyw34jghSWlsrwAC9x4AAlJE0Umz72ThuCVdRyME",
  },
  surah_14: {
    title: "Ibrahim",
    alafasy:
      "CQACAgIAAxkBAAEPP7hhurCZzUrx9JJCPHUmOfEex6d8NgAC-B4AAlJE0UnJYSem8QJ0hyME",
  },
  surah_15: {
    title: "Al-Hijr",
    alafasy:
      "CQACAgIAAxkBAAEPP7lhurCZIGE6f8rDbglYmmtpf6qXFgAC-R4AAlJE0UkutvpiVtWpDiME",
  },
  surah_16: {
    title: "An-Nahl",
    alafasy:
      "CQACAgIAAxkBAAEPP7phurCZaIBL_uGR1tr2mCuUdlXUIgAC-h4AAlJE0Um0SLVJnaxIkSME",
  },
  surah_17: {
    title: "Al-Isra",
    alafasy:
      "CQACAgIAAxkBAAEPP7thurCZsuYJ5b6YXlKXv_kM6dzg4QAC_h4AAlJE0UnjJHZmQiRXlSME",
  },
  surah_18: {
    title: "Al-Kahf",
    alafasy:
      "CQACAgIAAxkBAAEPP7xhurCZFjXK6_7wpsoPUiKhMfq00AACAR8AAlJE0UlvULADC8djiiME",
  },
  surah_19: {
    title: "Maryam",
    alafasy:
      "CQACAgIAAxkBAAEPP71hurCZ0Jnx4CAT1h6CAWWJQJ4CoQACAh8AAlJE0UnXDAABzEuZEB4jBA",
  },
  surah_20: {
    title: "To-Ha",
    alafasy:
      "CQACAgIAAxkBAAEPP95hurGjs3O8x5r-vTDbCW-MGiG9WgACqR4AAlJE0UmSXlMW712NyCME",
  },
  surah_21: {
    title: "Al-Anbiya",
    alafasy:
      "CQACAgIAAxkBAAEPP99hurGjGjx4MgO05ckAAV4VP2az0F0AAqoeAAJSRNFJM7SX0z6cROAjBA",
  },
  surah_22: {
    title: "Al-Hajj",
    alafasy:
      "CQACAgIAAxkBAAEPP-BhurGj0BLZrofkKhoVVd1v510zrgACrR4AAlJE0UnR7ZnmGc_FOCME",
  },
  surah_23: {
    title: "Al-Mu'minun",
    alafasy:
      "CQACAgIAAxkBAAEPP-FhurGjzuxpRw39b48EtcVVhDfsCgACrh4AAlJE0UnyNU_pdiElUCME",
  },
  surah_24: {
    title: "An-Nur",
    alafasy:
      "CQACAgIAAxkBAAEPP-JhurGjV_WU0nKcvA8eabH2wkFcJwACsx4AAlJE0UmdVUm47LQffiME",
  },
  surah_25: {
    title: "Al-Furqan",
    alafasy: "CQACAgIAAxkBAAEPP-NhurGj2xCFP_HayPd5uXrMeUFigwACtR4AAlJE0UnS_qC",
  },
  surah_26: {
    title: "Ash-Shu'ara'",
    alafasy:
      "CQACAgIAAxkBAAEPP-RhurGjiIfqGi2EyHTOH0DPNek2UgACuB4AAlJE0UmpK13xbaPqdCME",
  },
  surah_27: {
    title: "An-Naml",
    alafasy:
      "CQACAgIAAxkBAAEPP-VhurGjSIxqbkTTfE8qKVWIlxSsPwACux4AAlJE0UnlGxOXj9Cg",
  },
  surah_28: {
    title: "Al-Qasas",
    alafasy:
      "CQACAgIAAxkBAAEPP-ZhurGjhkdZYhlB5bA6Oc546qcDlgACvR4AAlJE0UnWwjk70ss-1SME",
  },
  surah_29: {
    title: "Al-'Ankabut",
    alafasy:
      "CQACAgIAAxkBAAEPP-dhurGjk11BdBKDHY41AAGTtQk25UsAAr8eAAJSRNFJiNpRPWLP3nMjBA",
  },
  surah_30: {
    title: "Ar-Room",
    alafasy:
      "CQACAgIAAxkBAAEPP9RhurGj9SuDzdke7K80su5-p1NS0AACih4AAlJE0UnzYQFI_lnnOyME",
  },
  surah_31: {
    title: "Luqman",
    alafasy:
      "CQACAgIAAxkBAAEPP9VhurGjpbCBEn9rY7apMsxS8reVfAACix4AAlJE0UmeBBVzSaoJpiME",
  },
  surah_32: {
    title: "As-Sajdah",
    alafasy:
      "CQACAgIAAxkBAAEPP9ZhurGjEAJh7jBLebeK2YIBRR-YbQACjB4AAlJE0Ukmg5sykM5zWCME",
  },
  surah_33: {
    title: "Al-Ahzab",
    alafasy:
      "CQACAgIAAxkBAAEPP9dhurGjtbYxufcIFkzuWrXYyiaCqAACjh4AAlJE0UmThCaHaDvZwSME",
  },
  surah_34: {
    title: "Saba'",
    alafasy:
      "CQACAgIAAxkBAAEPP9hhurGjFfEdgwkNqwcCk7rDyzoEtAACjx4AAlJE0UmAgVcRl2vA_CME",
  },
  surah_35: {
    title: "Fatir",
    alafasy:
      "CQACAgIAAxkBAAEPP9lhurGj6U3rgz6Naqb0WY1SpwxxqgACkB4AAlJE0Um9eDk7DsX2uSME",
  },
  surah_36: {
    title: "Ya-Sin",
    alafasy:
      "CQACAgIAAxkBAAEPP9phurGjaV6eP5vDbgAB_yiQZpuBwLwAApEeAAJSRNFJTkAWItoVsJsjBA",
  },
  surah_37: {
    title: "As-Saffat",
    alafasy:
      "CQACAgIAAxkBAAEPP9thurGj-fezDKWTgQTvzumBAXL1OgACkh4AAlJE0Ulabew816M_5CME",
  },
  surah_38: {
    title: "Sad",
    alafasy:
      "CQACAgIAAxkBAAEPP9xhurGj_hCiieMO5oM7jH737TCaQwACkx4AAlJE0UmX-pXZuFoxHiME",
  },
  surah_39: {
    title: "Az-Zumar",
    alafasy:
      "CQACAgIAAxkBAAEPP91hurGjO0En-Ubk6jK3JlRUijndvQAClR4AAlJE0Um3_04299VM5SME",
  },
  surah_40: {
    title: "Ghafir",
    alafasy:
      "CQACAgIAAxkBAAEPP8phurGjXDsYgTn2b3PgC95yxAlulAACaR4AAlJE0UkLHW5dgEYkliME",
  },
  surah_41: {
    title: "Fussilat",
    alafasy:
      "CQACAgIAAxkBAAEPP8thurGjzQogfWWrnrXNrr9y2f-rSgACax4AAlJE0Ukg-FcknEKsrCME",
  },
  surah_42: {
    title: "Ash-Shura",
    alafasy:
      "CQACAgIAAxkBAAEPP8xhurGjbhMvSSr3B8nmBARENx0ecwACbB4AAlJE0Ul4pG2ULl0JUCME",
  },
  surah_43: {
    title: "Az-Zukhruf",
    alafasy:
      "CQACAgIAAxkBAAEPP81hurGj4OyVvQu1yFTbEJcuGWAqEwACbR4AAlJE0UnEtdsNgN-K2SME",
  },
  surah_44: {
    title: "Ad-Dukhan",
    alafasy:
      "CQACAgIAAxkBAAEPP85hurGjsNETvHWkwZsQU67kdLkE2wACbx4AAlJE0UlH5Fp8L1NcHiME",
  },
  surah_45: {
    title: "Al-Jathiya",
    alafasy:
      "CQACAgIAAxkBAAEPP89hurGjmwnJUmHAVXy_IzJ6tUv_AwACcB4AAlJE0UnbQBb593LfRSME",
  },
  surah_46: {
    title: "Al-Ahqaf",
    alafasy:
      "CQACAgIAAxkBAAEPP9BhurGjeR7KjIF9b8ebDG-uzkFoMQACcR4AAlJE0Ulecogr1UX3qyME",
  },
  surah_47: {
    title: "Muhammad",
    alafasy:
      "CQACAgIAAxkBAAEPP9FhurGj7gXJO1Ub_h9hbSTKhbvMLQACch4AAlJE0UmF_AFT-_DUPCME",
  },
  surah_48: {
    title: "Al-Fath",
    alafasy:
      "CQACAgIAAxkBAAEPP9JhurGjg0ty8L31Mb1yBK-cUWxdXgACcx4AAlJE0UkROefXVC8xeiME",
  },
  surah_49: {
    title: "Al-Hujurat",
    alafasy:
      "CQACAgIAAxkBAAEPP9NhurGjctvbB5zJXqofL60Q0zvJ3QACdB4AAlJE0UmGlgcnPA_R-yME",
  },
  surah_50: {
    title: "Qaf",
    alafasy:
      "CQACAgIAAxkBAAEPQB1hurSaGKuFtd8UyyEJze711UHhyQACFx4AAlJE0Uk32gwnmbBfKyME",
  },
  surah_51: {
    title: "Az-Zariyat",
    alafasy:
      "CQACAgIAAxkBAAEPQB5hurSawT_u4tqWnjwZ3fnN4ErzfQACGB4AAlJE0Umdnz_QB-FsKyME",
  },
  surah_52: {
    title: "At-Tur",
    alafasy:
      "CQACAgIAAxkBAAEPQB9hurSaTsVpnfs18QvywS8cIAuuugACGh4AAlJE0UnuB0kYcwWWpyME",
  },
  surah_53: {
    title: "An-Najm",
    alafasy:
      "CQACAgIAAxkBAAEPQCBhurSahApUxVuPzD7k5ie_5DBFfQACHB4AAlJE0Uk7MsdJqoG27SME",
  },
  surah_54: {
    title: "Al-Qamar",
    alafasy:
      "CQACAgIAAxkBAAEPQCFhurSaa7bNI7VdbMpEOfKCl93-0gACHR4AAlJE0UkL43t2xP1sriME",
  },
  surah_55: {
    title: "Ar-Rahman",
    alafasy:
      "CQACAgIAAxkBAAEPQCJhurSakSPrauEkRZ9zRGd5KIXGAwACHh4AAlJE0Uly5oXTx_yD2CME",
  },
  surah_56: {
    title: "Al-Waqi'ah",
    alafasy:
      "CQACAgIAAxkBAAEPQCNhurSaRSCJCaKTQW2BiyK_9pSLwwACHx4AAlJE0UmUsw1aLfFQjiME",
  },
  surah_57: {
    title: "Al-Hadid",
    alafasy:
      "CQACAgIAAxkBAAEPQCRhurSaTDCl0JtASY8B5f8cKvx32AACIB4AAlJE0UlYaDdtPCLMYCME",
  },
  surah_58: {
    title: "Al-Mujadilah",
    alafasy:
      "CQACAgIAAxkBAAEPQCVhurSarsfzY0kzEeGJXUjEybwjWwACIh4AAlJE0UnXvAuzizLwqCME",
  },
  surah_59: {
    title: "Al-Hashr",
    alafasy:
      "CQACAgIAAxkBAAEPQCZhurSaSYQwZPdcaxesWDIAAXwquG0AAiQeAAJSRNFJkplMizye5N0jBA",
  },
  surah_60: {
    title: "Al-Mumtahinah",
    alafasy:
      "CQACAgIAAxkBAAEPQCdhurSaYzC78JOL_3cpdDXcuDFcTgACJR4AAlJE0UnLr1HyJAZVyCM",
  },
  surah_61: {
    title: "As-Saff",
    alafasy:
      "CQACAgIAAxkBAAEPQChhurSa3IZlDzns7AsWdLIHiWmeBQACKB4AAlJE0UkMrVgD2gKv2iME",
  },
  surah_62: {
    title: "Jumu'ah",
    alafasy:
      "CQACAgIAAxkBAAEPQClhurSaExpELZtA3W6RvK7AHnJIYwACKh4AAlJE0Uk2sYCeVuCQ1CME",
  },
  surah_63: {
    title: "Al-Munafiqun",
    alafasy:
      "CQACAgIAAxkBAAEPQCphurSa8IajHM6xV9A27e1MVQPEiwACLB4AAlJE0UncGLwwh_ZAeiME",
  },
  surah_64: {
    title: "At-Taghabun",
    alafasy:
      "CQACAgIAAxkBAAEPQCthurSaplZieer9bZBONSyX9ZjL1gACLh4AAlJE0UkapyixASACDSME",
  },
  surah_65: {
    title: "At-Talaq",
    alafasy:
      "CQACAgIAAxkBAAEPQCxhurSadb9pYMFTawr1lZywQrOkwwACMR4AAlJE0UkI6o940USH9iME",
  },
  surah_66: {
    title: "At-Tahrim",
    alafasy:
      "CQACAgIAAxkBAAEPQC1hurSa73GAtb0wMILBdt0HzYxuOAACMx4AAlJE0Unts9R6pg5X-CME",
  },
  surah_67: {
    title: "Al-Mulk",
    alafasy:
      "CQACAgIAAxkBAAEPQC5hurSa55euwyaBsvF10Aw5JZFaywACNh4AAlJE0UlDlpMpviD4jyME",
  },
  surah_68: {
    title: "Al-Qalam",
    alafasy:
      "CQACAgIAAxkBAAEPQC9hurSaeBLyL2pQ3wR2WVjWbFaMmQACOB4AAlJE0Uki358kZ5dYFiME",
  },
  surah_69: {
    title: "Al-Haqqah",
    alafasy:
      "CQACAgIAAxkBAAEPQDBhurSa2EcpBGC00o4kxdZy3bxdygACOx4AAlJE0UmaX-OkY1doiCME",
  },
  surah_70: {
    title: "Al-Ma'arij",
    alafasy:
      "CQACAgIAAxkBAAEPQDFhurSaRpS5oIi8oLjRjuv1NkT8dAACPB4AAlJE0UntlMpJ_Z-OKCME",
  },
  surah_71: {
    title: "Nooh",
    alafasy:
      "CQACAgIAAxkBAAEPQDJhurSa9gAB5HejwFSRsZfYxctjWaoAAj0eAAJSRNFJZh9Cx-Wc4-8jBA",
  },
  surah_72: {
    title: "Al-Jinn",
    alafasy:
      "CQACAgIAAxkBAAEPQDNhurSa2LXvIJ_3X5UJ6RoUkeac3AACPh4AAlJE0UmmIoxUwirvyiME",
  },
  surah_73: {
    title: "Al-Muzzammil",
    alafasy:
      "CQACAgIAAxkBAAEPQDRhurSaw9NFo-dvhni6Lv3CFbEmrQACPx4AAlJE0Uk-vQf1Dr089CME",
  },
  surah_74: {
    title: "Muddaththir",
    alafasy:
      "CQACAgIAAxkBAAEPQDVhurSaAAHC7DZJlAMhZvkrHw8f224AAkAeAAJSRNFJJhNTLw5_Vb4jBA",
  },
  surah_75: {
    title: "Al-Qiyamah",
    alafasy:
      "CQACAgIAAxkBAAEPQDZhurSatds3l_xMpv3BqzV6H5VMxQACQR4AAlJE0UlGfbvJjyxzZCME",
  },
  surah_76: {
    title: "Al-Insan",
    alafasy:
      "CQACAgIAAxkBAAEPQDdhurSaEapuu2MMKNtLbfmc0RUBDgACQh4AAlJE0UmV88v7FbsueyME",
  },
  surah_77: {
    title: "Al-Mursalat",
    alafasy:
      "CQACAgIAAxkBAAEPQDhhurSa8ZdpXgOTbzACpyTYAWZqegACQx4AAlJE0UmhdjldtVybjCME",
  },
  surah_78: {
    title: "An-Naba",
    alafasy:
      "CQACAgIAAxkBAAEPO9NhugR_-bvsmIXRnV58pdsbDCazQAAC3x0AAlJE0Uko8P8p1mpmuyME",
  },
  surah_79: {
    title: "An-Nazi'at",
    alafasy:
      "CQACAgIAAxkBAAEPO9dhugSuYhHiS60Z8rRQbgZr82P8GgAC4R0AAlJE0UknU86c-TdY5CME",
  },
  surah_80: {
    title: "'Abasa",
    alafasy:
      "CQACAgIAAxkBAAEPO9lhugTBQShYBvHutmQDJ4BW7U5a5gAC4h0AAlJE0UnSqvIdekKzOSME",
  },
  surah_81: {
    title: "At-Takwir",
    alafasy:
      "CQACAgIAAxkBAAEPO9thugU8eoSlHWvwjv6rnd-s8p9VOAAC5R0AAlJE0Unz8hS30CHQ4yME",
  },
  surah_82: {
    title: "Al-Infitar",
    alafasy:
      "CQACAgIAAxkBAAEPO9xhugU8nar1aYmga4eXuU1_wM5vBAAC5h0AAlJE0Um6jhiyjUYzUyME",
  },
  surah_83: {
    title: "Al-Mutaffifin",
    alafasy:
      "CQACAgIAAxkBAAEPO91hugU8QaOecT25m6-1srtay4-MrAAC6B0AAlJE0UlX0aINaH3NQSME",
  },
  surah_84: {
    title: "Al-Inshiqaq",
    alafasy:
      "CQACAgIAAxkBAAEPO95hugU87Le11KYdg-djcIt9SsfLSQAC6h0AAlJE0UneGenn6IwBeiME",
  },
  surah_85: {
    title: "Al-Buruj",
    alafasy:
      "CQACAgIAAxkBAAEPO99hugU87V5Fs5rULm0_0k0YKCM0ygAC7B0AAlJE0Ukf7tQPj3HtLCME",
  },
  surah_86: {
    title: "At-Tariq",
    alafasy:
      "CQACAgIAAxkBAAEPO-dhugWUiZ6uFotlCOKsH-TissqQKgAC7h0AAlJE0UlQuOBCUHSGTiME",
  },
  surah_87: {
    title: "Al-A'la",
    alafasy:
      "CQACAgIAAxkBAAEPO-hhugWUDRSFJeXuleMWKE56XNmeZAAC7x0AAlJE0UmRjsIMQdTTASME",
  },
  surah_88: {
    title: "Al-Ghashiyah",
    alafasy:
      "CQACAgIAAxkBAAEPO-lhugWUd5tqr9mf8cVV1QadmlFFfAAC8R0AAlJE0Ukhjawu8kxG1iME",
  },
  surah_89: {
    title: "Al-Fajr",
    alafasy:
      "CQACAgIAAxkBAAEPO-phugWU2iptUpdR6cVGO5ZBwIxiVQAC8h0AAlJE0Ulz5MJ_gtROhiME",
  },
  surah_90: {
    title: "Al-Balad",
    alafasy:
      "CQACAgIAAxkBAAEPO-thugWU9WdUSUuV8EbsQE2ygV_HlgAC9B0AAlJE0UkkTeiLJibLDiME",
  },
  surah_91: {
    title: "Ash-Shams",
    alafasy:
      "CQACAgIAAxkBAAEPO-xhugWUlwkJ2dxKjEpug9iYyAXhIAAC9h0AAlJE0Un3lsTVlKnMsCME",
  },
  surah_92: {
    title: "Al-Lail",
    alafasy:
      "CQACAgIAAxkBAAEPO-1hugWU3ZBEx-6tE_0GxJojl2FPBwAC9x0AAlJE0UnuTvsVNDusWSME",
  },
  surah_93: {
    title: "Ad-Duha",
    alafasy:
      "CQACAgIAAxkBAAEPO-5hugWU_tMUkaAiI4qk5i6K_KavzQAC-R0AAlJE0UkHm4MuzZT3MyME",
  },
  surah_94: {
    title: "Ash-Sharh",
    alafasy:
      "CQACAgIAAxkBAAEPO-9hugWUssULAxs2Q5me5kJHloA8_AAC-h0AAlJE0UkAAWuL1QrvxD8jBA",
  },
  surah_95: {
    title: "At-Tin",
    alafasy:
      "CQACAgIAAxkBAAEPO_BhugWUd1tqoS8OjqSxPAUICvJmmwAC_B0AAlJE0Ul6QdSzZad1UyME",
  },
  surah_96: {
    title: "Al-'Alaq",
    alafasy:
      "CQACAgIAAxkBAAEPO_1hugY4ekDI_u6S2J8Ypy3fZKqB7QAC_R0AAlJE0UlTG9fFKqIJmCME",
  },
  surah_97: {
    title: "Al-Qadr",
    alafasy:
      "CQACAgIAAxkBAAEPO_5hugY4hN2Q2I8o7b9ZydiBVKLs0wAC_x0AAlJE0Unb69NoemWxqSME",
  },
  surah_98: {
    title: "Al-Baiyinah",
    alafasy:
      "CQACAgIAAxkBAAEPO_9hugY4KcJPj3HuERCnUJcoTaYrhgADHgACUkTRSTZWAj0GXUZDIwQ",
  },
  surah_99: {
    title: "Az-Zalzalah",
    alafasy:
      "CQACAgIAAxkBAAEPPAABYboGONGDWVjK1SZwzvCeRoOmYQ4AAgEeAAJSRNFJzGdE1-n0HV4jBA",
  },
  surah_100: {
    title: "Al-'Adiyat",
    alafasy:
      "CQACAgIAAxkBAAEPPAFhugY4cTHm6b781lrM04k83nL6BwACAx4AAlJE0Um5apR9oKQhsyME",
  },
  surah_101: {
    title: "Al-Qari'ah",
    alafasy:
      "CQACAgIAAxkBAAEPPAJhugY4mVxzf1RnGo7jVpaCePVLOAACBB4AAlJE0UkYKStGqQ2s_SME",
  },
  surah_102: {
    title: "At-Takathur",
    alafasy:
      "CQACAgIAAxkBAAEPPANhugY4z4F6fqPXiNaN3NnQbh7BuwACBR4AAlJE0UkjOieWjllE1CME",
  },
  surah_103: {
    title: "Al-'Asr",
    alafasy:
      "CQACAgIAAxkBAAEPPARhugY4vORYO4oeUzHu9JSLE-tW4QACBh4AAlJE0UmJ4abpShF8tyME",
  },
  surah_104: {
    title: "Al-Humazah",
    alafasy:
      "CQACAgIAAxkBAAEPPAVhugY4PAABpj5mOdKfWPV3b-GRb1MAAgceAAJSRNFJxBqq_po4gLQjBA",
  },
  surah_105: {
    title: "Al-Fil",
    alafasy:
      "CQACAgIAAxkBAAEPPAZhugY4zajc1GMthedZ6NnyP0gsSAACCR4AAlJE0Un33U3tDw5pRiME",
  },
  surah_106: {
    title: "Quraish",
    alafasy:
      "CQACAgIAAxkBAAEPPAdhugY4hkZmRw7cSicUEu0osAI58gACCh4AAlJE0UmcqOSKe246cCME",
  },
  surah_107: {
    title: "Al-Ma'un",
    alafasy:
      "CQACAgIAAxkBAAEPPAhhugY4mKuQb0Q7h9wkc8ITfKAc4gACCx4AAlJE0UmW71bW81QB3CME",
  },
  surah_108: {
    title: "Al-Kauthar",
    alafasy:
      "CQACAgIAAxkBAAEPPAlhugY4-p_Zz113T7cHulhYt5XHPQACDB4AAlJE0Un3EgM8ltwfAyME",
  },
  surah_109: {
    title: "Al-Kafirun",
    alafasy:
      "CQACAgIAAxkBAAEPPAphugY4bCp9e09ClcLbeohobQHyJgACDR4AAlJE0UnnD_P0Rpkz4SME",
  },
  surah_110: {
    title: "An-Nasr",
    alafasy:
      "CQACAgIAAxkBAAEPPAthugY4MvlFqY2ZFRpF-d3LlgnLqwACDx4AAlJE0Ul3-CUlpG348SME",
  },
  surah_111: {
    title: "Al-Masad",
    alafasy:
      "CQACAgIAAxkBAAEPPAxhugY4VO9hkghEh3bXN0uDqYKjRQACEB4AAlJE0UncXAWNZ55YzyME",
  },
  surah_112: {
    title: "Al-Ikhlas",
    alafasy:
      "CQACAgIAAxkBAAEPPA1hugY4nymrgiTGSz4K57LVI5C6hwACER4AAlJE0UkY-rMjslWKoCME",
  },
  surah_113: {
    title: "Al-Falaq",
    alafasy:
      "CQACAgIAAxkBAAEPPA5hugY4x5ZDy7xQX3hB6sdd-DuLZQACEh4AAlJE0UlzcjlS2XRalSME",
  },
  surah_114: {
    title: "An-Nas",
    alafasy:
      "CQACAgIAAxkBAAEPPA9hugY4eMBkhkTCYNNQ2ghdSt1GzgACEx4AAlJE0Um8RER6vdmLGSME",
  },
};

module.exports.commands = commands;
module.exports.suraFileIds = suraFileIds;

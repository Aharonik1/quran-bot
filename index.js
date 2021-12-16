const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();
const constData = require("./const");

const suraFileIds = constData.suraFileIds;
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) =>
  ctx.reply(
    `Assalamu alaykum ${
      ctx.message.from.first_name ? ctx.message.from.first_name : ""
    }. \n\nQur'on botimizga xush kelibsiz. \nBotimizdan foydalanganingiz uchun Alloh sizni yaxshilik bilan mukofotlasin. \n\nAlloh siz-u bizdan rozi bo'lsin. \nAmiyn.`
  )
);
bot.help((ctx) =>
  ctx.reply(
    `${
      constData.commands ? constData.commands : ""
    } \n\nShikoyat va takliflar uchun ${
      process.env.ADMIN
    } ga murojaat qilishingiz mumkin.`
  )
);

bot.command("sura", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      "<b>Kerakli surani tanlang: \n\n</b>",
      Markup.inlineKeyboard([
        [
          Markup.button.callback(
            `1. ${suraFileIds["surah_1"].title}`,
            "sura_1"
          ),
          Markup.button.callback(
            `2. ${suraFileIds["surah_2"].title}`,
            "sura_2"
          ),
          Markup.button.callback(
            `3. ${suraFileIds["surah_3"].title}`,
            "sura_3"
          ),
        ],
        [
          Markup.button.callback(
            `4. ${suraFileIds["surah_4"].title}`,
            "sura_4"
          ),
          Markup.button.callback(
            `5. ${suraFileIds["surah_5"].title}`,
            "sura_5"
          ),
          Markup.button.callback(
            `6. ${suraFileIds["surah_6"].title}`,
            "sura_6"
          ),
        ],
        [
          Markup.button.callback(
            `7. ${suraFileIds["surah_7"].title}`,
            "sura_7"
          ),
          Markup.button.callback(
            `8. ${suraFileIds["surah_8"].title}`,
            "sura_8"
          ),
          Markup.button.callback(
            `9. ${suraFileIds["surah_9"].title}`,
            "sura_9"
          ),
        ],

        [
          Markup.button.callback(
            `10. ${suraFileIds["surah_10"].title}`,
            "sura_10"
          ),
          Markup.button.callback(
            `11. ${suraFileIds["surah_11"].title}`,
            "sura_11"
          ),
          Markup.button.callback(
            `12. ${suraFileIds["surah_12"].title}`,
            "sura_12"
          ),
        ],
        [
          Markup.button.callback(
            `13. ${suraFileIds["surah_13"].title}`,
            "sura_13"
          ),
          Markup.button.callback(
            `14. ${suraFileIds["surah_14"].title}`,
            "sura_14"
          ),
        ],
        [
          Markup.button.callback(
            `15. ${suraFileIds["surah_15"].title}`,
            "sura_15"
          ),
          Markup.button.callback(
            `16. ${suraFileIds["surah_16"].title}`,
            "sura_16"
          ),
        ],
        [
          Markup.button.callback(
            `17. ${suraFileIds["surah_17"].title}`,
            "sura_17"
          ),
          Markup.button.callback(
            `18. ${suraFileIds["surah_18"].title}`,
            "sura_18"
          ),
          Markup.button.callback(
            `19. ${suraFileIds["surah_19"].title}`,
            "sura_19"
          ),
        ],

        [
          Markup.button.callback(
            `20. ${suraFileIds["surah_20"].title}`,
            "sura_20"
          ),
          Markup.button.callback(
            `21. ${suraFileIds["surah_21"].title}`,
            "sura_21"
          ),
          Markup.button.callback(
            `22. ${suraFileIds["surah_22"].title}`,
            "sura_22"
          ),
        ],
        [
          Markup.button.callback(
            `23. ${suraFileIds["surah_23"].title}`,
            "sura_23"
          ),
          Markup.button.callback(
            `24. ${suraFileIds["surah_24"].title}`,
            "sura_24"
          ),
          Markup.button.callback(
            `25. ${suraFileIds["surah_25"].title}`,
            "sura_25"
          ),
        ],
        [
          Markup.button.callback(
            `26. ${suraFileIds["surah_26"].title}`,
            "sura_26"
          ),
          Markup.button.callback(
            `27. ${suraFileIds["surah_27"].title}`,
            "sura_27"
          ),
          Markup.button.callback(
            `28. ${suraFileIds["surah_28"].title}`,
            "sura_28"
          ),
        ],

        [
          Markup.button.callback(
            `29. ${suraFileIds["surah_29"].title}`,
            "sura_29"
          ),
          Markup.button.callback(
            `30. ${suraFileIds["surah_30"].title}`,
            "sura_30"
          ),
          Markup.button.callback(
            `31. ${suraFileIds["surah_31"].title}`,
            "sura_31"
          ),
        ],
        [
          Markup.button.callback(
            `32. ${suraFileIds["surah_32"].title}`,
            "sura_32"
          ),
          Markup.button.callback(
            `33. ${suraFileIds["surah_33"].title}`,
            "sura_33"
          ),
          Markup.button.callback(
            `34. ${suraFileIds["surah_34"].title}`,
            "sura_34"
          ),
        ],
        [
          Markup.button.callback(
            `35. ${suraFileIds["surah_35"].title}`,
            "sura_35"
          ),
          Markup.button.callback(
            `36. ${suraFileIds["surah_36"].title}`,
            "sura_36"
          ),
          Markup.button.callback(
            `37. ${suraFileIds["surah_37"].title}`,
            "sura_37"
          ),
        ],

        [
          Markup.button.callback(
            `38. ${suraFileIds["surah_38"].title}`,
            "sura_38"
          ),
          Markup.button.callback(
            `39. ${suraFileIds["surah_39"].title}`,
            "sura_39"
          ),
          Markup.button.callback(
            `40. ${suraFileIds["surah_40"].title}`,
            "sura_40"
          ),
        ],
        [
          Markup.button.callback(
            `41. ${suraFileIds["surah_41"].title}`,
            "sura_41"
          ),
          Markup.button.callback(
            `42. ${suraFileIds["surah_42"].title}`,
            "sura_42"
          ),
          Markup.button.callback(
            `43. ${suraFileIds["surah_43"].title}`,
            "sura_43"
          ),
        ],
        [
          Markup.button.callback(
            `44. ${suraFileIds["surah_44"].title}`,
            "sura_44"
          ),
          Markup.button.callback(
            `45. ${suraFileIds["surah_45"].title}`,
            "sura_45"
          ),
          Markup.button.callback(
            `46. ${suraFileIds["surah_46"].title}`,
            "sura_46"
          ),
        ],

        [
          Markup.button.callback(
            `47. ${suraFileIds["surah_47"].title}`,
            "sura_47"
          ),
          Markup.button.callback(
            `48. ${suraFileIds["surah_48"].title}`,
            "sura_48"
          ),
          Markup.button.callback(
            `49. ${suraFileIds["surah_49"].title}`,
            "sura_49"
          ),
        ],
        [
          Markup.button.callback(
            `50. ${suraFileIds["surah_50"].title}`,
            "sura_50"
          ),
          Markup.button.callback(
            `51. ${suraFileIds["surah_51"].title}`,
            "sura_51"
          ),
          Markup.button.callback(
            `52. ${suraFileIds["surah_52"].title}`,
            "sura_52"
          ),
        ],
        [
          Markup.button.callback(
            `53. ${suraFileIds["surah_53"].title}`,
            "sura_53"
          ),
          Markup.button.callback(
            `54. ${suraFileIds["surah_54"].title}`,
            "sura_54"
          ),
          Markup.button.callback(
            `55. ${suraFileIds["surah_55"].title}`,
            "sura_55"
          ),
        ],
        [
          Markup.button.callback(
            `56. ${suraFileIds["surah_56"].title}`,
            "sura_56"
          ),
          Markup.button.callback(
            `57. ${suraFileIds["surah_57"].title}`,
            "sura_57"
          ),
          Markup.button.callback(
            `58. ${suraFileIds["surah_58"].title}`,
            "sura_58"
          ),
        ],
        [
          Markup.button.callback(
            `59. ${suraFileIds["surah_59"].title}`,
            "sura_59"
          ),
          Markup.button.callback(
            `60. ${suraFileIds["surah_60"].title}`,
            "sura_60"
          ),
          Markup.button.callback(
            `61. ${suraFileIds["surah_61"].title}`,
            "sura_61"
          ),
        ],
        [
          Markup.button.callback(
            `62. ${suraFileIds["surah_62"].title}`,
            "sura_62"
          ),
          Markup.button.callback(
            `63. ${suraFileIds["surah_63"].title}`,
            "sura_63"
          ),
          Markup.button.callback(
            `64. ${suraFileIds["surah_64"].title}`,
            "sura_64"
          ),
        ],
        [
          Markup.button.callback(
            `65. ${suraFileIds["surah_65"].title}`,
            "sura_65"
          ),
          Markup.button.callback(
            `66. ${suraFileIds["surah_66"].title}`,
            "sura_66"
          ),
          Markup.button.callback(
            `67. ${suraFileIds["surah_67"].title}`,
            "sura_67"
          ),
        ],
        [
          Markup.button.callback(
            `68. ${suraFileIds["surah_68"].title}`,
            "sura_68"
          ),
          Markup.button.callback(
            `69. ${suraFileIds["surah_69"].title}`,
            "sura_69"
          ),
          Markup.button.callback(
            `70. ${suraFileIds["surah_70"].title}`,
            "sura_70"
          ),
        ],
        [
          Markup.button.callback(
            `71. ${suraFileIds["surah_71"].title}`,
            "sura_71"
          ),
          Markup.button.callback(
            `72. ${suraFileIds["surah_72"].title}`,
            "sura_72"
          ),
          Markup.button.callback(
            `73. ${suraFileIds["surah_73"].title}`,
            "sura_73"
          ),
        ],
        [
          Markup.button.callback(
            `74. ${suraFileIds["surah_74"].title}`,
            "sura_74"
          ),
          Markup.button.callback(
            `75. ${suraFileIds["surah_75"].title}`,
            "sura_75"
          ),
          Markup.button.callback(
            `76. ${suraFileIds["surah_76"].title}`,
            "sura_76"
          ),
        ],
        [
          Markup.button.callback(
            `77. ${suraFileIds["surah_77"].title}`,
            "sura_77"
          ),
          Markup.button.callback(
            `78. ${suraFileIds["surah_78"].title}`,
            "sura_78"
          ),
          Markup.button.callback(
            `79. ${suraFileIds["surah_79"].title}`,
            "sura_79"
          ),
        ],
        [
          Markup.button.callback(
            `80. ${suraFileIds["surah_80"].title}`,
            "sura_80"
          ),
          Markup.button.callback(
            `81. ${suraFileIds["surah_81"].title}`,
            "sura_81"
          ),
          Markup.button.callback(
            `82. ${suraFileIds["surah_82"].title}`,
            "sura_82"
          ),
        ],
        [
          Markup.button.callback(
            `83. ${suraFileIds["surah_83"].title}`,
            "sura_83"
          ),
          Markup.button.callback(
            `84. ${suraFileIds["surah_84"].title}`,
            "sura_84"
          ),
          Markup.button.callback(
            `85. ${suraFileIds["surah_85"].title}`,
            "sura_85"
          ),
        ],
        [
          Markup.button.callback(
            `86. ${suraFileIds["surah_86"].title}`,
            "sura_86"
          ),
          Markup.button.callback(
            `87. ${suraFileIds["surah_87"].title}`,
            "sura_87"
          ),
          Markup.button.callback(
            `88. ${suraFileIds["surah_88"].title}`,
            "sura_88"
          ),
        ],
        [
          Markup.button.callback(
            `89. ${suraFileIds["surah_89"].title}`,
            "sura_89"
          ),
          Markup.button.callback(
            `90. ${suraFileIds["surah_90"].title}`,
            "sura_90"
          ),
          Markup.button.callback(
            `91. ${suraFileIds["surah_91"].title}`,
            "sura_91"
          ),
        ],
        [
          Markup.button.callback(
            `92. ${suraFileIds["surah_92"].title}`,
            "sura_92"
          ),
          Markup.button.callback(
            `93. ${suraFileIds["surah_93"].title}`,
            "sura_93"
          ),
          Markup.button.callback(
            `94. ${suraFileIds["surah_94"].title}`,
            "sura_94"
          ),
        ],
        [
          Markup.button.callback(
            `95. ${suraFileIds["surah_95"].title}`,
            "sura_95"
          ),
          Markup.button.callback(
            `96. ${suraFileIds["surah_96"].title}`,
            "sura_96"
          ),
          Markup.button.callback(
            `97. ${suraFileIds["surah_97"].title}`,
            "sura_97"
          ),
        ],
        [
          Markup.button.callback(
            `98. ${suraFileIds["surah_98"].title}`,
            "sura_98"
          ),
          Markup.button.callback(
            `99. ${suraFileIds["surah_99"].title}`,
            "sura_99"
          ),
          Markup.button.callback(
            `100. ${suraFileIds["surah_100"].title}`,
            "sura_100"
          ),
        ],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

allSurahRunner("alafasy");

function allSurahRunner(reciter) {
  for (let index = 1; index <= 114; index++) {
    sendSurahToBot(`sura_${index}`, suraFileIds[`surah_${index}`][reciter]);
  }
}

function sendSurahToBot(name, src) {
  bot.action(name, async (ctx) => {
    try {
      await ctx.replyWithAudio(src);
    } catch (e) {
      ctx.reply(
        `Sura(${name}) \nKechirasiz xatolik yuz berdi. Xatolik haqida @ahrorxudja ga xabar bering.`
      );
      console.error(e);
    }
  });
}

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

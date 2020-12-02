'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3017ddf31f8bd058129409845e202888",
"index.html": "797be6c958d223a5959f5a69ae6eb858",
"/": "797be6c958d223a5959f5a69ae6eb858",
"main.dart.js": "fff08149afd98982a5148cd1b61e062f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "60d90c51f99571526ee3e1fa7e837049",
"assets/AssetManifest.json": "f51e794a551412856fb17f2a81b7ff8b",
"assets/NOTICES": "a027a1be4a910b4a05b8f258ecd2c985",
"assets/FontManifest.json": "25163c7fd2f05743fea51571813f59b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/luna_icons/LunaIcons-20201005.ttf": "4a063d6f042e6938f9baf5f6de9a826e",
"assets/packages/luna_icons/lib/LunaIcons-20201005.ttf": "4a063d6f042e6938f9baf5f6de9a826e",
"assets/packages/luna_icons/assets/bookability_status/BookableButOccupied.png": "5fba781a4f600bc803fa0fc4eeb66953",
"assets/packages/luna_icons/assets/bookability_status/AlreadyBookedFullyRestrictedButOccupied.png": "7434f272f0c8cd9f337f9384c385bc24",
"assets/packages/luna_icons/assets/bookability_status/BookableAndVacant.png": "759fb5c39be1e4545121ce5ae36677af",
"assets/packages/luna_icons/assets/bookability_status/NotBookableAndVacant.png": "a2db4dfe518bb20795a04f1a1fd48716",
"assets/packages/luna_icons/assets/bookability_status/AlreadyBookedFullyRestrictedButUnknown.png": "c8e664148dbc8091588a90a8489d12eb",
"assets/packages/luna_icons/assets/bookability_status/NotBookableButUnknown.png": "4a811c3d9106f2bb36f5a918ea181390",
"assets/packages/luna_icons/assets/bookability_status/BookableThroughCentralTeamButUnknown.png": "122c10528ad97de887ca0320dc67b6b8",
"assets/packages/luna_icons/assets/bookability_status/BookableThroughCentralTeamAndVacant.png": "7b5f0ae8953bb2f7cc50eee1ba1f9b91",
"assets/packages/luna_icons/assets/bookability_status/BookableThroughCentralTeamButOccupied.png": "448c534a1cfd420a333ab1f498853886",
"assets/packages/luna_icons/assets/bookability_status/NotBookableButOccupied.png": "eac96f5b54dace3a202525acd6aa6d66",
"assets/packages/luna_icons/assets/bookability_status/AlreadyBookedFullyRestrictedAndVacant.png": "2048c7c8d3aba1af23afb2e3da5cc1e1",
"assets/packages/luna_icons/assets/bookability_status/BookableAndPotentiallyVacant.png": "d3e7724963245778c2a1f5dd3cabf786",
"assets/packages/luna_icons/assets/icons/DisableWashroom.png": "e98ee781dd7c3b8c9ec152ac42b48c04",
"assets/packages/luna_icons/assets/icons/TimeActive.png": "cd4999e805c8393e0c176030b5738772",
"assets/packages/luna_icons/assets/icons/EditActive.png": "d8a319c89cd0e89ea250e9bbff169b2c",
"assets/packages/luna_icons/assets/icons/Access.png": "5eea23cb32f52f278c616a5259c85b45",
"assets/packages/luna_icons/assets/icons/Capacity.png": "ab6d5ce06a1dd3d72250e6a3dce20ee1",
"assets/packages/luna_icons/assets/icons/GentsWashroom.png": "5b2a5c31e5b472d58ab19347f42f7192",
"assets/packages/luna_icons/assets/icons/Meeting.png": "a736d4fd2206a584c8fd429028226c9d",
"assets/packages/luna_icons/assets/icons/LengthActive.png": "19678921cff17178cdcd9958aa2d1026",
"assets/packages/luna_icons/assets/icons/ShowPassword.png": "f6810ce3672aab5b12369914aa3f500b",
"assets/packages/luna_icons/assets/icons/AlertAndErrorStandard.png": "e1cd55a93c72e99b516408ae12bf7352",
"assets/packages/luna_icons/assets/icons/LadiesWashroomActive.png": "78fa3b86d4509d69a28f0780103bcdc2",
"assets/packages/luna_icons/assets/icons/Book.png": "e476ec83898e58d9bfceb9bccf13a6ba",
"assets/packages/luna_icons/assets/icons/SurroundingsActive.png": "49b73036a12ca7e559bed42e51c0ca43",
"assets/packages/luna_icons/assets/icons/Desk.png": "30dc6e67f63ab449f732972719d755c9",
"assets/packages/luna_icons/assets/icons/Time.png": "b9b06d6b7a453ff2032f1da87074ca7d",
"assets/packages/luna_icons/assets/icons/ServiceRequest.png": "4fcba02a8bf0920cf73b2c2ba51d92b2",
"assets/packages/luna_icons/assets/icons/ParkingActive.png": "a50861d22038dc9b6b26a63c5848fe80",
"assets/packages/luna_icons/assets/icons/Position.png": "9d211a31727dde99e458618593df478b",
"assets/packages/luna_icons/assets/icons/RestaurantActive.png": "90d6b33c84a54588c03391396768ad3c",
"assets/packages/luna_icons/assets/icons/DeleteActive.png": "bbf24423e5d3da12aa5240b1d7e08f92",
"assets/packages/luna_icons/assets/icons/NoiseActive.png": "a1b498970b6b7d0d6f8100a18c334367",
"assets/packages/luna_icons/assets/icons/Settings.png": "2c674d00409f8dd3476b63b83faf4fb2",
"assets/packages/luna_icons/assets/icons/DisableWashroomActive.png": "2704b3ccb08dd698ec04ee6106bfae9c",
"assets/packages/luna_icons/assets/icons/PositionAndDirection.png": "f125028c9a0c55cdb16fe184cadc0366",
"assets/packages/luna_icons/assets/icons/Footfalls.png": "3d45114205cbde1088953003cdb929d3",
"assets/packages/luna_icons/assets/icons/CollaborateActive.png": "4f12427705aeae47b49e502fa48f4017",
"assets/packages/luna_icons/assets/icons/PrinterActive.png": "b7cd3e77ec49c0b9f335edda17563afa",
"assets/packages/luna_icons/assets/icons/Recentred.png": "eed883f8debc918dbb9d35ab3f8eed1e",
"assets/packages/luna_icons/assets/icons/AccountActive.png": "f7808df7c57aca3009585c0eb5e3cf76",
"assets/packages/luna_icons/assets/icons/MeetingRoomActive.png": "b53c59954fa5f0e55f96bc3d853a72e7",
"assets/packages/luna_icons/assets/icons/ReceptionActive.png": "e477c823d0e3ea580322ec250d55e243",
"assets/packages/luna_icons/assets/icons/RecentredActive.png": "e0f23c4ed6dcf5768bb0e78b57138af7",
"assets/packages/luna_icons/assets/icons/HelpActive.png": "3405c519c49643320a1fe564a115b5c0",
"assets/packages/luna_icons/assets/icons/Shower.png": "6fd2f7f72b2724b5671e42f15819a862",
"assets/packages/luna_icons/assets/icons/Busyness.png": "728f6f5f7fa6105697022ba39120e27a",
"assets/packages/luna_icons/assets/icons/Unknown.png": "2740ca82f6527c25abc2c14b0418d4fe",
"assets/packages/luna_icons/assets/icons/Collaborate.png": "7086c423be4a44437a6d02c684704541",
"assets/packages/luna_icons/assets/icons/AccessAllowedActive.png": "657ed7f8686561efa45fb02896cc03ca",
"assets/packages/luna_icons/assets/icons/NavigationActive.png": "0e3e3d9093601e3c2f3025ea20b64ffc",
"assets/packages/luna_icons/assets/icons/Alert.png": "1e137289472ebe4d351fb3af50b7b9bd",
"assets/packages/luna_icons/assets/icons/ShowerActive.png": "8cdb1602255c2faaf9ca99176237cab8",
"assets/packages/luna_icons/assets/icons/Home.png": "c1cc1be829758ab8c6afd10d0d942b6d",
"assets/packages/luna_icons/assets/icons/CameraActive.png": "409697e97dfd94eee9b70e0afe6cf332",
"assets/packages/luna_icons/assets/icons/FoodAndBeverageActive.png": "1f10cc1d21b15647a919b05702ac658d",
"assets/packages/luna_icons/assets/icons/TechRoom.png": "869362c83753ee3421a1f015521c58b3",
"assets/packages/luna_icons/assets/icons/Vacant.png": "3393971d35f080cf65b79e1a846d0ca2",
"assets/packages/luna_icons/assets/icons/Restaurant.png": "497e6b7fed93be42a6d71582e11daef5",
"assets/packages/luna_icons/assets/icons/TeaAndCoffeePoint.png": "403167518f9a35035f20d9d613f3e016",
"assets/packages/luna_icons/assets/icons/Gym.png": "3e444332eaa4e3975c379702a6394f61",
"assets/packages/luna_icons/assets/icons/Account.png": "5a7aab0fd62dffdb088db6a475b302c5",
"assets/packages/luna_icons/assets/icons/Distance.png": "f2458399414dc9697c1515269a45ed9c",
"assets/packages/luna_icons/assets/icons/LocationActive.png": "c53456ed0be78ea907e2e9145e13756d",
"assets/packages/luna_icons/assets/icons/TemperatureActive.png": "4a84487cefc878a4abd942e683612b3f",
"assets/packages/luna_icons/assets/icons/PotentiallyVacantThick.png": "4c36cce94fa3c78ea1a1b9a565f5d427",
"assets/packages/luna_icons/assets/icons/Surroundings.png": "44cb9d9b7141666d23fb74ac24222318",
"assets/packages/luna_icons/assets/icons/FoodAndBeverage.png": "ef1b84b79c2f8cb5e85c8f937a4d2085",
"assets/packages/luna_icons/assets/icons/CollaborationSpaceActive.png": "fda8436b44b0c07c3346622df9d88d26",
"assets/packages/luna_icons/assets/icons/AndroidAllow.png": "2cd0efd1f5ce72bef4f95f412fd81a50",
"assets/packages/luna_icons/assets/icons/AccessRestrictedActive.png": "7c807315f9e6e1de6ed66bd2094622d3",
"assets/packages/luna_icons/assets/icons/ExitActive.png": "9f1c89ed1fe1da694a86e8ee8ef51fce",
"assets/packages/luna_icons/assets/icons/LockersActive.png": "eb743f5eee33f7125841c05149516c9b",
"assets/packages/luna_icons/assets/icons/Lockers.png": "e9c2580601b26936998f22e594ca763a",
"assets/packages/luna_icons/assets/icons/Information.png": "d32335154b2a9e92d9e60e2be9a04599",
"assets/packages/luna_icons/assets/icons/WashroomActive.png": "dc1aabce32a4fdf1c1051ce6876c25da",
"assets/packages/luna_icons/assets/icons/Temperature.png": "b82bfa1131ffe14f1074ce9a6554491a",
"assets/packages/luna_icons/assets/icons/CheckOut.png": "97aebb013d2065dc045b3fc237179235",
"assets/packages/luna_icons/assets/icons/AmenitiesActive.png": "c448a6a0b587b08ce6a4afba5e50b279",
"assets/packages/luna_icons/assets/icons/BookActive.png": "dfa4275668431e6eca5e719bee70aaae",
"assets/packages/luna_icons/assets/icons/DeskActive.png": "cb55fef791ee72777cadc3b1afb85595",
"assets/packages/luna_icons/assets/icons/Search.png": "da0ea4715bd65925fde2990246f09790",
"assets/packages/luna_icons/assets/icons/CollaborationSpace.png": "64029d319d57274fff498fc37e7c8a3c",
"assets/packages/luna_icons/assets/icons/MeetingActive.png": "6e5d680f437d1ff350d47e72d1eee163",
"assets/packages/luna_icons/assets/icons/OccupancyActive.png": "8caed339e52102c7a84f42893a843752",
"assets/packages/luna_icons/assets/icons/BusynessActive.png": "2ac389a34cdf373fb7cdd5d13f80e0cc",
"assets/packages/luna_icons/assets/icons/UnknownThick.png": "54b4adb65966065da901254ef9019347",
"assets/packages/luna_icons/assets/icons/GentsWashroomActive.png": "7dd94549773a07bcd2fba1b3d5a46381",
"assets/packages/luna_icons/assets/icons/Building.png": "f54318076941150ae8882ef13093de6b",
"assets/packages/luna_icons/assets/icons/Parking.png": "af1f5debd62d725e199123436f582369",
"assets/packages/luna_icons/assets/icons/IosPrivacy.png": "1d036cec148690cbd0f7f3588e87fb87",
"assets/packages/luna_icons/assets/icons/HomeActive.png": "522e17d269579b4f99d5bd2790b93d72",
"assets/packages/luna_icons/assets/icons/Help.png": "b5f8cb3935071e0ae6aaf52cde14d847",
"assets/packages/luna_icons/assets/icons/TechRoomActive.png": "e52c094208e1f4a6e30bc91c19b12d37",
"assets/packages/luna_icons/assets/icons/EnvironmentalInfoActive.png": "dbc50b46829590c840111b389b37dbcf",
"assets/packages/luna_icons/assets/icons/ServiceRequestActive.png": "bd5de2df92201a1f44ac6baf22a4c661",
"assets/packages/luna_icons/assets/icons/Error.png": "2c55bcb059c6fb70c1269c6954fb6db7",
"assets/packages/luna_icons/assets/icons/UnavailableThick.png": "2e49c02dca69c57a31ff645e59fceca5",
"assets/packages/luna_icons/assets/icons/Reception.png": "3e1d3e72b69be06772bde03be250d6a3",
"assets/packages/luna_icons/assets/icons/EnvironmentActive.png": "a290b36601808453c234cdc475f249e5",
"assets/packages/luna_icons/assets/icons/Noise.png": "61c52cd468453ac9a117211d6b29b43a",
"assets/packages/luna_icons/assets/icons/CheckIn.png": "0226e8a75e98fee18d1748bf93e15627",
"assets/packages/luna_icons/assets/icons/Location.png": "b7a0bbcb80d931a3862124ba837f0052",
"assets/packages/luna_icons/assets/icons/BuildingActive.png": "f00cbef3d97868335a4901d1c9fe2c03",
"assets/packages/luna_icons/assets/icons/LiftAndStairsActive.png": "648d1f3523540ef3e3367fe7ef4e1efc",
"assets/packages/luna_icons/assets/icons/AccessActive.png": "ed2f0ff64cec840a67d521dc25744638",
"assets/packages/luna_icons/assets/icons/Unavailable.png": "e0f3236382e16951a30ea9f0a880a7ef",
"assets/packages/luna_icons/assets/icons/Delete.png": "45abd2ae1ebb4a6ab22ef8daf3c69415",
"assets/packages/luna_icons/assets/icons/Exit.png": "b6a993b00a89124c537c4f7c95080f61",
"assets/packages/luna_icons/assets/icons/Occupancy.png": "76086f861a01cb275b9fb89304f5b12b",
"assets/packages/luna_icons/assets/icons/Busy.png": "5546a14b80e674565d07c2aa8cc53641",
"assets/packages/luna_icons/assets/icons/MeetingRoom.png": "c40b227b7d6f1109ea7973c6f562ff33",
"assets/packages/luna_icons/assets/icons/AirQualityActive.png": "1fb57f77daa6aa6bb043d4cc6ca39646",
"assets/packages/luna_icons/assets/icons/PotentiallyVacant.png": "4d9a98f132823baa88f99cbeeb36e094",
"assets/packages/luna_icons/assets/icons/Length.png": "0a21fe2f53193b64f9d9a58176fe23c6",
"assets/packages/luna_icons/assets/icons/Edit.png": "b2afe8003fe22615f43157d232b136ee",
"assets/packages/luna_icons/assets/icons/AccessAllowed.png": "d265266069411065ba13b0fa3e9c464a",
"assets/packages/luna_icons/assets/icons/Kitchen.png": "1b209cf3b792b681919a2b90cdadf1f9",
"assets/packages/luna_icons/assets/icons/FootfallsActive.png": "58135895652f961748ea9f76cc852060",
"assets/packages/luna_icons/assets/icons/LiftAndStairs.png": "86e8b8d96ac376e09a6e0420a7d4df0a",
"assets/packages/luna_icons/assets/icons/SearchActive.png": "52c65c97df20c978c89a09c85211b2bb",
"assets/packages/luna_icons/assets/icons/KitchenActive.png": "5c2ff9c309f1275e9066a660a7d748e3",
"assets/packages/luna_icons/assets/icons/InclusiveWashroom.png": "fc520c3245fa98f2f5d097683d84c196",
"assets/packages/luna_icons/assets/icons/Washroom.png": "8df9119fc7ac8da816c74a8d3b9d8a58",
"assets/packages/luna_icons/assets/icons/InclusiveWashroomActive.png": "fb3145a67de4201cdac604c53705e37d",
"assets/packages/luna_icons/assets/icons/AirQuality.png": "c1f8eb00f4cf0ac3fcd2dfc7e65995bf",
"assets/packages/luna_icons/assets/icons/GymActive.png": "bb9406d18b7bcaa3a32f171891cbe5a7",
"assets/packages/luna_icons/assets/icons/LadiesWashroom.png": "50611287b6f64e3683c1d8bc292ef08b",
"assets/packages/luna_icons/assets/icons/Humidity.png": "fbcc2df8b653b9a16496fe71ac74fdca",
"assets/packages/luna_icons/assets/icons/Camera.png": "a094482fadd5b0f159049c1604ba70ec",
"assets/packages/luna_icons/assets/icons/Printer.png": "aebc2ffa0714568b4f6202fc77efbc40",
"assets/packages/luna_icons/assets/icons/VacantThick.png": "ea34132ca273eb727bdc008b7e101411",
"assets/packages/luna_icons/assets/icons/AccessRestricted.png": "6974ce12115cc01168d24e5c518dbff7",
"assets/packages/luna_icons/assets/icons/Positive.png": "4bdf1e0aa78dfe5f5f064449ff7ac96d",
"assets/packages/luna_icons/assets/icons/EnvironmentalInfo.png": "54a7509195232a486d028eb3e32a1198",
"assets/packages/luna_icons/assets/icons/CapacityActive.png": "f962d232ccc68421f0d0b16d6ab66ffe",
"assets/packages/luna_icons/assets/icons/BusyThick.png": "9a4490c4e9fc57d679b846bc2dd1ed3c",
"assets/packages/luna_icons/assets/icons/Amenities.png": "b0baaceceadf4767e622d1459c0d3700",
"assets/packages/luna_icons/assets/icons/Navigation.png": "b12f5102d4f75dbe7717385e06067011",
"assets/packages/luna_icons/assets/icons/LocationAlt.png": "8a37b62a8eb96b06191aaccdaea03549",
"assets/packages/luna_icons/assets/icons/TeaAndCoffeePointActive.png": "4e72897d564df851e9e9ff609b633345",
"assets/packages/luna_icons/assets/icons/HumidityActive.png": "f05e35bdf2450cf5b2e9337ca4448f9d",
"assets/packages/luna_icons/assets/icons/ConfirmEdit.png": "8520c5ec6b31b76735d5fecdd327864f",
"assets/packages/luna_icons/assets/icons/Environment.png": "46455946b44ab6475910e01dc0ba4e8a",
"assets/packages/luna_icons/assets/icons/ConfirmEditActive.png": "4286f8f16a9ecbd9015ff74592561f19",
"assets/packages/luna_icons/assets/icons/DontShowPassword.png": "c9522bc41d75030df6d49a67775bf800",
"assets/packages/luna_icons/assets/icons/LocationActiveAlt.png": "331d111727c517e44d47d4f0b540c7c5",
"assets/packages/luna_icons/assets/stock_images/Meeting.jpg": "4eef7165ad0f2b84117e7b81409e311c",
"assets/packages/luna_icons/assets/stock_images/Beverage.jpg": "333c8294c8c35dda2863f2138f1e89ad",
"assets/packages/luna_icons/assets/stock_images/Breakout.jpg": "931296ac8f9df3e62ce9d5be49b68953",
"assets/packages/luna_icons/assets/stock_images/Canteen.jpg": "78bb69f662ad5df6e0772797dc21efe6",
"assets/packages/luna_icons/assets/stock_images/Wellness.jpg": "ba4cb558800fd029da941dba49df1c33",
"assets/packages/luna_icons/assets/stock_images/Service.jpg": "b9628baf8c8d7b0c21bc6948eea6765f",
"assets/packages/luna_icons/assets/stock_images/Reception.jpg": "e671419c9c92a09e99c3fbf1cd575c78",
"assets/packages/luna_icons/assets/stock_images/Zone.jpg": "62d8ffed929ee83a5becf17ca311f39e",
"assets/packages/luna_icons/assets/stock_images/Printer.jpg": "37b1de71f651487a4057bd232b955f47",
"assets/packages/luna_icons/assets/stock_images/Amenity.jpg": "c914b60ed68fb2cd2f1a7be2d817d0bf",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"assets/packages/flutter_widget_from_html/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/config/auth.dev.debug.json": "5ec227d0e3f621c63065c8f79a59e7d6",
"assets/assets/config/auth.prod.json": "c5ab6ce2edca11e26a3e12cf88ba7a14",
"assets/assets/config/auth.uat.json": "9222a37a6f7c30e2e889482c89e98ac3",
"assets/assets/config/auth.dev.json": "5f535341ee420e7a82b53c17503fa1e0",
"assets/assets/config/auth.prod.debug.json": "a946989527934e45851f4dcf60a44bd4",
"assets/assets/config/auth.uat.debug.json": "903a63ffa4fba4fce419e607c44a65de",
"assets/assets/config/dev.json": "6d287416a4d9a6e3675e63fd83aeaca0",
"assets/assets/config/uat.json": "555b1a6753f745f1ced0c9f054e1e6ed",
"assets/assets/config/prod.json": "d051c7194d0b28f38e0f3bfec53303fa",
"assets/assets/images/building-info-no-building-image.jpg": "f793d6e57a5faf0fea77cf4fa89ed469",
"assets/assets/images/mock-meeting-room.jpg": "bef4e389f3d084a853e6a26ae43045d0",
"assets/assets/images/white-image.png": "a980c519c92447658fde49e53faca5e8",
"assets/assets/images/luna-logogram.png": "f4aaa45786247a6d044276a97c109fb9",
"assets/assets/images/ms-logo@3x.png": "ed038ad5119024c2f900196873f06052",
"assets/assets/images/transparent-image.png": "6eb4e5b392670fbff47aa7b81187c070",
"assets/assets/images/callendar.png": "9fa2f0fd4cbcde509ecc8f0b64d51d95",
"assets/assets/images/person-icon.png": "8864ae98b970d00c9597b3a0648d7001",
"assets/assets/images/room-photo.jpg": "26f5f250e16b239b3f7d948662e6a5c1",
"assets/assets/images/Feeds-04.jpg": "a4750dc4ef278d994db3ced5ddb55882",
"assets/assets/images/Feeds-01.jpg": "88e0147dc41f5af3ecb5a79ba7246204",
"assets/assets/images/workspace.png": "f460a739997a724d3b24345fa61c8595",
"assets/assets/images/zurich-logo.png": "e7736d0443c8f595b2f41ce5cc7245a9",
"assets/assets/images/Feeds-02.jpg": "b16617f6bd3f55b15e64af1b53bab1b4",
"assets/assets/images/lifeboat.png": "745d73221c6c83d21f39b14600e6dc93",
"assets/assets/images/Feeds-03.jpg": "bbf3a9399300ea71aba021c978e2800b",
"assets/assets/images/No-tab-building.png": "aaa783d7ac9c0ed69180efc07295de73",
"assets/assets/images/Image-not-found.png": "c550bb83721590908363703935b88a2a",
"assets/assets/images/auth-logogram.png": "f4aaa45786247a6d044276a97c109fb9",
"assets/assets/images/skyline.png": "48bf5e80270e7f327dc8444c7b9c1c79",
"assets/assets/illustrations/book-consent.png": "4c9f91df605755c6521199cfb698e089",
"assets/assets/illustrations/gate.png": "aa5d629bc9ec4516c0a1a64a838cb53a",
"assets/assets/illustrations/no-content-found.png": "3362653f51896fe0f4f1bfae787c4a82",
"assets/assets/illustrations/terms-and-conditions.png": "80f4a5bf96a5e5ba537176d6d7e43137",
"assets/assets/illustrations/location-explained.png": "5cf7cdfc8dc5eb9cd69c09b5c5994914",
"assets/assets/illustrations/benefits.png": "14557eaa4fddac9a1e466c9633c20516",
"assets/assets/illustrations/no-results-found.png": "03418feb44226cf55bce8d5ea762e049",
"assets/assets/fonts/fa-light-300.ttf": "5bdaa8582fd409b4a3fd9f03916de415",
"assets/assets/stock_images/Canteen.jpg": "90f134d3a51428802aa0c078cc7d2b3f",
"assets/assets/stock_images/Reception.jpg": "f4fec315181b721f3a5f0abfea6dae19",
"assets/assets/stock_images/Zone.jpg": "c07188feb0e30f31f7890b073958f771",
"assets/assets/stock_images/Printer.jpg": "88c23fa20d312d8727abbe879740d76d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

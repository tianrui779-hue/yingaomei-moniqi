const sceneBackground = document.querySelector("#sceneBackground");
const homeScreen = document.querySelector("#homeScreen");
const storyScreen = document.querySelector("#storyScreen");
const packingScreen = document.querySelector("#packingScreen");
const placeholderScreen = document.querySelector("#placeholderScreen");
const routeScreen = document.querySelector("#routeScreen");
const cafeteriaScreen = document.querySelector("#cafeteriaScreen");
const classroomScreen = document.querySelector("#classroomScreen");
const dialogueBox = document.querySelector("#dialogueBox");
const sceneLabel = document.querySelector("#sceneLabel");
const storyText = document.querySelector("#storyText");
const continueButton = document.querySelector("#continueButton");
const choiceGrid = document.querySelector("#choiceGrid");
const startButton = document.querySelector("#startButton");
const reviewButton = document.querySelector("#reviewButton");
const reviewDialog = document.querySelector("#reviewDialog");
const closeReview = document.querySelector("#closeReview");
const reviewForm = document.querySelector("#reviewForm");
const commentInput = document.querySelector("#commentInput");
const reviewsBox = document.querySelector("#reviews");
const ratingButtons = [...document.querySelectorAll("[data-rating]")];
const itemArea = document.querySelector("#itemArea");
const backpackZone = document.querySelector("#backpackZone");
const packedList = document.querySelector("#packedList");
const packingProgress = document.querySelector("#packingProgress");
const completionPanel = document.querySelector("#completionPanel");
const nextSceneButton = document.querySelector("#nextSceneButton");
const dormLeaveButton = document.querySelector("#dormLeaveButton");
const returnHomeButton = document.querySelector("#returnHomeButton");
const placeholderCopy = document.querySelector("#placeholderCopy");
const placeholderTitle = placeholderScreen.querySelector("h2");
const placeholderLabel = placeholderScreen.querySelector(".scene-label");
const goClassroomButton = document.querySelector("#goClassroomButton");
const goCafeteriaButton = document.querySelector("#goCafeteriaButton");
const cafeteriaPanel = document.querySelector("#cafeteriaPanel");
const classroomPanel = document.querySelector("#classroomPanel");
const enterBuildingButton = document.querySelector("#enterBuildingButton");
const phonePayGuide = document.querySelector("#phonePayGuide");
const phoneGuideText = document.querySelector("#phoneGuideText");
const innerOs = document.querySelector("#innerOs");
const toast = document.querySelector("#toast");
const gameHud = document.querySelector("#gameHud");
const healthBar = document.querySelector("#healthBar");
const hungerBar = document.querySelector("#hungerBar");
const hotbar = document.querySelector("#hotbar");
const phoneDialog = document.querySelector("#phoneDialog");
const closePhone = document.querySelector("#closePhone");
const phoneView = document.querySelector("#phoneView");
const scheduleDialog = document.querySelector("#scheduleDialog");
const closeSchedule = document.querySelector("#closeSchedule");
const finishScheduleButton = document.querySelector("#finishScheduleButton");
const scheduleImageFrame = document.querySelector("#scheduleImageFrame");
const teacherDistance = document.querySelector("#teacherDistance");
const teacherMeterFill = document.querySelector("#teacherMeterFill");
const teacherDistanceValue = document.querySelector("#teacherDistanceValue");
const teacherWarning = document.querySelector("#teacherWarning");

const screens = [
  homeScreen,
  storyScreen,
  packingScreen,
  placeholderScreen,
  routeScreen,
  cafeteriaScreen,
  classroomScreen,
];
const achievementKey = "yingaomei-achievements";
const achievementBackupKey = "yingaomei_achievements_backup_v2";
const reviewKey = "yingaomei-reviews";
const legacyGameStateKey = "yingaomei-game-state";
const gameStateKey = "yingaomei_game_state_v1";
const checkpointLibraryKey = "yingaomei_checkpoint_library_v1";
const checkpointRestorePendingKey = "yingaomei_checkpoint_restore_pending_v1";
const achievementStateKey = "yingaomei_achievements_v1";
const easterEggStateKey = "yingaomei_easter_eggs_v1";
const endingArchiveKey = "yingaomei_endings_v1";
const MAX_HEALTH = 10;
const MAX_HUNGER = 10;
const HUNGER_DECAY_INTERVAL_MS = 60000;
const APPLAUSE_PER_CLICK = 5;
const REPLACED_IMAGE_VERSION = "20260611-4";
const seewoImagePath = `assets/items/seewo.jpg?v=${REPLACED_IMAGE_VERSION}`;
const neteaseImagePath = `assets/items/网易云.jpg?v=${REPLACED_IMAGE_VERSION}`;
const forestImagePath = `assets/items/小树林.jpg?v=${REPLACED_IMAGE_VERSION}`;
const tiangeDecorImagePath = `assets/items/舔哥2.jpg?v=${REPLACED_IMAGE_VERSION}`;
const brinClassImagePath = `assets/items/外教课.jpg?v=${REPLACED_IMAGE_VERSION}`;
const brinClassroomImagePath = `assets/items/教室2.jpg?v=${REPLACED_IMAGE_VERSION}`;
const brinDrawGuessImagePath = `assets/items/你画我猜.jpg?v=${REPLACED_IMAGE_VERSION}`;
const brinNextClassroomImagePath = `assets/items/教室.jpg?v=${REPLACED_IMAGE_VERSION}`;
const mathClassImagePath = `assets/items/数学课.jpg?v=${REPLACED_IMAGE_VERSION}`;
const campusClassroomImagePath = `assets/items/教室.jpg?v=${REPLACED_IMAGE_VERSION}`;
const campusPhoto1Path = `assets/items/照片1.jpg?v=${REPLACED_IMAGE_VERSION}`;
const campusPhoto2Path = `assets/items/照片2.jpg?v=${REPLACED_IMAGE_VERSION}`;
const campusPhoto3Path = `assets/items/照片3.jpg?v=${REPLACED_IMAGE_VERSION}`;
const campusStairsPath = `assets/items/楼梯口.jpg?v=${REPLACED_IMAGE_VERSION}`;
const campusPhoto4Path = `assets/items/照片4.jpg?v=${REPLACED_IMAGE_VERSION}`;
const campusPhoto5Path = `assets/items/照片5.jpg?v=${REPLACED_IMAGE_VERSION}`;
const dinnerCafeteriaImagePath = `assets/items/食堂2.jpg?v=${REPLACED_IMAGE_VERSION}`;
const eveningClassroomImagePath = `assets/items/教室黑夜.jpg?v=20260611-1`;
const nightPathImagePath = `assets/items/夜晚小道.jpg?v=20260612-1`;
const nightDormImagePath = `assets/items/夜晚宿舍.jpg?v=20260612-1`;
const nightPondImagePath = `assets/items/夜晚池塘.jpg?v=20260612-1`;
const dormCatImagePath = `assets/items/小猫.jpg?v=20260612-1`;
const nightSeewoImagePath = `assets/items/seewo.jpg?v=20260611-1`;
const baidupanIconPath = `assets/items/百度网盘.jpg?v=20260611-1`;
const baidupanHomePath = `assets/items/百度网盘主页.jpg?v=20260611-1`;
const basketballCourt1Path = `assets/items/篮球场1.jpg?v=${REPLACED_IMAGE_VERSION}`;
const basketballCourt2Path = `assets/items/篮球场2.jpg?v=${REPLACED_IMAGE_VERSION}`;
const basketballCourt3Path = `assets/items/篮球场3.jpg?v=${REPLACED_IMAGE_VERSION}`;
const basketballCourt4Path = `assets/items/篮球场4.jpg?v=${REPLACED_IMAGE_VERSION}`;
const basketballCourt5Path = `assets/items/篮球场5.jpg?v=${REPLACED_IMAGE_VERSION}`;
const basketballSticker2Path = `assets/items/表情包2.jpg?v=${REPLACED_IMAGE_VERSION}`;
const basketballSticker3Path = `assets/items/表情包3.jpg?v=${REPLACED_IMAGE_VERSION}`;
const basketballSticker4Path = `assets/items/表情包4.jpg?v=${REPLACED_IMAGE_VERSION}`;
const MATH_PUZZLE_SIZE = 4;
const MATH_PUZZLE_SECONDS = 60;
const SWIPE_THRESHOLD = 18;
const TILE_MOVE_DURATION = 140;
const FINAL_EASTER_EGG_IDS = [
  "breakTimeAdventure",
  "handholdingPhoto",
  "blackSwanEcho",
  "qianMode",
  "dormCat",
  "casioPassword",
];
const ENDING_TITLES = {
  normal: "Normal Ending：平凡的一天",
  happy: "Happy Ending：被记住的一天",
  bonus: "Bonus Ending：醒来已是告别时",
};

let selectedRating = 5;
let storyStep = "opening";
let isTyping = false;
let packedItems = new Set();
let pointerDraggedItem = null;
let pointerDrag = null;
let hungerTimer = null;
let teacherDistanceTimer = null;
let eslChatTimer = null;
let physicsWorkbookTimer = null;
let physicsChatTimer = null;
let peMysteryChatTimer = null;
let basketballChatTimer = null;
let secretChatTimer = null;
let nightCallTimer = null;
let secretVideoCloseTimer = null;
let secretVideoClosing = false;
let outdoorCameraDrag = null;
let decorDrag = null;
let brinCanvasState = null;
let mathPuzzleTimer = null;
let mathPuzzlePointer = null;
let suppressNextMathPuzzleClick = false;
let suppressNextDecorClick = false;
let phoneScreen = "home";

const suppressNextDecorSlotClick = () => {
  suppressNextDecorClick = true;
  window.setTimeout(() => {
    suppressNextDecorClick = false;
  }, 80);
};

let gameState = {
  health: MAX_HEALTH,
  hunger: MAX_HUNGER,
  inventory: [],
  achievements: {},
  playthroughId: "",
  currentStoryOrder: 0,
  gameStarted: false,
  completedNodeIds: [],
  currentScene: "start",
  isGameplayActive: false,
  isModalOpen: false,
  breakfastOrder: null,
  lunchOrder: null,
  ateBreakfast: false,
  ateLunch: false,
  pendingPayment: false,
  pendingOrderType: null,
  returnedFromCafeteria: false,
  needCheckSchedule: false,
  askedSchedule: false,
  checkedSchedule: false,
  skippedBreakfastPenaltyApplied: false,
  wechatMessages: null,
  currentClass: "",
  currentTeacher: "",
  teacherDistance: 4,
  phoneConfiscated: false,
  phoneAvailable: true,
  eslChatTaskStarted: false,
  eslChatTaskCompleted: false,
  eslChatIndex: 0,
  zzyNicknameChanged: false,
  easterEggs: {},
  recessChoice: null,
  physicsWorkbookProgress: 50,
  physicsWorkbookResult: null,
  physicsWorkbookMiniGameActive: false,
  physicsStairChatStarted: false,
  physicsStairChatCompleted: false,
  physicsDormChatStarted: false,
  physicsDormChatCompleted: false,
  peIntroCompleted: false,
  peLap: 0,
  peRunCompleted: false,
  peBranches: null,
  lunchSceneCompleted: false,
  photos: [],
  cameraTarget: null,
  cameraHotspot: null,
  applauseValue: 1,
  secondPianoSongUnlocked: false,
  tiangeDecorSceneStarted: false,
  tiangeDecorSceneCompleted: false,
  tiangeDecorItemsGiven: false,
  tiangeDecorAllPlaced: false,
  tiangeDecorCompleted: false,
  tiangePhotoTaken: false,
  decorItems: null,
  tiangeDecorations: null,
  selectedDecorItemId: null,
  brinGroupingViewed: false,
  brinRoundOneCompleted: false,
  brinRoundTwoCompleted: false,
  brinRoundTwoAnswer: null,
  brinGhostStoryCompleted: false,
  brinHorseshoeDrawn: false,
  brinClassCompleted: false,
  brinGameScores: { A: 0, B: 0, C: 0 },
  mathPuzzleStarted: false,
  mathPuzzleCompleted: false,
  mathPuzzleResult: null,
  mathPuzzleTimeLeft: MATH_PUZZLE_SECONDS,
  mathPuzzleMoves: 0,
  mathPuzzleBoard: [],
  mathPuzzleStartedAt: null,
  mathPuzzleAnimating: false,
  mathPuzzleQianMode: false,
  mathHomeworkPages: 0,
  campusWalkStarted: false,
  campusWalkStep: "intro",
  campusWalkPhotos: null,
  dinnerOrder: null,
  ateDinner: false,
  dinnerCompleted: false,
  basketballPreChatStarted: false,
  basketballPreChatCompleted: false,
  basketballPhotos: null,
  basketballPhotoShared: false,
  basketballPhotoChatCompleted: false,
  basketballMatchCompleted: false,
  eveningStudyCompleted: false,
  sawSecretFolder: false,
  baidupanFolderPositions: null,
  secretChoice: null,
  secretAgreementSigned: false,
  secretGroupChatStarted: false,
  secretGroupChatCompleted: false,
  nightClassroomCompleted: false,
  returnedToDormAtNight: false,
  nightRoutineCompleted: false,
  lightsOut: false,
  nightCallInvited: false,
  nightCallJoined: false,
  nightCallCompleted: false,
  nightCallMessageIndex: 0,
  nightCallDeclinedOnce: false,
  nightInventoryMode: false,
  nightPhoneClosed: false,
  dayOneReflectionIndex: 0,
  dayOneCompleted: false,
  currentEndingType: null,
  currentDay: 1,
};

const sleep = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

const generatePlaythroughId = () =>
  `playthrough_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

const setBackground = (mode) => {
  sceneBackground.className = `background ${mode}`;
};

const showScreen = async (screen, backgroundMode) => {
  const current = screens.find((candidate) => !candidate.classList.contains("hidden"));

  if (current) {
    current.classList.add("screen-fade");
    await sleep(340);
    current.classList.add("hidden");
    current.classList.remove("screen-fade");
  }

  setBackground(backgroundMode);
  screen.classList.remove("hidden");
  screen.classList.add("screen-fade");
  await sleep(30);
  screen.classList.remove("screen-fade");
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const normalizePhotos = (photos) =>
  Array.isArray(photos)
    ? photos
        .filter(
          (photo) =>
            photo &&
            typeof photo.id === "string" &&
            typeof photo.title === "string" &&
            typeof photo.image === "string",
        )
        .map((photo) => ({
          ...photo,
          image: photo.id === "tiange-decorated-photo" ? tiangeDecorImagePath : photo.image,
        }))
    : [];

const normalizePeBranches = (branches) => ({
  pianoRoomCompleted: Boolean(branches?.pianoRoomCompleted),
  forestCompleted: Boolean(branches?.forestCompleted),
  mysteryCompleted: Boolean(branches?.mysteryCompleted),
  selectedBranch: branches?.selectedBranch ?? null,
  mysteryDiscovered: Boolean(branches?.mysteryDiscovered),
  mysteryPhotoShared: Boolean(branches?.mysteryPhotoShared),
  mysteryGroupChatCompleted: Boolean(branches?.mysteryGroupChatCompleted),
  mysteryChoice: branches?.mysteryChoice ?? null,
});

const normalizeCameraTarget = (target) => {
  if (!target || typeof target !== "object") return null;
  if (!target.id || !target.title || !target.image) return null;
  return {
    id: String(target.id),
    title: String(target.title),
    image: String(target.image),
    scene: target.scene ? String(target.scene) : "",
  };
};

const normalizeBrinScores = (scores) => ({
  A: Math.max(0, Number(scores?.A) || 0),
  B: Math.max(0, Number(scores?.B) || 0),
  C: Math.max(0, Number(scores?.C) || 0),
});

const normalizeBasketballPhotos = (photos) => ({
  photo3: Boolean(photos?.photo3),
  photo4: Boolean(photos?.photo4),
  photo5: Boolean(photos?.photo5),
});

const baidupanFolderFallbackPositions = {
  mathSlides: { xPercent: 20, yPercent: 34 },
  igcsePapers: { xPercent: 39, yPercent: 34 },
  ebooks: { xPercent: 58, yPercent: 34 },
  ieltsAudio: { xPercent: 77, yPercent: 34 },
  secretVideo: { xPercent: 49, yPercent: 58 },
};

const normalizeBaidupanFolderPositions = (positions) => {
  const source = positions && typeof positions === "object" ? positions : {};
  return Object.fromEntries(
    Object.entries(baidupanFolderFallbackPositions).map(([key, fallback]) => {
      const saved = source[key];
      return [
        key,
        {
          xPercent: clamp(Number(saved?.xPercent ?? fallback.xPercent), 8, 92),
          yPercent: clamp(Number(saved?.yPercent ?? fallback.yPercent), 12, 84),
        },
      ];
    }),
  );
};

const createSolvedPuzzle = () => [...Array.from({ length: 15 }, (_, index) => index + 1), null];

const normalizeMathPuzzleBoard = (board) => {
  if (!Array.isArray(board) || board.length !== 16) return [];
  const values = new Set(board);
  const validNumbers = Array.from({ length: 15 }, (_, index) => index + 1).every((number) => values.has(number));
  return validNumbers && values.has(null) ? board.map((value) => (value === null ? null : Number(value))) : [];
};

const createDefaultDecorItems = () => [
  { id: "decor-star", name: "星星", label: "🌟", placed: false },
  { id: "decor-sparkles", name: "闪光", label: "✨", placed: false },
  { id: "decor-planet", name: "星球", label: "🪐", placed: false },
  { id: "decor-heart", name: "爱心", label: "❤️", placed: false },
  { id: "decor-party", name: "礼花", label: "🎉", placed: false },
];

const normalizeDecorItems = (items) => {
  const saved = Array.isArray(items) ? items : [];
  return createDefaultDecorItems().map((item) => {
    const match = saved.find((candidate) => candidate?.id === item.id);
    return {
      ...item,
      placed: Boolean(match?.placed),
      xPercent: Number(match?.xPercent ?? match?.x) || null,
      yPercent: Number(match?.yPercent ?? match?.y) || null,
      rotation: Number(match?.rotation) || 0,
      scale: Number(match?.scale) || 1,
    };
  });
};

const syncTiangeDecorationState = () => {
  const source = Array.isArray(gameState.decorItems) ? gameState.decorItems : gameState.tiangeDecorations;
  const normalized = normalizeDecorItems(source);
  gameState.decorItems = normalized;
  gameState.tiangeDecorations = normalized;
  gameState.tiangeDecorAllPlaced = normalized.every((item) => item.placed);
  if (gameState.tiangeDecorAllPlaced) gameState.tiangeDecorCompleted = true;
  if (
    gameState.selectedDecorItemId &&
    !normalized.some((item) => item.id === gameState.selectedDecorItemId && !item.placed)
  ) {
    gameState.selectedDecorItemId = null;
  }
  return normalized;
};

const loadGameState = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(gameStateKey)) ?? JSON.parse(localStorage.getItem(legacyGameStateKey));
    if (saved) {
      gameState = {
        ...gameState,
        ...saved,
        health: clamp(Number(saved.health ?? MAX_HEALTH), 0, MAX_HEALTH),
        hunger: clamp(Number(saved.hunger ?? MAX_HUNGER), 0, MAX_HUNGER),
        inventory: Array.isArray(saved.inventory) ? saved.inventory : [],
        achievements: saved.achievements ?? {},
        playthroughId: typeof saved.playthroughId === "string" && saved.playthroughId ? saved.playthroughId : generatePlaythroughId(),
        currentStoryOrder: Math.max(0, Number(saved.currentStoryOrder) || 0),
        gameStarted: Boolean(saved.gameStarted),
        completedNodeIds: Array.isArray(saved.completedNodeIds) ? [...new Set(saved.completedNodeIds)] : [],
        breakfastOrder: normalizeBreakfastOrder(saved.breakfastOrder),
        lunchOrder: normalizeLunchOrder(saved.lunchOrder),
        dinnerOrder: normalizeDinnerOrder(saved.dinnerOrder),
        ateBreakfast: Boolean(saved.ateBreakfast),
        ateLunch: Boolean(saved.ateLunch),
        ateDinner: Boolean(saved.ateDinner),
        pendingPayment: Boolean(saved.pendingPayment),
        pendingOrderType: saved.pendingOrderType ?? null,
        returnedFromCafeteria: Boolean(saved.returnedFromCafeteria),
        needCheckSchedule: Boolean(saved.needCheckSchedule),
        askedSchedule: Boolean(saved.askedSchedule),
        checkedSchedule: Boolean(saved.checkedSchedule),
        skippedBreakfastPenaltyApplied: Boolean(saved.skippedBreakfastPenaltyApplied),
        wechatMessages: normalizeWechatMessages(saved.wechatMessages),
        currentClass: saved.currentClass ?? "",
        currentTeacher: saved.currentTeacher ?? "",
        teacherDistance: clamp(Number(saved.teacherDistance ?? 4), 1, 10),
        phoneConfiscated: Boolean(saved.phoneConfiscated),
        phoneAvailable: saved.phoneAvailable !== false,
        eslChatTaskStarted: Boolean(saved.eslChatTaskStarted),
        eslChatTaskCompleted: Boolean(saved.eslChatTaskCompleted),
        eslChatIndex: Math.max(0, Number(saved.eslChatIndex) || 0),
        zzyNicknameChanged: Boolean(saved.zzyNicknameChanged),
        easterEggs: saved.easterEggs && typeof saved.easterEggs === "object" ? saved.easterEggs : {},
        recessChoice: saved.recessChoice ?? null,
        physicsWorkbookProgress: clamp(Number(saved.physicsWorkbookProgress ?? 50), 1, 100),
        physicsWorkbookResult: saved.physicsWorkbookResult ?? null,
        physicsWorkbookMiniGameActive: Boolean(saved.physicsWorkbookMiniGameActive),
        physicsStairChatStarted: Boolean(saved.physicsStairChatStarted),
        physicsStairChatCompleted: Boolean(saved.physicsStairChatCompleted),
        physicsDormChatStarted: Boolean(saved.physicsDormChatStarted),
        physicsDormChatCompleted: Boolean(saved.physicsDormChatCompleted),
        peIntroCompleted: Boolean(saved.peIntroCompleted),
        peLap: Math.max(0, Number(saved.peLap) || 0),
        peRunCompleted: Boolean(saved.peRunCompleted),
        peBranches: normalizePeBranches(saved.peBranches),
        lunchSceneCompleted: Boolean(saved.lunchSceneCompleted),
        photos: normalizePhotos(saved.photos),
        cameraTarget: normalizeCameraTarget(saved.cameraTarget),
        cameraHotspot: saved.cameraHotspot ?? null,
        applauseValue: clamp(Number(saved.applauseValue ?? 1), 1, 100),
        secondPianoSongUnlocked: Boolean(saved.secondPianoSongUnlocked),
        tiangeDecorSceneStarted: Boolean(saved.tiangeDecorSceneStarted),
        tiangeDecorSceneCompleted: Boolean(saved.tiangeDecorSceneCompleted),
        tiangeDecorItemsGiven: Boolean(saved.tiangeDecorItemsGiven),
        tiangeDecorAllPlaced: Boolean(saved.tiangeDecorAllPlaced),
        tiangeDecorCompleted: Boolean(saved.tiangeDecorCompleted),
        tiangePhotoTaken: Boolean(saved.tiangePhotoTaken),
        decorItems: normalizeDecorItems(saved.decorItems ?? saved.tiangeDecorations),
        tiangeDecorations: normalizeDecorItems(saved.tiangeDecorations ?? saved.decorItems),
        selectedDecorItemId: saved.selectedDecorItemId ?? null,
        brinGroupingViewed: Boolean(saved.brinGroupingViewed),
        brinRoundOneCompleted: Boolean(saved.brinRoundOneCompleted),
        brinRoundTwoCompleted: Boolean(saved.brinRoundTwoCompleted),
        brinRoundTwoAnswer: saved.brinRoundTwoAnswer ?? null,
        brinGhostStoryCompleted: Boolean(saved.brinGhostStoryCompleted),
        brinHorseshoeDrawn: Boolean(saved.brinHorseshoeDrawn),
        brinClassCompleted: Boolean(saved.brinClassCompleted),
        brinGameScores: normalizeBrinScores(saved.brinGameScores),
        mathPuzzleStarted: Boolean(saved.mathPuzzleStarted),
        mathPuzzleCompleted: Boolean(saved.mathPuzzleCompleted),
        mathPuzzleResult: saved.mathPuzzleResult ?? null,
        mathPuzzleTimeLeft: clamp(Number(saved.mathPuzzleTimeLeft ?? MATH_PUZZLE_SECONDS), 0, MATH_PUZZLE_SECONDS),
        mathPuzzleMoves: Math.max(0, Number(saved.mathPuzzleMoves) || 0),
        mathPuzzleBoard: normalizeMathPuzzleBoard(saved.mathPuzzleBoard),
        mathPuzzleStartedAt: saved.mathPuzzleStartedAt ?? null,
        mathPuzzleAnimating: false,
        mathPuzzleQianMode: Boolean(saved.mathPuzzleQianMode),
        mathHomeworkPages: Math.max(0, Number(saved.mathHomeworkPages) || 0),
        campusWalkStarted: Boolean(saved.campusWalkStarted),
        campusWalkStep: saved.campusWalkStep ?? "intro",
        campusWalkPhotos:
          saved.campusWalkPhotos && typeof saved.campusWalkPhotos === "object"
            ? {
                curtain: Boolean(saved.campusWalkPhotos.curtain),
                board: Boolean(saved.campusWalkPhotos.board),
                classSign: Boolean(saved.campusWalkPhotos.classSign),
                gymnasium: Boolean(saved.campusWalkPhotos.gymnasium),
                eveningRoad: Boolean(saved.campusWalkPhotos.eveningRoad),
              }
            : null,
        dinnerCompleted: Boolean(saved.dinnerCompleted),
        basketballPreChatStarted: Boolean(saved.basketballPreChatStarted),
        basketballPreChatCompleted: Boolean(saved.basketballPreChatCompleted),
        basketballPhotos: normalizeBasketballPhotos(saved.basketballPhotos),
        basketballPhotoShared: Boolean(saved.basketballPhotoShared),
        basketballPhotoChatCompleted: Boolean(saved.basketballPhotoChatCompleted),
        basketballMatchCompleted: Boolean(saved.basketballMatchCompleted),
        eveningStudyCompleted: Boolean(saved.eveningStudyCompleted),
        sawSecretFolder: Boolean(saved.sawSecretFolder),
        baidupanFolderPositions: normalizeBaidupanFolderPositions(saved.baidupanFolderPositions),
        secretChoice: saved.secretChoice ?? null,
        secretAgreementSigned: Boolean(saved.secretAgreementSigned),
        secretGroupChatStarted: Boolean(saved.secretGroupChatStarted),
        secretGroupChatCompleted: Boolean(saved.secretGroupChatCompleted),
        nightClassroomCompleted: Boolean(saved.nightClassroomCompleted),
        returnedToDormAtNight: Boolean(saved.returnedToDormAtNight),
        nightRoutineCompleted: Boolean(saved.nightRoutineCompleted),
        lightsOut: Boolean(saved.lightsOut),
        nightCallInvited: Boolean(saved.nightCallInvited),
        nightCallJoined: Boolean(saved.nightCallJoined),
        nightCallCompleted: Boolean(saved.nightCallCompleted),
        nightCallMessageIndex: clamp(Number(saved.nightCallMessageIndex) || 0, 0, nightCallScript.length),
        nightCallDeclinedOnce: Boolean(saved.nightCallDeclinedOnce),
        nightInventoryMode: Boolean(saved.nightInventoryMode),
        nightPhoneClosed: Boolean(saved.nightPhoneClosed),
        dayOneReflectionIndex: clamp(Number(saved.dayOneReflectionIndex) || 0, 0, dayOneReflectionLines.length),
        dayOneCompleted: Boolean(saved.dayOneCompleted),
        currentEndingType: saved.currentEndingType ?? null,
        currentDay: Math.max(1, Number(saved.currentDay) || 1),
      };
    }
  } catch {
    gameState = { ...gameState };
  }

  if (!gameState.playthroughId) gameState.playthroughId = generatePlaythroughId();
  gameState.currentStoryOrder = Math.max(0, Number(gameState.currentStoryOrder) || 0);
  gameState.completedNodeIds = Array.isArray(gameState.completedNodeIds) ? [...new Set(gameState.completedNodeIds)] : [];
  gameState.peBranches = normalizePeBranches(gameState.peBranches);
  gameState.photos = normalizePhotos(gameState.photos);
  gameState.cameraTarget = normalizeCameraTarget(gameState.cameraTarget);
  gameState.cameraHotspot = gameState.cameraHotspot ?? null;
  syncTiangeDecorationState();
  gameState.brinGameScores = normalizeBrinScores(gameState.brinGameScores);
  gameState.mathPuzzleBoard = normalizeMathPuzzleBoard(gameState.mathPuzzleBoard);
  gameState.mathPuzzleAnimating = false;
  gameState.mathPuzzleQianMode = Boolean(gameState.mathPuzzleQianMode);
  gameState.dinnerOrder = normalizeDinnerOrder(gameState.dinnerOrder);
  gameState.campusWalkPhotos = {
    curtain: Boolean(gameState.campusWalkPhotos?.curtain),
    board: Boolean(gameState.campusWalkPhotos?.board),
    classSign: Boolean(gameState.campusWalkPhotos?.classSign),
    gymnasium: Boolean(gameState.campusWalkPhotos?.gymnasium),
    eveningRoad: Boolean(gameState.campusWalkPhotos?.eveningRoad),
  };
  gameState.basketballPhotos = normalizeBasketballPhotos(gameState.basketballPhotos);
  gameState.baidupanFolderPositions = normalizeBaidupanFolderPositions(gameState.baidupanFolderPositions);
  if (!gameState.currentStoryOrder && gameState.currentScene !== "start") {
    const currentCheckpointId = getCheckpointIdForScene(gameState.currentScene);
    gameState.currentStoryOrder = CHECKPOINT_DEFINITIONS[currentCheckpointId]?.storyOrder ?? 0;
  }
  gameState.achievements = {
    ...gameState.achievements,
    ...getAchievements(),
  };
};

const saveGameState = () => {
  try {
    createOrUpdateCheckpointForCurrentScene();
    localStorage.setItem(gameStateKey, JSON.stringify(gameState));
  } catch (error) {
    console.warn("保存游戏状态失败", error);
    if (runtimeState.endingInProgress) showToast("结局已完成，但存档写入失败。", 2400);
  }
};

let checkpointSystemReady = false;
let checkpointLibrary = null;
let checkpointPanel = null;
let checkpointButton = null;
let checkpointActiveTab = "main";
let pendingCheckpointRestoreId = null;
let hotbarTools = null;
let achievementState = null;
let achievementPanel = null;
let achievementButton = null;
let achievementToastQueue = [];
let achievementToastActive = false;
let achievementSyncSilent = false;
let easterEggState = null;
let easterEggButton = null;
let easterEggPanel = null;
let easterEggToastQueue = [];
let easterEggToastActive = false;
let calculatorDialog = null;
let calculatorInput = "";
let mathTeacherClickCount = 0;
let endingState = null;
const runtimeState = {
  isBooting: true,
  isHydratingSave: false,
  isRestoringCheckpoint: false,
  achievementToastsEnabled: false,
  endingInProgress: false,
  endingTypewriterRunning: false,
  endingTypewriterToken: null,
  endingTimeouts: [],
  endingIntervals: [],
  endingAnimationFrame: null,
  endingCleanupFns: [],
  bonusLyricsPlaying: false,
  returningFromEnding: false,
};

const createEmptyCheckpointLibrary = () => ({
  version: 2,
  playthroughs: {},
});

const getCheckpointStore = (playthroughId = gameState.playthroughId) => {
  if (!checkpointLibrary) checkpointLibrary = createEmptyCheckpointLibrary();
  if (!checkpointLibrary.playthroughs) checkpointLibrary.playthroughs = {};
  if (!checkpointLibrary.playthroughs[playthroughId]) {
    checkpointLibrary.playthroughs[playthroughId] = {
      visitedIds: [],
      snapshots: {},
    };
  }
  return checkpointLibrary.playthroughs[playthroughId];
};

const getCheckpointSnapshot = (id) => getCheckpointStore().snapshots[id] ?? null;

const loadCheckpointLibrary = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(checkpointLibraryKey));
    if (!saved || typeof saved !== "object") return createEmptyCheckpointLibrary();
    if (saved.version === 2 && saved.playthroughs && typeof saved.playthroughs === "object") {
      return repairCheckpointLibrary(saved);
    }

    const migrated = createEmptyCheckpointLibrary();
    const store = {
      visitedIds: [],
      snapshots: {},
    };
    const legacySnapshots = saved.snapshots && typeof saved.snapshots === "object" ? saved.snapshots : {};
    Object.entries(legacySnapshots).forEach(([id, snapshot]) => {
      const definition = CHECKPOINT_DEFINITIONS[id];
      if (!definition || !snapshot?.state?.currentScene) return;
      const storyOrder = Number(snapshot.storyOrder ?? definition.storyOrder ?? 0);
      if (!storyOrder || storyOrder > gameState.currentStoryOrder) return;
      const repaired = {
        ...snapshot,
        checkpointVersion: 2,
        id,
        title: definition.title,
        category: definition.category,
        chapter: definition.chapter,
        storyOrder,
        playthroughId: gameState.playthroughId,
        reachedByGameplay: true,
        reachedAt: snapshot.reachedAt ?? snapshot.createdAt ?? snapshot.updatedAt ?? Date.now(),
        state: {
          ...snapshot.state,
          playthroughId: gameState.playthroughId,
          currentStoryOrder: Number(snapshot.state.currentStoryOrder ?? storyOrder),
        },
      };
      if (validateCheckpointSnapshot(repaired)) {
        store.snapshots[id] = repaired;
        store.visitedIds.push(id);
      }
    });
    migrated.playthroughs[gameState.playthroughId] = store;
    return repairCheckpointLibrary(migrated);
  } catch {
    return createEmptyCheckpointLibrary();
  }
};

const repairCheckpointLibrary = (library) => {
  const repaired = {
    version: 2,
    playthroughs: {},
  };
  const playthroughs = library.playthroughs && typeof library.playthroughs === "object" ? library.playthroughs : {};
  Object.entries(playthroughs).forEach(([playthroughId, store]) => {
    if (!playthroughId || !store || typeof store !== "object") return;
    const snapshots = store.snapshots && typeof store.snapshots === "object" ? store.snapshots : {};
    const nextStore = {
      visitedIds: [],
      snapshots: {},
    };
    Object.entries(snapshots).forEach(([id, snapshot]) => {
      const definition = CHECKPOINT_DEFINITIONS[id];
      const storyOrder = Number(snapshot?.storyOrder ?? definition?.storyOrder ?? 0);
      if (!definition || !storyOrder || !snapshot?.state?.currentScene) return;
      if (snapshot.reachedByGameplay !== true || snapshot.playthroughId !== playthroughId || !snapshot.reachedAt) return;
      const repairedSnapshot = {
        ...snapshot,
        checkpointVersion: 2,
        id,
        title: definition.title,
        category: definition.category,
        chapter: definition.chapter,
        storyOrder,
        playthroughId,
        state: {
          ...snapshot.state,
          playthroughId,
          currentStoryOrder: Number(snapshot.state.currentStoryOrder ?? storyOrder),
        },
      };
      if (!validateCheckpointSnapshot(repairedSnapshot)) return;
      nextStore.snapshots[id] = repairedSnapshot;
      nextStore.visitedIds.push(id);
    });
    repaired.playthroughs[playthroughId] = nextStore;
  });
  return repaired;
};

const saveCheckpointLibrary = () => {
  try {
    localStorage.setItem(checkpointLibraryKey, JSON.stringify(checkpointLibrary));
    return true;
  } catch (error) {
    if (error?.name === "QuotaExceededError") {
      showToast("回档数据空间不足，未能更新此节点。", 2600);
    } else {
      console.warn("保存回档资料库失败", error);
    }
    return false;
  }
};

const sanitizeGameStateForCheckpoint = (state) => {
  const copy = JSON.parse(JSON.stringify(state));
  copy.isModalOpen = false;
  copy.isGameplayActive = Boolean(state.isGameplayActive);
  copy.mathPuzzleAnimating = false;
  copy.cameraHotspot = state.cameraHotspot ?? null;
  copy.selectedDecorItemId = state.selectedDecorItemId ?? null;
  copy.photos = normalizePhotos(copy.photos).map((photo) => ({
    id: photo.id,
    title: photo.title,
    image: photo.image,
    scene: photo.scene,
    capturedAt: photo.capturedAt,
    hidden: Boolean(photo.hidden),
    decorations: Array.isArray(photo.decorations) ? photo.decorations : undefined,
  }));
  return copy;
};

const getCheckpointIdForScene = (scene = gameState.currentScene) => {
  if (scene === "route" && gameState.needCheckSchedule && !gameState.checkedSchedule) return "scheduleCheck";
  if (scene === "afterDinnerClassroom" && gameState.basketballPreChatStarted) return "basketballPreChat";
  if (scene === "physicsContinue" && gameState.physicsWorkbookResult === "success") return "physicsWorkbookSuccess";
  if (scene === "mathEarlyDismissal") return "mathPuzzleSuccess";
  if (scene === "mathDetentionHomework") return "mathPuzzleFail";
  return CHECKPOINT_SCENE_MAP[scene] ?? null;
};

const createOrUpdateCheckpointForCurrentScene = () => {
  if (!checkpointSystemReady || runtimeState.isRestoringCheckpoint) return;
  const checkpointId = getCheckpointIdForScene();
  if (!checkpointId || !CHECKPOINT_DEFINITIONS[checkpointId]) return;
  createOrUpdateCheckpoint(checkpointId);
};

const createOrUpdateCheckpoint = (id) => {
  const definition = CHECKPOINT_DEFINITIONS[id];
  if (!definition || gameState.currentScene === "start") return false;
  const now = Date.now();
  const store = getCheckpointStore();
  const previous = store.snapshots[id];
  const storyOrder = Number(definition.storyOrder) || 0;
  if (storyOrder) gameState.currentStoryOrder = storyOrder;
  const snapshotState = sanitizeGameStateForCheckpoint({
    ...gameState,
    playthroughId: gameState.playthroughId,
    currentStoryOrder: gameState.currentStoryOrder,
  });
  store.snapshots[id] = {
    checkpointVersion: 2,
    id,
    title: definition.title,
    category: definition.category,
    scene: gameState.currentScene,
    chapter: definition.chapter,
    description: definition.description ?? "",
    storyOrder,
    playthroughId: gameState.playthroughId,
    reachedByGameplay: true,
    reachedAt: previous?.reachedAt ?? now,
    createdAt: previous?.createdAt ?? now,
    updatedAt: now,
    state: snapshotState,
  };
  if (!store.visitedIds.includes(id)) store.visitedIds.push(id);
  return saveCheckpointLibrary();
};

const validateCheckpointSnapshot = (snapshot) =>
  Boolean(
    snapshot?.id &&
      snapshot?.state &&
      typeof snapshot.state === "object" &&
      snapshot.state.currentScene &&
      CHECKPOINT_DEFINITIONS[snapshot.id],
  );

const canDisplayCheckpoint = (id) => {
  const snapshot = getCheckpointSnapshot(id);
  if (!snapshot) return false;
  if (snapshot.reachedByGameplay !== true) return false;
  if (snapshot.playthroughId !== gameState.playthroughId) return false;
  if (!snapshot.reachedAt) return false;
  if (!validateCheckpointSnapshot(snapshot)) return false;
  if (Number(snapshot.storyOrder) > Number(gameState.currentStoryOrder)) return false;
  return true;
};

const canRestoreCheckpoint = (id) => canDisplayCheckpoint(id);

const migrateCheckpointState = (snapshot) => {
  const backup = gameState;
  gameState = {
    ...gameState,
    ...snapshot.state,
  };
  const migrated = JSON.parse(JSON.stringify(gameState));
  gameState = backup;
  return migrated;
};

const getHotbarTools = () => {
  if (!hotbarTools) {
    hotbarTools = document.createElement("div");
    hotbarTools.className = "hotbar-tools hidden";
    document.body.append(hotbarTools);
  }
  return hotbarTools;
};

const updateUtilityToolVisibility = () => {
  updateCheckpointButtonVisibility();
  updateAchievementButtonVisibility();
  updateEasterEggButtonVisibility();
};

const closeAllUtilityPanels = () => {
  closeCheckpointPanel();
  closeAchievementPanel();
  closeEasterEggPanel();
  closeCalculatorPanel();
};

const setGameplayActive = (active) => {
  gameState.isGameplayActive = active;
  document.body.classList.toggle("is-start-screen", !active);
  gameHud.classList.toggle("hud-hidden", !active);
  saveGameState();
  syncHungerTimer();
  updateUtilityToolVisibility();
};

const setModalOpen = (open) => {
  gameState.isModalOpen = open;
  syncHungerTimer();
  syncTeacherDistanceTimer();
  updateUtilityToolVisibility();
};

const syncHungerTimer = () => {
  window.clearInterval(hungerTimer);
  hungerTimer = null;

  if (!gameState.isGameplayActive || gameState.isModalOpen || document.hidden) return;

  hungerTimer = window.setInterval(() => {
    decreaseHunger(1);
  }, HUNGER_DECAY_INTERVAL_MS);
};

const renderStatusBar = (container, value, fullClass, emptyClass, fullSymbol, emptySymbol) => {
  container.innerHTML = "";
  for (let index = 0; index < 10; index += 1) {
    const icon = document.createElement("span");
    icon.className = `status-icon ${index < value ? fullClass : emptyClass}`;
    icon.textContent = index < value ? fullSymbol : emptySymbol;
    container.append(icon);
  }
};

const renderHud = () => {
  gameHud.classList.toggle("night-inventory-mode", Boolean(gameState.nightInventoryMode));
  gameHud.classList.toggle("night-phone-hidden", Boolean(gameState.nightPhoneClosed));
  renderStatusBar(healthBar, gameState.health, "heart-full", "heart-empty", "♥", "♡");
  renderStatusBar(hungerBar, gameState.hunger, "hunger-full", "hunger-empty", "🍗", "🍗");
  renderHotbar();
};

const setHealth = (value) => {
  gameState.health = clamp(value, 0, MAX_HEALTH);
  if (gameState.health === 0) {
    showToast("你有点撑不住了。也许该休息一下。", 2600);
  }
  renderHud();
  saveGameState();
};

const damageHealth = (amount) => setHealth(gameState.health - amount);

const restoreHealth = (amount) => setHealth(gameState.health + amount);

const setHunger = (value) => {
  gameState.hunger = clamp(value, 0, MAX_HUNGER);
  if (gameState.hunger === 0) {
    showToast("你真的有点饿了。", 2400);
  }
  renderHud();
  saveGameState();
};

const decreaseHunger = (amount) => setHunger(gameState.hunger - amount);

const restoreHunger = (amount) => setHunger(gameState.hunger + amount);

const resetMorningStatus = () => {
  gameState.playthroughId = generatePlaythroughId();
  gameState.currentStoryOrder = 0;
  gameState.gameStarted = true;
  gameState.completedNodeIds = [];
  gameState.health = MAX_HEALTH;
  gameState.hunger = MAX_HUNGER;
  gameState.inventory = [];
  gameState.breakfastOrder = createEmptyBreakfastOrder();
  gameState.lunchOrder = createEmptyLunchOrder();
  gameState.dinnerOrder = createEmptyDinnerOrder();
  gameState.ateBreakfast = false;
  gameState.ateLunch = false;
  gameState.ateDinner = false;
  gameState.pendingPayment = false;
  gameState.pendingOrderType = null;
  gameState.returnedFromCafeteria = false;
  gameState.needCheckSchedule = false;
  gameState.askedSchedule = false;
  gameState.checkedSchedule = false;
  gameState.skippedBreakfastPenaltyApplied = false;
  gameState.wechatMessages = { classGroup: [] };
  gameState.currentClass = "";
  gameState.currentTeacher = "";
  gameState.teacherDistance = 4;
  gameState.phoneConfiscated = false;
  gameState.phoneAvailable = true;
  gameState.eslChatTaskStarted = false;
  gameState.eslChatTaskCompleted = false;
  gameState.eslChatIndex = 0;
  gameState.zzyNicknameChanged = false;
  gameState.easterEggs = {};
  gameState.recessChoice = null;
  gameState.physicsWorkbookProgress = 50;
  gameState.physicsWorkbookResult = null;
  gameState.physicsWorkbookMiniGameActive = false;
  gameState.physicsStairChatStarted = false;
  gameState.physicsStairChatCompleted = false;
  gameState.physicsDormChatStarted = false;
  gameState.physicsDormChatCompleted = false;
  gameState.peIntroCompleted = false;
  gameState.peLap = 0;
  gameState.peRunCompleted = false;
  gameState.peBranches = normalizePeBranches(null);
  gameState.lunchSceneCompleted = false;
  gameState.photos = [];
  gameState.cameraTarget = null;
  gameState.cameraHotspot = null;
  gameState.applauseValue = 1;
  gameState.secondPianoSongUnlocked = false;
  gameState.tiangeDecorSceneStarted = false;
  gameState.tiangeDecorSceneCompleted = false;
  gameState.tiangeDecorItemsGiven = false;
  gameState.tiangeDecorAllPlaced = false;
  gameState.tiangeDecorCompleted = false;
  gameState.tiangePhotoTaken = false;
  gameState.decorItems = normalizeDecorItems(null);
  gameState.tiangeDecorations = normalizeDecorItems(null);
  gameState.selectedDecorItemId = null;
  gameState.brinGroupingViewed = false;
  gameState.brinRoundOneCompleted = false;
  gameState.brinRoundTwoCompleted = false;
  gameState.brinRoundTwoAnswer = null;
  gameState.brinGhostStoryCompleted = false;
  gameState.brinHorseshoeDrawn = false;
  gameState.brinClassCompleted = false;
  gameState.brinGameScores = { A: 0, B: 0, C: 0 };
  gameState.mathPuzzleStarted = false;
  gameState.mathPuzzleCompleted = false;
  gameState.mathPuzzleResult = null;
  gameState.mathPuzzleTimeLeft = MATH_PUZZLE_SECONDS;
  gameState.mathPuzzleMoves = 0;
  gameState.mathPuzzleBoard = [];
  gameState.mathPuzzleStartedAt = null;
  gameState.mathPuzzleAnimating = false;
  gameState.mathPuzzleQianMode = false;
  gameState.mathHomeworkPages = 0;
  gameState.campusWalkStarted = false;
  gameState.campusWalkStep = "intro";
  gameState.campusWalkPhotos = {
    curtain: false,
    board: false,
    classSign: false,
    gymnasium: false,
    eveningRoad: false,
  };
  gameState.dinnerCompleted = false;
  gameState.basketballPreChatStarted = false;
  gameState.basketballPreChatCompleted = false;
  gameState.basketballPhotos = normalizeBasketballPhotos(null);
  gameState.basketballPhotoShared = false;
  gameState.basketballPhotoChatCompleted = false;
  gameState.basketballMatchCompleted = false;
  gameState.eveningStudyCompleted = false;
  gameState.sawSecretFolder = false;
  gameState.baidupanFolderPositions = normalizeBaidupanFolderPositions(null);
  gameState.secretChoice = null;
  gameState.secretAgreementSigned = false;
  gameState.secretGroupChatStarted = false;
  gameState.secretGroupChatCompleted = false;
  gameState.nightClassroomCompleted = false;
  gameState.returnedToDormAtNight = false;
  gameState.nightRoutineCompleted = false;
  gameState.lightsOut = false;
  gameState.nightCallInvited = false;
  gameState.nightCallJoined = false;
  gameState.nightCallCompleted = false;
  gameState.nightCallMessageIndex = 0;
  gameState.nightCallDeclinedOnce = false;
  gameState.nightInventoryMode = false;
  gameState.nightPhoneClosed = false;
  gameState.dayOneReflectionIndex = 0;
  gameState.dayOneCompleted = false;
  gameState.currentEndingType = null;
  gameState.currentDay = 1;
  saveGameState();
  renderHud();
};

const warnMissingAsset = (path) => {
  const image = new Image();
  image.onerror = () => console.warn(`缺少图片文件：${path}`);
  image.src = path;
};

const normalizeWechatMessages = (messages) => ({
  classGroup: Array.isArray(messages?.classGroup) ? messages.classGroup : [],
});

const getClassGroupMessages = () => {
  gameState.wechatMessages = normalizeWechatMessages(gameState.wechatMessages);
  return gameState.wechatMessages.classGroup;
};

const hasScheduleReply = () =>
  getClassGroupMessages().some((message) => message.type === "schedule" && message.sender === "罗罗");

const addClassGroupMessage = (message) => {
  const messages = getClassGroupMessages();
  messages.push(message);
  saveGameState();
};

// Narrative system: types one paragraph at a time and unlocks choices only after the text finishes.
const typeParagraphs = async (paragraphs, speed = 42) => {
  isTyping = true;
  continueButton.classList.add("hidden");
  choiceGrid.classList.add("hidden");
  storyText.classList.remove("done");
  storyText.innerHTML = "";

  for (const paragraph of paragraphs) {
    const node = document.createElement("p");
    storyText.append(node);

    for (const char of paragraph) {
      node.textContent += char;
      await sleep(speed);
    }

    await sleep(420);
  }

  storyText.classList.add("done");
  isTyping = false;
};

const showContinue = (step) => {
  storyStep = step;
  continueButton.classList.remove("hidden");
};

const setChoices = (choices) => {
  choiceGrid.innerHTML = "";
  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = choice.label;
    button.addEventListener("click", choice.onChoose);
    choiceGrid.append(button);
  });
  choiceGrid.classList.remove("hidden");
};

const startFirstAct = async () => {
  document.body.classList.remove("is-start-screen");
  runtimeState.achievementToastsEnabled = true;
  resetMorningStatus();
  gameState.currentScene = "dormOpening";
  setGameplayActive(true);
  await showScreen(storyScreen, "dorm-background");
  sceneLabel.textContent = "第一幕：宿舍 · 清晨";
  await typeParagraphs(["你醒啦。今天是2023年9月23日，你在英澳美读高一。"], 58);
  markStoryNodeCompleted("dormWakeIntroCompleted");
  showContinue("waking");
};

const showWakingDescription = async () => {
  gameState.currentScene = "waking";
  saveGameState();
  await showScreen(storyScreen, "black-background");
  sceneLabel.textContent = "第一幕：宿舍 · 清晨";
  await typeParagraphs(
    [
      "宿舍里还没有完全亮起来。",
      "窗帘缝隙里漏进一点浅白色的天光，像有人把清晨小心翼翼地放在了地板上。空调的风还在低低地响，床栏冰凉，枕头边有一点洗衣液和被晒过的棉布味。",
      "你躺在上铺，听见远处有人翻身，床板轻轻响了一下。走廊外传来模糊的脚步声，又很快消失。手机还黑着屏，世界像一张刚刚加载出来的地图，而你还没有决定要不要进入它。",
      "今天是你在英澳美读高一的某个普通早晨。普通到没有人会提前知道，它以后会在记忆里反复发光。",
    ],
    34,
  );
  setMorningChoices();
};

const setMorningChoices = () => {
  setChoices([
    {
      label: "下床",
      onChoose: startPackingScene,
    },
    {
      label: "再睡一会",
      onChoose: snoozeOnce,
    },
  ]);
};

const snoozeOnce = async () => {
  await typeParagraphs(
    ["你把被子往上拉了一点，闭上眼睛，试图把这个早晨再往后推迟五分钟。"],
    36,
  );
  await sleep(650);
  await showScreen(storyScreen, "black-background");
  storyText.innerHTML = "";
  storyText.classList.add("done");
  setMorningChoices();
};

const packingItems = [
  {
    id: "phone",
    name: "手机",
    note: "屏幕还黑着",
    icon: "▯",
    image: "./assets/items/phone.jpg?v=1",
    x: 22,
    y: 63,
    width: 122,
  },
  {
    id: "calculator",
    name: "卡西欧计算器",
    note: "数学课会用到",
    icon: "▦",
    image: "./assets/items/calculator.jpg?v=1",
    x: 42,
    y: 73,
    width: 118,
  },
  {
    id: "pencilCase",
    name: "笔袋",
    note: "拉链上有小小的响声",
    icon: "▰",
    image: "./assets/items/pencil-case.jpg?v=1",
    x: 61,
    y: 62,
    width: 132,
  },
  {
    id: "books",
    name: "书本",
    note: "英语阅读练习册",
    icon: "▤",
    image: "./assets/items/book.jpg?v=1",
    x: 36,
    y: 84,
    width: 128,
  },
  {
    id: "cup",
    name: "水杯",
    note: "杯壁还有一点凉",
    icon: "◯",
    image: "./assets/items/cup.jpg?v=1",
    x: 72,
    y: 72,
    width: 112,
  },
];

const inventoryCatalog = packingItems.map((item) => ({
  id: item.id,
  name: item.name,
  icon: item.icon,
  image: item.image,
}));

const characters = [
  { id: "luoluo", name: "罗罗", gender: "female", unlocked: true, description: "" },
  { id: "gyy", name: "gyy", gender: "female", unlocked: true, description: "" },
  { id: "rql", name: "rql", gender: "female", unlocked: true, description: "" },
  { id: "yyx", name: "yyx", gender: "female", unlocked: true, description: "" },
  { id: "wwz", name: "wwz", gender: "female", unlocked: true, description: "" },
  { id: "dyc", name: "dyc", gender: "female", unlocked: true, description: "" },
  { id: "qjy", name: "qjy", gender: "female", unlocked: true, description: "" },
  { id: "tiange", name: "舔哥", gender: "male", unlocked: true, description: "" },
  { id: "hjp", name: "hjp", gender: "male", unlocked: true, description: "" },
  { id: "hkx", name: "hkx", gender: "male", unlocked: true, description: "" },
  { id: "nianyu", name: "鲶鱼", gender: "male", unlocked: true, description: "" },
  { id: "banzhang", name: "班长", gender: "male", unlocked: true, description: "" },
  { id: "zzy", name: "zzy", gender: "male", unlocked: true, description: "" },
  { id: "gaoyuan", name: "高原", gender: "male", unlocked: true, description: "" },
  { id: "luge", name: "陆哥", gender: "male", unlocked: true, description: "" },
  { id: "lyq", name: "lyq", gender: "male", unlocked: true, description: "" },
];

const breakfastMenu = [
  { id: "xiaolongbao", name: "小笼包", unit: "笼", price: 5 },
  { id: "egg", name: "荷包蛋", unit: "个", price: 2 },
  { id: "milk", name: "牛奶", unit: "瓶", price: 3 },
  { id: "sausage", name: "烤香肠", unit: "根", price: 2 },
  { id: "springRoll", name: "春卷", unit: "个", price: 2 },
];

const lunchMenu = [
  { id: "tomatoTofuSoup", name: "番茄金针菇嫩豆腐汤", unit: "份", price: 5 },
  { id: "broccoli", name: "清炒西兰花", unit: "份", price: 4 },
  { id: "beefPotato", name: "土豆炖牛腩", unit: "份", price: 6 },
  { id: "softEgg", name: "溏心荷包蛋", unit: "个", price: 3 },
  { id: "beefRice", name: "肥牛饭", unit: "份", price: 10 },
  { id: "malatangPot", name: "麻辣香锅", unit: "份", price: 20 },
  { id: "sizzlingBeefRice", name: "铁板烤牛肉饭", unit: "份", price: 20 },
  { id: "wanglaoji", name: "王老吉", unit: "瓶", price: 3 },
  { id: "iceTea", name: "冰红茶", unit: "瓶", price: 3.5 },
];

const dinnerMenu = [
  {
    id: "dinnerSet1",
    name: "套餐一",
    description: "番茄金针菇肥牛卷 + 清炒油麦菜 + 一碗米饭",
    unit: "套",
    price: 25,
  },
  {
    id: "dinnerSet2",
    name: "套餐二",
    description: "香煎鸡胸肉 + 凉拌黄瓜 + 杂粮饭",
    unit: "套",
    price: 27,
  },
  {
    id: "dinnerSet3",
    name: "套餐三",
    description: "鸡蛋炒西葫芦 + 红烧嫩豆腐 + 白米饭",
    unit: "套",
    price: 25,
  },
  {
    id: "dinnerSet4",
    name: "套餐四",
    description: "虾仁滑蛋 + 蒜蓉生菜",
    unit: "套",
    price: 20,
  },
  {
    id: "dinnerSet5",
    name: "套餐五",
    description: "腊肠土豆焖饭",
    unit: "套",
    price: 20,
  },
];

const campusPhotoSteps = [
  {
    key: "curtain",
    scene: "classroomCurtain",
    background: "campus-photo-1-background",
    label: "教室 · 窗帘旁",
    target: { id: "campus-photo-1", title: "教室窗帘", image: campusPhoto1Path, scene: "classroomCurtain" },
    lines: [
      "你们还没有立刻离开教室。",
      "窗帘被下午的光照得很柔，布料边缘轻轻晃动。",
      "你忽然觉得这个角落特别有氛围感。",
      "这种看起来很普通的画面，以后反而最容易被忘记。",
      "打开手机，把这一刻拍下来。",
    ],
    nextText: "收起手机，去黑板看看",
    next: "board",
  },
  {
    key: "board",
    scene: "classroomBoard",
    background: "campus-photo-2-background",
    label: "教室 · 黑板前",
    target: { id: "campus-photo-2", title: "教室黑板", image: campusPhoto2Path, scene: "classroomBoard" },
    lines: [
      "你们又走到了黑板附近。",
      "刚才上课留下的痕迹还没有完全擦干净。",
      "板书、粉笔灰和午后的教室叠在一起，像一天课程留下的横截面。",
      "罗罗：“这里也拍一张吧。”",
    ],
    nextText: "离开教室",
    next: "classSign",
  },
  {
    key: "classSign",
    scene: "classSign",
    background: "campus-photo-3-background",
    label: "教室门口 · 班牌",
    target: { id: "campus-photo-3", title: "教室门口的班牌", image: campusPhoto3Path, scene: "classSign" },
    lines: [
      "走出教室以后，你们在班牌旁边停了下来。",
      "这个每天进出都会看到的地方，平时几乎不会有人特意注意。",
      "但今天站在这里看，它忽然有了一点值得留下来的意义。",
      "高原：“这个也要拍？”",
      "你：“当然。”",
    ],
    nextText: "继续往外走",
    next: "stairs",
  },
  {
    key: "gymnasium",
    scene: "gymnasium",
    background: "campus-photo-4-background",
    label: "体育馆",
    target: { id: "campus-photo-4", title: "体育馆", image: campusPhoto4Path, scene: "gymnasium" },
    lines: [
      "离开教学楼以后，你们一路走到了体育馆。",
      "体育馆附近比教学楼空旷很多，声音也被拉得很远。",
      "舔哥走在前面，罗罗和高原还在聊刚才的数学课。",
      "你停下来，看着眼前的画面，觉得也应该拍一张。",
    ],
    afterPhotoLines: [
      "等你把手机收起来，才发现天色已经比刚才暗了一些。",
      "罗罗：“差不多该吃饭了吧。”",
      "舔哥：“去食堂。”",
    ],
    nextText: "前往食堂",
    next: "eveningRoad",
  },
  {
    key: "eveningRoad",
    scene: "eveningRoad",
    background: "campus-photo-5-background",
    label: "前往食堂 · 傍晚",
    target: { id: "campus-photo-5", title: "前往食堂的傍晚", image: campusPhoto5Path, scene: "eveningRoad" },
    lines: [
      "你们沿着去食堂的路慢慢往前走。",
      "太阳已经开始往下沉，天空和路面都被晚光染得很柔。",
      "树影拉得很长，白天熟悉的校园像换了一层颜色。",
      "你走了几步，又忍不住停下来。",
      "你：“等一下，这里真的很好看。”",
      "高原：“你今天已经拍了多少张了？”",
      "再拍一张。",
    ],
    nextText: "收起手机，进入食堂",
    next: "dinner",
  },
];

const basketballPreChatScript = [
  { sender: "罗罗", text: "我们班待会打篮球赛，你们谁来看吗？", type: "text" },
  { sender: "player", text: "我来。", type: "text" },
  { sender: "ljq", text: "之前钱俊豪的正义之烟的表情谁能发我", type: "text" },
  { sender: "scf", text: "对对", type: "text" },
  { sender: "scf", text: "我也没存", type: "text" },
  { sender: "gyy", type: "photo", title: "表情包2", image: basketballSticker2Path },
  { sender: "ljq", text: "收下了", type: "text" },
  { sender: "ljq", text: "👌", type: "text" },
  { sender: "罗罗", type: "photo", title: "表情包3", image: basketballSticker3Path },
  { sender: "player", type: "photo", title: "表情包3", image: basketballSticker3Path, buttonText: "发送表情包3" },
  { sender: "scf", type: "photo", title: "表情包4", image: basketballSticker4Path },
  { sender: "ljq", text: "炸裂，应该把jsx的色调调暗一点", type: "text" },
  { sender: "罗罗", text: "没办法", type: "text" },
  { sender: "罗罗", type: "photo", title: "表情包3", image: basketballSticker3Path },
  { sender: "player", text: "篮球赛什么时候开始来着，我来看看", type: "text" },
  { sender: "罗罗", text: "六点半，不过Susie说七点半还要回去上晚自习😓", type: "text" },
  { sender: "player", text: "感谢感谢。", type: "text" },
];

const basketballShareReplies = [
  { sender: "gyy", type: "photo", title: "篮球赛 · 比赛进行中", image: basketballCourt3Path },
  { sender: "ljq", type: "photo", title: "篮球赛 · 最后时刻", image: basketballCourt5Path },
];

const basketballPhotoSteps = [
  {
    key: "photo3",
    scene: "basketballGame3",
    label: "篮球赛 · 比赛进行中",
    background: "basketball-court-3-background",
    target: { id: "basketball-photo-3", title: "篮球赛 · 比赛进行中", image: basketballCourt3Path, scene: "basketballGame3" },
    lines: ["比赛越来越激烈。", "你拿出手机，想把这一刻拍下来。"],
    nextText: "继续观看",
  },
  {
    key: "photo4",
    scene: "basketballGame4",
    label: "篮球赛 · 应援时刻",
    background: "basketball-court-4-background",
    target: { id: "basketball-photo-4", title: "篮球赛 · 应援时刻", image: basketballCourt4Path, scene: "basketballGame4" },
    lines: ["比分一直咬得很紧。", "场上的人奔跑、传球、起跳，每一下都牵着场边的呼吸。", "你又举起了手机。"],
    nextText: "继续观看",
  },
  {
    key: "photo5",
    scene: "basketballGame5",
    label: "篮球赛 · 最后时刻",
    background: "basketball-court-5-background",
    target: { id: "basketball-photo-5", title: "篮球赛 · 最后时刻", image: basketballCourt5Path, scene: "basketballGame5" },
    lines: ["比赛已经接近最后阶段。", "球场边所有人的注意力都被最后几次进攻拽住。", "你按下了今天在篮球场上的第三次快门。"],
    nextText: "发到班级群",
  },
];

const secretCrypticChatScript = [
  { sender: "高原", text: "咳咳", type: "text" },
  { sender: "player", text: "嗯嗯", type: "text" },
  { sender: "罗罗", text: "没什么", type: "text" },
  { sender: "鲶鱼", text: "得哮喘了？", type: "text" },
  { sender: "wwz", text: "别当谜语人。", type: "text" },
  { sender: "player", text: "我", type: "text" },
  { sender: "罗罗", text: "们", type: "text" },
  { sender: "高原", text: "真", type: "text" },
  { sender: "player", text: "的", type: "text" },
  { sender: "高原", text: "什", type: "text" },
  { sender: "罗罗", text: "么", type: "text" },
  { sender: "player", text: "都", type: "text" },
  { sender: "罗罗", text: "没", type: "text" },
  { sender: "player", text: "看", type: "text" },
  { sender: "高原", text: "到", type: "text" },
];

const baidupanFolders = [
  {
    id: "mathSlides",
    name: "数学课件",
    lines: ["Algebra Unit 1", "Functions.pptx", "Probability Review"],
  },
  {
    id: "igcsePapers",
    name: "IGCSE数学真题",
    lines: ["2021 Paper 2", "2022 Paper 4", "Mark Scheme"],
  },
  {
    id: "ebooks",
    name: "电子课本",
    lines: ["IGCSE Mathematics", "A-Level Pure Mathematics", "Statistics Workbook"],
  },
  {
    id: "ieltsAudio",
    name: "雅思听力音频",
    lines: ["Listening Test 1", "Listening Test 2", "Practice Audio"],
  },
  {
    id: "secretVideo",
    name: "神秘教学视频",
    secret: true,
  },
];

const nightCallParticipants = ["你", "罗罗", "高原", "舔哥", "gyy"];

const nightCallScript = [
  { time: "23:48", speaker: "罗罗", text: "都听得到吗？" },
  { speaker: "你", text: "听得到。" },
  { speaker: "gyy", text: "你们宿舍已经熄灯了吗？" },
  { speaker: "高原", text: "熄灯算什么，我的精神世界才刚刚天亮。" },
  { speaker: "罗罗", text: "你能不能正常一点。" },
  { speaker: "高原", text: "不能。正常是对我灵魂的一种限制。" },
  { speaker: "舔哥", text: "你先把声音调小点，整层楼都快听见你灵魂了。" },
  { speaker: "高原", text: "那说明我的灵魂有穿透力。" },
  { speaker: "gyy", text: "神经。" },
  { speaker: "高原", text: "谢谢，这是今晚收到的最高评价。" },
  { speaker: "罗罗", text: "对了，今天隔壁班又在群里阴阳我们班女生。" },
  { speaker: "gyy", text: "还说我们天天抱团，真的无语。" },
  { speaker: "高原", text: "这题我不会，交给专业人士。" },
  { speaker: "舔哥", text: "什么叫专业人士？" },
  { speaker: "高原", text: "你，互联网外交部发言人。" },
  { speaker: "舔哥", text: "行，我帮你们调理一下语言逻辑。" },
  { speaker: "舔哥", text: "第一句：我们抱团是因为关系好，不像有些人只能靠阴阳怪气刷存在感。" },
  { speaker: "舔哥", text: "第二句：有意见可以直接说，绕八百个弯最后连自己想表达什么都忘了。" },
  { speaker: "舔哥", text: "第三句最文明：谢谢关注我们班日常，不过建议先把注意力还给自己的生活。" },
  { speaker: "罗罗", text: "第三句太文明了，不像你。" },
  { speaker: "舔哥", text: "我是成熟了。" },
  { speaker: "gyy", text: "你只是怕被截图。" },
  { speaker: "高原", text: "外交部发言人当场被拆穿。" },
  { speaker: "你", text: "第三句确实最好，发出去还显得我们特别有素质。" },
  { speaker: "罗罗", text: "行，那就第三句。" },
  { time: "00:17", speaker: "高原", text: "话说今天那篮球赛真的吵得我耳朵疼。" },
  { speaker: "罗罗", text: "你喊得比谁都响。" },
  { speaker: "高原", text: "那是集体荣誉感。" },
  { time: "00:56", speaker: "舔哥", text: "你在场边喊的明明是“打他”。" },
  { speaker: "gyy", text: "哈哈哈哈哈哈哈。" },
  { time: "01:28", speaker: "你", text: "还有下午舔哥那个头发，我相册里还存着。" },
  { speaker: "舔哥", text: "删掉。" },
  { speaker: "罗罗", text: "不可能。" },
  { speaker: "高原", text: "建议设成班级群头像。" },
  { speaker: "舔哥", text: "我现在退出通话还来得及吗？" },
  { time: "02:03", speaker: "旁白", text: "通话里的声音已经比刚开始轻了很多。" },
  { speaker: "旁白", text: "有人说话说到一半会停顿几秒，宿舍里只剩下被子摩擦和远处空调的声音。" },
  { speaker: "gyy", text: "已经两点了。" },
  { speaker: "罗罗", text: "真的假的。" },
  { speaker: "舔哥", text: "睡吧，明天还要起床。" },
  { speaker: "高原", text: "我宣布本次会议圆满结束。" },
  { speaker: "你", text: "困死了，我先睡了。" },
];

const dayOneReflectionLines = [
  "你躺在黑暗里，终于想起，今天是从宿舍的一场清晨开始的。",
  "那时候书包还是空的，手机还安静地躺在床边。你整理好计算器、笔袋、书本和水杯，推开门，走进了这一天。",
  "你在食堂挑过早餐，在班级群里问过课表，也在吴欢老师靠近之前慌慌张张地收起过手机。",
  "你见过课间被笑声填满的seewo，见过李鸿翔伸手抢走真题册，也在操场上跑过两圈。",
  "你听过琴房里的钢琴，穿过小树林和竹林，在相册里留下了那些当时觉得普通、以后也许会反复翻看的画面。",
  "午后的教室里，舔哥的卷发被贴满星星和爱心。Brin讲了黑天鹅的故事，钱俊豪把数字华容道变成了一场六十秒的战争。",
  "傍晚，你和舔哥、高原、罗罗沿着校园慢慢走。窗帘、黑板、班牌、体育馆和去食堂的路，被一张张装进了手机相册。",
  "夜里的篮球场亮得像另一个世界。你们举着旗子，喊到嗓子发哑，最后一起把“冠军”两个字带回了教室。",
  "晚自习结束后，校园重新安静下来。seewo的光、空荡的走廊、夜晚的小道，还有刚刚结束的语音通话，都一点点沉进黑暗里。",
  "今天很长，也很乱。有人大笑，有人脸红，有人被罚站，有人把荒唐的话说得无比认真。",
  "可你忽然觉得，也许所谓的校园生活，本来就是这些没有被提前写进课表里的瞬间。",
  "明天醒来以后，它们会成为“昨天”。",
  "而现在，你终于可以睡了。",
  "第一日 · 结束",
];

const NORMAL_ENDING_PARAGRAPHS = [
  "手机屏幕彻底暗了下去。",
  "宿舍里很安静。空调的声音、翻身时被子摩擦的声音，还有走廊外偶尔经过的脚步声，慢慢混在了一起。",
  "你想起今天早上醒来的时候，书包还是空的，校园里的一切也才刚刚开始。",
  "早餐、课表、课堂、操场、食堂、篮球赛和晚自习，一件接着一件地从眼前经过。",
  "有些事情你参与了，有些路你没有走进去。",
  "也许琴房里还有一首没有听完的曲子，也许小树林深处还藏着没有被发现的风景。",
  "也许夜色里的池塘仍然安静，小道旁的某个角落，也曾有一只小猫抬头望向经过的人。",
  "那些没有发生的事情，并没有让这一天变得残缺。",
  "因为真实的一天，本来就不会把所有答案一次交给你。",
  "它只是在时间里经过，然后留下几段笑声、几张照片，还有一些以后偶尔会想起来的片刻。",
  "2023年9月23日，就这样结束了。",
];

const HAPPY_ENDING_PARAGRAPHS = [
  "手机屏幕熄灭以后，今天留下的画面却没有一起消失。",
  "它们安静地停在相册里，停在班级群的聊天记录里，也停在你还没有完全平静下来的脑海里。",
  "清晨，你从宿舍醒来，整理好书包，走出了那扇门。",
  "后来，你在课堂上偷偷打开过手机，在操场上跑过两圈，也在某个突然安静下来的瞬间举起相机。",
  "琴房里的琴声、竹林边的风、窗帘旁的光、篮球场上的欢呼，都被你一一留了下来。",
  "也许你还在某个不起眼的角落，发现了原本不会被课表记录的秘密。",
  "有些事情原本只会发生几分钟。",
  "可当你按下快门，当你在群聊里发出一句话，当你沿着一条不起眼的小路继续向前，它们便拥有了被记住的机会。",
  "今天遇见的人很多。",
  "有人让你笑得停不下来，有人说着奇怪的话，有人在镜头里留下了一张以后一定会被反复翻出来的照片。",
  "你忽然发现，这一天真正珍贵的部分，并没有写在课表上。",
  "它们藏在课间、晚风、笑声和那些临时起意的选择里。",
  "时间已经来到凌晨两点。",
  "明天醒来以后，今天会变成昨天。",
  "但它不会彻底离开。",
  "因为你已经把它保存下来了。",
];

const BONUS_ENDING_DREAM_PARAGRAPHS = [
  "你闭上眼，以为这一天终于结束了。",
  "宿舍的风扇声、晚自习后的走廊、手机屏幕最后一点微弱的光，都慢慢沉了下去。",
  "你原本以为，明天醒来以后，还是那个熟悉的早晨。",
  "还是2023年9月23日，还是高一，还是那间宿舍，还是那条会通往食堂和教学楼的小路。",
  "可当你再次睁开眼时，天光已经不一样了。",
  "你怔了一下，才终于反应过来。",
];

const BONUS_ENDING_MEMORY_PARAGRAPHS = [
  "那些吵闹的课间、晚自习的灯光、操场上解散后的风、食堂里冒着热气的早餐、篮球赛时举起来的大旗，还有深夜班群里一句接一句停不下来的消息……",
  "原来都已经被时间带到了身后。",
  "你忽然明白，刚刚经历的一切，不是今天。",
  "那只是一个梦。",
  "一个把你重新送回16岁夏天的梦。",
  "梦里的你们还没有毕业。",
  "还没有在申请季里慌张，还没有在考季里崩溃，也还没有真正意识到，有些人以后真的会天南地北，奔赴各自不再重合的前程。",
  "那时候的你们，还只是在同一间教室里大笑，在同一张课表里抱怨，在同一个傍晚一起走向食堂和篮球场。",
  "你以为那样的日子还会有很多很多天。",
  "可后来才知道，高中真正珍贵的地方，从来不只是一场考试，也不只是一张成绩单。",
  "更是那些当时觉得再普通不过、以后却怎么也回不去的片刻。",
  "是窗帘边洒下来的光。",
  "是晚霞、蝉鸣、照片和朋友，是宿舍熄灯以后仍然舍不得结束的聊天。",
  "是你们曾经一起站在蓝天下，以为夏天永远不会结束。",
  "而现在，夏天确实还会再来。",
  "只是16岁的那个夏天，再也不会回来了。",
];

const BONUS_ENDING_FAREWELL_PARAGRAPHS = [
  "你安静地坐着，像是刚从一场太长的梦里回来。",
  "胸口有一点酸，却又不只是难过。",
  "更像是终于承认，原来你真的已经和那段日子告别了。",
  "可也正因为如此，你才更想谢谢那个夏天。",
  "谢谢它让你遇见了这些人。",
  "谢谢它把笑声、争吵、秘密、照片和晚风，都留在了你的人生里。",
  "哪怕以后山高水远，哪怕从今往后你们会去往完全不同的地方，那段一起走过的时间，也已经不会被谁轻易抹掉。",
  "它会留在相册里，留在聊天记录里，留在回忆里。",
  "也留在你以后每一次想起高中时，心里最先亮起来的地方。",
];

const bonusEndingLyrics = [
  "还有什么等待",
  "还有什么悲哀",
  "这故事中的人不太",
  "精彩",
  "夏去了又回来",
  "而人却已不在",
  "它重复着我汹涌的忍耐",
  "今年兰花又开",
  "开了它也会败",
  "我想要一个人活得精彩",
  "有些人总会来",
  "有些人在我心中在徘徊",
  "我拿了总会还",
  "你拿了就逃开",
  "在失去中我慢慢的变呆",
  "是不同的未来",
  "却把书包中的日记更改",
  "把虚伪的尘埃",
  "也全部都掩盖",
  "把每次心痛都当成活该",
  "把心慢慢的释怀",
  "我相信你总有一天你会明白",
  "我给你的爱",
];

const BONUS_LYRIC_TIMING = {
  fadeInMs: 700,
  holdMs: 1500,
  fadeOutMs: 700,
  gapMs: 180,
};

const dandelionWords = [
  "ibdtb",
  "15岁",
  "16岁",
  "17岁",
  "英澳美",
  "晚自习",
  "篮球赛",
  "青春",
  "晚霞",
  "朋友",
  "照片",
  "夏天",
  "蝉鸣",
  "初相识",
  "宿舍",
  "集体",
  "食堂",
  "汽水",
  "蓝天",
  "白云",
  "小猫",
  "校园",
  "高中",
  "树荫",
];

const CHECKPOINT_DEFINITIONS = {
  dormWakeUp: { title: "宿舍 · 清晨醒来", category: "main", chapter: "清晨", scenes: ["dormOpening", "waking"] },
  packing: { title: "整理书包", category: "main", chapter: "清晨", scenes: ["packing"] },
  dormDoor: { title: "宿舍门口", category: "main", chapter: "清晨", scenes: ["dormDoor"] },
  morningRoute: { title: "宿舍外路线选择", category: "main", chapter: "清晨", scenes: ["route"] },
  breakfastCafeteria: { title: "早餐食堂", category: "main", chapter: "清晨", scenes: ["cafeteriaIntro", "cafeteriaOrder", "cafeteriaPayment"] },
  scheduleCheck: { title: "查课表", category: "main", chapter: "清晨", scenes: ["route"] },
  classroomFront: { title: "教学楼前", category: "main", chapter: "清晨", scenes: ["classroomFront"] },
  beforeFirstClass: { title: "教室 · 第一节课前", category: "main", chapter: "清晨", scenes: ["classroomBeforeLesson"] },
  eslStart: { title: "ESL课开始", category: "main", chapter: "上午课程", scenes: ["eslClass"] },
  eslEnd: { title: "ESL课结束", category: "main", chapter: "上午课程", scenes: ["eslContinue", "classDismissed"] },
  recess: { title: "课间", category: "main", chapter: "上午课程", scenes: ["breakAfterESL"] },
  physicsStart: { title: "物理课开始", category: "main", chapter: "上午课程", scenes: ["physicsIntro", "physicsWorkbookCheck"] },
  physicsEnd: { title: "物理课结束", category: "main", chapter: "上午课程", scenes: ["physicsContinue", "physicsDismissed"] },
  peClassroom: { title: "体育课集合", category: "main", chapter: "上午课程", scenes: ["peClassroom", "peTeacherIntro"] },
  peTraining: { title: "操场训练", category: "main", chapter: "上午课程", scenes: ["pathToPlayground", "playgroundIntro", "peRunning", "peDismissal"] },
  peFreeActivity: { title: "体育课自由活动", category: "main", chapter: "上午课程", scenes: ["peFreeActivity"] },
  lunchCafeteria: { title: "中午食堂", category: "main", chapter: "中午", scenes: ["lunchCafeteria", "lunchOrder", "lunchPayment"] },
  lunchReturn: { title: "午餐后返回教室", category: "main", chapter: "中午", scenes: ["lunchMeal", "lunchExit"] },
  napStart: { title: "午休开始", category: "main", chapter: "中午", scenes: ["afternoonClassroom", "napPlaceholder"] },
  tiangeDecor: { title: "舔哥装饰互动", category: "main", chapter: "中午", scenes: ["tiangeCrowd", "tiangeDecor", "tiangeDecorPhoto"] },
  brinClass: { title: "Brin外教课", category: "main", chapter: "下午课程", scenes: ["brinClassIntro", "brinClass"] },
  brinRoundOne: { title: "你画我猜第一轮", category: "main", chapter: "下午课程", scenes: ["brinRoundOne"] },
  brinRoundTwo: { title: "你画我猜第二轮", category: "main", chapter: "下午课程", scenes: ["brinRoundTwo"] },
  brinGhost: { title: "Brin鬼故事", category: "main", chapter: "下午课程", scenes: ["brinGhostStory"] },
  mathClass: { title: "钱俊豪数学课", category: "main", chapter: "下午课程", scenes: ["mathClass"] },
  mathPuzzle: { title: "数字华容道", category: "main", chapter: "下午课程", scenes: ["mathPuzzle"] },
  afterMath: { title: "数学课结束", category: "main", chapter: "下午课程", scenes: ["mathEarlyDismissal", "mathDetentionHomework", "campusWalkIntro"] },
  campusWalk: { title: "校园散步开始", category: "main", chapter: "傍晚", scenes: ["campusWalkIntro", "classroomCurtain", "classroomBoard", "classSign"] },
  gymnasium: { title: "体育馆", category: "main", chapter: "傍晚", scenes: ["gymnasium"] },
  eveningRoad: { title: "傍晚前往食堂", category: "main", chapter: "傍晚", scenes: ["eveningRoad", "dinnerCafeteriaIntro"] },
  dinner: { title: "晚餐", category: "main", chapter: "傍晚", scenes: ["dinnerOrder", "dinnerPayment", "dinnerMeal", "dinnerFinished"] },
  afterDinnerClassroom: { title: "晚餐后教室", category: "main", chapter: "傍晚", scenes: ["afterDinnerClassroom"] },
  basketballPreChat: { title: "篮球赛前班群", category: "main", chapter: "傍晚", scenes: ["afterDinnerClassroom"] },
  basketballCourt: { title: "篮球场", category: "main", chapter: "傍晚", scenes: ["basketballRoute", "basketballCourtIntro", "basketballGame3", "basketballGame4", "basketballGame5", "basketballSharePrompt"] },
  basketballEnd: { title: "篮球赛结束", category: "main", chapter: "傍晚", scenes: ["basketballVictory"] },
  eveningStudyStart: { title: "晚自习开始", category: "main", chapter: "夜间", scenes: ["eveningStudyClassroom", "eveningStudyProgress"] },
  eveningStudyEnd: { title: "晚自习结束", category: "main", chapter: "夜间", scenes: ["nightClassroomAfterStudy"] },
  baidupanSecret: {
    title: "网盘秘密",
    category: "main",
    chapter: "夜间",
    scenes: ["nightSeewoDesktop", "baidupanHome", "secretAfterClose", "nightClassroomSecretReaction"],
  },
  dormPrep: { title: "准备返回宿舍", category: "main", chapter: "夜间", scenes: ["nightDormPrep", "nightClassroomLightsOut"] },
  nightPath: { title: "夜晚小道", category: "main", chapter: "夜间", scenes: ["nightPath"] },
  nightDorm: { title: "夜晚宿舍", category: "main", chapter: "夜间", scenes: ["nightDorm"] },
  lightsOut: { title: "熄灯", category: "main", chapter: "夜间", scenes: ["lightsOut", "nightCallEnded", "phoneClosedAtNight"] },
  nightCall: { title: "夜间语音通话", category: "main", chapter: "夜间", scenes: ["lightsOut"] },
  dayOneReflection: { title: "第一日回顾", category: "main", chapter: "夜间", scenes: ["dayOneReflection", "dayOneDream"] },
  dayOneComplete: { title: "第一日完成", category: "main", chapter: "夜间", scenes: ["dayOneEnding"] },
  recessSkipNetease: { title: "课间A · 跳过网易云", category: "branch", chapter: "课间", scenes: ["beforeSecondClass"] },
  recessNetease: { title: "课间B · 打开网易云", category: "branch", chapter: "课间", scenes: ["seewoNetease"] },
  recessTruthOrDare: { title: "课间C · 真心话大冒险", category: "branch", chapter: "课间", scenes: ["truthOrDare"] },
  physicsWorkbookSuccess: { title: "真题册争抢成功", category: "branch", chapter: "物理课", scenes: ["physicsContinue"] },
  physicsWorkbookFail: { title: "真题册争抢失败", category: "branch", chapter: "物理课", scenes: ["physicsWorkbookFail", "physicsStairs"] },
  physicsStairs: { title: "楼梯口罚站", category: "branch", chapter: "物理课", scenes: ["physicsStairs"] },
  physicsDormEscape: { title: "逃回宿舍", category: "branch", chapter: "物理课", scenes: ["physicsDormEscape"] },
  pePiano: { title: "A支线 · 琴房", category: "branch", chapter: "体育课自由活动", scenes: ["pianoRoom", "pianoFirstSong", "pianoSecondSong", "pianoRoomDone"] },
  peForest: { title: "B支线 · 小树林", category: "branch", chapter: "体育课自由活动", scenes: ["forestPath"] },
  peBamboo: { title: "B支线 · 竹林河岸", category: "branch", chapter: "体育课自由活动", scenes: ["bambooForest", "forestDone"] },
  peEarlyLunch: { title: "C支线 · 提前去食堂", category: "branch", chapter: "体育课自由活动", scenes: ["peMysteryIntro", "outdoorSecret"] },
  peHandholding: { title: "C支线 · 发现牵手照片", category: "branch", chapter: "体育课自由活动", scenes: ["outdoorDiscovery"] },
  peLeaveQuietly: { title: "C支线 · 悄悄离开", category: "branch", chapter: "体育课自由活动", scenes: ["outdoorLeaveQuietly"] },
  peShareGroup: { title: "C支线 · 发到班级群", category: "branch", chapter: "体育课自由活动", scenes: ["outdoorSharePrompt"] },
  mathPuzzleSuccess: { title: "数字华容道成功", category: "branch", chapter: "数学课", scenes: ["mathEarlyDismissal"] },
  mathPuzzleFail: { title: "数字华容道失败", category: "branch", chapter: "数学课", scenes: ["mathDetentionHomework"] },
  secretAgreement: { title: "A支线 · 签署保密协议", category: "branch", chapter: "网盘秘密", scenes: ["secretAgreement"] },
  secretCryptic: { title: "B支线 · 班群故弄玄虚", category: "branch", chapter: "网盘秘密", scenes: ["secretCrypticPrompt"] },
};

Object.entries(CHECKPOINT_DEFINITIONS).forEach(([, definition], index) => {
  definition.storyOrder = definition.storyOrder ?? (index + 1) * 10;
});

const CHECKPOINT_STORY_ORDERS = {
  dormWakeUp: 10,
  packing: 20,
  dormDoor: 30,
  morningRoute: 40,
  breakfastCafeteria: 50,
  scheduleCheck: 60,
  classroomFront: 70,
  beforeFirstClass: 80,
  eslStart: 90,
  eslEnd: 100,
  recess: 110,
  recessSkipNetease: 112,
  recessNetease: 114,
  recessTruthOrDare: 116,
  physicsStart: 120,
  physicsWorkbookSuccess: 128,
  physicsWorkbookFail: 128,
  physicsStairs: 132,
  physicsDormEscape: 136,
  physicsEnd: 140,
  peClassroom: 150,
  peTraining: 160,
  peFreeActivity: 170,
  pePiano: 174,
  peForest: 176,
  peBamboo: 178,
  peEarlyLunch: 180,
  peHandholding: 182,
  peLeaveQuietly: 184,
  peShareGroup: 186,
  lunchCafeteria: 200,
  lunchReturn: 210,
  napStart: 220,
  tiangeDecor: 230,
  brinClass: 240,
  brinRoundOne: 250,
  brinRoundTwo: 260,
  brinGhost: 270,
  mathClass: 280,
  mathPuzzle: 290,
  mathPuzzleSuccess: 296,
  mathPuzzleFail: 296,
  afterMath: 300,
  campusWalk: 310,
  gymnasium: 320,
  eveningRoad: 330,
  dinner: 340,
  afterDinnerClassroom: 350,
  basketballPreChat: 360,
  basketballCourt: 370,
  basketballEnd: 380,
  eveningStudyStart: 390,
  eveningStudyEnd: 400,
  baidupanSecret: 410,
  secretAgreement: 420,
  secretCryptic: 420,
  dormPrep: 430,
  nightPath: 440,
  nightDorm: 450,
  lightsOut: 460,
  nightCall: 470,
  dayOneReflection: 490,
  dayOneComplete: 500,
};

Object.entries(CHECKPOINT_STORY_ORDERS).forEach(([id, storyOrder]) => {
  if (CHECKPOINT_DEFINITIONS[id]) CHECKPOINT_DEFINITIONS[id].storyOrder = storyOrder;
});

const CHECKPOINT_SCENE_MAP = Object.entries(CHECKPOINT_DEFINITIONS).reduce((map, [id, definition]) => {
  definition.scenes.forEach((scene) => {
    if (!map[scene]) map[scene] = id;
  });
  return map;
}, {});

const eslChatScript = [
  { sender: "罗罗", text: "我去开了。", type: "text" },
  { sender: "player", text: "什么开了？", type: "player" },
  { sender: "罗罗", text: "学校烧仙草开了", type: "text" },
  { sender: "gyy", text: "好喝吗？", type: "text" },
  { sender: "罗罗", text: "巨无敌好喝", type: "text" },
  { sender: "yyt", type: "sticker", image: "assets/items/表情包1.jpg" },
  { sender: "lyq", text: "卧槽月考是不是出分了", type: "text" },
  { sender: "罗罗", text: "别人和我说年纪第一在我们班", type: "text" },
  { sender: "zzy", text: "🤯👍", type: "text" },
  { sender: "罗罗", text: "小悦姐姐zyz二选一", type: "text" },
  { sender: "罗罗", text: "@钱俊豪 @马jy who", type: "text" },
  { sender: "player", text: `zyz不是说自己“考砸了”吗🤔`, type: "player" },
  { sender: "zyz", text: "我其实是第二，运气好经济按100分算所以是第一", type: "text" },
  { sender: "mjy", text: "啥？", type: "text" },
  { sender: "wwz", text: "好的以后就叫你年一哥，简称鲶鱼。", type: "text" },
  { sender: "system", text: "zyz 将昵称改成了 鲶鱼", type: "system" },
  { sender: "鲶鱼", text: "不如你老公", type: "text" },
  { sender: "鲶鱼", text: "😎", type: "text" },
  { sender: "player", text: "？？？？？", type: "player" },
  { sender: "yyx", text: "？？？？？", type: "text" },
  { sender: "yyx", text: "我刚刚看到了什么", type: "text" },
  { sender: "ljq", text: "磕到了🍉", type: "text" },
  { sender: "wwz", text: "？", type: "text" },
  { sender: "鲶鱼", text: "🎉🎉", type: "text" },
];

const truthOrDarePlayers = ["你", "wwz", "罗罗", "班长", "ljq", "ywz"];

const truthOrDareStory = [
  "wwz先是愣了一下，像是没想到这个大冒险会这么离谱。",
  "她站起来的时候椅子往后蹭了一声，周围几个人立刻安静了半秒，又很快憋不住笑。罗罗趴在桌边看热闹，班长一边装作主持公道，一边眼神已经完全出卖了自己。",
  "鲶鱼本来还在旁边低头看东西，听见脚步声靠近，抬头的一瞬间整个人明显卡了一下。",
  "wwz走到他旁边，脸有点红，但语气还是故意装得很不耐烦。她别开视线，用一种敷衍到像在完成英语听写的声音说：",
  "‘我喜欢你。’",
  "周围立刻有人发出压低的笑声。",
  "她又飞快地补了第二遍：",
  "‘我喜欢你。’",
  "第三遍的时候，她的语速更快了，像是想把这几个字从空气里赶紧扔出去。",
  "‘我喜欢你。’",
  "鲶鱼低着头，嘴上小声嘟囔了一句：",
  "‘有病吧。’",
  "但他的耳朵红得太明显了，明显到连装作没看见都需要一点演技。",
  "wwz咬了咬牙，像是终于决定速战速决：",
  "‘我喜欢你。’",
  "‘我喜欢你。’",
  "五遍说完，她立刻转身往回走，表情写满了“谁再提这事谁就完了”。",
  "你们几个人憋笑憋得肩膀都在抖。罗罗用手挡着嘴，班长假装低头整理转盘，ljq已经把“磕到了”三个字写在脸上了。",
  "鲶鱼还坐在原位，低声说着‘无语’，但整个人红得像刚被教室空调和课间阳光同时背叛了一样。",
  "这个课间突然变得非常值得记住。",
];

const physicsStairChatScript = [
  { sender: "wwz", text: "气死我了气死我了，老李头有病吧。", type: "text" },
  { sender: "罗罗", text: "你们好惨......", type: "text" },
  {
    sender: "鲶鱼",
    text: `鸿翔是吧 我们翔吹护定了❤️🧡💛💚💙💜
鸿翔怎么不如去年以前火爆了啊💔💔💔
一定是因为苏溪打压💔💔💔
不是说喜欢鸿翔吗?那我来问问你💖💖💖
鸿有几画💗💗💗翔有几画💗💗💗
不要让我们最可爱的鸿翔宝贝失望~~💞💞💞💝💝💝
我爱的老师🌹🌹鸿字开头💓💓💓翔字结尾💓💓💓我爱它一万年 我比流言蜚语更早认识它💖💖💖
所以你们不要把我的鸿翔骂到眼里没有光💔💔💔
如果鸿翔没了💧💧💧我不介意毁灭全世界🖤🖤🖤即使全世界都与鸿翔为敌，我也会站在鸿翔这边💘💘💘💘💘
有一种欢愉叫烘箱🌹
有一个礼貌叫鸿翔🌹
有一种自豪叫鸿翔🌹
有一种真诚叫鸿翔🌹
有一种安慰叫鸿翔🌹
有一种老师之光叫鸿翔🌹
❤️我们爱的老师叫鸿翔❤️
翔吹不惹事也不怕事🌸🌹🌹不是因为颜值而喜欢鸿翔
而是他是鸿翔它值得💋💋它就是值💋💋苏西我劝你善良🥺💔💔💔
🌹老师，我作文不好!🤍🤍🤍🖤🖤🖤你骗谁呢，上次让你写《感觉不如鸿翔》，你写烘箱520多页❤️❤️❤️❤️
🌹老师，我历史不好!🤍🤍🤍🖤🖤🖤你骗谁呢，鸿翔的光辉历史你比谁都清楚吧!❤️❤️❤️❤️
🌹老师我体育不好!🤍🤍🤍🖤🖤🖤你骗谁呢上次有人骂鸿翔,你追了他快1000公里❤️❤️❤️❤️
🌹老师我口才不好🤍🤍🤍🖤🖤🖤你骗谁呢!让你背诗,你背了100多遍鸿翔的话❤️❤️❤️
谁说鸿翔不会哭了💔💔💔它哭了一片海💔💔💔只是你不知道🖤💔🖤💔🖤💔
如果全世界背叛了鸿翔💔💔💔我会站在鸿翔身后❣️❣️❣️❣️背叛全世界❤️❤️❤️💞💞💞💞
鸿翔微笑😊不代表它没有眼泪💔💔💔鸿翔坚强💚不代表它不需要依赖💔💔💔💔
你若折了鸿翔的翅膀，我必毁了你整座天堂♥️🧡💛💚💙💜🖤🤍😡😡😡😡。`,
    type: "text",
  },
  { sender: "ljq", text: "回宿舍了回宿舍了。", type: "text" },
];

const brinGroups = {
  A: {
    leader: "ljq",
    members: ["你", "舔哥", "hjp", "scf"],
  },
  B: {
    leader: "鲶鱼",
    members: ["ljq", "罗罗", "rql", "yyt", "wwz"],
  },
  C: {
    leader: "班长",
    members: ["gyy", "高原", "hkx", "dyc"],
  },
};

const physicsDormChatScript = [
  { sender: "罗罗", text: "老李头发现你们不见了气的暴跳如雷。", type: "text" },
  { sender: "player", text: "不必理会。", type: "player" },
];

const createEmptyBreakfastOrder = () => ({
  items: Object.fromEntries(breakfastMenu.map((item) => [item.id, 0])),
  total: 0,
  paid: false,
});

const createEmptyLunchOrder = () => ({
  items: Object.fromEntries(lunchMenu.map((item) => [item.id, 0])),
  total: 0,
  paid: false,
  hungerRestored: false,
});

const createEmptyDinnerOrder = () => ({
  items: Object.fromEntries(dinnerMenu.map((item) => [item.id, 0])),
  total: 0,
  paid: false,
  hungerRestored: false,
});

const formatMoney = (value) => {
  const rounded = Math.round((Number(value) || 0) * 10) / 10;
  return Number.isInteger(rounded) ? `${rounded}元` : `${rounded.toFixed(1)}元`;
};

const calculateMenuTotal = (menu, items) =>
  Math.round(
    menu.reduce((total, item) => total + (Number(items?.[item.id]) || 0) * item.price, 0) * 10,
  ) / 10;

const calculateBreakfastTotal = (items) => calculateMenuTotal(breakfastMenu, items);

const calculateLunchTotal = (items) => calculateMenuTotal(lunchMenu, items);

const calculateDinnerTotal = (items) => calculateMenuTotal(dinnerMenu, items);

const normalizeBreakfastOrder = (order) => {
  const base = createEmptyBreakfastOrder();
  if (!order || typeof order !== "object") return base;

  breakfastMenu.forEach((item) => {
    base.items[item.id] = Math.max(0, Number(order.items?.[item.id]) || 0);
  });
  base.total = calculateBreakfastTotal(base.items);
  base.paid = Boolean(order.paid);
  return base;
};

const normalizeLunchOrder = (order) => {
  const base = createEmptyLunchOrder();
  if (!order || typeof order !== "object") return base;

  lunchMenu.forEach((item) => {
    base.items[item.id] = Math.max(0, Number(order.items?.[item.id]) || 0);
  });
  base.total = calculateLunchTotal(base.items);
  base.paid = Boolean(order.paid);
  base.hungerRestored = Boolean(order.hungerRestored);
  return base;
};

const normalizeDinnerOrder = (order) => {
  const base = createEmptyDinnerOrder();
  if (!order || typeof order !== "object") return base;

  dinnerMenu.forEach((item) => {
    base.items[item.id] = Math.max(0, Number(order.items?.[item.id]) || 0);
  });
  base.total = calculateDinnerTotal(base.items);
  base.paid = Boolean(order.paid);
  base.hungerRestored = Boolean(order.hungerRestored);
  return base;
};

const getBreakfastOrder = () => {
  gameState.breakfastOrder = normalizeBreakfastOrder(gameState.breakfastOrder);
  return gameState.breakfastOrder;
};

const getLunchOrder = () => {
  gameState.lunchOrder = normalizeLunchOrder(gameState.lunchOrder);
  return gameState.lunchOrder;
};

const getDinnerOrder = () => {
  gameState.dinnerOrder = normalizeDinnerOrder(gameState.dinnerOrder);
  return gameState.dinnerOrder;
};

const getOrderSelections = (menu, order) =>
  menu
    .map((item) => ({
      ...item,
      quantity: Number(order.items[item.id]) || 0,
    }))
    .filter((item) => item.quantity > 0);

const getBreakfastSelections = () => getOrderSelections(breakfastMenu, getBreakfastOrder());

const getLunchSelections = () => getOrderSelections(lunchMenu, getLunchOrder());

const getDinnerSelections = () => getOrderSelections(dinnerMenu, getDinnerOrder());

const isCampusPhotoScene = (scene = gameState.currentScene) => campusPhotoSteps.some((step) => step.scene === scene);
const isBasketballPhotoScene = (scene = gameState.currentScene) =>
  basketballPhotoSteps.some((step) => step.scene === scene);

const renderOrderLinesFor = (menu, order, emptyText, includeLineTotal = false) => {
  const selections = getOrderSelections(menu, order);
  if (selections.length === 0) return `<p class="empty-order">${emptyText}</p>`;

  return `
    <ul class="order-lines">
      ${selections
        .map((item) => {
          const lineTotal = item.quantity * item.price;
          return `<li><span>${item.name} × ${item.quantity}</span><strong>${includeLineTotal ? formatMoney(lineTotal) : ""}</strong></li>`;
        })
        .join("")}
    </ul>
  `;
};

const renderOrderLines = (includeLineTotal = false) =>
  renderOrderLinesFor(breakfastMenu, getBreakfastOrder(), "还没有选择早餐。", includeLineTotal);

const renderLunchOrderLines = (includeLineTotal = false) =>
  renderOrderLinesFor(lunchMenu, getLunchOrder(), "还没有选择午餐。", includeLineTotal);

const renderDinnerOrderLines = (includeLineTotal = false) =>
  renderOrderLinesFor(dinnerMenu, getDinnerOrder(), "还没有选择晚餐。", includeLineTotal);

const getInventoryItem = (itemId) => inventoryCatalog.find((item) => item.id === itemId);

const hasItem = (itemId) => gameState.inventory.some((item) => item.id === itemId);

const isDecorItemId = (itemId) => itemId?.startsWith("decor-");

const getDecorItem = (itemId) => gameState.decorItems?.find((item) => item.id === itemId);

const addItemToInventory = (itemId) => {
  if (hasItem(itemId)) return;

  const item = getInventoryItem(itemId);
  if (!item) return;

  gameState.inventory.push({
    id: item.id,
    name: item.name,
    icon: item.icon,
    image: item.image,
    unlocked: true,
  });
  renderHotbar();
  saveGameState();
};

const removeItemFromInventory = (itemId) => {
  gameState.inventory = gameState.inventory.filter((item) => item.id !== itemId);
  renderHotbar();
  saveGameState();
};

const giveTiangeDecorItems = () => {
  syncTiangeDecorationState();
  gameState.decorItems.forEach((item) => {
    if (hasItem(item.id) || item.placed) return;
    gameState.inventory.push({
      id: item.id,
      name: item.name,
      icon: item.label,
      image: "",
      unlocked: true,
      decor: true,
      placed: item.placed,
    });
  });
  gameState.tiangeDecorItemsGiven = true;
  renderHotbar();
  saveGameState();
};

const removeTiangeDecorInventoryItems = () => {
  gameState.inventory = gameState.inventory.filter((item) => !isDecorItemId(item.id));
  gameState.selectedDecorItemId = null;
  renderHotbar();
  saveGameState();
};

const ensurePhoneInFirstSlot = () => {
  const phoneItem = getInventoryItem("phone");
  if (!phoneItem) return;

  gameState.inventory = gameState.inventory.filter((item) => item.id !== "phone");
  gameState.inventory.unshift({
    id: phoneItem.id,
    name: phoneItem.name,
    icon: phoneItem.icon,
    image: phoneItem.image,
    unlocked: true,
  });
  saveGameState();
  renderHotbar();
};

function openPhonePanel() {
  if (runtimeState.endingInProgress) return;
  if (runtimeState.isRestoringCheckpoint) return;
  if (!gameState.phoneAvailable || gameState.phoneConfiscated) {
    showToast("手机被收走了。下课后才能拿回来。", 1800);
    return;
  }

  if (!hasItem("phone") || !isAchievementUnlocked("phoneUnlocked")) {
    showToast("手机还没有解锁。", 1600);
    return;
  }

  updatePhonePayGuide(false);
  if (gameState.lightsOut && !gameState.nightCallCompleted) {
    gameState.nightCallInvited = true;
    phoneScreen = "nightCallInvite";
    saveGameState();
  } else {
    phoneScreen = "home";
  }
  setModalOpen(true);
  renderPhone();
  phoneDialog.showModal();
  syncTeacherDistanceTimer();
}

const updatePhonePayGuide = (forceVisible = null) => {
  const paymentGuide =
    gameState.pendingPayment &&
    ((gameState.pendingOrderType === "breakfast" &&
      !getBreakfastOrder().paid &&
      gameState.currentScene === "cafeteriaPayment") ||
      (gameState.pendingOrderType === "lunch" &&
        !getLunchOrder().paid &&
        gameState.currentScene === "lunchPayment") ||
      (gameState.pendingOrderType === "dinner" &&
        !getDinnerOrder().paid &&
        gameState.currentScene === "dinnerPayment")) &&
    hasItem("phone");
  const scheduleGuide =
    gameState.needCheckSchedule &&
    !gameState.checkedSchedule &&
    gameState.currentScene === "route" &&
    hasItem("phone");
  const physicsGuide =
    ((gameState.currentScene === "physicsStairs" && !gameState.physicsStairChatCompleted) ||
      (gameState.currentScene === "physicsDormEscape" && !gameState.physicsDormChatCompleted)) &&
    hasItem("phone") &&
    !phoneDialog.open;
  const cameraGuide =
    Boolean(gameState.cameraTarget) &&
    (gameState.currentScene === "pianoSecondSong" ||
      gameState.currentScene === "bambooForest" ||
      gameState.currentScene === "outdoorSecret" ||
      gameState.currentScene === "tiangeDecorPhoto" ||
      isCampusPhotoScene() ||
      isBasketballPhotoScene()) &&
    hasItem("phone") &&
    !phoneDialog.open &&
    !hasPhoto(gameState.cameraTarget.id);
  const basketballChatGuide =
    ((gameState.currentScene === "afterDinnerClassroom" && !gameState.basketballPreChatCompleted) ||
      (gameState.currentScene === "basketballSharePrompt" && !gameState.basketballPhotoChatCompleted)) &&
    hasItem("phone") &&
    !phoneDialog.open;
  const secretChatGuide =
    gameState.currentScene === "secretCrypticPrompt" &&
    gameState.secretGroupChatStarted &&
    !gameState.secretGroupChatCompleted &&
    hasItem("phone") &&
    !phoneDialog.open;
  const nightPhoneGuide =
    gameState.lightsOut &&
    !gameState.nightCallCompleted &&
    !phoneDialog.open &&
    !gameState.nightPhoneClosed &&
    hasItem("phone");
  const peMysteryShareGuide =
    gameState.currentScene === "outdoorSharePrompt" &&
    gameState.peBranches?.mysteryChoice === "shareToGroup" &&
    !gameState.peBranches?.mysteryPhotoShared &&
    hasItem("phone") &&
    !phoneDialog.open;
  const shouldShow =
    forceVisible ??
    (paymentGuide ||
      scheduleGuide ||
      physicsGuide ||
      cameraGuide ||
      peMysteryShareGuide ||
      basketballChatGuide ||
      secretChatGuide ||
      nightPhoneGuide);

  phoneGuideText.textContent = paymentGuide
    ? "打开手机支付"
    : cameraGuide
    ? gameState.currentScene === "tiangeDecorPhoto"
      ? "打开手机拍照"
      : gameState.currentScene === "bambooForest" ||
          gameState.currentScene === "outdoorSecret" ||
          isCampusPhotoScene() ||
          isBasketballPhotoScene()
      ? "打开相机"
      : "打开手机"
    : basketballChatGuide
      ? "打开手机查看班群"
    : secretChatGuide
      ? "打开手机"
    : nightPhoneGuide
      ? "打开手机"
    : scheduleGuide || physicsGuide || peMysteryShareGuide
      ? "打开手机"
      : "点击手机支付";

  const phoneSlot = document.querySelector(".phone-slot");
  if (phoneSlot) {
    const rect = phoneSlot.getBoundingClientRect();
    phonePayGuide.style.setProperty("--guide-left", `${rect.left + rect.width / 2}px`);
  }

  phonePayGuide.classList.toggle("hidden", !shouldShow);
};

const renderHotbar = () => {
  hotbar.innerHTML = "";
  const renderedInventory = gameState.nightInventoryMode
    ? gameState.inventory.filter((item) => item.id === "phone").slice(0, 1)
    : gameState.inventory;
  const visibleSlots = gameState.nightInventoryMode ? 1 : Math.max(9, renderedInventory.length);
  hotbar.style.setProperty("--hotbar-slots", visibleSlots);
  const slots = Array.from({ length: visibleSlots }, (_, index) => renderedInventory[index] ?? null);

  slots.forEach((item, index) => {
    const slot = document.createElement("button");
    slot.className = "hotbar-slot";
    slot.type = "button";
    slot.setAttribute("aria-label", item ? `物品栏：${item.name}` : `空物品栏 ${index + 1}`);

    if (item) {
      slot.dataset.itemId = item.id;
      if (item.decor) {
        slot.classList.add("decor-slot");
        slot.classList.toggle("decor-used", Boolean(item.placed));
        slot.classList.toggle("decor-selected", gameState.selectedDecorItemId === item.id);
        slot.innerHTML = `<span>${item.icon}</span>`;
        slot.addEventListener("pointerdown", startDecorDragFromHotbar);
        slot.addEventListener("click", toggleSelectedDecorItem);
      } else {
        slot.innerHTML = `
          <img src="${item.image}" alt="" onerror="this.remove(); this.parentElement.dataset.fallback='true';" />
          <span>${item.icon}</span>
        `;
      }

      if (item.id === "phone") {
        slot.classList.add("phone-slot");
        slot.classList.toggle("pay-needed", gameState.pendingPayment);
        slot.addEventListener("click", openPhonePanel);
      }

      if (item.id === "calculator") {
        slot.classList.add("calculator-slot");
        slot.addEventListener("click", openCalculatorPanel);
      }
    }

    hotbar.append(slot);
  });
  updatePhonePayGuide();
  updateCheckpointButtonVisibility();
};

const ensureCalculatorDialog = () => {
  if (calculatorDialog) return calculatorDialog;
  calculatorDialog = document.createElement("aside");
  calculatorDialog.className = "calculator-dialog hidden";
  calculatorDialog.innerHTML = `
    <section class="calculator-shell" aria-label="卡西欧计算器">
      <header>
        <div>
          <span>CASIO</span>
          <strong>fx-300ES PLUS</strong>
        </div>
        <button class="calculator-close" type="button" aria-label="关闭计算器">×</button>
      </header>
      <output class="calculator-display" id="calculatorDisplay">0</output>
      <div class="calculator-keys" aria-label="计算器按键">
        ${["7", "8", "9", "4", "5", "6", "1", "2", "3", "C", "0", "←"].map((key) => `<button type="button" data-calculator-key="${key}">${key}</button>`).join("")}
      </div>
      <p class="calculator-hint">输入一串特别的日期。</p>
    </section>
  `;
  calculatorDialog.querySelector(".calculator-close").addEventListener("click", closeCalculatorPanel);
  calculatorDialog.querySelectorAll("[data-calculator-key]").forEach((button) => {
    button.addEventListener("click", () => pressCalculatorKey(button.dataset.calculatorKey));
  });
  document.body.append(calculatorDialog);
  return calculatorDialog;
};

const updateCalculatorDisplay = (text = null) => {
  const display = calculatorDialog?.querySelector("#calculatorDisplay");
  if (!display) return;
  display.textContent = text ?? (calculatorInput || "0");
};

const openCalculatorPanel = () => {
  if (!gameState.inventory.some((item) => item.id === "calculator")) return;
  closeAllUtilityPanels();
  calculatorInput = "";
  ensureCalculatorDialog().classList.remove("hidden");
  updateCalculatorDisplay();
  setModalOpen(true);
};

const closeCalculatorPanel = () => {
  calculatorDialog?.classList.add("hidden");
  calculatorInput = "";
  setModalOpen(false);
};

const pressCalculatorKey = (key) => {
  if (!calculatorDialog || calculatorDialog.classList.contains("hidden")) return;
  if (key === "C") {
    calculatorInput = "";
    updateCalculatorDisplay();
    return;
  }
  if (key === "←") {
    calculatorInput = calculatorInput.slice(0, -1);
    updateCalculatorDisplay();
    return;
  }
  calculatorInput = `${calculatorInput}${key}`.slice(-8);
  if (calculatorInput === "20230923") {
    updateCalculatorDisplay("WELCOME TO IBDT-B");
    unlockEasterEgg("casioPassword", gameState.currentScene);
    return;
  }
  updateCalculatorDisplay();
};

const initializeCheckpointSystem = () => {
  checkpointLibrary = loadCheckpointLibrary();
  checkpointSystemReady = true;
  getCheckpointStore();
  saveCheckpointLibrary();

  checkpointButton = document.createElement("button");
  checkpointButton.className = "utility-button checkpoint-button hidden";
  checkpointButton.type = "button";
  checkpointButton.textContent = "↶ 回档";
  checkpointButton.addEventListener("click", openCheckpointPanel);
  getHotbarTools().append(checkpointButton);

  checkpointPanel = document.createElement("aside");
  checkpointPanel.className = "checkpoint-panel hidden";
  checkpointPanel.innerHTML = `
    <div class="checkpoint-panel-header">
      <div>
        <p>剧情回档</p>
        <h2>剧情回档</h2>
      </div>
      <button class="checkpoint-close" type="button" aria-label="关闭回档">×</button>
    </div>
    <p class="checkpoint-current" id="checkpointCurrent">当前：未记录</p>
    <div class="checkpoint-tabs">
      <button type="button" data-checkpoint-tab="main">主线</button>
      <button type="button" data-checkpoint-tab="branch">支线与彩蛋</button>
    </div>
    <div class="checkpoint-list" id="checkpointList"></div>
    <button class="checkpoint-manual" type="button" id="checkpointManualButton">更新当前节点快照</button>
    <div class="checkpoint-confirm hidden" id="checkpointConfirm"></div>
  `;
  checkpointPanel.querySelector(".checkpoint-close").addEventListener("click", closeCheckpointPanel);
  checkpointPanel.querySelectorAll("[data-checkpoint-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      checkpointActiveTab = button.dataset.checkpointTab;
      renderCheckpointPanel();
    });
  });
  checkpointPanel.querySelector("#checkpointManualButton").addEventListener("click", updateCurrentCheckpointManually);
  document.body.append(checkpointPanel);

  createOrUpdateCheckpointForCurrentScene();
  updateCheckpointButtonVisibility();
};

const updateCheckpointButtonVisibility = () => {
  if (!checkpointButton) return;
  const visible =
    gameState.isGameplayActive &&
    gameState.currentScene !== "start" &&
    !gameState.isModalOpen &&
    !phoneDialog.open &&
    !runtimeState.isRestoringCheckpoint;
  checkpointButton.classList.toggle("hidden", !visible);
  hotbarTools?.classList.toggle(
    "hidden",
    !document.querySelector(".hotbar-tools .utility-button:not(.hidden)"),
  );
};

const openCheckpointPanel = () => {
  if (runtimeState.endingInProgress) return;
  if (runtimeState.isRestoringCheckpoint || !checkpointPanel) return;
  if (phoneDialog.open || reviewDialog.open || scheduleDialog.open) {
    showToast("先关闭当前界面再回档。", 1800);
    return;
  }
  closeAchievementPanel();
  renderCheckpointPanel();
  checkpointPanel.classList.remove("hidden");
  setModalOpen(true);
  updateCheckpointButtonVisibility();
};

const closeCheckpointPanel = () => {
  checkpointPanel?.classList.add("hidden");
  checkpointPanel?.querySelector("#checkpointConfirm")?.classList.add("hidden");
  pendingCheckpointRestoreId = null;
  setModalOpen(false);
  updateCheckpointButtonVisibility();
};

const initializeAchievementSystem = () => {
  removeAllAchievementToastElements();
  achievementState = loadAchievementState();
  achievementState = repairAchievementState(achievementState);
  saveAchievementState();
  achievementButton = document.createElement("button");
  achievementButton.className = "utility-button achievement-button hidden";
  achievementButton.type = "button";
  achievementButton.innerHTML = '<span class="achievement-button-label">🏆 成就</span>';
  achievementButton.addEventListener("click", openAchievementPanel);
  getHotbarTools().append(achievementButton);

  achievementPanel = document.createElement("aside");
  achievementPanel.className = "achievement-panel hidden";
  achievementPanel.innerHTML = `
    <div class="achievement-panel-header">
      <div>
        <p>第一日成就</p>
        <h2>进度树</h2>
        <span id="achievementProgress">已完成：0 / 50</span>
      </div>
      <button class="achievement-close" type="button" aria-label="关闭成就">×</button>
    </div>
    <div class="achievement-tree" id="achievementTree"></div>
  `;
  achievementPanel.querySelector(".achievement-close").addEventListener("click", closeAchievementPanel);
  document.body.append(achievementPanel);
  if (!achievementState.initialSyncCompleted) syncAchievementsFromCurrentState({ silent: true });
  renderAchievementTree();
  updateAchievementButtonBadge();
  updateAchievementButtonVisibility();
};

const updateAchievementButtonVisibility = () => {
  if (!achievementButton) return;
  const visible =
    gameState.isGameplayActive &&
    gameState.currentScene !== "start" &&
    !gameState.isModalOpen &&
    !phoneDialog.open &&
    !runtimeState.isRestoringCheckpoint &&
    !runtimeState.endingInProgress;
  achievementButton.classList.toggle("hidden", !visible);
  hotbarTools?.classList.toggle(
    "hidden",
    !document.querySelector(".hotbar-tools .utility-button:not(.hidden)"),
  );
};

const openAchievementPanel = () => {
  if (runtimeState.endingInProgress) return;
  if (runtimeState.isRestoringCheckpoint || !achievementPanel) return;
  if (phoneDialog.open || reviewDialog.open || scheduleDialog.open) {
    showToast("先关闭当前界面再看成就。", 1800);
    return;
  }
  closeCheckpointPanel();
  achievementState.unreadCount = 0;
  saveAchievementState();
  updateAchievementButtonBadge();
  renderAchievementTree();
  achievementPanel.classList.remove("hidden");
  setModalOpen(true);
  updateAchievementButtonVisibility();
};

const closeAchievementPanel = () => {
  achievementPanel?.classList.add("hidden");
  if (!checkpointPanel || checkpointPanel.classList.contains("hidden")) setModalOpen(false);
  updateAchievementButtonVisibility();
};

const renderAchievementTree = () => {
  if (!achievementPanel || !achievementState) return;
  const unlockedIds = getUnlockedAchievementIds();
  const unlockedCount = unlockedIds.length;
  const percent = Math.round((unlockedCount / ACHIEVEMENT_DEFINITIONS.length) * 100);
  achievementPanel.querySelector("#achievementProgress").textContent =
    `已完成：${unlockedCount} / ${ACHIEVEMENT_DEFINITIONS.length}  完成度：${percent}%`;
  const tree = achievementPanel.querySelector("#achievementTree");
  tree.innerHTML = ACHIEVEMENT_CATEGORIES.map((category) => {
    const nodes = unlockedIds
      .map((id) => ACHIEVEMENT_BY_ID[id])
      .filter((achievement) => achievement.category === category);
    return `
      <section class="achievement-category">
        <h3>${category}</h3>
        ${
          nodes.length === 0
            ? '<p class="achievement-empty">这个分类还没有解锁任何成就。</p>'
            : `<div class="achievement-node-row">
                ${nodes
                  .map((achievement, index) => {
                    const record = achievementState.unlocked[achievement.id];
                    return `
                      <article class="achievement-node unlocked ${achievement.hidden ? "hidden-achievement" : ""}">
                        <span class="achievement-connector ${index === 0 ? "first" : ""}" aria-hidden="true"></span>
                        <span class="achievement-icon">${achievement.icon}</span>
                        <strong>${achievement.title}</strong>
                        <p>${achievement.description}</p>
                        <small>解锁：${formatAchievementTime(record.unlockedAt)} · 来源：${record.sourceScene ?? "未知"}</small>
                      </article>
                    `;
                  })
                  .join("")}
              </div>`
        }
      </section>
    `;
  }).join("");
};

const formatAchievementTime = (timestamp) => {
  if (!Number.isFinite(timestamp)) return "未知";
  return new Date(timestamp).toLocaleString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const updateAchievementButtonBadge = () => {
  if (!achievementButton || !achievementState) return;
  const unread = Math.max(0, Number(achievementState.unreadCount) || 0);
  achievementButton.innerHTML = `
    <span class="achievement-button-label">🏆 成就</span>
    ${unread > 0 ? `<span class="achievement-unread">${unread}</span>` : ""}
  `;
};

const getAchievementToastContainer = () => {
  let container = document.querySelector("#achievement-toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "achievement-toast-container";
    document.body.append(container);
  }
  return container;
};

const removeAllAchievementToastElements = () => {
  achievementToastQueue.length = 0;
  achievementToastActive = false;
  document.querySelector("#achievement-toast-container")?.replaceChildren();
};

const EASTER_EGG_DEFINITIONS = {
  breakTimeAdventure: {
    id: "breakTimeAdventure",
    title: "课间大冒险",
    shortName: "课间大冒险",
    description: "你选择了最离谱的那个选项，于是课间变成了一场真心话大冒险。",
  },
  handholdingPhoto: {
    id: "handholdingPhoto",
    title: "镜头里的秘密",
    shortName: "镜头里的秘密",
    description: "你本来只是想拍风景，结果镜头里多出了一对牵手的人。",
  },
  blackSwanEcho: {
    id: "blackSwanEcho",
    title: "黑天鹅的夜间回声",
    shortName: "黑天鹅的夜间回声",
    description: "夜色里，池塘边的两只黑天鹅像是把传说重新讲了一遍。",
  },
  qianMode: {
    id: "qianMode",
    title: "钱途无量",
    shortName: "钱途无量",
    description: "你把数字华容道点进了钱俊豪专属隐藏模式。",
  },
  dormCat: {
    id: "dormCat",
    title: "宿舍楼下的小猫",
    shortName: "宿舍楼下的小猫",
    description: "在一天结束前，你在宿舍楼下遇见了一只小小的朋友。",
  },
  casioPassword: {
    id: "casioPassword",
    title: "20230923",
    shortName: "20230923",
    description: "你在卡西欧计算器里输入了一串特别的数字，像打开了一扇小门。",
  },
};

const createEmptyEasterEggState = () => ({
  version: 1,
  unlocked: {},
  unreadCount: 0,
});

const loadEasterEggState = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(easterEggStateKey));
    return {
      ...createEmptyEasterEggState(),
      ...(saved && typeof saved === "object" ? saved : {}),
      unlocked: saved?.unlocked && typeof saved.unlocked === "object" ? saved.unlocked : {},
      unreadCount: Math.max(0, Number(saved?.unreadCount) || 0),
    };
  } catch {
    return createEmptyEasterEggState();
  }
};

const saveEasterEggState = () => {
  localStorage.setItem(easterEggStateKey, JSON.stringify(easterEggState));
};

const isEasterEggUnlocked = (id) => Boolean(easterEggState?.unlocked?.[id]);

const updateEasterEggButtonBadge = () => {
  if (!easterEggButton || !easterEggState) return;
  const unread = Math.max(0, Number(easterEggState.unreadCount) || 0);
  easterEggButton.innerHTML = `🥚 彩蛋${unread > 0 ? ` <span class="easter-unread">${unread}</span>` : ""}`;
};

const getEasterEggToastContainer = () => {
  let container = document.querySelector("#easter-egg-toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "easter-egg-toast-container";
    document.body.append(container);
  }
  return container;
};

const queueEasterEggToast = (id) => {
  easterEggToastQueue.push(id);
  showNextEasterEggToast();
};

const showNextEasterEggToast = () => {
  if (easterEggToastActive || easterEggToastQueue.length === 0) return;
  const id = easterEggToastQueue.shift();
  const definition = EASTER_EGG_DEFINITIONS[id];
  if (!definition) return;
  easterEggToastActive = true;
  const node = document.createElement("div");
  node.className = "easter-toast-card";
  node.innerHTML = `<strong>🥚 发现彩蛋！</strong><em>${definition.title}</em>`;
  getEasterEggToastContainer().append(node);
  window.setTimeout(() => node.classList.add("leaving"), 2600);
  window.setTimeout(() => {
    node.remove();
    easterEggToastActive = false;
    showNextEasterEggToast();
  }, 3000);
};

const playEasterEggCelebration = () => {
  launchConfetti();
  launchFireworks();
};

const unlockEasterEgg = (id, sourceScene = gameState.currentScene) => {
  if (!easterEggState) easterEggState = loadEasterEggState();
  const definition = EASTER_EGG_DEFINITIONS[id];
  if (!definition || easterEggState.unlocked[id]) return false;
  easterEggState.unlocked[id] = {
    unlocked: true,
    unlockedAt: Date.now(),
    sourceScene,
  };
  easterEggState.unreadCount = Math.max(0, Number(easterEggState.unreadCount) || 0) + 1;
  saveEasterEggState();
  updateEasterEggButtonBadge();
  renderEasterEggPanel();
  queueEasterEggToast(id);
  playEasterEggCelebration();
  return true;
};

const formatEasterEggTime = (timestamp) =>
  Number.isFinite(timestamp)
    ? new Date(timestamp).toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" })
    : "未知";

const renderEasterEggPanel = () => {
  if (!easterEggPanel || !easterEggState) return;
  easterEggPanel.querySelector("#easterEggList").innerHTML = Object.values(EASTER_EGG_DEFINITIONS)
    .map((egg, index) => {
      const record = easterEggState.unlocked[egg.id];
      return `
        <article class="easter-egg-card ${record ? "unlocked" : "locked"}">
          <strong>${index + 1}. ${egg.shortName}</strong>
          ${
            record
              ? `<p>${egg.description}</p><span>解锁时间：${formatEasterEggTime(record.unlockedAt)}</span><span>来源：${record.sourceScene ?? "未知"}</span>`
              : ""
          }
        </article>
      `;
    })
    .join("");
};

const openEasterEggPanel = () => {
  if (runtimeState.endingInProgress) return;
  if (!easterEggPanel || gameState.currentScene === "start") return;
  closeAllUtilityPanels();
  easterEggState.unreadCount = 0;
  saveEasterEggState();
  updateEasterEggButtonBadge();
  renderEasterEggPanel();
  easterEggPanel.classList.remove("hidden");
  setModalOpen(true);
};

const closeEasterEggPanel = () => {
  easterEggPanel?.classList.add("hidden");
  setModalOpen(false);
};

const initializeEasterEggSystem = () => {
  easterEggState = loadEasterEggState();
  easterEggButton = document.createElement("button");
  easterEggButton.className = "easter-egg-button hidden";
  easterEggButton.type = "button";
  easterEggButton.addEventListener("click", openEasterEggPanel);
  document.body.append(easterEggButton);
  easterEggPanel = document.createElement("aside");
  easterEggPanel.className = "easter-egg-panel hidden";
  easterEggPanel.innerHTML = `
    <header>
      <div><p>隐藏发现</p><h2>彩蛋图鉴</h2></div>
      <button class="easter-close" type="button" aria-label="关闭彩蛋">×</button>
    </header>
    <div class="easter-egg-list" id="easterEggList"></div>
  `;
  easterEggPanel.querySelector(".easter-close").addEventListener("click", closeEasterEggPanel);
  document.body.append(easterEggPanel);
  updateEasterEggButtonBadge();
  renderEasterEggPanel();
  updateEasterEggButtonVisibility();
};

const updateEasterEggButtonVisibility = () => {
  easterEggButton?.classList.toggle(
    "hidden",
    !gameState.isGameplayActive || gameState.currentScene === "start" || gameState.isModalOpen || runtimeState.endingInProgress,
  );
};

const formatCheckpointTime = (timestamp) => {
  if (!timestamp) return "未知";
  return new Date(timestamp).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });
};

const renderCheckpointPanel = () => {
  if (!checkpointPanel) return;
  const currentId = getCheckpointIdForScene();
  const currentDefinition = currentId ? CHECKPOINT_DEFINITIONS[currentId] : null;
  checkpointPanel.querySelector("#checkpointCurrent").textContent = `当前：${currentDefinition?.title ?? "当前场景暂未登记"}`;
  checkpointPanel.querySelectorAll("[data-checkpoint-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.checkpointTab === checkpointActiveTab);
  });

  const list = checkpointPanel.querySelector("#checkpointList");
  const store = getCheckpointStore();
  const unlockedSnapshots = store.visitedIds
    .filter((id) => canDisplayCheckpoint(id))
    .map((id) => store.snapshots[id])
    .filter((snapshot) => snapshot?.category === checkpointActiveTab)
    .sort((a, b) => a.storyOrder - b.storyOrder);

  list.innerHTML =
    unlockedSnapshots.length === 0
      ? '<p class="checkpoint-empty">这里还没有解锁的回档节点。</p>'
      : unlockedSnapshots
          .map((snapshot) => {
            const valid = validateCheckpointSnapshot(snapshot);
            const isCurrent = snapshot.id === currentId;
            return `
              <article class="checkpoint-card ${isCurrent ? "current" : ""} ${!valid ? "broken" : ""}">
                <div>
                  <strong>${snapshot.category === "branch" ? "★ " : ""}${snapshot.title}</strong>
                  <span>章节：${snapshot.chapter}</span>
                  <span>类型：${snapshot.category === "main" ? "主线" : "支线"}</span>
                  <span>最近记录：${formatCheckpointTime(snapshot.updatedAt)}</span>
                </div>
                ${
                  !valid
                    ? '<em>存档损坏</em>'
                    : isCurrent
                    ? '<em>当前节点</em>'
                    : `<button type="button" data-restore-checkpoint="${snapshot.id}">回到这里</button>`
                }
              </article>
            `;
          })
          .join("");

  list.querySelectorAll("[data-restore-checkpoint]").forEach((button) => {
    button.addEventListener("click", () => showCheckpointConfirm(button.dataset.restoreCheckpoint));
  });

  const manualButton = checkpointPanel.querySelector("#checkpointManualButton");
  manualButton.disabled = !currentId;
  manualButton.textContent = currentId ? "更新当前节点快照" : "当前场景暂不支持手动记录";
};

const updateCurrentCheckpointManually = () => {
  const checkpointId = getCheckpointIdForScene();
  if (!checkpointId) {
    showToast("当前场景暂不支持手动记录。", 1800);
    return;
  }
  createOrUpdateCheckpoint(checkpointId);
  showToast("当前节点已更新。", 1600);
  renderCheckpointPanel();
};

const showCheckpointConfirm = (id) => {
  const snapshot = getCheckpointSnapshot(id);
  if (!canRestoreCheckpoint(id)) {
    console.warn("拒绝回档：节点尚未解锁或位于当前剧情之后", { id, snapshot });
    showToast("该剧情尚未解锁，无法回档。", 2200);
    return;
  }
  pendingCheckpointRestoreId = id;
  const confirm = checkpointPanel.querySelector("#checkpointConfirm");
  confirm.classList.remove("hidden");
  confirm.innerHTML = `
    <strong>确定回到“${snapshot.title}”吗？</strong>
    <p>当前尚未保存的临时操作将被放弃。照片、聊天、成就和彩蛋会恢复到该节点当时；已经解锁的回档节点不会消失。</p>
    <div>
      <button class="secondary-button" type="button" id="cancelCheckpointRestore">取消</button>
      <button class="primary-button" type="button" id="confirmCheckpointRestore">确认回档</button>
    </div>
  `;
  confirm.querySelector("#cancelCheckpointRestore").addEventListener("click", () => {
    pendingCheckpointRestoreId = null;
    confirm.classList.add("hidden");
  });
  confirm.querySelector("#confirmCheckpointRestore").addEventListener("click", () => restoreCheckpoint(pendingCheckpointRestoreId));
};

const cleanupCurrentSceneBeforeRestore = () => {
  stopMathPuzzleTimer();
  window.clearInterval(hungerTimer);
  hungerTimer = null;
  window.clearInterval(teacherDistanceTimer);
  teacherDistanceTimer = null;
  window.clearInterval(physicsWorkbookTimer);
  physicsWorkbookTimer = null;
  clearEslChatTimer();
  clearPhysicsChatTimer();
  window.clearTimeout(peMysteryChatTimer);
  peMysteryChatTimer = null;
  clearBasketballChatTimer();
  clearSecretChatTimer();
  clearNightCallTimer();
  window.clearTimeout(showToast.timer);
  window.clearTimeout(showInnerOs.timer);
  window.clearTimeout(secretVideoCloseTimer);
  secretVideoCloseTimer = null;
  mathPuzzlePointer = null;
  pointerDraggedItem = null;
  pointerDrag = null;
  outdoorCameraDrag = null;
  decorDrag = null;
  document.body.classList.remove("math-time-warning");
  document.querySelector("#mathPuzzleWrap")?.remove();
  document.querySelector("#mathPuzzleTimer")?.remove();
  document.querySelector("#campusExitArrow")?.remove();
  document.querySelector("#basketballRouteArrow")?.remove();
  document.querySelector("#nightPathArrow")?.remove();
  document.querySelector("#secret-video-overlay")?.remove();
  removeQianModeHotspot?.();
  removeNightSecretOverlays?.();
  closeCalculatorPanel?.();
  document.querySelectorAll(".album-viewer, .confetti-layer, .decor-ghost").forEach((node) => node.remove());
  toast.classList.add("hidden");
  innerOs.classList.add("hidden");
  if (phoneDialog.open) phoneDialog.close();
  if (reviewDialog.open) reviewDialog.close();
  if (scheduleDialog.open) scheduleDialog.close();
  setModalOpen(false);
};

const restoreCheckpoint = async (id) => {
  if (!id || runtimeState.isRestoringCheckpoint) return;
  const snapshot = getCheckpointSnapshot(id);
  if (!canRestoreCheckpoint(id)) {
    console.warn("拒绝回档：节点尚未解锁或位于当前剧情之后", { id, snapshot });
    showToast("该剧情尚未解锁，无法回档。", 2200);
    return;
  }

  const beforeRestoreBackup = sanitizeGameStateForCheckpoint(gameState);
  runtimeState.isRestoringCheckpoint = true;
  updateCheckpointButtonVisibility();

  try {
    cleanupCurrentSceneBeforeRestore();
    const restoredState = migrateCheckpointState(snapshot);
    restoredState.isModalOpen = false;
    restoredState.isGameplayActive = true;
    localStorage.setItem(gameStateKey, JSON.stringify(restoredState));
    localStorage.setItem(checkpointRestorePendingKey, JSON.stringify({ id, at: Date.now() }));
    closeCheckpointPanel();
    showRestoreOverlay("正在回到过去……");
    window.setTimeout(() => window.location.reload(), 320);
  } catch (error) {
    console.warn("回档失败", error);
    localStorage.setItem(gameStateKey, JSON.stringify(beforeRestoreBackup));
    showToast("回档失败，已返回当前场景。", 2200);
    runtimeState.isRestoringCheckpoint = false;
    updateCheckpointButtonVisibility();
  }
};

const showRestoreOverlay = (message) => {
  let overlay = document.querySelector("#checkpointRestoreOverlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "checkpointRestoreOverlay";
    overlay.className = "checkpoint-restore-overlay";
    document.body.append(overlay);
  }
  overlay.textContent = message;
  overlay.classList.remove("hidden");
};

const getPendingCheckpointRestore = () => {
  try {
    return JSON.parse(localStorage.getItem(checkpointRestorePendingKey));
  } catch {
    return null;
  }
};

const clearPendingCheckpointRestore = () => {
  localStorage.removeItem(checkpointRestorePendingKey);
};

const renderSceneById = async (scene = gameState.currentScene) => {
  renderHud();
  setGameplayActive(Boolean(gameState.isGameplayActive));
  updateUtilityToolVisibility();

  const stableRenderers = {
    dormOpening: startFirstAct,
    waking: showWakingDescription,
    packing: startPackingScene,
    dormDoor: showPlaceholderScene,
    route: showRouteScene,
    cafeteriaIntro: showCafeteriaIntro,
    cafeteriaOrder: showBreakfastOrderScene,
    cafeteriaPayment: showBreakfastOrderScene,
    classroomFront: () => showClassroomFront(gameState.ateBreakfast),
    classroomBeforeLesson: showClassroomBeforeLesson,
    eslClass: () => renderEslClass(gameState.eslChatTaskCompleted),
    eslContinue: showEslContinueScene,
    phoneConfiscatedClass: showPhoneConfiscatedScene,
    classDismissed: () => showClassDismissed(gameState.phoneConfiscated),
    breakAfterESL: showBreakAfterEsl,
    seewoNetease: showNeteaseScene,
    beforeSecondClass: () => showBeforeSecondClass("课间结束后，下一节课很快就要开始了。"),
    physicsIntro: showPhysicsIntro,
    physicsWorkbookCheck: showPhysicsWorkbookCheck,
    physicsWorkbookMiniGame: () => {
      classroomPanel.innerHTML = "";
      showScreen(classroomScreen, "desk-background").then(renderPhysicsWorkbookMiniGame);
    },
    physicsContinue: showPhysicsContinue,
    physicsStairs: showPhysicsStairs,
    physicsDormEscape: showPhysicsDormEscape,
    physicsDismissed: showPhysicsDismissed,
    peClassroom: showPePlaceholder,
    peTeacherIntro: showPeTeacherIntro,
    pathToPlayground: showPathToPlayground,
    playgroundIntro: showPlaygroundIntro,
    peRunning: () => (gameState.peLap >= 2 ? showPeLapTwo() : showPeLapOne()),
    peDismissal: showPeDismissal,
    peFreeActivity: showPeFreeActivity,
    pianoRoom: showPianoRoomIntro,
    pianoFirstSong: showFirstPianoSong,
    pianoSecondSong: showSecondPianoSong,
    pianoRoomDone: showPianoBranchEnding,
    forestPath: showForestIntro,
    bambooForest: showBambooForest,
    forestDone: showForestBranchEnding,
    peMysteryIntro: showPeMysteryIntro,
    outdoorSecret: showOutdoorSecretScene,
    outdoorDiscovery: showOutdoorDiscoveryStory,
    outdoorLeaveQuietly: showOutdoorLeaveQuietly,
    outdoorSharePrompt: showOutdoorSharePrompt,
    lunchCafeteria: showLunchCafeteria,
    lunchOrder: showLunchOrderScene,
    lunchPayment: showLunchOrderScene,
    lunchMeal: showLunchMealScene,
    lunchExit: showLunchExitScene,
    afternoonClassroom: showAfternoonClassroom,
    tiangeCrowd: showTiangeCrowdScene,
    tiangeDecor: showTiangeDecorScene,
    tiangeDecorPhoto: showTiangeDecorComplete,
    brinClassIntro: showBrinClassIntro,
    brinClass: showBrinGroupingScene,
    brinRoundOne: showBrinDrawingBoard,
    brinRoundTwo: showBrinGuessBoard,
    brinGhostStory: showBrinGhostStory,
    mathClass: showMathPlaceholder,
    mathPuzzle: () => {
      classroomPanel.classList.add("tiange-mini-panel", "brin-mini-panel");
      classroomPanel.innerHTML = `
        <p class="scene-label">数字华容道</p>
        <p class="mini-story-text" id="mathStoryText">将数字恢复为1—15的正确顺序。只能移动空白格旁边的数字。</p>
      `;
      showScreen(classroomScreen, "math-class-background").then(() => {
        renderMathPuzzle();
        if (!gameState.mathPuzzleCompleted) startMathPuzzleTimer();
      });
    },
    mathEarlyDismissal: showMathEarlyDismissal,
    mathDetentionHomework: acceptMathHomework,
    campusWalkIntro: showCampusWalkIntro,
    campusStairs: showCampusStairs,
    dinnerCafeteriaIntro: showDinnerCafeteriaIntro,
    dinnerOrder: showDinnerOrderScene,
    dinnerPayment: showDinnerOrderScene,
    dinnerMeal: showDinnerMealScene,
    dinnerFinished: showDinnerFinishedScene,
    afterDinnerClassroom: showAfterDinnerClassroom,
    basketballRoute: showBasketballRoute,
    basketballCourtIntro: showBasketballCourtIntro,
    basketballGame3: () => showBasketballPhotoStep("photo3", { skipIntro: true }),
    basketballGame4: () => showBasketballPhotoStep("photo4", { skipIntro: true }),
    basketballGame5: () => showBasketballPhotoStep("photo5", { skipIntro: true }),
    basketballSharePrompt: showBasketballSharePrompt,
    basketballVictory: showBasketballVictoryScene,
    eveningStudyClassroom: showEveningStudyReturnClassroom,
    eveningStudyProgress: showEveningStudyProgress,
    nightClassroomAfterStudy: showEveningStudyEnd,
    nightSeewoDesktop: showNightSeewoDesktop,
    baidupanHome: showBaidupanHome,
    secretAfterClose: showSecretFolderAfterClose,
    nightClassroomSecretReaction: showSecretFolderAfterClose,
    secretAgreement: showSecretAgreementPanel,
    secretCrypticPrompt: showSecretCrypticPrompt,
    nightDormPrep: showDormReturnPreparation,
    nightClassroomLightsOut: showNightClassroomLightsOut,
    nightPath: showNightPathScene,
    nightPond: showNightPondScene,
    dormCat: showDormCatScene,
    nightDorm: showNightDormScene,
    lightsOut: showLightsOutScene,
    nightCallEnded: showAfterNightCall,
    dayOneReflection: startDayOneEnding,
    dayOneDream: startDayOneEnding,
    dayOneEnding: startDayOneEnding,
    dayOneEnding_normal: () => renderEndingSettlement("normal"),
    dayOneEnding_happy: () => renderEndingSettlement("happy"),
    dayOneEnding_bonus: () => renderDandelionEnding(),
  };

  const campusStep = campusPhotoSteps.find((step) => step.scene === scene);
  if (campusStep) {
    await showCampusPhotoStep(campusStep.key, { skipIntro: true });
    return;
  }

  const renderer = stableRenderers[scene];
  if (renderer) {
    await renderer();
    return;
  }

  console.warn(`缺少场景重开入口：${scene}`);
  placeholderLabel.textContent = "回档提示";
  placeholderTitle.textContent = "这个节点需要重新进入";
  placeholderCopy.textContent = "当前回档节点已恢复，但这个场景暂时没有专用重开入口。你可以从回档面板选择附近的主线节点。";
  await showScreen(placeholderScreen, "black-background");
  setGameplayActive(true);
};

const phoneHeader = (title, backScreen = null) => `
  <div class="phone-app-header">
    ${
      backScreen
        ? `<button class="phone-back" type="button" data-phone-screen="${backScreen}">‹</button>`
        : "<span></span>"
    }
    <h2 id="phoneTitle">${title}</h2>
    <span></span>
  </div>
`;

const renderPhoneHome = () => {
  phoneView.innerHTML = `
    <section class="phone-home">
      <h1 id="phoneTitle">手机</h1>
      <div class="phone-app-grid">
        <button class="phone-app" type="button" data-phone-screen="wechat">
          <span class="app-icon wechat-icon">
            <img src="./assets/ui/wechat.svg" alt="" />
          </span>
          <span>微信</span>
        </button>
        <button class="phone-app" type="button" data-phone-screen="memo">
          <span class="app-icon memo-icon">备</span>
          <span>备忘录</span>
        </button>
        <button class="phone-app" type="button" data-phone-screen="alipay">
          <span class="app-icon alipay-icon">
            <img src="./assets/items/支付宝.jpg" alt="" onerror="this.remove(); this.parentElement.dataset.fallback='true';" />
            <span>支付宝</span>
          </span>
          <span>支付宝</span>
        </button>
        <button class="phone-app" type="button" data-phone-screen="camera">
          <span class="app-icon camera-icon">相</span>
          <span>相机</span>
        </button>
        <button class="phone-app" type="button" data-phone-screen="album">
          <span class="app-icon album-icon">册</span>
          <span>相册</span>
        </button>
      </div>
    </section>
  `;
};

const renderWechatList = () => {
  phoneView.innerHTML = `
    ${phoneHeader("微信", "home")}
    <section class="chat-list">
      <button class="chat-card" type="button" data-phone-screen="groupChat">
        <span class="chat-avatar">群</span>
        <span>
          <strong>ibdt-b学生群</strong>
          <small>群里暂时还没有新的消息。</small>
        </span>
      </button>
    </section>
  `;
};

const renderGroupChat = () => {
  const messages = getClassGroupMessages();
  const canAskSchedule = gameState.needCheckSchedule && !gameState.askedSchedule;
  const nextEslMessage = getNextEslMessage();
  const canSendEslMessage = shouldShowEslSendButton(nextEslMessage);
  const nextPhysicsDormMessage = getNextPhysicsDormMessage();
  const canSendPhysicsDormMessage = shouldShowPhysicsDormSendButton(nextPhysicsDormMessage);
  const canSendMysteryPhoto = shouldShowPeMysteryPhotoButton();
  const nextBasketballPreMessage = getNextBasketballPreMessage();
  const canSendBasketballPreMessage = shouldShowBasketballPreButton(nextBasketballPreMessage);
  const canSendBasketballPhoto = shouldShowBasketballPhotoButton();
  const canGoLunchFromChat =
    gameState.currentScene === "outdoorSharePrompt" && gameState.peBranches?.mysteryGroupChatCompleted;
  const canGoBasketballCourt =
    gameState.currentScene === "afterDinnerClassroom" && gameState.basketballPreChatCompleted;
  const canContinueBasketballMatch =
    gameState.currentScene === "basketballSharePrompt" && gameState.basketballPhotoChatCompleted;
  const nextSecretMessage = getNextSecretCrypticMessage();
  const canSendSecretMessage = shouldShowSecretCrypticButton(nextSecretMessage);
  const canFinishSecretChat =
    gameState.currentScene === "secretCrypticPrompt" && gameState.secretGroupChatCompleted;
  phoneView.innerHTML = `
    <div class="phone-app-header">
      <button class="phone-back" type="button" data-phone-screen="wechat">‹</button>
      <h2>ibdt-b学生群</h2>
      <button class="member-button" type="button" data-phone-screen="members">群成员</button>
    </div>
    <section class="chat-screen">
      ${
        messages.length === 0 && !canAskSchedule
          ? "<p>群里暂时还没有新的消息。</p>"
          : `
            <div class="message-list">
              ${messages.map(renderChatMessage).join("")}
            </div>
          `
      }
      ${
        canAskSchedule
          ? '<button class="send-schedule-question" type="button" data-phone-action="askSchedule">发送：有谁知道今天的课表吗？</button>'
          : ""
      }
      ${
        canSendEslMessage
          ? `<button class="send-schedule-question" type="button" data-phone-action="sendEslMessage">发送：${nextEslMessage.text}</button>`
          : ""
      }
      ${
        canSendPhysicsDormMessage
          ? `<button class="send-schedule-question" type="button" data-phone-action="sendPhysicsDormMessage">发送：${nextPhysicsDormMessage.text}</button>`
          : ""
      }
      ${
        canSendMysteryPhoto
          ? '<button class="send-schedule-question" type="button" data-phone-action="sendPeMysteryPhoto">发送照片：意外拍到的画面</button>'
          : ""
      }
      ${
        canSendBasketballPreMessage
          ? `<button class="send-schedule-question" type="button" data-phone-action="sendBasketballPreMessage">${nextBasketballPreMessage.buttonText ?? `发送：${nextBasketballPreMessage.text ?? nextBasketballPreMessage.title}`}</button>`
          : ""
      }
      ${
        canSendBasketballPhoto
          ? '<button class="send-schedule-question" type="button" data-phone-action="sendBasketballPhoto">发送篮球赛照片</button>'
          : ""
      }
      ${
        canSendSecretMessage
          ? `<button class="send-schedule-question" type="button" data-phone-action="sendSecretCrypticMessage">发送：${nextSecretMessage.text}</button>`
          : ""
      }
      ${
        canGoLunchFromChat
          ? '<button class="send-schedule-question" type="button" data-phone-action="closePhoneToLunch">收起手机，前往食堂</button>'
          : ""
      }
      ${
        canGoBasketballCourt
          ? '<button class="send-schedule-question" type="button" data-phone-action="closePhoneToBasketballRoute">收起手机，前往篮球场</button>'
          : ""
      }
      ${
        canContinueBasketballMatch
          ? '<button class="send-schedule-question" type="button" data-phone-action="closePhoneToBasketballVictory">收起手机，继续看比赛</button>'
          : ""
      }
      ${
        canFinishSecretChat
          ? '<button class="send-schedule-question" type="button" data-phone-action="closePhoneToDormPrep">收起手机，准备回寝</button>'
          : ""
      }
    </section>
  `;
  scrollChatToBottom();
  continueEslChatIfReady();
  continuePhysicsChatIfReady();
  continuePeMysteryChatIfReady();
  continueBasketballChatIfReady();
  continueSecretCrypticChatIfReady();
};

const renderChatMessage = (message) => {
  if (message.type === "system") {
    return `<p class="system-message">${message.text}</p>`;
  }

  if (message.sender === "player") {
    return `
      <article class="chat-message player-message">
        ${message.text ? `<div class="message-bubble">${message.text}</div>` : ""}
        ${renderChatImage(message)}
      </article>
    `;
  }

  return `
    <article class="chat-message other-message">
      <div class="chat-name">${message.sender}</div>
      ${message.text ? `<div class="message-bubble">${message.text}</div>` : ""}
      ${
        message.type === "schedule"
          ? `
            <button class="schedule-thumb" type="button" data-phone-action="openSchedule">
              <img src="${message.image}" alt="课表缩略图" onerror="this.remove(); this.parentElement.dataset.fallback='true';" />
              <span>课表图片缺失</span>
            </button>
          `
          : ""
      }
      ${
        message.type === "sticker"
          ? `
            <button class="sticker-bubble" type="button" data-chat-photo="${message.image}" data-chat-photo-title="群聊表情包" data-sticker>
              <img src="${message.image}" alt="群聊表情包" onerror="this.remove(); this.parentElement.dataset.fallback='true';" />
              <span>表情包缺失</span>
            </button>
          `
          : ""
      }
      ${renderChatImage(message)}
    </article>
  `;
};

const getChatImageDisplayTitle = (message) =>
  message.title?.startsWith("表情包") ? "群聊图片" : message.title ?? "图片";

const renderChatImage = (message) => {
  if (message.type !== "photo") return "";
  const title = getChatImageDisplayTitle(message);
  return `
    <button class="chat-photo-thumb" type="button" data-chat-photo="${message.image}" data-chat-photo-title="${title}">
      <img src="${message.image}" alt="${title}" onerror="this.remove(); this.parentElement.dataset.fallback='true';" />
    </button>
  `;
};

const askScheduleInGroup = () => {
  if (!gameState.needCheckSchedule || gameState.askedSchedule) return;

  addClassGroupMessage({
    sender: "player",
    text: "有谁知道今天的课表吗？",
    type: "text",
  });
  gameState.askedSchedule = true;
  saveGameState();
  renderGroupChat();

  window.setTimeout(() => {
    if (hasScheduleReply()) return;

    addClassGroupMessage({
      sender: "罗罗",
      text: "今天是星期一来着",
      type: "schedule",
      image: "assets/items/课表.jpg",
    });
    if (phoneDialog.open && phoneScreen === "groupChat") {
      renderGroupChat();
    }
  }, 950);
};

const isEslClassActive = () =>
  gameState.currentScene === "eslClass" &&
  gameState.eslChatTaskStarted &&
  !gameState.eslChatTaskCompleted &&
  !gameState.phoneConfiscated;

const getNextEslMessage = () => eslChatScript[gameState.eslChatIndex] ?? null;

const shouldShowEslSendButton = (message = getNextEslMessage()) =>
  isEslClassActive() && phoneScreen === "groupChat" && message?.type === "player";

const scrollChatToBottom = () => {
  window.setTimeout(() => {
    const chatScreen = phoneView.querySelector(".chat-screen");
    if (chatScreen) chatScreen.scrollTop = chatScreen.scrollHeight;
  }, 20);
};

const addEslMessage = (message) => {
  if (message.type === "system") {
    gameState.zzyNicknameChanged = true;
  }

  addClassGroupMessage({
    sender: message.sender,
    text: message.text ?? "",
    type: message.type === "player" ? "text" : message.type,
    image: message.image,
    task: "esl",
  });
  gameState.eslChatIndex += 1;
  saveGameState();
};

const completeEslChatTask = () => {
  gameState.eslChatTaskCompleted = true;
  gameState.teacherDistance = clamp(gameState.teacherDistance, 1, 7);
  saveGameState();
  if (!gameState.phoneConfiscated) markStoryNodeCompleted("eslChatCompletedWithoutConfiscation");
  clearEslChatTimer();
  if (phoneDialog.open) phoneDialog.close();
  setModalOpen(false);
  syncTeacherDistanceTimer();
  updateTeacherDistanceUi();
  showToast("你完成了课堂群聊任务。", 2200);
  renderEslClass(true);
};

const continueEslChatIfReady = () => {
  clearEslChatTimer();
  if (!isEslClassActive() || !phoneDialog.open || phoneScreen !== "groupChat") return;

  const message = getNextEslMessage();
  if (!message) {
    completeEslChatTask();
    return;
  }

  if (message.type === "player") return;

  eslChatTimer = window.setTimeout(() => {
    if (!isEslClassActive() || !phoneDialog.open || phoneScreen !== "groupChat") return;
    addEslMessage(message);
    renderGroupChat();
  }, 1000);
};

const sendCurrentEslMessage = () => {
  const message = getNextEslMessage();
  if (!shouldShowEslSendButton(message)) return;

  addEslMessage(message);
  renderGroupChat();
};

const clearEslChatTimer = () => {
  window.clearTimeout(eslChatTimer);
  eslChatTimer = null;
};

const isPhysicsStairChatActive = () =>
  gameState.currentScene === "physicsStairs" &&
  gameState.physicsStairChatStarted &&
  !gameState.physicsStairChatCompleted;

const isPhysicsDormChatActive = () =>
  gameState.currentScene === "physicsDormEscape" &&
  gameState.physicsDormChatStarted &&
  !gameState.physicsDormChatCompleted;

const getPhysicsTaskMessages = (task) =>
  getClassGroupMessages().filter((message) => message.task === task);

const getNextPhysicsStairMessage = () =>
  physicsStairChatScript[getPhysicsTaskMessages("physicsStairs").length] ?? null;

const getNextPhysicsDormMessage = () =>
  physicsDormChatScript[getPhysicsTaskMessages("physicsDorm").length] ?? null;

const shouldShowPhysicsDormSendButton = (message = getNextPhysicsDormMessage()) =>
  isPhysicsDormChatActive() && phoneScreen === "groupChat" && message?.type === "player";

const startPhysicsChatIfNeeded = () => {
  if (gameState.currentScene === "physicsStairs" && !gameState.physicsStairChatStarted) {
    gameState.physicsStairChatStarted = true;
    saveGameState();
  }

  if (gameState.currentScene === "physicsDormEscape" && !gameState.physicsDormChatStarted) {
    gameState.physicsDormChatStarted = true;
    saveGameState();
  }
};

const addPhysicsMessage = (message, task) => {
  addClassGroupMessage({
    sender: message.sender,
    text: message.text ?? "",
    type: message.type === "player" ? "text" : message.type,
    image: message.image,
    task,
  });
};

const continuePhysicsChatIfReady = () => {
  clearPhysicsChatTimer();
  if (!phoneDialog.open || phoneScreen !== "groupChat") return;

  startPhysicsChatIfNeeded();

  if (isPhysicsStairChatActive()) {
    const message = getNextPhysicsStairMessage();
    if (!message) {
      gameState.physicsStairChatCompleted = true;
      saveGameState();
      updatePhonePayGuide(false);
      revealDormArrowIfReady();
      return;
    }

    physicsChatTimer = window.setTimeout(() => {
      if (!isPhysicsStairChatActive() || !phoneDialog.open || phoneScreen !== "groupChat") return;
      addPhysicsMessage(message, "physicsStairs");
      renderGroupChat();
    }, 1000);
    return;
  }

  if (isPhysicsDormChatActive()) {
    const message = getNextPhysicsDormMessage();
    if (!message) {
      gameState.physicsDormChatCompleted = true;
      saveGameState();
      updatePhonePayGuide(false);
      revealPeButtonIfReady();
      return;
    }

    if (message.type === "player") return;

    physicsChatTimer = window.setTimeout(() => {
      if (!isPhysicsDormChatActive() || !phoneDialog.open || phoneScreen !== "groupChat") return;
      addPhysicsMessage(message, "physicsDorm");
      renderGroupChat();
    }, 1000);
  }
};

const sendCurrentPhysicsDormMessage = () => {
  const message = getNextPhysicsDormMessage();
  if (!shouldShowPhysicsDormSendButton(message)) return;

  addPhysicsMessage(message, "physicsDorm");
  const nextMessage = getNextPhysicsDormMessage();
  if (!nextMessage) {
    gameState.physicsDormChatCompleted = true;
    saveGameState();
    showToast("宿舍消息已回复。", 1800);
  }
  renderGroupChat();
};

const clearPhysicsChatTimer = () => {
  window.clearTimeout(physicsChatTimer);
  physicsChatTimer = null;
};

const peMysteryReplies = [
  { sender: "罗罗", text: "卧槽", type: "text" },
  { sender: "ljq", text: "这是谁啊好难猜啊", type: "text" },
  { sender: "舔哥", text: "好家伙我们在弹琴你们这边什么情况？", type: "text" },
];

const getPeMysteryMessages = () =>
  getClassGroupMessages().filter((message) => message.task === "peMystery");

const shouldShowPeMysteryPhotoButton = () =>
  gameState.currentScene === "outdoorSharePrompt" &&
  gameState.peBranches?.mysteryChoice === "shareToGroup" &&
  gameState.peBranches?.mysteryDiscovered &&
  !gameState.peBranches?.mysteryPhotoShared;

const sendPeMysteryPhotoToGroup = () => {
  if (!shouldShowPeMysteryPhotoButton()) return;

  addClassGroupMessage({
    sender: "player",
    text: "",
    type: "photo",
    title: "意外拍到的画面",
    image: "assets/items/牵手.jpg",
    task: "peMystery",
  });
  gameState.peBranches = {
    ...normalizePeBranches(gameState.peBranches),
    mysteryPhotoShared: true,
    mysteryChoice: "shareToGroup",
  };
  saveGameState();
  renderGroupChat();
};

const continuePeMysteryChatIfReady = () => {
  window.clearTimeout(peMysteryChatTimer);
  peMysteryChatTimer = null;

  if (
    !phoneDialog.open ||
    phoneScreen !== "groupChat" ||
    gameState.currentScene !== "outdoorSharePrompt" ||
    !gameState.peBranches?.mysteryPhotoShared ||
    gameState.peBranches?.mysteryGroupChatCompleted
  ) {
    return;
  }

  const sentReplies = getPeMysteryMessages().filter((message) => message.sender !== "player").length;
  const nextReply = peMysteryReplies[sentReplies];

  if (!nextReply) {
    gameState.peBranches = {
      ...normalizePeBranches(gameState.peBranches),
      mysteryGroupChatCompleted: true,
      mysteryChoice: "shareToGroup",
      mysteryCompleted: true,
    };
    saveGameState();
    showToast("照片已经发进班级群。", 2200);
    renderGroupChat();
    return;
  }

  peMysteryChatTimer = window.setTimeout(() => {
    if (
      !phoneDialog.open ||
      phoneScreen !== "groupChat" ||
      gameState.currentScene !== "outdoorSharePrompt" ||
      gameState.peBranches?.mysteryGroupChatCompleted
    ) {
      return;
    }

    addClassGroupMessage({
      ...nextReply,
      task: "peMystery",
    });
    renderGroupChat();
  }, 1000);
};

const getTaskMessages = (task) => getClassGroupMessages().filter((message) => message.task === task);

const isBasketballPreChatActive = () =>
  gameState.basketballPreChatStarted && !gameState.basketballPreChatCompleted;

const getNextBasketballPreMessage = () =>
  basketballPreChatScript[getTaskMessages("basketballPre").length] ?? null;

const shouldShowBasketballPreButton = (message = getNextBasketballPreMessage()) =>
  isBasketballPreChatActive() && phoneScreen === "groupChat" && message?.sender === "player";

const addBasketballPreMessage = (message) => {
  addClassGroupMessage({
    sender: message.sender,
    text: message.text ?? "",
    type: message.type ?? "text",
    image: message.image,
    title: message.title,
    task: "basketballPre",
  });
  saveGameState();
};

const completeBasketballPreChat = () => {
  gameState.basketballPreChatCompleted = true;
  saveGameState();
  clearBasketballChatTimer();
  updatePhonePayGuide(false);
  renderGroupChat();
};

const continueBasketballPreChatIfReady = () => {
  if (!phoneDialog.open || phoneScreen !== "groupChat" || !isBasketballPreChatActive()) return false;

  const message = getNextBasketballPreMessage();
  if (!message) {
    completeBasketballPreChat();
    return true;
  }

  if (message.sender === "player") return true;

  basketballChatTimer = window.setTimeout(() => {
    if (!phoneDialog.open || phoneScreen !== "groupChat" || !isBasketballPreChatActive()) return;
    addBasketballPreMessage(message);
    renderGroupChat();
  }, 900);
  return true;
};

const sendCurrentBasketballPreMessage = () => {
  const message = getNextBasketballPreMessage();
  if (!shouldShowBasketballPreButton(message)) return;
  addBasketballPreMessage(message);
  renderGroupChat();
};

const shouldShowBasketballPhotoButton = () =>
  gameState.currentScene === "basketballSharePrompt" &&
  hasPhoto("basketball-photo-4") &&
  !gameState.basketballPhotoShared;

const isBasketballShareChatActive = () =>
  gameState.currentScene === "basketballSharePrompt" &&
  gameState.basketballPhotoShared &&
  !gameState.basketballPhotoChatCompleted;

const sendBasketballPhotoToGroup = () => {
  if (!shouldShowBasketballPhotoButton()) return;

  addClassGroupMessage({
    sender: "player",
    text: "",
    type: "photo",
    title: "篮球赛 · 应援时刻",
    image: basketballCourt4Path,
    task: "basketballShare",
  });
  gameState.basketballPhotoShared = true;
  saveGameState();
  renderGroupChat();
};

const continueBasketballShareChatIfReady = () => {
  if (!phoneDialog.open || phoneScreen !== "groupChat" || !isBasketballShareChatActive()) return false;

  const sentReplies = getTaskMessages("basketballShare").filter((message) => message.sender !== "player").length;
  const nextReply = basketballShareReplies[sentReplies];

  if (!nextReply) {
    gameState.basketballPhotoChatCompleted = true;
    saveGameState();
    clearBasketballChatTimer();
    showToast("篮球赛照片已经发进班级群。", 2200);
    renderGroupChat();
    return true;
  }

  basketballChatTimer = window.setTimeout(() => {
    if (!phoneDialog.open || phoneScreen !== "groupChat" || !isBasketballShareChatActive()) return;
    addClassGroupMessage({ ...nextReply, task: "basketballShare" });
    renderGroupChat();
  }, 1000);
  return true;
};

const continueBasketballChatIfReady = () => {
  clearBasketballChatTimer();
  if (continueBasketballPreChatIfReady()) return;
  continueBasketballShareChatIfReady();
};

const clearBasketballChatTimer = () => {
  window.clearTimeout(basketballChatTimer);
  basketballChatTimer = null;
};

const isSecretCrypticChatActive = () =>
  gameState.secretGroupChatStarted && !gameState.secretGroupChatCompleted;

const getNextSecretCrypticMessage = () =>
  secretCrypticChatScript[getTaskMessages("secretCryptic").length] ?? null;

const shouldShowSecretCrypticButton = (message = getNextSecretCrypticMessage()) =>
  gameState.currentScene === "secretCrypticPrompt" &&
  isSecretCrypticChatActive() &&
  phoneScreen === "groupChat" &&
  message?.sender === "player";

const addSecretCrypticMessage = (message) => {
  addClassGroupMessage({
    sender: message.sender,
    text: message.text,
    type: "text",
    task: "secretCryptic",
  });
  saveGameState();
};

const completeSecretCrypticChat = () => {
  gameState.secretChoice = "crypticGroupChat";
  gameState.secretGroupChatCompleted = true;
  saveGameState();
  clearSecretChatTimer();
  updatePhonePayGuide(false);
  renderGroupChat();
};

const continueSecretCrypticChatIfReady = () => {
  clearSecretChatTimer();
  if (!phoneDialog.open || phoneScreen !== "groupChat" || !isSecretCrypticChatActive()) return;

  const message = getNextSecretCrypticMessage();
  if (!message) {
    completeSecretCrypticChat();
    return;
  }

  if (message.sender === "player") return;

  secretChatTimer = window.setTimeout(() => {
    if (!phoneDialog.open || phoneScreen !== "groupChat" || !isSecretCrypticChatActive()) return;
    addSecretCrypticMessage(message);
    renderGroupChat();
  }, 1000);
};

const sendCurrentSecretCrypticMessage = () => {
  const message = getNextSecretCrypticMessage();
  if (!shouldShowSecretCrypticButton(message)) return;
  addSecretCrypticMessage(message);
  renderGroupChat();
};

const clearSecretChatTimer = () => {
  window.clearTimeout(secretChatTimer);
  secretChatTimer = null;
};

const joinNightCall = () => {
  gameState.nightCallJoined = true;
  gameState.nightCallInvited = true;
  gameState.nightCallMessageIndex = Math.max(0, gameState.nightCallMessageIndex);
  saveGameState();
  phoneScreen = "nightCall";
  renderPhone();
};

const declineNightCall = () => {
  gameState.nightCallInvited = false;
  saveGameState();
  phoneDialog.close();
  setModalOpen(false);
  showLightsOutScene("手机屏幕暗了下去。");
  if (!gameState.nightCallDeclinedOnce) {
    gameState.nightCallDeclinedOnce = true;
    saveGameState();
    window.setTimeout(() => {
      if (!gameState.lightsOut || gameState.nightCallCompleted) return;
      showToast("手机又亮了一下。", 1800);
      updatePhonePayGuide(true);
    }, 2600);
  }
};

const continueNightCallIfReady = () => {
  clearNightCallTimer();
  if (!phoneDialog.open || phoneScreen !== "nightCall" || gameState.nightCallCompleted) return;
  if (gameState.nightCallMessageIndex >= nightCallScript.length) return;

  nightCallTimer = window.setTimeout(() => {
    if (!phoneDialog.open || phoneScreen !== "nightCall" || gameState.nightCallCompleted) return;
    gameState.nightCallMessageIndex += 1;
    saveGameState();
    renderNightCallScreen();
  }, gameState.nightCallMessageIndex === 0 ? 500 : 1000);
};

const clearNightCallTimer = () => {
  window.clearTimeout(nightCallTimer);
  nightCallTimer = null;
};

const toggleNightCallControl = (button) => {
  const active = button.getAttribute("aria-pressed") === "true";
  button.setAttribute("aria-pressed", String(!active));
  button.classList.toggle("active", !active);
};

const endNightCall = () => {
  if (gameState.nightCallMessageIndex < nightCallScript.length) return;
  clearNightCallTimer();
  gameState.nightCallCompleted = true;
  saveGameState();
  phoneDialog.close();
  setModalOpen(false);
  showAfterNightCall();
};

const characterSection = (gender, title) => {
  const list = characters.filter((character) => character.gender === gender);
  return `
    <section class="member-section">
      <h3>${title}</h3>
      <div class="member-list">
        ${list
          .map(
            (character) => `
              <button class="member-row" type="button" data-character-id="${character.id}">
                ${character.name}
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
};

const renderMembers = () => {
  phoneView.innerHTML = `
    ${phoneHeader("群成员", "groupChat")}
    <section class="members-screen">
      ${characterSection("female", "女生")}
      ${characterSection("male", "男生")}
    </section>
  `;
};

const renderCharacterDetail = (characterId) => {
  const character = characters.find((item) => item.id === characterId);
  phoneView.innerHTML = `
    ${phoneHeader(character?.name ?? "人物资料", "members")}
    <section class="profile-placeholder">
      <h3>${character?.name ?? "人物"}</h3>
      <p>人物资料暂未解锁。</p>
    </section>
  `;
};

const renderMemo = () => {
  phoneView.innerHTML = `
    ${phoneHeader("备忘录", "home")}
    <section class="memo-screen">
      <p>目前无东西</p>
    </section>
  `;
};

const renderNightCallInvite = () => {
  phoneView.innerHTML = `
    ${phoneHeader("微信语音", null)}
    <section class="night-call-invite">
      <p class="call-invite-kicker">ibdt-b学生群</p>
      <h2>罗罗邀请你加入群语音通话</h2>
      <div class="call-avatar-row">
        ${["罗罗", "高原", "舔哥", "gyy"].map((name) => `<span>${name}</span>`).join("")}
      </div>
      <div class="call-invite-actions">
        <button class="primary-button" type="button" data-phone-action="joinNightCall">加入通话</button>
        <button class="secondary-button" type="button" data-phone-action="declineNightCall">暂时不接</button>
      </div>
    </section>
  `;
};

const getCurrentNightCallLine = () => nightCallScript[gameState.nightCallMessageIndex] ?? null;

const renderNightCallScreen = () => {
  const line = getCurrentNightCallLine() ?? nightCallScript[0];
  const time = line?.time ?? getLastNightCallTime();
  phoneView.innerHTML = `
    <section class="night-call-screen">
      <div class="night-call-time" id="nightCallTime">${time}</div>
      <div class="night-call-grid">
        ${nightCallParticipants
          .map(
            (name) => `
              <article class="night-call-person ${line?.speaker === name ? "speaking" : ""}">
                <span>${name.slice(0, 1)}</span>
                <strong>${name}</strong>
              </article>
            `,
          )
          .join("")}
      </div>
      <div class="night-call-caption" id="nightCallCaption">
        ${line ? `<strong>${line.speaker}</strong><span>${line.text}</span>` : "<span>通话已经安静下来。</span>"}
      </div>
      <div class="night-call-controls">
        <button type="button" data-phone-action="toggleNightMute" aria-pressed="false">静音</button>
        <button type="button" data-phone-action="toggleNightSpeaker" aria-pressed="false">扬声器</button>
        <button class="hangup" type="button" data-phone-action="endNightCall" ${gameState.nightCallMessageIndex < nightCallScript.length ? "disabled" : ""}>挂断</button>
      </div>
    </section>
  `;
  continueNightCallIfReady();
};

const getLastNightCallTime = () => {
  const lines = nightCallScript.slice(0, Math.max(1, gameState.nightCallMessageIndex + 1));
  return [...lines].reverse().find((item) => item.time)?.time ?? "23:48";
};

const renderAlipay = (paidMessage = "") => {
  const isLunch = gameState.pendingOrderType === "lunch" || gameState.currentScene.startsWith("lunch");
  const isDinner = gameState.pendingOrderType === "dinner" || gameState.currentScene.startsWith("dinner");
  const order = isDinner ? getDinnerOrder() : isLunch ? getLunchOrder() : getBreakfastOrder();
  const hasOrder = order.total > 0 && gameState.pendingPayment && !order.paid;
  const paidOrder = order.total > 0 && order.paid;
  const title = isDinner ? "待支付晚餐订单" : isLunch ? "待支付午餐订单" : "待支付早餐订单";
  const orderLines = isDinner ? renderDinnerOrderLines(true) : isLunch ? renderLunchOrderLines(true) : renderOrderLines(true);
  const payAction = isDinner ? "payDinner" : isLunch ? "payLunch" : "payBreakfast";
  const nextAction = isDinner ? "closeToDinnerMeal" : isLunch ? "closeToLunchMeal" : "closeToRoute";
  const nextText = isDinner ? "收起手机，开始吃饭" : isLunch ? "收起手机，开始吃饭" : "收起手机，离开食堂";

  phoneView.innerHTML = `
    ${phoneHeader("支付宝", "home")}
    <section class="alipay-screen">
      <div class="alipay-card">
        <p class="alipay-eyebrow">${title}</p>
        ${
          hasOrder || paidOrder
            ? `
              ${orderLines}
              <div class="order-total">合计：${formatMoney(order.total)}</div>
            `
            : '<p class="empty-order">暂无待支付订单。</p>'
        }
        ${paidMessage ? `<p class="payment-success">${paidMessage}</p>` : ""}
        ${
          hasOrder
            ? `<button class="alipay-pay-button" type="button" data-phone-action="${payAction}">支付宝支付</button>`
            : ""
        }
        ${
          paidOrder
            ? `<button class="alipay-next-button" type="button" data-phone-action="${nextAction}">${nextText}</button>`
            : ""
        }
      </div>
    </section>
  `;
};

const getCameraPreviewImage = () => {
  if (gameState.cameraTarget?.image) return gameState.cameraTarget.image;

  const sceneImages = {
    pianoRoom: "assets/items/琴房.jpg",
    bambooForest: "assets/items/竹林.jpg",
    forestPath: forestImagePath,
    peFreeActivity: "assets/items/操场.jpg",
    peDismissal: "assets/items/操场.jpg",
    peRunning: "assets/items/操场.jpg",
    playgroundIntro: "assets/items/操场.jpg",
    pathToPlayground: "assets/items/小路.jpg",
    peClassroom: "assets/items/教室.jpg",
    nightPond: nightPondImagePath,
    dormCat: dormCatImagePath,
  };

  return sceneImages[gameState.currentScene] ?? "assets/items/操场.jpg";
};

const hasPhoto = (photoId) => gameState.photos.some((photo) => photo.id === photoId);

const savePhotoFromTarget = (target, extra = {}) => {
  const existingPhoto = gameState.photos.find((photo) => photo.id === target.id);
  if (existingPhoto) {
    existingPhoto.image = target.id === "tiange-decorated-photo" ? tiangeDecorImagePath : target.image;
    if (Array.isArray(extra.decorations)) {
      existingPhoto.decorations = extra.decorations;
    }
    saveGameState();
    return;
  }

  if (!hasPhoto(target.id)) {
    gameState.photos.push({
      id: target.id,
      title: target.title,
      image: target.image,
      scene: target.scene || gameState.currentScene,
      capturedAt: new Date().toISOString(),
      ...extra,
    });
    saveGameState();
  }
};

const saveCurrentCameraPhoto = () => {
  if (isOutdoorSecretCamera()) {
    showToast("先拖动取景框找找角度。", 1600);
    return;
  }

  const target = normalizeCameraTarget(gameState.cameraTarget);
  if (!target) {
    showToast("这里暂时没有值得记录的内容。", 1800);
    return;
  }

  savePhotoFromTarget(
    target,
    target.id === "tiange-decorated-photo"
      ? { decorations: getTiangeDecorationSnapshot() }
      : {},
  );
  if (target.id === "tiange-decorated-photo") {
    gameState.tiangePhotoTaken = true;
    saveGameState();
  }
  if (target.id === "night-pond-photo") unlockEasterEgg("blackSwanEcho", gameState.currentScene);
  if (target.id === "dorm-cat-photo") unlockEasterEgg("dormCat", gameState.currentScene);
  markCampusPhotoCaptured(target.id);
  markBasketballPhotoCaptured(target.id);

  renderCamera(true);
  showToast("照片已保存到相册。", 1600);
};

const outdoorCameraHotspots = [
  { id: 1, x: 22, y: 34, label: "拍摄点位 1", secret: false },
  { id: 2, x: 72, y: 28, label: "拍摄点位 2", secret: false },
  { id: 3, x: 52, y: 52, label: "拍摄点位 3", secret: true },
  { id: 4, x: 30, y: 72, label: "拍摄点位 4", secret: false },
  { id: 5, x: 78, y: 70, label: "拍摄点位 5", secret: false },
];

const isOutdoorSecretCamera = () =>
  gameState.currentScene === "outdoorSecret" && gameState.cameraTarget?.id === "outdoor-secret-camera";

const getTiangeDecorationSnapshot = () =>
  normalizeDecorItems(gameState.decorItems)
    .filter((item) => item.placed)
    .map((item) => ({
      id: item.id,
      emoji: item.label,
      xPercent: item.xPercent,
      yPercent: item.yPercent,
      rotation: item.rotation,
      scale: item.scale,
    }));

const renderDecorationOverlay = (decorations = getTiangeDecorationSnapshot()) => `
  <div class="photo-decoration-layer">
    ${decorations
      .map(
        (item) => `
          <span
            class="photo-decoration"
            style="left:${item.xPercent ?? 50}%; top:${item.yPercent ?? 40}%; transform: translate(-50%, -50%) rotate(${item.rotation ?? 0}deg) scale(${item.scale ?? 1});"
          >${item.emoji ?? item.label}</span>
        `,
      )
      .join("")}
  </div>
`;

const renderOutdoorSecretCamera = () => {
  phoneView.innerHTML = `
    ${phoneHeader("相机", "home")}
    <section class="camera-screen outdoor-camera-screen">
      <div class="outdoor-camera-stage" id="outdoorCameraStage">
        <img class="outdoor-camera-bg" src="assets/items/室外.jpg" alt="室外取景" onerror="this.remove(); this.parentElement.dataset.fallback='true';" />
        <span class="outdoor-camera-fallback">室外场景图片缺失</span>
        ${outdoorCameraHotspots
          .map(
            (hotspot) => `
              <span class="camera-hotspot" data-hotspot-id="${hotspot.id}" style="left:${hotspot.x}%; top:${hotspot.y}%;">
                ${hotspot.id}
              </span>
            `,
          )
          .join("")}
        <div class="mobile-viewfinder" id="mobileViewfinder" style="left:50%; top:78%;">
          <img src="assets/items/室外.jpg" alt="" />
          <span class="focus-box"></span>
          <div class="camera-flash"></div>
        </div>
      </div>
      <p class="camera-hint" id="cameraHotspotHint">拖动取景框，寻找适合拍摄的位置。</p>
      <div class="camera-actions">
        <button class="camera-shutter" type="button" data-phone-action="takePhoto" aria-label="拍照"></button>
      </div>
    </section>
  `;

  const viewfinder = phoneView.querySelector("#mobileViewfinder");
  viewfinder.addEventListener("pointerdown", startOutdoorCameraDrag);
};

const startOutdoorCameraDrag = (event) => {
  const viewfinder = event.currentTarget;
  const stage = phoneView.querySelector("#outdoorCameraStage");
  if (!stage || !viewfinder || gameState.peBranches?.mysteryDiscovered) return;

  event.preventDefault();
  viewfinder.setPointerCapture?.(event.pointerId);
  const stageRect = stage.getBoundingClientRect();
  const viewRect = viewfinder.getBoundingClientRect();
  outdoorCameraDrag = {
    pointerId: event.pointerId,
    stage,
    viewfinder,
    offsetX: event.clientX - viewRect.left - viewRect.width / 2,
    offsetY: event.clientY - viewRect.top - viewRect.height / 2,
    stageRect,
  };
  viewfinder.classList.add("dragging");
};

const updateOutdoorCameraDrag = (event) => {
  if (!outdoorCameraDrag || outdoorCameraDrag.pointerId !== event.pointerId) return;

  event.preventDefault();
  const { stage, viewfinder, offsetX, offsetY } = outdoorCameraDrag;
  const stageRect = stage.getBoundingClientRect();
  const viewRect = viewfinder.getBoundingClientRect();
  const minX = viewRect.width / 2;
  const maxX = stageRect.width - viewRect.width / 2;
  const minY = viewRect.height / 2;
  const maxY = stageRect.height - viewRect.height / 2;
  const centerX = clamp(event.clientX - stageRect.left - offsetX, minX, maxX);
  const centerY = clamp(event.clientY - stageRect.top - offsetY, minY, maxY);
  const percentX = (centerX / stageRect.width) * 100;
  const percentY = (centerY / stageRect.height) * 100;

  viewfinder.style.left = `${percentX}%`;
  viewfinder.style.top = `${percentY}%`;
  checkOutdoorCameraHotspot(percentX, percentY);
};

const endOutdoorCameraDrag = (event) => {
  if (!outdoorCameraDrag || outdoorCameraDrag.pointerId !== event.pointerId) return;

  outdoorCameraDrag.viewfinder.classList.remove("dragging");
  outdoorCameraDrag = null;
};

const checkOutdoorCameraHotspot = (x, y) => {
  if (gameState.peBranches?.mysteryDiscovered) return;

  const activeHotspot = outdoorCameraHotspots.find((hotspot) => Math.hypot(x - hotspot.x, y - hotspot.y) <= 9);
  phoneView.querySelectorAll(".camera-hotspot").forEach((node) => {
    node.classList.toggle("active", Number(node.dataset.hotspotId) === activeHotspot?.id);
  });

  const hint = phoneView.querySelector("#cameraHotspotHint");
  if (hint) {
    hint.textContent = activeHotspot ? activeHotspot.label : "拖动取景框，寻找适合拍摄的位置。";
  }
  gameState.cameraHotspot = activeHotspot?.id ?? null;

  const viewfinder = phoneView.querySelector("#mobileViewfinder");
  viewfinder?.classList.toggle("focusing", Boolean(activeHotspot));

  if (activeHotspot?.secret) {
    triggerHandholdingDiscovery();
  }
};

const triggerHandholdingDiscovery = () => {
  if (gameState.peBranches?.mysteryDiscovered) return;
  unlockEasterEgg("handholdingPhoto", "outdoorSecret");

  gameState.peBranches = {
    ...normalizePeBranches(gameState.peBranches),
    mysteryDiscovered: true,
    selectedBranch: "mystery",
  };
  savePhotoFromTarget(
    {
      id: "wwz-catfish-handholding",
      title: "意外拍到的画面",
      image: "assets/items/牵手.jpg",
      scene: "outdoorSecret",
    },
    { hidden: true },
  );
  saveGameState();

  const viewfinder = phoneView.querySelector("#mobileViewfinder");
  const image = viewfinder?.querySelector("img");
  const flash = viewfinder?.querySelector(".camera-flash");
  if (image) image.src = "assets/items/牵手.jpg";
  flash?.classList.add("flash");
  showToast("镜头里好像拍到了什么。", 1800);
  updatePhonePayGuide(false);

  window.setTimeout(() => {
    if (phoneDialog.open) phoneDialog.close();
    showOutdoorDiscoveryStory();
  }, 900);
};

const renderCamera = (captured = false) => {
  if (isOutdoorSecretCamera()) {
    renderOutdoorSecretCamera();
    return;
  }

  const previewImage = getCameraPreviewImage();
  const canCapture = Boolean(gameState.cameraTarget);

  phoneView.innerHTML = `
    ${phoneHeader("相机", "home")}
    <section class="camera-screen">
      <div class="camera-preview">
        ${
          gameState.cameraTarget?.id === "tiange-decorated-photo"
            ? `
              <div class="tiange-photo-frame">
                <img src="${previewImage}" alt="相机取景" onerror="this.remove(); this.closest('.camera-preview').dataset.fallback='true';" />
                ${renderDecorationOverlay()}
              </div>
            `
            : `<img src="${previewImage}" alt="相机取景" onerror="this.remove(); this.parentElement.dataset.fallback='true';" />`
        }
        <span>取景画面缺失</span>
        <div class="camera-flash ${captured ? "flash" : ""}"></div>
      </div>
      <p class="camera-hint">${canCapture ? "对准这一刻。" : "这里暂时没有值得记录的内容。"}</p>
      ${captured ? '<p class="camera-saved">照片已保存到相册。</p>' : ""}
      <div class="camera-actions">
        <button class="camera-shutter" type="button" data-phone-action="takePhoto" aria-label="拍照"></button>
      </div>
      ${
        captured
          ? `
            <div class="camera-after-actions">
              <button class="secondary-button" type="button" data-phone-screen="album">查看相册</button>
              <button class="secondary-button" type="button" data-phone-action="closePhone">收起手机</button>
            </div>
          `
          : ""
      }
    </section>
  `;
};

const renderAlbum = () => {
  phoneView.innerHTML = `
    ${phoneHeader("相册", "home")}
    <section class="album-screen">
      ${
        gameState.photos.length === 0
          ? '<p class="album-empty">相册里还没有照片。</p>'
          : `
            <div class="album-grid">
              ${gameState.photos
                .map(
                  (photo) => `
                    <button class="album-thumb" type="button" data-photo-id="${photo.id}">
                      <span class="album-thumb-frame">
                        <img src="${photo.image}" alt="${photo.title}" onerror="this.remove(); this.parentElement.dataset.fallback='true';" />
                        ${Array.isArray(photo.decorations) ? renderDecorationOverlay(photo.decorations) : ""}
                      </span>
                      <span>${photo.title}</span>
                    </button>
                  `,
                )
                .join("")}
            </div>
          `
      }
    </section>
  `;
};

const openAlbumPhoto = (photoId) => {
  const photo = gameState.photos.find((item) => item.id === photoId);
  if (!photo) return;

  const viewer = document.createElement("div");
  viewer.className = "album-viewer";
  viewer.innerHTML = `
    <button class="album-viewer-close" type="button" aria-label="关闭照片">×</button>
    <figure>
      <div class="album-photo-frame">
        <img src="${photo.image}" alt="${photo.title}" onerror="this.remove(); this.parentElement.dataset.fallback='true';" />
        ${Array.isArray(photo.decorations) ? renderDecorationOverlay(photo.decorations) : ""}
      </div>
      <figcaption>${photo.title}</figcaption>
    </figure>
  `;
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer || event.target.closest(".album-viewer-close")) {
      viewer.remove();
    }
  });
  phoneView.append(viewer);
};

const openChatPhotoViewer = (image, title = "图片") => {
  if (!image) return;

  const viewer = document.createElement("div");
  viewer.className = "album-viewer";
  viewer.innerHTML = `
    <button class="album-viewer-close" type="button" aria-label="关闭图片">×</button>
    <figure>
      <img src="${image}" alt="${title}" onerror="this.remove(); this.parentElement.dataset.fallback='true';" />
      <figcaption>${title}</figcaption>
    </figure>
  `;
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer || event.target.closest(".album-viewer-close")) {
      viewer.remove();
    }
  });
  phoneView.append(viewer);
};

const renderPhone = () => {
  if (phoneScreen === "wechat") renderWechatList();
  else if (phoneScreen === "groupChat") renderGroupChat();
  else if (phoneScreen === "members") renderMembers();
  else if (phoneScreen === "memo") renderMemo();
  else if (phoneScreen === "alipay") renderAlipay();
  else if (phoneScreen === "camera") renderCamera();
  else if (phoneScreen === "album") renderAlbum();
  else if (phoneScreen === "nightCallInvite") renderNightCallInvite();
  else if (phoneScreen === "nightCall") renderNightCallScreen();
  else renderPhoneHome();

  if (isEslClassActive()) {
    const stowButton = document.createElement("button");
    stowButton.className = "stow-phone-button";
    stowButton.type = "button";
    stowButton.dataset.phoneAction = "stowPhone";
    stowButton.textContent = "收起手机";
    phoneView.append(stowButton);
  }
};

const renderPackingItems = () => {
  itemArea.innerHTML = "";
  packedList.innerHTML = "";

  packingItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "item-card";
    card.draggable = true;
    card.dataset.itemId = item.id;
    card.style.setProperty("--item-x", `${item.x}%`);
    card.style.setProperty("--item-y", `${item.y}%`);
    card.style.setProperty("--item-width", `${item.width}px`);
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `收进书包：${item.name}`);
    card.innerHTML = `
      <div class="item-visual" aria-hidden="true">
        <img src="${item.image}" alt="" onerror="this.remove(); this.parentElement.dataset.fallback='true';" />
        <span>${item.icon}</span>
      </div>
      <strong>${item.name}</strong>
      <small>${item.note}</small>
    `;

    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", item.id);
    });
    card.addEventListener("pointerdown", (event) => {
      pointerDraggedItem = item.id;
      pointerDrag = {
        itemId: item.id,
        card,
        startX: event.clientX,
        startY: event.clientY,
        moved: false,
      };
    });
    card.addEventListener("click", (event) => {
      if (card.dataset.dragged === "true") {
        event.preventDefault();
        card.dataset.dragged = "false";
        return;
      }
      packItem(item.id);
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        packItem(item.id);
      }
    });

    itemArea.append(card);
  });

  updatePackingProgress();
};

const updatePackingProgress = () => {
  packingProgress.textContent = `${packedItems.size} / ${packingItems.length} 已整理`;
};

const packItem = (itemId) => {
  if (packedItems.has(itemId)) return;

  const item = packingItems.find((candidate) => candidate.id === itemId);
  if (!item) return;

  packedItems.add(itemId);

  const card = itemArea.querySelector(`[data-item-id="${itemId}"]`);
  if (card) {
    card.classList.add("packed");
    window.setTimeout(() => card.remove(), 220);
  }

  const listItem = document.createElement("li");
  listItem.textContent = item.name;
  packedList.append(listItem);
  updatePackingProgress();
  showToast(`${item.name} 已放进书包`);

  if (packedItems.size === packingItems.length) {
    completePacking();
  }
};

const completePacking = () => {
  completionPanel.classList.remove("hidden");
  packingItems.forEach((item) => addItemToInventory(item.id));
  markStoryNodeCompleted("schoolBagPacked");
};

const ACHIEVEMENT_DEFINITIONS = [
  { id: "wakeUp", title: "你醒啦", description: "正式开始游戏。", category: "清晨启程", icon: "🌅" },
  { id: "packSchoolBag", title: "今天要带什么？", description: "完成整理书包。", category: "清晨启程", icon: "🎒" },
  { id: "phoneUnlocked", title: "手机已解锁", description: "手机进入物品栏。", category: "清晨启程", icon: "📱" },
  { id: "breakfastPaid", title: "早餐是一天的开机键", description: "早餐支付宝支付成功。", category: "清晨启程", icon: "🥟" },
  { id: "skipBreakfast", title: "空腹战士", description: "跳过早餐。", category: "清晨启程", icon: "🫥", hidden: true },
  { id: "scheduleChecked", title: "今天星期几？", description: "询问并查看课表。", category: "清晨启程", icon: "📅" },
  { id: "enterTeachingBuilding", title: "真正的一天开始了", description: "进入教学楼。", category: "清晨启程", icon: "🏫" },
  { id: "firstClassPhoneUse", title: "课桌下的秘密频道", description: "ESL课堂第一次打开手机。", category: "清晨启程", icon: "💬" },
  { id: "eslStealthMaster", title: "群聊潜行大师", description: "手机未被没收并完成ESL群聊。", category: "清晨启程", icon: "🥷" },
  { id: "phoneConfiscated", title: "当场没收", description: "吴老师距离达到10。", category: "清晨启程", icon: "🚫", hidden: true },
  { id: "catfishNickname", title: "鲶鱼诞生", description: "zyz昵称变成鲶鱼。", category: "上午课堂", icon: "🐟" },
  { id: "openNeteaseMusic", title: "教室点歌台", description: "打开网易云。", category: "上午课堂", icon: "🎵" },
  { id: "truthOrDareConfession", title: "五遍我喜欢你", description: "完成真心话大冒险。", category: "上午课堂", icon: "🎡", hidden: true },
  { id: "workbookBattleWon", title: "真题册保卫战", description: "争抢成功。", category: "上午课堂", icon: "📘" },
  { id: "workbookBattleLost", title: "没写的都出去", description: "争抢失败。", category: "上午课堂", icon: "🚪", hidden: true },
  { id: "hongxiangCopypasta", title: "翔吹护定了", description: "完整显示鸿翔应援文。", category: "上午课堂", icon: "🌹", hidden: true },
  { id: "peTeacherIntroduction", title: "阅山，阅书，阅己", description: "完成王在勃自我介绍。", category: "上午课堂", icon: "⛰️" },
  { id: "twoLapsCompleted", title: "两圈刚刚好", description: "完成两圈。", category: "上午课堂", icon: "🏃" },
  { id: "peFreeActivityUnlocked", title: "自由活动！", description: "体育课解散。", category: "上午课堂", icon: "🧭" },
  { id: "allPEBranches", title: "三条路都走过", description: "累计完成琴房、小树林、C隐藏路线。", category: "上午课堂", icon: "🛤️" },
  { id: "pianoRoomPhoto", title: "琴房留影", description: "听第二首并拍摄琴房。", category: "校园探索", icon: "🎹" },
  { id: "bambooRiver", title: "竹林与大河", description: "抵达竹林并拍照。", category: "校园探索", icon: "🎋" },
  { id: "handholdingDiscovered", title: "镜头里多了两个人", description: "相机移动到3号点位。", category: "校园探索", icon: "📸", hidden: true },
  { id: "handholdingShared", title: "班群独家爆料", description: "发送牵手照片。", category: "校园探索", icon: "📰", hidden: true },
  { id: "lunchPaid", title: "午饭已到账", description: "午餐支付成功。", category: "校园探索", icon: "🍱" },
  { id: "tiangeDecorCompleted", title: "装饰大师", description: "五个emoji全部放置。", category: "校园探索", icon: "✨" },
  { id: "tiangePhotoTaken", title: "被装饰的舔哥", description: "拍摄舔哥装饰照。", category: "校园探索", icon: "🤳" },
  { id: "brinDrawingSubmitted", title: "灵魂画手", description: "Brin课堂提交绘画。", category: "校园探索", icon: "🎨" },
  { id: "tripAnswerCorrect", title: "短途出行", description: "正确选择trip。", category: "校园探索", icon: "🧳" },
  { id: "blackSwanStory", title: "池塘里的黑天鹅", description: "听完黑天鹅故事。", category: "校园探索", icon: "🦢" },
  { id: "horseshoeDrawn", title: "马蹄铁护符", description: "Brin画马蹄铁。", category: "傍晚时光", icon: "🧲" },
  { id: "mathPuzzleStarted", title: "十五块与一个空格", description: "开始华容道。", category: "傍晚时光", icon: "🧩" },
  { id: "mathPuzzleWon", title: "华容道大师", description: "60秒内完成。", category: "傍晚时光", icon: "🏅" },
  { id: "mathPuzzleLost", title: "十页的命运", description: "失败并接受10页作业。", category: "傍晚时光", icon: "📚", hidden: true },
  { id: "campusWalkAlbum", title: "五张照片，一段下午", description: "完成校园散步五张照片。", category: "傍晚时光", icon: "🌇" },
  { id: "threeMealsPaid", title: "三餐齐全", description: "当前时间线完成三餐支付。", category: "傍晚时光", icon: "🍽️" },
  { id: "justiceSmokeMemes", title: "正义之烟", description: "完成篮球赛前表情包接龙。", category: "傍晚时光", icon: "💨", hidden: true },
  { id: "basketballPhotographer", title: "球场摄影师", description: "拍摄篮球场3、4、5。", category: "傍晚时光", icon: "🏀" },
  { id: "basketballChampion", title: "我们班冠军！", description: "篮球赛夺冠。", category: "傍晚时光", icon: "🏆" },
  { id: "eveningStudyCompleted", title: "熬到最后一节", description: "完成晚自习。", category: "傍晚时光", icon: "🌃" },
  { id: "nightSeewoOpened", title: "深夜seewo探险", description: "打开深夜seewo和网盘。", category: "夜间与终章", icon: "🖥️" },
  { id: "secretFolderClosed", title: "立刻关闭", description: "马赛克页面成功关闭并进入后续剧情。", category: "夜间与终章", icon: "🫣", hidden: true },
  { id: "confidentialityAgreement", title: "保密协议", description: "签署协议。", category: "夜间与终章", icon: "✍️" },
  { id: "crypticGroupChat", title: "我们真的什么都没看到", description: "完成群聊分支。", category: "夜间与终章", icon: "🙈" },
  { id: "nightPath", title: "夜晚的小道", description: "沿夜路回宿舍。", category: "夜间与终章", icon: "🌙" },
  { id: "nightCallJoined", title: "深夜会议", description: "加入群语音。", category: "夜间与终章", icon: "📞" },
  { id: "nightCallUntilTwo", title: "聊到凌晨两点", description: "通话到02:03。", category: "夜间与终章", icon: "🕑" },
  { id: "firstPhoto", title: "相册的第一页", description: "第一次保存照片。", category: "夜间与终章", icon: "🖼️" },
  { id: "tenUniquePhotos", title: "记忆收藏家", description: "累计10张不同照片ID。", category: "夜间与终章", icon: "📚" },
  { id: "dayOneCompleted", title: "从清晨到凌晨两点", description: "完成第一日。", category: "夜间与终章", icon: "🌌" },
];

const ACHIEVEMENT_BY_ID = Object.fromEntries(ACHIEVEMENT_DEFINITIONS.map((achievement) => [achievement.id, achievement]));
const ACHIEVEMENT_CATEGORIES = ["清晨启程", "上午课堂", "校园探索", "傍晚时光", "夜间与终章"];
const NODE_ACHIEVEMENT_MAP = {
  dormWakeIntroCompleted: ["wakeUp"],
  schoolBagPacked: ["packSchoolBag", "phoneUnlocked"],
  breakfastPaymentCompleted: ["breakfastPaid"],
  breakfastSkipped: ["skipBreakfast"],
  scheduleImageViewed: ["scheduleChecked"],
  teachingBuildingEntered: ["enterTeachingBuilding"],
  eslPhoneOpenedInClass: ["firstClassPhoneUse"],
  eslChatCompletedWithoutConfiscation: ["eslStealthMaster"],
  eslPhoneConfiscated: ["phoneConfiscated"],
  catfishNicknameCreated: ["catfishNickname"],
  neteaseMusicOpened: ["openNeteaseMusic"],
  truthOrDareCompleted: ["truthOrDareConfession"],
  workbookBattleWon: ["workbookBattleWon"],
  workbookBattleLost: ["workbookBattleLost"],
  hongxiangCopypastaCompleted: ["hongxiangCopypasta"],
  peTeacherIntroCompleted: ["peTeacherIntroduction"],
  peTwoLapsCompleted: ["twoLapsCompleted"],
  peFreeActivityUnlocked: ["peFreeActivityUnlocked"],
  pianoRoomPhotoTaken: ["pianoRoomPhoto"],
  bambooRiverPhotoTaken: ["bambooRiver"],
  handholdingDiscovered: ["handholdingDiscovered"],
  handholdingShared: ["handholdingShared"],
  lunchPaymentCompleted: ["lunchPaid"],
  tiangeDecorCompletedNode: ["tiangeDecorCompleted"],
  tiangePhotoTakenNode: ["tiangePhotoTaken"],
  brinDrawingSubmitted: ["brinDrawingSubmitted"],
  tripAnswerCorrect: ["tripAnswerCorrect"],
  blackSwanStoryCompleted: ["blackSwanStory"],
  horseshoeDrawn: ["horseshoeDrawn"],
  mathPuzzleStartedNode: ["mathPuzzleStarted"],
  mathPuzzleWonNode: ["mathPuzzleWon"],
  mathPuzzleLostNode: ["mathPuzzleLost"],
  campusWalkAlbumCompleted: ["campusWalkAlbum"],
  dinnerPaymentCompleted: [],
  threeMealsActuallyPaid: ["threeMealsPaid"],
  justiceSmokeMemesCompleted: ["justiceSmokeMemes"],
  basketballPhotosCompleted: ["basketballPhotographer"],
  basketballChampionNode: ["basketballChampion"],
  eveningStudyCompletedNode: ["eveningStudyCompleted"],
  nightSeewoOpenedNode: ["nightSeewoOpened"],
  secretFolderClosedNode: ["secretFolderClosed"],
  confidentialityAgreementSigned: ["confidentialityAgreement"],
  crypticGroupChatCompletedNode: ["crypticGroupChat"],
  nightPathCompleted: ["nightPath"],
  nightCallJoinedNode: ["nightCallJoined"],
  nightCallUntilTwoNode: ["nightCallUntilTwo"],
  firstPhotoSaved: ["firstPhoto"],
  tenUniquePhotosSaved: ["tenUniquePhotos"],
  allPEBranchesActuallyCompleted: ["allPEBranches"],
  dayOneCompletedNode: ["dayOneCompleted"],
};

const evaluateAchievementsForCompletedNode = (nodeId) => {
  if (gameState.gameStarted !== true) return;
  if (runtimeState.isBooting || runtimeState.isHydratingSave || runtimeState.isRestoringCheckpoint) return;
  (NODE_ACHIEVEMENT_MAP[nodeId] ?? []).forEach((id) => {
    unlockAchievement(id, {
      sourceNodeId: nodeId,
      silent: false,
      reason: "story-node",
    });
  });
};

const markStoryNodeCompleted = (nodeId) => {
  if (!nodeId) return false;
  if (gameState.gameStarted !== true) {
    console.warn("Blocked node completion before game start:", nodeId);
    return false;
  }
  gameState.completedNodeIds = Array.isArray(gameState.completedNodeIds) ? gameState.completedNodeIds : [];
  const isNew = !gameState.completedNodeIds.includes(nodeId);
  if (isNew) gameState.completedNodeIds.push(nodeId);
  saveGameState();
  if (isNew) evaluateAchievementsForCompletedNode(nodeId);
  return isNew;
};

const createEmptyAchievementState = () => ({
  version: 3,
  unlocked: {},
  stats: {
    uniquePhotoIds: [],
    completedPEBranches: [],
    playerMessagesSent: 0,
    mealsPaid: [],
    completedClasses: [],
  },
  initialSyncCompleted: false,
  unreadCount: 0,
});

const normalizeAchievementTimestamp = (value) => {
  if (Number.isFinite(value)) return value;
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : null;
};

const repairAchievementState = (state = achievementState) => {
  const repaired = {
    ...createEmptyAchievementState(),
    ...(state && typeof state === "object" ? state : {}),
  };
  const cleanUnlocked = {};
  Object.entries(repaired.unlocked && typeof repaired.unlocked === "object" ? repaired.unlocked : {}).forEach(([id, record]) => {
    if (!ACHIEVEMENT_BY_ID[id] || !record || typeof record !== "object") return;
    const unlockedAt = normalizeAchievementTimestamp(record.unlockedAt);
    if (record.earned !== true || !Number.isFinite(unlockedAt)) return;
    cleanUnlocked[id] = {
      earned: true,
      unlockedAt,
      sourceScene: record.sourceScene ?? null,
    };
  });
  repaired.version = 3;
  repaired.unlocked = cleanUnlocked;
  repaired.unreadCount = Math.min(Object.keys(cleanUnlocked).length, Math.max(0, Number(repaired.unreadCount) || 0));
  repaired.stats = {
    ...createEmptyAchievementState().stats,
    ...(repaired.stats && typeof repaired.stats === "object" ? repaired.stats : {}),
  };
  repaired.stats.uniquePhotoIds = Array.isArray(repaired.stats.uniquePhotoIds) ? [...new Set(repaired.stats.uniquePhotoIds)] : [];
  repaired.stats.completedPEBranches = Array.isArray(repaired.stats.completedPEBranches)
    ? [...new Set(repaired.stats.completedPEBranches)]
    : [];
  repaired.stats.mealsPaid = Array.isArray(repaired.stats.mealsPaid) ? [...new Set(repaired.stats.mealsPaid)] : [];
  repaired.stats.completedClasses = Array.isArray(repaired.stats.completedClasses) ? [...new Set(repaired.stats.completedClasses)] : [];
  return repaired;
};

const repairIncorrectAchievementUnlocksV3 = (state = achievementState) => {
  const repaired = repairAchievementState(state);
  if (state?.version === 3) return repaired;
  try {
    if (!localStorage.getItem(achievementBackupKey)) {
      localStorage.setItem(achievementBackupKey, JSON.stringify(state ?? {}));
    }
  } catch (error) {
    console.warn("备份旧成就数据失败", error);
  }
  const completedNodes = new Set(Array.isArray(gameState.completedNodeIds) ? gameState.completedNodeIds : []);
  const trustedUnlocked = {};
  Object.entries(repaired.unlocked).forEach(([id, record]) => {
    if (!record.sourceNodeId || !completedNodes.has(record.sourceNodeId)) return;
    if (record.reason === "initialization" || record.reason === "definition-scan" || record.reason === "startup-sync") return;
    trustedUnlocked[id] = record;
  });
  repaired.unlocked = trustedUnlocked;
  repaired.unreadCount = Math.min(Object.keys(trustedUnlocked).length, repaired.unreadCount);
  repaired.version = 3;
  return repaired;
};

const loadAchievementState = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(achievementStateKey));
    const legacy = JSON.parse(localStorage.getItem(achievementKey));
    let state = {
      ...createEmptyAchievementState(),
      ...(saved && typeof saved === "object" ? saved : {}),
    };
    state.unlocked = state.unlocked && typeof state.unlocked === "object" ? state.unlocked : {};
    if (legacy && typeof legacy === "object") {
      Object.entries(legacy).forEach(([id, value]) => {
        if (!ACHIEVEMENT_BY_ID[id] || state.unlocked[id]) return;
        const unlockedAt = normalizeAchievementTimestamp(value?.unlockedAt);
        if (!Number.isFinite(unlockedAt)) return;
        state.unlocked[id] = {
          earned: true,
          unlockedAt,
          sourceScene: value?.sourceScene ?? null,
        };
      });
    }
    state = repairIncorrectAchievementUnlocksV3(state);
    return state;
  } catch {
    return createEmptyAchievementState();
  }
};

const saveAchievementState = () => {
  try {
    localStorage.setItem(achievementStateKey, JSON.stringify(achievementState));
  } catch (error) {
    console.warn("保存成就失败", error);
  }
};

const getAchievements = () => {
  if (!achievementState) achievementState = loadAchievementState();
  return achievementState.unlocked;
};

const isAchievementUnlocked = (id) => getAchievements()[id]?.earned === true;

const getUnlockedAchievementIds = () =>
  Object.entries(getAchievements())
    .filter(([id, record]) => ACHIEVEMENT_BY_ID[id] && record?.earned === true && Number.isFinite(record.unlockedAt))
    .sort(([, a], [, b]) => a.unlockedAt - b.unlockedAt)
    .map(([id]) => id);

const enqueueAchievementToast = (definition) => {
  achievementToastQueue.push(definition);
  showAchievementToast();
};

const showAchievementToast = () => {
  if (achievementToastActive || achievementToastQueue.length === 0) return;
  achievementToastActive = true;
  const definition = achievementToastQueue.shift();
  const container = getAchievementToastContainer();
  const node = document.createElement("div");
  node.className = "achievement-toast-card";
  node.innerHTML = `
    <span class="achievement-toast-icon">${definition.icon}</span>
    <span>
      <strong>${definition.hidden ? "🌟 隐藏成就达成！" : "🏆 成就达成！"}</strong>
      <em>${definition.title}</em>
    </span>
  `;
  container.append(node);
  window.setTimeout(() => node.classList.add("leaving"), 2600);
  window.setTimeout(() => {
    node.remove();
    achievementToastActive = false;
    showAchievementToast();
  }, 3000);
};

const unlockAchievement = (id, options = {}) => {
  if (!achievementState) achievementState = loadAchievementState();
  const definition = ACHIEVEMENT_BY_ID[id];
  const {
    sourceNodeId = null,
    silent = false,
    reason = "story-node",
  } = typeof options === "object" && options !== null ? options : { sourceNodeId: null, silent: false, reason: "legacy-call" };
  if (!definition) {
    console.warn("Unknown achievement:", id);
    return false;
  }
  if (achievementState.unlocked[id]?.earned === true) return false;
  if (!silent) {
    if (gameState.gameStarted !== true) {
      console.warn("Blocked achievement before game start:", id);
      return false;
    }
    if (runtimeState.isBooting || runtimeState.isHydratingSave || runtimeState.isRestoringCheckpoint) {
      console.warn("Blocked achievement during runtime lock:", id);
      return false;
    }
    if (!sourceNodeId) {
      console.warn("Blocked achievement without completed node:", id);
      return false;
    }
    if (!gameState.completedNodeIds?.includes(sourceNodeId)) {
      console.warn("Blocked achievement because node is not completed:", id, sourceNodeId);
      return false;
    }
  }
  achievementState.unlocked[id] = {
    earned: true,
    unlockedAt: Date.now(),
    sourceScene: gameState.currentScene || null,
    sourceNodeId,
    reason,
  };
  if (!silent && !achievementSyncSilent) {
    achievementState.unreadCount = Math.max(0, Number(achievementState.unreadCount) || 0) + 1;
  }
  saveAchievementState();
  renderAchievementTree();
  updateAchievementButtonBadge();
  if (!silent && !achievementSyncSilent && runtimeState.achievementToastsEnabled) enqueueAchievementToast(definition);
  return true;
};

const recordUniquePhoto = (photoId) => {
  if (!photoId) return;
  if (!achievementState) achievementState = loadAchievementState();
  if (!achievementState.stats.uniquePhotoIds.includes(photoId)) {
    achievementState.stats.uniquePhotoIds.push(photoId);
    saveAchievementState();
  }
  if (achievementState.stats.uniquePhotoIds.length >= 1) markStoryNodeCompleted("firstPhotoSaved");
  if (achievementState.stats.uniquePhotoIds.length >= 10) markStoryNodeCompleted("tenUniquePhotosSaved");
};

const recordPEBranchCompletion = (branchId) => {
  if (!branchId) return;
  if (!achievementState) achievementState = loadAchievementState();
  if (!achievementState.stats.completedPEBranches.includes(branchId)) {
    achievementState.stats.completedPEBranches.push(branchId);
    saveAchievementState();
  }
  if (achievementState.stats.completedPEBranches.includes("piano") && achievementState.stats.completedPEBranches.includes("forest") && achievementState.stats.completedPEBranches.includes("mystery")) {
    markStoryNodeCompleted("allPEBranchesActuallyCompleted");
  }
};

const recordMealPaid = (mealId) => {
  if (!mealId) return;
  if (!achievementState) achievementState = loadAchievementState();
  if (!achievementState.stats.mealsPaid.includes(mealId)) {
    achievementState.stats.mealsPaid.push(mealId);
    saveAchievementState();
  }
  if (mealId === "breakfast") markStoryNodeCompleted("breakfastPaymentCompleted");
  if (mealId === "lunch") markStoryNodeCompleted("lunchPaymentCompleted");
  if (mealId === "dinner") markStoryNodeCompleted("dinnerPaymentCompleted");
  if (["breakfast", "lunch", "dinner"].every((meal) => achievementState.stats.mealsPaid.includes(meal))) {
    markStoryNodeCompleted("threeMealsActuallyPaid");
  }
};

const syncAchievementsFromCurrentState = ({ silent = false } = {}) => {
  if (!achievementState) achievementState = loadAchievementState();
  const before = getUnlockedAchievementIds().length;
  const unlockedBefore = { ...achievementState.unlocked };
  achievementSyncSilent = silent;
  const completedNodes = Array.isArray(gameState.completedNodeIds) ? gameState.completedNodeIds : [];
  completedNodes.forEach((nodeId) => {
    (NODE_ACHIEVEMENT_MAP[nodeId] ?? []).forEach((id) => {
      unlockAchievement(id, {
        sourceNodeId: nodeId,
        silent,
        reason: "save-sync",
      });
    });
  });
  achievementSyncSilent = false;

  if (silent) {
    achievementToastQueue = [];
    achievementToastActive = false;
    document.querySelector("#achievement-toast-container")?.replaceChildren();
    const added = Object.keys(achievementState.unlocked).filter((id) => !unlockedBefore[id]).length;
    if (added > 0) console.info(`已根据当前存档补发${added}个成就。`);
  }
  const after = getUnlockedAchievementIds().length;
  achievementState.initialSyncCompleted = true;
  saveAchievementState();
  renderAchievementTree();
  return after - before;
};

const showToast = (message, duration = 1500) => {
  toast.textContent = message;
  toast.classList.remove("hidden");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.add("hidden");
  }, duration);
};

const showInnerOs = (message, duration = 2800) => {
  innerOs.textContent = message;
  innerOs.classList.remove("hidden");
  window.clearTimeout(showInnerOs.timer);
  showInnerOs.timer = window.setTimeout(() => {
    innerOs.classList.add("hidden");
  }, duration);
};

const startPackingScene = async () => {
  gameState.currentScene = "packing";
  saveGameState();
  await showScreen(packingScreen, "clear-dorm-background");
  packedItems = new Set();
  completionPanel.classList.add("hidden");
  renderPackingItems();
};

const setPlaceholderScene = ({ label, title, copy, buttonText, onClick, showReturn = false }) => {
  placeholderLabel.textContent = label;
  placeholderTitle.textContent = title;
  placeholderCopy.textContent = copy;
  dormLeaveButton.textContent = buttonText;
  dormLeaveButton.onclick = onClick;
  dormLeaveButton.classList.toggle("hidden", !buttonText);
  returnHomeButton.classList.toggle("hidden", !showReturn);
};

const showPlaceholderScene = async () => {
  gameState.currentScene = "dormDoor";
  saveGameState();
  setPlaceholderScene({
    label: "宿舍门口 · 清晨",
    title: "宿舍门口 · 清晨",
    copy: "你背上书包，站在宿舍门口。门外的走廊已经有人经过，鞋底擦过地面的声音一下一下远去。\n\n手机安静地躺在物品栏里，书包比刚醒来时重了一点。你握住门把手，忽然意识到，这一天真的要开始了。",
    buttonText: "确定离开宿舍",
    onClick: showRouteScene,
  });
  await showScreen(placeholderScreen, "dorm-background");
};

const setRouteCopy = (mode = "morning") => {
  const routeCopy = routeScreen.querySelector(".route-copy");
  if (mode === "returned") {
    routeCopy.innerHTML = `
      <p class="scene-label">宿舍外 · 清晨</p>
      <h2>宿舍外 · 清晨</h2>
      <p>你从食堂出来，手里还残留着一点早餐的温度。</p>
      <p>宿舍楼和教学楼之间的路重新出现在眼前。人流比刚才多了一些，大家都在往不同方向走。你抬头看了一眼教学楼，忽然停了一下。</p>
    `;
    routeScreen.classList.add("route-returned");
  } else {
    routeCopy.innerHTML = `
      <p class="scene-label">宿舍外 · 清晨</p>
      <h2>宿舍外 · 清晨</h2>
      <p>宿舍楼外的空气比房间里清醒很多。</p>
      <p>清晨的路面还带着一点凉意，远处有人背着书包往教学楼走，也有人拐进旁边的食堂。早餐的味道从建筑物那边飘出来，混着湿漉漉的风。</p>
      <p>你站在路口，短暂地犹豫了一下。</p>
    `;
    routeScreen.classList.remove("route-returned");
  }
  goCafeteriaButton.classList.toggle("hidden", mode === "returned");
};

const showRouteScene = async (mode = "morning") => {
  gameState.currentScene = "route";
  gameState.pendingPayment = false;
  updatePhonePayGuide(false);
  saveGameState();
  setRouteCopy(mode);
  await showScreen(routeScreen, "campus-route-background");
  updatePhonePayGuide();
};

const showClassroomFront = async (ateBreakfast) => {
  gameState.currentScene = "classroomFront";
  gameState.ateBreakfast = Boolean(ateBreakfast);
  gameState.pendingPayment = false;
  updatePhonePayGuide(false);
  saveGameState();
  markStoryNodeCompleted("teachingBuildingEntered");
  enterBuildingButton.classList.remove("hidden");
  classroomPanel.innerHTML = `
    <p class="scene-label">教学楼前 · 清晨</p>
    <h2>教学楼前 · 清晨</h2>
    <p>确认了今天的课表后，你终于沿着大路走向教学楼。</p>
    <p>教学楼的玻璃门在清晨的光里泛着一点冷白色。门口已经有人三三两两地走进去，鞋底、书包扣、早读声和远处的铃声混在一起。</p>
    <p>你站在门前，忽然有一种很清楚的感觉：今天真正的上课时间开始了。</p>
  `;
  await showScreen(classroomScreen, "building-background");
};

const showClassroomBeforeLesson = async () => {
  gameState.currentScene = "classroomBeforeLesson";
  saveGameState();
  enterBuildingButton.classList.add("hidden");
  hideTeacherSystem();
  classroomPanel.innerHTML = `
    <p class="scene-label">教室 · 第一节课前</p>
    <h2>教室 · 第一节课前</h2>
    <p>你走进教室的时候，里面已经坐了不少人。</p>
    <p>桌椅的边角在晨光里显得有点冷，白板还没完全擦干净，空气里有一点书本、空调和早晨没睡醒的味道。你把书包放到脚边，手机安静地躺在物品栏里。</p>
    <p>第一节课是 ESL。教学老师是吴欢老师。</p>
    <button class="primary-button" id="startEslButton" type="button">开始上课</button>
  `;
  classroomPanel.querySelector("#startEslButton").addEventListener("click", startEslClass);
  await showScreen(classroomScreen, "classroom-background");
};

const startEslClass = async () => {
  gameState.currentScene = "eslClass";
  gameState.currentClass = "ESL";
  gameState.currentTeacher = "吴欢老师";
  gameState.teacherDistance = 4;
  gameState.phoneConfiscated = false;
  gameState.phoneAvailable = true;
  gameState.eslChatTaskStarted = true;
  gameState.eslChatTaskCompleted = false;
  gameState.eslChatIndex = 0;
  gameState.zzyNicknameChanged = false;
  saveGameState();
  markStoryNodeCompleted("eslPhoneOpenedInClass");
  renderEslClass(false);
  showTeacherSystem();
  syncTeacherDistanceTimer();
  await showScreen(classroomScreen, "classroom-background");
};

const renderEslClass = (completed = false) => {
  classroomPanel.innerHTML = `
    <p class="scene-label">第一节课 · ESL</p>
    <h2>第一节课 · ESL</h2>
    <p>吴欢老师站在讲台前，声音平稳地讲着今天的内容。</p>
    <p>你坐在下面，课本摊开在桌上。手机在物品栏里轻轻亮了一下，ibdt-b学生群似乎开始热闹起来。</p>
    ${
      completed
        ? '<button class="primary-button" id="continueListeningButton" type="button">继续听课</button>'
        : '<p class="class-task-hint">目标：在不被吴欢老师发现的情况下，看完 ibdt-b 学生群里的聊天。</p>'
    }
  `;

  classroomPanel.querySelector("#continueListeningButton")?.addEventListener("click", showEslContinueScene);
};

const showEslContinueScene = () => {
  gameState.currentScene = "eslContinue";
  saveGameState();
  hideTeacherSystem();
  classroomPanel.innerHTML = `
    <p class="scene-label">第一节课 · ESL 继续</p>
    <h2>第一节课 · ESL 继续</h2>
    <p>你把手机收起来，装作认真看着课本。</p>
    <p>吴欢老师还在讲台前讲课，教室里空调声很轻。群聊像一阵刚刚吹过去的风，暂时停在了屏幕之外。</p>
    <button class="primary-button" id="waitDismissalButton" type="button">等待下课</button>
  `;
  classroomPanel.querySelector("#waitDismissalButton").addEventListener("click", () =>
    showClassDismissed(false),
  );
};

const showPhoneConfiscatedScene = async () => {
  gameState.currentScene = "phoneConfiscatedClass";
  saveGameState();
  hideTeacherSystem();
  classroomPanel.innerHTML = `
    <p class="scene-label">第一节课 · 手机被收走</p>
    <h2>第一节课 · 手机被收走</h2>
    <p>后半节课，你只能盯着课本和白板。ibdt-b学生群的消息还在继续，但你已经看不到了。</p>
    <button class="primary-button" id="waitConfiscatedDismissalButton" type="button">等待下课</button>
  `;
  classroomPanel.querySelector("#waitConfiscatedDismissalButton").addEventListener("click", () =>
    showClassDismissed(true),
  );
  await showScreen(classroomScreen, "classroom-background");
};

const showClassDismissed = (wasConfiscated) => {
  if (wasConfiscated || gameState.phoneConfiscated || !gameState.phoneAvailable) {
    gameState.phoneConfiscated = false;
    gameState.phoneAvailable = true;
    ensurePhoneInFirstSlot();
  }

  gameState.currentScene = "classDismissed";
  saveGameState();
  hideTeacherSystem();
  damageHealth(1);
  classroomPanel.innerHTML = `
    <p class="scene-label">下课 · 教室</p>
    <h2>下课 · 教室</h2>
    <p>${wasConfiscated ? "下课铃响后，吴欢老师把手机还给了你。" : "下课铃响了。第一节 ESL 结束。"}</p>
    <button class="secondary-button" id="classEndPlaceholderButton" type="button">继续</button>
  `;
  classroomPanel.querySelector("#classEndPlaceholderButton").addEventListener("click", () => {
    showBreakAfterEsl();
  });
};

const showBreakAfterEsl = async () => {
  gameState.currentScene = "breakAfterESL";
  gameState.recessChoice = null;
  saveGameState();
  enterBuildingButton.classList.add("hidden");
  hideTeacherSystem();
  classroomPanel.innerHTML = `
    <p class="scene-label">下课 · 课间</p>
    <h2>下课 · 课间</h2>
    <p>下课铃声落下后，教室像被松开了一格。</p>
    <p>有人趴在桌上补觉，有人立刻转头聊天，椅子脚拖过地面，发出短短一声。白板前的 seewo 屏幕还亮着，停在上一节课没有完全退出的界面上。</p>
    <section class="character-dialogue">
      <strong>wwz：</strong>
      <p>“我们要不打开网易云听听歌？”</p>
      <div class="recess-choices">
        <button type="button" data-recess-choice="A">A. 不要</button>
        <button type="button" data-recess-choice="B">B. 好的</button>
        <button type="button" data-recess-choice="C">C. ？？？</button>
      </div>
    </section>
  `;
  await showScreen(classroomScreen, "seewo-background");
};

const handleRecessChoice = (choice) => {
  gameState.recessChoice = choice;
  saveGameState();

  if (choice === "A") {
    classroomPanel.innerHTML = `
      <p class="scene-label">下课 · 课间</p>
      <h2>下课 · 课间</h2>
      <section class="character-dialogue compact">
        <strong>你：</strong>
        <p>“不要。”</p>
      </section>
      <p>你摆了摆手，决定把这段课间安静地跳过去。seewo 屏幕还亮着，教室里的声音像一阵混在一起的风。</p>
      <button class="primary-button" id="skipRecessButton" type="button">继续</button>
    `;
    classroomPanel.querySelector("#skipRecessButton").addEventListener("click", () =>
      showBeforeSecondClass("课间很快过去，下一节课的声音已经从走廊那头靠近。"),
    );
  } else if (choice === "B") {
    showNeteaseSetup();
  } else if (choice === "C") {
    triggerTruthOrDareEgg();
  }
};

const showNeteaseSetup = () => {
  classroomPanel.innerHTML = `
    <p class="scene-label">下课 · 课间</p>
    <h2>下课 · 课间</h2>
    <section class="character-dialogue compact">
      <strong>你：</strong>
      <p>“好的。”</p>
      <strong>wwz：</strong>
      <p>“那我点开了。”</p>
    </section>
    <button class="seewo-hotspot" id="seewoHotspot" type="button">点击 seewo 打开网易云</button>
  `;
  classroomPanel.querySelector("#seewoHotspot").addEventListener("click", showNeteaseScene);
};

const showNeteaseScene = async () => {
  gameState.currentScene = "seewoNetease";
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">seewo · 网易云音乐</p>
    <h2>seewo · 网易云音乐</h2>
    <p>seewo 的画面闪了一下，网易云的界面铺开在屏幕上。</p>
    <p>教室里有人抬头看了一眼，又很快继续低头聊天。音乐还没开始，但课间的空气已经像被调成了另一个频道。</p>
    <button class="primary-button" id="returnFromNeteaseButton" type="button">返回课间</button>
  `;
  classroomPanel.querySelector("#returnFromNeteaseButton").addEventListener("click", () =>
    showBeforeSecondClass("歌还没听多久，下一节课的预备铃就像从远处推了过来。"),
  );
  await showScreen(classroomScreen, "netease-background");
};

const showBeforeSecondClass = async (copy) => {
  gameState.currentScene = "beforeSecondClass";
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">第二节课前 · 教室</p>
    <h2>第二节课前 · 教室</h2>
    <p>${copy}</p>
    <button class="primary-button" id="secondClassSoonButton" type="button">继续</button>
  `;
  classroomPanel.querySelector("#secondClassSoonButton").addEventListener("click", showSecondClassPlaceholder);
  await showScreen(classroomScreen, "classroom-background");
};

const showSecondClassPlaceholder = async () => {
  gameState.currentScene = "secondClassSoon";
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">第二节课 · 即将开始</p>
    <h2>第二节课 · 即将开始</h2>
    <p>走廊里的声音慢慢压低，第二节课快要开始了。</p>
    <button class="primary-button" id="startPhysicsClassButton" type="button">进入物理课</button>
  `;
  classroomPanel.querySelector("#startPhysicsClassButton").addEventListener("click", showPhysicsIntro);
  await showScreen(classroomScreen, "classroom-background");
};

const showPhysicsIntro = async () => {
  clearPhysicsWorkbookTimer();
  gameState.currentScene = "physicsIntro";
  gameState.currentClass = "Physics";
  gameState.currentTeacher = "李鸿翔老师";
  gameState.physicsWorkbookProgress = 50;
  gameState.physicsWorkbookResult = null;
  gameState.physicsWorkbookMiniGameActive = false;
  saveGameState();
  recordMealPaid("lunch");
  updatePhonePayGuide(false);
  classroomPanel.innerHTML = `
    <p class="scene-label">第二节课 · 物理</p>
    <h2>第二节课 · 物理</h2>
    <p>第二节课是物理。</p>
    <p>李鸿翔老师走进教室的时候，教室里那点课间残留的声音一下子低了下去。白板前的光有点冷，桌上的书本和试卷被风吹得轻轻动了一下。</p>
    <p>你刚把物理书翻开，心里还没完全从课间的事情里退出来。</p>
    <button class="primary-button" id="beginPhysicsButton" type="button">开始上课</button>
  `;
  classroomPanel.querySelector("#beginPhysicsButton").addEventListener("click", showPhysicsWorkbookCheck);
  await showScreen(classroomScreen, "classroom-background");
};

const showPhysicsWorkbookCheck = () => {
  gameState.currentScene = "physicsWorkbookCheck";
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">第二节课 · 物理</p>
    <h2>真题册检查</h2>
    <section class="teacher-dialogue">
      <strong>李鸿翔：</strong>
      <p>“你真题册作业写了吗？让我来看看你的真题册。”</p>
    </section>
    <p>说着，李鸿翔老师把手朝你的物理真题册伸了过来。</p>
    <div class="workbook-prop">
      <img src="./assets/items/物理真题册.jpg" alt="物理真题册" onerror="this.remove(); this.parentElement.dataset.fallback='true';" />
      <span>物理真题册</span>
    </div>
    <button class="primary-button" id="startWorkbookMiniGameButton" type="button">争抢真题册</button>
  `;
  showInnerOs("内心 OS：完了，忘了写了。", 3200);
  classroomPanel.querySelector("#startWorkbookMiniGameButton").addEventListener("click", startPhysicsWorkbookMiniGame);
};

const startPhysicsWorkbookMiniGame = () => {
  gameState.currentScene = "physicsWorkbookMiniGame";
  gameState.physicsWorkbookProgress = 50;
  gameState.physicsWorkbookResult = null;
  gameState.physicsWorkbookMiniGameActive = true;
  saveGameState();
  renderPhysicsWorkbookMiniGame();
  startPhysicsWorkbookTimer();
};

const renderPhysicsWorkbookMiniGame = () => {
  const progress = clamp(Number(gameState.physicsWorkbookProgress) || 50, 1, 100);
  gameState.physicsWorkbookProgress = progress;
  classroomPanel.innerHTML = `
    <p class="scene-label">争抢真题册</p>
    <h2>争抢真题册</h2>
    <p class="physics-help">把真题册往左边抢回来。低于安全线就能保住它。</p>
    <section class="workbook-game ${progress >= 86 ? "danger" : ""}">
      <div class="workbook-labels">
        <span>你抢回真题册</span>
        <span>李鸿翔老师抢走真题册</span>
      </div>
      <div class="workbook-track">
        <span class="safe-line" aria-hidden="true"></span>
        <div class="workbook-token" style="left:${progress}%;">
          <img src="./assets/items/物理真题册.jpg" alt="" onerror="this.remove(); this.parentElement.dataset.fallback='true';" />
          <span>真题册</span>
        </div>
      </div>
      <p class="workbook-progress">当前位置：${progress} / 100</p>
      <button class="primary-button grab-button" id="grabWorkbookButton" type="button">争抢！</button>
    </section>
  `;
  classroomPanel.querySelector("#grabWorkbookButton").addEventListener("click", grabPhysicsWorkbook);
};

const startPhysicsWorkbookTimer = () => {
  clearPhysicsWorkbookTimer();
  physicsWorkbookTimer = window.setInterval(() => {
    if (!gameState.physicsWorkbookMiniGameActive) {
      clearPhysicsWorkbookTimer();
      return;
    }
    setPhysicsWorkbookProgress(gameState.physicsWorkbookProgress + 5);
  }, 1000);
};

const clearPhysicsWorkbookTimer = () => {
  window.clearInterval(physicsWorkbookTimer);
  physicsWorkbookTimer = null;
};

const setPhysicsWorkbookProgress = (value) => {
  if (!gameState.physicsWorkbookMiniGameActive) return;
  gameState.physicsWorkbookProgress = clamp(value, 1, 100);
  saveGameState();

  if (gameState.physicsWorkbookProgress < 10) {
    finishPhysicsWorkbookMiniGame("success");
  } else if (gameState.physicsWorkbookProgress >= 100) {
    finishPhysicsWorkbookMiniGame("fail");
  } else {
    renderPhysicsWorkbookMiniGame();
  }
};

const grabPhysicsWorkbook = () => {
  const button = classroomPanel.querySelector("#grabWorkbookButton");
  button?.classList.add("clicked");
  window.setTimeout(() => button?.classList.remove("clicked"), 140);
  setPhysicsWorkbookProgress(gameState.physicsWorkbookProgress - 1);
};

const finishPhysicsWorkbookMiniGame = (result) => {
  clearPhysicsWorkbookTimer();
  gameState.physicsWorkbookMiniGameActive = false;
  gameState.physicsWorkbookResult = result;
  saveGameState();

  if (result === "success") {
    showPhysicsWorkbookSuccess();
  } else {
    showPhysicsWorkbookFail();
  }
};

const showPhysicsWorkbookSuccess = () => {
  showToast("你保住了物理真题册。", 2200);
  classroomPanel.innerHTML = `
    <p class="scene-label">第二节课 · 物理</p>
    <h2>争抢胜利✌️！</h2>
    <p>你猛地把真题册往自己这边一抽，真题册边角从李鸿翔老师手边滑了回来。</p>
    <p>李鸿翔老师盯着你看了一秒，像是没想到你反应这么快。他的表情明显僵了一下，最后只是气急败坏地转过身去，继续往讲台那边走。</p>
    <button class="primary-button" id="physicsContinueButton" type="button">继续听课</button>
  `;
  classroomPanel.querySelector("#physicsContinueButton").addEventListener("click", showPhysicsContinue);
};

const showPhysicsContinue = () => {
  gameState.currentScene = "physicsContinue";
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">第二节课 · 物理继续</p>
    <h2>第二节课 · 物理继续</h2>
    <p>你把真题册压在课本下面，假装认真听课。李鸿翔老师在讲台上继续讲题，粉笔声一下一下落在白板上。</p>
    <button class="primary-button" id="waitPhysicsDismissalButton" type="button">等待下课</button>
  `;
  classroomPanel.querySelector("#waitPhysicsDismissalButton").addEventListener("click", showPhysicsDismissed);
};

const showPhysicsWorkbookFail = () => {
  gameState.easterEggs = {
    ...gameState.easterEggs,
    physicsWorkbookFail: true,
  };
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">第二节课 · 物理</p>
    <h2>真题册被抢走了</h2>
    <p>李鸿翔老师最终还是把真题册拿了过去。</p>
    <p>他翻开第一页，又翻了第二页，空气在那一刻变得非常安静。几秒钟后，他抬起头，脸色肉眼可见地沉了下来。</p>
    <section class="teacher-dialogue">
      <strong>李鸿翔：</strong>
      <p>“没给我写真题册的都自觉站出去好吧，站到教室外面去，我不想多废话。”</p>
    </section>
    <p>椅子脚在地面上拖出一阵乱七八糟的声音。</p>
    <p>你站了起来。鲶鱼站了起来，ywz站了起来，zzy也站了起来，hkx、高原、yyt、gyy陆陆续续离开座位。空气里有一种非常荒唐的默契：原来没写的人比想象中还多。</p>
    <button class="primary-button" id="goStairsPunishmentButton" type="button">去楼梯口罚站</button>
  `;
  classroomPanel.querySelector("#goStairsPunishmentButton").addEventListener("click", showPhysicsStairs);
};

const showPhysicsStairs = async () => {
  gameState.currentScene = "physicsStairs";
  gameState.physicsStairChatStarted = false;
  gameState.physicsStairChatCompleted = false;
  saveGameState();
  updatePhonePayGuide();
  classroomPanel.innerHTML = `
    <p class="scene-label">楼梯口 · 罚站</p>
    <h2>楼梯口 · 罚站</h2>
    <p>你们站在楼梯口。</p>
    <p>教室门被关上以后，里面讲课的声音变得闷闷的，像隔着一层玻璃。楼梯间的风比教室里冷一点，墙面泛着白光，几个人站成一排，谁也没有真的想反思。</p>
    <p>罚站罚了一会儿，大家越想越气。</p>
    <p class="class-task-hint">打开手机，看看群里在说什么。</p>
    <button class="building-arrow hidden" id="goDormFromStairsButton" type="button">
      <span class="arrow-line"></span>
      <span class="arrow-label">前往宿舍</span>
    </button>
  `;
  classroomPanel.querySelector("#goDormFromStairsButton").addEventListener("click", showPhysicsDormEscape);
  await showScreen(classroomScreen, "stairs-background");
  updatePhonePayGuide();
};

const revealDormArrowIfReady = () => {
  const button = classroomPanel.querySelector("#goDormFromStairsButton");
  if (button) button.classList.toggle("hidden", !gameState.physicsStairChatCompleted || phoneDialog.open);
};

const showPhysicsDormEscape = async () => {
  gameState.currentScene = "physicsDormEscape";
  gameState.physicsDormChatStarted = false;
  gameState.physicsDormChatCompleted = false;
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">宿舍 · 逃回来了</p>
    <h2>宿舍 · 逃回来了</h2>
    <p>你们几个人最后还是回了宿舍。</p>
    <p>门关上的一瞬间，楼梯口的冷光和物理课的声音都被隔在了外面。宿舍里安静得有点不真实，像刚刚那一整节课只是某种离谱的集体幻觉。</p>
    <p class="class-task-hint">手机亮了一下。</p>
    <button class="primary-button hidden" id="goPeFromDormButton" type="button">前往体育课</button>
  `;
  classroomPanel.querySelector("#goPeFromDormButton").addEventListener("click", showPePlaceholder);
  await showScreen(classroomScreen, "dorm-escape-background");
  updatePhonePayGuide();
};

const revealPeButtonIfReady = () => {
  const button = classroomPanel.querySelector("#goPeFromDormButton");
  if (button) button.classList.toggle("hidden", !gameState.physicsDormChatCompleted || phoneDialog.open);
};

const showPhysicsDismissed = () => {
  gameState.currentScene = "physicsDismissed";
  saveGameState();
  damageHealth(1);
  classroomPanel.innerHTML = `
    <p class="scene-label">第二节课下课 · 教室</p>
    <h2>第二节课下课 · 教室</h2>
    <p>下课铃响了。第二节物理课结束了。</p>
    <button class="primary-button" id="goPeButton" type="button">前往体育课</button>
  `;
  classroomPanel.querySelector("#goPeButton").addEventListener("click", showPePlaceholder);
};

const showPePlaceholder = async () => {
  clearPhysicsWorkbookTimer();
  clearPhysicsChatTimer();
  gameState.currentScene = "peClassroom";
  gameState.currentClass = "PE";
  gameState.currentTeacher = "王在勃老师";
  gameState.peIntroCompleted = false;
  gameState.peLap = 0;
  gameState.peRunCompleted = false;
  saveGameState();
  recordMealPaid("dinner");
  updatePhonePayGuide(false);
  classroomPanel.innerHTML = `
    <p class="scene-label">体育课 · 教室集合</p>
    <h2>体育课 · 教室集合</h2>
    <p>第三节是体育课。</p>
    <p>教室里的桌椅还没有完全安静下来，走廊外已经有人换好运动鞋。窗外的光比早晨亮了很多，操场那边隐约传来哨声。</p>
    <p>你原本以为体育课会直接去操场，但今天的新老师先让大家留在教室里集合。</p>
    <button class="primary-button" id="waitPeTeacherButton" type="button">等待体育老师</button>
  `;
  classroomPanel.querySelector("#waitPeTeacherButton").addEventListener("click", showPeTeacherIntro);
  await showScreen(classroomScreen, "classroom-background");
};

const showPeTeacherIntro = async () => {
  gameState.currentScene = "peTeacherIntro";
  gameState.currentTeacher = "王在勃老师";
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">体育课 · 老师介绍</p>
    <h2>体育课 · 老师介绍</h2>
    <section class="teacher-dialogue">
      <strong>王在勃老师</strong>
      <div id="peIntroText"></div>
    </section>
  `;
  await showScreen(classroomScreen, "wang-background");
  const introText = classroomPanel.querySelector("#peIntroText");
  await typeIntoElement(
    introText,
    [
      "大家好，我叫王在勃，以后由我来带大家的体育课。",
      "我毕业于上海体育大学。体育对我来说，从来不只是跑得快、跳得高，或者在一节课里完成多少训练。",
      "我一直很喜欢一句话：阅山，阅书，阅己。",
      "阅山，是去看更大的世界；阅书，是让自己拥有更宽的眼界；阅己，是在一次次训练和经历里，慢慢看清自己。",
      "身体和思想其实很像。都需要练习，也都需要时间。希望以后大家来到体育课，不只是为了完成任务，也可以从教室里暂时走出来，吹吹风，看看天空。",
      "对了，我的抖音ID叫‘所念皆所愿’。不过上课的时候，还是先把手机收好。",
    ],
    30,
  );
  gameState.peIntroCompleted = true;
  saveGameState();
  introText.insertAdjacentHTML(
    "beforeend",
    '<button class="primary-button" id="goPathButton" type="button">前往操场</button>',
  );
  introText.querySelector("#goPathButton").addEventListener("click", showPathToPlayground);
};

const showPathToPlayground = async () => {
  gameState.currentScene = "pathToPlayground";
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">前往操场</p>
    <h2>前往操场</h2>
    <p>介绍结束后，大家陆陆续续离开教室。</p>
    <p>教学楼外的光一下子铺开，空气里有树叶、塑胶跑道和被太阳晒热的地面气味。队伍沿着校园小路往操场方向移动，前面的人走得很快，后面还有人在慢吞吞地整理衣服。</p>
    <button class="path-arrow" id="pathToPlaygroundArrow" type="button">
      <span class="arrow-line"></span>
      <span class="arrow-label">沿小路前往操场</span>
    </button>
  `;
  classroomPanel.querySelector("#pathToPlaygroundArrow").addEventListener("click", showPlaygroundIntro);
  await showScreen(classroomScreen, "path-background");
};

const showPlaygroundIntro = async () => {
  gameState.currentScene = "playgroundIntro";
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">操场 · 体育课</p>
    <h2>操场 · 体育课</h2>
    <p>穿过小路以后，操场完整地出现在眼前。</p>
    <p>塑胶跑道被阳光照得有些发亮，草地边缘还留着一点早晨的湿气。风从跑道另一端吹过来，把教室里的闷意彻底吹散。</p>
    <p>王在勃老师站在跑道边，抬手示意大家集合。</p>
    <section class="teacher-dialogue">
      <strong>王在勃：</strong>
      <p>“先热身，然后绕操场跑两圈。不要一开始冲太快，按照自己的节奏跑。”</p>
    </section>
    <button class="primary-button" id="startRunButton" type="button">开始跑步</button>
  `;
  classroomPanel.querySelector("#startRunButton").addEventListener("click", showPeLapOne);
  await showScreen(classroomScreen, "playground-background");
};

const showPeLapOne = () => {
  gameState.currentScene = "peRunning";
  gameState.peLap = 1;
  gameState.peRunCompleted = false;
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">操场 · 跑步</p>
    <h2>第一圈</h2>
    <p>你跟着队伍踏上跑道。最开始的脚步还有些杂乱，鞋底落在塑胶地面上的声音一阵接着一阵。</p>
    <p>跑过教学楼一侧时，风从脸旁擦过去。有人在前面加速，也有人已经开始后悔刚才为什么没有站到队伍最后。</p>
    <div class="lap-progress">第1圈 / 共2圈</div>
    <button class="primary-button" id="continueRunButton" type="button">继续跑</button>
  `;
  classroomPanel.querySelector("#continueRunButton").addEventListener("click", showPeLapTwo);
};

const showPeLapTwo = () => {
  gameState.currentScene = "peRunning";
  gameState.peLap = 2;
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">操场 · 跑步</p>
    <h2>第二圈</h2>
    <p>第二圈开始以后，队伍已经被拉开。</p>
    <p>呼吸比刚才更重了一点，腿也渐渐有了存在感。操场边的树影缓慢向后退，终点看起来很近，却总要再多跑一段才会真正到达。</p>
    <p>你调整了一下呼吸，跟着跑道的弧线继续向前。</p>
    <div class="lap-progress">第2圈 / 共2圈</div>
    <button class="primary-button" id="finishRunButton" type="button">完成训练</button>
  `;
  classroomPanel.querySelector("#finishRunButton").addEventListener("click", showPeDismissal);
};

const showPeDismissal = () => {
  gameState.currentScene = "peDismissal";
  gameState.peRunCompleted = true;
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">操场 · 解散</p>
    <h2>操场 · 解散</h2>
    <p>两圈结束以后，大家陆续停在跑道边。</p>
    <p>有人弯着腰喘气，有人拿手扇风，还有人已经若无其事地开始聊天。阳光落在跑道和草地之间，整片操场显得比刚来时更亮。</p>
    <section class="teacher-dialogue">
      <strong>王在勃：</strong>
      <p>“今天先到这里，大家自由活动，注意安全。”</p>
    </section>
    <p>王在勃老师宣布解散。</p>
    <button class="primary-button" id="peFreeActivityButton" type="button">继续</button>
  `;
  classroomPanel.querySelector("#peFreeActivityButton").addEventListener("click", showPeFreeActivity);
};

const renderPeBranchCard = ({ id, title, hint, completed }) => `
  <button class="pe-branch-card" type="button" data-pe-branch="${id}">
    <span class="branch-arrow-line"></span>
    <strong>${title}${completed ? " ✓" : ""}</strong>
    <small>${hint}</small>
  </button>
`;

const showPeFreeActivity = async () => {
  gameState.currentScene = "peFreeActivity";
  gameState.currentClass = "PE";
  gameState.currentTeacher = "王在勃老师";
  gameState.cameraTarget = null;
  saveGameState();
  updatePhonePayGuide(false);
  classroomPanel.innerHTML = `
    <p class="scene-label">体育课 · 自由活动</p>
    <h2>体育课 · 自由活动</h2>
    <p>王在勃老师宣布解散以后，原本整齐的队伍很快散开。</p>
    <p>有人留在操场边聊天，有人往教学楼方向走，还有人沿着校园里平时不太注意的小路离开。</p>
    <p>接下来的时间暂时属于你。</p>
    <div class="pe-branch-grid">
      ${renderPeBranchCard({
        id: "piano",
        title: "前往琴房",
        hint: "教学楼旁边有一间安静的琴房。",
        completed: gameState.peBranches?.pianoRoomCompleted,
      })}
      ${renderPeBranchCard({
        id: "forest",
        title: "前往小树林",
        hint: "操场边的小路通向树影深处。",
        completed: gameState.peBranches?.forestCompleted,
      })}
      ${renderPeBranchCard({
        id: "mystery",
        title: "？？？",
        hint: "一条还没有被写进今天的路线。",
        completed: gameState.peBranches?.mysteryCompleted,
      })}
    </div>
  `;
  await showScreen(classroomScreen, "playground-background");
};

const handlePeBranchChoice = (branch) => {
  if (branch === "piano") {
    showPianoRoomIntro();
    return;
  }

  if (branch === "forest") {
    showForestIntro();
    return;
  }

  showPeMysteryIntro();
};

const showPianoRoomIntro = async () => {
  gameState.currentScene = "pianoRoom";
  gameState.cameraTarget = null;
  gameState.peBranches = {
    ...normalizePeBranches(gameState.peBranches),
    selectedBranch: "piano",
  };
  gameState.applauseValue = 1;
  gameState.secondPianoSongUnlocked = false;
  saveGameState();
  updatePhonePayGuide(false);
  classroomPanel.innerHTML = `
    <p class="scene-label">琴房 · 体育课自由活动</p>
    <h2>琴房 · 体育课自由活动</h2>
    <p>你离开操场，顺着教学楼旁边的路走进琴房。</p>
    <p>门推开的时候，里面比外面安静很多。窗帘挡住了一部分阳光，黑色钢琴安静地放在房间中央，琴键泛着一点冷白色的光。</p>
    <p>舔哥已经坐在钢琴前，像是早就准备好了。</p>
    <section class="character-dialogue compact">
      <strong>舔哥：</strong>
      <p>“来都来了，听一首？”</p>
    </section>
    <button class="primary-button" id="startPianoSongButton" type="button">开始听琴</button>
  `;
  classroomPanel.querySelector("#startPianoSongButton").addEventListener("click", showFirstPianoSong);
  await showScreen(classroomScreen, "piano-background");
};

const showFirstPianoSong = () => {
  gameState.currentScene = "pianoFirstSong";
  gameState.applauseValue = 1;
  gameState.secondPianoSongUnlocked = false;
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">琴房 · 第一首曲子</p>
    <h2>第一首曲子</h2>
    <p>舔哥把手放到琴键上。</p>
    <p>最开始的几个音还有些试探，随后旋律慢慢连了起来。琴房里的声音被墙面轻轻送回来，外面操场的喧闹像被关在了另一扇门后。</p>
    <p>一曲结束，他抬起手，回头看了你一眼，似乎在等你的反应。</p>
    <section class="applause-game">
      <h3>给舔哥鼓掌</h3>
      <div class="applause-meter" aria-label="鼓掌值">
        <span id="applauseFill"></span>
      </div>
      <p id="applauseValue">鼓掌值：1 / 100</p>
      <button class="primary-button" id="applauseButton" type="button">👏 鼓掌</button>
      <div class="applause-feedback" id="applauseFeedback"></div>
    </section>
  `;
  classroomPanel.querySelector("#applauseButton").addEventListener("click", increaseApplause);
  updateApplauseUi();
};

const updateApplauseUi = () => {
  const value = clamp(Number(gameState.applauseValue) || 1, 1, 100);
  gameState.applauseValue = value;
  const fill = classroomPanel.querySelector("#applauseFill");
  const label = classroomPanel.querySelector("#applauseValue");
  if (fill) fill.style.width = `${value}%`;
  if (label) label.textContent = `鼓掌值：${value} / 100`;
};

const increaseApplause = () => {
  if (gameState.secondPianoSongUnlocked) return;

  gameState.applauseValue = clamp(gameState.applauseValue + APPLAUSE_PER_CLICK, 1, 100);
  saveGameState();
  updateApplauseUi();
  const feedback = classroomPanel.querySelector("#applauseFeedback");
  if (feedback) {
    const particle = document.createElement("span");
    particle.textContent = "♪";
    particle.className = "applause-particle";
    feedback.append(particle);
    window.setTimeout(() => particle.remove(), 650);
  }

  if (gameState.applauseValue >= 60) {
    gameState.secondPianoSongUnlocked = true;
    saveGameState();
    const applauseButton = classroomPanel.querySelector("#applauseButton");
    if (applauseButton) applauseButton.disabled = true;
    window.setTimeout(showSecondPianoSong, 900);
  }
};

const showSecondPianoSong = () => {
  if (gameState.currentScene !== "pianoFirstSong" && gameState.currentScene !== "pianoSecondSong") return;

  gameState.currentScene = "pianoSecondSong";
  gameState.secondPianoSongUnlocked = true;
  gameState.cameraTarget = {
    id: "piano-room-photo",
    title: "琴房",
    image: "assets/items/琴房.jpg",
    scene: "pianoRoom",
  };
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">琴房 · 第二首曲子</p>
    <h2>第二首曲子</h2>
    <p>舔哥似乎对你的反应很满意。</p>
    <section class="character-dialogue compact">
      <strong>舔哥：</strong>
      <p>“那我再弹一首。”</p>
    </section>
    <p>第二首比刚才更长。</p>
    <p>舔哥弹得很认真，手指在琴键上来回移动，偶尔还会微微抬头，像是在确认你有没有认真听。</p>
    <p>前半段你还觉得挺新鲜，后面视线却逐渐飘到了窗户、墙角和物品栏里的手机上。</p>
    <p>你忽然觉得，光坐着听好像有点无聊。</p>
    <p class="class-task-hint">打开手机，试试相机。</p>
    ${
      hasPhoto("piano-room-photo")
        ? '<button class="primary-button" id="finishPianoReplayButton" type="button">继续</button>'
        : ""
    }
  `;
  classroomPanel.querySelector("#finishPianoReplayButton")?.addEventListener("click", showPianoBranchEnding);
  updatePhonePayGuide();
};

const showPianoBranchEnding = () => {
  if (gameState.currentScene === "pianoRoomDone") return;

  gameState.currentScene = "pianoRoomDone";
  gameState.cameraTarget = null;
  gameState.peBranches = {
    ...normalizePeBranches(gameState.peBranches),
    pianoRoomCompleted: true,
  };
  saveGameState();
  updatePhonePayGuide(false);
  classroomPanel.innerHTML = `
    <p class="scene-label">琴房 · 体育课自由活动</p>
    <h2>琴房</h2>
    <p>第二首曲子也在这时结束。</p>
    <p>舔哥抬起手，琴房重新安静下来。你看了一眼刚拍下的照片，觉得这段原本有点无聊的时间，至少留下了一张可以证明它发生过的画面。</p>
    <div class="branch-ending-actions">
      <button class="secondary-button" id="returnPeFromPianoButton" type="button">返回自由活动选择</button>
      <button class="primary-button" id="lunchFromPianoButton" type="button">前往食堂吃午饭</button>
    </div>
  `;
  classroomPanel.querySelector("#returnPeFromPianoButton").addEventListener("click", showPeFreeActivity);
  classroomPanel.querySelector("#lunchFromPianoButton").addEventListener("click", showLunchCafeteria);
};

const showForestIntro = async () => {
  gameState.currentScene = "forestPath";
  gameState.cameraTarget = null;
  gameState.peBranches = {
    ...normalizePeBranches(gameState.peBranches),
    selectedBranch: "forest",
  };
  saveGameState();
  updatePhonePayGuide(false);
  classroomPanel.innerHTML = `
    <p class="scene-label">小树林 · 校园角落</p>
    <h2>小树林 · 校园角落</h2>
    <p>你离开操场，沿着一条平时很少注意的小路往里走。</p>
    <p>树影很快把操场上的阳光切碎，脚下的地面也从塑胶跑道变成了带着泥土和落叶的路。</p>
    <p>你没想到学校里居然还藏着这么一方天地。</p>
    <button class="path-arrow forest-arrow" id="forestDeepArrow" type="button">
      <span class="arrow-line"></span>
      <span class="arrow-label">继续向里探索</span>
    </button>
  `;
  classroomPanel.querySelector("#forestDeepArrow").addEventListener("click", showBambooForest);
  await showScreen(classroomScreen, "forest-background");
};

const showBambooForest = async () => {
  gameState.currentScene = "bambooForest";
  gameState.cameraTarget = {
    id: "bamboo-river-photo",
    title: "竹林与河岸",
    image: "assets/items/竹林.jpg",
    scene: "bambooForest",
  };
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">竹林与河岸</p>
    <h2>竹林与河岸</h2>
    <p>你沿着树影继续往里走。</p>
    <p>周围越来越安静，偶尔能听见树叶摩擦和远处水流的声音。再往前，原本以为只是一小片树林的地方，忽然变得开阔起来。</p>
    <p>树林深处居然有一户人家。</p>
    <p>旁边是一片养鸡场，几只鸡在围栏后慢吞吞地走动。再往前是一片竹林，竹叶被风吹得一层一层翻动。</p>
    <p>竹林依傍着一条很宽的大河。水面把天空和远处的光一起拖得很长，学校的围墙、操场和教室像突然离这里很远。</p>
    <p>你站在那里，一时间有点难以相信，这片地方居然也属于校园的一部分。</p>
    <p class="class-task-hint">这个地方值得拍下来。</p>
    ${
      hasPhoto("bamboo-river-photo")
        ? '<button class="primary-button" id="finishForestReplayButton" type="button">继续</button>'
        : ""
    }
  `;
  classroomPanel.querySelector("#finishForestReplayButton")?.addEventListener("click", showForestBranchEnding);
  await showScreen(classroomScreen, "bamboo-background");
  updatePhonePayGuide();
};

const showForestBranchEnding = () => {
  if (gameState.currentScene === "forestDone") return;

  gameState.currentScene = "forestDone";
  gameState.cameraTarget = null;
  gameState.peBranches = {
    ...normalizePeBranches(gameState.peBranches),
    forestCompleted: true,
  };
  saveGameState();
  updatePhonePayGuide(false);
  classroomPanel.innerHTML = `
    <p class="scene-label">竹林与河岸</p>
    <h2>小树林</h2>
    <p>你把手机收起来，又看了一眼河面。</p>
    <p>风从竹林里穿过去，带起一阵很轻的沙沙声。远处的体育课还没有完全结束，但这里像藏在学校时间之外。</p>
    <div class="branch-ending-actions">
      <button class="secondary-button" id="returnPeFromForestButton" type="button">返回自由活动选择</button>
      <button class="primary-button" id="lunchFromForestButton" type="button">前往食堂吃午饭</button>
    </div>
  `;
  classroomPanel.querySelector("#returnPeFromForestButton").addEventListener("click", showPeFreeActivity);
  classroomPanel.querySelector("#lunchFromForestButton").addEventListener("click", showLunchCafeteria);
};

const continuePeBranchAfterPhoneClose = () => {
  if (gameState.currentScene === "pianoSecondSong" && hasPhoto("piano-room-photo")) {
    showPianoBranchEnding();
  }

  if (gameState.currentScene === "bambooForest" && hasPhoto("bamboo-river-photo")) {
    showForestBranchEnding();
  }

  if (gameState.currentScene === "tiangeDecorPhoto" && hasPhoto("tiange-decorated-photo")) {
    showTiangeNapEnd();
  }

  continueCampusWalkAfterPhoneClose();
  continueBasketballAfterPhoneClose();
  continueSecretAfterPhoneClose();
};

const markCampusPhotoCaptured = (photoId) => {
  const step = campusPhotoSteps.find((item) => item.target.id === photoId);
  if (!step) return;
  gameState.campusWalkPhotos = {
    curtain: Boolean(gameState.campusWalkPhotos?.curtain),
    board: Boolean(gameState.campusWalkPhotos?.board),
    classSign: Boolean(gameState.campusWalkPhotos?.classSign),
    gymnasium: Boolean(gameState.campusWalkPhotos?.gymnasium),
    eveningRoad: Boolean(gameState.campusWalkPhotos?.eveningRoad),
    [step.key]: true,
  };
  saveGameState();
};

const continueCampusWalkAfterPhoneClose = () => {
  const step = campusPhotoSteps.find((item) => item.scene === gameState.currentScene);
  if (step && hasPhoto(step.target.id)) {
    showCampusPhotoStep(step.key, { skipIntro: true });
  }
};

const markBasketballPhotoCaptured = (photoId) => {
  const step = basketballPhotoSteps.find((item) => item.target.id === photoId);
  if (!step) return;
  gameState.basketballPhotos = {
    ...normalizeBasketballPhotos(gameState.basketballPhotos),
    [step.key]: true,
  };
  saveGameState();
};

const continueBasketballAfterPhoneClose = () => {
  if (gameState.currentScene === "afterDinnerClassroom" && gameState.basketballPreChatCompleted) {
    showBasketballRoute();
    return;
  }

  if (gameState.currentScene === "basketballSharePrompt" && gameState.basketballPhotoChatCompleted) {
    showBasketballVictoryScene();
    return;
  }

  const step = basketballPhotoSteps.find((item) => item.scene === gameState.currentScene);
  if (step && hasPhoto(step.target.id)) {
    showBasketballPhotoStep(step.key, { skipIntro: true });
  }
};

const continueSecretAfterPhoneClose = () => {
  if (gameState.currentScene === "secretCrypticPrompt" && gameState.secretGroupChatCompleted) {
    showDormReturnPreparation();
  }
};

const showPeMysteryIntro = async () => {
  gameState.currentScene = "peMysteryIntro";
  gameState.easterEggs = {
    ...gameState.easterEggs,
    peEarlyLunch: true,
  };
  gameState.peBranches = {
    ...normalizePeBranches(gameState.peBranches),
    selectedBranch: "mystery",
  };
  saveGameState();
  updatePhonePayGuide(false);
  classroomPanel.innerHTML = `
    <p class="scene-label">体育课 · 自由活动</p>
    <h2>？？？</h2>
    <p>你看了一眼操场，又看了一眼时间。</p>
    <p>既然已经解散了，或许可以提前往食堂方向走。就算现在还没正式到午饭时间，先去附近晃一圈也没什么。</p>
    <button class="primary-button" id="goOutdoorSecretButton" type="button">提前前往食堂方向</button>
  `;
  classroomPanel.querySelector("#goOutdoorSecretButton").addEventListener("click", showOutdoorSecretScene);
  await showScreen(classroomScreen, "playground-background");
};

const showOutdoorSecretScene = async () => {
  if (gameState.peBranches?.mysteryDiscovered) {
    await showOutdoorDiscoveryStory();
    return;
  }

  gameState.currentScene = "outdoorSecret";
  gameState.cameraTarget = {
    id: "outdoor-secret-camera",
    title: "室外场景",
    image: "assets/items/室外.jpg",
    scene: "outdoorSecret",
  };
  gameState.cameraHotspot = null;
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">体育课自由活动 · 室外</p>
    <h2>体育课自由活动 · 室外</h2>
    <p>你离开操场，沿着通往食堂方向的路慢慢往前走。</p>
    <p>午后的阳光还没有完全落下来，树影被风吹得一晃一晃。道路两边很安静，偶尔有人从远处经过，整个校园像暂时进入了两节课之间的空白。</p>
    <p>你原本只是想打开手机相机，拍一张校园里的风景。</p>
    <p class="class-task-hint">打开手机相机。</p>
  `;
  await showScreen(classroomScreen, "outdoor-background");
  updatePhonePayGuide();
};

const showOutdoorDiscoveryStory = async () => {
  gameState.currentScene = "outdoorDiscovery";
  saveGameState();
  updatePhonePayGuide(false);
  classroomPanel.innerHTML = `
    <p class="scene-label">体育课自由活动 · 室外</p>
    <h2>意外拍到的画面</h2>
    <div id="outdoorDiscoveryText"></div>
  `;
  await showScreen(classroomScreen, "outdoor-background");
  const storyBox = classroomPanel.querySelector("#outdoorDiscoveryText");
  await typeIntoElement(
    storyBox,
    [
      "你原本只是在寻找一个适合拍风景的角度。",
      "镜头经过第三个点位时，画面里忽然多出了两个熟悉的人影。",
      "你停住手指，把相机稍微往回拖了一点。",
      "这一次你看清了。",
      "走在前面的是鲶鱼，旁边的人是 wwz。",
      "两个人靠得很近，手还牵在一起。周围明明没有什么特别的声音，你却觉得眼前这幅画面像突然被放大了很多倍。",
      "你又看了一眼取景框，再看了一眼远处。",
      "确实是他们。",
      "你意外拍下了这张照片。",
    ],
    24,
  );
  storyBox.insertAdjacentHTML(
    "beforeend",
    `
      <div class="story-choice-grid">
        <button class="pe-branch-card" type="button" data-mystery-choice="leaveQuietly">
          <span class="branch-arrow-line"></span>
          <strong>A. 震惊地悄悄离开</strong>
          <small>先把这件事放在心里。</small>
        </button>
        <button class="pe-branch-card" type="button" data-mystery-choice="shareToGroup">
          <span class="branch-arrow-line"></span>
          <strong>B. 把照片发到班级群里</strong>
          <small>让 ibdt-b 学生群先炸一下。</small>
        </button>
      </div>
    `,
  );
};

const handlePeMysteryChoice = (choice) => {
  if (choice === "leaveQuietly") {
    showOutdoorLeaveQuietly();
    return;
  }

  if (choice === "shareToGroup") {
    showOutdoorSharePrompt();
  }
};

const showOutdoorLeaveQuietly = () => {
  gameState.currentScene = "outdoorLeaveQuietly";
  gameState.peBranches = {
    ...normalizePeBranches(gameState.peBranches),
    mysteryChoice: "leaveQuietly",
    mysteryCompleted: true,
  };
  gameState.cameraTarget = null;
  saveGameState();
  updatePhonePayGuide(false);
  classroomPanel.innerHTML = `
    <p class="scene-label">体育课自由活动 · 室外</p>
    <h2>悄悄离开</h2>
    <p>你把手机收了起来，站在原地愣了几秒。</p>
    <p>远处的两个人似乎没有发现你。你没有继续看，也没有走近，只是悄悄转身，沿着另一条路离开。</p>
    <p>刚才那一幕还停在相册里，但你决定暂时什么也不说。</p>
    <button class="primary-button" id="lunchFromQuietButton" type="button">前往食堂吃午饭</button>
  `;
  classroomPanel.querySelector("#lunchFromQuietButton").addEventListener("click", showLunchCafeteria);
};

const showOutdoorSharePrompt = () => {
  gameState.currentScene = "outdoorSharePrompt";
  gameState.peBranches = {
    ...normalizePeBranches(gameState.peBranches),
    mysteryChoice: "shareToGroup",
  };
  gameState.cameraTarget = null;
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">体育课自由活动 · 室外</p>
    <h2>班级群</h2>
    <p>你低头看着相册里那张照片，心跳还没完全落回去。</p>
    <p class="class-task-hint">打开手机，把照片发到 ibdt-b学生群。</p>
  `;
  updatePhonePayGuide();
};

const showLunchCafeteria = async () => {
  gameState.currentScene = "lunchCafeteria";
  gameState.currentClass = "";
  gameState.currentTeacher = "";
  gameState.cameraTarget = null;
  gameState.lunchOrder = createEmptyLunchOrder();
  gameState.pendingPayment = false;
  gameState.pendingOrderType = null;
  saveGameState();
  updatePhonePayGuide(false);
  classroomPanel.innerHTML = `
    <p class="scene-label">中午食堂 · 午餐时间</p>
    <h2>中午食堂 · 午餐时间</h2>
    <p>体育课结束后，校园像突然被午饭时间推着往前走了一截。</p>
    <p>食堂里已经排起了队，餐盘碰撞的声音、窗口叫号声和说话声混在一起。空气里飘着牛肉、蔬菜和热汤的味道，早晨吃过的那点东西早就被几节课消耗得差不多了。</p>
    <p>你拿起餐盘，开始考虑今天中午吃什么。</p>
    <button class="primary-button" id="startLunchOrderButton" type="button">开始选餐</button>
  `;
  classroomPanel.querySelector("#startLunchOrderButton").addEventListener("click", showLunchOrderScene);
  await showScreen(classroomScreen, "lunch-cafeteria-background");
};

const updateLunchQuantity = (itemId, delta) => {
  const order = getLunchOrder();
  order.items[itemId] = Math.max(0, (Number(order.items[itemId]) || 0) + delta);
  order.total = calculateLunchTotal(order.items);
  order.paid = false;
  order.hungerRestored = false;
  gameState.pendingPayment = false;
  gameState.pendingOrderType = null;
  saveGameState();
  renderHotbar();
  updatePhonePayGuide(false);
  renderLunchOrderScene();
};

const renderLunchOrderScene = () => {
  const order = getLunchOrder();
  classroomPanel.innerHTML = `
    <p class="scene-label">中午食堂 · 午餐时间</p>
    <h2>午餐窗口</h2>
    <p class="cafeteria-instruction">选好午餐后，打开手机用支付宝付款。</p>
    <div class="breakfast-menu lunch-menu">
      ${lunchMenu
        .map(
          (item) => `
            <article class="breakfast-card lunch-card">
              <div>
                <h3>${item.name}</h3>
                <p>${formatMoney(item.price)} / ${item.unit}</p>
              </div>
              <div class="quantity-control">
                <button type="button" data-lunch-id="${item.id}" data-delta="-1">−</button>
                <span>${order.items[item.id]}</span>
                <button type="button" data-lunch-id="${item.id}" data-delta="1">+</button>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
    <aside class="order-summary">
      <h3>购物清单</h3>
      ${renderLunchOrderLines(true)}
      <div class="order-total">合计：${formatMoney(order.total)}</div>
    </aside>
    <button class="primary-button confirm-order-button" id="confirmLunchButton" type="button">
      确认午餐，准备支付
    </button>
    <p class="payment-hint ${gameState.pendingPayment ? "" : "hidden"}">午餐已经选好了。打开手机，用支付宝付款。</p>
  `;
};

const showLunchOrderScene = () => {
  gameState.currentScene = "lunchOrder";
  saveGameState();
  renderLunchOrderScene();
};

const confirmLunchOrder = () => {
  const order = getLunchOrder();
  if (order.total <= 0) {
    showToast("你还没有选择午餐。", 1800);
    return;
  }

  gameState.currentScene = "lunchPayment";
  gameState.pendingPayment = true;
  gameState.pendingOrderType = "lunch";
  order.paid = false;
  order.hungerRestored = false;
  saveGameState();
  renderLunchOrderScene();
  renderHotbar();
  updatePhonePayGuide(true);
};

const payLunchOrder = () => {
  const order = getLunchOrder();
  if (order.total <= 0 || order.paid) {
    renderAlipay(order.paid ? `支付成功：${formatMoney(order.total)}` : "");
    return;
  }

  order.paid = true;
  gameState.lunchOrder = order;
  gameState.ateLunch = true;
  gameState.pendingPayment = false;
  gameState.pendingOrderType = null;

  if (!order.hungerRestored) {
    restoreHunger(6);
    order.hungerRestored = true;
  }

  saveGameState();
  updatePhonePayGuide(false);
  renderHotbar();
  showToast("午餐支付成功。", 1800);
  window.setTimeout(() => showToast("吃完午餐，饥饿值恢复了。", 2200), 900);
  renderAlipay(`支付成功：${formatMoney(order.total)}`);
};

const closePhoneToLunchMeal = () => {
  phoneDialog.close();
  setModalOpen(false);
  showLunchMealScene();
};

const payDinnerOrder = () => {
  const order = getDinnerOrder();
  if (order.total <= 0 || order.paid) {
    renderAlipay(order.paid ? `支付成功：${formatMoney(order.total)}` : "");
    return;
  }

  order.paid = true;
  gameState.dinnerOrder = order;
  gameState.ateDinner = true;
  gameState.pendingPayment = false;
  gameState.pendingOrderType = null;

  if (!order.hungerRestored) {
    restoreHunger(6);
    order.hungerRestored = true;
  }

  saveGameState();
  updatePhonePayGuide(false);
  renderHotbar();
  showToast("晚餐支付成功。", 1800);
  window.setTimeout(() => showToast("吃完晚餐，饥饿值恢复了。", 2200), 900);
  renderAlipay(`支付成功：${formatMoney(order.total)}`);
};

const closePhoneToDinnerMeal = () => {
  phoneDialog.close();
  setModalOpen(false);
  showDinnerMealScene();
};

const showDinnerMealScene = async () => {
  const order = getDinnerOrder();
  if (!order.paid) {
    showToast("你还没有付款。", 1800);
    showDinnerOrderScene();
    return;
  }

  gameState.currentScene = "dinnerMeal";
  gameState.pendingPayment = false;
  gameState.pendingOrderType = null;
  saveGameState();
  updatePhonePayGuide(false);
  setupCampusMiniPanel("食堂 · 晚餐时间");
  await showScreen(classroomScreen, "dinner-cafeteria-background");
  await runCampusStorySequence(
    [
      "你们找了位置坐下，餐盘很快摆满了桌面。",
      "逛了一下午以后，大家吃饭的速度都比平时快了一点。",
      "罗罗还在翻看刚才拍下的照片，高原和舔哥则继续聊着数学课上的数字华容道。",
      "食堂外面的天色一点点暗下来。",
    ],
    showDinnerFinishedScene,
    "吃完晚饭",
  );
};

const showDinnerFinishedScene = async () => {
  gameState.currentScene = "dinnerFinished";
  gameState.dinnerCompleted = true;
  saveGameState();
  setupCampusMiniPanel("晚餐结束");
  await typeCampusText("晚饭结束以后，下一段校园时间即将开始。");
  const button = classroomPanel.querySelector("#campusContinueButton");
  if (button) {
    button.textContent = "前往教室";
    button.onclick = showAfterDinnerClassroom;
  }
};

const showAfterDinnerClassroom = async () => {
  gameState.currentScene = "afterDinnerClassroom";
  gameState.cameraTarget = null;
  if (!gameState.basketballPreChatCompleted) {
    gameState.basketballPreChatStarted = true;
  }
  saveGameState();
  updatePhonePayGuide(false);
  setupCampusMiniPanel("教室 · 傍晚");
  await showScreen(classroomScreen, "evening-classroom-background");
  await runCampusStorySequence(
    [
      "吃完晚饭以后，你回到了教室。",
      "距离晚自习还有一段时间，教室里的人并不算多。",
      "窗外的天已经慢慢暗下来，物品栏里的手机忽然亮了一下。",
      "ibdt-b学生群里似乎有了新消息。",
    ],
    () => {
      classroomPanel.querySelector("#campusContinueButton")?.classList.add("hidden");
      updatePhonePayGuide();
    },
    "打开手机",
  );
};

const removeBasketballRouteArrow = () => {
  document.querySelector("#basketballRouteArrow")?.remove();
};

const showBasketballRoute = async () => {
  removeBasketballRouteArrow();
  clearBasketballChatTimer();
  gameState.currentScene = "basketballRoute";
  gameState.cameraTarget = null;
  saveGameState();
  updatePhonePayGuide(false);
  setupCampusMiniPanel("前往篮球场");
  await showScreen(classroomScreen, "basketball-court-1-background");
  await runCampusStorySequence(
    [
      "你离开教室，沿着傍晚的路往篮球场走。",
      "还没有走到场边，远远就能听见篮球拍在地上的声音。",
      "wwz和罗罗正一起扛着一面应援大旗往前走。",
      "旗子被晚风吹得展开了一角，罗罗回头冲你招了招手。",
      "罗罗：“快点，比赛要开始了！”",
    ],
    () => {
      classroomPanel.querySelector("#campusContinueButton")?.classList.add("hidden");
      const arrow = document.createElement("button");
      arrow.className = "path-arrow basketball-route-arrow";
      arrow.type = "button";
      arrow.id = "basketballRouteArrow";
      arrow.innerHTML = `<span class="arrow-line"></span><span class="arrow-label">跟着她们前往篮球场</span>`;
      arrow.addEventListener("click", showBasketballCourtIntro);
      classroomScreen.append(arrow);
    },
    "继续",
  );
};

const showBasketballCourtIntro = async () => {
  removeBasketballRouteArrow();
  gameState.currentScene = "basketballCourtIntro";
  gameState.cameraTarget = null;
  saveGameState();
  setupCampusMiniPanel("篮球场 · 班级赛");
  await showScreen(classroomScreen, "basketball-court-2-background");
  await runCampusStorySequence(
    [
      "篮球场边已经围了不少人。",
      "球鞋摩擦塑胶地面的声音、喊人的声音和笑声混在一起，晚上的校园突然变得很热闹。",
      "wwz和罗罗把应援旗撑开，旗面在场边被风吹得轻轻晃动。",
      "比赛开始以后，场上的节奏一下子快了起来。",
      "你站在人群里，看着球从一侧传到另一侧。",
      "有人抢到篮板时，周围立刻爆出一阵喊声。",
      "你也忍不住举起手，跟着大家一起喊。",
      "你：“加油！加油！”",
      "声音很快混进一整片应援声里。",
    ],
    () => showBasketballPhotoStep("photo3"),
    "继续观看比赛",
  );
};

const showBasketballPhotoStep = async (key, options = {}) => {
  const step = basketballPhotoSteps.find((item) => item.key === key);
  if (!step) return;
  gameState.currentScene = step.scene;
  gameState.cameraTarget = step.target;
  gameState.basketballPhotos = normalizeBasketballPhotos(gameState.basketballPhotos);
  saveGameState();
  setupCampusMiniPanel(step.label);
  await showScreen(classroomScreen, step.background);
  if (!options.skipIntro) {
    await runCampusStorySequence(
      step.lines,
      () => {
        classroomPanel.querySelector("#campusContinueButton")?.classList.add("hidden");
        updatePhonePayGuide();
      },
      "打开相机",
    );
  }
  if (hasPhoto(step.target.id)) {
    await showBasketballAfterPhoto(step);
  } else if (options.skipIntro) {
    classroomPanel.querySelector("#campusContinueButton")?.classList.add("hidden");
    await typeCampusText(step.lines.at(-1) ?? "打开手机相机。");
    updatePhonePayGuide();
  }
};

const showBasketballAfterPhoto = async (step) => {
  gameState.cameraTarget = null;
  saveGameState();
  updatePhonePayGuide(false);
  if (step.key === "photo5") {
    await typeCampusText("把刚才的照片发到班级群里。");
  } else {
    await typeCampusText("照片已经存进相册。");
  }
  const button = classroomPanel.querySelector("#campusContinueButton");
  if (!button) return;
  button.classList.remove("hidden");
  button.disabled = false;
  button.textContent = step.nextText;
  if (step.key === "photo3") button.onclick = () => showBasketballPhotoStep("photo4");
  else if (step.key === "photo4") button.onclick = () => showBasketballPhotoStep("photo5");
  else button.onclick = showBasketballSharePrompt;
};

const showBasketballSharePrompt = async () => {
  gameState.currentScene = "basketballSharePrompt";
  gameState.cameraTarget = null;
  saveGameState();
  setupCampusMiniPanel("篮球赛 · 班级群");
  await showScreen(classroomScreen, "basketball-court-5-background");
  await typeCampusText("把刚才的照片发到班级群里。");
  classroomPanel.querySelector("#campusContinueButton")?.classList.add("hidden");
  updatePhonePayGuide();
};

const showBasketballVictoryScene = async () => {
  if (!gameState.basketballPhotoChatCompleted) {
    showToast("先把篮球赛照片发到班级群里。", 1800);
    return;
  }

  gameState.currentScene = "basketballVictory";
  gameState.cameraTarget = null;
  const firstWin = !gameState.basketballMatchCompleted;
  gameState.basketballMatchCompleted = true;
  saveGameState();
  updatePhonePayGuide(false);
  setupCampusMiniPanel("篮球场 · 班级冠军");
  await showScreen(classroomScreen, "basketball-court-5-background");
  await runCampusStorySequence(
    [
      "最后几分钟，场边几乎没有人再低头看手机。",
      "终场哨响的时候，比分终于定格。",
      "你们班赢了。",
      "短暂的安静之后，欢呼声一下子冲了起来。",
      "应援旗被高高举起来，周围的人一边拍手一边往场边靠。",
      "有人反复喊着“冠军”，有人已经开始讨论刚才最精彩的那几个球。",
      "罗罗和wwz抱着那面大旗笑得停不下来，gyy在旁边翻着刚拍下来的照片，ljq还在群里疯狂发消息。",
      "你跟着大家一起欢呼，嗓子都有点发哑，却还是觉得应该再喊一遍。",
      "你：我们班冠军！",
    ],
    showEveningStudyReturnClassroom,
    "返回教室上晚自习",
  );
  if (firstWin) {
    showToast("篮球赛胜利：班级冠军", 2400);
    window.setTimeout(() => markStoryNodeCompleted("basketballChampionNode"), 900);
  }
};

const showEveningStudyReturnClassroom = async () => {
  gameState.currentScene = "eveningStudyClassroom";
  gameState.cameraTarget = null;
  saveGameState();
  setupCampusMiniPanel("教室 · 晚自习");
  await showScreen(classroomScreen, "evening-classroom-background");
  await runCampusStorySequence(
    [
      "欢呼结束以后，大家又一起往教学楼走。",
      "刚才还在篮球场边大喊的人，回到教室以后一个个都安静了不少。",
      "应援旗被折起来放在角落，手机相册里多了好几张今晚的照片。",
      "七点半，晚自习正式开始。",
    ],
    showEveningStudyProgress,
    "开始晚自习",
  );
};

const showEveningStudyProgress = async () => {
  gameState.currentScene = "eveningStudyProgress";
  saveGameState();
  setupCampusMiniPanel("晚自习");
  await showScreen(classroomScreen, "evening-classroom-background");
  await runCampusStorySequence(
    [
      "教室里的灯完全亮了起来。",
      "窗外已经变成深色，桌面上只剩书本、试卷和偶尔亮起的手机屏幕。",
      "篮球赛的兴奋慢慢沉下去，教室重新被翻书声和写字声填满。",
      "19:30 → 20:30 → 21:30",
    ],
    showEveningStudyEnd,
    "继续",
  );
};

const showEveningStudyEnd = async () => {
  removeNightSecretOverlays();
  gameState.currentScene = "nightClassroomAfterStudy";
  gameState.eveningStudyCompleted = true;
  saveGameState();
  setupCampusMiniPanel("晚自习后 · 教室");
  await showScreen(classroomScreen, "evening-classroom-background");
  await runCampusStorySequence(
    [
      "最后一节晚自习终于结束。",
      "同学们陆陆续续收拾书包，离开教室回宿舍。",
      "走廊里的脚步声越来越远，教室也一点点安静下来。",
      "最后，只剩下你、罗罗和高原还留在教室里。",
      "seewo仍然亮着，像是谁忘记了关掉什么。",
    ],
    showNightClassroomSecretPrompt,
    "继续",
  );
};

const showNightClassroomSecretPrompt = async () => {
  const button = classroomPanel.querySelector("#campusContinueButton");
  if (!button) return;
  button.disabled = true;
  await typeCampusText("罗罗：诶，钱俊豪是不是网盘没关？");
  await sleep(650);
  await typeCampusText("高原：要不……");
  button.textContent = "发送：可以可以。";
  button.disabled = false;
  button.onclick = async () => {
    button.disabled = true;
    await typeCampusText("你：可以可以。");
    button.textContent = "打开seewo看看";
    button.disabled = false;
    button.onclick = showNightSeewoDesktop;
  };
};

const removeNightSecretOverlays = () => {
  document.querySelector("#nightSeewoIcon")?.remove();
  document.querySelector("#baidupanHotspots")?.remove();
  document.querySelector("#baidupanFilePanel")?.remove();
  document.querySelector("#secretAgreementPanel")?.remove();
  document.querySelector("#secret-video-overlay")?.remove();
  window.clearTimeout(secretVideoCloseTimer);
  secretVideoCloseTimer = null;
  document.removeEventListener("keydown", handleSecretVideoKeydown);
};

const showNightSeewoDesktop = async () => {
  removeNightSecretOverlays();
  gameState.currentScene = "nightSeewoDesktop";
  saveGameState();
  setupCampusMiniPanel("seewo · 深夜");
  await showScreen(classroomScreen, "night-seewo-background");
  await runCampusStorySequence(
    [
      "你走到讲台前，轻轻点亮了seewo。",
      "屏幕上还保留着钱俊豪离开前的桌面。",
      "一个熟悉的蓝色图标安静地停在那里。",
    ],
    () => {
      classroomPanel.querySelector("#campusContinueButton")?.classList.add("hidden");
      const icon = document.createElement("button");
      icon.id = "nightSeewoIcon";
      icon.className = "baidupan-desktop-icon";
      icon.type = "button";
      icon.innerHTML = `
        <img src="${baidupanIconPath}" alt="百度网盘" onerror="this.remove(); this.parentElement.dataset.fallback='true';" />
        <span>百度网盘</span>
      `;
      icon.addEventListener("click", showBaidupanHome);
      classroomScreen.append(icon);
    },
    "查看桌面",
  );
};

const showBaidupanHome = async () => {
  removeNightSecretOverlays();
  gameState.currentScene = "baidupanHome";
  gameState.baidupanFolderPositions = normalizeBaidupanFolderPositions(gameState.baidupanFolderPositions);
  saveGameState();
  setupCampusMiniPanel("钱俊豪的百度网盘");
  await showScreen(classroomScreen, "baidupan-home-background");
  await typeCampusText("网盘主页停在屏幕上，几个文件夹安静地排在画面里。");
  classroomPanel.querySelector("#campusContinueButton")?.classList.add("hidden");
  renderBaidupanFolderHotspots();
};

const renderBaidupanFolderHotspots = () => {
  document.querySelector("#baidupanHotspots")?.remove();
  const layer = document.createElement("div");
  layer.id = "baidupanHotspots";
  layer.className = "baidupan-hotspot-layer";
  const positions = normalizeBaidupanFolderPositions(gameState.baidupanFolderPositions);
  layer.innerHTML = baidupanFolders
    .map((folder) => {
      const position = positions[folder.id];
      return `
        <button
          class="baidupan-folder-hotspot ${folder.secret ? "secret-folder" : ""}"
          type="button"
          data-baidupan-folder="${folder.id}"
          style="left:${position.xPercent}%; top:${position.yPercent}%;"
        >
          <span class="folder-glyph"></span>
          <span>${folder.name}</span>
        </button>
      `;
    })
    .join("");
  layer.addEventListener("click", (event) => {
    const button = event.target.closest("[data-baidupan-folder]");
    if (button) openBaidupanFolder(button.dataset.baidupanFolder);
  });
  classroomScreen.append(layer);
};

const openBaidupanFolder = (folderId) => {
  const folder = baidupanFolders.find((item) => item.id === folderId);
  if (!folder) return;
  if (folder.secret) {
    showSecretVideoFolder();
    return;
  }

  document.querySelector("#baidupanFilePanel")?.remove();
  const panel = document.createElement("section");
  panel.id = "baidupanFilePanel";
  panel.className = "baidupan-file-panel";
  panel.innerHTML = `
    <h3>文件夹：${folder.name}</h3>
    <ul>${folder.lines.map((line) => `<li>${line}</li>`).join("")}</ul>
    <button class="secondary-button" type="button" id="returnBaidupanHomeButton">返回网盘主页</button>
  `;
  panel.querySelector("#returnBaidupanHomeButton").addEventListener("click", () => panel.remove());
  classroomScreen.append(panel);
};

function handleSecretVideoKeydown(event) {
  if (event.key === "Escape") closeSecretVideoModal({ reason: "escape" });
}

const showSecretVideoFolder = async () => {
  removeSecretVideoModal();
  document.querySelector("#baidupanFilePanel")?.remove();
  await typeCampusText("你下意识地点开了那个文件夹。");
  const overlay = document.createElement("div");
  overlay.id = "secret-video-overlay";
  overlay.className = "secret-video-overlay";
  overlay.innerHTML = `
    <section id="secret-video-modal" class="secret-video-modal" role="dialog" aria-modal="true" aria-label="无法辨认的视频缩略图">
      <button id="secret-video-close-x" class="secret-video-close-x" type="button" aria-label="关闭">×</button>
      <div class="mosaic-placeholder" aria-label="无法辨认的视频缩略图">
        <span class="mosaic-play-triangle"></span>
      </div>
      <p>无法辨认的视频缩略图</p>
      <button id="secret-video-close-main" class="primary-button" type="button">立刻关闭</button>
    </section>
  `;
  document.body.append(overlay);
  setModalOpen(true);
  document.addEventListener("keydown", handleSecretVideoKeydown);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeSecretVideoModal({ reason: "backdrop" });
  });
  overlay.querySelector("#secret-video-close-x").addEventListener("click", () => closeSecretVideoModal({ reason: "x" }));
  overlay.querySelector("#secret-video-close-main").addEventListener("click", () => closeSecretVideoModal({ reason: "button" }));
  await typeCampusText("屏幕上闪过一个完全无法辨认的马赛克缩略图。");
  secretVideoCloseTimer = window.setTimeout(() => closeSecretVideoModal({ reason: "auto" }), 1500);
};

const removeSecretVideoModal = () => {
  window.clearTimeout(secretVideoCloseTimer);
  secretVideoCloseTimer = null;
  document.removeEventListener("keydown", handleSecretVideoKeydown);
  document.querySelector("#secret-video-overlay")?.remove();
  secretVideoClosing = false;
};

const closeSecretVideoModal = async () => {
  if (secretVideoClosing) return;
  secretVideoClosing = true;
  try {
    removeSecretVideoModal();
    setModalOpen(false);
    markStoryNodeCompleted("secretFolderClosedNode");
    await showSecretFolderAfterClose();
  } catch (error) {
    console.warn("关闭神秘视频页面失败，执行保险恢复", error);
    recoverFromSecretVideoScene();
    showToast("页面已关闭，继续剧情。", 2200);
  } finally {
    secretVideoClosing = false;
  }
};

const recoverFromSecretVideoScene = () => {
  removeSecretVideoModal();
  setModalOpen(false);
  gameState.sawSecretFolder = true;
  gameState.currentScene = "nightClassroomSecretReaction";
  saveGameState();
  showSecretFolderAfterClose();
};

const showSecretFolderAfterClose = async () => {
  removeNightSecretOverlays();
  gameState.currentScene = "nightClassroomSecretReaction";
  gameState.sawSecretFolder = true;
  saveGameState();
  setupCampusMiniPanel("晚自习后 · 教室");
  await showScreen(classroomScreen, "evening-classroom-background");
  await runCampusStorySequence(
    [
      "seewo被你迅速关掉。",
      "教室重新回到夜晚安静的画面。",
      "你们三个人站在那里，谁都沉默了几秒。",
      "空气里只剩下空调和走廊远处的声音。",
    ],
    showSecretShockDialogue,
    "继续",
  );
};

const showSecretShockDialogue = async () => {
  const button = classroomPanel.querySelector("#campusContinueButton");
  if (!button) return;
  button.textContent = "询问：你们看到了吗？";
  button.disabled = false;
  button.onclick = async () => {
    button.disabled = true;
    await typeCampusText("你：你们看到了吗？");
    await sleep(500);
    await typeCampusText("罗罗：卧槽我看到了。这是啥啊😧");
    button.textContent = "发送：我去。我真的不敢相信。";
    button.disabled = false;
    button.onclick = async () => {
      button.disabled = true;
      await typeCampusText("你：我去。我真的不敢相信。");
      await sleep(500);
      await typeCampusText("高原：啊，不是，这是真的吗哈哈哈哈哈哈。");
      await sleep(500);
      await typeCampusText("你们决定商量接下来该怎么办。");
      renderSecretChoiceButtons();
    };
  };
};

const renderSecretChoiceButtons = () => {
  classroomPanel.querySelector("#campusContinueButton")?.classList.add("hidden");
  classroomPanel.insertAdjacentHTML(
    "beforeend",
    `
      <div class="story-choice-grid secret-choice-grid">
        <button class="pe-branch-card" type="button" data-secret-choice="agreement">
          <strong>A. 签署保密协议</strong>
        </button>
        <button class="pe-branch-card" type="button" data-secret-choice="cryptic">
          <strong>B. 在班级微信群里故弄玄虚</strong>
        </button>
      </div>
    `,
  );
};

const handleSecretChoice = (choice) => {
  if (choice === "agreement") {
    showSecretAgreementPanel();
  } else if (choice === "cryptic") {
    showSecretCrypticPrompt();
  }
};

const showSecretAgreementPanel = () => {
  removeNightSecretOverlays();
  gameState.currentScene = "secretAgreement";
  gameState.secretChoice = "confidentialityAgreement";
  saveGameState();
  const panel = document.createElement("section");
  panel.id = "secretAgreementPanel";
  panel.className = "secret-agreement-panel";
  panel.innerHTML = `
    <h2>深夜教室保密协议</h2>
    <p>我们三人一致确认：</p>
    <ol>
      <li>今晚在seewo上看到的内容不向其他人具体描述。</li>
      <li>不截图、不保存、不传播任何私人文件。</li>
      <li>不在班群或其他平台发布相关内容。</li>
      <li>离开教室后，当作什么也没有发生。</li>
    </ol>
    <p>签署人：你、罗罗、高原</p>
    <canvas id="secretSignatureCanvas" width="520" height="150" aria-label="签名区域"></canvas>
    <div class="agreement-actions">
      <button class="secondary-button" type="button" id="clearSecretSignature">清空签名</button>
      <button class="primary-button" type="button" id="confirmSecretAgreement" disabled>确认签署</button>
    </div>
  `;
  classroomScreen.append(panel);
  initSecretSignatureCanvas();
};

const initSecretSignatureCanvas = () => {
  const canvas = document.querySelector("#secretSignatureCanvas");
  const clearButton = document.querySelector("#clearSecretSignature");
  const confirmButton = document.querySelector("#confirmSecretAgreement");
  if (!canvas || !clearButton || !confirmButton) return;
  const ctx = canvas.getContext("2d");
  let drawing = false;
  let signed = false;

  const getPoint = (event) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * canvas.width,
      y: ((event.clientY - rect.top) / rect.height) * canvas.height,
    };
  };

  const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#111";
    signed = false;
    confirmButton.disabled = true;
  };

  clearCanvas();
  canvas.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    drawing = true;
    canvas.setPointerCapture?.(event.pointerId);
    const point = getPoint(event);
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!drawing) return;
    event.preventDefault();
    const point = getPoint(event);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    signed = true;
    confirmButton.disabled = false;
  });
  const stopDrawing = () => {
    drawing = false;
  };
  canvas.addEventListener("pointerup", stopDrawing);
  canvas.addEventListener("pointercancel", stopDrawing);
  clearButton.addEventListener("click", clearCanvas);
  confirmButton.addEventListener("click", async () => {
    if (!signed) return;
    gameState.secretChoice = "confidentialityAgreement";
    gameState.secretAgreementSigned = true;
    saveGameState();
    showToast("保密协议已签署。", 2200);
    panelCleanupAndReturnFromAgreement();
  });
};

const panelCleanupAndReturnFromAgreement = async () => {
  document.querySelector("#secretAgreementPanel")?.remove();
  setupCampusMiniPanel("晚自习后 · 教室");
  await runCampusStorySequence(
    [
      "你在横线上随手签下名字。",
      "罗罗和高原也一脸严肃地表示同意。",
      "这份临时写下的协议看起来有些荒唐，却让三个人稍微冷静了一点。",
    ],
    showDormReturnPreparation,
    "收拾东西，准备回寝",
  );
};

const showSecretCrypticPrompt = async () => {
  gameState.currentScene = "secretCrypticPrompt";
  gameState.secretChoice = "crypticGroupChat";
  gameState.secretGroupChatStarted = true;
  saveGameState();
  setupCampusMiniPanel("晚自习后 · 班级群");
  await showScreen(classroomScreen, "evening-classroom-background");
  await typeCampusText("打开手机，在ibdt-b学生群里说几句。");
  classroomPanel.querySelector("#campusContinueButton")?.classList.add("hidden");
  updatePhonePayGuide();
};

const showDormReturnPreparation = async () => {
  removeNightSecretOverlays();
  gameState.currentScene = "nightDormPrep";
  gameState.nightClassroomCompleted = true;
  saveGameState();
  updatePhonePayGuide(false);
  setupCampusMiniPanel("晚自习后 · 准备回寝");
  await showScreen(classroomScreen, "evening-classroom-background");
  await runCampusStorySequence(
    [
      "折腾了半天以后，教室里的灯仍然安静地亮着。",
      "走廊里已经几乎听不见其他人的脚步声。",
      "你们三个人终于想起，宿舍快要查寝了。",
      "罗罗背起书包，高原关掉seewo，你也开始收拾桌面。",
      "今天最后一段路，是从教学楼回到宿舍。",
    ],
    showNightClassroomLightsOut,
    "离开教室，返回宿舍",
  );
};

const removeNightPathArrow = () => {
  document.querySelector("#nightPathArrow")?.remove();
  document.querySelectorAll(".night-secret-entry").forEach((node) => node.remove());
};

const showNightClassroomLightsOut = async () => {
  gameState.currentScene = "nightClassroomLightsOut";
  saveGameState();
  updatePhonePayGuide(false);
  setupCampusMiniPanel("夜间教室 · 熄灯");
  await showScreen(classroomScreen, "evening-classroom-background");
  await runCampusStorySequence(
    [
      "你们终于收拾好了书包。",
      "高原关掉了seewo，教室里只剩下头顶的灯还亮着。",
      "罗罗走到门边，回头确认了一眼有没有落下东西。",
      "你按下开关，整间教室一下子暗了下来。",
      "走廊尽头还亮着一盏灯，像在等最后几个离开教学楼的人。",
    ],
    showNightPathScene,
    "离开教室",
  );
};

const showNightPathScene = async () => {
  removeNightPathArrow();
  gameState.currentScene = "nightPath";
  saveGameState();
  setupCampusMiniPanel("返回宿舍 · 夜晚小道");
  await showScreen(classroomScreen, "night-path-background");
  await runCampusStorySequence(
    [
      "教学楼的门在身后合上。",
      "夜里的校园和白天像是两个完全不同的地方。",
      "路灯把树影投在小道上，晚风从操场方向慢慢吹过来。",
      "远处的宿舍楼还亮着零零散散的灯。",
      "今天发生过的事情很多，可走在这条路上时，它们忽然都安静了下来。",
    ],
    () => {
      classroomPanel.querySelector("#campusContinueButton")?.classList.add("hidden");
      const arrow = document.createElement("button");
      arrow.className = "path-arrow night-path-arrow";
      arrow.id = "nightPathArrow";
      arrow.type = "button";
      arrow.innerHTML = `<span class="arrow-line"></span><span class="arrow-label">沿小道返回宿舍</span>`;
      arrow.addEventListener("click", showNightDormScene);
      classroomScreen.append(arrow);
      renderNightEasterEggEntrances();
    },
    "继续",
  );
};

const renderNightEasterEggEntrances = () => {
  document.querySelectorAll(".night-secret-entry").forEach((node) => node.remove());
  const pond = document.createElement("button");
  pond.className = "night-secret-entry pond-entry";
  pond.type = "button";
  pond.textContent = "去池塘看看";
  pond.addEventListener("click", showNightPondScene);
  const cat = document.createElement("button");
  cat.className = "night-secret-entry cat-entry";
  cat.type = "button";
  cat.textContent = "喵……";
  cat.addEventListener("click", showDormCatScene);
  classroomScreen.append(pond, cat);
};

const showNightPondScene = async () => {
  removeNightPathArrow();
  document.querySelectorAll(".night-secret-entry").forEach((node) => node.remove());
  gameState.currentScene = "nightPond";
  gameState.cameraTarget = {
    id: "night-pond-photo",
    title: "黑天鹅的夜间回声",
    image: nightPondImagePath,
    scene: "nightPond",
  };
  saveGameState();
  setupCampusMiniPanel("夜晚池塘");
  await showScreen(classroomScreen, "night-pond-background");
  await runCampusStorySequence(
    [
      "你顺着一旁的小路往池塘边走去。",
      "夜里的水面很安静，风吹过的时候，涟漪像是在压低声音说话。",
      "那两只黑天鹅真的在那里。",
      "也许可以用手机相机把这一刻拍下来。",
    ],
    renderNightSecretReturn,
    "回到小路",
  );
};

const showDormCatScene = async () => {
  removeNightPathArrow();
  document.querySelectorAll(".night-secret-entry").forEach((node) => node.remove());
  gameState.currentScene = "dormCat";
  gameState.cameraTarget = {
    id: "dorm-cat-photo",
    title: "宿舍楼下的小猫",
    image: dormCatImagePath,
    scene: "dormCat",
  };
  saveGameState();
  setupCampusMiniPanel("宿舍楼下");
  await showScreen(classroomScreen, "dorm-cat-background");
  await runCampusStorySequence(
    [
      "你低头一看，宿舍楼下的阴影里居然缩着一只小猫。",
      "它抬头看了你一眼，像是刚好在等谁。",
      "手机相机应该能记下这次偶遇。",
    ],
    renderNightSecretReturn,
    "回到小路",
  );
};

const renderNightSecretReturn = () => {
  const button = classroomPanel.querySelector("#campusContinueButton");
  if (!button) return;
  button.classList.remove("hidden");
  button.textContent = "回到小路";
  button.onclick = showNightPathScene;
  updatePhonePayGuide();
};

const showNightDormScene = async () => {
  removeNightPathArrow();
  gameState.currentScene = "nightDorm";
  gameState.returnedToDormAtNight = true;
  saveGameState();
  setupCampusMiniPanel("宿舍 · 夜间");
  await showScreen(classroomScreen, "night-dorm-background");
  await runCampusStorySequence(
    [
      "你推开宿舍门，熟悉的灯光和空气重新围了上来。",
      "书包被放到桌边，白天带出去的东西终于各自回到了原位。",
      "洗漱间传来水声，走廊外偶尔有人拖着脚步经过。",
      "你洗完脸，刷完牙，换好衣服，终于爬上了床。",
      "一天积下来的疲惫在躺下的瞬间一起追了上来。",
    ],
    showNightRoutineChecklist,
    "开始洗漱",
  );
};

const showNightRoutineChecklist = async () => {
  const text = classroomPanel.querySelector("#campusStoryText");
  const button = classroomPanel.querySelector("#campusContinueButton");
  if (!text || !button) return;
  button.classList.add("hidden");
  text.innerHTML = "";
  for (const item of ["洗脸 ✓", "刷牙 ✓", "整理床铺 ✓", "上床 ✓"]) {
    const row = document.createElement("span");
    row.className = "night-routine-item";
    row.textContent = item;
    text.append(row);
    await sleep(500);
  }
  gameState.nightRoutineCompleted = true;
  saveGameState();
  button.textContent = "熄灯";
  button.classList.remove("hidden");
  button.disabled = false;
  button.onclick = showLightsOutScene;
};

const showLightsOutScene = async (line = "宿舍已经熄灯了。") => {
  gameState.currentScene = "lightsOut";
  gameState.lightsOut = true;
  gameState.nightInventoryMode = true;
  gameState.nightPhoneClosed = false;
  saveGameState();
  renderHud();
  setupCampusMiniPanel("熄灯后");
  await showScreen(classroomScreen, "black-background");
  await typeCampusText(line);
  await sleep(600);
  await typeCampusText("手机屏幕在黑暗里亮了一下。");
  classroomPanel.querySelector("#campusContinueButton")?.classList.add("hidden");
  updatePhonePayGuide();
};

const showAfterNightCall = async () => {
  gameState.currentScene = "nightCallEnded";
  saveGameState();
  renderHud();
  setupCampusMiniPanel("熄灯后");
  await showScreen(classroomScreen, "black-background");
  await typeCampusText("通话结束 · 02:05");
  const button = classroomPanel.querySelector("#campusContinueButton");
  if (!button) return;
  button.textContent = "关上手机";
  button.classList.remove("hidden");
  button.disabled = false;
  button.onclick = closePhoneForReflection;
};

const closePhoneForReflection = async () => {
  gameState.currentScene = "phoneClosedAtNight";
  gameState.nightPhoneClosed = true;
  saveGameState();
  renderHud();
  await sleep(650);
  startDayOneEnding();
};

const startDayOneReflection = async () => {
  gameState.currentScene = "dayOneReflection";
  storyStep = "dayOneReflection";
  gameState.dayOneReflectionIndex = clamp(gameState.dayOneReflectionIndex, 0, dayOneReflectionLines.length - 1);
  gameState.nightInventoryMode = false;
  saveGameState();
  gameHud.classList.add("hud-hidden");
  sceneLabel.textContent = "第一日 · 回顾";
  storyText.textContent = "";
  choiceGrid.classList.add("hidden");
  continueButton.classList.remove("hidden");
  continueButton.textContent = "继续";
  await showScreen(storyScreen, "black-background");
  showDayOneReflectionLine();
};

const showDayOneReflectionLine = async () => {
  continueButton.disabled = true;
  const line = dayOneReflectionLines[gameState.dayOneReflectionIndex] ?? dayOneReflectionLines.at(-1);
  await typeParagraphs([line], 36);
  continueButton.classList.remove("hidden");
  continueButton.disabled = false;
  continueButton.textContent =
    gameState.dayOneReflectionIndex >= dayOneReflectionLines.length - 1 ? "进入梦乡" : "继续";
  continueButton.onclick = () => {
    if (isTyping || continueButton.disabled) return;
    gameState.dayOneReflectionIndex += 1;
    saveGameState();
    if (gameState.dayOneReflectionIndex >= dayOneReflectionLines.length) {
      showDayOneDreamSequence();
      return;
    }
    showDayOneReflectionLine();
  };
};

const showDayOneDreamSequence = async () => {
  gameState.currentScene = "dayOneDream";
  saveGameState();
  sceneLabel.textContent = "第一日 · 结束";
  continueButton.classList.add("hidden");
  await typeParagraphs(["你闭上眼睛。"], 42);
  await sleep(1000);
  await typeParagraphs(["宿舍里的声音渐渐远去。"], 42);
  await sleep(900);
  await typeParagraphs(["你慢慢进入了梦乡。"], 42);
  await sleep(700);
  continueButton.textContent = "保存并结束第一日";
  continueButton.classList.remove("hidden");
  continueButton.disabled = false;
  continueButton.onclick = finishDayOne;
};

const countDiscoveredEasterEggs = () =>
  getUnlockedEasterEggCount();

const countCompletedCourses = () =>
  [
    gameState.eslChatTaskCompleted,
    gameState.physicsWorkbookResult !== null,
    gameState.peRunCompleted,
    gameState.brinClassCompleted,
    gameState.mathPuzzleCompleted,
  ].filter(Boolean).length;

const createEmptyEndingArchive = () => ({
  version: 1,
  seen: {
    normal: null,
    happy: null,
    bonus: null,
  },
});

const safeSetLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn("保存失败：", key, error);
    showToast("结局已完成，但存档写入失败。", 2400);
    return false;
  }
};

const loadEndingArchive = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(endingArchiveKey));
    return {
      ...createEmptyEndingArchive(),
      ...(saved && typeof saved === "object" ? saved : {}),
      seen: {
        ...createEmptyEndingArchive().seen,
        ...(saved?.seen && typeof saved.seen === "object" ? saved.seen : {}),
      },
    };
  } catch (error) {
    console.warn("结局历史读取失败，使用空档案。", error);
    return createEmptyEndingArchive();
  }
};

const saveEndingArchive = (archive) => safeSetLocalStorage(endingArchiveKey, JSON.stringify(archive));

const migrateEasterEggStateForEnding = () => {
  if (!easterEggState) easterEggState = loadEasterEggState();
  let changed = false;
  const cleanUnlocked = {};
  FINAL_EASTER_EGG_IDS.forEach((id) => {
    const record = easterEggState?.unlocked?.[id];
    if (!record || typeof record !== "object") return;
    const unlockedAt = Number(record.unlockedAt);
    if (!Number.isFinite(unlockedAt)) return;
    if (record.unlocked !== true && record.earned !== true) {
      record.unlocked = true;
      changed = true;
    }
    cleanUnlocked[id] = {
      ...record,
      unlocked: record.unlocked === true || record.earned === true,
      unlockedAt,
    };
  });
  const previousKeys = Object.keys(easterEggState.unlocked ?? {});
  if (previousKeys.length !== Object.keys(cleanUnlocked).length) changed = true;
  easterEggState = {
    ...createEmptyEasterEggState(),
    ...(easterEggState && typeof easterEggState === "object" ? easterEggState : {}),
    version: 1,
    unlocked: cleanUnlocked,
    unreadCount: Math.max(0, Number(easterEggState?.unreadCount) || 0),
  };
  if (changed) saveEasterEggState();
  return easterEggState;
};

function getUnlockedEasterEggIds() {
  try {
    migrateEasterEggStateForEnding();
    const unlocked = easterEggState?.unlocked || {};
    return FINAL_EASTER_EGG_IDS.filter((id) => {
      const record = unlocked[id];
      if (!record) return false;
      const isUnlocked = record.unlocked === true || record.earned === true;
      const hasValidTimestamp = Number.isFinite(Number(record.unlockedAt));
      return isUnlocked && hasValidTimestamp;
    });
  } catch (error) {
    console.warn("彩蛋状态损坏，按0个彩蛋处理。", error);
    return [];
  }
}

function getUnlockedEasterEggCount() {
  const count = getUnlockedEasterEggIds().length;
  return Math.max(0, Math.min(6, count));
}

function determineDayOneEnding() {
  const eggCount = getUnlockedEasterEggCount();
  if (eggCount === 6) return "bonus";
  if (eggCount >= 1 && eggCount <= 5) return "happy";
  return "normal";
}

const getValidUnlockedAchievementCount = () => getUnlockedAchievementIds().length;

const getUniqueCurrentPhotoCount = () =>
  new Set((Array.isArray(gameState.photos) ? gameState.photos : []).map((photo) => photo?.id).filter(Boolean)).size;

const getCompletedBranchCount = () =>
  [
    gameState.physicsWorkbookResult === "success",
    gameState.physicsWorkbookResult === "failed",
    gameState.peBranches?.pianoRoomCompleted,
    gameState.peBranches?.forestCompleted,
    gameState.peBranches?.mysteryCompleted,
    gameState.secretAgreementSigned,
    gameState.secretGroupChatCompleted,
    gameState.tiangeDecorCompleted,
    gameState.brinClassCompleted,
    gameState.mathPuzzleCompleted,
  ].filter(Boolean).length;

function getDayOneEndingStats() {
  try {
    return {
      achievementCount: getValidUnlockedAchievementCount(),
      achievementTotal: 50,
      easterEggCount: getUnlockedEasterEggCount(),
      easterEggTotal: 6,
      photoCount: getUniqueCurrentPhotoCount(),
      branchCount: getCompletedBranchCount(),
    };
  } catch (error) {
    console.warn("Failed to read ending stats:", error);
    return {
      achievementCount: 0,
      achievementTotal: 50,
      easterEggCount: 0,
      easterEggTotal: 6,
      photoCount: 0,
      branchCount: 0,
    };
  }
}

function migrateEndingSystem() {
  gameState.dayOneCompleted = Boolean(gameState.dayOneCompleted);
  gameState.currentEndingType = gameState.currentEndingType ?? null;
  migrateEasterEggStateForEnding();
  loadEndingArchive();
}

const trackEndingTimeout = (callback, delay) => {
  const id = window.setTimeout(() => {
    runtimeState.endingTimeouts = runtimeState.endingTimeouts.filter((item) => item !== id);
    callback();
  }, delay);
  runtimeState.endingTimeouts.push(id);
  return id;
};

const endingSleep = (ms) =>
  new Promise((resolve) => {
    trackEndingTimeout(resolve, ms);
  });

const removeAllEasterEggToastElements = () => {
  easterEggToastQueue.length = 0;
  easterEggToastActive = false;
  document.querySelector("#easter-egg-toast-container")?.replaceChildren();
};

function cleanupBeforeEnding() {
  window.clearInterval(hungerTimer);
  hungerTimer = null;
  window.clearInterval(teacherDistanceTimer);
  teacherDistanceTimer = null;
  window.clearInterval(physicsWorkbookTimer);
  physicsWorkbookTimer = null;
  clearEslChatTimer();
  clearPhysicsChatTimer();
  clearBasketballChatTimer();
  clearSecretChatTimer();
  clearNightCallTimer();
  stopMathPuzzleTimer();
  window.clearTimeout(peMysteryChatTimer);
  window.clearTimeout(secretVideoCloseTimer);
  peMysteryChatTimer = null;
  secretVideoCloseTimer = null;
  runtimeState.endingTimeouts.forEach((id) => window.clearTimeout(id));
  runtimeState.endingIntervals.forEach((id) => window.clearInterval(id));
  runtimeState.endingTimeouts = [];
  runtimeState.endingIntervals = [];
  if (runtimeState.endingAnimationFrame) cancelAnimationFrame(runtimeState.endingAnimationFrame);
  runtimeState.endingAnimationFrame = null;
  runtimeState.endingCleanupFns.splice(0).forEach((cleanup) => {
    try {
      cleanup();
    } catch (error) {
      console.warn("结局清理函数失败", error);
    }
  });
  runtimeState.endingTypewriterToken = { cancelled: true };
  runtimeState.endingTypewriterRunning = false;
  runtimeState.bonusLyricsPlaying = false;
  runtimeState.achievementToastsEnabled = false;
  pointerDraggedItem = null;
  pointerDrag = null;
  outdoorCameraDrag = null;
  decorDrag = null;
  mathPuzzlePointer = null;
  closeCheckpointPanel();
  closeAchievementPanel();
  closeEasterEggPanel();
  closeCalculatorPanel();
  removeNightSecretOverlays();
  removeNightPathArrow();
  removeQianModeHotspot();
  document.querySelectorAll(
    ".ending-overlay, .ending-typewriter-layer, .ending-settlement, .ending-album-viewer, .ending-lyrics-layer, .dandelion-ending, .album-viewer, .confetti-layer, .firework-layer, .decor-ghost, .path-arrow, .night-secret-entry, .phone-pay-guide, .inner-os, .secret-video-overlay",
  ).forEach((node) => node.remove());
  toast.classList.add("hidden");
  innerOs.classList.add("hidden");
  teacherWarning.classList.add("hidden");
  document.body.classList.remove("math-time-warning", "teacher-danger");
  if (phoneDialog.open) phoneDialog.close();
  if (reviewDialog.open) reviewDialog.close();
  if (scheduleDialog.open) scheduleDialog.close();
  gameState.isModalOpen = false;
  gameState.nightInventoryMode = false;
  gameState.nightPhoneClosed = true;
  gameHud.classList.add("hud-hidden");
  teacherDistance.classList.add("hidden");
  removeAllAchievementToastElements();
  removeAllEasterEggToastElements();
  updatePhonePayGuide(false);
  updateUtilityToolVisibility();
}

const createEndingOverlay = (className = "") => {
  document.querySelectorAll(".ending-overlay").forEach((node) => node.remove());
  const overlay = document.createElement("section");
  overlay.className = `ending-overlay ${className}`.trim();
  overlay.setAttribute("aria-live", "polite");
  document.body.append(overlay);
  return overlay;
};

const typeEndingText = async (node, text, token, speed = 38) => {
  node.textContent = "";
  for (const char of text) {
    if (token.cancelled) return;
    if (token.skipCurrent) {
      node.textContent = text;
      token.skipCurrent = false;
      return;
    }
    node.textContent += char;
    await endingSleep(speed);
  }
};

async function playEndingParagraphs(paragraphs, options = {}) {
  if (runtimeState.endingTypewriterRunning) return;
  const token = { cancelled: false, skipCurrent: false, waiting: false };
  runtimeState.endingTypewriterToken = token;
  runtimeState.endingTypewriterRunning = true;
  const overlay = options.overlay ?? createEndingOverlay("ending-typewriter-layer");
  overlay.innerHTML = "";
  const box = document.createElement("article");
  box.className = "ending-text-box";
  const label = document.createElement("p");
  label.className = "ending-label";
  label.textContent = options.label ?? "第一日 · 终章";
  const text = document.createElement("p");
  text.className = "ending-typewriter-text";
  const button = document.createElement("button");
  button.className = "ending-continue";
  button.type = "button";
  button.textContent = "继续";
  box.append(label, text, button);
  overlay.append(box);

  const waitForAdvance = () =>
    new Promise((resolve) => {
      let locked = false;
      const advance = (event) => {
        if (event?.type === "keydown" && event.code !== "Space" && event.key !== " ") return;
        event?.preventDefault?.();
        if (locked) return;
        if (token.waiting) {
          locked = true;
          cleanup();
          resolve();
          return;
        }
        token.skipCurrent = true;
      };
      const cleanup = () => {
        button.removeEventListener("click", advance);
        overlay.removeEventListener("pointerup", advance);
        document.removeEventListener("keydown", advance);
        runtimeState.endingCleanupFns = runtimeState.endingCleanupFns.filter((item) => item !== cleanup);
      };
      runtimeState.endingCleanupFns.push(cleanup);
      button.addEventListener("click", advance);
      overlay.addEventListener("pointerup", advance);
      document.addEventListener("keydown", advance);
    });

  try {
    for (const paragraph of paragraphs) {
      if (token.cancelled) break;
      token.waiting = false;
      button.classList.add("hidden");
      await typeEndingText(text, paragraph, token, options.speed ?? 36);
      if (token.cancelled) break;
      text.textContent = paragraph;
      token.waiting = true;
      button.classList.remove("hidden");
      await waitForAdvance();
      await endingSleep(120);
    }
  } finally {
    runtimeState.endingTypewriterRunning = false;
    token.cancelled = true;
    options.onDone?.();
  }
}

const showEndingTitleCard = async (endingType, subtitle) => {
  const overlay = createEndingOverlay("ending-title-card");
  const title = document.createElement("h1");
  title.textContent = endingType === "normal" ? "Normal Ending" : endingType === "happy" ? "Happy Ending" : "Bonus Ending";
  const copy = document.createElement("p");
  copy.textContent = subtitle;
  overlay.append(title, copy);
  await endingSleep(2100);
  overlay.classList.add("ending-fade-out");
  await endingSleep(460);
  overlay.remove();
};

const renderStatsMarkup = (stats) => `
  <ul class="ending-stats">
    <li>已获得成就：${stats.achievementCount} / ${stats.achievementTotal}</li>
    <li>已发现彩蛋：${stats.easterEggCount} / ${stats.easterEggTotal}</li>
    <li>相册照片：${stats.photoCount}张</li>
    <li>已完成支线：${stats.branchCount}条</li>
  </ul>
`;

const getUnlockedEasterEggNames = () =>
  getUnlockedEasterEggIds().map((id) => EASTER_EGG_DEFINITIONS[id]?.title ?? id);

const saveEndingCompletion = (endingType, stats) => {
  gameState.dayOneCompleted = true;
  gameState.currentEndingType = endingType;
  markStoryNodeCompleted("dayOneCompletedNode");
  saveGameState();
  const archive = loadEndingArchive();
  if (!archive.seen[endingType]) {
    archive.seen[endingType] = {
      completedAt: Date.now(),
      achievementCount: stats.achievementCount,
      easterEggCount: stats.easterEggCount,
      photoCount: stats.photoCount,
      branchCount: stats.branchCount,
    };
    saveEndingArchive(archive);
  }
};

const renderEndingSettlement = (endingType) => {
  cleanupBeforeEnding();
  runtimeState.endingInProgress = true;
  const stats = getDayOneEndingStats();
  saveEndingCompletion(endingType, stats);
  const overlay = createEndingOverlay("ending-settlement");
  const title = ENDING_TITLES[endingType] ?? ENDING_TITLES.normal;
  const eggNames = getUnlockedEasterEggNames();
  const happyEggList =
    endingType === "happy" && eggNames.length
      ? `<section class="ending-egg-list"><h3>已发现彩蛋</h3><ul>${eggNames.map((name) => `<li>${name}</li>`).join("")}</ul></section>`
      : "";
  const message =
    endingType === "normal"
      ? `<p>你完成了第一日主线。</p><p>校园里仍然留着一些尚未被发现的秘密。</p>`
      : endingType === "happy"
        ? `<p>你在第一日留下了许多值得记住的瞬间。</p><p>校园里仍然有尚未发现的秘密，但你已经看见了这一天的大部分光亮。</p><p>感谢你认真地走完了这一天。</p>`
        : `<p>全彩蛋收集完成</p>`;
  overlay.innerHTML = `
    <article class="ending-card">
      <p class="ending-label">第一日完成</p>
      <h2>${title}</h2>
      ${message}
      ${renderStatsMarkup(stats)}
      ${happyEggList}
      <div class="ending-actions">
        <button class="primary-button" type="button" data-ending-action="album">${endingType === "normal" ? "查看第一日相册" : "查看完整相册"}</button>
        ${endingType === "happy" ? '<button class="secondary-button" type="button" data-ending-action="eggs">查看彩蛋图鉴</button>' : ""}
        <button class="secondary-button" type="button" data-ending-action="checkpoint">${endingType === "normal" ? "使用回档探索其他路线" : "使用回档寻找剩余秘密"}</button>
        <button class="secondary-button" type="button" data-ending-action="main">返回主界面</button>
      </div>
    </article>
  `;
  overlay.addEventListener("click", handleEndingAction);
};

const openEndingAlbumViewer = () => {
  document.querySelector(".ending-album-viewer")?.remove();
  const viewer = document.createElement("section");
  viewer.className = "ending-album-viewer";
  viewer.innerHTML = `
    <button class="album-viewer-close" type="button" aria-label="关闭相册">×</button>
    <article class="ending-album-panel">
      <h2>第一日相册</h2>
      ${
        gameState.photos.length === 0
          ? "<p>相册里还没有照片。</p>"
          : `<div class="album-grid">${gameState.photos
              .map(
                (photo) => `
                  <button class="album-thumb" type="button" data-photo-id="${photo.id}">
                    <span class="album-thumb-frame">
                      <img src="${photo.image}" alt="${photo.title}" onerror="this.remove(); this.parentElement.dataset.fallback='true';" />
                      ${Array.isArray(photo.decorations) ? renderDecorationOverlay(photo.decorations) : ""}
                    </span>
                    <span>${photo.title}</span>
                  </button>
                `,
              )
              .join("")}</div>`
      }
    </article>
  `;
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer || event.target.closest(".album-viewer-close")) viewer.remove();
  });
  document.body.append(viewer);
};

const openEndingEasterEggViewer = () => {
  document.querySelector(".ending-album-viewer")?.remove();
  const viewer = document.createElement("section");
  viewer.className = "ending-album-viewer";
  const names = getUnlockedEasterEggNames();
  viewer.innerHTML = `
    <button class="album-viewer-close" type="button" aria-label="关闭彩蛋图鉴">×</button>
    <article class="ending-album-panel">
      <h2>彩蛋图鉴</h2>
      ${
        names.length === 0
          ? "<p>还没有发现彩蛋。</p>"
          : `<ul class="ending-egg-list">${names.map((name) => `<li>${name}</li>`).join("")}</ul>`
      }
    </article>
  `;
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer || event.target.closest(".album-viewer-close")) viewer.remove();
  });
  document.body.append(viewer);
};

const handleEndingAction = (event) => {
  const action = event.target.closest("[data-ending-action]")?.dataset.endingAction;
  if (!action) return;
  if (action === "album") openEndingAlbumViewer();
  if (action === "eggs") {
    openEndingEasterEggViewer();
  }
  if (action === "checkpoint") {
    exitEndingToCheckpoint();
  }
  if (action === "main") {
    returnToMainMenuFromEnding();
  }
};

const exitEndingToCheckpoint = () => {
  runtimeState.endingInProgress = false;
  document.querySelectorAll(".ending-overlay, .ending-album-viewer").forEach((node) => node.remove());
  gameState.isGameplayActive = true;
  gameState.isModalOpen = false;
  setGameplayActive(true);
  renderHud();
  openCheckpointPanel();
};

async function renderNormalEnding() {
  await playEndingParagraphs(NORMAL_ENDING_PARAGRAPHS, { label: "Normal Ending" });
  await showEndingTitleCard("normal", "平凡的一天，也值得被记住。");
  renderEndingSettlement("normal");
}

async function renderHappyEnding() {
  await playEndingParagraphs(HAPPY_ENDING_PARAGRAPHS, { label: "Happy Ending" });
  await showEndingTitleCard("happy", "有些日子会结束，有些日子会被永远留在相册里。");
  renderEndingSettlement("happy");
}

const setEndingSkyProgress = (node, progress) => {
  const clamped = clamp(progress, 0, 1);
  const dark = [1, 4, 12];
  const blue = [117, 194, 238];
  const color = dark.map((value, index) => Math.round(value + (blue[index] - value) * clamped));
  node.style.background = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
};

async function playBonusEndingLyrics(lines) {
  if (runtimeState.bonusLyricsPlaying) return;
  if (!Array.isArray(lines) || lines.length !== 23) {
    console.warn("Bonus歌词数组损坏，跳过歌词演出。", lines);
    return;
  }
  runtimeState.bonusLyricsPlaying = true;
  const layer = createEndingOverlay("ending-lyrics-layer");
  const lyric = document.createElement("p");
  lyric.className = "ending-lyric-line";
  layer.append(lyric);
  let accelerate = false;
  const requestAccelerate = (event) => {
    if (event?.type === "keydown" && event.code !== "Space" && event.key !== " ") return;
    event?.preventDefault?.();
    accelerate = true;
  };
  layer.addEventListener("pointerup", requestAccelerate);
  document.addEventListener("keydown", requestAccelerate);
  runtimeState.endingCleanupFns.push(() => {
    layer.removeEventListener("pointerup", requestAccelerate);
    document.removeEventListener("keydown", requestAccelerate);
  });
  try {
    for (let index = 0; index < lines.length; index += 1) {
      if (!runtimeState.bonusLyricsPlaying) break;
      const progress = lines.length <= 1 ? 1 : index / (lines.length - 1);
      setEndingSkyProgress(layer, progress);
      lyric.textContent = lines[index];
      lyric.classList.remove("leaving");
      lyric.classList.add("showing");
      await endingSleep(accelerate ? 80 : BONUS_LYRIC_TIMING.fadeInMs);
      accelerate = false;
      await endingSleep(accelerate ? 120 : BONUS_LYRIC_TIMING.holdMs);
      accelerate = false;
      lyric.classList.remove("showing");
      lyric.classList.add("leaving");
      await endingSleep(accelerate ? 80 : BONUS_LYRIC_TIMING.fadeOutMs);
      accelerate = false;
      await endingSleep(BONUS_LYRIC_TIMING.gapMs);
    }
  } finally {
    runtimeState.bonusLyricsPlaying = false;
    layer.remove();
  }
}

const showBonusFinalLine = async () => {
  const overlay = createEndingOverlay("ending-final-line");
  setEndingSkyProgress(overlay, 1);
  const text = document.createElement("p");
  text.className = "ending-final-type";
  overlay.append(text);
  await typeEndingText(text, "16岁的那个夏天，很高兴遇见了你们。", { cancelled: false }, 54);
  await endingSleep(3000);
  overlay.classList.add("ending-fade-out");
  await endingSleep(600);
  overlay.remove();
};

const createDandelionSeeds = (width, height) => {
  const count = dandelionWords.length;
  const radius = Math.min(width, height) * 0.23;
  const centerX = width / 2;
  const centerY = height * 0.42;
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  return dandelionWords.map((word, index) => {
    const y = 1 - (index / Math.max(1, count - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = goldenAngle * index;
    return {
      word,
      x: Math.cos(theta) * r,
      y,
      z: Math.sin(theta) * r,
      baseX: centerX,
      baseY: centerY,
      radius,
      fly: 0,
      delay: index / count,
      rotation: (index % 7) * 0.12,
    };
  });
};

const renderDandelionEnding = () => {
  cleanupBeforeEnding();
  runtimeState.endingInProgress = true;
  const stats = getDayOneEndingStats();
  saveEndingCompletion("bonus", stats);
  const overlay = createEndingOverlay("dandelion-ending");
  overlay.innerHTML = `
    <canvas id="dandelionCanvas" aria-label="文字蒲公英"></canvas>
    <article class="dandelion-summary">
      <p class="ending-label">Bonus Ending</p>
      <h2>醒来已是告别时</h2>
      ${renderStatsMarkup(stats)}
      <p>全彩蛋收集完成</p>
      <div class="ending-actions">
        <button class="secondary-button" type="button" data-ending-action="album">查看完整相册</button>
        <button class="secondary-button" type="button" data-ending-action="eggs">查看彩蛋图鉴</button>
        <button class="secondary-button" type="button" data-ending-action="checkpoint">使用回档寻找剩余秘密</button>
        <button class="primary-button" type="button" data-ending-action="main">返回主界面</button>
      </div>
    </article>
  `;
  overlay.addEventListener("click", handleEndingAction);
  initDandelionCanvas(overlay.querySelector("#dandelionCanvas"));
};

const initDandelionCanvas = (canvas) => {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let seeds = [];
  let width = 0;
  let height = 0;
  let angle = 0;
  let scattering = false;
  let scatterStart = 0;
  let resetScheduled = false;
  const resize = () => {
    const dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seeds = createDandelionSeeds(width, height);
  };
  const scatter = () => {
    if (scattering) return;
    scattering = true;
    resetScheduled = false;
    scatterStart = performance.now();
  };
  const draw = (now) => {
    ctx.clearRect(0, 0, width, height);
    angle += 0.003;
    const breath = Math.sin(now / 900) * 5;
    const stemX = width / 2;
    const stemTop = height * 0.5 + breath;
    const stemBottom = height * 0.78;
    ctx.strokeStyle = "rgba(255,255,255,0.55)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(stemX, stemBottom);
    ctx.quadraticCurveTo(stemX - 24, height * 0.64, stemX, stemTop);
    ctx.stroke();
    let allGone = scattering;
    seeds.forEach((seed) => {
      if (scattering) {
        const raw = clamp((now - scatterStart) / 4200 - seed.delay * 0.7, 0, 1);
        seed.fly = raw * raw * (3 - 2 * raw);
      }
      if (seed.fly < 1) allGone = false;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const rotatedX = seed.x * cos - seed.z * sin;
      const rotatedZ = seed.x * sin + seed.z * cos;
      const perspective = 0.72 + (rotatedZ + 1) * 0.24;
      const flyX = seed.fly * (width * (0.2 + seed.delay * 0.52));
      const flyY = seed.fly * (-height * (0.22 + seed.delay * 0.18));
      const x = seed.baseX + rotatedX * seed.radius * perspective + flyX;
      const y = seed.baseY + seed.y * seed.radius * perspective + breath + flyY + Math.sin(seed.fly * Math.PI * 4 + seed.delay * 5) * 16 * seed.fly;
      const alpha = clamp((0.35 + (rotatedZ + 1) * 0.28) * (1 - seed.fly), 0, 1);
      const size = (13 + (rotatedZ + 1) * 4) * perspective;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(seed.rotation + seed.fly * 0.8);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = "rgba(255,255,255,0.95)";
      ctx.font = `800 ${size}px system-ui, -apple-system, BlinkMacSystemFont, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(seed.word, 0, 0);
      ctx.restore();
    });
    if (allGone && !resetScheduled) {
      resetScheduled = true;
      trackEndingTimeout(() => {
        seeds.forEach((seed) => {
          seed.fly = 0;
        });
        scattering = false;
        resetScheduled = false;
      }, 1000);
    }
    runtimeState.endingAnimationFrame = requestAnimationFrame(draw);
  };
  resize();
  window.addEventListener("resize", resize);
  canvas.addEventListener("click", scatter);
  runtimeState.endingCleanupFns.push(() => {
    window.removeEventListener("resize", resize);
    canvas.removeEventListener("click", scatter);
  });
  runtimeState.endingAnimationFrame = requestAnimationFrame(draw);
};

async function renderBonusEnding() {
  await playEndingParagraphs(BONUS_ENDING_DREAM_PARAGRAPHS, { label: "Bonus Ending" });
  await showEndingTitleCard("bonus", "今天不是2023年9月23日。");
  await showEndingTitleCard("bonus", "今天是2026年6月。");
  await showEndingTitleCard("bonus", "你的高中生涯，已经结束了。");
  await playEndingParagraphs(BONUS_ENDING_MEMORY_PARAGRAPHS, { label: "Bonus Ending" });
  await playEndingParagraphs(BONUS_ENDING_FAREWELL_PARAGRAPHS, { label: "Bonus Ending" });
  await playBonusEndingLyrics(bonusEndingLyrics);
  await showBonusFinalLine();
  renderDandelionEnding();
}

function recoverFromEndingError(endingType, error) {
  console.warn("结局渲染失败，进入安全结算页：", endingType, error);
  cleanupBeforeEnding();
  runtimeState.endingInProgress = true;
  renderEndingSettlement(endingType || "normal");
}

function startDayOneEnding() {
  if (runtimeState.endingInProgress) return;
  runtimeState.endingInProgress = true;
  try {
    cleanupBeforeEnding();
    const endingType = determineDayOneEnding();
    gameState.currentEndingType = endingType;
    gameState.currentScene = `dayOneEnding_${endingType}`;
    gameState.dayOneCompleted = true;
    saveGameState();
    if (endingType === "bonus") {
      renderBonusEnding();
      return;
    }
    if (endingType === "happy") {
      renderHappyEnding();
      return;
    }
    renderNormalEnding();
  } catch (error) {
    recoverFromEndingError(gameState.currentEndingType || "normal", error);
  }
}

const finishDayOne = async () => {
  startDayOneEnding();
};

const showDayOneMemorySummary = () => {
  renderEndingSettlement(gameState.currentEndingType || determineDayOneEnding());
};

function returnToMainMenuFromEnding() {
  if (runtimeState.returningFromEnding) return;
  runtimeState.returningFromEnding = true;
  cleanupBeforeEnding();
  runtimeState.endingInProgress = false;
  runtimeState.returningFromEnding = false;
  gameState.currentScene = "start";
  gameState.isGameplayActive = false;
  gameState.isModalOpen = false;
  gameState.gameStarted = false;
  gameState.nightInventoryMode = false;
  gameState.nightPhoneClosed = false;
  saveGameState();
  setGameplayActive(false);
  renderHud();
  gameHud.classList.add("hud-hidden");
  showScreen(homeScreen, "home-background");
}

const returnToStartAfterDayOne = returnToMainMenuFromEnding;

const showLunchMealScene = async () => {
  const order = getLunchOrder();
  if (!order.paid) {
    showToast("你还没有付款。", 1800);
    showLunchOrderScene();
    return;
  }

  gameState.currentScene = "lunchMeal";
  gameState.pendingPayment = false;
  gameState.pendingOrderType = null;
  saveGameState();
  updatePhonePayGuide(false);
  classroomPanel.innerHTML = `
    <p class="scene-label">中午食堂 · 午餐时间</p>
    <h2>午餐时间</h2>
    <p>你端着餐盘找到位置坐下。</p>
    <p>食堂里的声音一层叠着一层，旁边有人聊着上午的课，也有人低头专心吃饭。热气从餐盘里慢慢升起来，刚才体育课留下的疲惫也一点点退了下去。</p>
    <p>午饭吃完以后，你把餐盘送回回收处，准备离开食堂。</p>
    <button class="primary-button" id="leaveLunchCafeteriaButton" type="button">吃完了，离开食堂</button>
  `;
  classroomPanel.querySelector("#leaveLunchCafeteriaButton").addEventListener("click", showLunchExitScene);
  await showScreen(classroomScreen, "lunch-cafeteria-background");
};

const showLunchExitScene = async () => {
  gameState.currentScene = "lunchExit";
  gameState.lunchSceneCompleted = true;
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">食堂外 · 午后</p>
    <h2>食堂外 · 午后</h2>
    <p>你从食堂走出来。</p>
    <p>午后的光比早晨更亮，食堂门口的人流不断往教学楼方向移动。几节上午的课已经结束，但下午还远没有开始。</p>
    <button class="path-arrow lunch-classroom-arrow" id="goAfternoonClassroomArrow" type="button">
      <span class="arrow-line"></span>
      <span class="arrow-label">前往教室</span>
    </button>
  `;
  classroomPanel.querySelector("#goAfternoonClassroomArrow").addEventListener("click", showAfternoonClassroom);
  await showScreen(classroomScreen, "campus-route-background");
};

const showAfternoonClassroom = async () => {
  gameState.currentScene = "afternoonClassroom";
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">教室 · 午后</p>
    <h2>教室 · 午后</h2>
    <p>你跟着人流回到教室。</p>
    <p>午后的光从窗户斜着落进来，桌椅和黑板都被照得比早晨柔和了一点。有人趴在桌上休息，有人还在讨论上午发生的事。</p>
    <p>午饭后的教室有一种短暂的安静，像所有人都在等待下一段时间开始。</p>
    <button class="primary-button" id="continueNapButton" type="button">继续</button>
  `;
  classroomPanel.querySelector("#continueNapButton").addEventListener("click", showNapPlaceholder);
  await showScreen(classroomScreen, "afternoon-classroom-background");
};

const showNapPlaceholder = () => {
  showClassroomNoonIntro();
};

const showClassroomNoonIntro = async () => {
  gameState.currentScene = "classroomNoon";
  gameState.tiangeDecorSceneStarted = true;
  saveGameState();
  removeTiangeDecorStage();
  classroomPanel.classList.remove("tiange-mini-panel");
  classroomPanel.innerHTML = `
    <p class="scene-label">教室 · 午休前</p>
    <h2>教室 · 午休前</h2>
    <p>你比想象中更早回到了教室。</p>
    <p>原本以为午休时间大家应该东倒西歪地趴在桌上，结果刚走到门口，你就发现教室里居然聚了不少人，笑声一阵接着一阵，像在围观什么不得了的事情。</p>
    <button class="primary-button" id="approachTiangeButton" type="button">走近看看</button>
  `;
  classroomPanel.querySelector("#approachTiangeButton").addEventListener("click", showTiangeCrowdScene);
  await showScreen(classroomScreen, "classroom-background");
};

const showTiangeCrowdScene = async () => {
  gameState.currentScene = "tiangeCrowd";
  saveGameState();
  removeTiangeDecorStage();
  classroomPanel.classList.add("tiange-mini-panel");
  classroomPanel.innerHTML = `
    <p class="scene-label">教室 · 围观现场</p>
    <div class="mini-story-text" id="tiangeMiniText"></div>
    <button class="mini-continue" id="tiangeMiniContinue" type="button">继续</button>
  `;
  await showScreen(classroomScreen, "tiange-crowd-background");
  startTiangeMiniPromptSequence();
};

const tiangeMiniPrompts = [
  "午休时间，教室里居然围了不少人。",
  "你凑近一看，发现舔哥的卷发已经被扎成了几撮小辫子。",
  "头发上还贴满了各种可爱的装饰物。",
  "罗罗：“你要不给舔哥装饰一下不？”",
  "罗罗塞给你五个亮闪闪的小东西。",
];

let tiangePromptIndex = 0;

const typeMiniPrompt = async (element, text) => {
  element.textContent = "";
  for (const char of text) {
    element.textContent += char;
    await sleep(18);
  }
};

const startTiangeMiniPromptSequence = () => {
  tiangePromptIndex = 0;
  showTiangeMiniPrompt();
};

const showTiangeMiniPrompt = async () => {
  const textBox = classroomPanel.querySelector("#tiangeMiniText");
  const button = classroomPanel.querySelector("#tiangeMiniContinue");
  if (!textBox || !button) return;

  button.disabled = true;
  await typeMiniPrompt(textBox, tiangeMiniPrompts[tiangePromptIndex]);
  button.disabled = false;
  button.onclick = () => {
    tiangePromptIndex += 1;
    if (tiangePromptIndex >= tiangeMiniPrompts.length) {
      showTiangeDecorScene();
      return;
    }
    showTiangeMiniPrompt();
  };
};

const showTiangeDecorScene = async () => {
  gameState.currentScene = "tiangeDecor";
  syncTiangeDecorationState();
  giveTiangeDecorItems();
  saveGameState();
  classroomPanel.classList.add("tiange-mini-panel");
  classroomPanel.innerHTML = `
    <p class="scene-label">给舔哥装饰一下</p>
    <p class="mini-story-text" id="tiangeDecorHint">${getTiangeDecorHint()}</p>
    <p class="decor-progress" id="decorProgress">已装饰：${getPlacedDecorCount()} / 5</p>
    <button class="decor-reset-button" id="resetDecorButton" type="button">重新摆放装饰</button>
  `;
  await showScreen(classroomScreen, "tiange-decor-background");
  renderTiangeDecorStage();
  classroomPanel.querySelector("#resetDecorButton")?.addEventListener("click", resetTiangeDecorations);
  if (gameState.tiangeDecorCompleted || gameState.tiangeDecorAllPlaced) showTiangeDecorComplete();
};

const getTiangeDecorHint = () =>
  gameState.selectedDecorItemId
    ? "点击舔哥的脸或头发，把装饰物贴上去。"
    : "把装饰物拖到舔哥的脸上或头发上。";

const getTiangeDecorStage = () => document.querySelector("#tiangeDecorStage");

const getTiangeImageRect = () => {
  const frame = document.querySelector("#tiangeImageFrame");
  return frame?.getBoundingClientRect() ?? null;
};

const removeTiangeDecorStage = () => {
  document.querySelector("#tiangeDecorStage")?.remove();
};

const renderTiangeDecorStage = () => {
  removeTiangeDecorStage();
  const stage = document.createElement("div");
  stage.className = "tiange-decor-stage";
  stage.id = "tiangeDecorStage";
  stage.innerHTML = `
    <div class="tiange-image-frame" id="tiangeImageFrame">
      <img class="tiange-image" id="tiangeDecorImage" src="${tiangeDecorImagePath}" alt="舔哥装饰背景" draggable="false" onerror="this.closest('.tiange-decor-stage').dataset.fallback='true';" />
      <div class="tiange-sticker-layer" id="placedDecorLayer">${renderPlacedDecorItems()}</div>
    </div>
  `;
  stage.addEventListener("click", placeSelectedDecorFromClick);
  classroomScreen.append(stage);
  updateTiangeDecorUi();
};

const renderPlacedDecorItems = () =>
  syncTiangeDecorationState()
    .filter((item) => item.placed)
    .map(
      (item) =>
        `<span class="placed-decor" style="left:${item.xPercent ?? 50}%; top:${item.yPercent ?? 40}%; transform: translate(-50%, -50%) rotate(${item.rotation ?? 0}deg) scale(${item.scale ?? 1});">${item.label}</span>`,
    )
    .join("");

const getPlacedDecorCount = () => syncTiangeDecorationState().filter((item) => item.placed).length;

const updateTiangeDecorUi = () => {
  const layer = document.querySelector("#placedDecorLayer");
  if (layer) layer.innerHTML = renderPlacedDecorItems();
  const progress = document.querySelector("#decorProgress");
  if (progress) progress.textContent = `已装饰：${getPlacedDecorCount()} / 5`;
  const hint = classroomPanel.querySelector("#tiangeDecorHint");
  if (hint && !gameState.tiangeDecorCompleted) hint.textContent = getTiangeDecorHint();
  getTiangeDecorStage()?.classList.toggle("selecting", Boolean(gameState.selectedDecorItemId));
  renderHotbar();
};

const toggleSelectedDecorItem = (event) => {
  if (suppressNextDecorClick) {
    suppressNextDecorClick = false;
    return;
  }
  toggleSelectedDecorItemById(event.currentTarget.dataset.itemId);
};

const toggleSelectedDecorItemById = (itemId) => {
  const item = getDecorItem(itemId);
  if (!item || item.placed || gameState.currentScene !== "tiangeDecor") return;

  gameState.selectedDecorItemId = gameState.selectedDecorItemId === itemId ? null : itemId;
  saveGameState();
  updateTiangeDecorUi();
};

const startDecorDragFromHotbar = (event) => {
  const slot = event.currentTarget;
  const itemId = slot.dataset.itemId;
  const item = getDecorItem(itemId);
  if (!item || item.placed || gameState.currentScene !== "tiangeDecor") return;

  event.preventDefault();
  const ghost = document.createElement("div");
  ghost.className = "decor-drag-ghost";
  ghost.textContent = item.label;
  document.body.append(ghost);
  decorDrag = {
    pointerId: event.pointerId,
    itemId,
    ghost,
    startX: event.clientX,
    startY: event.clientY,
    moved: false,
  };
  slot.setPointerCapture?.(event.pointerId);
  moveDecorGhost(event);
};

const moveDecorGhost = (event) => {
  if (!decorDrag || decorDrag.pointerId !== event.pointerId) return;
  event.preventDefault();
  decorDrag.moved = decorDrag.moved || Math.hypot(event.clientX - decorDrag.startX, event.clientY - decorDrag.startY) > 6;
  decorDrag.ghost.style.left = `${event.clientX}px`;
  decorDrag.ghost.style.top = `${event.clientY}px`;
  getTiangeDecorStage()?.classList.toggle("drag-over", Boolean(pointInTiangeImage(event.clientX, event.clientY)));
};

const endDecorDrag = (event) => {
  if (!decorDrag || decorDrag.pointerId !== event.pointerId) return;
  const wasMoved = decorDrag.moved;
  if (wasMoved && pointInTiangeImage(event.clientX, event.clientY)) {
    placeTiangeDecorationAtClientPoint(decorDrag.itemId, event.clientX, event.clientY);
    suppressNextDecorSlotClick();
  } else if (!wasMoved) {
    toggleSelectedDecorItemById(decorDrag.itemId);
    suppressNextDecorSlotClick();
  }
  getTiangeDecorStage()?.classList.remove("drag-over");
  decorDrag.ghost.remove();
  decorDrag = null;
};

const pointInRect = (rect, x, y) => {
  if (!rect) return false;
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
};

const pointInTiangeImage = (x, y) => pointInRect(getTiangeImageRect(), x, y);

const getTiangeImagePercentPoint = (clientX, clientY) => {
  const rect = getTiangeImageRect();
  if (!rect || !pointInRect(rect, clientX, clientY)) return null;
  return {
    xPercent: clamp(((clientX - rect.left) / rect.width) * 100, 0, 100),
    yPercent: clamp(((clientY - rect.top) / rect.height) * 100, 0, 100),
  };
};

const placeSelectedDecorFromClick = (event) => {
  if (decorDrag || !gameState.selectedDecorItemId || gameState.currentScene !== "tiangeDecor") return;
  placeTiangeDecorationAtClientPoint(gameState.selectedDecorItemId, event.clientX, event.clientY);
};

const placeTiangeDecorationAtClientPoint = (itemId, clientX, clientY) => {
  const point = getTiangeImagePercentPoint(clientX, clientY);
  if (!point) return false;
  placeTiangeDecoration(itemId, point.xPercent, point.yPercent);
  return true;
};

const placeTiangeDecoration = (itemId, xPercent, yPercent) => {
  const itemToPlace = getDecorItem(itemId);
  if (!itemToPlace || itemToPlace.placed) return;

  gameState.decorItems = syncTiangeDecorationState().map((item) =>
    item.id === itemId
      ? {
          ...item,
          placed: true,
          xPercent: clamp(Number(xPercent), 0, 100),
          yPercent: clamp(Number(yPercent), 0, 100),
          rotation: Math.round(Math.random() * 22 - 11),
          scale: Math.round((0.92 + Math.random() * 0.22) * 100) / 100,
        }
      : item,
  );
  gameState.tiangeDecorations = gameState.decorItems;
  gameState.selectedDecorItemId = null;
  const inventoryItem = gameState.inventory.find((item) => item.id === itemId);
  if (inventoryItem) inventoryItem.placed = true;
  gameState.inventory = gameState.inventory.filter((item) => item.id !== itemId);
  syncTiangeDecorationState();
  saveGameState();
  updateTiangeDecorUi();
  showToast("贴上去了。", 1000);

  if (getPlacedDecorCount() >= 5) {
    showTiangeDecorComplete();
  }
};

const resetTiangeDecorations = () => {
  gameState.decorItems = normalizeDecorItems(null);
  gameState.tiangeDecorations = normalizeDecorItems(null);
  gameState.tiangeDecorAllPlaced = false;
  gameState.tiangeDecorCompleted = false;
  gameState.selectedDecorItemId = null;
  gameState.currentScene = "tiangeDecor";
  gameState.cameraTarget = null;
  removeTiangeDecorInventoryItems();
  giveTiangeDecorItems();
  updateTiangeDecorUi();
  saveGameState();
  showToast("可以重新摆放了。", 1200);
};

const showTiangeDecorComplete = () => {
  if (gameState.tiangeDecorCompleted && gameState.currentScene === "tiangeDecorPhoto") return;
  gameState.tiangeDecorAllPlaced = true;
  gameState.tiangeDecorCompleted = true;
  gameState.currentScene = "tiangeDecorPhoto";
  gameState.cameraTarget = {
    id: "tiange-decorated-photo",
    title: "被装饰的舔哥",
    image: tiangeDecorImagePath,
    scene: "tiangeDecorated",
  };
  removeTiangeDecorInventoryItems();
  saveGameState();
  const hint = classroomPanel.querySelector("#tiangeDecorHint");
  if (hint) hint.textContent = "装饰完成。罗罗让你赶紧给舔哥拍一张。";
  const progress = document.querySelector("#decorProgress");
  if (progress) progress.textContent = "已装饰：5 / 5";
  updateTiangeDecorUi();
  showToast("装饰完成！", 1800);
  updatePhonePayGuide();
};

const showTiangeNapEnd = async () => {
  if (gameState.currentScene === "tiangeNapEnd") return;
  gameState.currentScene = "tiangeNapEnd";
  gameState.tiangePhotoTaken = true;
  gameState.tiangeDecorSceneCompleted = true;
  gameState.cameraTarget = null;
  saveGameState();
  updatePhonePayGuide(false);
  removeTiangeDecorStage();
  classroomPanel.classList.remove("tiange-mini-panel");
  classroomPanel.innerHTML = `
    <p class="scene-label">教室 · 午休结束</p>
    <h2>教室 · 午休结束</h2>
    <p>笑闹声慢慢散下去，大家总算把舔哥从“装饰品展示架”的状态里放了出来。</p>
    <p>午休时间也在不知不觉中走到了尾声。有人回到座位上整理书本，有人还在压着笑声讨论刚才那张照片。教室重新变回上课前熟悉的样子。</p>
    <p>下一节课要开始了。第一节是 Brin 的外教课。</p>
    <button class="primary-button" id="startBrinClassButton" type="button">开始上课</button>
  `;
  classroomPanel.querySelector("#startBrinClassButton").addEventListener("click", showBrinClassIntro);
  await showScreen(classroomScreen, "classroom-background");
};

const showBrinClassIntro = async () => {
  gameState.currentScene = "brinClassIntro";
  gameState.currentClass = "BrinEnglish";
  gameState.currentTeacher = "Brin";
  gameState.brinGameScores = normalizeBrinScores(gameState.brinGameScores);
  saveGameState();
  classroomPanel.classList.add("tiange-mini-panel", "brin-mini-panel");
  classroomPanel.innerHTML = `
    <p class="scene-label">下午第一节 · 外教课</p>
    <p class="mini-story-text" id="brinStoryText"></p>
    <button class="mini-continue" id="brinContinueButton" type="button">继续</button>
  `;
  await showScreen(classroomScreen, "brin-opening-background");
  await runBrinStorySequence(
    [
      "Brin 走进教室，很快就在黑板上画起了东西。",
      "几笔之后，一幅风格相当奇怪的画出现在黑板上。",
      "教室安静了一秒，随后大家一起笑了出来。",
      "Brin 回过头，似乎对这个反应非常满意。",
      "Brin：“Good. At least everyone is awake now.”",
      "Brin：“Since you all seem interested in drawing, let’s play a game.”",
      "Brin：“Draw and guess.”",
    ],
    showBrinGroupingScene,
    "开始分组",
  );
};

const showBrinPlaceholder = () => {
  showBrinClassIntro();
};

const renderBrinScoreboard = () => {
  document.querySelector("#brinScoreboard")?.remove();
  const scores = normalizeBrinScores(gameState.brinGameScores);
  const board = document.createElement("div");
  board.className = "brin-scoreboard";
  board.id = "brinScoreboard";
  board.textContent = `A组 ${scores.A} | B组 ${scores.B} | C组 ${scores.C}`;
  classroomScreen.append(board);
};

const removeBrinScoreboard = () => {
  document.querySelector("#brinScoreboard")?.remove();
};

const typeBrinMiniText = async (text, selector = "#brinStoryText") => {
  const node = document.querySelector(selector);
  if (!node) return;
  node.textContent = "";
  for (const char of text) {
    node.textContent += char;
    await sleep(18);
  }
};

const runBrinStorySequence = async (lines, onDone, finalButtonText = "继续") => {
  const button = classroomPanel.querySelector("#brinContinueButton");
  if (!button) return;
  let index = 0;
  const showLine = async () => {
    button.disabled = true;
    await typeBrinMiniText(lines[index]);
    button.disabled = false;
    button.textContent = index >= lines.length - 1 ? finalButtonText : "继续";
  };
  button.onclick = async () => {
    if (button.disabled) return;
    index += 1;
    if (index >= lines.length) {
      onDone?.();
      return;
    }
    await showLine();
  };
  await showLine();
};

const showBrinGroupingScene = async () => {
  gameState.currentScene = "brinGrouping";
  gameState.brinGroupingViewed = true;
  gameState.currentClass = "BrinEnglish";
  gameState.currentTeacher = "Brin";
  saveGameState();
  classroomPanel.classList.add("tiange-mini-panel", "brin-mini-panel");
  classroomPanel.innerHTML = `
    <p class="scene-label">外教课 · 分组</p>
    <p class="mini-story-text" id="brinStoryText">Brin 把整个班分成了三个小组。</p>
    <p class="brin-player-group">你是 A组成员</p>
    <button class="mini-continue" id="startBrinRoundOneButton" type="button">开始第一轮</button>
  `;
  await showScreen(classroomScreen, "brin-classroom-background");
  renderBrinScoreboard();
  renderBrinGroupMarkers();
  await sleep(250);
  await typeBrinMiniText("Brin 把整个班分成了三个小组。");
  await sleep(450);
  await typeBrinMiniText("B组在 seewo 左侧，C组在右侧，而你被分到了 A组。");
  classroomPanel.querySelector("#startBrinRoundOneButton").addEventListener("click", startBrinRoundOne);
};

const renderBrinGroupMarkers = () => {
  document.querySelector("#brinGroupLayer")?.remove();
  const layer = document.createElement("div");
  layer.className = "brin-group-layer";
  layer.id = "brinGroupLayer";
  layer.innerHTML = ["A", "B", "C"]
    .map(
      (group) => `
        <button class="brin-group-marker brin-group-${group.toLowerCase()}" type="button" data-brin-group="${group}">
          <span>${group}</span>
          <section class="brin-group-card hidden" id="brinGroupCard${group}">
            <strong>${group}组</strong>
            <p>组长：${brinGroups[group].leader}</p>
            <p>成员：${brinGroups[group].members.join("、")}</p>
          </section>
        </button>
      `,
    )
    .join("");
  classroomScreen.append(layer);
  layer.querySelectorAll("[data-brin-group]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.querySelector(".brin-group-card");
      layer.querySelectorAll(".brin-group-card").forEach((candidate) => {
        if (candidate !== card) candidate.classList.add("hidden");
      });
      card?.classList.toggle("hidden");
    });
  });
};

const removeBrinGroupMarkers = () => {
  document.querySelector("#brinGroupLayer")?.remove();
};

const startBrinRoundOne = async () => {
  removeBrinGroupMarkers();
  gameState.currentScene = "brinRoundOneWord";
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">外教课 · 第一轮</p>
    <p class="mini-story-text" id="brinStoryText"></p>
    <button class="mini-continue" id="brinContinueButton" type="button">继续</button>
  `;
  await runBrinStorySequence(
    ["第一轮抽签开始。", "你很不幸地被抽中了。", "Brin：“Your word is…”"],
    showBrinSeasonWord,
    "查看单词",
  );
};

const showBrinSeasonWord = async () => {
  classroomPanel.innerHTML = `
    <p class="scene-label">外教课 · 第一轮</p>
    <p class="mini-story-text">只有你看得到这个词。</p>
    <div class="brin-word-card">season</div>
  `;
  await sleep(2200);
  showBrinDrawingBoard();
};

const showBrinDrawingBoard = () => {
  gameState.currentScene = "brinRoundOneDrawing";
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">外教课 · 第一轮</p>
    <p class="mini-story-text" id="brinStoryText">用黑色画笔画出 season。</p>
  `;
  renderBrinCanvasBoard();
};

const renderBrinCanvasBoard = () => {
  document.querySelector("#brinCanvasBoard")?.remove();
  const board = document.createElement("section");
  board.className = "brin-whiteboard brin-canvas-board";
  board.id = "brinCanvasBoard";
  board.innerHTML = `
    <canvas id="brinDrawingCanvas" aria-label="你画我猜白板"></canvas>
    <div class="brin-board-actions">
      <button class="secondary-button" id="clearBrinCanvasButton" type="button">清空</button>
      <button class="primary-button" id="submitBrinCanvasButton" type="button">确认提交</button>
    </div>
  `;
  classroomScreen.append(board);
  initBrinDrawingCanvas();
  board.querySelector("#clearBrinCanvasButton").addEventListener("click", clearBrinDrawingCanvas);
  board.querySelector("#submitBrinCanvasButton").addEventListener("click", submitBrinDrawing);
};

const initBrinDrawingCanvas = () => {
  const canvas = document.querySelector("#brinDrawingCanvas");
  if (!canvas) return;
  const context = canvas.getContext("2d");
  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.round(rect.width * ratio));
    canvas.height = Math.max(1, Math.round(rect.height * ratio));
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.fillStyle = "#fff";
    context.fillRect(0, 0, rect.width, rect.height);
    context.lineWidth = 4;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = "#111";
  };
  resize();
  brinCanvasState = { canvas, context, drawing: false, lastX: 0, lastY: 0, hasDrawn: false };
  canvas.addEventListener("pointerdown", startBrinCanvasStroke);
  canvas.addEventListener("pointermove", drawBrinCanvasStroke);
  canvas.addEventListener("pointerup", endBrinCanvasStroke);
  canvas.addEventListener("pointercancel", endBrinCanvasStroke);
};

const getBrinCanvasPoint = (event) => {
  const rect = brinCanvasState.canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
};

const startBrinCanvasStroke = (event) => {
  if (!brinCanvasState) return;
  event.preventDefault();
  brinCanvasState.canvas.setPointerCapture?.(event.pointerId);
  const point = getBrinCanvasPoint(event);
  brinCanvasState.drawing = true;
  brinCanvasState.lastX = point.x;
  brinCanvasState.lastY = point.y;
};

const drawBrinCanvasStroke = (event) => {
  if (!brinCanvasState?.drawing) return;
  event.preventDefault();
  const point = getBrinCanvasPoint(event);
  brinCanvasState.context.beginPath();
  brinCanvasState.context.moveTo(brinCanvasState.lastX, brinCanvasState.lastY);
  brinCanvasState.context.lineTo(point.x, point.y);
  brinCanvasState.context.stroke();
  brinCanvasState.lastX = point.x;
  brinCanvasState.lastY = point.y;
  brinCanvasState.hasDrawn = true;
};

const endBrinCanvasStroke = (event) => {
  if (!brinCanvasState) return;
  event.preventDefault();
  brinCanvasState.drawing = false;
};

const clearBrinDrawingCanvas = () => {
  if (!brinCanvasState) return;
  const rect = brinCanvasState.canvas.getBoundingClientRect();
  brinCanvasState.context.fillStyle = "#fff";
  brinCanvasState.context.fillRect(0, 0, rect.width, rect.height);
  brinCanvasState.context.strokeStyle = "#111";
  brinCanvasState.hasDrawn = false;
};

const submitBrinDrawing = async () => {
  const board = document.querySelector("#brinCanvasBoard");
  board?.classList.add("submitted");
  board?.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
  });
  await playBrinRoundOneResult();
};

const playBrinRoundOneResult = async () => {
  const lines = [
    "罗罗：“我猜是environment。”",
    "Brin：“Very close, but no.”",
    "高原：“我知道了，是season。”",
    "Brin：“Bingo! You earned one score.”",
    "A组 +1分",
  ];
  for (const line of lines) {
    await typeBrinMiniText(line);
    await sleep(950);
  }
  if (!gameState.brinRoundOneCompleted) {
    gameState.brinGameScores = normalizeBrinScores(gameState.brinGameScores);
    gameState.brinGameScores.A += 1;
    gameState.brinRoundOneCompleted = true;
    saveGameState();
    renderBrinScoreboard();
    showToast("A组获得1分。", 1500);
  }
  const button = document.createElement("button");
  button.className = "mini-continue";
  button.type = "button";
  button.textContent = "进入第二轮";
  button.addEventListener("click", startBrinRoundTwo);
  classroomPanel.append(button);
};

const startBrinRoundTwo = async () => {
  document.querySelector("#brinCanvasBoard")?.remove();
  brinCanvasState = null;
  gameState.currentScene = "brinRoundTwo";
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">外教课 · 第二轮</p>
    <p class="mini-story-text" id="brinStoryText"></p>
  `;
  await typeBrinMiniText("第二轮轮到 B组出题。");
  await sleep(700);
  await typeBrinMiniText("罗罗走到了白板前。");
  await sleep(700);
  showBrinGuessBoard();
};

const showBrinGuessBoard = () => {
  document.querySelector("#brinGuessBoard")?.remove();
  const board = document.createElement("section");
  board.className = "brin-whiteboard brin-guess-board";
  board.id = "brinGuessBoard";
  board.innerHTML = `
    <div class="brin-guess-image-frame">
      <img src="${brinDrawGuessImagePath}" alt="你画我猜题目图" onerror="this.parentElement.dataset.fallback='true';" />
      <span>图片缺失</span>
    </div>
    <div class="brin-answer-options">
      ${[
        ["A", "journey"],
        ["B", "voyage"],
        ["C", "trip"],
        ["D", "route"],
      ]
        .map(
          ([key, text]) => `<button type="button" data-brin-answer="${key}">${key}. ${text}</button>`,
        )
        .join("")}
    </div>
  `;
  classroomScreen.append(board);
  typeBrinMiniText("嗯……让我猜猜……");
  board.querySelectorAll("[data-brin-answer]").forEach((button) => {
    button.addEventListener("click", () => handleBrinRoundTwoAnswer(button.dataset.brinAnswer));
  });
};

const handleBrinRoundTwoAnswer = async (answer) => {
  if (gameState.brinRoundTwoCompleted) return;
  const board = document.querySelector("#brinGuessBoard");
  board?.querySelectorAll("[data-brin-answer]").forEach((button) => {
    button.disabled = true;
    button.classList.toggle("selected", button.dataset.brinAnswer === answer);
  });
  gameState.brinRoundTwoCompleted = true;
  gameState.brinRoundTwoAnswer = answer;
  const correct = answer === "C";
  if (correct) {
    gameState.brinGameScores = normalizeBrinScores(gameState.brinGameScores);
    gameState.brinGameScores.A += 1;
    saveGameState();
    renderBrinScoreboard();
    showToast("A组再次获得1分。", 1500);
    await showBrinFeedback(["Brin：“Congratulations! You got one point.”"]);
  } else {
    saveGameState();
    await showBrinFeedback([
      "Brin：“Very close, but the answer is trip.”",
      "Brin：“As you see, the vacation only lasts three days.”",
      "Brin：“‘Trip’ usually refers to a relatively short journey，具有‘短途出行’的含义。”",
    ]);
  }
  const button = document.createElement("button");
  button.className = "mini-continue";
  button.type = "button";
  button.textContent = "继续上课";
  button.addEventListener("click", showBrinGhostStory);
  classroomPanel.append(button);
};

const showBrinFeedback = async (lines) => {
  document.querySelector("#brinFeedback")?.remove();
  const box = document.createElement("section");
  box.className = "brin-feedback";
  box.id = "brinFeedback";
  classroomScreen.append(box);
  for (const line of lines) {
    box.textContent = line;
    await sleep(1150);
  }
};

const showBrinGhostStory = async () => {
  document.querySelector("#brinGuessBoard")?.remove();
  document.querySelector("#brinFeedback")?.remove();
  gameState.currentScene = "brinGhostStory";
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">外教课 · 校园传说</p>
    <p class="mini-story-text" id="brinStoryText"></p>
    <button class="mini-continue" id="brinContinueButton" type="button">继续</button>
  `;
  await runBrinStorySequence(
    [
      "游戏结束后，Brin 没有立刻继续课本内容。",
      "他靠在讲台旁，忽然压低了声音。",
      "Brin：“Before class ends, let me tell you a story.”",
      "Brin：“You know the little forest near the school pond?”",
      "Brin 说，学校小树林附近的池塘里一直生活着两只黑天鹅。",
      "传说它们并不只是普通的黑天鹅。",
      "很久以前，学校里曾经有两位学姐。后来，她们的身影消失在了那片小树林附近。",
      "从那以后，池塘里便多出了两只总是形影不离的黑天鹅。",
      "有人说，在傍晚经过池塘时，会听见水面上传来很轻的声音。",
      "也有人说，那两只黑天鹅会一直注视着经过树林的人。",
    ],
    showBrinHorseshoeScene,
    "继续",
  );
};

const showBrinHorseshoeScene = async () => {
  gameState.brinGhostStoryCompleted = true;
  gameState.currentScene = "brinHorseshoe";
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">外教课 · 门边</p>
    <p class="mini-story-text" id="brinStoryText"></p>
    <button class="mini-continue" id="brinContinueButton" type="button">继续</button>
  `;
  await runBrinStorySequence(
    [
      "教室安静了几秒。",
      "Brin 转过身，拿起一支粉笔，走到了门边。",
      "Brin：“To be safe, we need some protection.”",
    ],
    drawBrinHorseshoe,
    "看向门边",
  );
};

const drawBrinHorseshoe = async () => {
  if (!document.querySelector("#brinHorseshoe")) {
    const mark = document.createElement("div");
    mark.className = "brin-horseshoe";
    mark.id = "brinHorseshoe";
    mark.innerHTML = `
      <svg viewBox="0 0 120 140" aria-hidden="true">
        <path d="M25 32 C25 10 95 10 95 32 L95 92 C95 120 75 132 60 132 C45 132 25 120 25 92 Z" />
      </svg>
    `;
    classroomScreen.append(mark);
  }
  gameState.brinHorseshoeDrawn = true;
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">外教课 · 门边</p>
    <p class="mini-story-text" id="brinStoryText"></p>
    <button class="mini-continue" id="brinContinueButton" type="button">继续</button>
  `;
  await runBrinStorySequence(
    [
      "Brin：“A horseshoe brings good luck.”",
      "Brin 声称，这个画在门上的马蹄铁可以辟邪。",
      "有人忍不住笑了出来，也有人下意识朝教室门外看了一眼。",
      "马蹄铁安静地留在门上，像这堂课最后一个奇怪的标点。",
    ],
    showBrinClassEnd,
    "外教课结束",
  );
};

const showBrinClassEnd = async () => {
  gameState.brinClassCompleted = true;
  gameState.currentScene = "brinClassEnd";
  saveGameState();
  removeBrinScoreboard();
  document.querySelector("#brinHorseshoe")?.remove();
  classroomPanel.classList.add("tiange-mini-panel", "brin-mini-panel");
  classroomPanel.innerHTML = `
    <p class="scene-label">教室 · 下一节课前</p>
    <p class="mini-story-text" id="brinStoryText"></p>
    <button class="mini-continue" id="enterMathClassButton" type="button">进入数学课</button>
  `;
  await showScreen(classroomScreen, "brin-next-classroom-background");
  await typeBrinMiniText("下课铃响起，Brin 收起东西离开了教室。");
  await sleep(650);
  await typeBrinMiniText("白板上的画、刚才的游戏和那个关于黑天鹅的传说，还留在大家的议论里。");
  await sleep(650);
  await typeBrinMiniText("下一节是数学课。");
  classroomPanel.querySelector("#enterMathClassButton").addEventListener("click", showMathPlaceholder);
};

const showMathPlaceholder = () => {
  showMathClassIntro();
};

const showMathClassIntro = async () => {
  stopMathPuzzleTimer();
  removeMathPuzzleBoard();
  removeQianModeHotspot();
  mathTeacherClickCount = 0;
  gameState.mathPuzzleQianMode = false;
  gameState.currentScene = "mathClass";
  gameState.currentClass = "Math";
  gameState.currentTeacher = "钱俊豪老师";
  saveGameState();
  classroomPanel.classList.add("tiange-mini-panel", "brin-mini-panel");
  classroomPanel.innerHTML = `
    <p class="scene-label">下午第二节 · 数学课</p>
    <p class="mini-story-text" id="mathStoryText"></p>
    <button class="mini-continue" id="mathContinueButton" type="button">继续</button>
  `;
  await showScreen(classroomScreen, "math-class-background");
  renderQianModeHotspot();
  await runMathStorySequence(
    [
      "下一节是钱俊豪老师的数学课。",
      "钱俊豪走到讲台前，打开了教室电脑。",
      "他熟练地登录百度网盘，从里面翻出了今天的数学课件。",
      "课件刚打开，他却没有立刻开始讲题，反而转过身看了大家一眼。",
      "钱俊豪：“我们来玩一个游戏，叫数字华容道吧。”",
      "钱俊豪：“如果你们能在60秒内解出来，我就不给你们布置回家作业。”",
      "钱俊豪：“哦不对，我们本来就没有回家作业。”",
      "钱俊豪：“这是课堂作业，只不过有的同学做不完，就得下课留下来继续做。”",
      "教室里安静了一秒。",
      "钱俊豪露出了一个让人不太放心的笑容。",
    ],
    startMathPuzzleScene,
    "开始数字华容道",
    6,
  );
};

const removeQianModeHotspot = () => {
  document.querySelector("#qianModeHotspot")?.remove();
};

const triggerQianMode = () => {
  if (gameState.mathPuzzleQianMode) return;
  gameState.mathPuzzleQianMode = true;
  saveGameState();
  unlockEasterEgg("qianMode", gameState.currentScene);
  showToast("钱俊豪：怎么全变成钱了……继续玩吧。", 2400);
  document.querySelector("#qianModeHotspot")?.classList.add("activated");
};

const renderQianModeHotspot = () => {
  removeQianModeHotspot();
  const hotspot = document.createElement("button");
  hotspot.id = "qianModeHotspot";
  hotspot.className = "qian-mode-hotspot";
  hotspot.type = "button";
  hotspot.setAttribute("aria-label", "钱俊豪老师");
  hotspot.textContent = "钱俊豪";
  hotspot.addEventListener("click", () => {
    mathTeacherClickCount += 1;
    hotspot.classList.add("clicked");
    window.setTimeout(() => hotspot.classList.remove("clicked"), 180);
    if (mathTeacherClickCount >= 3) triggerQianMode();
  });
  classroomScreen.append(hotspot);
};

const typeMathMiniText = async (text) => {
  const node = document.querySelector("#mathStoryText");
  if (!node) return;
  node.textContent = "";
  for (const char of text) {
    node.textContent += char;
    await sleep(18);
  }
};

const runMathStorySequence = async (lines, onDone, finalButtonText = "继续", pauseAfterIndex = null) => {
  const button = classroomPanel.querySelector("#mathContinueButton");
  if (!button) return;
  let index = 0;
  const showLine = async () => {
    button.disabled = true;
    await typeMathMiniText(lines[index]);
    if (index === pauseAfterIndex) await sleep(800);
    button.textContent = index >= lines.length - 1 ? finalButtonText : "继续";
    button.disabled = false;
  };
  button.onclick = async () => {
    if (button.disabled) return;
    index += 1;
    if (index >= lines.length) {
      onDone?.();
      return;
    }
    await showLine();
  };
  await showLine();
};

const getPuzzleAdjacentIndexes = (blankIndex) => {
  const row = Math.floor(blankIndex / MATH_PUZZLE_SIZE);
  const col = blankIndex % MATH_PUZZLE_SIZE;
  return [
    row > 0 ? blankIndex - MATH_PUZZLE_SIZE : null,
    row < MATH_PUZZLE_SIZE - 1 ? blankIndex + MATH_PUZZLE_SIZE : null,
    col > 0 ? blankIndex - 1 : null,
    col < MATH_PUZZLE_SIZE - 1 ? blankIndex + 1 : null,
  ].filter((index) => index !== null);
};

const isPuzzleSolved = (board = gameState.mathPuzzleBoard) => {
  const solved = createSolvedPuzzle();
  return solved.every((value, index) => board[index] === value);
};

const shufflePuzzleByLegalMoves = (moveCount = 120) => {
  let board = createSolvedPuzzle();
  let previousBlank = -1;
  for (let move = 0; move < moveCount; move += 1) {
    const blankIndex = board.indexOf(null);
    const options = getPuzzleAdjacentIndexes(blankIndex).filter((index) => index !== previousBlank);
    const movableIndex = options[Math.floor(Math.random() * options.length)] ?? getPuzzleAdjacentIndexes(blankIndex)[0];
    [board[blankIndex], board[movableIndex]] = [board[movableIndex], board[blankIndex]];
    previousBlank = blankIndex;
  }
  if (isPuzzleSolved(board)) return shufflePuzzleByLegalMoves(moveCount + 7);
  return board;
};

const getMovableTileIndexes = () => getPuzzleAdjacentIndexes(gameState.mathPuzzleBoard.indexOf(null));

const startMathPuzzleScene = async () => {
  stopMathPuzzleTimer();
  removeQianModeHotspot();
  gameState.currentScene = "mathPuzzle";
  gameState.currentClass = "Math";
  gameState.currentTeacher = "钱俊豪老师";
  gameState.mathPuzzleStarted = true;
  gameState.mathPuzzleCompleted = false;
  gameState.mathPuzzleResult = null;
  gameState.mathPuzzleTimeLeft = MATH_PUZZLE_SECONDS;
  gameState.mathPuzzleMoves = 0;
  gameState.mathPuzzleBoard = shufflePuzzleByLegalMoves(110 + Math.floor(Math.random() * 31));
  gameState.mathPuzzleStartedAt = Date.now();
  gameState.mathPuzzleAnimating = false;
  saveGameState();
  classroomPanel.classList.add("tiange-mini-panel", "brin-mini-panel");
  classroomPanel.innerHTML = `
    <p class="scene-label">数字华容道</p>
    <p class="mini-story-text" id="mathStoryText">将数字恢复为1—15的正确顺序。只能移动空白格旁边的数字。</p>
  `;
  await showScreen(classroomScreen, "math-class-background");
  renderMathPuzzle();
  startMathPuzzleTimer();
};

const removeMathPuzzleBoard = () => {
  document.querySelector("#mathPuzzleWrap")?.remove();
  document.querySelector("#mathPuzzleTimer")?.remove();
  removeQianModeHotspot();
};

const renderMathPuzzle = () => {
  removeMathPuzzleBoard();
  const wrap = document.createElement("section");
  wrap.className = `math-puzzle-wrap ${gameState.mathPuzzleQianMode ? "qian-mode" : ""}`;
  wrap.id = "mathPuzzleWrap";
  wrap.innerHTML = `
    <div class="math-puzzle-card">
      <h2>数字华容道</h2>
      <p>将数字恢复为1—15的正确顺序。只能移动空白格旁边的数字。</p>
      <div class="math-puzzle-grid" id="mathPuzzleGrid"></div>
      <div class="math-puzzle-meta">
        <span id="mathMoveCount">移动次数：${gameState.mathPuzzleMoves}</span>
      </div>
      <div class="math-puzzle-result hidden" id="mathPuzzleResult"></div>
    </div>
  `;
  const timer = document.createElement("aside");
  timer.className = "math-puzzle-timer";
  timer.id = "mathPuzzleTimer";
  timer.innerHTML = `<span>剩余时间</span><strong id="mathTimeLeft">${gameState.mathPuzzleTimeLeft}</strong><em>秒</em>`;
  classroomScreen.append(timer, wrap);
  updateMathPuzzleGrid();
  window.addEventListener("keydown", handleMathPuzzleKey);
};

const updateMathPuzzleGrid = (animation = null) => {
  const grid = document.querySelector("#mathPuzzleGrid");
  if (!grid) return;
  const movable = new Set(getMovableTileIndexes());
  grid.innerHTML = gameState.mathPuzzleBoard
    .map((value, index) =>
      value === null
        ? `<button class="math-tile empty" type="button" aria-label="空白格" data-index="${index}" disabled></button>`
        : `<button class="math-tile ${movable.has(index) && !gameState.mathPuzzleCompleted ? "movable" : ""}" type="button" data-index="${index}" data-value="${value}" ${gameState.mathPuzzleCompleted || gameState.mathPuzzleAnimating ? "disabled" : ""}>${gameState.mathPuzzleQianMode ? "钱" : value}</button>`,
    )
    .join("");
  grid.querySelectorAll(".math-tile:not(.empty)").forEach((tile) => {
    tile.addEventListener("click", () => {
      if (suppressNextMathPuzzleClick) {
        suppressNextMathPuzzleClick = false;
        return;
      }
      const moved = movePuzzleTile(Number(tile.dataset.index));
      if (!moved) showInvalidPuzzleMove(tile);
    });
    tile.addEventListener("pointerdown", startMathPuzzlePointer);
    tile.addEventListener("pointerup", endMathPuzzlePointer);
    tile.addEventListener("pointercancel", () => {
      mathPuzzlePointer = null;
    });
  });
  const moves = document.querySelector("#mathMoveCount");
  if (moves) moves.textContent = `移动次数：${gameState.mathPuzzleMoves}`;

  if (animation) animatePuzzleTile(animation);
};

const arePuzzleIndexesAdjacent = (a, b) => getPuzzleAdjacentIndexes(b).includes(a);

const movePuzzleTile = (index) => {
  if (gameState.mathPuzzleCompleted || gameState.mathPuzzleAnimating || gameState.currentScene !== "mathPuzzle") return false;
  const blankIndex = gameState.mathPuzzleBoard.indexOf(null);
  if (!arePuzzleIndexesAdjacent(index, blankIndex)) return false;
  const movingValue = gameState.mathPuzzleBoard[index];
  const tile = document.querySelector(`.math-tile[data-index="${index}"]`);
  const fromRect = tile?.getBoundingClientRect();
  [gameState.mathPuzzleBoard[index], gameState.mathPuzzleBoard[blankIndex]] = [
    gameState.mathPuzzleBoard[blankIndex],
    gameState.mathPuzzleBoard[index],
  ];
  gameState.mathPuzzleMoves += 1;
  gameState.mathPuzzleAnimating = true;
  saveGameState();
  updateMathPuzzleGrid({ value: movingValue, fromRect });
  window.setTimeout(() => {
    if (gameState.currentScene !== "mathPuzzle" || gameState.mathPuzzleCompleted) return;
    gameState.mathPuzzleAnimating = false;
    saveGameState();
    updateMathPuzzleGrid();
    if (isPuzzleSolved()) finishMathPuzzle("success");
  }, TILE_MOVE_DURATION + 20);
  return true;
};

const animatePuzzleTile = ({ value, fromRect }) => {
  if (!fromRect) return;
  const tile = document.querySelector(`.math-tile[data-value="${value}"]`);
  if (!tile) return;
  const toRect = tile.getBoundingClientRect();
  const dx = fromRect.left - toRect.left;
  const dy = fromRect.top - toRect.top;
  tile.classList.add("sliding");
  tile.style.transition = "none";
  tile.style.transform = `translate(${dx}px, ${dy}px)`;
  window.requestAnimationFrame(() => {
    tile.style.transition = `transform ${TILE_MOVE_DURATION}ms ease`;
    tile.style.transform = "translate(0, 0)";
  });
};

const showInvalidPuzzleMove = (tile) => {
  if (!tile || gameState.mathPuzzleCompleted || gameState.mathPuzzleAnimating) return;
  tile.classList.remove("invalid");
  void tile.offsetWidth;
  tile.classList.add("invalid");
  window.setTimeout(() => tile.classList.remove("invalid"), 220);
};

const startMathPuzzlePointer = (event) => {
  if (gameState.mathPuzzleCompleted || gameState.mathPuzzleAnimating) return;
  const index = Number(event.currentTarget.dataset.index);
  event.currentTarget.setPointerCapture?.(event.pointerId);
  mathPuzzlePointer = { index, x: event.clientX, y: event.clientY };
};

const endMathPuzzlePointer = (event) => {
  if (!mathPuzzlePointer) return;
  const { index, x, y } = mathPuzzlePointer;
  mathPuzzlePointer = null;
  const dx = event.clientX - x;
  const dy = event.clientY - y;
  if (Math.hypot(dx, dy) < SWIPE_THRESHOLD) return;
  const blankIndex = gameState.mathPuzzleBoard.indexOf(null);
  if (!arePuzzleIndexesAdjacent(index, blankIndex)) return;
  const expectedDx = (blankIndex % MATH_PUZZLE_SIZE) - (index % MATH_PUZZLE_SIZE);
  const expectedDy = Math.floor(blankIndex / MATH_PUZZLE_SIZE) - Math.floor(index / MATH_PUZZLE_SIZE);
  const horizontal = Math.abs(dx) > Math.abs(dy);
  const swipedTowardBlank =
    (horizontal && Math.sign(dx) === Math.sign(expectedDx) && expectedDx !== 0) ||
    (!horizontal && Math.sign(dy) === Math.sign(expectedDy) && expectedDy !== 0);
  if (swipedTowardBlank) {
    suppressNextMathPuzzleClick = true;
    window.setTimeout(() => {
      suppressNextMathPuzzleClick = false;
    }, 80);
    movePuzzleTile(index);
  }
};

const handleMathPuzzleKey = (event) => {
  if (gameState.currentScene !== "mathPuzzle" || gameState.mathPuzzleCompleted || gameState.mathPuzzleAnimating) return;
  const blankIndex = gameState.mathPuzzleBoard.indexOf(null);
  const keyMap = {
    ArrowUp: blankIndex + MATH_PUZZLE_SIZE,
    ArrowDown: blankIndex - MATH_PUZZLE_SIZE,
    ArrowLeft: blankIndex + 1,
    ArrowRight: blankIndex - 1,
  };
  if (!(event.key in keyMap)) return;
  event.preventDefault();
  const index = keyMap[event.key];
  if (index >= 0 && index < 16) movePuzzleTile(index);
};

const startMathPuzzleTimer = () => {
  stopMathPuzzleTimer();
  updateMathPuzzleTimer();
  mathPuzzleTimer = window.setInterval(updateMathPuzzleTimer, 1000);
};

const stopMathPuzzleTimer = () => {
  if (mathPuzzleTimer) {
    window.clearInterval(mathPuzzleTimer);
    mathPuzzleTimer = null;
  }
  window.removeEventListener("keydown", handleMathPuzzleKey);
};

const updateMathPuzzleTimer = () => {
  if (gameState.currentScene !== "mathPuzzle" || gameState.mathPuzzleCompleted) {
    stopMathPuzzleTimer();
    return;
  }
  const startedAt = Number(gameState.mathPuzzleStartedAt) || Date.now();
  const elapsed = Math.floor((Date.now() - startedAt) / 1000);
  gameState.mathPuzzleTimeLeft = clamp(MATH_PUZZLE_SECONDS - elapsed, 0, MATH_PUZZLE_SECONDS);
  const timer = document.querySelector("#mathPuzzleTimer");
  const time = document.querySelector("#mathTimeLeft");
  if (time) time.textContent = gameState.mathPuzzleTimeLeft;
  timer?.classList.toggle("danger", gameState.mathPuzzleTimeLeft <= 10);
  document.body.classList.toggle("math-time-warning", gameState.mathPuzzleTimeLeft <= 5);
  saveGameState();
  if (gameState.mathPuzzleTimeLeft <= 0) finishMathPuzzle("failed");
};

const finishMathPuzzle = async (result) => {
  if (gameState.mathPuzzleCompleted) return;
  stopMathPuzzleTimer();
  document.body.classList.remove("math-time-warning");
  gameState.mathPuzzleCompleted = true;
  gameState.mathPuzzleAnimating = false;
  gameState.mathPuzzleResult = result;
  gameState.mathPuzzleTimeLeft = result === "success" ? gameState.mathPuzzleTimeLeft : 0;
  if (result === "success") gameState.mathHomeworkPages = 0;
  saveGameState();
  updateMathPuzzleGrid();
  result === "success" ? await showMathPuzzleSuccess() : await showMathPuzzleFailure();
};

const showMathPuzzleSuccess = async () => {
  launchConfetti();
  const result = document.querySelector("#mathPuzzleResult");
  if (result) {
    result.classList.remove("hidden");
    result.innerHTML = `<strong>挑战成功！</strong><span>你在倒计时结束前完成了数字华容道。</span>`;
  }
  await typeMathMiniText("钱俊豪：“还真给你们解出来了。”");
  await sleep(900);
  await typeMathMiniText("钱俊豪：“行吧，今天算你们赢。”");
  await sleep(900);
  await typeMathMiniText("钱俊豪看了一眼已经恢复整齐的数字，只能认栽。");
  await sleep(900);
  await typeMathMiniText("你们获得了提前下课的机会。");
  addMathResultButton("提前下课", showMathEarlyDismissal);
};

const showMathPuzzleFailure = async () => {
  document.querySelector("#mathPuzzleWrap")?.classList.add("failed");
  const result = document.querySelector("#mathPuzzleResult");
  if (result) {
    result.classList.remove("hidden");
    result.innerHTML = `<strong>时间到！</strong><span>数字还没有恢复正确顺序。</span>`;
  }
  await typeMathMiniText("钱俊豪：“看来还是没解出来。”");
  await sleep(900);
  await typeMathMiniText("钱俊豪看了一眼乱七八糟的数字，嘴角露出了一点明显不怀好意的笑。");
  await sleep(900);
  await typeMathMiniText("钱俊豪：“那就布置十页课堂作业吧。”");
  await sleep(900);
  await typeMathMiniText("钱俊豪：“做不完的，下课继续留下来做。”");
  await sleep(900);
  await typeMathMiniText("新增课堂作业：数学练习10页");
  addMathResultButton("接受现实", acceptMathHomework);
  addMathResultButton("重新挑战", retryMathPuzzle, "secondary-button");
};

const addMathResultButton = (label, onClick, className = "mini-continue") => {
  const button = document.createElement("button");
  button.className = className;
  button.type = "button";
  button.textContent = label;
  button.addEventListener("click", onClick);
  classroomPanel.append(button);
};

const retryMathPuzzle = () => {
  gameState.mathPuzzleCompleted = false;
  gameState.mathPuzzleResult = null;
  gameState.mathPuzzleTimeLeft = MATH_PUZZLE_SECONDS;
  gameState.mathPuzzleMoves = 0;
  gameState.mathPuzzleStartedAt = Date.now();
  gameState.mathPuzzleAnimating = false;
  gameState.mathPuzzleBoard = shufflePuzzleByLegalMoves(120);
  saveGameState();
  startMathPuzzleScene();
};

const showMathEarlyDismissal = async () => {
  stopMathPuzzleTimer();
  removeMathPuzzleBoard();
  gameState.currentScene = "mathEarlyDismissal";
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">数学课 · 提前下课</p>
    <p class="mini-story-text" id="mathStoryText"></p>
    <button class="mini-continue" id="mathAfterButton" type="button">继续下一段剧情</button>
  `;
  await typeMathMiniText("钱俊豪关掉了数字华容道，把剩下的课堂时间还给了大家。");
  await sleep(800);
  await typeMathMiniText("教室里立刻响起了一阵压低的欢呼声。");
  classroomPanel.querySelector("#mathAfterButton").addEventListener("click", showAfterMathPlaceholder);
};

const acceptMathHomework = async () => {
  gameState.mathHomeworkPages = 10;
  saveGameState();
  stopMathPuzzleTimer();
  removeMathPuzzleBoard();
  gameState.currentScene = "mathDetentionHomework";
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">数学课 · 留堂作业</p>
    <p class="mini-story-text" id="mathStoryText"></p>
    <button class="mini-continue" id="mathAfterButton" type="button">继续下一段剧情</button>
  `;
  await typeMathMiniText("华容道失败以后，十页数学作业被正式写进了今天的命运。");
  await sleep(800);
  await typeMathMiniText("教室里的叹气声此起彼伏，钱俊豪则显得心情很好。");
  classroomPanel.querySelector("#mathAfterButton").addEventListener("click", showAfterMathPlaceholder);
};

const showAfterMathPlaceholder = () => {
  stopMathPuzzleTimer();
  removeMathPuzzleBoard();
  document.body.classList.remove("math-time-warning");
  showCampusWalkIntro();
};

const typeCampusText = async (text) => {
  const node = document.querySelector("#campusStoryText");
  if (!node) return;
  node.textContent = "";
  for (const char of text) {
    node.textContent += char;
    await sleep(18);
  }
};

const runCampusStorySequence = async (lines, onDone, finalButtonText = "继续") => {
  const button = classroomPanel.querySelector("#campusContinueButton");
  if (!button) return;
  let index = 0;
  const showLine = async () => {
    button.disabled = true;
    await typeCampusText(lines[index]);
    button.textContent = index >= lines.length - 1 ? finalButtonText : "继续";
    button.disabled = false;
  };
  button.onclick = async () => {
    if (button.disabled) return;
    index += 1;
    if (index >= lines.length) {
      onDone?.();
      return;
    }
    await showLine();
  };
  await showLine();
};

const setupCampusMiniPanel = (label, buttonText = "继续") => {
  classroomPanel.classList.add("tiange-mini-panel", "brin-mini-panel");
  classroomPanel.innerHTML = `
    <p class="scene-label">${label}</p>
    <p class="mini-story-text" id="campusStoryText"></p>
    <button class="mini-continue" id="campusContinueButton" type="button">${buttonText}</button>
  `;
};

const showCampusWalkIntro = async () => {
  gameState.currentScene = "campusWalkIntro";
  gameState.campusWalkStarted = true;
  gameState.campusWalkStep = "intro";
  gameState.cameraTarget = null;
  saveGameState();
  updatePhonePayGuide(false);
  setupCampusMiniPanel("数学课后 · 教室");
  await showScreen(classroomScreen, "campus-classroom-background");
  await runCampusStorySequence(
    [
      "数学课结束以后，你看了一眼今天剩下的课表。",
      "出乎意料的是，今天已经没有别的课了。",
      "下午剩下的时间一下子变得宽松起来。",
      "你叫上舔哥、高原和罗罗，决定一起在校园里随便逛逛。",
      "你：“反正没课了，要不出去逛一圈？”",
      "舔哥：“走呗。”",
      "高原：“正好出去透透气。”",
      "罗罗：“可以，先在教室拍几张。”",
    ],
    () => showCampusPhotoStep("curtain"),
    "开始逛校园",
  );
};

const showCampusPhotoStep = async (key, options = {}) => {
  removeCampusExitArrow();
  const step = campusPhotoSteps.find((item) => item.key === key);
  if (!step) return;
  gameState.currentScene = step.scene;
  gameState.campusWalkStep = key;
  gameState.cameraTarget = step.target;
  saveGameState();
  setupCampusMiniPanel(step.label);
  await showScreen(classroomScreen, step.background);
  if (!options.skipIntro) {
    await runCampusStorySequence(step.lines, () => {
      classroomPanel.querySelector("#campusContinueButton")?.classList.add("hidden");
      updatePhonePayGuide();
    }, "打开相机");
  }
  if (hasPhoto(step.target.id)) {
    await showCampusAfterPhoto(step);
  } else {
    classroomPanel.querySelector("#campusContinueButton")?.classList.add("hidden");
    await typeCampusText(step.lines.at(-1) ?? "打开手机相机。");
    updatePhonePayGuide();
  }
};

const showCampusAfterPhoto = async (step) => {
  gameState.cameraTarget = null;
  saveGameState();
  updatePhonePayGuide(false);
  const lines = step.afterPhotoLines ?? [];
  for (const line of lines) {
    await typeCampusText(line);
    await sleep(650);
  }
  const button = classroomPanel.querySelector("#campusContinueButton");
  if (!button) return;
  button.classList.remove("hidden");
  button.disabled = false;
  button.textContent = step.nextText;
  button.onclick = () => goNextCampusStep(step.next);
};

const goNextCampusStep = (next) => {
  if (next === "stairs") {
    showCampusStairs();
    return;
  }
  if (next === "dinner") {
    showDinnerCafeteriaIntro();
    return;
  }
  showCampusPhotoStep(next);
};

const showCampusStairs = async () => {
  gameState.currentScene = "campusStairs";
  gameState.campusWalkStep = "stairs";
  gameState.cameraTarget = null;
  saveGameState();
  updatePhonePayGuide(false);
  classroomPanel.classList.add("tiange-mini-panel", "brin-mini-panel");
  classroomPanel.innerHTML = `
    <p class="scene-label">教学楼 · 楼梯口</p>
    <p class="mini-story-text" id="campusStoryText"></p>
  `;
  const arrow = document.createElement("button");
  arrow.className = "path-arrow campus-exit-arrow";
  arrow.type = "button";
  arrow.id = "campusExitArrow";
  arrow.innerHTML = `<span class="arrow-line"></span><span class="arrow-label">离开教学楼</span>`;
  arrow.addEventListener("click", () => showCampusPhotoStep("gymnasium"));
  classroomScreen.append(arrow);
  await showScreen(classroomScreen, "campus-stairs-background");
  for (const line of [
    "你们沿着楼梯往下走。",
    "脚步声在楼梯间里反复回响，下午的教学楼已经安静了很多。",
    "再往下，就是通往校园外面的出口。",
  ]) {
    await typeCampusText(line);
    await sleep(650);
  }
};

const removeCampusExitArrow = () => {
  document.querySelector("#campusExitArrow")?.remove();
};

const showDinnerCafeteriaIntro = async () => {
  removeCampusExitArrow();
  gameState.currentScene = "dinnerCafeteriaIntro";
  gameState.campusWalkStep = "dinner";
  gameState.cameraTarget = null;
  saveGameState();
  updatePhonePayGuide(false);
  setupCampusMiniPanel("食堂 · 晚餐时间");
  await showScreen(classroomScreen, "dinner-cafeteria-background");
  await runCampusStorySequence(
    [
      "你们走进食堂的时候，晚餐窗口已经亮了起来。",
      "空气里有米饭、热菜和刚出锅食物的味道。",
      "逛了一下午以后，几个人都明显有点饿了。",
      "你拿起餐盘，开始挑选今晚的晚饭。",
    ],
    showDinnerOrderScene,
    "开始选晚餐",
  );
};

const showDinnerOrderScene = () => {
  gameState.currentScene = "dinnerOrder";
  gameState.dinnerOrder = normalizeDinnerOrder(gameState.dinnerOrder);
  saveGameState();
  classroomPanel.classList.remove("tiange-mini-panel", "brin-mini-panel");
  classroomPanel.innerHTML = `
    <p class="scene-label">食堂 · 晚餐时间</p>
    <h2>晚餐选餐</h2>
    <p class="cafeteria-instruction">选择今晚要吃的套餐。</p>
    <section class="breakfast-menu dinner-menu">
      ${dinnerMenu
        .map(
          (item) => `
            <article class="breakfast-card">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
              <strong>${formatMoney(item.price)} / ${item.unit}</strong>
              <div class="quantity-control">
                <button type="button" data-dinner-item="${item.id}" data-delta="-1">-</button>
                <span>${getDinnerOrder().items[item.id]}</span>
                <button type="button" data-dinner-item="${item.id}" data-delta="1">+</button>
              </div>
            </article>
          `,
        )
        .join("")}
    </section>
    <section class="order-summary">
      <h3>购物清单</h3>
      ${renderDinnerOrderLines(true)}
      <div class="order-total">合计：${formatMoney(getDinnerOrder().total)}</div>
      <button class="primary-button" id="confirmDinnerButton" type="button">确认晚餐，准备支付</button>
    </section>
  `;
  classroomPanel.querySelectorAll("[data-dinner-item]").forEach((button) => {
    button.addEventListener("click", () => updateDinnerQuantity(button.dataset.dinnerItem, Number(button.dataset.delta)));
  });
  classroomPanel.querySelector("#confirmDinnerButton").addEventListener("click", confirmDinnerOrder);
};

const updateDinnerQuantity = (itemId, delta) => {
  const order = getDinnerOrder();
  order.items[itemId] = Math.max(0, (Number(order.items[itemId]) || 0) + delta);
  order.total = calculateDinnerTotal(order.items);
  order.paid = false;
  order.hungerRestored = false;
  gameState.dinnerOrder = order;
  saveGameState();
  showDinnerOrderScene();
};

const confirmDinnerOrder = () => {
  const order = getDinnerOrder();
  if (order.total <= 0) {
    showToast("你还没有选择晚餐。", 1600);
    return;
  }
  gameState.currentScene = "dinnerPayment";
  gameState.pendingPayment = true;
  gameState.pendingOrderType = "dinner";
  saveGameState();
  updatePhonePayGuide(true);
  showToast("打开手机支付宝支付。", 1700);
};

const triggerTruthOrDareEgg = async () => {
  unlockEasterEgg("breakTimeAdventure", "truthOrDare");

  gameState.easterEggs = {
    ...gameState.easterEggs,
    truthOrDare: true,
  };
  saveGameState();

  classroomPanel.innerHTML = `
    <p class="scene-label">下课 · 课间</p>
    <h2>下课 · 课间</h2>
    <section class="character-dialogue compact">
      <strong>你：</strong>
      <p>“我们还是玩真心话大冒险吧。”</p>
      <strong>wwz：</strong>
      <p>“行啊。”</p>
    </section>
    <button class="primary-button" id="startTruthOrDareButton" type="button">开始游戏</button>
  `;
  classroomPanel.querySelector("#startTruthOrDareButton").addEventListener("click", showTruthOrDareScene);
};

const launchConfetti = () => {
  const confettiLayer = document.createElement("div");
  confettiLayer.className = "confetti-layer";
  for (let index = 0; index < 36; index += 1) {
    const piece = document.createElement("span");
    piece.style.setProperty("--x", `${Math.random() * 100}vw`);
    piece.style.setProperty("--delay", `${Math.random() * 0.7}s`);
    piece.style.setProperty("--color", ["#f8c84e", "#ef5b6d", "#79d6ff", "#9df0ad"][index % 4]);
    confettiLayer.append(piece);
  }
  document.body.append(confettiLayer);
  window.setTimeout(() => confettiLayer.remove(), 2600);
};

const launchFireworks = () => {
  const layer = document.createElement("div");
  layer.className = "firework-layer";
  for (let index = 0; index < 10; index += 1) {
    const burst = document.createElement("span");
    burst.style.setProperty("--x", `${18 + Math.random() * 64}%`);
    burst.style.setProperty("--y", `${16 + Math.random() * 44}%`);
    burst.style.setProperty("--delay", `${Math.random() * 0.55}s`);
    layer.append(burst);
  }
  document.body.append(layer);
  window.setTimeout(() => layer.remove(), 2200);
};

const showTruthOrDareScene = async () => {
  gameState.currentScene = "truthOrDare";
  saveGameState();
  classroomPanel.innerHTML = `
    <p class="scene-label">课桌 · 真心话大冒险</p>
    <h2>课桌 · 真心话大冒险</h2>
    <p>几张课桌很快被人随手拼到一起。</p>
    <p>课本、笔袋、半瓶水和没来得及收起来的试卷挤在桌角。课间的教室吵得刚刚好，像给所有临时起意的游戏都盖了一层保护色。</p>
    <section class="truth-wheel-section">
      <div class="wheel-pointer" aria-hidden="true"></div>
      <div class="truth-wheel" id="truthWheel">
        ${truthOrDarePlayers
          .map(
            (name, index) => `
              <span style="--i:${index};">${name}</span>
            `,
          )
          .join("")}
      </div>
      <button class="primary-button" id="spinTruthWheelButton" type="button">开始转盘</button>
      <p class="wheel-result hidden" id="wheelResult">指针停在了 wwz。</p>
    </section>
  `;
  classroomPanel.querySelector("#spinTruthWheelButton").addEventListener("click", spinTruthWheel);
  await showScreen(classroomScreen, "desk-background");
};

const spinTruthWheel = () => {
  const wheel = classroomPanel.querySelector("#truthWheel");
  const button = classroomPanel.querySelector("#spinTruthWheelButton");
  const result = classroomPanel.querySelector("#wheelResult");
  if (!wheel || !button || !result) return;

  button.disabled = true;
  wheel.classList.add("spinning");
  wheel.style.setProperty("--final-rotation", "1590deg");
  window.setTimeout(() => {
    wheel.classList.remove("spinning");
    wheel.classList.add("spun");
    result.classList.remove("hidden");
    showTruthOrDarePrompt();
  }, 3300);
};

const showTruthOrDarePrompt = () => {
  window.setTimeout(() => {
    classroomPanel.insertAdjacentHTML(
      "beforeend",
      `
        <section class="character-dialogue compact truth-dialogue">
          <strong>班长：</strong>
          <p>“真心话还是大冒险？”</p>
          <strong>wwz：</strong>
          <p>“大冒险吧。”</p>
          <button class="primary-button" id="sendDareButton" type="button">发送：那要不你对鲶鱼说5遍我喜欢你。</button>
        </section>
      `,
    );
    classroomPanel.querySelector("#sendDareButton").addEventListener("click", showDareStory);
  }, 500);
};

const showDareStory = async () => {
  classroomPanel.querySelector("#sendDareButton")?.setAttribute("disabled", "true");
  classroomPanel.insertAdjacentHTML(
    "beforeend",
    `
      <section class="character-dialogue compact">
        <strong>你：</strong>
        <p>“那要不你对鲶鱼说5遍我喜欢你。”</p>
      </section>
      <section class="recess-story-box" id="recessStoryBox"></section>
    `,
  );

  const storyBox = classroomPanel.querySelector("#recessStoryBox");
  await typeIntoElement(storyBox, truthOrDareStory, 26);
  storyBox.insertAdjacentHTML(
    "beforeend",
    '<button class="primary-button" id="finishTruthOrDareButton" type="button">结束彩蛋</button>',
  );
  storyBox.querySelector("#finishTruthOrDareButton").addEventListener("click", finishTruthOrDareEgg);
};

const typeIntoElement = async (container, paragraphs, speed = 34) => {
  for (const paragraph of paragraphs) {
    const node = document.createElement("p");
    container.append(node);
    for (const char of paragraph) {
      node.textContent += char;
      await sleep(speed);
    }
    await sleep(220);
  }
};

const finishTruthOrDareEgg = () => {
  gameState.easterEggs = {
    ...gameState.easterEggs,
    truthOrDare: true,
    truthOrDareCompleted: true,
  };
  saveGameState();
  showToast("课间大冒险结束。", 2400);
  showBeforeSecondClass("课间的吵闹慢慢被预备铃压下去。桌子被推回原位，大家重新坐好，只有刚才那段荒唐的笑声还像纸片一样落在空气里。");
};

const showTeacherSystem = () => {
  teacherDistance.classList.remove("hidden");
  updateTeacherDistanceUi();
};

const hideTeacherSystem = () => {
  teacherDistance.classList.add("hidden");
  teacherWarning.classList.add("hidden");
  document.body.classList.remove("teacher-danger");
  window.clearInterval(teacherDistanceTimer);
  teacherDistanceTimer = null;
};

const updateTeacherDistanceUi = () => {
  const value = clamp(Number(gameState.teacherDistance) || 1, 1, 10);
  gameState.teacherDistance = value;
  teacherDistanceValue.textContent = String(value);
  teacherMeterFill.style.height = `${value * 10}%`;
  const dangerous = isEslClassActive() && value >= 8;
  teacherWarning.classList.toggle("hidden", !dangerous);
  document.body.classList.toggle("teacher-danger", dangerous);
  teacherDistance.classList.toggle("danger", dangerous);
};

const setTeacherDistance = (value) => {
  gameState.teacherDistance = clamp(value, 1, 10);
  updateTeacherDistanceUi();
  saveGameState();

  if (gameState.teacherDistance >= 10 && isEslClassActive()) {
    confiscatePhone();
  }
};

const syncTeacherDistanceTimer = () => {
  window.clearInterval(teacherDistanceTimer);
  teacherDistanceTimer = null;

  if (gameState.currentScene !== "eslClass" || gameState.eslChatTaskCompleted || gameState.phoneConfiscated) {
    updateTeacherDistanceUi();
    return;
  }

  const interval = phoneDialog.open ? 1500 : 1000;
  teacherDistanceTimer = window.setInterval(() => {
    setTeacherDistance(gameState.teacherDistance + (phoneDialog.open ? 1 : -1));
  }, interval);
  updateTeacherDistanceUi();
};

const stowPhone = () => {
  clearEslChatTimer();
  if (phoneDialog.open) phoneDialog.close();
  setModalOpen(false);
  syncTeacherDistanceTimer();
};

const confiscatePhone = async () => {
  if (gameState.phoneConfiscated) return;

  gameState.phoneConfiscated = true;
  gameState.phoneAvailable = false;
  gameState.eslChatTaskStarted = false;
  gameState.currentScene = "phoneConfiscatedClass";
  saveGameState();
  markStoryNodeCompleted("eslPhoneConfiscated");
  clearEslChatTimer();
  removeItemFromInventory("phone");
  if (phoneDialog.open) phoneDialog.close();
  setModalOpen(false);
  showToast("手机被收走了。下课后才能拿回来。", 2600);

  setPlaceholderScene({
    label: "第一节课 · 手机被收走",
    title: "第一节课 · 手机被收走",
    copy: "吴欢老师的声音忽然停了一下。\n\n你还没来得及把手机收起来，阴影已经落到了课桌边。吴老师伸出手，看了一眼屏幕。\n\n‘上课不要玩手机。’\n\n你的手机被收走了。",
    buttonText: "继续",
    onClick: showPhoneConfiscatedScene,
  });
  hideTeacherSystem();
  await showScreen(placeholderScreen, "classroom-background");
};

const triggerScheduleCheck = () => {
  gameState.needCheckSchedule = true;
  gameState.currentScene = "route";
  saveGameState();
  showInnerOs("内心 OS：今天课表是什么？");
  showToast("先打开手机，在 ibdt-b学生群里问一下今天的课表。", 3200);
  renderHotbar();
  updatePhonePayGuide();
};

const handleClassroomRoute = async () => {
  if (!gameState.checkedSchedule) {
    if (!gameState.ateBreakfast && !gameState.skippedBreakfastPenaltyApplied) {
      gameState.ateBreakfast = false;
      gameState.skippedBreakfastPenaltyApplied = true;
      gameState.breakfastOrder = createEmptyBreakfastOrder();
      decreaseHunger(2);
      markStoryNodeCompleted("breakfastSkipped");
      showToast("你跳过了早餐，饥饿值下降了。", 2200);
    }
    triggerScheduleCheck();
    return;
  }

  await showClassroomFront(gameState.ateBreakfast);
};

const showFirstClassPlaceholder = async () => {
  gameState.currentScene = "firstClass";
  saveGameState();
  setPlaceholderScene({
    label: "第一节课 · 即将开始",
    title: "第一节课 · 即将开始",
    copy: "真正的上课剧情会从这里展开。",
    buttonText: "返回标题",
    onClick: async () => {
      gameState.currentScene = "start";
      setGameplayActive(false);
      await showScreen(homeScreen, "home-background");
    },
  });
  await showScreen(placeholderScreen, "black-background");
};

const skipBreakfastToClassroom = async () => {
  await handleClassroomRoute();
};

const showCafeteriaIntro = async () => {
  gameState.currentScene = "cafeteriaIntro";
  gameState.breakfastOrder = createEmptyBreakfastOrder();
  gameState.pendingPayment = false;
  gameState.ateBreakfast = false;
  updatePhonePayGuide(false);
  saveGameState();
  cafeteriaPanel.innerHTML = `
    <p class="scene-label">食堂 · 早餐时间</p>
    <h2>食堂 · 早餐时间</h2>
    <p>你拐进食堂。灯光比外面亮一些，窗口前已经排起了短短的队伍。</p>
    <p>玻璃柜里冒着热气，小笼包一笼一笼码在蒸屉里，荷包蛋边缘微微卷起。牛奶瓶整齐地摆在柜台旁，烤香肠和春卷的味道混在一起，把清晨变得具体起来。</p>
    <p>你摸了摸口袋，又看了一眼物品栏里的手机。现在要先选早餐，然后用手机支付。</p>
    <button class="primary-button" id="startOrderButton" type="button">开始点餐</button>
  `;
  cafeteriaPanel.querySelector("#startOrderButton").addEventListener("click", showBreakfastOrderScene);
  await showScreen(cafeteriaScreen, "cafeteria-window-background");
};

const updateBreakfastQuantity = (itemId, delta) => {
  const order = getBreakfastOrder();
  order.items[itemId] = Math.max(0, (Number(order.items[itemId]) || 0) + delta);
  order.total = calculateBreakfastTotal(order.items);
  order.paid = false;
  gameState.pendingPayment = false;
  gameState.pendingOrderType = null;
  saveGameState();
  renderHotbar();
  updatePhonePayGuide(false);
  renderBreakfastOrderScene();
};

const renderBreakfastOrderScene = () => {
  const order = getBreakfastOrder();
  cafeteriaPanel.innerHTML = `
    <p class="scene-label">食堂 · 早餐时间</p>
    <h2>早餐窗口</h2>
    <p class="cafeteria-instruction">选好早餐后，再打开手机用支付宝付款。</p>
    <div class="breakfast-menu">
      ${breakfastMenu
        .map(
          (item) => `
            <article class="breakfast-card">
              <div>
                <h3>${item.name}</h3>
                <p>${formatMoney(item.price)} / ${item.unit}</p>
              </div>
              <div class="quantity-control">
                <button type="button" data-breakfast-id="${item.id}" data-delta="-1">−</button>
                <span>${order.items[item.id]}</span>
                <button type="button" data-breakfast-id="${item.id}" data-delta="1">+</button>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
    <aside class="order-summary">
      <h3>购物清单</h3>
      ${renderOrderLines(false)}
      <div class="order-total">合计：${formatMoney(order.total)}</div>
    </aside>
    <button class="primary-button confirm-order-button" id="confirmBreakfastButton" type="button">
      确认选择，准备支付
    </button>
    <p class="payment-hint ${gameState.pendingPayment ? "" : "hidden"}">你选好了早餐。现在需要打开手机，用支付宝付款。</p>
  `;
};

const showBreakfastOrderScene = () => {
  gameState.currentScene = "cafeteriaOrder";
  saveGameState();
  renderBreakfastOrderScene();
};

const confirmBreakfastOrder = () => {
  const order = getBreakfastOrder();
  if (order.total <= 0) {
    showToast("你还没有选择早餐。", 1800);
    return;
  }

  gameState.currentScene = "cafeteriaPayment";
  gameState.pendingPayment = true;
  gameState.pendingOrderType = "breakfast";
  order.paid = false;
  saveGameState();
  renderBreakfastOrderScene();
  renderHotbar();
  updatePhonePayGuide(true);
};

const payBreakfastOrder = () => {
  const order = getBreakfastOrder();
  if (order.total <= 0 || order.paid) {
    renderAlipay(order.paid ? `支付成功：${formatMoney(order.total)}` : "");
    return;
  }

  order.paid = true;
  gameState.breakfastOrder = order;
  gameState.ateBreakfast = true;
  gameState.pendingPayment = false;
  gameState.pendingOrderType = null;
  saveGameState();
  recordMealPaid("breakfast");
  restoreHunger(4);
  updatePhonePayGuide(false);
  renderHotbar();
  showToast("早餐支付成功。", 1800);
  window.setTimeout(() => showToast("你吃了早餐，饥饿值恢复了。", 2200), 900);
  renderAlipay(`支付成功：${formatMoney(order.total)}`);
};

const closePhoneAndReturnToRoute = async () => {
  phoneDialog.close();
  setModalOpen(false);
  gameState.ateBreakfast = true;
  gameState.returnedFromCafeteria = true;
  gameState.pendingOrderType = null;
  gameState.checkedSchedule = false;
  gameState.needCheckSchedule = false;
  gameState.currentScene = "route";
  saveGameState();
  await showRouteScene("returned");
};

const renderScheduleViewer = () => {
  scheduleImageFrame.innerHTML = `
    <img src="assets/items/课表.jpg" alt="今天的课表" onerror="this.remove(); this.parentElement.dataset.fallback='true';" />
    <p>课表图片缺失</p>
  `;
};

const openScheduleViewer = () => {
  renderScheduleViewer();
  setModalOpen(true);
  scheduleDialog.showModal();
};

const finishScheduleCheck = () => {
  gameState.checkedSchedule = true;
  gameState.needCheckSchedule = false;
  gameState.askedSchedule = true;
  saveGameState();
  markStoryNodeCompleted("scheduleImageViewed");
  renderHotbar();
  updatePhonePayGuide(false);
  if (scheduleDialog.open) scheduleDialog.close();
  showToast("你记下了今天的课表。", 2200);
};

backpackZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  backpackZone.classList.add("drag-over");
});

backpackZone.addEventListener("dragleave", () => {
  backpackZone.classList.remove("drag-over");
});

backpackZone.addEventListener("drop", (event) => {
  event.preventDefault();
  backpackZone.classList.remove("drag-over");
  packItem(event.dataTransfer.getData("text/plain"));
});

document.addEventListener("pointerup", (event) => {
  endDecorDrag(event);
  endOutdoorCameraDrag(event);

  if (pointerDrag?.moved) {
    const dropTarget = document.elementFromPoint(event.clientX, event.clientY);
    if (dropTarget?.closest("#backpackZone")) {
      packItem(pointerDrag.itemId);
    } else {
      pointerDrag.card.classList.remove("dragging");
      pointerDrag.card.style.left = "";
      pointerDrag.card.style.top = "";
    }
    pointerDrag.card.dataset.dragged = "true";
  }

  pointerDrag = null;

  if (!pointerDraggedItem) return;

  const dropTarget = document.elementFromPoint(event.clientX, event.clientY);
  if (dropTarget?.closest("#backpackZone")) {
    packItem(pointerDraggedItem);
  }

  pointerDraggedItem = null;
  backpackZone.classList.remove("drag-over");
});

document.addEventListener("pointercancel", (event) => {
  endDecorDrag(event);
  endOutdoorCameraDrag(event);
});

document.addEventListener("pointermove", (event) => {
  moveDecorGhost(event);
  updateOutdoorCameraDrag(event);

  if (!pointerDrag) return;

  const distance = Math.hypot(event.clientX - pointerDrag.startX, event.clientY - pointerDrag.startY);
  if (distance < 6 && !pointerDrag.moved) return;

  pointerDrag.moved = true;
  pointerDrag.card.classList.add("dragging");
  pointerDrag.card.style.left = `${event.clientX}px`;
  pointerDrag.card.style.top = `${event.clientY}px`;
  pointerDrag.card.dataset.dragged = "true";

  const dropTarget = document.elementFromPoint(event.clientX, event.clientY);
  backpackZone.classList.toggle("drag-over", Boolean(dropTarget?.closest("#backpackZone")));
});

startButton.addEventListener("click", startFirstAct);

continueButton.addEventListener("click", () => {
  if (isTyping) return;
  if (storyStep === "waking") {
    showWakingDescription();
  }
});

dialogueBox.addEventListener("click", (event) => {
  if (event.target.closest("button") || isTyping || continueButton.classList.contains("hidden")) {
    return;
  }
  continueButton.click();
});

nextSceneButton.addEventListener("click", showPlaceholderScene);

dormLeaveButton.addEventListener("click", () => {
  if (typeof dormLeaveButton.onclick === "function") return;
  showRouteScene();
});

goClassroomButton.addEventListener("click", skipBreakfastToClassroom);

goCafeteriaButton.addEventListener("click", showCafeteriaIntro);

enterBuildingButton.addEventListener("click", showClassroomBeforeLesson);

classroomPanel.addEventListener("click", (event) => {
  const lunchButton = event.target.closest("[data-lunch-id]");
  if (lunchButton) {
    updateLunchQuantity(lunchButton.dataset.lunchId, Number(lunchButton.dataset.delta));
    return;
  }

  if (event.target.closest("#confirmLunchButton")) {
    confirmLunchOrder();
    return;
  }

  const mysteryChoiceButton = event.target.closest("[data-mystery-choice]");
  if (mysteryChoiceButton) {
    handlePeMysteryChoice(mysteryChoiceButton.dataset.mysteryChoice);
    return;
  }

  const secretChoiceButton = event.target.closest("[data-secret-choice]");
  if (secretChoiceButton) {
    handleSecretChoice(secretChoiceButton.dataset.secretChoice);
    return;
  }

  const peBranchButton = event.target.closest("[data-pe-branch]");
  if (peBranchButton) {
    handlePeBranchChoice(peBranchButton.dataset.peBranch);
    return;
  }

  const recessButton = event.target.closest("[data-recess-choice]");
  if (recessButton) {
    handleRecessChoice(recessButton.dataset.recessChoice);
  }
});

cafeteriaPanel.addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-breakfast-id]");
  if (quantityButton) {
    updateBreakfastQuantity(quantityButton.dataset.breakfastId, Number(quantityButton.dataset.delta));
    return;
  }

  if (event.target.closest("#confirmBreakfastButton")) {
    confirmBreakfastOrder();
  }
});

returnHomeButton.addEventListener("click", async () => {
  gameState.currentScene = "start";
  setGameplayActive(false);
  await showScreen(homeScreen, "home-background");
});

const loadReviews = () => {
  try {
    return JSON.parse(localStorage.getItem(reviewKey)) ?? [];
  } catch {
    return [];
  }
};

const saveReviews = (reviews) => {
  localStorage.setItem(reviewKey, JSON.stringify(reviews));
};

const ratingText = (rating) => "★".repeat(rating) + "☆".repeat(5 - rating);

const renderReviews = () => {
  const reviews = loadReviews();
  reviewsBox.innerHTML = "";

  if (reviews.length === 0) {
    reviewsBox.innerHTML = '<p class="review-text">还没有评价，来写下第一条吧。</p>';
    return;
  }

  reviews.slice(0, 5).forEach((review) => {
    const item = document.createElement("article");
    item.className = "review-item";
    item.innerHTML = `
      <div class="review-stars">${ratingText(review.rating)}</div>
      <p class="review-text"></p>
    `;
    item.querySelector(".review-text").textContent = review.comment;
    reviewsBox.append(item);
  });
};

const setRating = (rating) => {
  selectedRating = rating;
  ratingButtons.forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.rating) === rating);
  });
};

reviewButton.addEventListener("click", () => {
  setModalOpen(true);
  setRating(selectedRating);
  renderReviews();
  reviewDialog.showModal();
});

closeReview.addEventListener("click", () => {
  reviewDialog.close();
  setModalOpen(false);
});

reviewDialog.addEventListener("close", () => {
  setModalOpen(false);
});

closePhone.addEventListener("click", () => {
  clearEslChatTimer();
  clearPhysicsChatTimer();
  clearBasketballChatTimer();
  clearSecretChatTimer();
  clearNightCallTimer();
  window.clearTimeout(peMysteryChatTimer);
  peMysteryChatTimer = null;
  phoneDialog.close();
  setModalOpen(false);
  updatePhonePayGuide();
  syncTeacherDistanceTimer();
  revealDormArrowIfReady();
  revealPeButtonIfReady();
  continuePeBranchAfterPhoneClose();
});

phoneDialog.addEventListener("close", () => {
  clearEslChatTimer();
  clearPhysicsChatTimer();
  clearBasketballChatTimer();
  clearSecretChatTimer();
  clearNightCallTimer();
  window.clearTimeout(peMysteryChatTimer);
  peMysteryChatTimer = null;
  setModalOpen(false);
  updatePhonePayGuide();
  syncTeacherDistanceTimer();
  revealDormArrowIfReady();
  revealPeButtonIfReady();
  continuePeBranchAfterPhoneClose();
});

phoneView.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-phone-action]");
  if (actionButton) {
    if (actionButton.dataset.phoneAction === "payBreakfast") {
      payBreakfastOrder();
    } else if (actionButton.dataset.phoneAction === "payLunch") {
      payLunchOrder();
    } else if (actionButton.dataset.phoneAction === "payDinner") {
      payDinnerOrder();
    } else if (actionButton.dataset.phoneAction === "closeToRoute") {
      closePhoneAndReturnToRoute();
    } else if (actionButton.dataset.phoneAction === "closeToLunchMeal") {
      closePhoneToLunchMeal();
    } else if (actionButton.dataset.phoneAction === "closeToDinnerMeal") {
      closePhoneToDinnerMeal();
    } else if (actionButton.dataset.phoneAction === "askSchedule") {
      askScheduleInGroup();
    } else if (actionButton.dataset.phoneAction === "openSchedule") {
      openScheduleViewer();
    } else if (actionButton.dataset.phoneAction === "sendEslMessage") {
      sendCurrentEslMessage();
    } else if (actionButton.dataset.phoneAction === "sendPhysicsDormMessage") {
      sendCurrentPhysicsDormMessage();
    } else if (actionButton.dataset.phoneAction === "sendPeMysteryPhoto") {
      sendPeMysteryPhotoToGroup();
    } else if (actionButton.dataset.phoneAction === "sendBasketballPreMessage") {
      sendCurrentBasketballPreMessage();
    } else if (actionButton.dataset.phoneAction === "sendBasketballPhoto") {
      sendBasketballPhotoToGroup();
    } else if (actionButton.dataset.phoneAction === "sendSecretCrypticMessage") {
      sendCurrentSecretCrypticMessage();
    } else if (actionButton.dataset.phoneAction === "stowPhone") {
      stowPhone();
    } else if (actionButton.dataset.phoneAction === "takePhoto") {
      saveCurrentCameraPhoto();
    } else if (actionButton.dataset.phoneAction === "closePhone") {
      phoneDialog.close();
    } else if (actionButton.dataset.phoneAction === "closePhoneToLunch") {
      phoneDialog.close();
      showLunchCafeteria();
    } else if (actionButton.dataset.phoneAction === "closePhoneToBasketballRoute") {
      phoneDialog.close();
    } else if (actionButton.dataset.phoneAction === "closePhoneToBasketballVictory") {
      phoneDialog.close();
    } else if (actionButton.dataset.phoneAction === "closePhoneToDormPrep") {
      phoneDialog.close();
    } else if (actionButton.dataset.phoneAction === "joinNightCall") {
      joinNightCall();
    } else if (actionButton.dataset.phoneAction === "declineNightCall") {
      declineNightCall();
    } else if (actionButton.dataset.phoneAction === "toggleNightMute" || actionButton.dataset.phoneAction === "toggleNightSpeaker") {
      toggleNightCallControl(actionButton);
    } else if (actionButton.dataset.phoneAction === "endNightCall") {
      endNightCall();
    }
    return;
  }

  const chatPhotoButton = event.target.closest("[data-chat-photo]");
  if (chatPhotoButton) {
    openChatPhotoViewer(chatPhotoButton.dataset.chatPhoto, chatPhotoButton.dataset.chatPhotoTitle);
    return;
  }

  const photoButton = event.target.closest("[data-photo-id]");
  if (photoButton) {
    openAlbumPhoto(photoButton.dataset.photoId);
    return;
  }

  const characterButton = event.target.closest("[data-character-id]");
  if (characterButton) {
    renderCharacterDetail(characterButton.dataset.characterId);
    return;
  }

  const screenButton = event.target.closest("[data-phone-screen]");
  if (!screenButton) return;

  phoneScreen = screenButton.dataset.phoneScreen;
  renderPhone();
});

closeSchedule.addEventListener("click", finishScheduleCheck);

finishScheduleButton.addEventListener("click", finishScheduleCheck);

scheduleDialog.addEventListener("close", () => {
  setModalOpen(phoneDialog.open);
});

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setRating(Number(button.dataset.rating));
  });
});

reviewForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const comment = commentInput.value.trim();
  if (!comment) {
    commentInput.focus();
    return;
  }

  const reviews = loadReviews();
  reviews.unshift({
    rating: selectedRating,
    comment,
    createdAt: new Date().toISOString(),
  });
  saveReviews(reviews);
  commentInput.value = "";
  renderReviews();
});

document.addEventListener("visibilitychange", () => {
  syncHungerTimer();
});

window.addEventListener("resize", () => {
  updatePhonePayGuide();
});

warnMissingAsset("./assets/items/选餐口.jpg");
warnMissingAsset("./assets/items/食堂.jpg");
warnMissingAsset("./assets/items/食堂2.jpg");
warnMissingAsset("./assets/items/教学楼.jpg");
warnMissingAsset("./assets/items/教室.jpg");
warnMissingAsset("./assets/items/教室2.jpg");
warnMissingAsset("./assets/items/舔哥1.jpg");
warnMissingAsset(`./${tiangeDecorImagePath}`);
warnMissingAsset(`./${seewoImagePath}`);
warnMissingAsset(`./${neteaseImagePath}`);
warnMissingAsset(`./${brinClassImagePath}`);
warnMissingAsset(`./${brinClassroomImagePath}`);
warnMissingAsset(`./${brinDrawGuessImagePath}`);
warnMissingAsset(`./${brinNextClassroomImagePath}`);
warnMissingAsset(`./${mathClassImagePath}`);
warnMissingAsset(`./${campusClassroomImagePath}`);
warnMissingAsset(`./${campusPhoto1Path}`);
warnMissingAsset(`./${campusPhoto2Path}`);
warnMissingAsset(`./${campusPhoto3Path}`);
warnMissingAsset(`./${campusStairsPath}`);
warnMissingAsset(`./${campusPhoto4Path}`);
warnMissingAsset(`./${campusPhoto5Path}`);
warnMissingAsset(`./${dinnerCafeteriaImagePath}`);
warnMissingAsset(`./${eveningClassroomImagePath}`);
warnMissingAsset(`./${nightPathImagePath}`);
warnMissingAsset(`./${nightDormImagePath}`);
warnMissingAsset(`./${nightSeewoImagePath}`);
warnMissingAsset(`./${baidupanIconPath}`);
warnMissingAsset(`./${baidupanHomePath}`);
warnMissingAsset(`./${basketballCourt1Path}`);
warnMissingAsset(`./${basketballCourt2Path}`);
warnMissingAsset(`./${basketballCourt3Path}`);
warnMissingAsset(`./${basketballCourt4Path}`);
warnMissingAsset(`./${basketballCourt5Path}`);
warnMissingAsset(`./${basketballSticker2Path}`);
warnMissingAsset(`./${basketballSticker3Path}`);
warnMissingAsset(`./${basketballSticker4Path}`);
warnMissingAsset("./assets/items/课桌.jpg");
warnMissingAsset("./assets/items/楼梯口.jpg");
warnMissingAsset("./assets/items/dorm.jpg");
warnMissingAsset("./assets/items/王在勃.jpg");
warnMissingAsset("./assets/items/小路.jpg");
warnMissingAsset("./assets/items/操场.jpg");
warnMissingAsset("./assets/items/琴房.jpg");
warnMissingAsset(`./${forestImagePath}`);
warnMissingAsset("./assets/items/竹林.jpg");
warnMissingAsset("./assets/items/室外.jpg");
warnMissingAsset("./assets/items/牵手.jpg");
warnMissingAsset("./assets/items/物理真题册.jpg");
warnMissingAsset("./assets/items/支付宝.jpg");
warnMissingAsset("./assets/items/课表.jpg");
warnMissingAsset("./assets/items/表情包1.jpg");
warnMissingAsset(`./${nightPondImagePath}`);
warnMissingAsset(`./${dormCatImagePath}`);

setRating(5);
document.body.classList.add("is-start-screen");
runtimeState.isBooting = true;
runtimeState.achievementToastsEnabled = false;
removeAllAchievementToastElements();
loadGameState();
initializeCheckpointSystem();
initializeAchievementSystem();
initializeEasterEggSystem();
migrateEndingSystem();
const pendingCheckpointRestore = getPendingCheckpointRestore();
if (pendingCheckpointRestore) {
  clearPendingCheckpointRestore();
  document.body.classList.remove("is-start-screen");
  gameState.isModalOpen = false;
  gameState.isGameplayActive = true;
  gameState.gameStarted = true;
  renderHud();
  renderSceneById(gameState.currentScene).then(() => {
    showToast(`已回到：${CHECKPOINT_DEFINITIONS[pendingCheckpointRestore.id]?.title ?? "回档节点"}`, 2200);
    runtimeState.isRestoringCheckpoint = false;
    runtimeState.isBooting = false;
    runtimeState.achievementToastsEnabled = true;
    updateUtilityToolVisibility();
  });
} else {
  gameState.currentScene = "start";
  gameState.isGameplayActive = false;
  gameState.isModalOpen = false;
  gameState.gameStarted = false;
  renderHud();
  gameHud.classList.add("hud-hidden");
  saveGameState();
  runtimeState.isBooting = false;
  runtimeState.achievementToastsEnabled = false;
  removeAllAchievementToastElements();
  updateUtilityToolVisibility();
}

window.damageHealth = damageHealth;
window.restoreHealth = restoreHealth;
window.setHealth = setHealth;
window.decreaseHunger = decreaseHunger;
window.restoreHunger = restoreHunger;
window.setHunger = setHunger;
window.addItemToInventory = addItemToInventory;
window.removeItemFromInventory = removeItemFromInventory;
window.hasItem = hasItem;
window.renderHotbar = renderHotbar;

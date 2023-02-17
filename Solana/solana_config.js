/**
 * If you are exporting your project for Solana:
 * 1. Read the Readme section for more info
 * 2. Enter your metadata information in this file, more on the Solana Metadata
 *    standards here, https://docs.metaplex.com/nft-standard
 * 3. Run the generate for Solana script, yarn generate:solana (or npm run generate:solana)
 * 4. If you forgot to do step 3, do step 3 OR run the solana util
 *    `node utils/metaplex.js`
 *
 * Credits:
 * Metaplex.js util by https://github.com/DawidAbram
 */
const NFTName = "OG Labz" //This is the name there will be showen on your NFTs !!! Name can at max be 32 characters !!!
const collectionName = ""; //This is used if mutiple collection is needed
const collectionFamily = ""; // Many projects can belong to one family
const symbol = "DAO"; // !!! Symbol can at max be 10 characters !!!

const baseUriPrefix = "ipfs://QmbprDjU5ZfRbaBtJBHXLm69TjdUm7rbtXcjr6fRSP37vt/"; // OPTIONAL, if you need to prefix your image#.png with a baseURI
const description = "Welcome to tha gang! We are the core community of OG Labz that lead this company and gang culture on Solana. This OG represents your DAO seat and entitles you to company shares, voting rights, investment profits, revenue percentages, and exclusive benefits throughout the OG ecosystem. More details are outlined in your 'Initiation Papers'.";
const external_url = ""; // add optional external URL here, e.g, https://0n10nDivision.com

const royaltyFee = 700; // This is 2% royalty fee

/**
 * Array of Creators.
 * If there is more than one creator, add additional objects with address and share properties.
 */
const creators = [
  {
    address: "FFubJRuAynUnZiJSAso15fQCfriqGUF9FKja2DEpVy3k", // Wallet address for royalties
    share: 80, // Amount of shares for this wallet, can be more than one, all have to add up to 100 together !!! And a maximum of 4 creators !!!
  },
  {
    address: "Fq32bPH38PEnnfy6T26GZf1nYZUpvRfZoPeki6ExuZJr", // Wallet address for royalties
    share: 20, // Amount of shares for this wallet, can be more than one, all have to add up to 100 together !!! And a maximum of 4 creators !!!
  },
];
 
/**
 * Only change this if you need to generate data for video/VR/3d content
 */
const propertyCategory = "image";

module.exports = {
  symbol,
  NFTName,
  collectionName,
  collectionFamily,
  description,
  royaltyFee,
  creators,
  external_url,
  baseUriPrefix,
  propertyCategory,
};

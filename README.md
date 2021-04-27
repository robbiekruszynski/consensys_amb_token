contract: 0x3e89d5083e9a1820d6c733b2b77e38a2be5cc73b

truffle console --network rinkeby
nft = await ERC721PresetMinterPauserAutoId.deployed()
await nft.mint("pulbic address here")

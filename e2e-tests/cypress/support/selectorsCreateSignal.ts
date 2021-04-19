// SPDX-License-Identifier: MPL-2.0
// Copyright (C) 2020 - 2021 Gemeente Amsterdam
export const CREATE_SIGNAL = {
  autoSuggest: '[data-testid="autoSuggest"]',
  buttonDoeEenMelding: 'a:contains("Doe een melding")',
  buttonGPS: '[data-testid=gpsButton]',
  buttonUploadFile: '#formUpload',
  buttonVolgende: '[data-testid="nextButton"]',
  checkBoxSharingAllowed: '#sharing_allowed',
  descriptionInfo: '[data-testid="descriptionInfo"]',
  disclaimer: '[data-testid=disclaimer]',
  dropdownDag: '[data-testid=selectDay]',
  dropdownUur: '[data-testid=selectHours]',
  dropdownMinuten: '[data-testid=selectMinutes]',
  dropdownSource: '[data-testid="source"]',
  dropdownSubcategory: '[data-testid="subcategory"]',
  errorDateTime: '[data-testid="datetime-required"]',
  errorDescription: '[data-testid="description-required"]',
  errorGlobal: '[class*="GlobalError__ErrorItem"]',
  errorItem: '[data-testid$="-required"]',
  errorLocation: '[data-testid="location-required"]',
  errorMail: '[data-testid="invalid-mail"]',
  footerPrivacyLink: '[class*=Footer__StyledLink]',
  imageAddressMarker: 'div[class="leaflet-pane leaflet-marker-pane"]',
  infoText: '[data-testid="infoText"]',
  inputPhoneNumber: '#phone',
  inputEmail: '#email',
  imageFileUpload: '[class*=Image__ImageContainer]',
  labelQuestion: 'label',
  logoAmsterdam: '[class*=AmsterdamLogo__AmsterdamLogoStyle]',
  mapContainer: '.leaflet-container',
  mapStaticImage: '[data-testid=mapStaticImage]',
  mapStaticMarker: '[data-testid=mapStaticMarker]',
  mapPreview: '[data-testid=map-preview]',
  radioButtonTijdstipNu: '#datetime-Nu',
  radioButtonTijdstipEerder: '#datetime-Eerder',
};

export const BEDRIJVEN_HORECA = {
  checkBoxBezoekers: '#extra_bedrijven_horeca_terrassen-bezoekers_op_terras1',
  checkBoxDronken: '#extra_bedrijven_horeca_personen-dronken_bezoekers1',
  checkBoxGeluidOpruimen: '#extra_bedrijven_horeca_terrassen-opruimen_meubels1',
  checkBoxSchreeuwen: '#extra_bedrijven_horeca_personen-schreeuwende_bezoekers1',
  checkBoxWildplassen: '#extra_bedrijven_horeca_personen-wildplassen1',
  inputWieWat: '#extra_bedrijven_horeca_naam',
  inputAdres: '#extra_bedrijven_horeca_adres',
  inputDatum: '#extra_bedrijven_horeca_tijdstippen',
  inputHoeLaatEinde: '#extra_bedrijven_horeca_muziek_evenement_einde',
  inputSoortInstallatie: '#extra_bedrijven_horeca_installaties',
  inputTijdstippen: '#extra_bedrijven_horeca_tijdstippen',
  inputWanneerBellen: '#extra_bedrijven_horeca_muziek_geluidmeting_ja_nietnu',
  inputWaaromGeenContact: '#extra_bedrijven_horeca_muziek_geluidmeting_nee',
  radioButtonBellenNietNu: '#extra_bedrijven_horeca_muziek_geluidmeting_ja-not_now1',
  radioButtonContactJa: '#extra_bedrijven_horeca_muziek_geluidmeting_muziek-ja1',
  radioButtonContactNee: '#extra_bedrijven_horeca_muziek_geluidmeting_installaties-nee1',
  radioButtonHoreca: '#extra_bedrijven_horeca_wat-horecabedrijf1',
  radioButtonAnderBedrijf: '#extra_bedrijven_horeca_wat-ander_soort_bedrijf1',
  radioButtonEvenement: '#extra_bedrijven_horeca_wat-evenement_festival_markt1',
  radioButtonGeinformeerdJa: '#extra_bedrijven_horeca_muziek_evenement-ja1',
  radioButtonIetsAnders: '#extra_bedrijven_horeca_wat-iets_anders1',
  radioButtonVakerJa: '#extra_bedrijven_horeca_vaker-ja1',
  radioButtonVakerNee: '#extra_bedrijven_horeca_vaker-nee1',
};

export const BOTEN = {
  inputNaamBoot: '#extra_boten_snelheid_naamboot',
  inputNaamRederij: '#extra_boten_snelheid_rederij',
  inputNogMeer: '[id^="extra_boten_"][id$="_meer"]',
  radioButtonOverig: '#extra_boten_snelheid_typeboot-overig1',
  radioButtonPlezierVaart: '#extra_boten_snelheid_typeboot-pleziervaart1',
  radioButtonRondvaartboot: '#extra_boten_snelheid_typeboot-rondvaartboot_of_salonboot1',
  radioButtonVrachtschip: '#extra_boten_snelheid_typeboot-vrachtschip_of_binnenvaartschip1',
};

export const CONTAINERS = {
  buttonCloseLegenda: '[class*="CloseButton"]',
  buttonCollapsePanel: '[title="Open legenda"]',
  buttonInzoomen: '[title=Inzoomen]',
  buttonKiesOpKaart: '[data-testid=chooseOnMap]',
  buttonLegenda: 'button:contains("Legenda")',
  buttonMeldDezeContainer: 'button:contains("Meld deze container")',
  buttonRemoveContainer: '[data-testid*="containerListRemove"]',
  buttonUitzoomen: '[title=Uitzoomen]',
  checkBoxContainerNietopKaart: '#unregisteredContainerCheckbox',
  clusterIcon: '[data-testid=markerClusterIcon]',
  containerGlas: '[alt*="Glas"]',
  containerPapier: '[alt*="Papier"]',
  containerPlastic: '[alt*="Plastic"]',
  containerRestafval: '[alt*="Restafval"]',
  containerListItem: '[data-testid*="containerListItem"]',
  icon: '.leaflet-marker-icon',
  inputContainerNummer: '#unregisteredContainerInput',
  legendaItemBrood: '[data-testid=legendPanelListItem-Brood]',
  legendaItemGlas: '[data-testid=legendPanelListItem-Glas]',
  legendaItemGFT: '[data-testid=legendPanelListItem-GFT]',
  legendaItemPapier: '[data-testid=legendPanelListItem-Papier]',
  legendaItemPlastic: '[data-testid=legendPanelListItem-Plastic]',
  legendaItemRestafval: '[data-testid=legendPanelListItem-Rest]',
  legendaItemTextiel: '[data-testid=legendPanelListItem-Textiel]',
  map: '[data-testid=mapLocation]',
  panelContainerInfo: '[data-testid=panelDesktop]',
  panelLegend: '[data-testid=legendPanel]',
};

export const FIETSNIETJE = {
  inputFietsnietje: '[id*=extra_fietsrek_aanvraag]',
  radioButtonNieuwNietjeJa: '#extra_fietsrek_aanvragen-ja1',
};

export const JONGEREN = {
  checkBoxVaker: '#extra_personen_overig_vaker-ja1',
  inputMoment: '#extra_personen_overig_vaker_momenten',
  radioButtonAantalPersonen: '#extra_personen_overig-4-61',
};

export const KLOK = {
  checkBoxNietOpKaart: '#extra_klok_niet_op_kaart',
  iconKlok: '.leaflet-marker-icon',
  inputKlokNummer1: '#extra_klok_niet_op_kaart_nummer',
  inputKlokNummer2: '#extra_klok_niet_op_kaart_nummer-2',
  labelMandatoryFieldGevaarlijk: '[data-testid=extra_klok-required]',
  legendContentText: '.legend-content-text',
  legendHeader: '.legend-header',
  mapSelectKlok: '[data-testid=mapSelect]',
  radioButtonGevaarlijkAanrijding: '#extra_klok-is_gevolg_van_aanrijding1',
  radioButtonGevaarlijkDeurtje: '#extra_klok-deurtje_weg_of_open1',
  radioButtonGevaarlijkLosseKabels: '#extra_klok-losse_kabels_zichtbaar_of_lamp_los1',
  radioButtonGevaarlijkNietGevaarlijk: '#extra_klok-niet_gevaarlijk1',
  radioButtonGevaarlijkOpGrondOfScheef: '#extra_klok-klok_op_grond_of_scheef1',
  radioButtonProbleemBeschadigd: '#extra_klok_probleem-klok_is_zichtbaar_beschadigd1',
  radioButtonProbleemNietOpTijd: '#extra_klok_probleem-klok_staat_niet_op_tijd_of_stil1',
  radioButtonProbleemOverig: '#extra_klok_probleem-overig1',
};

export const LANTAARNPAAL = {
  checkBoxNietOpKaart: '#extra_straatverlichting_niet_op_kaart',
  inputLampNummer1: '#extra_straatverlichting_niet_op_kaart_nummer',
  inputLampNummer2: '#extra_straatverlichting_niet_op_kaart_nummer-2',
  labelMandatoryField: '[data-testid="extra_straatverlichting_probleem-required"]',
  legendContentText: '.legend-content-text',
  legendHeader: '.legend-header',
  mapSelectLamp: '[data-testid=mapSelect]',
  markerOnMap: '.leaflet-marker-icon',
  radioButtonProbleemBeschadigd: '#extra_straatverlichting_probleem-lamp_is_zichtbaar_beschadigd1',
  radioButtonProbleemBrandtOverdag: '#extra_straatverlichting_probleem-lamp_brandt_overdag1',
  radioButtonProbleemDoetNiet: '#extra_straatverlichting_probleem-lamp_doet_het_niet1',
  radioButtonProbleemLichthinder: '#extra_straatverlichting_probleem-geeft_lichthinder1',
  radioButtonProbleemOverig: '#extra_straatverlichting_probleem-overig1',
  radioButtonGevaarlijkAanrijding: '#extra_straatverlichting-is_gevolg_van_aanrijding1',
  radioButtonGevaarlijkAantalLichtenpunten: '#extra_straatverlichting_hoeveel-meerdere_lichtpunten1',
  radioButtonGevaarlijk3OfMeerKapot: '#extra_straatverlichting-drie_of_meer_kapot1',
  radioButtonGevaarlijkOpGrond: '#extra_straatverlichting-lamp_op_grond_of_scheef1',
  radioButtonGevaarlijkDeur: '#extra_straatverlichting-deurtje_weg_of_open1',
  radioButtonGevaarlijkLosseKabels: '#extra_straatverlichting-losse_kabels_zichtbaar_of_lamp_los1',
  radioButtonNietGevaarlijk: '#extra_straatverlichting-niet_gevaarlijk1',
};

export const STANK_OVERLAST = {
  inputGeur: '#extra_bedrijven_horeca_stank',
  inputOorzaakGeur: '#extra_bedrijven_horeca_stank_oorzaak',
  inputWeersomstandigheden: '#extra_bedrijven_horeca_stank_weer',
  radioButtonRaamOpen: '#extra_bedrijven_horeca_stank_ramen-ja1',
  radioButtonRaamGesloten: '#extra_bedrijven_horeca_stank_ramen-nee1',
};

export const VERKEERSLICHT = {
  checkBoxFietsAutoAnders: '#extra_verkeerslicht_probleem_fiets_auto-anders1',
  checkBoxFietsAutoDuurtLang: '#extra_verkeerslicht_probleem_fiets_auto-groen_duurt_te_lang1',
  checkBoxFietsAutoGroenLicht: '#extra_verkeerslicht_probleem_fiets_auto-groen_werkt_niet1',
  checkBoxFietsAutoOranjeLicht: '#extra_verkeerslicht_probleem_fiets_auto-oranje_werkt_niet1',
  checkBoxFietsAutoRoodLicht: '#extra_verkeerslicht_probleem_fiets_auto-rood_werkt_niet1',
  checkBoxTramAnders: '#extra_verkeerslicht_probleem_bus_tram-anders1',
  checkBoxTramOranjeLicht: '#extra_verkeerslicht_probleem_bus_tram-oranje_werkt_niet1',
  checkBoxTramRoodLicht: '#extra_verkeerslicht_probleem_bus_tram-rood_werkt_niet1',
  checkBoxTramWaarschuwingslicht: '#extra_verkeerslicht_probleem_bus_tram-waarschuwingslicht_tram_werkt_niet1',
  checkBoxTramWitLicht: '#extra_verkeerslicht_probleem_bus_tram-wit_werkt_niet1',
  checkBoxVoetgangerAnders: '#extra_verkeerslicht_probleem_voetganger-anders1',
  checkBoxVoetgangerBlindentikker: '#extra_verkeerslicht_probleem_voetganger-blindentikker_werkt_niet1',
  checkBoxVoetgangerDuurtLang: '#extra_verkeerslicht_probleem_voetganger-groen_duurt_te_lang1',
  checkBoxVoetgangerGroenLicht: '#extra_verkeerslicht_probleem_voetganger-groen_werkt_niet1',
  checkBoxVoetgangerRoodLicht: '#extra_verkeerslicht_probleem_voetganger-rood_werkt_niet1',
  inputNummerVerkeerslicht: '#extra_verkeerslicht_nummer',
  inputRijrichting: '#extra_verkeerslicht_rijrichting',
  labelMandatoryFieldGevaarlijk: '[data-testid=extra_verkeerslicht-required]',
  labelMandatoryFieldWerking: '[data-testid=extra_verkeerslicht_welk-required]',
  radioButtonAanrijding: '#extra_verkeerslicht-is_gevolg_van_aanrijding1',
  radioButtonOpGrond: '#extra_verkeerslicht-verkeerslicht_op_grond_of_scheef1',
  radioButtonDeur: '#extra_verkeerslicht-deurtje_weg_of_open1',
  radioButtonLosseKabels: '#extra_verkeerslicht-losse_kabels_zichtbaar_of_lamp_los1',
  radioButtonNietGevaarlijk: '#extra_verkeerslicht-niet_gevaarlijk1',
  radioButtonEenLichtpunt: '#extra_verkeerslicht_hoeveel-1_lichtpunt1',
  radioButtonTypeAuto: '#extra_verkeerslicht_welk-auto1',
  radioButtonTypeFiets: '#extra_verkeerslicht_welk-fiets1',
  radioButtonTypeTramBus: '#extra_verkeerslicht_welk-tram_bus1',
  radioButtonTypeVoetganger: '#extra_verkeerslicht_welk-voetganger1',
};

export const WEGDEK = {
  inputSoortWegdek: '#extra_onderhoud_stoep_straat_en_fietspad',
};

export const WONEN_LEEGSTAND = {
  inputEigenaar: '#extra_wonen_leegstand_naam_eigenaar',
  inputNaam: '#extra_wonen_leegstand_naam_persoon',
  inputTijdstip: '#extra_wonen_leegstand_iemand_aanwezig',
  inputWatDoetPersoon: '#extra_wonen_leegstand_activiteit_in_woning',
  labelMandatoryFieldNaamEigenaaar: '[data-testid=extra_wonen_leegstand_naam_eigenaar-required]',
  labelMandatoryFieldWoningGebruik: '[data-testid=extra_wonen_leegstand_woning_gebruik-required]',
  labelMandatoryFieldWoningLeeg: '[data-testid=extra_wonen_leegstand_periode-required]',
  radioButtonBewonerJa: '#extra_wonen_woonkwaliteit_bewoner-ja1',
  radioButtonBewonerNee: '#extra_wonen_woonkwaliteit_bewoner-nee1',
  radioButtonBewoningJa: '#extra_wonen_vakantieverhuur_bewoning-ja1',
  radioButtonBewoningNee: '#extra_wonen_vakantieverhuur_bewoning-nee1',
  radioButtonBewoningWeetIkNiet: '#extra_wonen_vakantieverhuur_bewoning-weet_ik_niet1',
  radioButtonContactJa: '#extra_wonen_woonkwaliteit_toestemming_contact-ja1',
  radioButtonContactNee: '#extra_wonen_woonkwaliteit_toestemming_contact-nee1',
  radioButtonGebruiktJa: '#extra_wonen_leegstand_woning_gebruik-ja1',
  radioButtonGebruiktNee: '#extra_wonen_leegstand_woning_gebruik-nee1',
  radioButtonGebruiktWeetIkNiet: '#extra_wonen_leegstand_woning_gebruik-weet_ik_niet1',
  radioButtonLeegMinderDanZesMaanden: '#extra_wonen_leegstand_periode-korter_dan_zes_maanden1',
  radioButtonLeegPeriodeWeetIkNiet: '#extra_wonen_leegstand_periode-weet_ik_niet1',
  radioButtonLeegZesMaandenOfLanger: '#extra_wonen_leegstand_periode-langer_dan_zes_maanden1',
};

export const WONEN_ONDERVERHUUR = {
  inputAdresHuurder: '#extra_wonen_onderhuur_adres_huurder',
  inputHuurder: '#extra_wonen_onderhuur_naam_huurder',
  inputNamen: '#extra_wonen_onderhuur_naam_bewoners',
  inputTijdstip: '#extra_wonen_onderhuur_iemand_aanwezig',
  radioButtonAantalPersonen1: '#extra_wonen_onderhuur_aantal_personen-een_persoon1',
  radioButtonAantalPersonen2: '#extra_wonen_onderhuur_aantal_personen-twee_personen1',
  radioButtonAantalPersonen3: '#extra_wonen_onderhuur_aantal_personen-drie_personen1',
  radioButtonAantalPersonen4: '#extra_wonen_onderhuur_aantal_personen-vier_personen1',
  radioButtonAantalPersonen5: '#extra_wonen_onderhuur_aantal_personen-vijf_of_meer_personen1',
  radioButtonAantalPersonenWeetNiet: '#extra_wonen_onderhuur_aantal_personen-weet_ik_niet1',
  radioButtonAdresHuurderJaZelfde: '#extra_wonen_onderhuur_huurder_woont-aangegeven_adres1',
  radioButtonAdresHuurderJaAnder: '#extra_wonen_onderhuur_huurder_woont-ander_adres1',
  radioButtonAdresHuurderNee: '#extra_wonen_onderhuur_huurder_woont-weet_ik_niet1',
  radioButtonFamilieJa: '#extra_wonen_onderhuur_bewoners_familie-ja1',
  radioButtonFamilieNee: '#extra_wonen_onderhuur_bewoners_familie-nee1',
  radioButtonFamilieWeetNiet: '#extra_wonen_onderhuur_bewoners_familie-weet_ik_niet1',
  radioButtonHoeLangMinderZesMaanden: '#extra_wonen_onderhuur_woon_periode-korter_dan_zes_maanden1',
  radioButtonHoeLangLangerZesMaanden: '#extra_wonen_onderhuur_woon_periode-langer_dan_zes_maanden1',
  radioButtonHoeLangWeetNiet: '#extra_wonen_onderhuur_woon_periode-weet_ik_niet1',
};

export const WONEN_OVERIG = {
  radioButtonAchterstalligOnderhoud: '#wonen_overig-woningkwaliteit1',
  radioButtonCrimineleBewoning: '#wonen_overig-crimineleBewoning1',
  radioButtonIllegaleOnderhuur: '#wonen_overig-onderhuur1',
  radioButtonLeegstand: '#wonen_overig-leegstand1',
  radioButtonToeristischeVerhuur: '#wonen_overig-vakantieverhuur1',
  radioButtonWoningdelen: '#wonen_overig-woningdelen1',
};

export const WONEN_VAKANTIEVERHUUR = {
  inputBewoner: '#extra_wonen_vakantieverhuur_naam_bewoner',
  inputLink: '#extra_wonen_vakantieverhuur_link_advertentie',
  labelMandatoryFieldInternet: '[data-testid=extra_wonen_vakantieverhuur_online_aangeboden-required]',
  labelMandatoryFieldToeristenAanwezig: '[data-testid=extra_wonen_vakantieverhuur_toeristen_aanwezig-required]',
  labelMandatoryFieldToeristenHoeveelheid: '[data-testid=extra_wonen_vakantieverhuur_aantal_mensen-required]',
  labelMandatoryFieldToeristenVaker: '[data-testid=extra_wonen_vakantieverhuur_hoe_vaak-required]',
  labelMandatoryFieldWonen: '[data-testid=extra_wonen_vakantieverhuur_bewoning-required]',
  radioButtonBewoningJa: '#extra_wonen_vakantieverhuur_bewoning-ja1',
  radioButtonBewoningNee: '#extra_wonen_vakantieverhuur_bewoning-nee1',
  radioButtonBewoningWeetIkNiet: '#extra_wonen_vakantieverhuur_bewoning-weet_ik_niet1',
  radioButtonHoeVaakDagelijks: '#extra_wonen_vakantieverhuur_hoe_vaak-dagelijks1',
  radioButtonHoeVaakEersteKeer: '#extra_wonen_vakantieverhuur_hoe_vaak-eerste_keer1',
  radioButtonHoeVaakMaandelijks: '#extra_wonen_vakantieverhuur_hoe_vaak-maandelijks1',
  radioButtonHoeVaakWekelijks: '#extra_wonen_vakantieverhuur_hoe_vaak-wekelijks1',
  radioButtonHoeveelVierOfMinder: '#extra_wonen_vakantieverhuur_aantal_mensen-vier_of_minder1',
  radioButtonHoeveelVijfOfMeer: '#extra_wonen_vakantieverhuur_aantal_mensen-vijf_of_meer1',
  radioButtonKlachtGemeldJa: '#extra_wonen_woonkwaliteit_gemeld_bij_eigenaar-ja1',
  radioButtonKlachtGemeldNee: '#extra_wonen_woonkwaliteit_gemeld_bij_eigenaar-nee1',
  radioButtonLeegMinderDanZesMaanden: '#extra_wonen_leegstand_periode-korter_dan_zes_maanden1',
  radioButtonLeegPeriodeWeetIkNiet: '#extra_wonen_leegstand_periode-weet_ik_niet1',
  radioButtonLeegZesMaandenOfLanger: '#extra_wonen_leegstand_periode-langer_dan_zes_maanden1',
  radioButtonNamensBewonerJa: '#extra_wonen_woonkwaliteit_namens_bewoner-ja1',
  radioButtonNamensBewonerNee: '#extra_wonen_woonkwaliteit_namens_bewoner-nee1',
  radioButtonOnlineJa: '#extra_wonen_vakantieverhuur_online_aangeboden-ja1',
  radioButtonOnlineNee: '#extra_wonen_vakantieverhuur_online_aangeboden-nee1',
  radioButtonToeristenJa: '#extra_wonen_vakantieverhuur_toeristen_aanwezig-ja1',
  radioButtonToeristenNee: '#extra_wonen_vakantieverhuur_toeristen_aanwezig-nee1',
  radioButtonToeristenWeetIkNiet: '#extra_wonen_vakantieverhuur_toeristen_aanwezig-weet_ik_niet1',
  radioButtonWanneerDoordeweeks: '#extra_wonen_vakantieverhuur_wanneer-doordeweeks1',
  radioButtonWanneerWeekend: '#extra_wonen_vakantieverhuur_wanneer-weekend1',
  radioButtonWanneerWisselend: '#extra_wonen_vakantieverhuur_wanneer-wisselend1',
};

export const WONEN_WONINGDELEN = {
  inputEigenaar: '#extra_wonen_woningdelen_eigenaar',
  inputTijdstip: '#extra_wonen_woningdelen_iemand_aanwezig',
  inputWatSpeeltZichAf: '#extra_wonen_woningdelen_vermoeden',
  radioButtonAantalPersonen1: '#extra_wonen_woningdelen_aantal_personen-een_persoon1',
  radioButtonAantalPersonen2: '#extra_wonen_woningdelen_aantal_personen-twee_personen1',
  radioButtonAantalPersonen3: '#extra_wonen_woningdelen_aantal_personen-drie_personen1',
  radioButtonAantalPersonen4: '#extra_wonen_woningdelen_aantal_personen-vier_personen1',
  radioButtonAantalPersonen5: '#extra_wonen_woningdelen_aantal_personen-vijf_of_meer_personen1',
  radioButtonAantalPersonenWeetNiet: '#extra_wonen_woningdelen_aantal_personen-weet_ik_niet1',
  radioButtonAdresHuurderJaZelfde: '#extra_wonen_woningdelen_adres_huurder-zelfde_adres1',
  radioButtonAdresHuurderJaAnder: '#extra_wonen_woningdelen_adres_huurder-ander_adres1',
  radioButtonAdresHuurderNee: '#extra_wonen_woningdelen_adres_huurder-weet_ik_niet1',
  radioButtonAndereBewonersJa: '#extra_wonen_woningdelen_wisselende_bewoners-ja1',
  radioButtonAndereBewonersNee: '#extra_wonen_woningdelen_wisselende_bewoners-nee1',
  radioButtonAndereBewonersWeetNiet: '#extra_wonen_woningdelen_wisselende_bewoners-weet_ik_niet1',
  radioButtonFamilieJa: '#extra_wonen_woningdelen_bewoners_familie-ja1',
  radioButtonFamilieNee: '#extra_wonen_woningdelen_bewoners_familie-nee1',
  radioButtonFamilieWeetNiet: '#extra_wonen_woningdelen_bewoners_familie-weet_ik_niet1',
  radioButtonTegelijkJa: '#extra_wonen_woningdelen_samenwonen-ja1',
  radioButtonTegelijkNee: '#extra_wonen_woningdelen_samenwonen-nee1',
  radioButtonTegelijkWeetNiet: '#extra_wonen_woningdelen_samenwonen-weet_ik_niet1',
};

export const WONEN_WONINGKWALITEIT = {
  inputGeenContact: '#extra_wonen_woonkwaliteit_geen_contact',
  labelMandatoryFieldGevaar: '[data-testid=extra_wonen_woonkwaliteit_direct_gevaar-required]',
  radioButtonBewonerJa: '#extra_wonen_woonkwaliteit_bewoner-ja1',
  radioButtonBewonerNee: '#extra_wonen_woonkwaliteit_bewoner-nee1',
  radioButtonContactJa: '#extra_wonen_woonkwaliteit_toestemming_contact-ja1',
  radioButtonContactNee: '#extra_wonen_woonkwaliteit_toestemming_contact-nee1',
  radioButtonGevaarJa: '#extra_wonen_woonkwaliteit_direct_gevaar-ja1',
  radioButtonGevaarNee: '#extra_wonen_woonkwaliteit_direct_gevaar-nee1',
  radioButtonKlachtGemeldJa: '#extra_wonen_woonkwaliteit_gemeld_bij_eigenaar-ja1',
  radioButtonKlachtGemeldNee: '#extra_wonen_woonkwaliteit_gemeld_bij_eigenaar-nee1',
  radioButtonNamensBewonerJa: '#extra_wonen_woonkwaliteit_namens_bewoner-ja1',
  radioButtonNamensBewonerNee: '#extra_wonen_woonkwaliteit_namens_bewoner-nee1',
};

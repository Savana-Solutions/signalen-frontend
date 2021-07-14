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
  errorSmallFile: '[data-testid=fileInputError]',
  errorGlobal: '[class*="GlobalError__ErrorItem"]',
  errorItem: '[data-testid$="-required"]',
  errorLocation: '[data-testid="location-required"]',
  errorMail: '[data-testid="invalid-mail"]',
  imageAddressMarker: 'div[class="leaflet-pane leaflet-marker-pane"]',
  infoText: '[data-testid="infoText"]',
  inputPhoneNumber: '#phone',
  inputEmail: '#email',
  imageFileUpload: '[class*=Image__ImageContainer]',
  labelQuestion: 'label',
  mapContainer: '.leaflet-container',
  mapStaticImage: '[data-testid=mapStaticImage]',
  mapStaticMarker: '[data-testid=mapStaticMarker]',
  mapPreview: '[data-testid=map-preview]',
  radioButtonTijdstipNu: '#datetime-Nu',
  radioButtonTijdstipEerder: '#datetime-Eerder',
  siteFooter: '[data-testid="siteFooter"]',
  siteHeader: '[data-testid="siteHeader"]',
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
  radioButtonBellenNietNu: '#extra_bedrijven_horeca_muziek_geluidmeting_ja-not_now',
  radioButtonContactJa: '#extra_bedrijven_horeca_muziek_geluidmeting_muziek-ja',
  radioButtonContactNee: '#extra_bedrijven_horeca_muziek_geluidmeting_installaties-nee',
  radioButtonHoreca: '#extra_bedrijven_horeca_wat-horecabedrijf',
  radioButtonAnderBedrijf: '#extra_bedrijven_horeca_wat-ander_soort_bedrijf',
  radioButtonEvenement: '#extra_bedrijven_horeca_wat-evenement_festival_markt',
  radioButtonGeinformeerdJa: '#extra_bedrijven_horeca_muziek_evenement-ja',
  radioButtonIetsAnders: '#extra_bedrijven_horeca_wat-iets_anders',
  radioButtonVakerJa: '#extra_bedrijven_horeca_vaker-ja',
  radioButtonVakerNee: '#extra_bedrijven_horeca_vaker-nee',
};

export const BOTEN = {
  inputNaamBoot: '#extra_boten_snelheid_naamboot',
  inputNaamRederij: '#extra_boten_snelheid_rederij',
  inputNogMeer: '[id^="extra_boten_"][id$="_meer"]',
  radioButtonOverig: '#extra_boten_snelheid_typeboot-overig',
  radioButtonPlezierVaart: '#extra_boten_snelheid_typeboot-pleziervaart',
  radioButtonRondvaartboot: '#extra_boten_snelheid_typeboot-rondvaartboot_of_salonboot',
  radioButtonVrachtschip: '#extra_boten_snelheid_typeboot-vrachtschip_of_binnenvaartschip',
};

export const BRUGGEN = {
  inputBrugId: '#extra_brug',
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
  radioButtonNieuwNietjeJa: '#extra_fietsrek_aanvragen-ja',
};

export const JONGEREN = {
  checkBoxVaker: '#extra_personen_overig_vaker-ja',
  inputMoment: '#extra_personen_overig_vaker_momenten',
  radioButtonAantalPersonen: '#extra_personen_overig-4-6',
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
  radioButtonGevaarlijkAanrijding: '#extra_klok-is_gevolg_van_aanrijding',
  radioButtonGevaarlijkDeurtje: '#extra_klok-deurtje_weg_of_open',
  radioButtonGevaarlijkLosseKabels: '#extra_klok-losse_kabels_zichtbaar_of_lamp_los',
  radioButtonGevaarlijkNietGevaarlijk: '#extra_klok-niet_gevaarlijk',
  radioButtonGevaarlijkOpGrondOfScheef: '#extra_klok-klok_op_grond_of_scheef',
  radioButtonProbleemBeschadigd: '#extra_klok_probleem-klok_is_zichtbaar_beschadigd',
  radioButtonProbleemNietOpTijd: '#extra_klok_probleem-klok_staat_niet_op_tijd_of_stil',
  radioButtonProbleemOverig: '#extra_klok_probleem-overig',
};

export const LANTAARNPAAL = {
  checkBoxNietOpKaart: '#extra_straatverlichting_niet_op_kaart',
  iconAlreadyReported: '[alt="Dit object heeft een openstaande melding"]',
  inputLampNummer1: '#extra_straatverlichting_niet_op_kaart_nummer',
  inputLampNummer2: '#extra_straatverlichting_niet_op_kaart_nummer-2',
  labelMandatoryField: '[data-testid="extra_straatverlichting_probleem-required"]',
  legendContentText: '.legend-content-text',
  legendHeader: '.legend-header',
  mapSelectLamp: '[data-testid=mapSelect]',
  markerOnMap: '.leaflet-marker-icon',
  radioButtonProbleemBeschadigd: '#extra_straatverlichting_probleem-lamp_is_zichtbaar_beschadigd',
  radioButtonProbleemBrandtOverdag: '#extra_straatverlichting_probleem-lamp_brandt_overdag',
  radioButtonProbleemDoetNiet: '#extra_straatverlichting_probleem-lamp_doet_het_niet',
  radioButtonProbleemLichthinder: '#extra_straatverlichting_probleem-geeft_lichthinder',
  radioButtonProbleemOverig: '#extra_straatverlichting_probleem-overig',
  radioButtonGevaarlijkAanrijding: '#extra_straatverlichting-is_gevolg_van_aanrijding',
  radioButtonGevaarlijkAantalLichtenpunten: '#extra_straatverlichting_hoeveel-meerdere_lichtpunten',
  radioButtonGevaarlijk3OfMeerKapot: '#extra_straatverlichting-drie_of_meer_kapot',
  radioButtonGevaarlijkOpGrond: '#extra_straatverlichting-lamp_op_grond_of_scheef',
  radioButtonGevaarlijkDeur: '#extra_straatverlichting-deurtje_weg_of_open',
  radioButtonGevaarlijkLosseKabels: '#extra_straatverlichting-losse_kabels_zichtbaar_of_lamp_los',
  radioButtonNietGevaarlijk: '#extra_straatverlichting-niet_gevaarlijk',
};

export const OVERLAST_DIEREN = {
  radioButtonWoningWespen: '#extra_dieren_waar_wespen-woning',
  radioButtonOpenbareRuimteWespen: '#extra_dieren_waar_wespen-openbaar',
  radioButtonWoningDuiven: '#extra_dieren_waar_duiven-woning',
  radioButtonOpenbareRuimteDuiven: '#extra_dieren_waar_duiven-openbaar',
};

export const STANK_OVERLAST = {
  inputGeur: '#extra_bedrijven_horeca_stank',
  inputOorzaakGeur: '#extra_bedrijven_horeca_stank_oorzaak',
  inputWeersomstandigheden: '#extra_bedrijven_horeca_stank_weer',
  radioButtonRaamOpen: '#extra_bedrijven_horeca_stank_ramen-ja',
  radioButtonRaamGesloten: '#extra_bedrijven_horeca_stank_ramen-nee',
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
  radioButtonAanrijding: '#extra_verkeerslicht-is_gevolg_van_aanrijding',
  radioButtonOpGrond: '#extra_verkeerslicht-verkeerslicht_op_grond_of_scheef',
  radioButtonDeur: '#extra_verkeerslicht-deurtje_weg_of_open',
  radioButtonLosseKabels: '#extra_verkeerslicht-losse_kabels_zichtbaar_of_lamp_los',
  radioButtonNietGevaarlijk: '#extra_verkeerslicht-niet_gevaarlijk',
  radioButtonEenLichtpunt: '#extra_verkeerslicht_hoeveel-1_lichtpunt',
  radioButtonTypeAuto: '#extra_verkeerslicht_welk-auto',
  radioButtonTypeFiets: '#extra_verkeerslicht_welk-fiets',
  radioButtonTypeTramBus: '#extra_verkeerslicht_welk-tram_bus',
  radioButtonTypeVoetganger: '#extra_verkeerslicht_welk-voetganger',
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
  radioButtonBewonerJa: '#extra_wonen_woonkwaliteit_bewoner-ja',
  radioButtonBewonerNee: '#extra_wonen_woonkwaliteit_bewoner-nee',
  radioButtonBewoningJa: '#extra_wonen_vakantieverhuur_bewoning-ja',
  radioButtonBewoningNee: '#extra_wonen_vakantieverhuur_bewoning-nee',
  radioButtonBewoningWeetIkNiet: '#extra_wonen_vakantieverhuur_bewoning-weet_ik_niet',
  radioButtonContactJa: '#extra_wonen_woonkwaliteit_toestemming_contact-ja',
  radioButtonContactNee: '#extra_wonen_woonkwaliteit_toestemming_contact-nee',
  radioButtonGebruiktJa: '#extra_wonen_leegstand_woning_gebruik-ja',
  radioButtonGebruiktNee: '#extra_wonen_leegstand_woning_gebruik-nee',
  radioButtonGebruiktWeetIkNiet: '#extra_wonen_leegstand_woning_gebruik-weet_ik_niet',
  radioButtonLeegMinderDanZesMaanden: '#extra_wonen_leegstand_periode-korter_dan_zes_maanden',
  radioButtonLeegPeriodeWeetIkNiet: '#extra_wonen_leegstand_periode-weet_ik_niet',
  radioButtonLeegZesMaandenOfLanger: '#extra_wonen_leegstand_periode-langer_dan_zes_maanden',
};

export const WONEN_ONDERVERHUUR = {
  inputAdresHuurder: '#extra_wonen_onderhuur_adres_huurder',
  inputHuurder: '#extra_wonen_onderhuur_naam_huurder',
  inputNamen: '#extra_wonen_onderhuur_naam_bewoners',
  inputTijdstip: '#extra_wonen_onderhuur_iemand_aanwezig',
  radioButtonAantalPersonen1: '#extra_wonen_onderhuur_aantal_personen-een_persoon',
  radioButtonAantalPersonen2: '#extra_wonen_onderhuur_aantal_personen-twee_personen',
  radioButtonAantalPersonen3: '#extra_wonen_onderhuur_aantal_personen-drie_personen',
  radioButtonAantalPersonen4: '#extra_wonen_onderhuur_aantal_personen-vier_personen',
  radioButtonAantalPersonen5: '#extra_wonen_onderhuur_aantal_personen-vijf_of_meer_personen',
  radioButtonAantalPersonenWeetNiet: '#extra_wonen_onderhuur_aantal_personen-weet_ik_niet',
  radioButtonAdresHuurderJaZelfde: '#extra_wonen_onderhuur_huurder_woont-aangegeven_adres',
  radioButtonAdresHuurderJaAnder: '#extra_wonen_onderhuur_huurder_woont-ander_adres',
  radioButtonAdresHuurderNee: '#extra_wonen_onderhuur_huurder_woont-weet_ik_niet',
  radioButtonFamilieJa: '#extra_wonen_onderhuur_bewoners_familie-ja',
  radioButtonFamilieNee: '#extra_wonen_onderhuur_bewoners_familie-nee',
  radioButtonFamilieWeetNiet: '#extra_wonen_onderhuur_bewoners_familie-weet_ik_niet',
  radioButtonHoeLangMinderZesMaanden: '#extra_wonen_onderhuur_woon_periode-korter_dan_zes_maanden',
  radioButtonHoeLangLangerZesMaanden: '#extra_wonen_onderhuur_woon_periode-langer_dan_zes_maanden',
  radioButtonHoeLangWeetNiet: '#extra_wonen_onderhuur_woon_periode-weet_ik_niet',
};

export const WONEN_OVERIG = {
  radioButtonAchterstalligOnderhoud: '#wonen_overig-woningkwaliteit',
  radioButtonCrimineleBewoning: '#wonen_overig-crimineleBewoning',
  radioButtonIllegaleOnderhuur: '#wonen_overig-onderhuur',
  radioButtonLeegstand: '#wonen_overig-leegstand',
  radioButtonToeristischeVerhuur: '#wonen_overig-vakantieverhuur',
  radioButtonWoningdelen: '#wonen_overig-woningdelen',
};

export const WONEN_VAKANTIEVERHUUR = {
  inputBewoner: '#extra_wonen_vakantieverhuur_naam_bewoner',
  inputLink: '#extra_wonen_vakantieverhuur_link_advertentie',
  labelMandatoryFieldInternet: '[data-testid=extra_wonen_vakantieverhuur_online_aangeboden-required]',
  labelMandatoryFieldToeristenAanwezig: '[data-testid=extra_wonen_vakantieverhuur_toeristen_aanwezig-required]',
  labelMandatoryFieldToeristenHoeveelheid: '[data-testid=extra_wonen_vakantieverhuur_aantal_mensen-required]',
  labelMandatoryFieldToeristenVaker: '[data-testid=extra_wonen_vakantieverhuur_hoe_vaak-required]',
  labelMandatoryFieldWonen: '[data-testid=extra_wonen_vakantieverhuur_bewoning-required]',
  radioButtonBewoningJa: '#extra_wonen_vakantieverhuur_bewoning-ja',
  radioButtonBewoningNee: '#extra_wonen_vakantieverhuur_bewoning-nee',
  radioButtonBewoningWeetIkNiet: '#extra_wonen_vakantieverhuur_bewoning-weet_ik_niet',
  radioButtonHoeVaakDagelijks: '#extra_wonen_vakantieverhuur_hoe_vaak-dagelijks',
  radioButtonHoeVaakEersteKeer: '#extra_wonen_vakantieverhuur_hoe_vaak-eerste_keer',
  radioButtonHoeVaakMaandelijks: '#extra_wonen_vakantieverhuur_hoe_vaak-maandelijks',
  radioButtonHoeVaakWekelijks: '#extra_wonen_vakantieverhuur_hoe_vaak-wekelijks',
  radioButtonHoeveelVierOfMinder: '#extra_wonen_vakantieverhuur_aantal_mensen-vier_of_minder',
  radioButtonHoeveelVijfOfMeer: '#extra_wonen_vakantieverhuur_aantal_mensen-vijf_of_meer',
  radioButtonKlachtGemeldJa: '#extra_wonen_woonkwaliteit_gemeld_bij_eigenaar-ja',
  radioButtonKlachtGemeldNee: '#extra_wonen_woonkwaliteit_gemeld_bij_eigenaar-nee',
  radioButtonLeegMinderDanZesMaanden: '#extra_wonen_leegstand_periode-korter_dan_zes_maanden',
  radioButtonLeegPeriodeWeetIkNiet: '#extra_wonen_leegstand_periode-weet_ik_niet',
  radioButtonLeegZesMaandenOfLanger: '#extra_wonen_leegstand_periode-langer_dan_zes_maanden',
  radioButtonNamensBewonerJa: '#extra_wonen_woonkwaliteit_namens_bewoner-ja',
  radioButtonNamensBewonerNee: '#extra_wonen_woonkwaliteit_namens_bewoner-nee',
  radioButtonOnlineJa: '#extra_wonen_vakantieverhuur_online_aangeboden-ja',
  radioButtonOnlineNee: '#extra_wonen_vakantieverhuur_online_aangeboden-nee',
  radioButtonToeristenJa: '#extra_wonen_vakantieverhuur_toeristen_aanwezig-ja',
  radioButtonToeristenNee: '#extra_wonen_vakantieverhuur_toeristen_aanwezig-nee',
  radioButtonToeristenWeetIkNiet: '#extra_wonen_vakantieverhuur_toeristen_aanwezig-weet_ik_niet',
  radioButtonWanneerDoordeweeks: '#extra_wonen_vakantieverhuur_wanneer-doordeweeks',
  radioButtonWanneerWeekend: '#extra_wonen_vakantieverhuur_wanneer-weekend',
  radioButtonWanneerWisselend: '#extra_wonen_vakantieverhuur_wanneer-wisselend',
};

export const WONEN_WONINGDELEN = {
  inputEigenaar: '#extra_wonen_woningdelen_eigenaar',
  inputTijdstip: '#extra_wonen_woningdelen_iemand_aanwezig',
  inputWatSpeeltZichAf: '#extra_wonen_woningdelen_vermoeden',
  radioButtonAantalPersonen1: '#extra_wonen_woningdelen_aantal_personen-een_persoon',
  radioButtonAantalPersonen2: '#extra_wonen_woningdelen_aantal_personen-twee_personen',
  radioButtonAantalPersonen3: '#extra_wonen_woningdelen_aantal_personen-drie_personen',
  radioButtonAantalPersonen4: '#extra_wonen_woningdelen_aantal_personen-vier_personen',
  radioButtonAantalPersonen5: '#extra_wonen_woningdelen_aantal_personen-vijf_of_meer_personen',
  radioButtonAantalPersonenWeetNiet: '#extra_wonen_woningdelen_aantal_personen-weet_ik_niet',
  radioButtonAdresHuurderJaZelfde: '#extra_wonen_woningdelen_adres_huurder-zelfde_adres',
  radioButtonAdresHuurderJaAnder: '#extra_wonen_woningdelen_adres_huurder-ander_adres',
  radioButtonAdresHuurderNee: '#extra_wonen_woningdelen_adres_huurder-weet_ik_niet',
  radioButtonAndereBewonersJa: '#extra_wonen_woningdelen_wisselende_bewoners-ja',
  radioButtonAndereBewonersNee: '#extra_wonen_woningdelen_wisselende_bewoners-nee',
  radioButtonAndereBewonersWeetNiet: '#extra_wonen_woningdelen_wisselende_bewoners-weet_ik_niet',
  radioButtonFamilieJa: '#extra_wonen_woningdelen_bewoners_familie-ja',
  radioButtonFamilieNee: '#extra_wonen_woningdelen_bewoners_familie-nee',
  radioButtonFamilieWeetNiet: '#extra_wonen_woningdelen_bewoners_familie-weet_ik_niet',
  radioButtonTegelijkJa: '#extra_wonen_woningdelen_samenwonen-ja',
  radioButtonTegelijkNee: '#extra_wonen_woningdelen_samenwonen-nee',
  radioButtonTegelijkWeetNiet: '#extra_wonen_woningdelen_samenwonen-weet_ik_niet',
};

export const WONEN_WONINGKWALITEIT = {
  inputGeenContact: '#extra_wonen_woonkwaliteit_geen_contact',
  labelMandatoryFieldGevaar: '[data-testid=extra_wonen_woonkwaliteit_direct_gevaar-required]',
  radioButtonBewonerJa: '#extra_wonen_woonkwaliteit_bewoner-ja',
  radioButtonBewonerNee: '#extra_wonen_woonkwaliteit_bewoner-nee',
  radioButtonContactJa: '#extra_wonen_woonkwaliteit_toestemming_contact-ja',
  radioButtonContactNee: '#extra_wonen_woonkwaliteit_toestemming_contact-nee',
  radioButtonGevaarJa: '#extra_wonen_woonkwaliteit_direct_gevaar-ja',
  radioButtonGevaarNee: '#extra_wonen_woonkwaliteit_direct_gevaar-nee',
  radioButtonKlachtGemeldJa: '#extra_wonen_woonkwaliteit_gemeld_bij_eigenaar-ja',
  radioButtonKlachtGemeldNee: '#extra_wonen_woonkwaliteit_gemeld_bij_eigenaar-nee',
  radioButtonNamensBewonerJa: '#extra_wonen_woonkwaliteit_namens_bewoner-ja',
  radioButtonNamensBewonerNee: '#extra_wonen_woonkwaliteit_namens_bewoner-nee',
};

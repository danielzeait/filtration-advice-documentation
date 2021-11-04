'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">howk documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d896e65935135000ad27586d2778729b"' : 'data-target="#xs-components-links-module-AppModule-d896e65935135000ad27586d2778729b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d896e65935135000ad27586d2778729b"' :
                                            'id="xs-components-links-module-AppModule-d896e65935135000ad27586d2778729b"' }>
                                            <li class="link">
                                                <a href="components/AdvancedSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdvancedSearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AirFlowDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AirFlowDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BeforePrintDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BeforePrintDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangeCaseDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangeCaseDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangeProviderDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangeProviderDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartReviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartReviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreditsSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreditsSummaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeedbackDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeedbackDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterTermsConditionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterTermsConditionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GeneralErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneralErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GenericListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenericListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderGeneralComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderGeneralComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderLoggedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderLoggedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HistogramComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistogramComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InstrumentHelpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstrumentHelpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InvoiceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InvoiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LeaveDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LeaveDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobilePlaceholderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MobilePlaceholderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PairedCaseInstrumentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PairedCaseInstrumentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaymentDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PdfHelperDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PdfHelperDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PdfViewerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PdfViewerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RedirectDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RedirectDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReplaceCostDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplaceCostDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportRejectedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportRejectedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestFilterOptionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestFilterOptionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SharedReportsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SharedReportsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SingleFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SingleFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubscriptionDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscriptionDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuccessDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuccessDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserSharedReportsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserSharedReportsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VersionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VersionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-819128e2b6d57b06f4aca49749b84e03"' : 'data-target="#xs-components-links-module-AuthModule-819128e2b6d57b06f4aca49749b84e03"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-819128e2b6d57b06f4aca49749b84e03"' :
                                            'id="xs-components-links-module-AuthModule-819128e2b6d57b06f4aca49749b84e03"' }>
                                            <li class="link">
                                                <a href="components/ConfirmRegisterPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmRegisterPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FaqsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecoverPasswordPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecoverPasswordPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TermsAndConditionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TermsAndConditionsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-819128e2b6d57b06f4aca49749b84e03"' : 'data-target="#xs-injectables-links-module-AuthModule-819128e2b6d57b06f4aca49749b84e03"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-819128e2b6d57b06f4aca49749b84e03"' :
                                        'id="xs-injectables-links-module-AuthModule-819128e2b6d57b06f4aca49749b84e03"' }>
                                        <li class="link">
                                            <a href="injectables/AuthProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChartsModule.html" data-type="entity-link" >ChartsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChartsModule-e1d08975fe9d26f2fbb7b4f5ec07638d"' : 'data-target="#xs-components-links-module-ChartsModule-e1d08975fe9d26f2fbb7b4f5ec07638d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChartsModule-e1d08975fe9d26f2fbb7b4f5ec07638d"' :
                                            'id="xs-components-links-module-ChartsModule-e1d08975fe9d26f2fbb7b4f5ec07638d"' }>
                                            <li class="link">
                                                <a href="components/AreaChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AreaChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BarChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BarChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartAirflowVsDpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartAirflowVsDpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartCostVsTimeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartCostVsTimeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartDpVsTimeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartDpVsTimeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartDustVsDpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartDustVsDpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComparisonBarChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComparisonBarChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComparisonDpVsTimeChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComparisonDpVsTimeChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FrequencyChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FrequencyChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GaugeChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GaugeChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HistogramChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistogramChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PieChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PieChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComparisonModule.html" data-type="entity-link" >ComparisonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComparisonModule-6fdc529dc3556b57d77c95cbe85d216a"' : 'data-target="#xs-components-links-module-ComparisonModule-6fdc529dc3556b57d77c95cbe85d216a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComparisonModule-6fdc529dc3556b57d77c95cbe85d216a"' :
                                            'id="xs-components-links-module-ComparisonModule-6fdc529dc3556b57d77c95cbe85d216a"' }>
                                            <li class="link">
                                                <a href="components/ComparisonListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComparisonListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewComparisonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewComparisonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilterModule.html" data-type="entity-link" >FilterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FilterModule-a20c4f9bb9fdc079d0d49131ae9d582c"' : 'data-target="#xs-components-links-module-FilterModule-a20c4f9bb9fdc079d0d49131ae9d582c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FilterModule-a20c4f9bb9fdc079d0d49131ae9d582c"' :
                                            'id="xs-components-links-module-FilterModule-a20c4f9bb9fdc079d0d49131ae9d582c"' }>
                                            <li class="link">
                                                <a href="components/FilterListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-77833291dfe9d2860d2b023e12dfedc2"' : 'data-target="#xs-components-links-module-HomeModule-77833291dfe9d2860d2b023e12dfedc2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-77833291dfe9d2860d2b023e12dfedc2"' :
                                            'id="xs-components-links-module-HomeModule-77833291dfe9d2860d2b023e12dfedc2"' }>
                                            <li class="link">
                                                <a href="components/HomeCounterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeCounterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VerticalSwipperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VerticalSwipperComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InstrumentModule.html" data-type="entity-link" >InstrumentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InstrumentModule-741364972d08f712bbe3566a471a93aa"' : 'data-target="#xs-components-links-module-InstrumentModule-741364972d08f712bbe3566a471a93aa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InstrumentModule-741364972d08f712bbe3566a471a93aa"' :
                                            'id="xs-components-links-module-InstrumentModule-741364972d08f712bbe3566a471a93aa"' }>
                                            <li class="link">
                                                <a href="components/InstrumentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstrumentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewInstrumentationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewInstrumentationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainPipesModule.html" data-type="entity-link" >MainPipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-MainPipesModule-db923ceed324d0fdf73065997511d9bf"' : 'data-target="#xs-pipes-links-module-MainPipesModule-db923ceed324d0fdf73065997511d9bf"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-MainPipesModule-db923ceed324d0fdf73065997511d9bf"' :
                                            'id="xs-pipes-links-module-MainPipesModule-db923ceed324d0fdf73065997511d9bf"' }>
                                            <li class="link">
                                                <a href="pipes/TitlePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TitlePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationsModule.html" data-type="entity-link" >NotificationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NotificationsModule-ca47aad5cd5e88c037ba146e681abbec"' : 'data-target="#xs-components-links-module-NotificationsModule-ca47aad5cd5e88c037ba146e681abbec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotificationsModule-ca47aad5cd5e88c037ba146e681abbec"' :
                                            'id="xs-components-links-module-NotificationsModule-ca47aad5cd5e88c037ba146e681abbec"' }>
                                            <li class="link">
                                                <a href="components/NotificationsInboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsInboxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationsSettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsSettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfileModule-ec815161ac25db3a33b4e8f4f1060cbe"' : 'data-target="#xs-components-links-module-ProfileModule-ec815161ac25db3a33b4e8f4f1060cbe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-ec815161ac25db3a33b4e8f4f1060cbe"' :
                                            'id="xs-components-links-module-ProfileModule-ec815161ac25db3a33b4e8f4f1060cbe"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BillingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BillingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompanyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompanyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreditCarDListPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreditCarDListPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogDeleteConfirmation.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogDeleteConfirmation</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PersonalInformationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersonalInformationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlansListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlansListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfilePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfilePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StripePaymentCreationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StripePaymentCreationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubscriptionsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscriptionsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserReportsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserReportsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProfileModule-ec815161ac25db3a33b4e8f4f1060cbe"' : 'data-target="#xs-injectables-links-module-ProfileModule-ec815161ac25db3a33b4e8f4f1060cbe"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProfileModule-ec815161ac25db3a33b4e8f4f1060cbe"' :
                                        'id="xs-injectables-links-module-ProfileModule-ec815161ac25db3a33b4e8f4f1060cbe"' }>
                                        <li class="link">
                                            <a href="injectables/AuthProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NewCardFormProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewCardFormProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PaymentProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SettingsProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReportsModule.html" data-type="entity-link" >ReportsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ReportsModule-cadabfa36f39a9b5feaf3f24a7319d7a"' : 'data-target="#xs-components-links-module-ReportsModule-cadabfa36f39a9b5feaf3f24a7319d7a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReportsModule-cadabfa36f39a9b5feaf3f24a7319d7a"' :
                                            'id="xs-components-links-module-ReportsModule-cadabfa36f39a9b5feaf3f24a7319d7a"' }>
                                            <li class="link">
                                                <a href="components/ReportFileDropperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportFileDropperComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportReviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportReviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ValidatorMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidatorMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResultsModule.html" data-type="entity-link" >ResultsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResultsModule-3ca00a64cfafd02e3b466da02e44624e"' : 'data-target="#xs-components-links-module-ResultsModule-3ca00a64cfafd02e3b466da02e44624e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResultsModule-3ca00a64cfafd02e3b466da02e44624e"' :
                                            'id="xs-components-links-module-ResultsModule-3ca00a64cfafd02e3b466da02e44624e"' }>
                                            <li class="link">
                                                <a href="components/ComparisonResultsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComparisonResultsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OptimizationResultsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OptimizationResultsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-d007c3ba76b01737d3aae8b478c89bd9"' : 'data-target="#xs-components-links-module-SharedModule-d007c3ba76b01737d3aae8b478c89bd9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-d007c3ba76b01737d3aae8b478c89bd9"' :
                                            'id="xs-components-links-module-SharedModule-d007c3ba76b01737d3aae8b478c89bd9"' }>
                                            <li class="link">
                                                <a href="components/AdvancedFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdvancedFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AirflowVsDpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AirflowVsDpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BottomPaginatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BottomPaginatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CaseActionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaseActionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CaseCostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaseCostComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CaseSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaseSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CaseStudyProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaseStudyProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CaseTimeLineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaseTimeLineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangeoutListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangeoutListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CurrentCycleValuesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurrentCycleValuesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomSnackBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomSnackBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomizeDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomizeDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DustVsDpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DustVsDpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmptyListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmptyListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterFinderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterFinderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterListReviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterListReviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterSummaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterTestReportsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterTestReportsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GaugeComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GaugeComponentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GeneralNewsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneralNewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HoboDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HoboDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InstrumentIndicatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstrumentIndicatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InstrumentSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstrumentSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InstrumentationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstrumentationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InstumentsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstumentsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginPageSonicuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPageSonicuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MervChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MervChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModelFilterFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModelFilterFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MonitoringComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MonitoringComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaginatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PopOverComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PopOverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileSelectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileSelectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SellersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SellersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SystemInformationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SystemInformationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SystemInformationSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SystemInformationSummaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableCostSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableCostSummaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UploadReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserOverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserWelcomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserWelcomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-d007c3ba76b01737d3aae8b478c89bd9"' : 'data-target="#xs-directives-links-module-SharedModule-d007c3ba76b01737d3aae8b478c89bd9"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-d007c3ba76b01737d3aae8b478c89bd9"' :
                                        'id="xs-directives-links-module-SharedModule-d007c3ba76b01737d3aae8b478c89bd9"' }>
                                        <li class="link">
                                            <a href="directives/DragDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DragDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/FocusMeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FocusMeDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HighlightDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HighlightDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SharedModule-d007c3ba76b01737d3aae8b478c89bd9"' : 'data-target="#xs-injectables-links-module-SharedModule-d007c3ba76b01737d3aae8b478c89bd9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-d007c3ba76b01737d3aae8b478c89bd9"' :
                                        'id="xs-injectables-links-module-SharedModule-d007c3ba76b01737d3aae8b478c89bd9"' }>
                                        <li class="link">
                                            <a href="injectables/AuthSonicuProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthSonicuProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CaseProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaseProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CommonProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommonProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ComparisonProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComparisonProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CustomErrorHandler.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomErrorHandler</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DashboardProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ExportFileProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExportFileProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FilterProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InstrumentProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstrumentProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LabPoints.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LabPoints</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoaderProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MetaDataProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaDataProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NavigationProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigationProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PairedCaseInstrumentProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PairedCaseInstrumentProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PaymentProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PdfComparisonCreator.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PdfComparisonCreator</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PdfConstructorProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PdfConstructorProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PdfCreator.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PdfCreator</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ReportsProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportsProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ResponsiveProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResponsiveProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SharedReportProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SharedReportProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SupplierUnitsProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupplierUnitsProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UtilsFunctions.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UtilsFunctions</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudyCaseModule.html" data-type="entity-link" >StudyCaseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StudyCaseModule-3eb8347f611e2ff26809358b11f3c04c"' : 'data-target="#xs-components-links-module-StudyCaseModule-3eb8347f611e2ff26809358b11f3c04c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StudyCaseModule-3eb8347f611e2ff26809358b11f3c04c"' :
                                            'id="xs-components-links-module-StudyCaseModule-3eb8347f611e2ff26809358b11f3c04c"' }>
                                            <li class="link">
                                                <a href="components/CaseListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaseListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewCaseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewCaseComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StudyCaseModule-3eb8347f611e2ff26809358b11f3c04c"' : 'data-target="#xs-injectables-links-module-StudyCaseModule-3eb8347f611e2ff26809358b11f3c04c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StudyCaseModule-3eb8347f611e2ff26809358b11f3c04c"' :
                                        'id="xs-injectables-links-module-StudyCaseModule-3eb8347f611e2ff26809358b11f3c04c"' }>
                                        <li class="link">
                                            <a href="injectables/CaseFormProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaseFormProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CaseProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaseProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ValidatorModule.html" data-type="entity-link" >ValidatorModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ComparisonResultsComponent.html" data-type="entity-link" >ComparisonResultsComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Airflow.html" data-type="entity-link" >Airflow</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterCost.html" data-type="entity-link" >FilterCost</a>
                            </li>
                            <li class="link">
                                <a href="classes/Instrument.html" data-type="entity-link" >Instrument</a>
                            </li>
                            <li class="link">
                                <a href="classes/Manufacturer.html" data-type="entity-link" >Manufacturer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Plan.html" data-type="entity-link" >Plan</a>
                            </li>
                            <li class="link">
                                <a href="classes/Report.html" data-type="entity-link" >Report</a>
                            </li>
                            <li class="link">
                                <a href="classes/SearchModel.html" data-type="entity-link" >SearchModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/Standard.html" data-type="entity-link" >Standard</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subscriptions.html" data-type="entity-link" >Subscriptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/System.html" data-type="entity-link" >System</a>
                            </li>
                            <li class="link">
                                <a href="classes/SystemFilter.html" data-type="entity-link" >SystemFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthProvider.html" data-type="entity-link" >AuthProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthSonicuProvider.html" data-type="entity-link" >AuthSonicuProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CaseFormProvider.html" data-type="entity-link" >CaseFormProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CaseProvider.html" data-type="entity-link" >CaseProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommonProvider.html" data-type="entity-link" >CommonProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ComparisonProvider.html" data-type="entity-link" >ComparisonProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomErrorHandler.html" data-type="entity-link" >CustomErrorHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardProvider.html" data-type="entity-link" >DashboardProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExportFileProvider.html" data-type="entity-link" >ExportFileProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Filter.html" data-type="entity-link" >Filter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilterProvider.html" data-type="entity-link" >FilterProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InstrumentProvider.html" data-type="entity-link" >InstrumentProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LabPoints.html" data-type="entity-link" >LabPoints</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoaderProvider.html" data-type="entity-link" >LoaderProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MatPaginatorIntlCro.html" data-type="entity-link" >MatPaginatorIntlCro</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MetaDataProvider.html" data-type="entity-link" >MetaDataProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NavigationProvider.html" data-type="entity-link" >NavigationProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NewCardFormProvider.html" data-type="entity-link" >NewCardFormProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link" >NotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PairedCaseInstrumentProvider.html" data-type="entity-link" >PairedCaseInstrumentProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentProvider.html" data-type="entity-link" >PaymentProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PdfComparisonCreator.html" data-type="entity-link" >PdfComparisonCreator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PdfConstructorProvider.html" data-type="entity-link" >PdfConstructorProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PdfCreator.html" data-type="entity-link" >PdfCreator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReportsProvider.html" data-type="entity-link" >ReportsProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResponsiveProvider.html" data-type="entity-link" >ResponsiveProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsProvider.html" data-type="entity-link" >SettingsProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SharedReportProvider.html" data-type="entity-link" >SharedReportProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SupplierUnitsProvider.html" data-type="entity-link" >SupplierUnitsProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilsFunctions.html" data-type="entity-link" >UtilsFunctions</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link" >ErrorInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/LoaderInterceptor.html" data-type="entity-link" >LoaderInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/NotificationsInterceptor.html" data-type="entity-link" >NotificationsInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthsGuard.html" data-type="entity-link" >AuthsGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LeaveGuardService.html" data-type="entity-link" >LeaveGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/ValidatorGuard.html" data-type="entity-link" >ValidatorGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DialogData.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileHandle.html" data-type="entity-link" >FileHandle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDeactivateComponent.html" data-type="entity-link" >IDeactivateComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
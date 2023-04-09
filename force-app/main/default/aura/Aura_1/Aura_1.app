<aura:application extends="force:slds">
<lightning:layout multipleRows="true">
<lightning:layoutItem size="12" class="a">
<c:aura_1_lightningButton/>
</lightning:layoutItem>


<lightning:layoutItem size="6">
<lightning:accordion activeSectionName="G">
        <lightning:accordionSection name="A" label="Accordion Title A">
        <c:aura_1_dataHandle/>
        </lightning:accordionSection>

        <lightning:accordionSection name="B" label="Accordion Title B">
        <c:aura_1_input/>
        </lightning:accordionSection>

        <lightning:accordionSection name="C" label="Accordion Title C">
        <c:aura_1_calculator/>
        </lightning:accordionSection>
        <lightning:accordionSection name="D" label="Accordion Title D">
        <c:aura_1_auraId/>
        </lightning:accordionSection>
        <lightning:accordionSection name="E" label="Accordion Title E">
        <c:aura_1_auraif/>
        </lightning:accordionSection>
        <lightning:accordionSection name="F" label="Accordion Title F">
        <c:aura_1_css/>
        </lightning:accordionSection>
         <lightning:accordionSection name="G" label="Accordion Title G">
        <c:aura_1_sObject/>
        </lightning:accordionSection>


</lightning:accordion>
</lightning:layoutItem>
<lightning:layoutItem size="6">

<lightning:tabset selectedTabId="one">

<lightning:tab label="first one" id="one">
<c:aura_1_sObject/>
</lightning:tab>

<lightning:tab label="second one" id="two">
<c:aura_1_sObject1/>
</lightning:tab>

<lightning:tab label="third one" id="third">
<c:aura_1_lightningButton/>
</lightning:tab>

<lightning:tab label="fourth one" id="forth">
<c:aura_1_iteration/>
</lightning:tab>

<lightning:tab label="fifth one" id="fifth">
<c:aura_1_account/>
</lightning:tab>

<lightning:tab label="six one" id="six">
<c:aura_1_iteration/>
</lightning:tab>

<lightning:tab label="seven one" id="seven">
<c:aura_1_iteration/>
</lightning:tab>

<lightning:tab label="eight one" id="eight">
<c:aura_1_iteration/>
</lightning:tab>

<lightning:tab label="nine one" id="nine">
<c:aura_1_iteration/>
</lightning:tab>

<lightning:tab label="ten one" id="ten">
<c:aura_1_craeteaccount/>
</lightning:tab>

<lightning:tab label="eleven one" id="eleven">
<c:aura_1_iteration/>
</lightning:tab>
</lightning:tabset>
</lightning:layoutItem>
</lightning:layout>

</aura:application>	
